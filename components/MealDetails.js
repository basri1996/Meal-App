import { View, StyleSheet, Text } from "react-native";
function MealDetails({ duration, complexity, affordability, style }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, style ? style : null]}>{duration}m</Text>
      <Text style={[styles.detailItem, style ? style : null]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, style ? style : null]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
});
