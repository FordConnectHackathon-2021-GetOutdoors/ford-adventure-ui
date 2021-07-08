import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";
import colors from "themes/colors";
import { PhotoProps } from "utils/CommonProps";

export function PhotoUpload({ photoUploadHandler }: PhotoProps) {
    const buttonSize = useBreakpointValue(['lg', 'lg', 'lg', 'lg']);
    const border = `1px solid ${colors.text.lightGrey}`;
    const boxShadow = `3px 3px 3px ${colors.text.black}`;
    return (
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
            onClick={photoUploadHandler}
            _focus={{ borderColor: colors.text.grey }}
        />
    );
}
