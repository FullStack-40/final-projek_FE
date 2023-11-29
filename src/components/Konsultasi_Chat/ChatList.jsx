import React from 'react'
import ChatClient from './ChatClient'
import ChatDoctor from './ChatDoctor'

const ChatList = ({ chatData }) => {
  return (
    <div className='p-4 overflow-y-auto h-64'>
        {chatData.map((chat, index) => {
            return chat.type === 'client' ? (
                <ChatClient key={index} message={chat.message} />
            ) : (
                <ChatDoctor key={index} message={chat.message}/>
            )
        })}
    </div>
  )
}

export default ChatList