import about5 from "../../../assets/images/about-5.png";

const Section3 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 my-24 px-4 md:px-10">
            {/* ===== Left Side Image ===== */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={about5}
                    alt="About Us"
                    className="rounded-2xl  w-[90%] md:w-full"
                />
            </div>

            {/* ===== Right Side Content ===== */}
            <div className="w-full md:w-1/2 space-y-5">
                <p className="text-sm text uppercase tracking-widest font-semibold">
                    Our Performance
                </p>

                <h2 className="cpr text-3xl md:text-4xl font-semibold leading-snug">
                    Your Partner for <br /> e-commerce grocery solution
                </h2>

                <p className="text-gray-600 font-medium leading-relaxed">
                    Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto.
                </p>

                <p className="text-gray-600 font-medium leading-relaxed">
                    Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos.
                </p>
            </div>
        </div>
    );
};

export default Section3;
