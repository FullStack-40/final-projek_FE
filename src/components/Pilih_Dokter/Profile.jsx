import React from 'react'
import DoctorImg from '../../assets/doctor/doctor1.png'
import NavbarArticle from '../article_user/NavbarArticle'

const Profile = () => {
  return (
    <>
    <NavbarArticle />
    <div className='ml-[130px] mr-[130px]'>
      <div className='mt-16 flex gap-10'>
          <img src={DoctorImg} alt="" className='rounded w-3/4'/>
          <div>
            <h1 className='font-bold text-3xl mb-5'>Profil Dokter</h1>
            <p className='w-3/4 text-justify'>dr. Carolina Paolin Kanaga, M.Gizi, Sp.GK adalah seorang Dokter Ahli Gizi yang telah menamatkan pendidikan Magister Gizi Klinik di Universitas Indonesia, kemudian beliau meneruskan pendidikan Spesialis Gizi Klinik di Universitas yang sama.</p>
          </div>
      </div>
      <div className='mt-10 w-full'>
          <h2 className='font-bold text-3xl mb-5'>Buat Janji</h2>
          <label htmlFor="pilihTgl" className='cursor-pointer'>Pilih Tanggal</label> <br />
          <input type="date" name="pilihTgl" id="pilihTgl" className='border-2 w-full px-5 py-3 mt-3 cursor-pointer' /> <br />
          <input type="submit" value="Buat Janji" className='bg-primary-color text-white px-5 py-2 font-bold rounded w-full mt-5 mb-10 cursor-pointer hover:bg-other-color hover:text-cyan-100' />
      </div>
    </div>
    </>
  )
}

export default Profile