import React, { useContext, useState } from "react";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
// import { useMemo } from "react";
// import { AuthContext } from "utils/AuthContext";
import { supabase } from "utils/supabase";
import { useEffect } from "react";

export function PhotoFeed() {
  // const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const [userDetails, setUserDetails] = useState<any>();
  const user = supabase.auth.user();

  useEffect(() => {
    if (user) {
      setUserDetails(user);
      supabase
        .from("user_uploads")
        .select("*")
        .eq("user_id", "7a26a2d3-b8bc-44d5-a7ec-8cda57ff8c23")
        .eq("active", true)
        .then(({ data }: any) => !posts.length && data && setPosts(data));
    }
  }, [user]);

  if (!posts) {
    return null;
  }
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((upload_data: any) => (
          <PhotoPost
            key={Math.random()}
            imgSrc={upload_data["image_base64"]}
            username={userDetails["email"]}
            vehicleName={"F-150"}
            created={upload_data["created"]}
            content={upload_data["content"]}
          />
        ))}
    </>
  );
}
