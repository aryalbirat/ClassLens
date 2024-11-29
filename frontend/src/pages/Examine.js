import React, { useState } from "react";

const Examine = () => {
  const [img, setImg] = useState(null);

  const handleClick = () => {
    if (!img) {
      alert("Please select an image to upload.");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", img);

    fetch("http://localhost:8080/single", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message || "Image uploaded successfully!");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="min-h-screen grid grid-cols-2 bg-gradient-to-r from-[#12131E] via-[#6d28d9] to-[#1F2242]0">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center bg-gray-800 rounded-lg shadow-lg m-10 p-10">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-4">
          Examine <span className="text-blue-400">the image</span>
        </h1>
        <p className="text-gray-400 mb-6">Upload the image below to examine it</p>
        <input
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="block mx-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer mb-4"
        >
          Upload
        </label>
      </div>

      {/* Right Column */}
      <div className="relative">
        <div className="absolute inset-0 border-l-2 border-purple-500"></div>
      </div>
    </div>
  );
};

export default Examine;
