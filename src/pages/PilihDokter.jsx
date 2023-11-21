import React from 'react'
import NavbarArticle from '../components/article_user/NavbarArticle'
import DoctorImg from '../assets/doctor/doctor1.png'

const PilihDokter = () => {
  return (
    <>
    <NavbarArticle />
    <div className='ml-[130px] mr-[130px] mt-16'>
        <div>
            <h1 className='font-bold text-4xl'>Daftar <span className='text-primary-color'>Dokter</span></h1>
            <p>Konsultasikan masalah anda kepada kami</p>
        </div>
        <div className='flex gap-32 justify-center items-center'>
            {/* Card */}
            <div className='mt-10 w-[300px]'>
                <img src={DoctorImg} alt="Doctor Image" className='rounded-lg mb-4'/>
                <h2 className='font-bold text-2xl'>dr. Cyntia putri Sp.GK</h2>
                <h3 className='text-gray-500 italic'>Sp Gizi Klinis</h3>
                <div className='w-full flex items-center'>
                    <button className='bg-primary-color px-3 py-1 mr-3 text-white w-[50%] mt-4'>10 Tahun</button>
                    <button className='bg-primary-color px-3 py-1 text-white w-[50%] mt-4'>99%</button>
                </div>
                <div className='flex gap-5 mt-4 items-center'>
                    <p className='font-bold w-2/4'>Rp. 100.000</p>
                    <a href="#" className='bg-other-color text-white font-bold px-5 py-2 rounded w-2/4 text-center'>Konsultasi</a>
                </div>
            </div>
            {/* End Of Card */}
            {/* Card */}
            <div className='mt-10 w-[300px]'>
                <img src={DoctorImg} alt="Doctor Image" className='rounded-lg mb-4'/>
                <h2 className='font-bold text-2xl'>dr. Cyntia putri Sp.GK</h2>
                <h3 className='text-gray-500 italic'>Sp Gizi Klinis</h3>
                <div className='w-full flex items-center'>
                    <button className='bg-primary-color px-3 py-1 mr-3 text-white w-[50%] mt-4'>10 Tahun</button>
                    <button className='bg-primary-color px-3 py-1 text-white w-[50%] mt-4'>99%</button>
                </div>
                <div className='flex gap-5 mt-4 items-center'>
                    <p className='font-bold w-2/4'>Rp. 100.000</p>
                    <a href="#" className='bg-other-color text-white font-bold px-5 py-2 rounded w-2/4 text-center'>Konsultasi</a>
                </div>
            </div>
            {/* End Of Card */}
            {/* Card */}
            <div className='mt-10 w-[300px]'>
                <img src={DoctorImg} alt="Doctor Image" className='rounded-lg mb-4'/>
                <h2 className='font-bold text-2xl'>dr. Cyntia putri Sp.GK</h2>
                <h3 className='text-gray-500 italic'>Sp Gizi Klinis</h3>
                <div className='w-full flex items-center'>
                    <button className='bg-primary-color px-3 py-1 mr-3 text-white w-[50%] mt-4'>10 Tahun</button>
                    <button className='bg-primary-color px-3 py-1 text-white w-[50%] mt-4'>99%</button>
                </div>
                <div className='flex gap-5 mt-4 items-center'>
                    <p className='font-bold w-2/4'>Rp. 100.000</p>
                    <a href="#" className='bg-other-color text-white font-bold px-5 py-2 rounded w-2/4 text-center'>Konsultasi</a>
                </div>
            </div>
            {/* End Of Card */}
        </div>
    </div>
    </>
  )
}

export default PilihDokter