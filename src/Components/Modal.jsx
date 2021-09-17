import React from 'react'
import ReactDOM from 'react-dom'

const MODAL_STYLE = {
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}

const CROSS = {
    position:'fixed',
    top: '5%',
    right: '5%',
    zIndex: '5000'
}

const Modal = ({open,children, onClose}) => {
    if(!open) return null
    return ReactDOM.createPortal(
    <>
        <div className='fixed top-0 left-0 right-0 bottom-0' style={OVERLAY_STYLE}/>
        <div className='fixed top-1/2 left-1/2  md:h-screen w-full md:w-3/5' style={MODAL_STYLE}>
            {children}
            <br/>
            <button style={CROSS} className='text-6xl' onClick={onClose}><i className="text-blue-600 hover:text-blue-900 fas fa-times-circle"></i></button>
        </div>
    </>,
    document.getElementById('portal')
    )
}

export default Modal
