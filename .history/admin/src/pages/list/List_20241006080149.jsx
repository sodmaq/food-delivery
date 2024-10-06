import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000/api";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/food/list`);
    const data = response.data;
    console.log(data);
    if (data.status === 200) {
      setList(data.data);
    } else {
      toast.error(data.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All food Lists</p>
      <div>
        <div c></div>
      </div>
    </div>
  );
};

export default List;
