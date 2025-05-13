import React from "react";

const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container mx-auto lg:text-4xl text-2xl font-semibold leading-relaxed">
                Got an idea or a question? Let's talk
            </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* Map Section */}
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15604.580580340562!2d78.5888982!3d12.1022144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac63dda3748e0b%3A0xda7f28ac3c3d17c2!2sTheerthamalai%2C%20Tamil%20Nadu%20636906!5e0!3m2!1sen!2sin!4v1747116277239!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        style={{ filter: "opacity(0.7)", border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                1 - Theerthamalai Vill and Post , Harur Tk , Dharmapuri DT, 636906.
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="mailto:contact@myto.co.in" className="text-indigo-500 leading-relaxed">
                                contact@myto.co.in
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+91 90923 12162</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 shadow-md rounded-lg">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Great things start with a simple hello.</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        We'd love to hear your thoughts or help with any questions!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Send
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        We respect your privacy and never share your info.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
