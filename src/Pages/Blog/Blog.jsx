import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogImg from "../../assets/images/460.png";
import banner from "../../assets/images/469.png";

const Blog = () => {
    const [data, setData] = useState({ helpTopics: [], offices: [] });

    // JSON data fetch করা
    useEffect(() => {
        fetch("/blog.json")
            .then((res) => res.json())
            .then((info) => setData(info))
            .catch((err) => console.error("Data fetch error:", err));
    }, []);

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Message sent successfully!", {
            position: "top-center",
            autoClose: 2000,
        });
        e.target.reset();
    };

    return (
        <div className=" px-6 py-16 text-gray-700">
            <ToastContainer />
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-green-600 font-medium">How can we help you?</p>
                <h2 className="text-3xl cpr md:text-4xl font-semibold mt-2">
                    Let us know how we can help you
                </h2>
                <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla
                    harum cum distinctio pariatur, dignissimos deserunt.
                </p>
            </div>

            {/* Help Topics */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-14">
                {data.helpTopics.map((item) => (
                    <div key={item.id}>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Offices */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 ">
                {data.offices.map((office, index) => (
                    <div
                        key={index}
                        className=" p-5 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <h4 className="text-lg font-semibold mb-2">{office.title}</h4>
                        <p className="text-sm text-gray-500 mb-4">{office.address}</p>
                        <button className="flex items-center gap-2 bg-[#3bb77e]  text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition">
                            <FaMapMarkerAlt /> View map
                        </button>
                    </div>
                ))}
            </div>

            {/* Contact Form + Image */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Form */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Drop Us a Line</h3>
                    <p className="text-gray-500 mb-6 text-sm">
                        Your email address will not be published. Required fields are marked *
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-green-600"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-green-600"
                                required
                            />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Phone"
                                className="border border-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-green-600"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="border border-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-green-600"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="border rounded-lg px-4 py-3 w-full border-gray-400 focus:outline-none focus:border-green-600"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#3bb77e] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Image */}
                <div className="hidden md:block">
                    <img
                        src={blogImg}
                        alt="Contact"
                        className="rounded-xl shadow-md "
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
