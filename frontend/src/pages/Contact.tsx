import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-6'>
          <p className='text-3xl'>Hello.What can I help you with?</p>
          <p className='text-2xl'>Some things you can do here</p>
          <div className='grid grid-cols-3 gap-4'>
            <div className='border-1 rounded-sm p-6 flex items-center gap-10'><img src='/images/package.webp' className='h-15'></img>Your Orders</div>
            <div className='border-1 rounded-sm p-6 flex items-center gap-10'><img src='/images/openpackage.jpg' className='h-15'></img>Returns and Refunds</div>
            <div className='border-1 rounded-sm p-6 flex items-center gap-10'><img src='/images/home.png' className='h-15'></img>Manage Addresses</div>
            <div className='border-1 rounded-sm p-6 flex items-center gap-10'><img src='/images/subscription.jpg' className='h-15'></img>Manage Subscription</div>
            <div className='border-1 rounded-sm p-6 flex items-center gap-10'><img src='/images/card.jpg' className='h-15'></img>Payment Settings</div>
            <div className='border-1 rounded-sm p-6 flex items-center gap-10'><img src='/images/account.jpg' className='h-15'></img> Account Settings</div>
            <div className='border-1 rounded-sm p-6 flex items-center gap-10'><img src='/images/Digital.jpg' className='h-15'></img>Digital Services and Device Support</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
