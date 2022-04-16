import React, { useContext } from "react";
import { MyFoodContext } from "../../../App";
import Header from "../../Header/Header";
import NavPage from "../../Navbar/NavPage";
import LunchItem from "./LunchItem/LunchItem";

const Lunch = () => {
  const [breakfast] = useContext(MyFoodContext);
  return (
    <div>
      <NavPage />
      <Header />
      <div className="grid">
        {breakfast.map((b) => (
          <LunchItem b={b} key={b.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center mb-5 mt-5">
      <button className="border-0 py-1 px-2 rounded-3 bg-secondary text-white">Checkout Your Food</button>
      </div>
    </div>
  );
};

export default Lunch;
