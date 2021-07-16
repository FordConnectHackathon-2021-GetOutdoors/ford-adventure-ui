// @ts-nocheck
/* eslint-disable react/display-name */
import {
  useContext,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { IoLocationOutline } from "react-icons/io5";
import { ModalOverlay } from "@chakra-ui/core";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
  Tag,
  TagCloseButton,
  TagLabel,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { MentionsInput, Mention } from "react-mentions";
import colors from "themes/colors";
import { NotificationContext } from "utils/NotificationContext";
import { ImageContext } from "utils/ImageContext";
import { MapContext } from "utils/MapContext";
import { FileProps } from "utils/CommonProps";

import classNames from "./CreatePost.module.css";

import { emojiJSON } from "./emojis";

const neverMatchingRegex = /($a)/;

export const CreatePost = forwardRef((props: FileProps, ref) => {
  const { showCustom } = useContext(NotificationContext);
  const { uploadImage, getTags } = useContext(ImageContext);
  const { getShortLocationPromise } = useContext(MapContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");
  const [content, setContent] = useState("");
  const [emojis, setEmojis] = useState(emojiJSON["emojis"]);
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentLocationCoords, setCurrentLocationCoords] = useState({
    lat: -1,
    lng: -1,
  });
  const initialRef = useRef();

  const { fileName, ext, imageBase64 } = props;

  const [tags, setTags] = useState([]);
  const [followers] = useState([
    { id: "matt", display: "Matt Wood" },
    { id: "kori", display: "Kori Skeffington" },
    { id: "brad", display: "Bradley Horlander" },
    { id: "pushkar", display: "Pushkar Atul Mungikar" },
  ]);

  useImperativeHandle(ref, () => ({
    openHandler(newSize: string) {
      setSize(newSize);
      onOpen();
    },
  }));

  const handlePostContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const submitPost = () => {
    uploadImage(
      fileName,
      ext,
      imageBase64,
      content,
      currentLocationCoords.lat,
      currentLocationCoords.lng
    );
    onClose();
  };

  const queryEmojis = (query, callback) => {
    if (query.length === 0) return;

    const matches = emojis
      .filter((emoji) => {
        return emoji.name.indexOf(query.toLowerCase()) > -1;
      })
      .slice(0, 10);
    return matches.map(({ emoji }) => ({ id: emoji }));
  };

  return (
    <>
      <Modal
        onClose={onClose}
        size={size}
        isOpen={isOpen}
        initialFocusRef={initialRef.current}
        isCentered
      >
        <ModalOverlay />
        <ModalContent ml="2" mr="2">
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={props.imageBase64?.toString()} alt="photo" />
            <MentionsInput
              value={content}
              onChange={handlePostContentChange}
              placeholder="Post your adventure experience..."
              className="mentions"
              classNames={classNames}
              a11ySuggestionsListLabel={"Suggested mentions"}
            >
              <Mention
                trigger="@"
                data={followers}
                className={classNames.mentions__mention}
                appendSpaceOnAdd
                markup="<mention>__id__</mention>"
                displayTransform={(id) => `@${id}`}
              />
              <Mention
                trigger="#"
                data={tags}
                className={classNames.mentions__mention}
                appendSpaceOnAdd
                markup="<hashtag>__id__</hashtag>"
                displayTransform={(id) => `#${id}`}
              />
              <Mention
                trigger=":"
                markup="__id__"
                regex={neverMatchingRegex}
                data={queryEmojis}
              />
            </MentionsInput>
          </ModalBody>
          <ModalFooter paddingTop="0">
            <Flex width="100%">
              <Box>
                <HStack>
                  <Button
                    iconSpacing="1"
                    leftIcon={<IoLocationOutline size="2em" />}
                    variant="unstyled"
                    onClick={() => {
                      const location =
                        window.navigator && window.navigator.geolocation;
                      if (location) {
                        location.getCurrentPosition(
                          async (position) => {
                            setCurrentLocationCoords({
                              lat: position.coords.latitude,
                              lng: position.coords.longitude,
                            });
                            const shortLocation = await getShortLocationPromise(
                              position.coords.latitude,
                              position.coords.longitude
                            );
                            setCurrentLocation(shortLocation);
                          },
                          (error) => {
                            console.log(error.message);
                            showCustom({ 
                              title: 'Something went wrong', 
                              message: 'Sorry, unable to tag your location !', 
                              status: "ERROR"
                            });
                          }
                        );
                      }
                    }}
                  />
                  {!!currentLocation && (
                    <Center>
                      <Tag>
                        <TagLabel>{currentLocation}</TagLabel>
                        <TagCloseButton
                          onClick={() => setCurrentLocation("")}
                        />
                      </Tag>
                    </Center>
                  )}
                </HStack>
              </Box>
              <Spacer />
              <Box>
                <Button
                  onClick={submitPost}
                  bgColor={colors.bg.darknavy}
                  color={colors.text.white}
                  w="5em"
                  h="2.5em"
                  ref={initialRef.current}
                >
                  Post
                </Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
