import React from "react";

export default function Footer() {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-[24px] text-[#fff] md:w-1/2">
            <h1 className="text-[36px] font-[600]">
              Sign up for our newsletter
            </h1>
            <p className="text-[14px] font-[400]">
              Be the first to know about our special offers, news, and updates.
            </p>
            <div className="flex">
              <input
                className="px-4 py-2 bg-transparent placeholder:text-[#fff] border-l border-t border-b border-white rounded-l-md outline-none text-white"
                type="text"
                placeholder="Email Address"
              />
              <button className="bg-transparent border-r border-t border-b text-white px-4 py-2 rounded-r-md">
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <div className="flex gap-[85px]">
              <div className="flex flex-col text-[#fff]">
                <h2 className="text-[16px] font-[500] mb-4">Lorem Ipsum</h2>
                <ul className="list-none text-[16px] font-[300] opacity-[0.5]">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
              <div className="flex flex-col text-[#fff]">
                <h2 className="text-[16px] font-[500] mb-4">Lorem Ipsum</h2>
                <ul className="list-none text-[16px] font-[300] opacity-[0.5]">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
              <div className="flex flex-col text-[#fff]">
                <h2 className="text-[16px] font-[500] mb-4">Lorem Ipsum</h2>
                <ul className="list-none text-[16px] font-[300] opacity-[0.5]">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
              <div className="flex flex-col text-[#fff]">
                <h2 className="text-[16px] font-[500] mb-4">Lorem Ipsum</h2>
                <ul className="list-none text-[16px] font-[300] opacity-[0.5]">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
