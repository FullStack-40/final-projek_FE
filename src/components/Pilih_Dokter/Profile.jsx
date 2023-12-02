import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
   
  const [profileDoctor, setProfileDoctor] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://easy-pear-termite-tutu.cyclic.app/doctors/${id}`);
        console.log('API Response : ', response.data);
        setProfileDoctor(response.data.data);
      } catch (error) {
        console.error('Error Fetching Data : ', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
    {profileDoctor && (
      <div key={profileDoctor._id} className='ml-[130px] mr-[130px] mt-32'>
        <div className='mt-16 flex gap-10'>
            <img src={profileDoctor.profile_url} alt="" className='rounded w-3/4'/>
            <div>
              <h1 className='font-bold text-3xl mb-5'>Profil Dokter</h1>
              <h2 className='font-bold text-xl'>{profileDoctor.name}</h2>
              <div className='flex gap-5 mt-3 mb-3'>
                <p className='text-gray-500'>{profileDoctor.specialist}</p>
                <p className='bg-other-color text-white px-3 py-1 rounded'>{profileDoctor.experience} Tahun</p>
                <p className='bg-other-color text-white px-3 py-1 rounded'>{profileDoctor.rating}</p>
              </div>
              <p className='w-3/4 text-justify'>{profileDoctor.description}</p>
              <h3 className='font-bold mt-3'>Alumnus</h3>
              <p>{profileDoctor.alumnus} {profileDoctor.graduate_year}</p>
              <h3 className='font-bold mt-3'>Tempat Praktik</h3>
              <p>{profileDoctor.pratice_location}</p>
              <h3 className='font-bold mt-3'>Nomor STR</h3>
              <p>{profileDoctor.str_number}</p>
            </div>
        </div>
        <div className='mt-10 w-full'>
            <h2 className='font-bold text-3xl mb-5'>Buat Janji</h2>
            <label htmlFor="pilihTgl" className='cursor-pointer'>Pilih Tanggal</label> <br />
            <input type="date" name="pilihTgl" id="pilihTgl" className='border-2 w-full px-5 py-3 mt-3 cursor-pointer' /> <br />
            <input type="submit" value="Buat Janji" className='bg-primary-color text-white px-5 py-2 font-bold rounded w-full mt-5 mb-10 cursor-pointer hover:bg-other-color hover:text-cyan-100' />
        </div>
      </div>
      )}
    </>
  )
}

export default Profile