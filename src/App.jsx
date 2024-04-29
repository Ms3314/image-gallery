import React, { useEffect, useState } from 'react'
Window.React = React
import Input from './compnents/Input'
import './index.css'
import './compnents/Card'
import Card from './compnents/Card'
function App() {
  const [images , setImages] = useState([]);
  const [isLoading , setIsLoading] = useState(true)
  const [term , setTerm] = useState('cats');
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=43632977-2e3a5abcc9f2f0be615f5c53e&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setImages(data.hits);
      setIsLoading(false)
  })
    .catch(err => console.log(err))
  },[term])

  return (
    <div>
      <Input searchText = {text => setTerm(text)} />
      {!isLoading && images.length===0 && <h1 className='text-6xl text-center'>No Images Found </h1>}
    <div className='grid grid-cols-3 gap-4'>
      {images.map(img => (
        <Card key = {img.id} img = {img}/>
      ))}
    </div>
    </div>
  )
}

export default App
