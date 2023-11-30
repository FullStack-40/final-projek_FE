import React, { useState, useEffect } from 'react';
import axios from "axios";

const ArticleList = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://easy-pear-termite-tutu.cyclic.app/articles');
        console.log('API Response : ', response.data);
        setArticles(response.data.data);
      } catch (error) {
        console.error('Error Fetching Data : ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {articles.map((article) => (
        <div key={article._id} className=' mt-10 mb-5 md:flex gap-8 ml-[130px] mr-[130px]'>
            <div className='md:w-[50%]'>
                <img src={article.thumbnail_url} alt="" className='rounded-md w-full'/>
            </div>
            <div className='md:w-[50%]'>
                <h3 className='font-bold text-3xl'>{article.title}</h3>
                <a href="#" className='bg-primary-color text-white rounded-3xl px-5 py-1 inline-block mt-2 mb-2 font-bold text-sm'>{article.category}</a>
                <p className='overflow-y-hidden h-[150px]'>{article.content}</p>
                <div className='flex justify-end'>
                  <a href="#" className='bg-primary-color text-white px-3 py-2 font-bold rounded-lg mt-5 mb-8 hover:bg-other-color'>Selengkapnya</a>
                </div>
            </div>
        </div>
      ))}
    </>
  )
}

export default ArticleList