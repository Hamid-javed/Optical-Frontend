// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { WebHandler } from "../data/webHandler";
// import { URLS } from "../data/URL";
// import Slider from "../components/Slider";
// import { FaStar } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
// import { TiMinus } from "react-icons/ti";
// import Review from "../components/Review";
// import Loader from "../components/General/Loader";
// import SelectLense from "../components/SelectLense";
// import SelectEyelense from "../components/SelectEyelense";
// const BASE_URL = import.meta.env.VITE_LOCAL_URL;
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// const ProductDetails = () => {
//   const [response, setResponse] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedLens, setselectedLens] = useState("");
//   const [addLensPrice, setAddLensPrice] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [showToast, SetshowToast] = useState(false);
//   const [colorError, setColorError] = useState(false);
//   const [rightSPH, setRightSPH] = useState("0");
//   const [rightCYL, setRightCYL] = useState("0");
//   const [rightAxis, setRightAxis] = useState("0");
//   const [leftSPH, setLeftSPH] = useState("0");
//   const [leftCYL, setLeftCYL] = useState("0");
//   const [leftAxis, setLeftAxis] = useState("0");
//   const productId = localStorage.getItem("productId");

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       const { response, status } = await WebHandler(
//         `${URLS.PRODUCTDETAILS}${productId}`,
//         "GET"
//       );
//       if (status === 200) {
//         setResponse(response);
//       } else {
//         console.log(response);
//       }
//     };
//     fetchProductDetails();
//   }, [productId]);

//   const handleAddToCart = async () => {
//     if (!selectedColor) {
//       setColorError(true);
//       return;
//     }

//     const payload = {
//       productId,
//       lens: selectedLens,
//       selectedColor,
//       selectedLens,
//       addLensPrice,
//       rightSPH,
//       rightCYL,
//       rightAxis,
//       leftSPH,
//       leftCYL,
//       leftAxis,
//       quantity,
//     };

//     try {
//       setLoading(true);
//       const { data, status } = await axios.post(
//         `${BASE_URL}products/cart-product/${productId}`,
//         payload,
//         {
//           withCredentials: true,
//         }
//       );
//       if (status === 200) {
//         // SetshowToast(true);
//         toast.success("🦄 Wow so easy!", {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           // transition: Bounce,
//         });
//       }
//       // alert("Product added to cart successfully!");
//     } catch (error) {
//       console.error(
//         "Error adding product to cart:",
//         error.response?.data || error.message
//       );
//       alert("Failed to add product to cart.");
//     } finally {
//       setLoading(false);
//       // SetshowToast(false);
//     }
//   };

//   const renderStars = (rating) => {
//     const totalStars = 5;
//     const stars = [];

//     for (let i = 0; i < totalStars; i++) {
//       stars.push(
//         <FaStar
//           key={i}
//           className={i < rating ? "text-yellow-400" : "text-gray-600"}
//         />
//       );
//     }
//     return stars;
//   };

//   if (!response || loading)
//     return (
//       <div>
//         <Loader />
//       </div>
//     );

//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         // transition: Bounce,
//       />
//       <div className="product-details container mx-auto px-12 py-8">
//         {/* Product Images Slider */}
//         <div className="flex flex-col md:flex-row gap-10 justify-center mb-8">
//           <Slider images={response.images} />
//           {/* Product Details */}
//           <div className="w-full flex flex-col items-center md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{response.name}</h1>
//             <p className="text-lg mb-4">{response.description}</p>

//             {/* Rating */}
//             <div className="flex items-center mb-4">
//               <div className="flex space-x-1">
//                 {renderStars(response.rating)}
//               </div>
//               <span className="ml-2 text-gray-700">
//                 ({response.reviewCount} reviews)
//               </span>
//             </div>

//             {/* Colors */}
//             <div className="mb-4">
//               <span className="font-semibold text-gray-700">
//                 Available Colors:
//               </span>
//               <div className="flex space-x-2 mt-2">
//                 {response.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     onClick={() => {
//                       setSelectedColor(color);
//                       setColorError(false);
//                     }}
//                     className={`cursor-pointer px-2 py-1 border rounded ${
//                       selectedColor === color
//                         ? "bg-black text-white"
//                         : "border-gray-300 hover:bg-gray-200"
//                     }`}
//                   >
//                     {color}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Selected Color Display */}
//             {selectedColor && (
//               <div className="mb-4">
//                 <span className="font-semibold text-gray-700">
//                   Selected Color:
//                 </span>{" "}
//                 {selectedColor}
//               </div>
//             )}

//             {/* Size */}
//             <div className="mb-4">
//               <span className="font-semibold text-gray-700">Size:</span>{" "}
//               {response.size}
//             </div>

//             <SelectLense
//               selectedLens={selectedLens}
//               setselectedLens={setselectedLens}
//               setAddLensPrice={setAddLensPrice}
//             />

//             <SelectEyelense
//               lleftAxis={leftAxis}
//               leftCYL={leftCYL}
//               leftSPH={leftSPH}
//               rightAxis={rightAxis}
//               rightCYL={rightCYL}
//               rightSPH={rightSPH}
//               setLeftAxis={setLeftAxis}
//               setLeftCYL={setLeftCYL}
//               setLeftSPH={setLeftSPH}
//               setRightAxis={setRightAxis}
//               setRightCYL={setRightCYL}
//               setRightSPH={setRightSPH}
//             />

//             {/* Price and Stock */}
//             <div className="flex flex-col gap-2 mb-4">
//               <div className="flex justify-start items-center border border-black w-24">
//                 <FaPlus
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="border-r cursor-pointer border-black text-2xl w-8 active:bg-slate-500 active:text-white"
//                 />
//                 <p className="w-8 text-center select-none">{quantity}</p>
//                 <TiMinus
//                   onClick={() => {
//                     if (quantity > 1) setQuantity(quantity - 1);
//                   }}
//                   className={`border-l cursor-pointer text-2xl ${
//                     quantity === 1
//                       ? "cursor-not-allowed opacity-50"
//                       : "active:bg-black active:text-white"
//                   } border-black w-8`}
//                 />
//               </div>

//               <span className="text-2xl font-semibold text-green-600">
//                 Rs:{" "}
//                 {response.price * quantity +
//                   (selectedLens === "" ? 0 : parseFloat(addLensPrice))}
//               </span>
//               {/* Show error if no color selected */}
//               {colorError && (
//                 <p className="text-red-500 mb-2">Please select a color.</p>
//               )}
//               <button
//                 onClick={handleAddToCart}
//                 className={
//                   "w-48 py-2 px-4 rounded font-bold transition duration-200 ease-in-out transform active:scale-95 bg-black text-white"
//                 }
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Reviews */}
//         <Review reviews={response.reviews} />
//       </div>
//     </>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { WebHandler } from "../data/webHandler";
import { URLS } from "../data/URL";
import Slider from "../components/Slider";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import Review from "../components/Review";
import Loader from "../components/General/Loader";
import SelectLense from "../components/SelectLense";
import SelectEyelense from "../components/SelectEyelense";
const BASE_URL = import.meta.env.VITE_LOCAL_URL;
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [response, setResponse] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedLens, setSelectedLens] = useState("");
  const [addLensPrice, setAddLensPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cartResponse, setCartResponse] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [colorError, setColorError] = useState(false);
  const [rightSPH, setRightSPH] = useState("0");
  const [rightCYL, setRightCYL] = useState("0");
  const [rightAxis, setRightAxis] = useState("0");
  const [leftSPH, setLeftSPH] = useState("0");
  const [leftCYL, setLeftCYL] = useState("0");
  const [leftAxis, setLeftAxis] = useState("0");
  const productId = localStorage.getItem("productId");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const { response, status } = await WebHandler(
          `${URLS.PRODUCTDETAILS}${productId}`,
          "GET"
        );
        if (status === 200) {
          setResponse(response);
        }
      } catch (error) {
        console.log(response.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = async () => {
    if (!selectedColor) {
      setColorError(true);
      return;
    }

    const payload = {
      productId,
      lens: selectedLens,
      selectedColor,
      selectedLens,
      addLensPrice,
      rightSPH,
      rightCYL,
      rightAxis,
      leftSPH,
      leftCYL,
      leftAxis,
      quantity,
    };

    try {
      const { data, status } = await axios.post(
        `${BASE_URL}products/cart-product/${productId}`,
        payload,
        {
          withCredentials: true,
        }
      );
      setShowToast(true);
      if (status === 200) {
        setCartResponse(data);
      } else {
        setCartResponse(data);
      }
    } catch (error) {
      console.error(
        "Error adding product to cart:",
        error.response?.data || error.message
      );
      toast.error("Failed to add product to cart.");
    }
  };

  useEffect(() => {
    if (showToast) {
      toast.success(cartResponse.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setShowToast(false);
    }
  }, [showToast]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-600"}
        />
      );
    }
    return stars;
  };

  if (!response || loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <div className="product-details container mx-auto px-12 py-8">
        {/* Product Images Slider */}
        <div className="flex flex-col md:flex-row gap-10 justify-center mb-8">
          <Slider images={response.images} />
          {/* Product Details */}
          <div className="w-full flex flex-col items-center md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{response.name}</h1>
            <p className="text-lg mb-4">{response.description}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex space-x-1">
                {renderStars(response.rating)}
              </div>
              <span className="ml-2 text-gray-700">
                ({response.reviewCount} reviews)
              </span>
            </div>

            {/* Colors */}
            <div className="mb-4">
              <span className="font-semibold text-gray-700">
                Available Colors:
              </span>
              <div className="flex space-x-2 mt-2">
                {response.colors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedColor(color);
                      setColorError(false);
                    }}
                    className={`cursor-pointer px-2 py-1 border rounded ${
                      selectedColor === color
                        ? "bg-black text-white"
                        : "border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Color Display */}
            {selectedColor && (
              <div className="mb-4">
                <span className="font-semibold text-gray-700">
                  Selected Color:
                </span>{" "}
                {selectedColor}
              </div>
            )}

            {/* Size */}
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Size:</span>{" "}
              {response.size}
            </div>

            <SelectLense
              selectedLens={selectedLens}
              setselectedLens={setSelectedLens}
              setAddLensPrice={setAddLensPrice}
            />

            <SelectEyelense
              lleftAxis={leftAxis}
              leftCYL={leftCYL}
              leftSPH={leftSPH}
              rightAxis={rightAxis}
              rightCYL={rightCYL}
              rightSPH={rightSPH}
              setLeftAxis={setLeftAxis}
              setLeftCYL={setLeftCYL}
              setLeftSPH={setLeftSPH}
              setRightAxis={setRightAxis}
              setRightCYL={setRightCYL}
              setRightSPH={setRightSPH}
            />

            {/* Price and Stock */}
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-start items-center border border-black w-24">
                <FaPlus
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-r cursor-pointer border-black text-2xl w-8 active:bg-slate-500 active:text-white"
                />
                <p className="w-8 text-center select-none">{quantity}</p>
                <TiMinus
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                  className={`border-l cursor-pointer text-2xl ${
                    quantity === 1
                      ? "cursor-not-allowed opacity-50"
                      : "active:bg-black active:text-white"
                  } border-black w-8`}
                />
              </div>

              <span className="text-2xl font-semibold text-green-600">
                Rs:{" "}
                {response.price * quantity +
                  (selectedLens === "" ? 0 : parseFloat(addLensPrice))}
              </span>
              {colorError && (
                <p className="text-red-500 mb-2">Please select a color.</p>
              )}
              <button
                onClick={handleAddToCart}
                className={
                  "w-48 py-2 px-4 rounded font-bold transition duration-200 ease-in-out transform active:scale-95 bg-black text-white"
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <Review reviews={response.reviews} />
      </div>
    </>
  );
};

export default ProductDetails;
