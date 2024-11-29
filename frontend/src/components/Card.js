import React from 'react';

const Card = (props) => {
    return (
        <div className="flex flex-col bg-slate-800 shadow-sm border border-slate-200 rounded-lg my-7 w-60">
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
                <button className="relative flex justify-center items-center w-[150px] h-[40px] p-[10px] gap-[8px] bg-gradient-to-r from-[#7732FF] to-[#8862c2] border border-[#2C2C2C] rounded-lg text-white text-[18px] font-normal leading-none shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:opacity-80 hover:cursor-pointer">
                    Follow
                </button>
            </div>
        </div>
    );
};

export default Card;
