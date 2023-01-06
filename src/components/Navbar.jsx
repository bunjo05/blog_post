import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-evenly  items-center py-[15px] text-[20px] text-[#fff] bg-[#030b3b]">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/post">Posts</Link>
        </li>
        <li>
          <Link to="/create">Create Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
