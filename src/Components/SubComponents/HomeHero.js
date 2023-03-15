import React from 'react'
import './HomeHero.css'
import search from "../../assets/search.png"

const HomeHero = () => {
  return (
    <div>
        <div className='search'>
            <div className=''>
                <div className='search-bar-container'>
                    <form action = "" className='search-bar'>
                        {/* <label for="loc">Location</label> */}
                        <input type="text" placeholder='Search Doctors,Clin' name='loc' ></input>
                        <button type = "submit"><img src  = {search} /></button>
                    </form>
                </div>
                <div className='search-bar-container'>
                    <form action = "" className='search-bar'>
                        {/* <label for="loc">Location</label> */}
                        <input type="text" placeholder='search anything' name='loc' ></input>
                        <button type = "submit"><img src  = {search} /></button>
                    </form>
                </div>
            </div>
        
        </div>

        <div className='home-hero'>

        </div>
    </div>
  )
}

export default HomeHero
