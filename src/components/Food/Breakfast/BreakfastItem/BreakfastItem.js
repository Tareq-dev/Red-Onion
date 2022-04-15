import React from "react";



const BreakfastItem = ({ b }) => {
  const { name, price, description, img } = b;
  return (
    <div className="meal py-4 px-1 m-3">
      <img className="w-75" src={img} alt="" />
      <h6>{name}</h6>
      <p>
        <small className="text-secondary">{description.slice(0,25)}</small>
      </p>
      <h5>$ {price}</h5>
    </div>
  );
};

export default BreakfastItem;
