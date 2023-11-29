import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.clear();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="px-4 flex items-center w-full lg:px-0">
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className={`block absolute right-0 ${
          isMenuOpen ? "hamburger-active" : ""
        } lg:hidden`}
        onClick={toggleMenu}
      >
        <span className="hamburger-line origin-top-left"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line origin-bottom-left"></span>
      </button>
      <nav
        className={`${
          isMenuOpen ? "" : "hidden"
        } absolute bg-primary-color max-w-[200px] py-5 rounded-lg shadow-lg w-full right-0 top-full lg:static lg:flex lg:justify-between lg:items-center lg:shadow-none lg:max-w-full lg:rounded-none`}
      >
        <ul className="block lg:flex">
          <li className="group">
            <Link
              to="/"
              className="text-base text-white py-2 mx-6 flex group-hover:text-slate-300 lg:mx-2"
            >
              Beranda
            </Link>
          </li>
          <li className="group">
            <Link
              to="/list-doctor"
              className="text-base text-white py-2 mx-6 flex group-hover:text-slate-300 lg:mx-2"
            >
              Daftar Dokter
            </Link>
          </li>
          <li className="group">
            <Link
              to="/articles"
              className="text-base text-white py-2 mx-6 flex group-hover:text-slate-300 lg:mx-2"
            >
              Artikel
            </Link>
          </li>
          <li className="group">
            <Link
              to="/"
              className="text-base text-white py-2 mx-6 flex group-hover:text-slate-300 lg:mx-2"
            >
              Forum Diskusi
            </Link>
          </li>
          <li className="group">
            <Link
              to="/bmi-calculator"
              className="text-base text-white py-2 mx-6 flex group-hover:text-slate-300 lg:mx-2"
            >
              Kalkulator BMI
            </Link>
          </li>
        </ul>

        <div className="mt-3 lg:m-0">
          {user ? (
            <div className="relative inline-block text-left">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                {user.name}{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 absolute mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a to="" className="block px-4 py-2 hover:bg-gray-100 ">
                        Data diri
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/consultations"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Konsultasi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Notifikasi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/list-doctor"
                        className="block px-4 py-2 hover:bg-gray-100 "
                        onClick={logOut}
                      >
                        Keluar
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-other-color py-2 px-6 mx-6 rounded-md text-base text-white hover:bg-opacity-80"
            >
              Masuk
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
