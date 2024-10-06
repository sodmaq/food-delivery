import { useState } from "react";
import "./List.css";
import axios from "axios";

const List = () => {
  const url = "http://localhost:4000/api";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/food/list`);
    const data = await response.json();
    setList(data);
  };
  return <div>List</div>;
};

export default List;
