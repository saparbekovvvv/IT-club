import React from "react";
import { booksData } from "../books/Books";
import { GoChevronRight } from "react-icons/go";

export default function Categories() {
  return (
    <section id="categoties">
       <div className="container">
           <div className=" p-[50px] ">
            <h1 className=" text-[36px] font-[500]">Your Cart</h1>
            <div className="flex">  <p>Not ready to checkout?</p>
            <button>Continue Shopping</button></div>
              <div className=" flex flex-col gap-[32px] pt-[40px] relative  ">

                {booksData.slice(0,3).map((book,index) => (
                    <div key={index} className=" flex gap-[32px]  relative w-[650px] border-b border-[#818EEA] pb-[32px]">
                    <img src={book.image} alt="" />
                    <div className="flex flex-col gap-[150px] ">
                      <div className=" absolute right-0">
                      <button>Remove</button>

                      </div>
            <div className=" flex flex-col gap-[10px]">
              <h1>{book.title}</h1>
              <p>{book.author}</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3>Quantity: 1</h3>
                  <h2>$99</h2>
                </div>
                  </div>
                  </div>
                ))}
              <div className=" absolute right-0   ">
                 <div className=" flex flex-col gap-[10px] ">
                 <h1  >Order Summary</h1>
                 <div className="flex items-center gap-[20px] pt-[30px]  ">
                 <h2>Shipping</h2>
                 <h1 className=" pl-[30px]">Select Method </h1>
                    <GoChevronRight/>
                 </div>
                 <div className="flex items-center gap-[20px] border-b border-[#818EEA] pb-[20px] ">
                 <h2>Shipping</h2>
                 <h1 className=" pl-[30px]">Select Method </h1>
                    <GoChevronRight/>
                 </div>
                 <div className=" flex justify-between">
                 <span>Total</span>
                        <span>$188</span>
                 </div>
                 <div className=" pt-[30px]">
                  <button className=" bg-[#818EEA] p-[10px] text-[#fff] w-full" >Continue to checkout</button>
                 </div>

                     

                    
                 </div>
              </div>
              </div>
           </div>

       </div>
    </section>
  );
}
