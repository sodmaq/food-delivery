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
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
