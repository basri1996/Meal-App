import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "./store/context/FavoriteContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#18ACA4" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#D1DAD1" },
          drawerContentStyle: { backgroundColor: "#D1DAD1" },
          drawerInactiveTintColor: "#18ACA4",
          drawerActiveTintColor: "white",
          drawerInactiveBackgroundColor: "#D1DAD1",
          drawerActiveBackgroundColor: "#18ACA4",
        }}
      >
        <Drawer.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            title: "Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            title: "Favorites",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <FavoritesContextProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#18ACA4" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#D1DAD1" },
            }}
          >
            <Stack.Screen
              name="drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
              options={{
                title: "Meal Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
