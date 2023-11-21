import React from 'react'
import DoctorImg from '../../assets/doctor/doctor1.png'

const ProfileDoctor = () => {
  return (
    <>
    <div>
        <img src={DoctorImg} alt="" />
        <h1>Profil Dokter</h1>
        <p>dr. Carolina Paolin Kanaga, M.Gizi, Sp.GK adalah seorang Dokter Ahli Gizi yang telah menamatkan pendidikan Magister Gizi Klinik di Universitas Indonesia, kemudian beliau meneruskan pendidikan Spesialis Gizi Klinik di Universitas yang sama.</p>
    </div>
    <div>
        <h2>Buat Janji</h2>
        <input type="date" name="pilihTgl" id="pilihTgl" />
    </div>
    </>
  )
}

export default ProfileDoctor