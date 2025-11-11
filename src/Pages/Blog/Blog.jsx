import logo from "../../assets/resipeImg/category-1.png";
import cards from "../../../public/recips.json";

const Blog = () => {
    return (
        <>
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center my-10">
                    <div className="flex items-center gap-3">
                        <img className="h-7" src={logo} alt="" />
                        <h2 className="cpr font-bold text-3xl">Recips Articles</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className="group rounded-xl p-4 hover:shadow-lg transition duration-300 bg-white flex flex-col"
                        >
                            <div className="overflow-hidden rounded-md">
                                <img
                                    className="w-full h-40 object-cover rounded-md transform group-hover:scale-110 transition duration-500"
                                    src={card.img}
                                    alt={card.desh_name}
                                />
                            </div>

                            <h3 className="font-semibold text-lg mt-3 group-hover:text-[#3bb77e] transition">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{card.desh_name}</p>

                            <div className="flex justify-between text-sm text-gray-500 mt-3">
                                <p>{card.date}</p>
                                <p>{card.views} views</p>
                                <p>{card.reading_time}</p>
                            </div>

                            <div className="mt-auto">
                                <button className="mt-4 w-full py-2 bg-[#3bb77e] font-medium rounded-md hover:bg-green-700 text-white transition">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;