import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {!image && <Text style={styles.placeholder}>No image selected</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  placeholder: {
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});
