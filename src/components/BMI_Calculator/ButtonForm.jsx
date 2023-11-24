import React from 'react'

function ButtonForm() {
  return (
   <>
   <div className='ml-[25%] mr-[25%] mt-3 md:ml-[35%] md:mr-[35%] flex gap-2'>
    <button type="submit" className='bg-primary-color text-white px-3 py-3 rounded font-bold w-[50%] hover:bg-green-900 hover:shadow'>Simpan Hasil</button>
    <button type="reset" className='bg-red-700 text-white px-3 py-3 rounded font-bold w-[50%] hover:bg-red-900 hover:shadow'>Hapus</button>
   </div>
   </>
  )
}

export default ButtonForm