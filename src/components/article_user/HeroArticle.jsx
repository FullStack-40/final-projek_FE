import React from "react";
import MainArticleImg from "../../assets/articles/main-article-images.png";

const HeroArticle = () => {
  return (
    <div className="md:flex ml-[130px] mr-[130px] mt-32 md:mt-32 gap-10">
      <div className="md:w-[50%]">
        <h1 className="mb-3 text-4xl font-bold md:text-5xl">
          Dampak Dari
          <br />
          Kekurangan <span className="text-primary-color">Gizi</span>
        </h1>
        <p className="text-sm text-justify md:text-base">
          Saat seseorang mengalami kekurangan gizi, maka tubuh tidak mendapatkan
          cukup nutrisi, sehingga bisa menyebabkan wasting (berat badan rendah
          menurut tinggi badan), stunting (tinggi badan rendah menurut umur),
          dan kekurangan berat badan (berat badan rendah menurut umur).
        </p>
        <a
          href="#"
          className="bg-other-color text-third-color px-4 py-4 inline-block rounded-md font-bold mt-4 hover:bg-green-900"
        >
          Lebih Lengkap
        </a>
      </div>
      <div className="mt-7 mb-10 md:w-[50%]">
        <img
          src={MainArticleImg}
          alt=""
          className="w-full md:w-4/5 rounded-md"
        />
      </div>
    </div>
  );
};

export default HeroArticle;
