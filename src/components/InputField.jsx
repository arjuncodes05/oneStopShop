import React from 'react'

function InputField({error='', setError=() => {}, setValue, getValue, id, label, placeholder, type='text', labelColor='text-black' }) {    
  return (
        <div className='flex flex-col my-2 gap-1'>
          <label className={`${labelColor} font-semibold`} htmlFor={id} >{label}</label>
          <input 
            onChange={(e) => {
              setValue(e.target.value)
              setError(prev => ({...prev, [id]: '' }))
              }} value={getValue} type={type} placeholder={placeholder} className='border rounded-sm p-1'/>
          <p className='text-red-400 text-sm h-5'>{error && error[id]}</p>
        </div>
    )
}

export default InputField;