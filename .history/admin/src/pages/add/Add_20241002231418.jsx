import { assets } from "../../assets/assets";
import "./Add.css";

const Add = () => {
  return (
    <div className="add">
      <form action="" className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div>
          <p>product name</p>
          <input type="text" name="name" placeholder="type here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Description</p>
          <textarea
            name="description"
            rows={6}
            placeholder="type here"
            defaultValue={""}
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select name="category">
              <option value="Salad"></option>
              <option value="Rolls"></option>
              <option value="Deserts"></option>
              <option value="Sandwich"></option>
              <option value="Cake"></option>
              <option value="Pure Veg"></option>
              <option value="Salad"></option>
              <option value="Salad"></option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
