import React from "react";

const SideBarCategory = ({ img, category }) => {
  return (
    <div className="sidebar__category">
      <img src={img} alt="" />
      <p>{category}</p>
    </div>
  );
};

export default SideBarCategory;
