import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <div className="min-h-screen bg-gradient-to-r pt-20  from-[#000000]  to-[#2d62a2] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center text-gradient bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
                    Contact Us
                </h1>
                <div className="bg-gradient-to-br from-gray-800 to-indigo-900 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:ring focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold" htmlFor="surname">
                                Surname
                            </label>
                            <input
                                type="text"
                                id="surname"
                                placeholder="Surname"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:ring focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:ring focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone number"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:ring focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:ring focus:ring-indigo-500 outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>  
        </section>
    );
}

export default Contact;