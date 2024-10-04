import React, { useState } from "react";
// import Toast from "../components/General/Toast";

const FindUs = () => {
  const [result, setResult] = React.useState("");
  const [severity, setSeverity] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e328686c-026c-409e-a26b-5e4472fada65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowToast(true);
      setSeverity("success");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      {showToast && (
        <Toast message={result} severity={severity} onClose={setShowToast} />
      )}
      <div className="max-w-4xl mx-auto p-12 mt-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Need A Direct Line?</h2>
            <p className="text-gray-600 mb-4">
            Opposite Sadiq Bazar, Rahim Yar Khan, Punjab 64200, Pakistan
            </p>
            <div className="flex items-center mb-2">
              <span role="img" aria-label="phone" className="mr-2">
                📞
              </span>
              <span>(+92) 3061337225</span>
            </div>
            <div className="flex items-center">
              <span role="img" aria-label="email" className="mr-2">
                ✉️
              </span>
              <span>Gmail: clearvisison.pk@gmail.con</span>
            </div>
          </div>

          {/* Google Map Embed */}
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d111374.94829053957!2d70.306361!3d28.421556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzE3LjYiTiA3MMKwMTgnMjIuOSJF!5e0!3m2!1sen!2s!4v1724748077779!5m2!1sen!2s"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name" // Added name attribute
                placeholder="Name*"
                className="border p-2 rounded-md w-full"
                required
              />
              <input
                type="email"
                name="email" // Added name attribute
                placeholder="Email*"
                className="border p-2 rounded-md w-full"
                required
              />
            </div>
            <textarea
              name="comment" // Added name attribute
              placeholder="Comment"
              className="border p-2 rounded-md w-full mb-4"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FindUs;
