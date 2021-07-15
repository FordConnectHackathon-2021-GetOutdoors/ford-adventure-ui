import React, { useEffect, useContext, useState, useRef } from "react";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
import { supabase } from "utils/supabase";
import _ from "lodash";
import { PhotoFeedContext } from "utils/PhotoFeedContext";
import PullToRefresh from 'react-simple-pull-to-refresh';
import { Button } from "@chakra-ui/react";

export function PhotoFeed () {
    const { fetchFeedData, posts, users, authUser } = useContext(PhotoFeedContext);
    const photoFeedRef = useRef<Function>();
    
    let tag = null;

    useEffect(() => {
        if (posts.length == 0) {
            fetchFeedData(tag);
        }
    }, [fetchFeedData, posts, tag]);

    photoFeedRef.current = function (_tag) {
        tag = _tag
        fetchFeedData(_tag);
    };
    
    return (
        <>
            <PullToRefresh onRefresh={() => Promise.resolve(fetchFeedData(""))}>
                {
                    posts && posts.length > 0 &&
                    posts
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

                        return (
                            <PhotoPost 
                                key={Math.random()} 
                                imgSrc={image_base64} 
                                username={username}
                                vehicleName={vehicle_name}
                                created={created}
                                content={content}
                                avatarSrc={profile_pic_base64}
                                userUuid={user_id}
                                authUserUuid={authUser['id']}
                                parentRef={photoFeedRef}
                                likes={likes}
                                comments={comments}
                            />
                        );
                    })
                }
            </PullToRefresh>
        </>
    );
};
