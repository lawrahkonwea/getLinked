import React from 'react'

export default function FormInput( {label, placeholder, type, name, value, onChange, errorMessage} ) {
    return (
        <div className='w-full'>
            <label className='lg:text-[14px] text-[13px]'>{label}</label>
            <input className='lg:mt-[11px] mt-[5px] w-full px-[27px] lg:py-[15px] py-[10px]' placeholder={placeholder} type={type} name={name} value={value} onChange={onChange}/>
            {errorMessage && <p className="text-red-500 lg:mt-2 mt-[2px]">This field is required</p>}
        </div>
    )
}