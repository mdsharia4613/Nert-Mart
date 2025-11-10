import services from "../../../../public/services.json";
import line2 from "../../../assets/images/line2.png";

const Section2 = () => {
    return (
        <>
            <div className="my-10">
                <h2 className="cpr text-3xl font-bold text-center">What We Provide</h2>
                <div className="flex justify-center">
                    <img src={line2} alt="" />
                </div>
            </div>
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
        </>
    );
};

export default Section2;