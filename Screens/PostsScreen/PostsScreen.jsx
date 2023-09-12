import { StyleSheet, View, Text } from "react-native";

export const PostsScreen = () => (
  <View>
    <View
      style={{
        marginTop: 16,
        borderBottomWidth: 1,
      }}
    >
      <Text style={styles.title}>Публікації</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    paddingTop: 11,
    paddingBottom: 11,
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 22,
    letterSpacing: -0.408,
  },
});