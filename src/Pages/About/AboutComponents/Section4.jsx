import main1 from "../../../assets/images/Main.png";
import main2 from "../../../assets/images/Main-1.png";
import line2 from "../../../assets/images/line2.png";
import { FaFacebookF, FaSquareInstagram, FaSquareYoutube, FaTwitter } from "react-icons/fa6";

const Section4 = () => {
    return (
        <>
            <div className="my-10">
                <div className="text-center">
                    <h2 className="cpr text-3xl font-bold">Our Team</h2>
                    <div className="flex items-center justify-center">
                        <img className="" src={line2} alt="" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                    <div className="leading-relaxed space-y-3 w-full md:w-1/2">
                        <p className="heading">Our Team</p>
                        <h2 className="cpr text-3xl font-bold">Meet Our Expert Team</h2>
                        <p className="text">Proin ullamcorper pretium orci. Donec necscele risque leo.
                            Nam massa dolor imperdiet neccon sequata congue idsem.
                            Maecenas malesuada faucibus finibus.</p>
                        <p className="text">Proin ullamcorper pretium orci. Donec necscele risque leo.
                            Nam massa dolor imperdiet neccon sequata congue idsem.
                            Maecenas malesuada faucibus finibus.</p>
                        <button className="bgcpr px-4 py-1.5 rounded-full">View All Members</button>    
                    </div>
                    <div className="flex gap-3 justify-center w-full ">
                        <div className="relative">
                            <img src={main1 } alt="" />
                            <div className=" bg-white shadow-md p-3 text-center space-y-1 absolute -bottom-12 left-10 rounded-lg w-40">
                                <h2 className="cpr font-bold text-[19px]">H. MErinda</h2>
                                <p className="text text-[12px]">CEO & C0-Founder</p>
                                <div className="flex gap-1 justify-center ">
                                    <FaFacebookF className="heading" />
                                    <FaTwitter className="heading" />
                                    <FaSquareInstagram className="heading" />
                                    <FaSquareYoutube className="heading" />


                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={main2} alt="" />
                            <div className=" bg-white shadow-md p-3 text-center space-y-1 absolute -bottom-12 left-10 rounded-lg w-40">
                                <h2 className="cpr font-bold text-[19px]">Dilan Specter</h2>
                                <p className="text text-[12px]">Head Enginner</p>
                                <div className="flex gap-1 justify-center ">
                                    <FaFacebookF className="heading" />
                                    <FaTwitter className="heading" />
                                    <FaSquareInstagram className="heading" />
                                    <FaSquareYoutube className="heading" />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section4;