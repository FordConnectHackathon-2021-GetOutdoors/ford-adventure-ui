import { Img } from "@chakra-ui/react";

export function Logo() {
  return (
    <Img
        src="images/ford-logo.svg" 
        w={{
            base: "3.5em", 
            md: "3.5em", 
            lg: "3.5em", 
            xl: "3.5em"
        }} 
        h={{
            base: "3.5em", 
            md: "3.5em", 
            lg: "3.5em", 
            xl: "3.5em"
        }} />
  );
}
