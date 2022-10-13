import React from 'react'
import Profilecard from '../components/profile_card'
import Break from '../components/Breakpoint'
import Cloud from '../components/Skillcloud'
import Skillcard from '../components/Skillcard'
import AOS from 'aos';
import 'aos/dist/aos.css';





const profile = () => {
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
    <div className='mt-[66px] h-[85vh] md:h-[90vh] text-slate-700 bg-white justify-center'>

      <div className='mt-[16vh]'data-AOS="fade-down" data-aos-duration="1500" data-aos-delay="100">
        <Profilecard />
      </div>

      <div className=''data-AOS="fade-up" data-aos-duration="1500" data-aos-delay="100">
        <a href="/profile"><Break>My Skill</Break></a>
      </div>
      
      <div data-AOS="fade-up" data-aos-duration="1500" data-aos-delay="100">
        <div className='hidden md:flex justify-center h-[15vh] md:mb-5 xl:mb-10' >
          <Cloud/>
        </div>

        <div className='hidden md:flex justify-center font-secondary pointer-events-none  text-gray-400'>
          <h1>Drag Us Left and Right! and Press "My Skill" to Reset</h1>
        </div>
      </div>


      <div className='flex justify-center py-10'data-AOS="fade-right" data-aos-duration="1500" data-aos-delay="100">
        <Skillcard/>
      </div>



    </div>
    )
}

export default profile