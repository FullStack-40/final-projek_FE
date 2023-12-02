import React, { useState, useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {

  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://easy-pear-termite-tutu.cyclic.app/articles/${id}`);
        console.log('API Response : ', response.data);
        setArticle(response.data.data);
      } catch (error) {
        console.error('Error Fetching Data : ', error);
      } 
    };

    fetchData();
  }, [id]);

  return (
    <>
    <Header />
    {article && (
      <div key={article._id}>
        <div>
          <img src={article.thumbnail_url} alt="" className='w-full h-[50vh] bg-cover bg-no-repeat md:h-[70vh]' />
        </div>
        <div className='ml-[130px] mr-[130px] md:ml-[260px] md:mr-[260px]'>
          <div className='mt-7 font-bold'>
            <p><a href="#" className='text-primary-color'>Home</a> / <a href="#" className='text-primary-color'>Artikel </a> / <a href="#" className='text-other-color'>{article.title}</a></p>
            <p className='text-xl text-other-color mt-2'>{article.category}</p>
          </div>
          <div className='mt-10 mb-10 max-w-3xl'>
            <h1 className='text-3xl font-bold mb-2'>{article.title}</h1>
            <p>Oleh : <a href="#" className='text-primary-color font-bold'>{article.author}</a></p>
          </div>
          <div className='mt-10 mb-10'>
            <p className='text-justify'>
              {article.content}
            </p>
          </div>
          <div>
            <h3 className='font-bold text-xl'>Artikel Terkait</h3>
          </div>
          {/* <div className='flex justify-items-center items-center mb-14'>
            <div>
              <img src=w{OtherArticleImg} alt="Articles" className=' rounded-md mt-5 mb-4 w-[50%]' />
              <h3 className='font-bold w-[50%] mb-5'>"Ketahui Fakta dan Mitos Diet Rendah Karbohidrat"</h3>
              <a href="#" className='bg-primary-color text-white text-sm px-3 md:px-5 py-2 inline-blockblock rounded'>Lihat Selengkapnya</a>
            </div>
            <div>
              <img src={OtherArticleImg} alt="Articles" className=' rounded-md mt-5 mb-4 w-[50%]' />
              <h3 className='font-bold w-[50%] mb-5'>"Ketahui Fakta dan Mitos Diet Rendah Karbohidrat"</h3>
              <a href="#" className='bg-primary-color text-white text-sm px-3 md:px-5 py-2 inline-blockblock rounded'>Lihat Selengkapnya</a>
            </div>
            <div>
              <img src={OtherArticleImg} alt="Articles" className=' rounded-md mt-5 mb-4 w-[50%]' />
              <h3 className='font-bold w-[50%] mb-5'>"Ketahui Fakta dan Mitos Diet Rendah Karbohidrat"</h3>
              <a href="#" className='bg-primary-color text-white text-sm px-3 md:px-5 py-2 inline-blockblock rounded'>Lihat Selengkapnya</a>
            </div>
          </div> */}
        </div>
      </div>
    )}
    </>
  )
}

export default ArticleDetails