// @ts-nocheck
import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "./supabase";
import Router from "next/router";
import { NotificationContext } from "./NotificationContext";

export const AuthContext = createContext({
  session: {},
  signOut: () => {},
  user: {},
  userLoaded: false,
  submitHandler: (a, b) => {},
  resetPasswordHandler: (a) => {},
});

export function AuthProvider({ children }) {
  const { showError } = useContext(NotificationContext);
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    setUserLoaded(session ? true : false);
    
    if (user) {
      // Commenting this out, as it's redirecting all other traffic
      //Router.push("/dashboard");
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        const currentUser = session?.user;
        setUser(currentUser ?? null);
        setUserLoaded(!!currentUser);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, [user]);

  const signOut = async () => {
    await supabase.auth.signOut();
    Router.push("/");
  };

  const submitHandler = async (props, isSignIn) => {
    const { error } = isSignIn
      ? await supabase.auth.signIn(props)
      : await supabase.auth.signUp(props);
    if (error) {
      showError(error);
    }
  };

  const resetPasswordHandler = async ({ email }) => {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) {
      showError(error);
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
