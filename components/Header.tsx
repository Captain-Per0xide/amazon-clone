"use client";
import Image from "next/image";
import React, { useState } from "react";
import amazonLogo from "../public/amazon-logo-2.webp";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
const itemList = [
  "All",
  "Fresh",
  "MX Player",
  "Sell",
  "Best Sellers",
  "Today's Deals",
  "Mobiles",
  "Electronics",
  "Home & Kitchen",
  "Customer Service",
  "Prime",
  "New Releases",
  "Fashion",
  "Amazon Pay",
  "Computers",
  "Car & Motorbike",
  "Sports, Fitness & Outdoors",
];
const Header = () => {
    const [query,setQuery]=useState<string>("");
    const router=useRouter();
    const searchHandler=()=>{
        router.push(`/search/${query}`);
    }
  return (
    <>
      <div className="bg-[#131921] text-white py-2">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="w-[10%]">
            <Image src={amazonLogo} alt={"logo"} width={150} height={150} />
          </div>
          <div className="flex items-center w-[60%]">
            <input
            value={query}
            onChange={(e)=>{setQuery(e.target.value)}}
              type="text"
              className="w-full px-2 py-2 rounded-l-md text-black outline-none"
              placeholder="Search Amazon.in"
            />
            <div
            onClick={searchHandler}
            className=" cursor-pointer hover:bg-[#a36f2a] bg-[#F3A847] p-1.5 rounded-r-md">
              <IoSearch className="text-3xl" />
            </div>
          </div>
          <div className="flex items-center gap-7 w-[20%]">
            <div className="cursor-pointer">
              <h1 className="text-xs">Hello,Ranju</h1>
              <h1 className="font-medium text-sm">Account & List</h1>
            </div>
            <div className=" cursor-pointer">
              <p className="text-xs">Returns</p>
              <p className="font-medium text-sm">& Orders</p>
            </div>
            <div>
              <p className="relative top-2 left-3.5">9</p>
              <div className="flex">
                <div className=" cursor-pointer">
                  <IoCartOutline className="text-3xl" />
                </div>
                <h1 className="mt-4">cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232F3E] w-full  flex items-center text-white py-2 justify-between">
        <div>
        {itemList.map((item, index) => {
          return <Link key={index} href={`/${item}`} className="mx-2 border border-transparent hover:border-white py-2">{item}</Link>;
        })}

        </div>
        <div>
        <h1 className="font-bold text-[#F3A847] hover:underline pr-2">Sign Out</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
