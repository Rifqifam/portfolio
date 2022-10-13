import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contactme = () => {

  const myForm = useRef(null);

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_ast3lzl',
    'template_sc907ud',
    e.target,
    'pHXfeDZSGGW6nKg6g'
    ).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

    myForm.current.reset();
  };

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
    <div className='mt-[66px]  text-slate-600  justify-center flex p-32'>

      <div className='w-[40vw] h-min-[60vh] justify-center rounded-3xl p-7 border-slate-200 border-[2px] shadow-xl' data-AOS="fade-down" data-aos-duration="1500" data-aos-delay="100">
      
        <h1 className='text-center text-3xl font-secondary underline underline-offset-[9px] decoration-1 decoration-slate-400 py-5'> Contact Me </h1>
        <form onSubmit={sendEmail} ref={myForm}>
          <div class="form-group mb-6 mt-4">
            <input type="text" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:shadow-md
              hover:shadow-md
              focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none" id="exampleInput7"
              placeholder="Name" name='name'/>
          </div>
          <div class="form-group mb-6">
            <input type="email" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:shadow-md
              hover:shadow-md
              focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none" id="exampleInput8"
              placeholder="Email address" name='email'/>
          </div>
          <div class="form-group mb-6">
            <textarea
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:shadow-md
              hover:shadow-md
              focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none
              resize-none
            "
            id="exampleFormControlTextarea13"
            rows="5"
            placeholder="Message" name='message'
          ></textarea>
          </div>
          <button type="submit" class="
            w-full
            mt-3
            px-6
            py-2.5
            bg-white
            text-black
            font-medium
            font-secondary
            text-base
            leading-tight
            uppercase
            rounded
            shadow-md
            border-[1px]
            border-slate-600
            hover:bg-slate-600 hover:shadow-lg hover:text-white
            focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white
            active:bg-slate-900 active:shadow-lg active:text-white
            transition
            duration-300
            ease-in-out" value='send'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contactme