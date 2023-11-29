import { useState } from "react";
import lifewellNavLogo from "../assets/img/lifewell-logo-nav.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header
      className={`bg-primary-color fixed top-0 py-4 px-4 flex justify-between text-base box-border w-full lg:py-0 lg:px-32`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative lg:justify-normal">
          <a href="#" className="lg:mr-2">
            <img src={lifewellNavLogo} alt="LifeWell Logo" width={170} />
          </a>

          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
