import React, { useState } from 'react'

const ChatDoctor = ({ message }) => {

  return (
      <div className='flex text-left justify-start mb-2'>
          <div className='mt-7 bg-other-color text-white px-5 py-5 rounded-lg max-w-xs'>
              {message}
          </div>
      </div>
  )
}

export default ChatDoctor