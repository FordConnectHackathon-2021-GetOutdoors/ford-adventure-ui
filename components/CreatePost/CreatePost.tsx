/* eslint-disable react/display-name */
import { useContext, useState, forwardRef, useImperativeHandle, useRef } from "react";
import { ModalOverlay } from "@chakra-ui/core";
import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@chakra-ui/react";
import { MentionsInput, Mention, SuggestionDataItem } from 'react-mentions';
import colors from "themes/colors";
import { ImageContext } from "utils/ImageContext";
import { FileProps } from "utils/CommonProps";

import classNames from './CreatePost.module.css';

import { emojiJSON } from './emojis';

const neverMatchingRegex = /($a)/;

export const CreatePost = forwardRef((props: FileProps, ref) => {
    const { uploadImage } = useContext(ImageContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState("md");
    const [content, setContent] = useState("");
    const [emojis, setEmojis] = useState(emojiJSON['emojis']);
    const initialRef = useRef();

    const { fileName, ext, imageBase64 } = props;

    useImperativeHandle(ref, () => ({
        openHandler(newSize: string) {
            setSize(newSize);
            onOpen();
        }
    }));

    const handlePostContentChange = (e: any) => {
        setContent(e.target.value);
    };

    const submitPost = () => {
        uploadImage(fileName, ext, imageBase64, content);
        onClose();
    };

    const [followers] = useState([
        { id: 'matt', display: 'Matt Wood' }, 
        { id: 'kori', display: 'Kori Skeffington' },
        { id: 'brad', display: 'Bradley Horlander' },
        { id: 'pushkar', display: 'Pushkar Atul Mungikar' } 
    ]);
    const [tags] = useState([
        { id: 'denvermountains', display: 'denvermountains' }, 
        { id: 'vermontfoliage', display: 'vermontfoliage' },
        { id: 'utahdesert', display: 'utahdesert' },
        { id: 'dallascityline', display: 'dallascityline' },
        { id: 'streetsofnewyork', display: 'streetsofnewyork' } 
    ]); 

    const queryEmojis = (query, callback) => {
        if (query.length === 0) return
    
        const matches = emojis
          .filter((emoji) => {
            return emoji.name.indexOf(query.toLowerCase()) > -1
          })
          .slice(0, 10)
        return matches.map(({ emoji }) => ({ id: emoji }))
    };
    
    return (
        <>
            <Modal onClose={onClose} size={size} isOpen={isOpen} initialFocusRef={initialRef.current} isCentered>
                <ModalOverlay />
                <ModalContent ml="2" mr="2">
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={props.imageBase64?.toString()} alt="photo"/>
                        {/* <Textarea
                            value={content}
                            onChange={handlePostContentChange}
                            placeholder="Post your adventure experience..."
                            w="100%"
                            mt="4"
                        /> */}
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
                                markup='@[__id__]'
                                displayTransform={(id) => `@${id}`}
                            />
                            <Mention
                                trigger="#"
                                data={tags}
                                className={classNames.mentions__mention}
                                appendSpaceOnAdd
                                markup='#[__id__]'
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
                        <Button 
                            onClick={submitPost} 
                            bgColor={colors.bg.darknavy} 
                            color={colors.text.white}
                            w="5em"
                            h="2.5em"
                            ref={initialRef.current}
                        >Post</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
});
