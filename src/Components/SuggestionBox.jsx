import React from 'react'

const SuggestionBox = ({list,setInput}) => {
    return (
        <>
            {list && list.length  > 0 &&
            <div className='bg-white w-auto m-5 overflow-hidden rounded'>{list.slice(0,3).map((val)=>
                {
                    return (
                    <>
                        <p className='tracking-widest text-lg p-1  hover:bg-gray-200 cursor-pointer' onClick={()=>setInput(val)}>{val}</p><hr/>
                    </>
                )
                })}</div>
            }  
        </>
    )
}

export default SuggestionBox
