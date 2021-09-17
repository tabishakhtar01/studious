import React from 'react'

const ImageGallery = ({imageData,fetchData}) => {
    return (
        <>
        <div className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden'>
        {
            imageData.map((currVal)=>
            {
            return (
            <>
                <div className='p-2'>
                    <img className='transform hover:scale-105 rounded ' onClick={()=>fetchData(currVal.server,currVal.id,currVal.secret)} src={`https://live.staticflickr.com/${currVal.server}/${currVal.id}_${currVal.secret}.jpg`} alt={`${currVal.id}`}/>
                </div>
            </>
            )
            })
        }
        </div>  
        </>
    )
}

export default ImageGallery
