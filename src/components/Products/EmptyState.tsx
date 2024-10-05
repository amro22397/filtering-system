import { XCircle } from 'lucide-react'
import React from 'react'

const EmptyState = () => {
  return (
    <div className='relative col-span-full h-80 bg-gray-50 w-full p-12 flex flex-col items-center justify-start
    py-18'>
      <XCircle className='h-12 w-12 text-gray-400 mb-2' />
      <h3 className='font-semibold text-xl mb-1'>No products found</h3>
      <p className='text-zinc-500 text-sm'>
        We found no search results for these filters.
      </p>
    </div>
  )
}

export default EmptyState
