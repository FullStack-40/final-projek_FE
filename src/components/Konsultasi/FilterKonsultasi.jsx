import React from "react";

const FilterKonsultasi = () => {
  return (
    <>
      <div className="ml-[130px] mr-[130px] mt-32">
        <div className="mt-16">
          <h1 className="font-bold text-3xl">
            Sesi <span className="text-primary-color">Konsultasi</span>
          </h1>
        </div>
        <div className="flex gap-3 justify-end items-center mb-10">
          <p className="font-bold">Filter : </p>
          <select
            name="status"
            id="status"
            className="border px-2 py-1 rounded"
          >
            <option value="semua">Semua</option>
            <option value="selesai">Selesai</option>
            <option value="dibatalkan">Dibatalkan</option>
            <option value="berlangsung">Berlangsung</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterKonsultasi;
