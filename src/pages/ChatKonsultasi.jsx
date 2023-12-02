import React, { useState } from 'react'
import NavbarArticle from '../components/article_user/NavbarArticle'
import DoctorProfile from '../components/Konsultasi_Chat/DoctorProfile'
import ChatDoctor from '../components/Konsultasi_Chat/ChatDoctor'
import ChatClient from '../components/Konsultasi_Chat/ChatClient'
import ChatList from '../components/Konsultasi_Chat/ChatList'

const ChatKonsultasi = () => {

  const [chatData, setChatData] = useState([
    {type: 'client', message: 'Halo dok, saya ingin konsultasi masalah kesehatan saya'},
    {type: 'doctor', message: 'Halo, apa keluhan yang anda rasakan?'},
    {type: 'client', message: 'Saya merasa sakit kepala'},
    {type: 'doctor', message: 'Baik, anda bisa minum Bodrex'},
  ]);

  const handleMessage = (message, type) => {
    setChatData([...chatData, { type, message }]);
  };

  return (
    <>
        <NavbarArticle />
        <DoctorProfile />
        <div className="flex flex-col mt-10 ml-[130px] mr-[130px]">
      <div className="w-full">
        <ChatList chatData={chatData} />
      </div>
      <div className="w-full p-4 bg-gray-200">
        {/* Contoh form untuk mengirim pesan dari client */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const message = e.target.elements.message.value;
            handleSendMessage(message, 'client');
            e.target.reset();
          }}
        >
          <input
            type="text"
            name="message"
            placeholder="Ketik pesan..."
            className="p-2 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded w-full">
            Kirim
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default ChatKonsultasi