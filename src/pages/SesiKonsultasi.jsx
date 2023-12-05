import React from "react";
import FilterKonsultasi from "../components/Konsultasi/FilterKonsultasi";
import DataKonsultasi from "../components/Konsultasi/DataKonsultasi";
import Header from "../components/Header";

const SesiKonsultasi = () => {
  return (
    <>
      <Header />
      <FilterKonsultasi />
      <DataKonsultasi />
    </>
  );
};

export default SesiKonsultasi;
