import React, { useEffect, useContext, useState, useRef } from "react";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
import { supabase } from "utils/supabase";
import _ from "lodash";
import { PhotoFeedContext } from "utils/PhotoFeedContext";
import PullToRefresh from 'react-simple-pull-to-refresh';
import { Button } from "@chakra-ui/react";

export function PhotoFeed () {
    const { fetchFeedData, posts, users, authUser } = useContext(PhotoFeedContext);
    const photoFeedRef = useRef();

    useEffect(() => {
        if (posts.length == 0) {
            fetchFeedData();
        }
    }, [fetchFeedData, posts]);

    photoFeedRef.current = () => {
        console.log('filter feed');
        fetchFeedData();
    };
    
    return (
        <>
            <PullToRefresh onRefresh={fetchFeedData}>
                {
                    posts && posts.length > 0 &&
                    posts.map(({ 
                        image_base64, 
                        created, 
                        content, 
                        user_id,
                        likes,
                        comments
                    }) => {
                        const user = users.filter(u => u.user_id === user_id)[0];
                        return {
                            image_base64, 
                            created, 
                            content, 
                            profile_pic_base64: user['profile_pic_base64'], 
                            user_id,
                            username: user['username'] || user['email'],
                            vehicle_name: user['vehicle_name'],
                            authUserUuid: authUser['id'],
                            likes,
                            comments
                        };
                    }).map(({
                        image_base64, 
                        created, 
                        content, 
                        profile_pic_base64, 
                        user_id,
                        username,
                        vehicle_name,
                        authUserUuid,
                        likes,
                        comments
                    }) => (
                        <PhotoPost 
                            key={Math.random()} 
                            imgSrc={image_base64} 
                            username={username}
                            vehicleName={vehicle_name}
                            created={created}
                            content={content}
                            avatarSrc={profile_pic_base64}
                            userUuid={user_id}
                            authUserUuid={authUserUuid}
                            parentRef={photoFeedRef}
                            likes={likes}
                            comments={comments}
                        />
                    ))
                }
            </PullToRefresh>
        </>
    );
};
