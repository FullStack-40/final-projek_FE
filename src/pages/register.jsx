import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/life-well-logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import SplitLine from "../components/SplitLine";
import { useState } from "react";
import isEmail from "../utils/emailChecker";
import Swal from "sweetalert2";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      !user.email ||
      !user.fullname ||
      !user.phone ||
      !user.password ||
      !user.confirmPassword ||
      !user.phone
    ) {
      Swal.fire({
        icon: "warning",
        title: "Periksa form anda sekali lagi!",
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }

    if (!isEmail(user.email)) {
      Swal.fire({
        icon: "warning",
        title: "Alamat email tidak valid!",
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }

    if (user.password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Panjang kata sandi harus lebih dari 6 karakter!",
        showConfirmButton: true,
      });
      return;
    }

    if (user.password !== user.confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Kata sandi tidak sama!",
        showConfirmButton: true,
      });
      return;
    }

    const userData = {
      name: user.fullname,
      email: user.email,
      phone_number: user.phone,
      password: user.password,
    };
    try {
      await axios.post("http://localhost:3000/auth/register", userData);
      navigate("/email-verification", { replace: true });
    } catch (error) {
      let message;
      if (error.response.data.error[0].msg) {
        message = error.response.data.error[0].msg;
      }
      Swal.fire({
        icon: "error",
        title: `Gagal membuat akun! ${message}`,
        showConfirmButton: true,
      });
      console.log(error);
    }
  };

  return (
    <div className="bg-green-50 flex items-center justify-center">
      <div className="border shadow-md rounded-md bg-white p-6 w-[90vw] my-10 sm:w-[50vw] md:w-[40vw] lg:w-[35vw]">
        <div className="flex justify-center">
          <img src={logo} alt="lifewell logo" />
        </div>
        <h1 className="font-semibold text-center mt-4 mb-6  sm:text-lg md:text-xl lg:text-2xl">
          Daftar
        </h1>
        <Input
          text={"Nama lengkap"}
          type={"text"}
          name={"fullname"}
          input={user.fullname}
          handleChange={handleChange}
          placeholder={"Masukkan nama lengkap"}
        />
        <Input
          text={"Email"}
          type={"email"}
          name={"email"}
          input={user.email}
          handleChange={handleChange}
          placeholder={"Masukkan alamat email"}
        />
        <Input
          text={"Nomor handphone"}
          type={"text"}
          name={"phone"}
          input={user.phone}
          handleChange={handleChange}
          placeholder={"Masukkan nomor handphone"}
        />
        <Input
          text={"Kata sandi"}
          type={"password"}
          name={"password"}
          input={user.password}
          handleChange={handleChange}
          placeholder={"Masukkan kata sandi"}
        />
        <Input
          text={"Ulangi sandi"}
          type={"password"}
          name={"confirmPassword"}
          input={user.confirmPassword}
          handleChange={handleChange}
          placeholder={"Masukkan ulang kata sandi"}
        />

        <div className="mt-10">
          <Button text={"Daftar"} type={"primary"} handleClick={handleClick} />
        </div>
        <div className="relative flex py-5 items-center">
          <SplitLine />
        </div>
        <div>
          <button className="bg-white py-2 rounded-sm w-full font-bold border border-primary-color">
            <div className="flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M19.1225 9.21586C19.1225 8.60803 19.0616 7.98059 18.9602 7.39236H10.18V10.8629H15.2088C15.0061 11.9805 14.3369 12.9609 13.3433 13.5883L16.3444 15.8432C18.1086 14.255 19.1225 11.9413 19.1225 9.21586Z"
                  fill="#4280EF"
                />
                <path
                  d="M10.18 18C12.6944 18 14.8033 17.1961 16.3444 15.8236L13.3433 13.5883C12.5119 14.1373 11.4372 14.4511 10.18 14.4511C7.74663 14.4511 5.69857 12.8628 4.9483 10.7452L1.86607 13.0393C3.44774 16.0785 6.65163 18 10.18 18Z"
                  fill="#34A353"
                />
                <path
                  d="M4.9483 10.7256C4.56302 9.60802 4.56302 8.39235 4.9483 7.27472L1.86607 4.96104C0.548019 7.51002 0.548019 10.51 1.86607 13.0393L4.9483 10.7256Z"
                  fill="#F6B704"
                />
                <path
                  d="M10.18 3.5689C11.498 3.54929 12.7958 4.03948 13.7489 4.92182L16.4052 2.33363C14.7222 0.804248 12.4916 -0.0192653 10.18 0.000342207C6.65163 0.000342207 3.44774 1.92187 1.86607 4.96103L4.9483 7.27471C5.69857 5.1375 7.74663 3.5689 10.18 3.5689Z"
                  fill="#E54335"
                />
              </svg>
              <p className="text-base md:text-lg">Daftar dengan Google</p>
            </div>
          </button>
        </div>
        <div className="flex justify-center mt-2 mb-5">
          <p className="text-md">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-500 hover:cursor-pointer">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
