import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex justify-center w-2/3'>
        <div className='flex flex-col'>
          <p className='text-3xl'>Hello.What can I help you with?</p>
          <p className='text-2xl'>Some things you can do here</p>
          <div className='grid grid-cols-3 gap-4'>
            <div className='border-1 rounded-sm'>Your Orders</div>
            <div className='border-1 rounded-sm'>Returns and Refunds</div>
            <div className='border-1 rounded-sm'>Manage Addresses</div>
            <div className='border-1 rounded-sm'>Manage Subscription</div>
            <div className='border-1 rounded-sm'>Payment Settings</div>
            <div className='border-1 rounded-sm'> Account Settings</div>
            <div className='border-1 rounded-sm'>Digital Services and Device Support</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
