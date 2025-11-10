
import line from '../../../assets/images/line.png'
import useData from '../../../Hook/useData';

const TopProduct = () => {
    const { cardsItems } =useData();
    const topRating = cardsItems.filter(card => card.rating > 4)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
              topRating.slice(0, 12).map( item => (
                <div key={item.id} className='bg-amber-50 w-56 p-4 rounded-lg'>
                      <div className='bg-white flex justify-center rounded-lg'>
                          <img className='w-36 h-36 ' src={item.image} alt="" />
                      </div>
                      <h2 className='cpr font-semibold text-'>{item.name}</h2>
                      <p>{item.brand}</p>
                      <div className='flex justify-between'>
                          <p>{item.rating}</p>
                          <p>{item.review}</p>
                      </div>
                      <div className='flex justify-between cpr font-medium'>
                        <p>Originally</p>
                          <p >{item.price.old}</p>
                      </div>
                      <div>
                        <img className='w-30' src={line} alt="" />
                      </div>
                      <p className='flex justify-center'>
                          {item.price.current}
                      </p>
                      


                </div>
              ))  
            }
        </div>
    );
};

export default TopProduct;