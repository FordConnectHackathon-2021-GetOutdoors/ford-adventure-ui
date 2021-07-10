import { IconButton, useBreakpointValue, Input } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { CreatePost } from "components/CreatePost/CreatePost";
import colors from "themes/colors";
import { FileProps } from "utils/CommonProps";
import { NotificationContext } from "utils/NotificationContext";
import { DeviceContext } from "utils/DeviceContext";

const getFileProps = (file: any) => {
    if (file) {
        const name = file.name;
        const lastDot = name.lastIndexOf('.');
        const fileName = name.substring(0, lastDot);
        const ext = name.substring(lastDot + 1);
        return {
            file,
            fileName,
            ext,
        } as FileProps;
    }
    return {} as FileProps;
};
  
export function PhotoUpload() {
    const [fileProps, setFileProps] = useState({} as FileProps);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const childRef = useRef({
        openHandler: (size: string) => {}
    });
    const { showError } = useContext(NotificationContext);
    const { isBigScreen, isDesktopOrLaptop } = useContext(DeviceContext);

    return (
        <> 
            <CreatePost ref={childRef} {...fileProps} />
            <Input
                name="photo-upload"
                type={'file'}
                multiple={false}
                hidden
                accept={'image/*'}
                ref={(refEl) => {
                    inputRef.current = refEl;
                }}
                key={Date.now()}
                onChange={e => {
                    const file = e && e.target && e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function () {
                            const { fileName, ext } = getFileProps(file);
                            setFileProps({ 
                                fileName,
                                ext,
                                imageBase64: reader.result 
                            } as FileProps);

                            if (isBigScreen || isDesktopOrLaptop) {
                                childRef.current.openHandler("xl");
                            } else {
                                childRef.current.openHandler("md");
                            }
                        };
                        reader.onerror = function (error) {
                            showError(error);
                        };
                        reader.readAsDataURL(file);
                    }
                }}
            />
            <IconButton
                border={`1px solid ${colors.text.lightGrey}`}
                boxShadow={`3px 3px 3px ${colors.text.black}`}
                position="fixed"
                bottom="10"
                right="10"
                zIndex="10"
                bgColor={colors.bg.white}
                isRound={true}
                size={useBreakpointValue(['lg', 'lg', 'lg', 'lg'])}
                aria-label="Upload Photo"
                icon={<FaCamera />}
                onClick={() => inputRef.current?.click()}
                _focus={{ borderColor: colors.text.grey }}
            />
        </>
    );
}
