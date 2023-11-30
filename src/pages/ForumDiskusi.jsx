import React from "react";
import BuatDiskusiButton from "../components/forum_diskusi/BuatDiskusiButton";
import HeadingTextForum from "../components/forum_diskusi/HeadingTextForum";
import InputSearchDiskusi from "../components/forum_diskusi/InputSearchDiskusi";
import FilterDiskusi from "../components/forum_diskusi/FilterDiskusi";
import UserComment from "../components/forum_diskusi/UserComment";
import Header from "../components/Header";

const ForumDiskusi = () => {
  return (
    <>
      <Header />
      <div className="ml-[130px] mr-[130px] mt-32">
        <HeadingTextForum />
        <div className="flex gap-1 items-center mt-10">
          <BuatDiskusiButton />
          <InputSearchDiskusi />
        </div>
        <div className="flex w-full gap-1">
          <FilterDiskusi />
          <UserComment />
        </div>
      </div>
    </>
  );
};

export default ForumDiskusi;
