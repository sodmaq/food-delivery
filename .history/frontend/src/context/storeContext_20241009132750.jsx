import { createContext, useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000"; // Your backend API base URL
  const [token, setToken] = useState("");
  const [foodList, setFoodList] = useState([]); // Initialize with an empty array

  // Function to fetch food list from the backend
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`); // API endpoint to fetch food items
      setFoodList(response.data.data); // Assuming your API response structure is { data: [...] }
    } catch (error) {
      console.error("Error fetching food list:", error);
      // You can handle error states here (e.g., show a message to the user)
    }
  };

  // Function to add an item to the cart
  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      if (prev[id] === 1) {
        const newCart = { ...prev };
        delete newCart[id]; // Remove item if quantity is 1
        return newCart;
      }
      return { ...prev, [id]: prev[id] - 1 }; // Decrease quantity
    });
  };

  // Function to calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = foodList.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Fetch food list on component mount
  useEffect(() => {
    fetchFoodList();

    // Load token from localStorage
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  // Context value to be provided
  const contextValue = {
    foodList, // Food items from the backend
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
