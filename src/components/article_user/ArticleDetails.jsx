import React from 'react'
import NavbarArticle from './NavbarArticle'
import ArticleMainImg from '../../assets/articles/main-article-details.png'
import OtherArticleImg from '../../assets/articles/main-article-images.png'

const ArticleDetails = () => {

  const AuthorArticle = "Ahmad Bagus Sutarjo";

  return (
    <>
    <NavbarArticle />
    <div>
        <img src={ArticleMainImg} alt="" className='w-full h-[70vh]'/>
    </div>
    <div className='ml-[260px] mr-[260px]'>
      <div className='mt-7 font-bold'>
        <p><a href="#" className='text-primary-color'>Home</a> / <a href="#" className='text-primary-color'>Artikel </a> / <a href="#" className='text-other-color'>Pentingnya Gizi Seimbang: Tips untuk Mencapai Diet yang Sehat</a></p>
        <p className='text-xl text-other-color mt-2'>Gizi</p>
      </div>
      <div className='mt-10 mb-10 max-w-3xl'>
        <h1 className='text-3xl font-bold mb-2'>Pentingnya Gizi Seimbang: Tips untuk Mencapai Diet yang Sehat</h1>
        <p>Oleh : <a href="#" className='text-primary-color font-bold'>{AuthorArticle}</a></p>
      </div>
      <div className='mt-10 mb-10'>
        <p className='text-justify'>
        Kesehatan kita adalah aset berharga yang perlu dijaga, dan salah satu kunci utama menuju kesehatan yang baik adalah melalui pola makan yang seimbang. Gizi yang tepat adalah bahan bakar bagi tubuh kita, memberikan energi dan nutrisi yang diperlukan untuk menjalani kehidupan yang aktif dan bugar. Artikel ini akan membahas pentingnya gizi seimbang dan memberikan beberapa tips praktis untuk mencapai diet yang sehat. <br />
        Mengapa Gizi Seimbang Penting? <br />
        Gizi yang seimbang adalah fondasi dari kesehatan yang baik. Diet yang mencakup berbagai nutrisi penting seperti karbohidrat, protein, lemak, serat, vitamin, dan mineral, dapat memiliki banyak manfaat, termasuk:
        Energi Optimal: Gizi seimbang memberikan energi yang cukup untuk menjalani aktivitas sehari-hari tanpa kelebihan atau kekurangan.
        Pertumbuhan dan Perkembangan: Nutrisi yang tepat penting untuk pertumbuhan anak-anak dan perkembangan yang optimal.
        Kesehatan Jantung: Diet seimbang dapat membantu menjaga tekanan darah dan kadar kolesterol yang sehat, mengurangi risiko penyakit jantung.
        Manajemen Berat Badan: Gizi yang baik dapat membantu Anda mencapai dan mempertahankan berat badan yang sehat.
        Sistem Kekebalan yang Kuat: Nutrisi yang mencukupi dapat meningkatkan sistem kekebalan tubuh, membantu melawan penyakit dan infeksi.
        Tips untuk Mencapai Diet yang Sehat
        Variasi dalam Makanan: Cobalah untuk mencakup berbagai makanan dalam diet Anda. Buah, sayuran, biji-bijian, protein tanpa lemak, dan produk susu rendah lemak semuanya harus menjadi bagian dari menu harian Anda.
        Porsi yang Terkendali: Perhatikan ukuran porsi Anda. Terlalu banyak kalori dapat mengakibatkan penambahan berat badan yang tidak diinginkan.
        Hindari Makanan Olahan Berlebihan: Batasi konsumsi makanan olahan, makanan cepat saji, dan gula tambahan. Makanan alami dan segar lebih baik untuk kesehatan Anda.
        Perhatikan Kebutuhan Kalori: Tidak semua orang memerlukan jumlah kalori yang sama. Pastikan untuk memahami kebutuhan kalori Anda berdasarkan usia, jenis kelamin, dan tingkat aktivitas fisik.
        Minum Air yang Cukup: Jangan lupa untuk minum air yang cukup setiap hari. Air membantu dalam proses pencernaan dan menjaga tubuh Anda terhidrasi.
        Rencanakan Makanan Anda: Merencanakan makanan Anda dapat membantu Anda menghindari makanan tidak sehat saat lapar mendadak.
        Perhatikan Asupan Gula dan Garam: Batasi konsumsi gula tambahan dan garam berlebih dalam makanan Anda.
        Pantau Kebutuhan Nutrisi Khusus: Jika Anda memiliki kondisi khusus seperti alergi makanan atau penyakit tertentu, konsultasikan dengan seorang ahli gizi atau dokter untuk panduan yang lebih spesifik.
        </p>
      </div>
      <div>
        <h3 className='font-bold text-xl'>Artikel Terkait</h3>
      </div>
      <div className='flex mb-14'>
        <div>
          <img src={OtherArticleImg} alt="Articles" className=' rounded-md mt-5 mb-4 w-[50%]'/>
          <h3 className='font-bold w-[50%] mb-5'>"Ketahui Fakta dan Mitos Diet Rendah Karbohidrat"</h3>
          <a href="#" className='bg-primary-color text-white w-full px-5 py-2 inline-blockblock'>Lihat Selengkapnya</a>
        </div>
        <div>
          <img src={OtherArticleImg} alt="Articles" className=' rounded-md mt-5 mb-4 w-[50%]'/>
          <h3 className='font-bold w-[50%] mb-5'>"Ketahui Fakta dan Mitos Diet Rendah Karbohidrat"</h3>
          <a href="#" className='bg-primary-color text-white w-full px-5 py-2 inline-blockblock'>Lihat Selengkapnya</a>
        </div>
        <div>
          <img src={OtherArticleImg} alt="Articles" className=' rounded-md mt-5 mb-4 w-[50%]'/>
          <h3 className='font-bold w-[50%] mb-5'>"Ketahui Fakta dan Mitos Diet Rendah Karbohidrat"</h3>
          <a href="#" className='bg-primary-color text-white w-full px-5 py-2 inline-blockblock'>Lihat Selengkapnya</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default ArticleDetails