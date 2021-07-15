// @ts-nocheck
import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "./supabase";
import Router from "next/router";
import { NotificationContext } from "./NotificationContext";
import { setCookie } from 'react-use-cookie';

export const PhotoFeedContext = createContext({
    fetchFeedData: async (t) => {},
    posts: [],
    users: [],
    authUser: {}
});

export function PhotoFeedProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [authUser, setAuthUser] = useState({});
    const [users, setUsers] = useState([]);

    const fetchFeedData = async (tag) => {
        let user_posts = [];
        let tag_posts_ids = [];

        if (tag) {
          const tagPostsData = await supabase
          .from('tag_posts')
          .select('post_id')
          .eq('tag', tag)
          .order('id', { ascending: false });
        
          tag_posts_ids = tagPostsData['data'] || [];
        }

        if (tag_posts_ids && tag_posts_ids.length > 0) {
          const userUploadsData = await supabase
          .from('user_uploads')
          .select('*')
          .eq('active', true)
          .in('id', [...tag_posts_ids])
          .order('id', { ascending: false });
          user_posts = userUploadsData['data'] || [];
        } else {

          const response = await supabase
            .from('user_uploads')
            .select('*')
            .eq('active', true)
            .order('id', { ascending: false });
          user_posts = response['data'] || [];
        }

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
        authUser,
      }}
    >
      {children}
    </PhotoFeedContext.Provider>
  );
}
