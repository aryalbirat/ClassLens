import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Card = (props) => {
    return (
        <div className="flex flex-col transition delay-50 hover:-translate-y-5 bg-gradient-to-r from-[#2b3035] to-[#14176d] shadow-sm border border-slate-200 rounded-lg my-7 w-60">
            <div className="m-4 overflow-hidden rounded-md h-25 flex justify-center items-center">
                <img 
                    className="w-full h-64 object-cover overflow-hidden" 
                    src={props.src} 
                    alt={`${props.name}'s profile`} 
                />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold">
                    {props.name}
                </h4>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-3">

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
