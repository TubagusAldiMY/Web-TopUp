import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <form className='w-full relative'>
            <div>
                <input type="search" placeholder='Type Here' className='w-full h-10 p-4 rounded-xl bg-white border border-slate-500' />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full'>
                    <CiSearch />
                </button>
            </div>
        </form>
    )
}

export default Search