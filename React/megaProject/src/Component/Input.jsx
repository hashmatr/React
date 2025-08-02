import React, { useId } from 'react'
const Input = React.forwardRef(function Input({
    label,
    type='text',
    className = '',
    ...props},
      ref){
 const Id = useId()
  return ( 
    
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1' htmlFor={Id}>{label}</label>}
        <input 
  type={type} 
  className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}
  ` }ref={ref} {...props} id={Id}
/>

    </div>
  )
}
)
export default Input