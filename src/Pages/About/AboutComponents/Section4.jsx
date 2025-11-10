import main1 from "../../../assets/images/Main.png";
import main2 from "../../../assets/images/Main-1.png";
import line2 from "../../../assets/images/line2.png";
import { FaFacebookF, FaSquareInstagram, FaSquareYoutube, FaTwitter } from "react-icons/fa6";

const Section4 = () => {
    return (
        <div className="my-20 px-4 md:px-10">
            {/* ======= Section Title ======= */}
            <div className="text-center mb-10">
                <h2 className="cpr text-3xl font-bold">Our Team</h2>
                <div className="flex justify-center mt-2">
                    <img src={line2} alt="line" className="w-28" />
                </div>
            </div>

            {/* ======= Main Content ======= */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                {/* ===== Left Content ===== */}
                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <p className="heading text-[#fbbf24] font-semibold">Our Team</p>
                    <h2 className="cpr text-3xl md:text-4xl font-bold leading-snug">
                        Meet Our Expert Team
                    </h2>
                    <p className="text text-gray-600 leading-relaxed">
                        Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa
                        dolor imperdiet nec consequat a, congue id sem. Maecenas malesuada
                        faucibus finibus.
                    </p>
                    <p className="text text-gray-600 leading-relaxed">
                        Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa
                        dolor imperdiet nec consequat a, congue id sem. Maecenas malesuada
                        faucibus finibus.
                    </p>
                    <button className="bgcpr px-6 py-2 rounded-full text-white hover:opacity-90 transition">
                        View All Members
                    </button>
                </div>

                {/* ===== Right Team Members ===== */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center w-full md:w-1/2">
                    {/* Member 1 */}
                    <div className="relative flex justify-center">
                        <img src={main1} alt="Team Member 1" className="rounded-xl shadow-lg" />
                        <div className="bg-white shadow-lg p-3 text-center space-y-1 absolute -bottom-10 rounded-xl w-44">
                            <h2 className="cpr font-bold text-[18px]">H. Merinda</h2>
                            <p className="text text-[12px]">CEO & Co-Founder</p>
                            <div className="flex gap-2 justify-center text-gray-600">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaSquareInstagram />
                                <FaSquareYoutube />
                            </div>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="relative flex justify-center">
                        <img src={main2} alt="Team Member 2" className="rounded-xl shadow-lg" />
                        <div className="bg-white shadow-lg p-3 text-center space-y-1 absolute -bottom-10 rounded-xl w-44">
                            <h2 className="cpr font-bold text-[18px]">Dilan Specter</h2>
                            <p className="text text-[12px]">Head Engineer</p>
                            <div className="flex gap-2 justify-center text-gray-600">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaSquareInstagram />
                                <FaSquareYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
