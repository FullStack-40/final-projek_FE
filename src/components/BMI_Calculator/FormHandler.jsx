import React from 'react'

const FormHandler = () => {
  return (
    <>
        <form action="#">
            <label htmlFor="tinggiBadan">Tinggi Badan (Cm)</label>
            <input type="number" name="tinggiBadan" id="tinggiBadan" />
            <label htmlFor="beratBadan">Berat Badan (Kg)</label>
            <input type="number" name="beratBadan" id="beratBadan" />
            <label htmlFor="usia">Usia Anda</label>
            <input type="number" name="usia" id="usia" />
            <label htmlFor="hasil">Hasil Perhitungan</label>
            <input type="number" name="hasil" id="hasil" />
        </form>
    </>
  )
}

export default FormHandler