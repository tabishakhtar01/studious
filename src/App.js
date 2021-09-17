import React,{useState,useEffect } from 'react'
import Modal from './Components/Modal'
import axios from 'axios'
import LoadingScreen from './Components/LoadingScreen'
import Input from './Components/Input'
import ImageGallery from './Components/ImageGallery'

const App = () => {
  const [input,setInput] = useState()
  const [imageData,setImageData] = useState([])
  const [isOpen,setIsOpen] = useState(false)
  const [isloading,setIsLoading] = useState(true)
  const [suggestion] = useState(JSON.parse(localStorage.getItem('list')))
  const [list,setList] = useState([])
  const API_KEY = '48ea756ec6d203887b39cab848932050'
  const [data,setData] = useState({
    server: '',
    id: '',
    secret: ''
  })
  let timer

  const inputFunction = (e) =>
  {
    clearTimeout(timer)
    timer = setTimeout(()=>
    {
        var string = e.target.value
        setInput(string)

        if(localStorage.getItem('list') === null){
          localStorage.setItem('list','[]')
        }
        var old_data = JSON.parse(localStorage.getItem('list'))
        string.length > 2 && string !== undefined && old_data.push(string)
        old_data = old_data.filter((value,index)=> old_data.indexOf(value) === index)
        localStorage.setItem('list',JSON.stringify(old_data))

        if(string === '')
        {
          setList('')
        }
        else
        {
          setList(()=>
          {
            if(suggestion && suggestion.length > 0)
            {
              return suggestion.filter((val)=>
              {
                return val.toLowerCase().includes(string.toLowerCase())
              })
            }
            else{
              return null
            }
          })
        }

    },300)
}


  const fetchApi = async () =>
  {
    try{
      if(input)
      {
        const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${input}&sort=interestingness-desc&per_page=100&license=4&extras=owner_name%2Clicense&format=json&nojsoncallback=1`)
        setImageData(response.data.photos.photo)
      }
      else{
        const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&format=json&nojsoncallback=1`)
        setImageData(response.data.photos.photo)
      }
      console.log("Fetching Data")
      setIsLoading(false)
    }catch(error){
      console.log("ERROR ",error)
      setIsLoading(false)
      alert("OOPS, Something went wrong")
    }
  }

  const fetchData = (server,id,secret) =>
  {
    setIsOpen(true)
    setData({
      server,
      id,
      secret
    })
  }

  const clearSuggestion = () =>
  {
    localStorage.clear()
    window.location.reload()
    setList('')
  }

  const removeSuggestion = (e) =>
  {
    if(e && e.key === "Escape")
    {
      setList('')
    }
    setList('')
  }

  useEffect(()=>
  {
    fetchApi()
  },[input])

  if(isloading){
    return <LoadingScreen />
  }

  return (
    <>
    <div style={{fontFamily: "'Prata', serif"}} className='text-center text-3xl text-gray-700 p-5 tracking-widest bg-gray-300'>Search For Anthing You Wish</div>
    <div className='bg-black' onClick={removeSuggestion}>
      <div className="relative z-10">
        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
           <img className='fixed z-50 top-1/2 left-1/2 h-screen w-max transform -translate-x-1/2 -translate-y-1/2' src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} alt={`${data.id}`}/>
        </Modal>
      </div>
      <Input list={list} clearSuggestion={clearSuggestion} inputFunction={inputFunction} removeSuggestion={removeSuggestion} setInput={setInput}/>
      <ImageGallery imageData={imageData} fetchData={fetchData} />

    </div>
    </>
  )
}

export default App
