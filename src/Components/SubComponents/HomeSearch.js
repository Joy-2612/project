import React from 'react'
import './HomeSearch.css'
import {BiSearch} from "react-icons/bi"
import {CiLocationOn} from "react-icons/ci"

const SearchBar = () => {
  return (
    <div>
        <div className="search-content">
            <div className="c-omni-wrapper u-d__inline-block">
                <div id="c-omni-container" className="c-omni-container--desktop">
                    <div className="c-omni u-clearfix">
                        <div className="c-omni__wrapper u-clearfix c-omni__wrapper--locality">
                            <div className="c-omni-searchbox_wrapper ">
                                <div className="icon">
                                <CiLocationOn size={25}/>
                                </div>
                                <input type="text" className="c-omni-searchbox c-omni-searchbox--small" placeholder="Search location" />
                            </div> 
                        </div>


                        <div className="c-omni__wrapper u-clearfix c-omni__wrapper--keyword">
                            <div className="c-omni-searchbox_wrapper ">
                            <div className="icon">
                                <BiSearch size={25}/>
                            </div>
                                <input type="text" className="c-omni-searchbox c-omni-searchbox--small" placeholder="Search Doctors/Clinics/Hospitals"/>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>

   
    </div>
  )
}

export default SearchBar

