import React from 'react'
import DoctorImg from '../../assets/doctor/doctor1.png'

const DataKonsultasi = () => {
  return (
    <>
        <div className='ml-[130px] mr-[130px] flex flex-wrap mb-10'>
            <div className='flex w-full border mt-6 px-3 py-3 rounded items-center justify-between'>
                <img src={DoctorImg} alt="" className='w-[100px] rounded-full ml-5'/>
                <div>
                    <h2 className='font-bold text-xl'>Dr. Dian Purnamasari Sp.GK</h2>
                    <p className='italic'>Sp Gizi Klinis</p>
                </div>
                <div>
                    <p>Minggu, 10/09/2023</p>
                    <p>11:00</p>
                </div>
                <div>
                    <p className='bg-primary-color text-white font-bold px-2 py-2 rounded text-sm'>Berlangsung</p>
                </div>
                <div className='text-primary-color font-bold mr-10'>
                    <a href="#">Pesan</a>
                </div>
            </div>
            <div className='flex w-full border mt-6 px-3 py-3 rounded items-center justify-between'>
                <img src={DoctorImg} alt="" className='w-[100px] rounded-full ml-5'/>
                <div>
                    <h2 className='font-bold text-xl'>Dr. Dian Purnamasari Sp.GK</h2>
                    <p className='italic'>Sp Gizi Klinis</p>
                </div>
                <div>
                    <p>Minggu, 10/09/2023</p>
                    <p>11:00</p>
                </div>
                <div>
                    <p className='bg-blue-700 text-white font-bold px-2 py-2 rounded text-sm'>Semua</p>
                </div>
                <div className='text-primary-color font-bold mr-10'>
                    <a href="#">Pesan</a>
                </div>
            </div>
            <div className='flex w-full border mt-6 px-3 py-3 rounded items-center justify-between'>
                <img src={DoctorImg} alt="" className='w-[100px] rounded-full ml-5'/>
                <div>
                    <h2 className='font-bold text-xl'>Dr. Dian Purnamasari Sp.GK</h2>
                    <p className='italic'>Sp Gizi Klinis</p>
                </div>
                <div>
                    <p>Minggu, 10/09/2023</p>
                    <p>11:00</p>
                </div>
                <div>
                    <p className='bg-gray-500 text-white font-bold px-2 py-2 rounded text-sm'>Selesai</p>
                </div>
                <div className='text-primary-color font-bold mr-10'>
                    <a href="#">Pesan</a>
                </div>
            </div>
            <div className='flex w-full border mt-6 px-3 py-3 rounded items-center justify-between'>
                <img src={DoctorImg} alt="" className='w-[100px] rounded-full ml-5'/>
                <div>
                    <h2 className='font-bold text-xl'>Dr. Dian Purnamasari Sp.GK</h2>
                    <p className='italic'>Sp Gizi Klinis</p>
                </div>
                <div>
                    <p>Minggu, 10/09/2023</p>
                    <p>11:00</p>
                </div>
                <div>
                    <p className='bg-red-700 text-white font-bold px-2 py-2 rounded text-sm'>Dibatalkan</p>
                </div>
                <div className='text-primary-color font-bold mr-10'>
                    <a href="#">Pesan</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default DataKonsultasi