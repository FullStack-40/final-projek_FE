import React from 'react'
import DoctorImg from '../../assets/doctor/doctor1.png'

const DoctorProfile = () => {
  return (
    <>
        <div className='ml-[130px] mr-[130px]'>
            <div className='mt-20 mb-7'>
                <h1 className='font-bold text-3xl'>Pesan</h1>
            </div>
            <div className='bg-primary-color w-full rounded-3xl flex justify-between items-center p-3 pl-5 pr-5 text-white'>
                <img src={DoctorImg} alt="Profile Doctor" className='rounded-full w-[5%]'/>
                <h2 className='font-bold text-2xl'>dr. Dian Purnamasari Sp.Gk</h2>
                <button className='bg-other-color px-3 py-2 rounded hover:bg-green-800'>Selesai</button>
            </div>
        </div>
    </>
  )
}

export default DoctorProfile