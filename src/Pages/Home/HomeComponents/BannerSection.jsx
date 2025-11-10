import img1 from "../../../assets/images/alt.png";
import img2 from "../../../assets/images/alt_2.png";
import img3 from "../../../assets/images/alt_3.png";

const BannerSection = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4 my-10">
            {/* --- Card 1 --- */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img
                    src={img1}
                    alt="banner 1"
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 text-[#253d4e] flex flex-col justify-center items-start px-6 hover:text-white transition-all duration-500 group-hover:bg-black/50">
                    <h2 className="text-xl md:text-xl font-bold leading-snug mb-3 ">
                        Everyday Fresh & Clean with Our Products
                    </h2>
                    <button className="bg-[#3bb77e] px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-green-600 transition-all">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* --- Card 2 --- */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img
                    src={img2}
                    alt="banner 2"
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 text-[#253d4e] hover:text-white transition-all duration-500 group-hover:bg-black/30">
                    <h2 className="text-lg md:text-xl font-semibold leading-snug mb-3 ">
                        Fresh Vegetables Big Discount
                    </h2>
                    <button className="bg-[#3bb77e] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-all">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* --- Card 3 --- */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img
                    src={img3}
                    alt="banner 3"
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 text-[#253d4e] flex flex-col justify-center items-start px-6 hover:text-white transition-all duration-500 group-hover:bg-black/50">
                    <h2 className="text-lg md:text-xl font-semibold leading-snug mb-3">
                        Make Your Breakfast Healthy & Easy
                    </h2>
                    <button className="bg-[#3bb77e] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-all">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
