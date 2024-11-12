import React from 'react'

function InputField({setValue, getValue, id, label, placeholder, type='text', labelColor='text-black' }) {    
  return (
        <div className='flex flex-col my-4 gap-1 '>
          <label className={`${labelColor} font-semibold`} htmlFor={id} >{label}</label>
          <input onChange={(e) => setValue(e.target.value)} value={getValue} type={type} placeholder={placeholder} className='border rounded-sm p-1'/>
        </div>
    )
}

export default InputField;