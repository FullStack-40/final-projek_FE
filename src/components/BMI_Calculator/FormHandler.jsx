import React from "react";

const FormHandler = () => {
  return (
    <>
      <div className="mt-32 ml-[25%] mr-[25%] md:ml-[30%] md:mr-[30%] lg:ml-[35%] lg:mr-[35%]">
        <form action="#" className="flex flex-col">
          <label htmlFor="tinggiBadan">Tinggi Badan (CM)</label>
          <input
            type="number"
            name="tinggiBadan"
            id="tinggiBadan"
            className="border py-2 px-5 rounded mt-3 mb-3"
          />
          <label htmlFor="beratBadan">Berat Badan (Kg)</label>
          <input
            type="number"
            name="beratBadan"
            id="beratBadan"
            className="border py-2 px-5 rounded mt-3 mb-3"
          />
          <label htmlFor="usia">Usia Anda</label>
          <input
            type="number"
            name="usia"
            id="usia"
            className="border py-2 px-5 rounded mt-3 mb-3"
          />
          <label htmlFor="hasil">Hasil Perhitungan</label>
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
