import React from "react"
import gambar1 from "../../assets/landing/gambar1.jpg"
import gambar2 from "../../assets/landing/gambar2.jpg"
import logo1 from "../../assets/landing/logo1.png"
import logo2 from "../../assets/landing/logo2.jpg"
import logo3 from "../../assets/landing/logo3.jpg"
import gambar3 from "../../assets/landing/gambar3.png"
import logoLifeWell from "../../assets/life-well-logo-navbar1.png"

const Herolanding = () => {
  return (
    <div>
      <div className="flex justify-between pt-20 pb-36 bg-primary-color">
        <div className=" text-white pl-32">
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">Livewell</h1>
          <p className="text-sm text-justify md:text-base">
            Life Well adalah aplikasi website yang bertujuan<br /> untuk memberikan
            solusi kesehatan yang menyediakan<br /> fasilitas berupa sesi konsultasi
            gizi dan kesehatan dengan<br /> dokter-dokter yang sudah berpengalaman
            dibidangnya,<br /> juga membantu Anda mencapai tujuan kesehatan Anda<br /> dengan mudah dan efektif.
          </p>
          <a href="#" className="bg-other-color text-third-color px-4 py-4 inline-block rounded-md font-bold mt-7 hover:bg-green-900">
            konsultasi sekarang
          </a>
        </div>
        <div className="pr-32">
          <img className=" w-96 h-auto" src={gambar1} alt="" />
        </div>
      </div>


      <div className="flex justify-between pt-24">
        <div className=" pl-32">
          <img className=" w-96 h-auto" src={gambar2} alt="" />
        </div>

        <div className="pr-72">
          <h1 className=" text-3xl font-bold">Apa Kelebihan <br /> <span className="text-green-600">LifeWell </span> ?</h1>
          <p className=" pt-8">Berikut adalah beberapa kelebihan yang kami <br /> tawarkan untuk membantu anda <br />dalam menangani masalah anda.</p>
        </div>
      </div>


      <div className=" pt-14 flex justify-between ">
        <div className=" bg-primary-color w-72 h-auto pl-6 pr-4 pt-7 pb-5 rounded-lg ml-40">
          <img className=" w-14 h-auto" src={logo1} alt="" />
          <h1 className="text-white font-bold text-2xl pt-5">Dokter Berpengalaman</h1>
          <p className="text-white font-normal">Dokter yang berpengalaman pada masing-masing bidang dengan jam terbang tinggi dan kecakapan dalam membantu anda.</p>
        </div>

        <div className=" bg-primary-color w-72 h-auto pl-6 pr-4 pt-7 pb-5 rounded-lg">
          <img className=" w-14 h-auto" src={logo2} alt="" />
          <h1 className="text-white font-bold text-2xl pt-5">Layanan 24 Jam</h1>
          <p className="text-white font-normal">Layanan 24 Jam dengan cepat tanggap yang senantiasa membantu anda dalam keadaan apapun.</p>
        </div>

        <div className=" bg-primary-color w-72 h-auto pl-6 pr-4 pt-7 pb-5 rounded-lg mr-32 ">
          <img className=" w-14 h-auto" src={logo3} alt="" />
          <h1 className="text-white font-bold text-2xl pt-5">Harga Terjangkau</h1>
          <p className="text-white font-normal">Harga yang terjangkau yang dapat memudahkan anda dalam memesan jasa konsultasi.</p>
        </div>
      </div>


      <div className=" text-center pt-28">
        <div>
          <h1 className=" text-3xl font-bold pb-3">Dokter <span className=" text-green-600">Terbaik Kami</span>.</h1>
        </div>

        <div>
          <h5>Dokter-dokter kami adalah para ahli dalam beragam bidang kesehatan. <br /> Mereka memiliki pengalaman luas, pengetahuan mendalam, <br />dan komitmen untuk memberikan perawatan terbaik kepada Anda. <br />Kami mengerti bahwa setiap individu memiliki kebutuhan yang unik <br />dan inilah mengapa kami memiliki beragam spesialisasi.</h5>
        </div>
      </div>


      <div className="flex justify-between pt-28">
        <div className=" ml-40">
          <img className=" w-80 h-auto" src={gambar3} alt="" />
        </div>

        <div className=" mr-52 pt-11">
          <h1 className="text-2xl font-bold">Dr. Agus Hermawan.</h1>
          <h5 className="text-green-600 font-semibold mt-3">Specialist Gizi</h5>
          <p className=" mt-2">Dokter Agus Hermawan adalah seorang ahli gizi terkemuka <br />
            yang memiliki dedikasi yang kuat untuk membantu orang <br />
            mencapai kesehatan optimal melalui pemahaman gizi <br />
            yang mendalam. Dengan pengalaman bertahun-tahun <br />
            di bidangnya, Dr. Agus Hermawan telah menjadi pionir dalam <br />
            memberikan nasihat gizi yang berkualitas kepada individu  <br />
            dari berbagai latar belakang.</p>
        </div>
      </div>


      <div className="bg-primary-color mt-32 pt-24 pb-20 text-white flex">
        <div className=" ml-36">
          <img className=" w-44 pb-4" src={logoLifeWell} alt="" />
          <p>Sebuah aplikasi website kesehatan<br /> yang menyediakan fasilitas berupa<br /> sesi konsultasi dengan dokter-dokter<br /> yang sudah berpengalaman dibidangnya,<br /> juga menyediakan artikel-artikel terkait <br />kesehatan.</p>
        </div>

        <div className=" ml-24">
          <h4 className="font-bold mb-4">Fitur</h4>
          <p>konsultasi</p>
          <p>Arikel</p>
          <p>Forum Diskusi</p>
          <p>Kalkulator BMI</p>
        </div>

        <div className=" ml-20">
          <h4 className="font-bold mb-4">Kontak Kami</h4>
          <p>Alamat : Jalan Lorem Ipsum <br /> No 10, Jakarta, <br />Indonesia</p>
          <p>Telp : +62 8123456789</p>
          <p>contact@lifewell.com</p>
        </div>

        <div className="ml-20">
          <h4 className="font-bold mb-4">Kabar Berita</h4>
          <p>Dapatkan kabar <br />berita kami dengan <br /> cepat dan mudah.</p>
        </div>
      </div>

    </div>

  );
};

export default Herolanding;
