import React from 'react'

const FilterDiskusi = () => {
  return (
    <>
        <div className='border'>
            <h2>Urutan Diskusi</h2>
            <input type="radio" name="terbaru" id="terbaru" value="Terbaru" />
            <input type="radio" name="terbaru" id="terbaru" value="Terlama" />
            
        </div>
    </>
  )
}

export default FilterDiskusi