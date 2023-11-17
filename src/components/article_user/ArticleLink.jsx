import React from 'react'

const ArticleLink = () => {
  return (
    <div className='flex flex-col items-center mb-12'>
        <h2 className='mb-7 mt-7 font-bold text-2xl'>Artikel Terbaru</h2>
        <div className='flex gap-3 md:gap-10'>
            <a href="#" className='bg-primary-color text-white px-10 py-2 rounded-3xl font-bold'>All</a>
            <a href="#" className='border border-primary-color text-primary-color px-10 py-2 rounded-3xl font-bold hover:bg-primary-color hover:text-white'>Gizi</a>
            <a href="#" className='border border-primary-color text-primary-color px-10 py-2 rounded-3xl font-bold hover:bg-primary-color hover:text-white'>Pencegahan</a>
            <a href="#" className='border border-primary-color text-primary-color px-10 py-2 rounded-3xl font-bold hover:bg-primary-color hover:text-white'>Dampak</a>
        </div>
    </div>
  )
}

export default ArticleLink