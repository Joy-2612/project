import React from 'react'
import './HomeSearch.css'
import search from "../../assets/search.png"

const HomeSearch = () => {
  return (
    <div>
        {/* <div className='search'>
            <div className='search-bar-container'>
                <form action = "" className='search-bar'>
                    <label for="loc">Location</label>
                    <input type="text" placeholder='Enter your City' name='loc' ></input>
                    <button type = "submit"><img src  = {search} /></button>
                </form>
            </div>
            <div className='search-bar-container'>
                <form action = "" className='search-bar'>
                    <label for="loc">Location</label>
                    <input type="text" placeholder='Search Doctors, Clinics, Hospitals, etc.' name='loc' ></input>
                    <button type = "submit"><img src  = {search} /></button>
                </form>
            </div>
        </div> */}
        <div class="content">
            <div class="c-omni-wrapper u-d__inline-block">
                <div id="c-omni-container" class="c-omni-container--desktop">
                    <div class="c-omni u-clearfix" style="position: relative; height: 40px;">
                        <div class="c-omni__wrapper u-clearfix c-omni__wrapper--locality">
                            <div class="c-omni-searchbox_wrapper ">
                                <span class="c-omni-searchbox__icon"><i class="icon-ic_location"></i></span><input data-qa-id="omni-searchbox-locality" data-input-box-id="omni-searchbox-locality" class="c-omni-searchbox c-omni-searchbox--small" autocomplete="off" placeholder="Search location" value="Barsoi"/>
                                </div>
                                </div>
            <div class="c-omni__wrapper u-clearfix c-omni__wrapper--keyword">
                <div class="c-omni-searchbox_wrapper ">
                    <span class="c-omni-searchbox__icon"><i class="icon-ic_search"></i></span>
                    <input data-qa-id="omni-searchbox-keyword" data-input-box-id="omni-searchbox-keyword" class="c-omni-searchbox c-omni-searchbox--small" autocomplete="off" placeholder="Search doctors, clinics, hospitals, etc." value=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <a href="/plus?utm_source=Web%20Homepage&amp;utm_medium=Organic&amp;utm_campaign=Plus%20Tag">
            <span class="LazyLoad is-visible"><img src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="plus card" class="u-d__inline-block u-float--right u-padding--20__top u-padding--20__bottom" style="height: 80px;"/>
            </span>
        </a>
    </div>
    </div>
  )
}

export default HomeSearch
