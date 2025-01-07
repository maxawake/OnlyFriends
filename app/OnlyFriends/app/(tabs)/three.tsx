import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const posts = [
  { id: "1", imageUrl: "https://via.placeholder.com/150" },
  { id: "2", imageUrl: "https://via.placeholder.com/150" },
  { id: "3", imageUrl: "https://via.placeholder.com/150" },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  profileHeader: {
    padding: theme.spacing.md,
    alignItems: "center",
    backgroundColor: theme.colors.card,
    marginBottom: theme.spacing.sm,
    borderBottomLeftRadius: theme.borderRadius.md,
    borderBottomRightRadius: theme.borderRadius.md,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  gridImage: {
    flex: 1,
    margin: 2,
    height: 120,
  },
});
