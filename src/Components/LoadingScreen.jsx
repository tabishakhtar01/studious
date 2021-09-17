import React from 'react'

const LoadingScreen = () => {
    return (
        <>
        <div className='flex text-center justify-center items-center h-screen'>
          <div className='m-auto'>
            <iframe src="https://giphy.com/embed/kUTME7ABmhYg5J3psM" width="480" height="360" title="loading.gif" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
        </div>
        </>)
}

export default LoadingScreen
