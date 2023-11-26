import React from 'react'
import NavbarArticle from '../components/article_user/NavbarArticle'
import DoctorProfile from '../components/Konsultasi_Chat/DoctorProfile'
import ChatDoctor from '../components/Konsultasi_Chat/ChatDoctor'
import ChatClient from '../components/Konsultasi_Chat/ChatClient'

const ChatKonsultasi = () => {
  return (
    <>
        <NavbarArticle />
        <DoctorProfile />
        <ChatDoctor />
        <ChatClient />
    </>
  )
}

export default ChatKonsultasi