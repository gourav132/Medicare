import React from 'react'

export default function Dashboard() {
  return (
    <div className='h-screen p-20 w-full'>
        <div className='w-5/12 p-5 border bg-black font-semibold rounded-md'>
            <p className='text-lg'>Prescriptions according to doctors</p>
            <div className="flex">
                <div className='mt-6 mx-4 hover:border p-2 rounded '>
                    <svg class="feather feather-folder w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <p>Dr. BS Rao</p>
                </div>
                <div className='mt-6 mx-4 hover:border p-2 rounded '>
                    <svg class="feather feather-folder w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <p>Dr. BS Rao</p>
                </div>
                <div className='mt-6 mx-4 hover:border p-2 rounded '>
                    <svg class="feather feather-folder w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <p>Dr. BS Rao</p>
                </div>
            </div>
        </div>
    </div>
  )
}
