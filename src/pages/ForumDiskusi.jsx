import React from 'react'
import NavbarArticle from '../components/article_user/NavbarArticle'
import BuatDiskusiButton from '../components/forum_diskusi/BuatDiskusiButton'
import HeadingTextForum from '../components/forum_diskusi/HeadingTextForum'
import InputSearchDiskusi from '../components/forum_diskusi/InputSearchDiskusi'
import FilterDiskusi from '../components/forum_diskusi/FilterDiskusi'

const ForumDiskusi = () => {
  return (
    <>
            <NavbarArticle />
        <div className='ml-[130px] mr-[130px]'>
            <HeadingTextForum />
            <div className='flex gap-1 items-center mt-10'>
                <BuatDiskusiButton />
                <InputSearchDiskusi />
            </div>
            <div>
                <FilterDiskusi />
            </div>
        </div>
    </>
  )
}

export default ForumDiskusi