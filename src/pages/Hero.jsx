import React from 'react';
import Panel from '../components/Panel';
import Bem from '../Img/bem.png';
import hima from '../Img/himakom.png';
import slamet from '../Img/slamet.png';
import warta1 from '../Img/wartaeq1.png'
import warta2 from '../Img/wartaeq2.png'
import Break from '../components/Breakpoint'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const Hero = () => {
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
    <div className="">
        <div className='mt-[64px] h-[85vh] md:h-[90vh] text-slate-700 cursor-default scrollbar-hide'>

            <div className='mt-32 md:mt-32 text-4xl font-semibold font-third pl-6 md:pl-32 md:text-5xl' data-AOS="fade-right" data-aos-duration="1500" data-aos-delay="100">
                <h1>Hello Every <br /> My name is RifqiFam</h1>
            </div>

            <div className='mt-9 pr-[1.25rem] pl-[1.5rem] font-third font-normal text-base md:text-xl md:pl-32'data-AOS="fade-right" data-aos-duration="1500" data-aos-delay="100">

                <h1 className='mr-5 md:mr-14'>I'm a Computer Science Student in Universitas Gadjah Mada focusing in <span className='font-semibold'><i>Front-End Developer and Designs</i></span></h1>
            </div>

            <div className='mt-20 md:mt-[5rem] pr-[1.5rem] pl-[1.25rem] font-normal text-right text-xl md:text-4xl md:pl-28 font-secondary'data-AOS="fade-up" data-aos-duration="1500" data-aos-delay="100">

                <h1 className='mr-5 md:mr-16 md:ml-16'>"Aiming to be what needed by the society in the next <br/> 5 years to come"</h1>
            </div>

            <div className='inline-block w-full' data-AOS="fade-up" data-aos-duration="1500" data-aos-delay="500">
                    <div className='flex justify-center mt-44 mb-10 md:mt-52'>
                        <button className='px-5 py-3 border border-slate-200 rounded-xl text-slate-900 bg-white hover:shadow-lg transition-all duration-500 font-third '>
                                Contact Me
                        </button>
                    </div>                    
            </div>
        </div>
        {/* End Hero */}

        <div className='h-[40px] md:h-[1px]'>
        </div>

        {/* Recent Work */}

        <div className="bg-gray-100 h-[60vh] text-slate-700 inline md:mb-16">

            <div className=""data-AOS="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <Break>Latest Work</Break>
            </div>

            <div className='md:flex  md:justify-start'>
                <div className=' justify-center pt-20 mx-9 md:ml-28'>

                    <div className='card-zoom relative md:absolute duration-1000'data-AOS="fade-down" data-aos-duration="1000" data-aos-delay="300">
                        <img src={warta2} alt="pic1" className="card-zoom-image hover:scale-125 delay-150 paral"/>
                    </div>

                    <div className='card-zoom md:absolute md:bottom-20 md:left-12 shadow-xl duration-1000'data-AOS="fade-right" data-aos-duration="1000" data-aos-delay="300" >
                        <img src={warta1} alt="pic2" className="card-zoom-image hover:scale-125 delay-150"/>
                    </div>

                </div>
                
                <div className=" mx-10 md:ml-12 text-black font-first justify-center text-center mb-10 md:mb-0 cursor-default">
                    <h1 className='mt-[3rem] md:mt-[8rem] text-3xl font-third font-semibold text-left'data-AOS="fade" data-aos-duration="2000" data-aos-delay="300">WartaEQ Website <br/>Redesign & Maintenance</h1>
                    <p className='text-justify md:pr-28 mt-10 font-secondary mb-5'data-AOS="fade-left" data-aos-duration="2000" data-aos-delay="300">
                        A <span className='font-third text-xl font-semibold'>wordpress and elementor website</span> freelance project assigned by BPPM Equilibrium, to redesign their previous website to have more clean and simplistic looks. Working side by side with another developer, we managed to redesign the website, while also improve the processing flow of the website and fix the previous website issues such as bad user experience, and colour designs. Create a membership feature, for the readers to sign in to.</p>
                </div>
            </div>
      
        </div>

        {/* Start Current Work */}
        <div className=""data-AOS="fade-down" data-aos-duration="1000" data-aos-delay="100">
            <Break>Current Focus</Break>
        </div>

        <div className='md:flex mx-6 md:mx-24 content-center justify-evenly mb-5'data-AOS="fade-left" data-aos-duration="2000" data-aos-delay="100">
            <Panel img={Bem} org={"BEM KM UGM"} desc={"-February 2022"} pos={"Wakil Dirjen IKAP"}></Panel>

            <Panel img={hima} org={"HIMAKOM"} desc={"-October 2021"} pos={"Staff PSDM"}></Panel>

            <Panel img={slamet} org={"SLAMET HOUSE"} desc={"-April 2022"} pos={"Web Developer"}></Panel>
        </div>

        <div className='h-12 md:h-3'>

        </div>

      
        
    </div>
  )
}

export default Hero