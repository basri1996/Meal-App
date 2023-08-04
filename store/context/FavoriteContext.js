import { createContext, useState } from "react";

export const FavoritesContext = createContext({});
export function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorites(id) {
    setFavoriteMealIds((current) => [...current, id]);
  }

  function removeFavorites(id) {
    setFavoriteMealIds((current) => current.filter((mealId) => mealId !== id));
  }
  return (
    <FavoritesContext.Provider
      value={{ removeFavorites, addFavorites, favoriteMealIds }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
