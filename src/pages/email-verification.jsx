import logo from "../assets/img/life-well-logo.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "../components/OTPInput";
import { useState } from "react";

function EmailVerification() {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/reset-password", { replace: true });
  };

  return (
    <div className=" bg-green-50 h-[100vh] flex items-center justify-center">
      <div className="border shadow-md rounded-md bg-white p-6 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw]">
        <div className="flex justify-center">
          <img src={logo} alt="lifewell logo" />
        </div>
        <h1 className="font-semibold text-base text-center mt-4 mb-6 sm:text-lg md:text-xl lg:text-2xl">
          Verifikasi
        </h1>
        <p className="text-center mb-10">
          Silahkan masukkan kode verifikasi yang sudah kamu terima.
        </p>

        <OTPInput otp={otp} setOtp={setOtp} />
        <div className="mt-20">
          <Button text={"Kirim"} type={"primary"} handleClick={handleClick} />
        </div>
        <p className="text-md text-center">
          Belum dapat kode?{" "}
          <Link className="text-blue-500 hover:cursor-pointer" to="/register">
            kirim ulang
          </Link>
        </p>
      </div>
    </div>
  );
}

export default EmailVerification;
