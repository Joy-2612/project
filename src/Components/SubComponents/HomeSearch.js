import React from 'react'
import './HomeSearch.css'
import search from "../../assets/search.png"

const HomeSearch = () => {
  return (
    <div>
        <div className='search'>
            <div className='search-bar-container'>
                <form action = "" className='search-bar'>
                    {/* <label for="loc">Location</label> */}
                    <input type="text" placeholder='Enter your City' name='loc' ></input>
                    <button type = "submit"><img src  = {search} /></button>
                </form>
            </div>
            <div className='search-bar-container'>
                <form action = "" className='search-bar'>
                    {/* <label for="loc">Location</label> */}
                    <input type="text" placeholder='Search Doctors, Clinics, Hospitals, etc.' name='loc' ></input>
                    <button type = "submit"><img src  = {search} /></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HomeSearch
