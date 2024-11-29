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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r   from-[#000000]  to-[#2d62a2]">
      <div className="grid grid-cols-2 mt-15 justify-center h-[30rem] w-[90rem] items-center bg-gray-800 rounded-lg shadow-lg m-10 p-10 relative">
        
        <div
          className="absolute h-[25rem] left-1/2 transform -translate-x-1/2"
          style={{
            borderLeft: "2px solid transparent",
            borderImage: "linear-gradient(to bottom, #eab308, #6d28d9, #166534) 1",
          }}
        ></div>

        <div className="flex flex-col justify-center items-center">
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
            className="px-6 py-2 mb-4 mt-4 text-lg font-medium text-white bg-gradient-to-r from-[#7732FF] to-[#8862c2] rounded-lg hover:opacity-70 hover:cursor-pointer"
          >
            Upload
          </label>
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-[#006aff] to-[#31838d] hover:opacity-70 hover:cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg z-10 text-center">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
              Analytics
            </h2>
            <p className="text-gray-400">Add additional content or analytics here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examine;
