// @ts-nocheck
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { NotificationContext } from "./NotificationContext";
import { supabase } from "./supabase";

const userUploadsTable = "user_uploads";
const usersTable = "users";
const tagsTable = "tags";

export const ImageContext = createContext({
  uploadImage: async (a, b, c, d, e, f) => {},
  downloadImage: (a) => {},
  listImages: () => {},
  deleteImage: (a) => {},
  uploadProfilePic: (a) => {},
  uploadCoverPic: (a) => {},
  getTags: async () => {},
});

export function ImageProvider({ children }) {
  const { showCustom } = useContext(NotificationContext);
  const { user } = useContext(AuthContext);

  const uploadImage = async (name, ext, base64, content, lat, lng) => {
    const { error } = await supabase
      .from(userUploadsTable)
      .insert([
        {
          user_id: user.id,
          image_name: name,
          file_extension: ext,
          image_base64: base64,
          content: content,
          lat: lat,
          lng: lng,
        },
      ]);

    if (error) {
      console.log(error);
      showCustom({ 
        title: 'Something went wrong', 
        message: 'Sorry, unable to upload photo !', 
        status: "ERROR"
      });
    } else {
      showCustom({ 
        title: 'SUCCESS', 
        message: 'Photo was uploaded successfully !', 
        status: "SUCCESS"
      });
    }
  };
  const downloadImage = async (image_id) => {
    const { data: image_base64, error } = await supabase
      .from(userUploadsTable)
      .select("image_base64")
      .eq("user_id", user.id)
      .eq("id", image_id);

    if (error) {
      console.log(error);
      showCustom({ 
        title: 'Something went wrong', 
        message: 'Sorry, unable to download the photo !', 
        status: "ERROR"
      });
    } else {
      showCustom({ 
        title: 'SUCCESS', 
        message: 'Photo was downloaded successfully !', 
        status: "SUCCESS"
      });
    }
    return image_base64?.length > 0 ? image_base64[0] : null;
  };
  const listImages = async () => {
    const { data: images_base64, error } = await supabase
      .from(userUploadsTable)
      .select("image_base64")
      .eq("user_id", user.id);

    if (error) {
      console.log(error);
      showCustom({ 
        title: 'Something went wrong', 
        message: 'Sorry, unable to list your photos !', 
        status: "ERROR"
      });
    }
    return images_base64;
  };
  const deleteImage = async (image_id) => {
    const { error } = await supabase.from(userUploadsTable).eq("id", image_id);

    if (error) {
      console.log(error);
      showCustom({ 
        title: 'Something went wrong', 
        message: 'Sorry, unable to delete your photo !', 
        status: "ERROR"
      });
    } else {
      showCustom({ 
        title: 'SUCCESS', 
        message: 'Photo was deleted successfully !', 
        status: "SUCCESS"
      });
    }
  };
  const uploadProfilePic = async (base64) => {
    const { error } = await supabase
      .from(usersTable)
      .update([
        {
          profile_pic_base64: base64,
        },
      ])
      .eq('user_id', user.id,);

    if (error) {
      console.log(error);
      showCustom({ 
        title: 'Something went wrong', 
        message: 'Sorry, unable to upload profile photo !', 
        status: "ERROR"
      });
    } else {
      showCustom({ 
        title: 'SUCCESS', 
        message: 'Your profile photo was uploaded successfully !', 
        status: "SUCCESS"
      });
    }
  };
  const uploadCoverPic = async (base64) => {
    const { error } = await supabase
      .from(usersTable)
      .update([
        {
          cover_pic_base64: base64,
        },
      ])
      .eq('user_id', user.id,);

      if (error) {
        console.log(error);
        showCustom({ 
          title: 'Something went wrong', 
          message: 'Sorry, unable to upload cover photo !', 
          status: "ERROR"
        });
      } else {
        showCustom({ 
          title: 'SUCCESS', 
          message: 'Your cover photo was uploaded successfully !', 
          status: "SUCCESS"
        });
      }
  };
  const getTags = async () => {
    const { data: tags, error } = await supabase
      .from(tagsTable)
      .select("*");

    return tags || [];
  };

  return (
    <ImageContext.Provider
      value={{
        uploadImage,
        downloadImage,
        listImages,
        deleteImage,
        uploadProfilePic,
        uploadCoverPic,
        getTags,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
