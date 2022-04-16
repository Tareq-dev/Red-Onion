import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import NavPage from "../../Navbar/NavPage";
import BreakfastItem from "./BreakfastItem/BreakfastItem";
import './Breakfast.css'
import { MyFoodContext } from "../../../App";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useContext(MyFoodContext);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, [setBreakfast]);
  return (
    <div>
      <NavPage />
      <Header />
      <div className="grid">
        {breakfast.map((b) => (
          <BreakfastItem b={b} key={b._id} />
        ))}
      </div>
      <div className="d-flex justify-content-center mb-5 mt-5">
      <button className="border-0 py-1 px-2 rounded-3 bg-secondary text-white">Checkout Your Food</button>
      </div>
    </div>
  );
};

export default Breakfast;
