"use client";
import { detona } from "@/assets/images";
import { routes } from "@/assets/constants";
import Image from "next/image";
import { BsFillCalendarCheckFill, BsFillPersonFill } from "react-icons/bs";
import { FiAlignLeft } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className="flex items-center fixed w-full top-0 z-50 bg-white"
      id="hola"
    >
      <div className="flex text-xl items-center basis-1/2 ml-8" id="asd">
        <Link href="/">
          <Image
            src={detona}
            alt="Logo"
            width={180}
            className=" mr-16 object-cover "
            sizes="100%"
            // priority={true}
          />
        </Link>
        <ul className="md:flex gap-5 hidden ">
          <li>
            <Link href={"./aboutus"}>{routes[3].name}</Link>
          </li>
          <li>
            <Link href={"./services"}>{routes[0].name}</Link>
          </li>
        </ul>
      </div>

      <div
        className="basis-1/2 flex justify-end items-center gap-7 mr-10 "
        id="qwe"
      >
        <Link
          href={"./contactus"}
          className=" font-bold border-2 p-2 rounded-xl hover:bg-blu2 hover:text-gold transition-all duration-300 "
        >
          {routes[4].name}
        </Link>
        <Link href={"./calendar"}>
          <BsFillCalendarCheckFill size={30} className="hidden md:block" />
        </Link>
        <BsFillPersonFill size={30} className=" hidden md:block" />
        <FiAlignLeft
          size={30}
          className="block md:hidden"
          onClick={handleMenuClick}
        />
      </div>
      {isMenuOpen && (
        <div className="">
          <ul>
            <li>
              <Link href={"./aboutus"}>{routes[3].name}</Link>
            </li>
            <li>
              <Link href={"./services"}>{routes[0].name}</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
