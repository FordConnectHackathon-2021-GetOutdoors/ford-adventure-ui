// @ts-nocheck
import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "./supabase";
import Router from "next/router";
import { NotificationContext } from "./NotificationContext";
import { setCookie } from 'react-use-cookie';

export const PhotoFeedContext = createContext({
    fetchFeedData: async () => {},
    posts: [],
    users: [],
    authUser: {}
});

export function PhotoFeedProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [authUser, setAuthUser] = useState({});
    const [users, setUsers] = useState([]);

    const fetchFeedData = async () => {
        const { data: user_posts } = await supabase
            .from('user_uploads')
            .select('*')
            .eq('active', true)
            .order('id', { ascending: false });

        const post_user_ids: string[] = Array.from(new Set([...(user_posts).map(({ user_id }) => user_id)]));

        const { data: post_authors } = await supabase
            .from('users')
            .select('*')
            .in('user_id', [...post_user_ids]);

        const user = await supabase.auth.user();

        setUsers([...post_authors]);
        setPosts([...user_posts]);
        setAuthUser(user);
    };

  return (
    <PhotoFeedContext.Provider
      value={{
        fetchFeedData,
        posts,
        users,
        authUser
      }}
    >
      {children}
    </PhotoFeedContext.Provider>
  );
}
