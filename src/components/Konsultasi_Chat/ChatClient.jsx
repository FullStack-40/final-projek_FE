import React from 'react'

const ChatClient = ({ message }) => {
  return (
    <>
        <div className='flex text-right justify-end mb-2'>
            <div className='mt-7 bg-other-color text-white px-5 py-5 rounded-lg max-w-xs'>
                {message}
            </div>
        </div>
    </>
  )
}

export default ChatClient