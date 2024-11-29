import React, { useState } from "react";

const Examine = () => {
  const [img, setImg] = useState(null);
  const formdata = new FormData();

  formdata.append("image", img);

  const handleClick = () => {
    fetch("http://localhost:8080/single", {
      method: "POST",
      body: formdata,
    })
      .then((res) => {
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#12131E] via-[#6d28d9] to-[#1F2242">
      <div className="bg-gray-800 text-center p-10 rounded-lg shadow-lg w-2/3 max-w-md">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-4">
          Examine the <span className="text-blue-400">image</span>
        </h1>
        <p className="text-gray-400 mb-6">
          Upload the image below to examine it
        </p>

        {/* File Input */}
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          className="block mx-auto mb-4 text-white bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
        />

        {/* Submit Button */}
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:opacity-90"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Examine;
