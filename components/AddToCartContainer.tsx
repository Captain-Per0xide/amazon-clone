import Image from 'next/image'
import React from 'react'
import prime from '../public/prime-logo.png'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'

const AddToCartContainer = ({singleProduct}:{singleProduct:any}) => {
  const dispatch=useAppDispatch()
  const router=useRouter()
  return (
    <div className='border border-gray-300 rounded-md h-fit text-sm'>
      <div>
        <Image src={prime} width={40} height={40} alt='prime' />
      </div>
        <div className='p-4'>
            <h1 className='mb-5'>
            <span className='text-[#147C8F]'>FREE delivery</span> Monday, 28 October on your first order. <span className='text-[#147C8F]'>Details</span>
            </h1>
            <p className='text-[#147C8F]'>
            Delivering to Kolkata 700054 - Update location
            </p>
            <button onClick={()=>{
              dispatch(addToCart(singleProduct));
              router.push('/cart')
              }} className='text-bold text-black mt-2 bg-[#FFD814] w-40 rounded-full py-1'>Add to Cart</button>
            <button className='text-bold text-black mt-2 bg-[#FA8900] w-40 rounded-full py-1'>Buy Now</button>
        </div>
    </div>
  )
}

export default AddToCartContainer