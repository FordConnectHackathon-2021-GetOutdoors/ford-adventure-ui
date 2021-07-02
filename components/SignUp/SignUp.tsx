import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FormControl, Input, Button, Stack, Divider, Text, Flex, Box, Checkbox, Center, HStack, Spacer } from "@chakra-ui/react";
import { useAuth } from "utils/AuthContext";
import { supabase } from "utils/supabase";
import { DeviceContext } from "utils/DeviceContext";
import colors from "themes/colors";

const Container = (props: {
  supabaseClient: { auth: { signOut: () => void } };
  children: any;
}) => {
  const { user } = useAuth();
  if (user)
    return (
      <>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

const CustomDivider = ({ isDesktopOrLaptop = false }) => {
  const dividerStyles = {
    lineMarginTop: { 
      base: "5px", 
      md: "7px", 
      lg: "10px", 
      xl: "10px" 
    },
    color: colors.text.darknavy,
    lineHeight: "3px",
    fontSize: { 
      base: "0.75em", 
      md: "1em", 
      lg: "1.5em", 
      xl: "1em" 
    },
    width: { 
      base: "5em", 
      md: isDesktopOrLaptop ? "10em" : "7.5em", 
      lg: "7.5em", 
      xl: "18em" 
    },
    widthx2: { 
      base: "10em", 
      md: isDesktopOrLaptop ? "20em" : "15em", 
      lg: "15em", 
      xl: "26em" 
    },
  };
  return <>
    <Flex pt={4} pb={4} flexDirection="row" color={dividerStyles.color}>
      <Box w={dividerStyles.width}>
        <Divider 
          orientation="horizontal" 
          backgroundColor={dividerStyles.color} 
          h={dividerStyles.lineHeight} 
          mt={dividerStyles.lineMarginTop} />
      </Box>
      <Box w={dividerStyles.widthx2}>
        <Text 
          fontSize={dividerStyles.fontSize} 
          textAlign="center"
        >OR CONTINUE WITH</Text>
      </Box>
      <Box w={dividerStyles.width}>
        <Divider 
          orientation="horizontal" 
          backgroundColor={dividerStyles.color} 
          h={dividerStyles.lineHeight} 
          mt={dividerStyles.lineMarginTop} />
      </Box>
    </Flex>
  </>
}

const EmailForm = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const [doSignin, setDoSignin] = useState(true);
  const [doForgotPassword, setDoForgotPassword] = useState(false);

  const getButtonTitle = () => {
    if (doSignin) {
      if (doForgotPassword) {
        return "RESET PASSWORD";
      } 
      return "SIGN IN"; 
    } else {
      return "SIGN UP";
    }
  };

  const getBackDescription = () => {
    if (doSignin) {
      if (doForgotPassword) {
        return "Back to ";
      }
      return "New to Ford Adventure? "; 
    } else {
      return "Already have an account? ";
    }
  };

  const getBackButtonName = () => {
    if (doSignin) {
      if (doForgotPassword) {
        return "SIGN IN";
      }
      return "SIGN UP"; 
    } else {
      return "SIGN IN";
    }
  };

  const toggleValue = () => {
    if (doForgotPassword) {
      setDoForgotPassword(false);
      setDoSignin(true);
    } else {
      setDoSignin(!doSignin);
    }
  };

  const emailStyles = {
    bgColor: colors.bg.light,
    color: colors.text.darkgrey,
    borderRadius: "10px",
    lineSpacing: {
      base: "1em", 
      md: "1em", 
      lg: "1.5em", 
      xl: "1.5em"
    },
    height: {
      base: "3em", 
      md: "3em", 
      lg: "3em", 
      xl: "3em"
    },
    fontSize: {
      base: "0.9em", 
      md: "0.9em", 
      lg: "1em", 
      xl: "1em"
    },
    padding: {
      base: "1.5em", 
      md: "1.5em", 
      lg: "2em", 
      xl: "2em"
    },
    smallPadding: {
      base: "0.25em", 
      md: "0.25em", 
      lg: "0.35em", 
      xl: "0.35em"
    },
    labelFontSize: {
      base: "0.9em", 
      md: "0.9em", 
      lg: "1em", 
      xl: "1em"
    }
  };
  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="email" isRequired>
        <Input 
          type="email" 
          placeholder="EMAIL" 
          backgroundColor={emailStyles.bgColor} 
          color={emailStyles.color} 
          borderRadius={emailStyles.borderRadius}
          focusBorderColor={emailStyles.color}
          height={emailStyles.height}
          fontSize={emailStyles.fontSize}
          paddingLeft={emailStyles.padding}
          paddingRight={emailStyles.padding} />
      </FormControl>
      <FormControl>
        <Box w="100%" h={emailStyles.lineSpacing}></Box>
      </FormControl>
      {
        !doForgotPassword &&
        <FormControl id="password" isRequired>
          <Input 
            type="password" 
            placeholder="PASSWORD" 
            backgroundColor={emailStyles.bgColor} 
            color={emailStyles.color} 
            borderRadius={emailStyles.borderRadius}
            focusBorderColor={emailStyles.color}
            height={emailStyles.height}
            fontSize={emailStyles.fontSize}
            paddingLeft={emailStyles.padding}
            paddingRight={emailStyles.padding} />
        </FormControl>
      }
      <FormControl>
        <Box w="100%" h={emailStyles.lineSpacing}></Box>
      </FormControl>
      {
        !doForgotPassword &&
        <FormControl id="rememberMeAndForgetPasswordFieldSet">
          <Box height={emailStyles.height}>
            <Checkbox 
              float="left" 
              fontSize={emailStyles.labelFontSize}>Remember Me</Checkbox>
            {
              doSignin &&
              <Button 
              float="right" 
              fontSize={emailStyles.labelFontSize} 
              color={colors.text.link} 
              variant="link"
              pt={emailStyles.smallPadding} 
              onClick={() => setDoForgotPassword(!doForgotPassword)}>Forgot Password?</Button>
            }
          </Box>
        </FormControl>
      }
      <FormControl>
        <Box w="100%" h={emailStyles.lineSpacing}></Box>
      </FormControl>
      <FormControl id="submit">
        <Button 
          type="submit"
          backgroundColor={colors.text.darknavy} 
          color={colors.text.white} 
          borderRadius={emailStyles.borderRadius}
          focusBorderColor={colors.text.darknavy}
          height={emailStyles.height}
          fontSize={emailStyles.fontSize}
          width="100%"
        >{ getButtonTitle() }</Button>
      </FormControl>
      <FormControl>
        <Box w="100%" h={emailStyles.lineSpacing}></Box>
      </FormControl>
      <FormControl>
        <Box w="100%" h={emailStyles.lineSpacing}></Box>
      </FormControl>
    </form>
    <Center>
      <HStack spacing="1em">
        <Text color={colors.text.darkgrey}>{ getBackDescription() }</Text>
        <Button
          fontSize={emailStyles.labelFontSize} 
          color={colors.text.link} 
          variant="link"
          onClick={() => toggleValue()}>{ getBackButtonName() }</Button>
      </HStack>
    </Center>
  </>
}

const SocialForm = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (data: any, e) => console.log(data, e);

  const socialStyles = {
    borderRadius: "10px",
    lineSpacing: {
      base: "1em", 
      md: "1em", 
      lg: "1.5em", 
      xl: "1.5em"
    },
    height: {
      base: "3em", 
      md: "3em", 
      lg: "3em", 
      xl: "3em"
    },
    fontSize: {
      base: "0.9em", 
      md: "0.9em", 
      lg: "1em", 
      xl: "1em"
    }
  };
  return <>
    <form>
      <FormControl>
        <Button 
          id="google"
          onClick={handleSubmit(onSubmit)}
          backgroundColor={colors.bg.gBlue} 
          color={colors.text.white} 
          borderRadius={socialStyles.borderRadius}
          focusBorderColor={colors.text.darknavy}
          height={socialStyles.height}
          fontSize={socialStyles.fontSize}
          width="100%"
          leftIcon={<FcGoogle size="2em" />}
        >SIGN IN WITH GOOGLE</Button>
      </FormControl>
      <FormControl>
        <Box w="100%" h={socialStyles.lineSpacing}></Box>
      </FormControl>
      <FormControl>
        <Button 
          id="facebook"
          onClick={handleSubmit(onSubmit)}
          backgroundColor={colors.bg.fbBlue} 
          color={colors.text.white} 
          borderRadius={socialStyles.borderRadius}
          focusBorderColor={colors.text.darknavy}
          height={socialStyles.height}
          fontSize={socialStyles.fontSize}
          width="100%"
          leftIcon={<FaFacebook size="2em" />}
        >SIGN IN WITH FACEBOOK</Button>
      </FormControl>
      <FormControl>
        <Box w="100%" h={socialStyles.lineSpacing}></Box>
      </FormControl>
    </form>
  </>
}

const PageTitle = () => {
  return <>
    <Text 
      fontSize={{
        base: "2em", 
        md: "2em", 
        lg: "4em", 
        xl: "4em"
      }}
      color={colors.text.darknavy}
    >SIGN IN</Text>
    <Text 
      style={{ marginTop: "0" }}
      fontSize={{
        base: "0.7em", 
        md: "0.7em", 
        lg: "0.9em", 
        xl: "0.9em"
      }}
      color={colors.text.darknavy}
    >A NEW ADVENTURE AWAITS</Text>
    <Spacer minHeight={{
      base: "1em", 
      md: "1em", 
      lg: "2em", 
      xl: "2em"
    }} />
  </>
}

export default function SignUp() {
  const { isDesktopOrLaptop } = useContext(DeviceContext);
  const signupStyles = {
    base: "20em", 
    md: isDesktopOrLaptop ? "40em" : "30em", 
    lg: "30em", 
    xl: "30em"
  };
  return (
    <Container supabaseClient={supabase}>
      <Stack 
        direction="column" 
        w={signupStyles}
        m="auto"
      >
        <PageTitle />
        <SocialForm />
        <CustomDivider isDesktopOrLaptop={isDesktopOrLaptop} />
        <EmailForm />
      </Stack>
    </Container>
  );
}
