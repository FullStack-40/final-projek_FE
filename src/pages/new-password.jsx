import logo from "../assets/img/life-well-logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (!confirmpassword || !password) {
      Swal.fire({
        icon: "warning",
        title: "Periksa form anda sekali lagi!",
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }
    if (confirmpassword !== password) {
      Swal.fire({
        icon: "warning",
        title: "Kata sandi tidak sama!",
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }
    setPassword("");
    setConfirmPassword("");
    navigate("/login", { replace: true });
  };

  return (
    <div className=" bg-green-50 h-[100vh] flex items-center justify-center">
      <div className="border shadow-md rounded-md bg-white p-6 w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw]">
        <div className="flex justify-center">
          <img src={logo} alt="lifewell logo" />
        </div>
        <h1 className="font-semibold text-base text-center mt-4 mb-6 sm:text-lg md:text-xl lg:text-2xl">
          Reset Kata Sandi
        </h1>
        <p className="text-center mb-4">
          Silahkan masukkan kata sandi baru anda
        </p>
        <Input
          text={"Kata sandi"}
          type={"password"}
          name={"password"}
          input={password}
          setInput={setPassword}
          placeholder={"Masukkan kata sandi"}
        />
        <Input
          text={"Ulangi kata sandi"}
          type={"password"}
          name={"confirmPassword"}
          input={confirmpassword}
          setInput={setConfirmPassword}
          placeholder={"Masukkan ulang kata sandi "}
        />

        <div className="mt-10">
          <Button text={"Kirim"} type={"primary"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
