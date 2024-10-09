import "./FoodDisplay.css";
import { StoreContext } from "../../context/storeContext";
import FoodItem from "../foodItem/FoodItem";
import { useContext } from "react";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "ALL" || category === item.category) {
            return (
              <FoodItem
                key={item._id} // Use the _id as the key
                id={item._id} // Pass the _id to the component for unique identification
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Avoid returning undefined from map
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
