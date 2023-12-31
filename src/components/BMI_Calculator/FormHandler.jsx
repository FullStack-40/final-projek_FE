import React from "react";

const FormHandler = () => {
  return (
    <>
      <div className="mt-32 ml-[25%] mr-[25%] md:ml-[30%] md:mr-[30%] lg:ml-[35%] lg:mr-[35%]">
        <form action="#" className="flex flex-col">
          <label htmlFor="tinggiBadan" className="font-bold">Tinggi Badan (CM)</label>
          <input
            type="number"
            name="tinggiBadan"
            id="tinggiBadan"
            className="border py-2 px-5 rounded mt-3 mb-3"
          />
          <label htmlFor="beratBadan" className="font-bold">Berat Badan (Kg)</label>
          <input
            type="number"
            name="beratBadan"
            id="beratBadan"
            className="border py-2 px-5 rounded mt-3 mb-3"
          />
          <label htmlFor="usia" className="font-bold">Usia Anda</label>
          <input
            type="number"
            name="usia"
            id="usia"
            disabled
            className="border py-2 px-5 rounded mt-3 mb-3 bg-gray-300"
          />
          <label htmlFor="hasil" className="font-bold">Hasil Perhitungan</label>
          <input
            type="number"
            name="hasil"
            id="hasil"
            className="border py-2 px-5 rounded mt-3 mb-3"
          />
          <div className="flex gap-10w"></div>
        </form>
      </div>
    </>
  );
};

export default FormHandler;
