import React from 'react'

const FilterDiskusi = () => {

  const popularTag = [
    {id: 1, tag: "Gizi"},
    {id: 2, tag: "Sayuran"},
    {id: 3, tag: "Sehat"},
    {id: 4, tag: "Makanansehat"},
    {id: 5, tag: "kandungangizi"},
    {id: 6, tag: "polamakan"},
    {id: 7, tag: "giziseimbang"},
  ]

  return (
    <>
        <div className='border mt-5 w-[20%] h-full'>
            <h2 className='font-bold text-xl text-center py-3'>Urutan Diskusi</h2>
            <form className='flex flex-col ml-4 mb-8'>
              <label htmlFor="terbaru" className='cursor-pointer'>
                <input type="radio" name="terbaru" id="terbaru" value="Terbaru" checked={true} className='mr-1 cursor-pointer' />
                Terbaru
              </label>
              <label htmlFor="terlama" className='cursor-pointer'>
                <input type="radio" name="terbaru" id="terlama" value="Terlama" className='mr-1 cursor-pointer' />
                Terlama
              </label>
            </form>
            <h3 className='text-center font-bold text-xl pb-3'>Kata Kunci Populer</h3>
            <div className='flex flex-wrap justify-center items-center ml-5 mr-5 w-[70%] rounded mb-5'>
              {popularTag.map(tags => (
                <p key={tags.id} className='bg-primary-color px-3 py-1 text-white mt-2 rounded-full cursor-pointer hover:bg-other-color'>
                  #{tags.tag}
                </p>
              ))}
            </div>
        </div>
    </>
  )
}

export default FilterDiskusi