import React from 'react'
import ArticlesImg from '../../assets/articles/articles-img1.png'

const ArticleList = () => {
  return (
    <>
      <div className='mb-5 md:flex gap-8 ml-[130px] mr-[130px]'>
          <div className='md:w-[50%]'>
              <img src={ArticlesImg} alt="" className='rounded-md w-full'/>
          </div>
          <div className='md:w-[50%]'>
              <h3 className='font-bold text-3xl'>Pentingnya Gizi Seimbang: Tips untuk Mencapai Diet yang Sehat</h3>
              <a href="#" className='bg-primary-color text-white rounded-3xl px-5 py-1 inline-block mt-2 mb-2 font-bold text-sm'>Gizi</a>
              <p>Kesehatan kita adalah aset berharga yang perlu dijaga, dan salah satu kunci utama menuju kesehatan yang baik adalah melalui pola makan yang seimbang.</p>
              <div className='flex justify-end'>
                <a href="#" className='bg-primary-color text-white px-3 py-2 font-bold rounded-lg mt-5 mb-8'>Selengkapnya</a>
              </div>
          </div>
      </div>
      <div className='mb-5 md:flex gap-8 ml-[130px] mr-[130px]'>
          <div className='md:w-[50%]'>
              <img src={ArticlesImg} alt="" className='rounded-md w-full'/>
          </div>
          <div className='md:w-[50%]'>
              <h3 className='font-bold text-3xl'>Pentingnya Gizi Seimbang: Tips untuk Mencapai Diet yang Sehat</h3>
              <a href="#" className='bg-primary-color text-white rounded-3xl px-5 py-1 inline-block mt-2 mb-2 font-bold text-sm'>Gizi</a>
              <p>Kesehatan kita adalah aset berharga yang perlu dijaga, dan salah satu kunci utama menuju kesehatan yang baik adalah melalui pola makan yang seimbang.</p>
              <div className='flex justify-end'>
                <a href="#" className='bg-primary-color text-white px-3 py-2 font-bold rounded-lg mt-5 mb-8'>Selengkapnya</a>
              </div>
          </div>
      </div>
      <div className='mb-5 md:flex gap-8 ml-[130px] mr-[130px]'>
          <div className='md:w-[50%]'>
              <img src={ArticlesImg} alt="" className='rounded-md w-full'/>
          </div>
          <div className='md:w-[50%]'>
              <h3 className='font-bold text-3xl'>Pentingnya Gizi Seimbang: Tips untuk Mencapai Diet yang Sehat</h3>
              <a href="#" className='bg-primary-color text-white rounded-3xl px-5 py-1 inline-block mt-2 mb-2 font-bold text-sm'>Gizi</a>
              <p>Kesehatan kita adalah aset berharga yang perlu dijaga, dan salah satu kunci utama menuju kesehatan yang baik adalah melalui pola makan yang seimbang.</p>
              <div className='flex justify-end'>
                <a href="#" className='bg-primary-color text-white px-3 py-2 font-bold rounded-lg mt-5 mb-8'>Selengkapnya</a>
              </div>
          </div>
      </div>
    </>
  )
}

export default ArticleList