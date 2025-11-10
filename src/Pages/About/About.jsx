import leftImg from "../../assets/images/about_left.png";
import img1 from "../../assets/images/about-1.png";
import img2 from "../../assets/images/about-2.png";
import img3 from "../../assets/images/about-3.png";
import services from "../../../public/services.json";

const About = () => {
    return (
        <section className="my-16 ">
            <div className="flex flex-col md:flex-row items-center ">
                {/* Left Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src={leftImg} alt="About Nest" className="rounded-lg" />
                </div>

                {/* Right Text */}
                <div className="md:w-1/2 space-y-5">
                    <h2 className="cpr text-2xl md:text-3xl font-semibold text-[#3bb77e]">
                        Welcome to Nest
                    </h2>

                    <p className="text leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <p className="text leading-relaxed">
                        Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre. Donec vitae sapien ut libero venenatis faucibus.
                        Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
                    </p>

                    {/* Bottom Small Images */}
                    <div className="grid grid-cols-3 gap-3">
                        <img src={img1} alt="About 1" className="rounded-lg hover:scale-105 transition duration-500" />
                        <img src={img2} alt="About 2" className="rounded-lg hover:scale-105 transition duration-500" />
                        <img src={img3} alt="About 3" className="rounded-lg hover:scale-105 transition duration-500" />
                    </div>
                </div>
            </div>

            <h2 className="cpr text-2xl font-bold text-center my-10">What We Provide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(p => (
                        <div className="space-y-1.5 text-center border border-gray-300 rounded-xl shadow-md p-3">
                            <div className="flex items-center justify-center">
                                <img className="" src={p.img} alt="" />
                            </div>
                            <h2 className="cpr">{p.name}</h2>
                            <p className="text">{p.p}</p>
                            <p className="heading cursor-pointer">Read More</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default About;
