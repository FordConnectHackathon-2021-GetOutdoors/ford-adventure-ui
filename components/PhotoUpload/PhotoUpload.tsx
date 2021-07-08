import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import colors from "themes/colors";
import { ImageContext } from "utils/ImageContext";
import { NotificationContext } from "utils/NotificationContext";

const getBase64 = (e: any, uploadImage: any, showError: any) => {
    const file = e.target.files[0];
    const name = file.name;
    const lastDot = name.lastIndexOf('.');
    const fileName = name.substring(0, lastDot);
    const ext = name.substring(lastDot + 1);
    
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      uploadImage(fileName, ext, reader.result);
    };
    reader.onerror = function (error) {
        showError(error);
    }
};
  
export function PhotoUpload() {
    const { showError } = useContext(NotificationContext);
    const { uploadImage } = useContext(ImageContext);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const buttonSize = useBreakpointValue(['lg', 'lg', 'lg', 'lg']);
    const border = `1px solid ${colors.text.lightGrey}`;
    const boxShadow = `3px 3px 3px ${colors.text.black}`;
    return (
        <> 
            <input
                name="photo-upload"
                type={'file'}
                multiple={false}
                hidden
                accept={'image/*'}
                ref={(e) => {
                    inputRef.current = e;
                }}
                onChange={(e) => getBase64(e, uploadImage, showError)}
            />
            <IconButton
                position="fixed"
                bottom="10"
                right="10"
                zIndex="10"
                bgColor={colors.bg.white}
                border={border}
                boxShadow={boxShadow}
                isRound={true}
                size={buttonSize}
                aria-label="Upload Photo"
                icon={<FaCamera />}
                onClick={() => inputRef.current?.click()}
                _focus={{ borderColor: colors.text.grey }}
            />
        </>
    );
}
