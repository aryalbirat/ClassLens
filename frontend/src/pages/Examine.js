import React, { useState } from "react";

const Examine = () => {
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null); // To store the preview URL
  const [notification, setNotification] = useState("");
  const [selectedImageName, setSelectedImageName] = useState(""); 
  const [beResponse, setBeResponse] = useState("");

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
        setNotification("Image uploaded successfully!"); // Set success message
        setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
        console.log(data.message || "Image uploaded successfully!");
        setBeResponse(data);
      })
      .catch((err) => {
        setNotification("Error uploading image."); // Set error message
        setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
        console.error("Error:", err);
      });
  };

  const handleImageSelect = (e) => {
    const selectedFile = e.target.files[0];
    setImg(selectedFile);
    setSelectedImageName(selectedFile ? selectedFile.name : "No image selected");
    setImgPreview(selectedFile ? URL.createObjectURL(selectedFile) : null); // Set preview URL
  };

  return (
    <section id="examine">
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#000000] to-[#2d62a2]">
        <div className="grid grid-cols-2 mt-15 justify-center h-[30rem] w-[90rem] items-center bg-gray-800 rounded-lg shadow-lg m-10 p-10 relative">
          
          <div
            className="absolute h-[25rem] left-1/2 transform -translate-x-1/2"
            style={{
              borderLeft: "2px solid transparent",
              borderImage: "linear-gradient(to bottom, #eab308, #6d28d9, #166534) 1",
            }}
          ></div>

<<<<<<< HEAD
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-4">
              Examine <span className="text-blue-400">the image</span>
            </h1>
            <p className="text-gray-400 mb-6">Upload the image below to examine it</p>
            
            <p className="text-white text-lg font-medium mb-4 italic">{selectedImageName}</p>
=======
          <input
            type="file"
            onChange={handleImageSelect}
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
>>>>>>> 09473ee397fda41c969967d5a0b2c3c7f0e143da

            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="px-6 py-2 mb-4 mt-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700"
            >
              Upload
            </label>
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Submit
            </button>

            {notification && (
              <div
                className={`mt-4 px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${
                  notification.includes("Error")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {notification}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg z-10 text-center">
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                Analytics
              </h2>
              {imgPreview && (
                <img
                  src={imgPreview}
                  alt="Uploaded Preview"
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              )}
              {beResponse && (
                <p className="text-gray-400 mb-4">
                Attentive Students: {beResponse?.attentive_students} <br/>
                Attentive Percentage: {beResponse?.attentiveness_percentage} <br/>
                Total Students: {beResponse?.total_students}
              </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examine;
