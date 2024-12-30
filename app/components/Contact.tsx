const Contact = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="title text-4xl font-bold text-center text-gray-800 mb-12">
                    Get in Touch
                </h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Send Us a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-600 mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Write your message here"
                                    rows={5}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/2 mt-12 md:mt-0">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Contact Information
                        </h3>
                        <p className="text-lg text-gray-600 mb-4">
                            We&#39;d love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                        <ul className="text-gray-600 space-y-4">
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 2l7.997 3.884v4.253c0 5.37-5.178 9.348-8 10.854-2.822-1.506-8-5.483-8-10.854V5.884zM12 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                123 Wellness Ave, Fitness City, CA
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.707 7.293a1 1 0 010 1.414L5.414 12 2.707 14.293a1 1 0 001.414 1.414L7 13.414l2.293 2.293a1 1 0 001.414-1.414L8.414 12l2.293-2.293a1 1 0 00-1.414-1.414L7 10.586 4.707 8.293a1 1 0 00-1.414 0z" clipRule="evenodd" />
                                </svg>
                                support@wellnessforyou.com
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm5.5 1a1.5 1.5 0 000 3h3a1.5 1.5 0 000-3h-3zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                +1 (555) 123-4567
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
