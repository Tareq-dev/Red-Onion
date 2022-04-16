import React, { useContext } from "react";
import { MyFoodContext } from "../../../App";
import Header from "../../Header/Header";
import NavPage from "../../Navbar/NavPage";
import DinnerItem from "./DinnerItem/DinnerItem";

const Dinner = () => {
  const [breakfast] = useContext(MyFoodContext);
  return (
    <div>
      <NavPage />
      <Header />
      <div className="grid">
        {breakfast.map((b) => (
          <DinnerItem b={b} key={b._id} />
        ))}
      </div>
      <div className="d-flex justify-content-center mb-5 mt-5">
        <button className="border-0 py-1 px-2 rounded-3 bg-secondary text-white">
          Checkout Your Food
        </button>
      </div>
      
    </div>
  );
};

export default Dinner;
