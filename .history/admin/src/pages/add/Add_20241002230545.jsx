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
        </div>
      </form>
    </div>
  );
};

export default Add;
