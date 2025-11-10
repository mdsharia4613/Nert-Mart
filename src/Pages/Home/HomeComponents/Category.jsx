import React from 'react';
import useData from '../../../Hook/useData';
const Category = () => {
    const { categorys } =useData();
    return (
        <>
           <div>
                <h2 className='font-black text-3xl cpr my-8'>Featured Categories</h2>
                <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4 mb-10'>
                    {categorys.map(category => (
                        <div key={category.id} style={{ backgroundColor: category.bgColor }} className='rounded-lg text-center p-2 cursor-pointer'>
                            <div className='flex items-center justify-center'>
                                <img className=' object-contain' src={category.image} alt="" />
                           </div>
                            <div className='space-y-1.5 mb-2'>
                                <p className='cpr font-semibold'>{category.name}</p>
                                <p className='text-xs text-gray-500'>{category.items} items</p>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </>
    );
};

export default Category;