import React from 'react'
import UserImg from '../../assets/doctor/doctor1.png'

const UserComment = () => {

    const commentList = [
        {id: 1, name: "Laurend", type: "Penanya", comment: "Jika tidak suka sayuran, bisa diganti apa agar tetap bisa mendapatkan gizi yg seimbang?", datePosted: 7, monthPosted: true, dayPosted: false, yearPosted: false,totalLike: 7},
        {id: 2, name: "Tasya", type: "Jawaban", comment: "Bisa makan tahu dan tempe", datePosted: 7, monthPosted: false, dayPosted: true, yearPosted: false, totalLike: 4},
        {id: 3, name: "Agus", type: "Jawaban", comment: "Bisa coba makan daging ayam juga", datePosted: 7, monthPosted: false, dayPosted: false, yearPosted: true, totalLike: 2}
    ]

  return (
    <>
        <div className='flex flex-wrap'>
            {commentList.map(comments => (
            <div key={comments.id} className='card border mt-5 w-full px-5 py-5'>
                <div className='flex justify-end'>
                    {comments.type === 'Penanya' || comments.type === 'penanya' ? (
                    <p className='bg-other-color text-white px-3 py-1 rounded-full'>{comments.type}</p>
                    ) : (
                    <p className='bg-primary-color text-white px-3 py-1 rounded-full'>{comments.type}</p>
                    )}
                </div>
                <div className='flex items-center gap-5'>
                    <img src={UserImg} alt="" className='w-[70px] rounded-full' />
                    <p className='font-bold text-xl'>{comments.name}</p>
                    <p className='text-gray-500'>{comments.datePosted} {comments.monthPosted && " Bulan Lalu"} {comments.dayPosted && " Hari Lalu"} {comments.yearPosted && " Tahun Lalu"}</p>               
                </div>
                <div className='mt-5'>
                    <p>{comments.comment}</p>
                </div>
                <div className='flex gap-5 font-bold mt-10'>
                    <p>Balas</p>
                    <p>Bagikan</p>
                    <p>{comments.totalLike}</p>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default UserComment