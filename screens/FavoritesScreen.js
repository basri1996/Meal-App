import { View, FlatList, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/FavoriteContext";
import MealItem from "../components/MealItem";

function FavoritesScreen() {
  const { favoriteMealIds } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }
  if (favoriteMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#18ACA4" }}>
          Favorites is Empty
        </Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={favoriteMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </>
  );
}

export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
