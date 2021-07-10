/* eslint-disable react/display-name */
import { useContext, useState, forwardRef, useImperativeHandle, useRef } from "react";
import { ModalOverlay } from "@chakra-ui/core";
import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@chakra-ui/react";
import colors from "themes/colors";
import { ImageContext } from "utils/ImageContext";
import { FileProps } from "utils/CommonProps";

export const CreatePost = forwardRef((props: FileProps, ref) => {
    const { uploadImage } = useContext(ImageContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState("md");
    const [content, setContent] = useState("");
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

    return (
        <>
            <Modal onClose={onClose} size={size} isOpen={isOpen} initialFocusRef={initialRef.current} isCentered>
                <ModalOverlay />
                <ModalContent ml="2" mr="2">
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={props.imageBase64?.toString()} alt="photo"/>
                        <Textarea
                            value={content}
                            onChange={handlePostContentChange}
                            placeholder="Post your adventure experience..."
                            w="100%"
                            mt="4"
                        />
                    </ModalBody>
                    <ModalFooter>
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
