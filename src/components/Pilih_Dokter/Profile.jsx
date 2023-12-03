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
              <div className='flex gap-5 mt-3 mb-3 items-center'>
                <p className='text-gray-500'>{profileDoctor.specialist}</p>
                <button className='bg-other-color text-white px-3 py-1 rounded'>
                  <div className='flex gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                  {profileDoctor.experience} Tahun
                </div>
                </button>
                <button className='bg-other-color text-white px-3 py-1 rounded'>
                  <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    {profileDoctor.rating}
                  </div>
                </button>
                <p className='font-bold text-xl'>Rp. {profileDoctor.price}</p>
              </div>
              <p className='w-3/4 text-justify'>{profileDoctor.description}</p>
              <h3 className='font-bold mt-3'>Alumnus</h3>
              <p>{profileDoctor.alumnus} {profileDoctor.graduate_year}</p>
              <h3 className='font-bold mt-3'>Tempat Praktik</h3>
              <p>{profileDoctor.practice_location}</p>
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