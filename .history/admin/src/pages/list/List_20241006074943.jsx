import { useState } from "react";
import "./List.css";
import axios from "axios";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get("http://localhost:4000/api/food/list");
    const data = await response.json();
    setList(data);
  };
  return <div>List</div>;
};

export default List;
