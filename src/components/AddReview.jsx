import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_LOCAL_URL;
import "react-toastify/dist/ReactToastify.css";

const AddReview = ({ setGetReview }) => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [hover, setHover] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const productId = localStorage.getItem("productId");

  function handleClick(currentIndex) {
    setRating(currentIndex + 1);
  }
  function handleMouseMove(currentIndex) {
    setHover(currentIndex + 1);
  }
  function handleMouseLeave() {
    setHover(0);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const payload = {
    name: name,
    email: email,
    rating: rating,
    review: review,
  };

  const handleReview = async () => {
    const { data, status } = await axios.post(
      `${BASE_URL}products/review/${productId}`,
      payload,
      {
        withCredentials: true,
      }
    );
    console.log(data);
    if (status === 200) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        setGetReview((prev) => !prev);
      }, 2000);
    } else {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="my-6 flex justify-center items-center">
      <ToastContainer />
      <div
        onClick={() => setIsOpen(true)}
        className="py-2 px-4 bg-black text-white inline-block cursor-pointer"
      >
        AddReview
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
          onClick={handleClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 md:mx-6 lg:mx-auto overflow-y-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <RxCross2
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-3xl font-semibold cursor-pointer"
            />
            <div className="font-semibold text-lg md:text-xl lg:text-2xl text-center md:text-start mb-5">
              Add your Review here!
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex items-center justify-between gap-3 w-full">
                <input
                  className="w-full text-sm bg-white py-1 px-2 outline-none border-b-2 border-gray-300 focus:border-black"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="w-full text-sm bg-white py-1 px-2 outline-none border-b-2 border-gray-300 focus:border-black"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full gap-3">
                <div className="flex">
                  {[...Array(5)].map((item, index) => {
                    return (
                      <FaStar
                        key={index}
                        className={`cursor-pointer text-2xl transition-transform duration-200 ease-in-out ${
                          index < (hover || rating)
                            ? "text-yellow-500 scale-110"
                            : "text-gray-300"
                        }`}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={handleMouseLeave}
                      />
                    );
                  })}
                </div>
                <textarea
                  className="bg-white border-2 w-full h-48 outline-none focus:border-gray-500 p-2"
                  placeholder="Write your review here..."
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
              </div>
              <button
                className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                onClick={handleReview}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReview;
