import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";

function CategoryGridTile({ title, onPress, imageUrl }) {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 12 }}
        style={styles.gridItem}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 12,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: -3 },
    textShadowRadius: 5,
  },
});
