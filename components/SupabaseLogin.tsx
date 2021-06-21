import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { supabase } from "utils/supabase";

export default function SupabaseLogin() {
  const {
    handleSubmit,
    register,
    // reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  const handleLogin = async (type: string, email: string) => {
    try {
      const { error, user } =
        type === "LOGIN"
          ? await supabase.auth.signIn({ email })
          : await supabase.auth.signUp({ email });
      if (error) {
        toast({
          title: error.message,
          status: "error",
        });
      } else if (!user) {
        toast({
          title: user
            ? `Welcome`
            : `Please check your email for the magic link`,
          status: "success",
        });
      }
    } catch (error) {
      toast({
        title: error.error_description || error.message || error,
        status: "error",
      });
    }
  };

  async function onSubmit({ email }: any) {
    handleLogin("LOGIN", email);
  }

  const socialLogin = async (type: string) => {
    try {
      const { error, user } = await supabase.auth.signIn({
        // provider can be 'github', 'google', 'gitlab', or 'bitbucket'
        provider: "github",
      });
      if (error) {
        toast({
          title: error.message,
          status: "error",
        });
      } else if (!user) {
        toast({
          title: user
            ? `Welcome`
            : `Please check your email for the magic link`,
          status: "success",
        });
      }
    } catch (error) {
      toast({
        title: error.error_description || error.message || error,
        status: "error",
      });
    }
  };
  return (
    <>
      <Button onClick={() => socialLogin("github")}>Google Login</Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">First email</FormLabel>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
