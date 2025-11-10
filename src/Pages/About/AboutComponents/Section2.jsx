import services from "../../../../public/services.json";

const Section2 = () => {
    return (
        <>
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
        </>
    );
};

export default Section2;