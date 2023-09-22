import { StyleSheet, View, Text } from "react-native";

export const PostsScreen = () => (
  <View>
    <View style={styles.postContent}>
      <Text style={styles.title}>Publications</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  postContent: {
    marginTop: 16,
    borderBottomWidth: 1,
  },
  title: {
    paddingTop: 11,
    paddingBottom: 11,
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "normal",
    lineHeight: 22,
    letterSpacing: -0.408,
  },
});
