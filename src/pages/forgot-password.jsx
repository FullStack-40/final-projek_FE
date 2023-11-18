import logo from "../assets/img/life-well-logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (!email) {
      alert("mohon periksa form anda sekali lagi!");
      return;
    }
    setEmail("");
    navigate("/email-verification", { replace: true });
  };

  return (
    <div className=" bg-green-50 h-[100vh] flex items-center justify-center">
      <div className="border shadow-md rounded-md bg-white p-6 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw]">
        <div className="flex justify-center">
          <img src={logo} alt="lifewell logo" />
        </div>
        <h1 className="font-semibold text-base text-center mt-4 mb-6 sm:text-lg md:text-xl lg:text-2xl">
          Lupa Kata Sandi
        </h1>
        <p className="text-center mb-4">
          Masukan alamat email yang telah terdaftar untuk menerima email reset
          kata sandi.
        </p>
        <Input
          text={"Email"}
          type={"email"}
          name={"email"}
          input={email}
          setInput={setEmail}
          placeholder={"Masukkan alamat email"}
        />

        <div className="mt-10">
          <Button text={"Kirim"} type={"primary"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
