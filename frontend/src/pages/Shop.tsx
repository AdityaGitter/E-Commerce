import React, {useState,useEffect} from 'react'
import axios from 'axios'

interface item {
  id:number;
  title:string;
  category:string;
  image:string;
}

function Shop() {
  const [items,setItems] = useState<item[]>([]);

  useEffect(()=> {
    axios.get('https://localhost:5000/api/items')
          .then((res=> setItems(res.data)))
          .catch(err=> console.error('Axios Error:',err));
  },[]);

  const renderCategory = (category:string,bgClass:string) =>(
    <div className={`${bgClass} p-5`}>
      <p className='font-bold text-2xl mb-4'>{category}</p>
      <div className='grid grid-cols-2 mdgrid-cols-4 gap-4'>
        {items
          .filter(item => item.category === category)
          .map(item => (
            <div key={item.id} className='bg-white p-3 rounded shadow-md text-black'>
              <img
                src={item.image}
                alt={item.title}
                className='h-40 w-full object-cover rounded-md mb-2'/>
                <h3 className='font-semibold'>{item.title}</h3>
            </div>
          ))
          }
      </div>
    </div>
  );

  return(
    <div>
      {renderCategory('Trending Now', 'bg-pink-300')}
      {renderCategory('Sneakers', 'bg-violet-300')}
      {renderCategory('Monsoon Wear', 'bg-rose-200')}
      {renderCategory('Footwear Accessories', 'bg-violet-200')}
    </div>
  );
  /*return (
    <>
      <div>
        <div className='bg-pink-300'>
          <p className='font-bold text-2xl p-5'>Trending Now</p>
        </div>
        <div className='bg-violet-300'>
          <p className='font-bold text-2xl p-5'>Sneakers</p>
        </div>
        <div className='bg-rose-200'> 
          <p className='font-bold text-2xl p-5'>Monsoon Wear</p>
        </div>
        <div className='bg-violet-200'>
          <p className='font-bold text-2xl p-5'>Footwear Accessories</p>
        </div>
      </div>
    </>
  )
*/}

export default Shop
