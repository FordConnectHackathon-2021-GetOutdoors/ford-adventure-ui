// @ts-nocheck
import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { NotificationContext } from "./NotificationContext";
import { supabase } from "./supabase";

const userUploadsTable = "user_uploads";
const usersTable = "users";
export const ImageContext = createContext({
  uploadImage: async (a, b, c, d, e, f) => {},
  downloadImage: (a) => {},
  listImages: () => {},
  deleteImage: (a) => {},
  uploadProfilePic: (a) => {},
  uploadCoverPic: (a) => {},
});

export function ImageProvider({ children }) {
  const { showSucess, showError } = useContext(NotificationContext);
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
      showError(error.message);
    } else {
      showSucess("Image uploaded successfully !");
    }
  };
  const downloadImage = async (image_id) => {
    const { data: image_base64, error } = await supabase
      .from(userUploadsTable)
      .select("image_base64")
      .eq("user_id", user.id)
      .eq("id", image_id);

    if (error) {
      showError(error.message);
    } else {
      showSucess("Image downloaded successfully !");
    }
    return image_base64?.length > 0 ? image_base64[0] : null;
  };
  const listImages = async () => {
    const { data: images_base64, error } = await supabase
      .from(userUploadsTable)
      .select("image_base64")
      .eq("user_id", user.id);

    if (error) {
      showError(error.message);
    }
    return images_base64;
  };
  const deleteImage = async (image_id) => {
    const { error } = await supabase.from(userUploadsTable).eq("id", image_id);

    if (error) {
      showError(error.message);
    } else {
      showSucess("Image deleted successfully !");
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
      showError(error.message);
    } else {
      showSucess("Image uploaded successfully !");
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
      showError(error.message);
    } else {
      showSucess("Image uploaded successfully !");
    }
  };
  return (
    <ImageContext.Provider
      value={{
        uploadImage,
        downloadImage,
        listImages,
        deleteImage,
        uploadProfilePic,
        uploadCoverPic
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
