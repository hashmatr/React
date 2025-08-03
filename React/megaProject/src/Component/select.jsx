import React from 'react'
import { useId} from 'react'
const Select = ({
    labels,
    options,
    classname = '',
    ...props
},ref) => {
    const id = useId()
  return (
    <div className='w-full'>
        {labels&& <label className='' htmlFor={id}></label>}
<select
  {...props}
  id={id}
  ref={ref}
  className={`px-3 py-2 rounded-md border border-gray-300 bg-white 
  text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2
   focus:ring-blue-500 focus:border-blue-500 ${classname}`}>
   {options?.map((option)=>(<option key={option} value={option}>{option}</option>))}
</select>
    </div>
)
}

export default React.forwardRef(Select)