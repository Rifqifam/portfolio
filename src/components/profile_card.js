import React from 'react'
import fam from '../Img/me.png'

const profile_card = () => {
  return (
<div className=' mx-5 p-5 pt-9 md:flex md:justify-evenly'>

    <div className='md:ml-28 md:pt-7  flex justify-center'>
      <div className="prof-zoom">
      <img src={fam} alt="" className='prof-zoom-image px-5 pt-5'/>
      </div>
    </div>

    <div className=' justify-center md:justify-start flex md:mt-5 '>

      <div className='mt-4 md:ml-10 md:w-[93%] justify-center '>

        <div className=' mx-10 md:mx-0 justify-center md:justify-start md:text-left text-center'>
          <h1 className='font-third text-lg md:text-2xl'>My Name is Muhammad Rifqi Fameizy</h1>
        </div>

        <div className=' mx-1 md:mx-0 md:w-[90%] flex'>
          <h2 className='font-secondary text-base md:text-lg mx-3 md:mx-0 mt-3 duration-500 transition-all text-justify'>Welcome to my Profile, let me introduce myself my name is Muhammad Rifqi Fameizy you can call me <span className='font-bold'>Fam</span> for short. I'm a student in Universitas Gadjah Mada majoring in <span className='italic'>Computer Science</span> batch of 2021. I'm proactive in many skill based sector such as<span className='font-semibold underline-offset-[6px] hover:underline hover:shadow-md'> Event Organizing</span>,<span className='font-semibold underline-offset-[6px] hover:underline hover:shadow-md'> Videography</span>,<span className='font-semibold underline-offset-[6px] hover:underline hover:shadow-md'> UI/UX Design</span>, and<span className='font-semibold underline-offset-[6px] hover:underline hover:shadow-md'> Front-End Developing</span> </h2>
        </div>

        <div className=' mx-1 md:mx-0 md:pl-0 pl-3 mt-5 md:mt-7 lg:mt-12'>
          <h2 className='font-secondary text-base md:text-lg'>My Social Media : </h2>

          <div className='flex mt-1 md:w-[110vh] justify-start transition-all'>
            
            <div className=''>
            <a href="https://www.linkedin.com/in/rifqifameizy" target="_blank" rel="noreferrer" className='socmed_desktop socmed_mobile'>
              <ion-icon name="logo-linkedin" size="large" className='black'></ion-icon>
            </a>
            </div>

            
            <div className=''>
            <a href="" className='socmed_desktop socmed_mobile'>
              <ion-icon name="mail" size='large' ></ion-icon>
            </a>
            </div>

            <div className=''>
              <a href="https://www.instagram.com/rifqifam/" target="_blank" rel="noreferrer" className='socmed_desktop socmed_mobile'>
              <ion-icon name="logo-instagram" size='large' className=''></ion-icon>
              </a>
            </div>

          </div>            
        </div>
      </div>
    </div>
</div>
  )
}

export default profile_card