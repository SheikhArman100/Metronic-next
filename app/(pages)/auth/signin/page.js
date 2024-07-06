"use client";
import appleBlackImage from "@/public/assets/assets/media/brand-logos/apple-black.svg";
import googleImage from "@/public/assets/assets/media/brand-logos/google.svg";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image.js";
import Link from "next/link.js";
import { useState } from "react";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isHidden, setIsHidden] = useState(true);
  return (
    <section className="h-full w-full flex items-center justify-center ">
      <div className="bg-white border border-[#F1F1F4] rounded-xl w-full max-w-[370px] flex flex-col">
        <form
          action="#"
          className=" flex flex-col flex-grow gap-5 p-10"
          id="sign_in_form"
          
        >
          <div className="text-center mb-2.5">
            <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">
              Sign in
            </h3>
            <div className="flex items-center justify-center font-medium">
              <span className="text-2sm text-gray-600 me-1.5">
                Need an account?
              </span>
              <Link
                className="text-2sm text-[#1B84FF] "
                href="/auth/signup"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              className="flex items-center justify-center px-4 py-2 rounded-lg gap-1 border border-gray-300 text-xs font-medium text-gray-700"
              href="#"
            >
              <Image
                alt=""
                height="14"
                width="14"
                className="size-3.5 shrink-0"
                src={googleImage}
              />
              Use Google
            </Link>
            <Link
              className="flex items-center justify-center px-4 py-2 rounded-lg gap-1 border border-gray-300 text-xs font-medium text-gray-700"
              href="#"
            >
              <Image
                alt=""
                height="14"
                width="14"
                className="size-3.5 shrink-0"
                src={appleBlackImage}
              />
              Use Apple
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="border-t border-gray-200 w-full"></span>
            <span className="text-2xs text-gray-500 font-medium uppercase">
              Or
            </span>
            <span className="border-t border-gray-200 w-full"></span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium flex text-gray-900">
              Email
            </label>
            <input
              className="text-gray-700 px-3 h-10 rounded-xl text-sm border border-gray-300"
              placeholder="email@email.com"
              type="text"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <label className="text-sm font-medium flex text-gray-900">
                Password
              </label>
              <Link
                className="text-2sm text-[#1B84FF] shrink-0"
                href="html/demo1/authentication/classNameic/reset-password/enter-email.html"
              >
                Forgot Password?
              </Link>
            </div>
            <label
              className="text-gray-700 px-3 h-10 rounded-xl text-sm border border-gray-300 flex items-center justify-between"
              
            >
              <input
                name="user_password"
                placeholder="Enter Password"
                type={isHidden ? "password" : "text"}
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <button
                className=""
                type="button"
                onClick={() => setIsHidden(!isHidden)}
              >
                {isHidden ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </label>
          </div>
          <label className="flex items-center gap-x-2">
            <input
              className="checkbox size-5 rounded-lg"
              name="check"
              type="checkbox"
              value="1"
            />
            <span className="text-gray-800 text-sm font-medium">Remember me</span>
          </label>
          <button className="bg-[#1B84FF] flex items-center justify-center grow text-sm px-4 h-10 rounded-lg text-white">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
