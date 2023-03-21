import React from 'react'
import './FindDocBanner.css'

const FindDocBanner = () => {
  return (
    <div>
    <div className="c-jumbo">
      <div className="c-jumbo__banner">
        <div className="c-jumbo__header_container u-t-center u-t-white u-t-bold c-jumbo__subheading">
          <h1 data-qa-id="jumbo-heading" className="c-jumbo__header">
            Your home for health
          </h1>
        </div>
        <div
          data-qa-id="jumbo-sub-heading"
          className="u-t-center u-t-white u-t-bold c-jumbo__subheading"
        >
          Find and Book
        </div>
        <div className="c-jumbo__omni_container ">
          <div className="c-omni-wrapper adjust">
            <div id="c-omni-container" className="c-omni-container--desktop ">
              <div
                className="c-omni u-clearfix "
                style={{position: "relative", top: "-2px"}}
              >
                <div className="c-omni__wrapper u-clearfix c-omni__wrapper--locality ">
                  <div className="c-omni-searchbox_wrapper ">
                    <span className="c-omni-searchbox__icon">
                      <i className="icon-ic_location"></i>
                    </span>
                    <input data-qa-id="omni-searchbox-locality" data-input-box-id="omni-searchbox-locality" className="c-omni-searchbox c-omni-searchbox--large" autoComplete="off" placeholder="Search location" value=""></input>
                  </div>
                </div>
                <div className="c-omni__wrapper u-clearfix c-omni__wrapper--keyword ">
                  <div className="c-omni-searchbox_wrapper ">
                    <span className="c-omni-searchbox__icon">
                      <i className="icon-ic_search"></i>
                    </span>
                    <input data-qa-id="omni-searchbox-keyword" data-input-box-id="omni-searchbox-keyword" className="c-omni-searchbox c-omni-searchbox--large " autoComplete="off" placeholder="Search doctors, clinics, hospitals, etc." value=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-popular-searches on-hover-span">
            <span data-qa-id="popular-searches">Popular searches:</span>
            <a
              data-qa-id="popular-search-item"
              href="/bangalore/dermatologist"
              className="c-popular-searches__item on-hover-span"
            >
              Dermatologist
            </a>
            <a
              data-qa-id="popular-search-item"
              href="/bangalore/pediatrician"
              className="c-popular-searches__item on-hover-span"
            >
              Pediatrician
            </a>
            <a
              data-qa-id="popular-search-item"
              href="/bangalore/gynecologist-obstetrician"
              className="c-popular-searches__item on-hover-span"
            >
              Gynecologist/Obstetrician
            </a>
            <div className="u-d-inline">
              <span className="c-popular-searches">
                <span
                  data-qa-id="others-speciality"
                  className="c-popular-searches__item on-hover-span"
                >
                  Others
                </span>
                <i className="icon-ic_down_cheveron"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="mydoctors-tab-new">
          <div className="c-my-doctors"></div>
        </div>
      </div>
      <div className="c-icon-list">
        <div className="c-icon-list__list_wrapper">
          <a
            data-qa-id="consult-icon"
            target="_blank"
            className="c-icon"
            href="/consult?product=fabric&attribution=Home_Banner_Footer"
          >
          <i className="fa-solid fa-user-doctor-message"></i>
            <span className="on-hover-span">Consult with a doctor</span>
          </a>
          <a
            data-qa-id="order-icon"
            target="_blank"
            className="c-icon"
            href="/order?utm_source=practo_home"
          >
            
            <span className="on-hover-span">Order Medicines</span>
          </a>
          
          <a
            data-qa-id="lab-icon"
            target="_blank"
            className="c-icon"
            href="/tests?utm_source=practo_home"
          >
            <div className="tab-offer">
              <i className="tab-icon c-icon__img icon-ic_lab_home"></i>
              <span className="c-offer-tag u-round-corner u-border-white u-t-bold u-t-white">
                New
              </span>
            </div>
            <span className="on-hover-span">Book test</span>
          </a>
          <a
            data-qa-id="healthfeed-icon"
            target="_blank"
            className="c-icon"
            href="/healthfeed?utm_source=practo_home"
          >
            <i className="tab-icon c-icon__img icon-ic_read"></i>
            <span className="on-hover-span">Read articles</span>
          </a>
          <a
            data-qa-id="providers-icon"
            target="_blank"
            className="c-icon"
            href="/providers?utm_source=practo_home"
          >
            <i className="tab-icon c-icon__img icon-ic_briefcase"></i>
            <span className="on-hover-span">For healthcare providers</span>
          </a>
        </div>
      </div>
    </div>
  </div>

    
  )
}
export default FindDocBanner;