import React from 'react'
import logoLifeWell from '../../assets/life-well-logo-navbar1.png'

function NavbarArticle() {
  return (
    <div className='bg-primary-color min-w-full h-20 flex text-white items-center justify-between px-10 md:px-[130px]'>
        <img src={logoLifeWell} alt="Logo LifeWell" className='w-[200px] h-auto cursor-pointer' />
            <ul className='hidden md:flex gap-4'>
                <li><a href="">Beranda</a></li>
                <li><a href="#">Daftar Dokter</a></li>
                <li><a href="#">Forum Diskusi</a></li>
                <li><a href='#'></a></li>
                <li><a href="#">Kalkulator BMI</a></li>
            </ul>
        <div className='md:hidden'>
            <button>X</button>
        </div>
        <div className='hidden md:flex items-center'>
            <img src="#" alt="User Profile" className='' />
        </div>
    </div>
  )
}

export default NavbarArticle