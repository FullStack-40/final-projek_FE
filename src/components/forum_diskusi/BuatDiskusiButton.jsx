import React from "react";
import { Link } from "react-router-dom";

const BuatDiskusiButton = () => {
  return (
    <div className="w-[20%]">
      <Link
        to="/add-discussion"
        href="#"
        className="bg-other-color text-white px-3 py-3 rounded mt-5"
      >
        Buat Diskusi Baru
      </Link>
    </div>
  );
};

export default BuatDiskusiButton;
