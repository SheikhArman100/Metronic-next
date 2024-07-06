"use client";
import React, { useState } from "react";
import appleBlackImage from "@/public/assets/assets/media/brand-logos/apple-black.svg";
import googleImage from "@/public/assets/assets/media/brand-logos/google.svg";
import Link from "next/link.js";
import Image from "next/image.js";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isHidden, setIsHidden] = useState({
    password: true,
    passwordConfirmation: true,
  });
  return (
    <section className="h-full w-full flex items-center justify-center ">
      <div className="bg-white border border-[#F1F1F4] rounded-xl w-full max-w-[370px] flex flex-col">
        <form
          action="#"
          className="flex flex-col flex-grow gap-5 p-10"
          id="sign_up_form"
        >
          <div className="text-center mb-2.5">
            <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">
              Sign up
            </h3>
            <div className="flex items-center justify-center font-medium">
              <span className="text-2sm text-gray-600 me-1.5">
                Already have an Account ?
              </span>
              <a className="text-2sm text-[#1B84FF]" href="/auth/signin">
                Sign In
              </a>
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
                className="size-3.5 shrink-0 "
                src={appleBlackImage}
              />
              Use Apple
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="border-t border-gray-200 w-full"></span>
            <span className="text-2xs text-gray-500 font-medium uppercase">
              or
            </span>
            <span className="border-t border-gray-200 w-full"></span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium flex  text-gray-900">
              Email
            </label>
            <input
              className="text-gray-700 px-3 h-10 rounded-lg text-sm border border-gray-300"
              name="user_email"
              placeholder="email@email.com"
              type="text"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium flex text-gray-900 ">
              Password
            </label>
            <label
              className="text-gray-700 px-3 h-10 rounded-xl text-sm border border-gray-300 flex items-center justify-between"
              data-toggle-password="true"
            >
              <input
                name="user_password"
                placeholder="Enter Password"
                type={isHidden.password ? "password" : "text"}
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <button
                className=""
                type="button"
                onClick={() =>
                  setIsHidden({ ...isHidden, password: !isHidden.password })
                }
              >
                {isHidden.password ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium flex text-gray-900">
              Confirm Password
            </label>
            <label className="text-gray-700 px-3 h-10 rounded-xl text-sm border border-gray-300 flex items-center justify-between">
              <input
                name="user_password"
                placeholder="Re-enter Password"
                type={isHidden.passwordConfirmation ? "password" : "text"}
                value={data.confirmPassword}
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() =>
                  setIsHidden({
                    ...isHidden,
                    passwordConfirmation: !isHidden.passwordConfirmation,
                  })
                }
              >
                {isHidden.passwordConfirmation ? (
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
            <span className="text-gray-800 text-sm font-medium flex items-center gap-x-1">
              I accept
              <a className="text-2sm link" href="#">
                Terms &amp; Conditions
              </a>
            </span>
          </label>
          <button className="bg-[#1B84FF] flex items-center justify-center grow text-sm px-4 h-10 rounded-lg text-white">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
