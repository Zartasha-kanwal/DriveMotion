import React from "react";
import { Button } from "@/components/ui/button";
import ScrollBackground3D from "@/components/ScrollBackground3D";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggleAnswer = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
  return (
    <div className="relative min-h-[100vh] w-full overflow-x-hidden text-white">
      {/* 3D Scrolling background */}
      <ScrollBackground3D />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        {/* Section 1 */}
        <div className="lg:px-20 px-6">
          <h1 className="text-4xl font-bold text-blue-600">Our services</h1>
          <p className="text-xl">We provide our services</p>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 mt-4">
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group px-2 flex flex-col items-center justify-center">
              <div className="h-20 w-20 rounded-full flex items-center justify-center mt-5 shadow-[inset_0_4px_6px_rgba(255,255,255,0.4)]">
                <i className="fa-solid fa-traffic-light text-4xl group-hover:text-blue-600"></i>
              </div>
              <h1 className="font-bold text-lg mt-4">Traffic guidelines</h1>
              <p className="px-10 mt-5">
                We also teach a full and final traffic guideline for you.
              </p>
              <p className="underline mt-5 mb-5">Read more</p>
            </div>
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group px-2 flex flex-col items-center justify-center">
              <div className="h-20 w-20 rounded-full flex items-center justify-center mt-5 shadow-[inset_0_4px_6px_rgba(255,255,255,0.4)]">
                <i className="fa-solid fa-photo-film text-4xl group-hover:text-blue-600"></i>
              </div>
              <h1 className="font-bold text-lg mt-4">Video Courses</h1>
              <p className="px-10 mt-5">
                Brainstorm words related to confidence and skill.
              </p>
              <p className="underline mt-5 mb-5">Read more</p>
            </div>
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group px-2 flex flex-col items-center justify-center">
              <div className="h-20 w-20 rounded-full flex items-center justify-center mt-5 shadow-[inset_0_4px_6px_rgba(255,255,255,0.4)]">
                <i className="fa-solid fa-chalkboard-user text-4xl group-hover:text-blue-600"></i>
              </div>
              <h1 className="font-bold text-lg mt-4">Instructor Training</h1>
              <p className="px-10 mt-5">
                Brainstorm words related to confidence and skill.
              </p>
              <p className="underline mt-5 mb-5">Read more</p>
            </div>
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group px-2 flex flex-col items-center justify-center">
              <div className="h-20 w-20 rounded-full flex items-center justify-center mt-5 shadow-[inset_0_4px_6px_rgba(255,255,255,0.4)]">
                <i className="fa-solid fa-user-graduate text-4xl group-hover:text-blue-600"></i>
              </div>
              <h1 className="font-bold text-lg mt-4">Instructor Training</h1>
              <p className="px-10 mt-5">
                Brainstorm words related to confidence and skill.
              </p>
              <p className="underline mt-5 mb-5">Read more</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="lg:px-20 px-6 mt-10">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
          <p className="text-2xl font-semibold">
            Learn To Drive, Drive With Safety And Control.
          </p>
          <div className="lg:w-2/5 text-[#ccc] ml-2 mt-5 shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] p-8">
            <p>
              To learn to drive safely and with control, first familiarize
              yourself with the vehicle and obey traffic laws. Keep a safe
              following distance, use turn signals, and regularly check mirrors
              and blind spots.
            </p>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-1">
                <i className="fa fa-check-circle text-blue-600"></i>{" "}
                <p>Quick Tips and Advice</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <i className="fa fa-check-circle text-blue-600"></i>{" "}
                <p>We are certified</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <i className="fa fa-check-circle text-blue-600"></i>{" "}
                <p>Road test preparation</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <i className="fa fa-check-circle text-blue-600"></i>{" "}
                <p>Award win</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <i className="fa fa-check-circle text-blue-600"></i>{" "}
                <p>Fast services</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <i className="fa fa-check-circle text-blue-600"></i>{" "}
                <p>Parallel parking</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <i className="fa fa-check-circle text-blue-600"></i>{" "}
                <p>Basic driving skills</p>
              </div>
            </div>
          </div>
          <button className=" text-white shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] p-3 mt-4 ml-4 rounded-md">
            About more
          </button>
        </div>
        {/* Section 3 */}
        <div className="lg:px-20 px-6 mt-10">
          <h1 className="text-4xl font-bold text-blue-600">
            Our Trending Courses
          </h1>
          <p className="text-2xl font-semibold">Our Popular Driving Courses</p>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-8">
            <div className="rounded-tl-xl shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group ">
              <div className="px-4 flex flex-row justify-between items-center mt-4 font-bold">
                <h1>$70</h1>
                <p>Intermediate</p>
              </div>
              <div className="px-6 mb-5">
                <h4 className="text-center mt-3 text-2xl font-bold group-hover:text-blue-600">
                  Traffic science
                </h4>
                <p className="mt-3 text-[#ccc]">
                  The traffic science course cover the principles and practices
                  of traffic engineering,including traffic flow theory.
                </p>
                <h4 className="text-xl mt-4">David Watt</h4>
                <p className="text-blue-600">Instructor</p>
                <span className="text-[#ccc]">
                  <i className="fa-solid fa-clock text-blue-600"></i> 6 weeks
                </span>
              </div>
            </div>
            <div className="rounded-tl-xl shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group ">
              <div className="px-4 flex flex-row justify-between items-center mt-4 font-bold">
                <h1>$80</h1>
                <p>Intermediate</p>
              </div>
              <div className="px-6 mb-5">
                <h4 className="text-center mt-3 text-2xl font-bold group-hover:text-blue-600">
                  Defensive Driving
                </h4>
                <p className="mt-3 text-[#ccc]">
                  Defensive driving is a set of driving techniques that help
                  minimize the risks of accidents and improve overall safety.
                </p>
                <h4 className="text-xl mt-4">David Watt</h4>
                <p className="text-blue-600">Instructor</p>
                <span className="text-[#ccc]">
                  <i className="fa-solid fa-clock text-blue-600"></i> 6 weeks
                </span>
              </div>
            </div>
            <div className="rounded-tl-xl shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group ">
              <div className="px-4 flex flex-row justify-between items-center mt-4 font-bold">
                <h1>$90</h1>
                <p>Intermediate</p>
              </div>
              <div className="px-6 mb-5">
                <h4 className="text-center mt-3 text-2xl font-bold group-hover:text-blue-600">
                  Truck Driving
                </h4>
                <p className="mt-3 text-[#ccc]">
                  Truck driving involves operating large commercial
                  vehicles,such as semi-trucks,tractor-trailers and delivery
                  trucks.
                </p>
                <h4 className="text-xl mt-4">David Watt</h4>
                <p className="text-blue-600">Instructor</p>
                <span className="text-[#ccc]">
                  <i className="fa-solid fa-clock text-blue-600"></i> 6 weeks
                </span>
              </div>
            </div>
            <div className="rounded-tl-xl shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] group ">
              <div className="px-4 flex flex-row justify-between items-center mt-4 font-bold">
                <h1>$150</h1>
                <p>Intermediate</p>
              </div>
              <div className="px-6 mb-5">
                <h4 className="text-center mt-3 text-2xl font-bold group-hover:text-blue-600">
                  Professional Driving
                </h4>
                <p className="mt-3 text-[#ccc]">
                  Professional driving involves driving for a living, such as
                  delivery drivers, taxi drivers and truck driver it requires.
                </p>
                <h4 className="text-xl mt-4">David Watt</h4>
                <p className="text-blue-600">Instructor</p>
                <span className="text-[#ccc]">
                  <i className="fa-solid fa-clock text-blue-600"></i> 6 weeks
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4  */}
        <div className="lg:px-20 px-6 mt-20">
          <div className="grid lg:grid-cols-[60%_40%] grid-cols-1 gap-4  ">
            <div className="shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] p-4">
              <h1 className="text-4xl font-bold text-blue-600">FaQ's</h1>
              <p className="text-2xl font-semibold">
                Frequently Asked Question
              </p>
              <div
                className={`p-4 mt-4 cursor-pointer shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out transform ${
                  isOpen === 0 ? "scale-105" : "scale-100"
                }`}
                onClick={() => toggleAnswer(0)}
              >
                <h4 className="text-blue-400">
                  How many hours of lessons do you need to pass?
                </h4>
                {isOpen === 0 && (
                  <p className="mt-2">
                    My driving instructor was fantastic; calm, patient, and
                    encouraging! I would recommend her to anybody looking to
                    start driving lessons.
                  </p>
                )}
              </div>
              <div
                className={`p-4 mt-4 cursor-pointer shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out transform ${
                  isOpen === 1 ? "scale-105" : "scale-100"
                }`}
                onClick={() => toggleAnswer(1)}
              >
                <h4 className="text-blue-400">
                  Is it better to have 1 or 2 hour driving lessons?
                </h4>
                {isOpen === 1 && (
                  <p className="mt-2">
                    My driving instructor was fantastic; calm, patient, and
                    encouraging! I would recommend her to anybody looking to
                    start driving lessons.
                  </p>
                )}
              </div>
              <div
                className={`p-4 mt-4 cursor-pointer shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out transform ${
                  isOpen === 2 ? "scale-105" : "scale-100"
                }`}
                onClick={() => toggleAnswer(2)}
              >
                <h4 className="text-blue-400">
                  How many driving lessons do I need before test?
                </h4>
                {isOpen === 2 && (
                  <p className="mt-2">
                    My driving instructor was fantastic; calm, patient, and
                    encouraging! I would recommend her to anybody looking to
                    start driving lessons.
                  </p>
                )}
              </div>
            </div>
            <div className="p-8 shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)]">
              <h4 className="text-2xl">Asking Question Now</h4>
              <div className="flex flex-row gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border-white p-1 pl-2 rounded-sm bg-transparent shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border-white p-1 pl-2 rounded-sm bg-transparent shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)]"
                />
              </div>
              <div className="flex flex-row gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border-white p-1 pl-2 rounded-sm bg-transparent shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)]"
                />
                <input
                  type="text"
                  placeholder="Select subject"
                  className="border-white p-1 pl-2 rounded-sm bg-transparent shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)]"
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Message"
                  className="border-white p-1 pl-4 rounded-sm bg-transparent shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] w-full h-28"
                />
              </div>
              <button className="p-4 mt-8 text-xl text-blue-400 shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] w-full">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Sections 5 */}
        <div className="lg:px-20 px-6 mt-10">
          <h1 className="text-4xl font-bold text-blue-600">
           Why Choosing Us Our School
          </h1>
          <p className="text-2xl font-semibold mt-2">Get Behind the Wheel and Take the Lead</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-16  ">
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] p-4">
              <h1 className="text-xl font-bold text-blue-400 text-center">Online Tracking</h1>
              <p className="text-[#ccc] mt-2 px-4 mb-2">Online tracking is the process of gathering information.</p>
            </div>
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] p-4">
              <h1 className="text-xl font-bold text-blue-400 text-center">Affordable Fee</h1>
              <p className="text-[#ccc] mt-2 px-4 mb-2">All of our course fee are very affordable for everyone.</p>
            </div>
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] p-4">
              <h1 className="text-xl font-bold text-blue-400 text-center">Best Trainers</h1>
              <p className="text-[#ccc] mt-2 px-4 mb-2">We have the best trainers form helping you always.</p>
            </div>
            <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] p-4">
              <h1 className="text-xl font-bold text-blue-400 text-center">Perfect Timing</h1>
              <p className="text-[#ccc] mt-2 px-4 mb-2">Our course is neither so long nor so short it's perfect.</p>
            </div>

          </div>
        </div>

        {/* Section 5  */}
        <div className="shadow-[inset_0_4px_6px_4px_rgba(255,255,255,0.4)] w-1/3 mx-auto mt-16 p-4">
          <h1 className="text-blue-600 p-4 text-center font-bold text-xl">(+163) 6972 9901</h1>
          <h1 className="text-2xl px-4 font-bold">Book Your First Driving Lesson And Contact Us</h1>
          <div className="flex flex-row gap-4 px-4 mt-10">
            <button className="p-3 shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] mb-4">Book now →</button>
            <button className="p-3 shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] mb-4">Contact us →</button>
          </div>
        </div>
        {/* Section 6*/}
        <footer className="p-4 mt-8 shadow-[inset_0_0px_6px_0px_rgba(255,255,255,0.4)]">
          <h1 className="text-center">Copyright © 2024 <span className="text-blue-600">Dride.</span> All Rights Reserved.</h1>

        </footer>
         
      </div>
    </div>
  );
};

export default Index;
