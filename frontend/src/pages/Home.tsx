import {useNavigate} from 'react-router-dom'
import ShopNowButton from '../components/ShopNowButton';

function Home() {
  const navigate = useNavigate();

  const handleClick =() =>{
    navigate('/shop');
  }
  return (
    <div className='border-3 border-purple-950 p-5 flex flex-col  md:flex-row min-h-screen'
    style={{backgroundImage: "url('images/white-many-polygons.avif')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='order-2 md:order-1 w-full md:w-1/2 flex flex-col gap-14 justify-center items-center text-center py-10'>

            <p className='font-bold text-purple-400 font-serif md:text-8xl text-4xl '>Believes in Comfort!</p>
            <ShopNowButton onClick={handleClick} />
        </div>
        <div className='order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center text-center relative py-10'>
            <div className='bg-purple-300 rounded-full w-50 h-50 md:w-80 md:h-80 absolute z-0'></div>
                <img src='/images/Shoewithotbg.png' alt='shoes' className='md:ml-30 relative z-10 w-70 md:w-130'/>
        </div>
    </div>
  )
}

export default Home
