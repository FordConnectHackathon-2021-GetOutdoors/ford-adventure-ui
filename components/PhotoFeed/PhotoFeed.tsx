import React, { useEffect, useContext, useRef } from "react";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
import _ from "lodash";
import { PhotoFeedContext } from "utils/PhotoFeedContext";
import PullToRefresh from 'react-simple-pull-to-refresh';
import { Center, Text } from "@chakra-ui/react";

export function PhotoFeed () {
    const { fetchFeedData, posts, users, authUser } = useContext(PhotoFeedContext);
    const photoFeedRef = useRef<Function>();
    
    let tag = "";

    useEffect(() => {
        if (posts.length == 0) {
            fetchFeedData(tag);
        }
    }, [fetchFeedData, posts, tag]);

    photoFeedRef.current = function (_tag: string) {
        tag = _tag
        fetchFeedData(_tag);
    };
    
    return (
        <>
            {/* 
            // @ts-ignore */}
            <PullToRefresh onRefresh={() => Promise.resolve(fetchFeedData(""))}>
                {
                    posts.length ?
                    (
                        posts.map(p => 
                            (<PhotoPost 
                                key={Math.random()} 
                                imgSrc={p['image_base64']} 
                                username={p['username']}
                                vehicleName={p['vehicle_name']}
                                created={p['created']}
                                content={p['content']}
                                avatarSrc={p['profile_pic_base64']}
                                userUuid={p['user_id']}
                                authUserUuid={p['authUserUuid']}
                                parentRef={photoFeedRef}
                                likes={p['likes']}
                                comments={p['comments']}
                            />)
                        )
                    ) :
                    <Center>
                        <Text>{ "You're feed looks empty ! Add a few posts.." }</Text>
                    </Center>
                }
                { <></> }
            </PullToRefresh>
        </>
    );
};
