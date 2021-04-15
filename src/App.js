import React, {useState} from 'react'
import {SITE, API} from './config'
import './App.css'

export default function App() {
  const [val, setVal]=useState(0)
  const [data, setData]=useState(0)

  const searchGiphyByName =async(event)=>{
    event.preventDefault()
    let url = SITE + val + API + '&limit=20'
    let req = await fetch(url)
    let resp = await req.json()
    console.log(resp)
    setData(resp.data)
    setVal('')
  }

  return (
    <div>
    <header>
      <p className='logo'>_-_GIPHY_-_</p>
      
      <form className='form' onSubmit={searchGiphyByName}>
              <input
              onChange={e=>setVal(e.target.value)}
              value={val}
              className='input'
              /> 
            

              <button className='btn'>
                  search
              </button>
      </form>
    </header>
    <div className='cards'>
      
        {data && data.lenght!=0 ?
                    data.map(el=>{
                      return(
                        <div className='card'>
                        <iframe src={el.embed_url}></iframe>
                        <h5>{el.title}</h5>
                        </div>

                      )
                    })
                    : <h3> Пока пусто</h3>

                    }
      

    </div>

      
    </div>
    
    
  )
}


