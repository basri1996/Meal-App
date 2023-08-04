import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/FavoriteContext";
function MealDetailScreen({ route, navigation }) {
  const { removeFavorites, addFavorites, favoriteMealIds } =
    useContext(FavoritesContext);
  const mealId = route.params.mealsId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const FavoriteMealsId = favoriteMealIds.includes(mealId);
  console.log(FavoriteMealsId);

  function ButtonPressHandler() {
    if (FavoriteMealsId) {
      removeFavorites(mealId);
    } else {
      addFavorites(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={ButtonPressHandler}
          FavoriteMealsId={FavoriteMealsId}
        />
      ),
    });
  }, [ButtonPressHandler, navigation]);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        style={styles.color}
      />
      <View style={styles.outerWrapper}>
        <View style={styles.wrapper}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listContainer}>
              <Text style={styles.listItem} key={ingredient}>
                {ingredient}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.outerWrapper}>
        <View style={styles.wrapper}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {selectedMeal.steps.map((step) => (
            <View key={step} style={styles.listContainer}>
              <Text style={styles.listItem} key={step}>
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  outerWrapper: {
    alignItems: "center",
  },
  wrapper: {
    width: "80%",
  },
  color: {
    color: "#18ACA4",
  },
  container: {
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "#18ACA4",
  },
  subtitle: {
    color: "#18ACA4",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#18ACA4",
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listItem: {
    textAlign: "center",
    color: "white",
  },
  listContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#18ACA4",
  },
});
