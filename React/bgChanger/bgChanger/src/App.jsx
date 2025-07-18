import React, { useState } from 'react'
import './app.css'
import Section from './section'
const App = () => {
  const [bgcolor,setbgcolor] = useState('black')
     function ChangeColor(Color){
      setbgcolor(Color)
    }
  return (

    <div style={{backgroundColor:bgcolor, minHeight:'90vh'}}>
      <section className='flex gap-3.5 bg-white px-7 py-2 rounded-2xl relative top-150 flex-wrap'>
        <Section className='bg-red-500 text-white px-6 py-2 rounded-2xl cursor-pointer' text="Red" onClick={()=>ChangeColor('red')}/>
        <Section className='bg-green-500 text-white px-6 py-2 rounded-2xl cursor-pointer' text="Green" onClick={()=>ChangeColor('green')}/>
        <Section className='bg-blue-500 text-white px-6 py-2 rounded-2xl cursor-pointer'text = "Blue"  onClick={()=>ChangeColor('blue')}/>
        <Section className='bg-orange-500 text-white px-6 py-2 rounded-2xl cursor-pointer'text = "Orange" onClick={()=>ChangeColor('orange')}/>
        <Section className='bg-gray-500 text-white px-6 py-2 rounded-2xl cursor-pointer' text = "Gray"  onClick={()=>ChangeColor('gray')}/>
        <Section className='bg-yellow-500 text-white px-6 py-2 rounded-2xl cursor-pointer'text = "Yellow"  onClick={()=>ChangeColor('yellow')}/>
        <Section className='bg-pink-500 text-white px-6 py-2 rounded-2xl cursor-pointer' text = "Pink"  onClick={()=>ChangeColor('pink')}/>
        <Section className='bg-purple-500 text-white px-6 py-2 rounded-2xl cursor-pointer'text = "Purple"  onClick={()=>ChangeColor('purple')}/>
        <Section className='bg-cyan-500 text-white px-6 py-2 rounded-2xl cursor-pointer'text = "Cyan" onClick={()=>ChangeColor('cyan')}/>
        <Section className='bg-white text-black px-6 py-2 rounded-2xl cursor-pointer'text = "White" onClick={()=>ChangeColor('white')}/>
        <Section className='bg-black text-white px-6 py-2 rounded-2xl cursor-pointer'text = "Black" onClick={()=>ChangeColor('black')}/>
      </section>
    </div>
  )
}

export default App
