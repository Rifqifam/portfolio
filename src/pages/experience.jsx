import React from 'react'
import Timeline from '../components/timeline/timeline'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Wartaeq3 from '../../src/Img/wartaeq3.png'

const experience = () => {
  AOS.init();

  AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });

  return (
    <div className='mt-[66px] h-[85vh] md:h-[90vh] text-slate-700 bg-white block justify-center'>

      <div className='flex justify-center'>
        <div className='mt-20 pb-20' data-AOS="fade-down" data-aos-duration="1500" data-aos-delay="100">
          <h1 className='text-2xl font-first pl-2 pb-1'>Timeline Of</h1>
          <h2 className='text-6xl font-third third font-bold'>My Experience</h2>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center '>
        <Timeline/>
      </div>

    </div>
  )
}

export default experience