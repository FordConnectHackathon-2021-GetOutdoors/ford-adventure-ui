// @ts-nocheck
import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "./supabase";
import Router from "next/router";
import { NotificationContext } from "./NotificationContext";
import { setCookie } from "react-use-cookie";

export const AuthContext = createContext({
  session: {},
  signOut: () => {},
  user: {},
  userLoaded: false,
  submitHandler: (a, b) => {},
  resetPasswordHandler: (a) => {},
});

export function AuthProvider({ children }) {
  const { showCustom } = useContext(NotificationContext);
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();

    // // overriding this for now
    // if (!session) {
    //   // need to comment this to make sure user is not kicked back to login
    //   // Router.push("/login");
    //   return;
    // }

    setSession(session);
    setUser(session?.user ?? null);
    setUserLoaded(session ? true : false);
    setCookie("user", session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        const currentUser = session?.user;
        setUser(currentUser ?? null);
        setUserLoaded(!!currentUser);
        setCookie("user", currentUser ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, [user]);

  const signOut = async () => {
    await supabase.auth.signOut();
    setCookie("user", null);
    Router.push("/login");
  };

  const submitHandler = async (props, isSignIn) => {
    const { error, user, session } = isSignIn
      ? await supabase.auth.signIn(props)
      : await supabase.auth.signUp(props);
    if (error) {
      console.log(error);
      showCustom({
        title: "Something went wrong",
        message: "Sorry, unable to signup or signin !",
        status: "ERROR",
      });
    }
    if (user) {
      setUser(user);
      setUserLoaded(session);
      setCookie("user", user);
      Router.push("/");
    }
  };

  const resetPasswordHandler = async ({ email }) => {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) {
      console.log(error);
      showCustom({
        title: "Something went wrong",
        message: "Sorry, unable to reset your password !",
        status: "ERROR",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        signOut,
        user,
        userLoaded,
        submitHandler,
        resetPasswordHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContext.Provider");
  }
  return context;
};

export { useAuth };
