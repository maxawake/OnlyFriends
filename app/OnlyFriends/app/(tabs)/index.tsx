import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const posts = [
  { id: "1", text: "Beautiful sunset!", imageUrl: "https://media.istockphoto.com/id/1703754111/de/foto/dramatischer-himmel-wolken-sonnenuntergang.webp?s=2048x2048&w=is&k=20&c=w9bADDYXqztRh9STY21isHpt4hqJOPV--ySQzM7dP8E=" },
  { id: "2", text: "Nature vibes", imageUrl: "https://media.istockphoto.com/id/1703754111/de/foto/dramatischer-himmel-wolken-sonnenuntergang.webp?s=2048x2048&w=is&k=20&c=w9bADDYXqztRh9STY21isHpt4hqJOPV--ySQzM7dP8E=" },
];

export default function HomeScreen() {
  const renderPost = ({ item}) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={{ padding: theme.spacing.sm }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    padding: theme.spacing.sm,
    fontSize: 16,
    color: theme.colors.text,
  },
});
