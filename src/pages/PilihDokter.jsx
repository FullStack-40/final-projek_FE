import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import axios from "axios";

const PilihDokter = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://easy-pear-termite-tutu.cyclic.app/doctors');
        console.log('API Response : ', response.data);
        setDoctors(response.data.data);
      } catch (error) {
        console.error('Error Fetching Data : ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="ml-[130px] mr-[130px] mt-32">
        <div>
          <h1 className="font-bold text-4xl">
            Daftar <span className="text-primary-color">Dokter</span>
          </h1>
          <p>Konsultasikan masalah anda kepada kami</p>
        </div>
        <div className="flex flex-wrap mb-10 gap-24 justify-center items-center">

          {/* Card */}
          {doctors.map((doctor) => (
            <div key={doctor._id} className="mt-10 w-[300px] border rounded px-3 py-3">
              <img
                src={doctor.profile_url}
                alt="Doctor Image"
                className="rounded-lg mb-4"
              />
              <h2 className="font-bold text-2xl">{doctor.name}</h2>
              <h3 className="text-gray-500 italic">{doctor.specialist}</h3>
              <div className="w-full flex items-center">
                <button className="bg-primary-color px-3 py-1 mr-3 text-white w-[50%] mt-4">
                  {doctor.experience}
                </button>
                <button className="bg-primary-color px-3 py-1 text-white w-[50%] mt-4">
                  {doctor.rating}
                </button>
              </div>
              <div className="flex gap-5 mt-4 items-center">
                <p className="font-bold w-2/4">Rp. {doctor.price}</p>
                <a
                  href="../components/Pilih_Dokter/ProfileDoctor.jsx"
                  className="bg-other-color text-white font-bold px-5 py-2 rounded w-2/4 text-center"
                >
                  Konsultasi
                </a>
              </div>
            </div>
          ))}
          {/* End Of Card */}
        </div>
      </div>
    </>
  );
};

export default PilihDokter;
