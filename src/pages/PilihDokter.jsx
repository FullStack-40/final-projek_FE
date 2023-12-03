import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              <button className="bg-primary-color px-3 py-1 mr-3 text-white w-[50%] mt-4 rounded">
              <div className='flex items-center gap-2 justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>{doctor.experience} Tahun
              </div>
              </button>
              <button className="bg-primary-color px-3 py-1 text-white w-[50%] mt-4 rounded">
                <div className='flex items-center justify-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>{doctor.rating}
                </div>
              </button>
            </div>
            <div className="flex gap-5 mt-4 items-center">
              <p className="font-bold w-2/4">Rp. {doctor.price}</p>
              <Link to={`/doctors/${doctor._id}`} className="bg-other-color text-white font-bold px-5 py-2 rounded w-2/4 text-center hover:bg-lime-950">
                Konsultasi
              </Link>
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
