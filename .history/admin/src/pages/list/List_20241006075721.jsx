import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000/api";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/food/list`);

      if (response.status === 200) {
        setList(response.data.data); // Assuming the actual data is in response.data.data
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error fetching the list");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {list.length > 0 ? (
          list.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))
        ) : (
          <p>No items available</p>
        )}
      </ul>
    </div>
  );
};

export default List;
