import React, { memo, useCallback, useState } from "react";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
import { supabase } from "utils/supabase";
import _ from "lodash";

export const PhotoFeed = memo(function () {
    const [posts, setPosts] = useState([]);
    const [authUser, setAuthUser] = useState({});
    const [users, setUsers] = useState([]);

    const fetchFeedData = useCallback(async () => {
        const { data: user_posts } = await supabase
            .from('user_uploads')
            .select('*')
            .eq('active', true)
            .order('id', { ascending: false });

        const post_user_ids: string[] = Array.from(new Set([...(user_posts).map(({ user_id }) => user_id)]));

        const { data: post_authors } = await supabase
            .from('users')
            .select('*')
            .in('user_uuid', [...post_user_ids]);

        const user = await supabase.auth.user();

        setUsers([...post_authors]);
        setPosts([...user_posts]);
        setAuthUser(user);
    }, []);

    // setInterval(fetchFeedData, 5000);

    return (
        <>
            {
                posts && posts.length > 0 &&
                posts.map(({ 
                    image_base64, 
                    created, 
                    content, 
                    profile_pic_base64, 
                    user_uuid 
                }) => {
                    const user = users.filter(u => u.user_id === user_uuid)[0];
                    return {
                        image_base64, 
                        created, 
                        content, 
                        profile_pic_base64, 
                        user_uuid,
                        username: user['username'] || user['email'],
                        vehicle_name: user['vehicle_name'],
                        authUserUuid: authUser['id'],
                    };
                }).map(({
                    image_base64, 
                    created, 
                    content, 
                    profile_pic_base64, 
                    user_uuid,
                    username,
                    vehicle_name,
                    authUserUuid,
                }) => (
                    <PhotoPost 
                        key={Math.random()} 
                        imgSrc={image_base64} 
                        username={username}
                        vehicleName={vehicle_name}
                        created={created}
                        content={content}
                        avatarSrc={profile_pic_base64}
                        userUuid={user_uuid}
                        authUserUuid={authUserUuid}
                    />
                ))
            }
        </>
    );
});
