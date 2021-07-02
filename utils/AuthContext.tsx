// @ts-nocheck
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { supabase } from "./supabase";
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  // const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    setUserLoaded(session ? true : false);
    if (user) {
      // signIn();
      // Router.push("/channels/[id]", "/channels/1");
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        const currentUser = session?.user;
        setUser(currentUser ?? null);
        setUserLoaded(!!currentUser);

        // Enable Authenticated SSR by setting a cookie
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, [user]);

  // const signIn = async () => {
  //   await fetchUserRoles((userRoles) =>
  //     setUserRoles(userRoles.map((userRole) => userRole.role))
  //   );
  // };

  const signOut = async () => {
    await supabase.auth.signOut();
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        signOut,
        user,
        userLoaded,
        // userRoles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth: any = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContext.Provider");
  }
  return context;
};
