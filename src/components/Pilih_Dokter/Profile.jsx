import React from 'react'

const Profile = () => {

  const dataDoctor = [
    {id: 1, doctorName: "dr. Usman Hamid Sp.GK", profession: "Gizi Klinis", expWork: 2, rating: 4.8, price:60.000, doctorDesc: "Seorang Dokter Ahli Gizi yang telah menamatkan pendidikan Magister Gizi Klinik di Universitas Indonesia, kemudian beliau meneruskan pendidikan Spesialis Gizi Klinik di Universitas yang sama.", alumnus: "Universitas Indonesia", graduate: 2021, workplace: "Kota Depok, Jawa Barat", noSTR: "DG13567", profileImg : './../assets/doctor/doctor1.png'},
    // {id: 2, doctorName: "dr. Cyntia putri Sp.GK", profession: "Gizi Klinis", expWork: 2, rating: 4.8, price:60.000, doctorDesc: "dr. Carolina Paolin Kanaga, M.Gizi, Sp.GK adalah seorang Dokter Ahli Gizi yang telah menamatkan pendidikan Magister Gizi Klinik di Universitas Indonesia, kemudian beliau meneruskan pendidikan Spesialis Gizi Klinik di Universitas yang sama.", alumnus: "Universitas Indonesia", graduate: 2021, workplace: "Kota Depok, Jawa Barat", noSTR: "DG13567"},
    // {id: 3, doctorName: "dr. Anggita Sisilia Sp.GK", profession: "Gizi Klinis", expWork: 2, rating: 4.8, price:60.000, doctorDesc: "dr. Carolina Paolin Kanaga, M.Gizi, Sp.GK adalah seorang Dokter Ahli Gizi yang telah menamatkan pendidikan Magister Gizi Klinik di Universitas Indonesia, kemudian beliau meneruskan pendidikan Spesialis Gizi Klinik di Universitas yang sama.", alumnus: "Universitas Indonesia", graduate: 2021, workplace: "Kota Depok, Jawa Barat", noSTR: "DG13567"},
    // {id: 4, doctorName: "dr. Mariska Aulia Sp.GK", profession: "Gizi Klinis", expWork: 2, rating: 4.8, price:60.000, doctorDesc: "dr. Carolina Paolin Kanaga, M.Gizi, Sp.GK adalah seorang Dokter Ahli Gizi yang telah menamatkan pendidikan Magister Gizi Klinik di Universitas Indonesia, kemudian beliau meneruskan pendidikan Spesialis Gizi Klinik di Universitas yang sama.", alumnus: "Universitas Indonesia", graduate: 2021, workplace: "Kota Depok, Jawa Barat", noSTR: "DG13567"},
  ]

  return (
    <>
    { dataDoctor.map(data => (
      <div key={data.id} className='ml-[130px] mr-[130px]'>
        <div className='mt-16 flex gap-10'>
            <img src="" alt="" className='rounded w-3/4'/>
            <div>
              <h1 className='font-bold text-3xl mb-5'>Profil Dokter</h1>
              <h2 className='font-bold text-xl'>{data.doctorName}</h2>
              <div className='flex gap-5 mt-3 mb-3'>
                <p className='text-gray-500'>{data.profession}</p>
                <p>{data.expWork} Tahun</p>
                <p>{data.rating}</p>
              </div>
              <p className='w-3/4 text-justify'>{data.doctorDesc}</p>
              <h3>Alumnus</h3>
              <p></p>
            </div>
        </div>
        <div className='mt-10 w-full'>
            <h2 className='font-bold text-3xl mb-5'>Buat Janji</h2>
            <label htmlFor="pilihTgl" className='cursor-pointer'>Pilih Tanggal</label> <br />
            <input type="date" name="pilihTgl" id="pilihTgl" className='border-2 w-full px-5 py-3 mt-3 cursor-pointer' /> <br />
            <input type="submit" value="Buat Janji" className='bg-primary-color text-white px-5 py-2 font-bold rounded w-full mt-5 mb-10 cursor-pointer hover:bg-other-color hover:text-cyan-100' />
        </div>
      </div>
    )) }
    </>
  )
}

export default Profile