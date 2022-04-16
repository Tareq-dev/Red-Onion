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
    </div>
  );
};

export default Lunch;
