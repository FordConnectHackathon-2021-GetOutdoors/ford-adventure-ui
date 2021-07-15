// @ts-nocheck
import { createContext, useState } from "react";
import { supabase } from "./supabase";

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

        const _user_posts = user_posts
        .filter(p => {
            return !!users.filter(u => u.user_id === p.user_id)[0];
        })
        .map(({ 
            image_base64, 
            created, 
            content, 
            user_id,
            likes,
            comments
        }) => {
            const user = users.filter(u => u.user_id === user_id)[0];
            let { profile_pic_base64, username, email, vehicle_name } = user;
            username = username || email;

            return {
              image_base64,
              username,
              vehicle_name,
              created,
              content,
              profile_pic_base64,
              user_id,
              authUserUuid: authUser['id'],
              likes,
              comments,
            }
        });

        setUsers([...post_authors]);
        setPosts([..._user_posts]);
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
