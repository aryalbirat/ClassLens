import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Card = ({ src, name, facebook, linkedin, github }) => {
  return (
    <div className="flex flex-col bg-slate-800 shadow-sm border border-slate-200 rounded-lg my-7 w-60">
      <div className="m-4 overflow-hidden rounded-md h-25 flex justify-center items-center">
        <img
          className="w-full h-64 object-cover overflow-hidden"
          src={src}
          alt={`${name}'s profile`}
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="mb-1 text-xl font-semibold">{name}</h4>
      </div>
      <div className="flex justify-center p-8 pt-2 gap-3">
        <div className="flex gap-4">
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <BsGithub />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
