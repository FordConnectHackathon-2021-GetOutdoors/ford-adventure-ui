import React, { useState, useEffect, useContext } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NotificationContext } from 'utils/NotificationContext';
import { PhotoUpload } from 'components/PhotoUpload/PhotoUpload';

export default function PickImage() {
  const [setImage] = useState("");
  const { showError } = useContext(NotificationContext);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          showError('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, [showError]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <PhotoUpload photoUploadHandler={pickImage}>{}</PhotoUpload>
  );
}
