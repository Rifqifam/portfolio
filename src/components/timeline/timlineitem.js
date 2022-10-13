
import {motion} from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const timelineItem = ({ data }) => (
    <div className="timeline-item" data-AOS="fade-up" data-aos-duration="1500" data-aos-delay="100">
        <div className="timeline-item-content" >
            <span className="tag" style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <div className='time-contain'>
                <time className='time'>{data.date}</time>
            </div>
            <div className="my-4 mb-6">
                <div className='title'>
                    <p className="font-third font-bold text-xl mb-1">{data.text}</p>
                </div>
                <div className='hidden md:flex'>
                    <p className="font-secondary text-sm text-justify">{data.exerpt}</p>
                </div>
            </div>

     

            {data.links && (
                <motion.button  className=" font-secondary font-bold " whileHover={{scale:1.1, transition:{duration:0.3}}} whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
                    <a href={data.links.url} target='_blank' rel='noopener noreferrer' className='py-2 px-3 rounded-md text-black border-[1px] border-black hover:bg-slate-600
                    hover:text-white duration-300 hover:shadow-md'>{data.links.text}</a>
                    
                </motion.button>
            )}
            <span className="circle"></span>
            
        </div>
    </div>
);

export default timelineItem;