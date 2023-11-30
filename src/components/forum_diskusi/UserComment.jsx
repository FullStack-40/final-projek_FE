import React, { useEffect, useState } from "react";
import UserImg from "../../assets/doctor/doctor1.png";
import axios from "axios";

const UserComment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://easy-pear-termite-tutu.cyclic.app/discussions"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data.data);
  return (
    <>
      <div className="flex flex-wrap w-full">
        {data.data ? (
          data.data.map((data) => (
            <div key={data._id} className="card border mt-5 w-full px-5 py-5">
              <div className="flex items-center gap-5">
                <img src={UserImg} alt="" className="w-[70px] rounded-full" />
                <p className="font-bold text-xl">{data.author}</p>
                <p className="text-gray-500">
                  {new Date(data.created_at).toISOString().split("T")[0]}
                </p>
              </div>
              <div className="mt-5">
                <p>{data.question}</p>
              </div>
              <div className="flex gap-5 font-bold mt-10">
                <p>Balas</p>
                <p>Bagikan</p>
                <p>{data.liked}</p>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default UserComment;
