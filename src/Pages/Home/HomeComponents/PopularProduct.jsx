import { FaDollarSign, FaStar } from 'react-icons/fa6';
import line from '../../../assets/images/line.png';
import useData from '../../../Hook/useData';
import { IoIosCart } from 'react-icons/io';

const PopularProduct = () => {
    const { cardsItems } = useData();
    const topRating = cardsItems.filter(card => card.rating > 2.5);

    // 🔹 Dynamic Color Function
    const getDiscountColor = (discount) => {
        if (discount.includes('10')) return 'bg-red-500';
        if (discount.includes('12')) return 'bg-orange-500';
        if (discount.includes('20')) return 'bg-yellow-500';
        return 'bg-[#3bb77e]'; // default
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Hot':
                return 'bg-red-400';
            case 'New':
                return 'bg-blue-400';
            case 'Sale':
                return 'bg-pink-400';
            case 'Trending':
                return 'bg-purple-400';
            default:
                return 'bg-sky-300'; // default
        }
    };

    return (
        <div className='max-w-[1400px] mx-auto ml-10 my-10'>
            <h2 className='text-2xl cpr font-bold my-8'>Propuler Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {topRating.map(item => (
                    <div key={item.id} className='bg-amber-50 w-60 p-4 rounded-lg space-y-2 relative shadow-md hover:shadow-lg transition'>
                        <div className='bg-white flex justify-center rounded-lg'>
                            <img className='w-36 h-36 object-contain' src={item.image} alt={item.name} />
                        </div>

                        <h2 className='cpr font-semibold text-[16px]'>{item.name}</h2>
                        <p className='text-sm text-gray-600'>{item.brand}</p>

                        {/* Rating + Review */}
                        <div className='flex justify-start gap-5 items-center'>
                            <div className='flex text-orange-500'>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className='text-gray-600 text-sm'>({item.review})</p>
                        </div>

                        {/* Old Price */}
                        <div className='flex justify-between text-sm font-medium cpr'>
                            <p>Originally</p>
                            <div className='flex items-center'>
                                <FaDollarSign />
                                <span className='line-through'>{item.price.old}</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className='flex items-center justify-center my-2'>
                            <img className='w-full' src={line} alt="" />
                        </div>

                        {/* Current Price */}
                        <div className='flex justify-center items-center text-[20px] font-semibold cpr'>
                            <FaDollarSign />
                            <span>{item.price.current}</span>
                        </div>

                        {/* Cart Icon */}
                        <div className='absolute right-3 bottom-30 text-white'>
                            <button className='bg-[#3bb77e] rounded-full p-2 cursor-pointer hover:bg-green-500'>
                                <IoIosCart fontSize={20} />
                            </button>
                        </div>

                        {/* 🔹 Discount Badge */}
                        <div className={`absolute top-0 left-0 text-white ${getDiscountColor(item.discount)} px-4 py-0.5 rounded-tl-2xl rounded-br-2xl`}>
                            <p>{item.discount}</p>
                        </div>

                        {/* 🔹 Status Badge */}
                        <div className={`absolute right-0 top-0 text-white ${getStatusColor(item.status)} px-4 py-0.5 rounded-tr-2xl rounded-bl-2xl`}>
                            <p>{item.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;
