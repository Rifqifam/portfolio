import React from 'react'
import { useState } from "react";
import { Line } from 'rc-progress';
import { Reorder } from "framer-motion"

const listItems1 = [
  { name: "HTML CSS and JS", id: 1 },
  { name: "ReactJS", id: 2 },
  { name: "TailwindCSS", id: 3 },
  { name: "Framer Motion", id: 4 }
];

const listItems2 = [
    { name: "Object Oriented", id: 1 },
    { name: "OpenCV", id: 2 },
    { name: "Data Structure", id: 3 },
    { name: "Databases", id: 4 }
  ];

const listItems3 = [
    { name: "Videography", id: 1 },
    { name: "UI/UX Design", id: 2 },
    { name: "Video Effect", id: 3 },
];



const Skillcard = () => {
    const [items1, setItems1] = useState(listItems1);
    const [items2, setItems2] = useState(listItems2);
    const [items3, setItems3] = useState(listItems3);
  return (

    <div class="w-[90%] justify-center">
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6  md:gap-x-8 md:gap-y-10 grid-flow-col md:grid-rows-1 grid-rows-3'>
            <li className='skillcard'>
                <div className='skill'>
                    <h1 className='text-center pt-3'>Front End</h1>

                    <div className='flex justify-center pt-3'>
                        <Line percent={55} strokeWidth={3} strokeColor="#65a30d" className='w-[85%] rounded-lg shadow-xl' strokeLinecap='round' gapPosition='bottom' trailWidth={3}/>
                    </div>

                    <div className='flex justify-center pt-2 font-secondary text-lg text-gray-400'>
                        <h1>Intermediate</h1>
                    </div>

                    <div className='font-secondary px-5 text-left pt-3 text-black '>
                        <Reorder.Group values={items1} onReorder={setItems1}>
                            {items1.map((item) => (
                                // Change the li to Reorder.Item and add value prop
                                <Reorder.Item key={item.id} value={item} className='bg-white border-black border-[1px] rounded-lg hover:shadow-lg mb-4 p-2 px-4 duration-300 transition-shadow hover:cursor-pointer text-center sm:text-left'>
                                {item.name}
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </div>


                </div>

            </li>

            <li className='skillcard'>
                <div className='skill'>
                    <h1 className='text-center pt-3'>Programming</h1>


                    <div className='flex justify-center pt-3'>
                        <Line percent={75} strokeWidth={3} strokeColor="#fbbf24" className='w-[85%] rounded-lg shadow-xl' strokeLinecap='round' gapPosition='bottom' trailWidth={3} />
                    </div>

                    <div className='flex justify-center pt-2 font-secondary text-lg text-gray-400'>
                        <h1>Advance</h1>
                    </div>

                    <div className='font-secondary px-5 text-left pt-3 text-black '>
                        <Reorder.Group values={items2} onReorder={setItems2}>
                            {items2.map((item) => (
                                // Change the li to Reorder.Item and add value prop
                                <Reorder.Item key={item.id} value={item} className='bg-white border-black border-[1px] rounded-lg hover:shadow-lg mb-4 p-2 px-4 duration-300 transition-shadow hover:cursor-pointer text-center sm:text-left'>
                                {item.name}
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </div>

                </div>
                
            </li>

            <li className='skillcard'>
                <div className='skill'>
                    <h1 className='text-center pt-3'>Creative Media</h1>

                    <div className='flex justify-center pt-3'>
                        <Line percent={90} strokeWidth={3} strokeColor="#dc2626" className='w-[85%] rounded-lg shadow-xl' strokeLinecap='round' gapPosition='bottom' trailWidth={3} />
                    </div>

                    <div className='flex justify-center pt-2 font-secondary text-lg text-gray-400'>
                        <h1>Expert</h1>
                    </div>

                    <div className='font-secondary px-5 text-left pt-3 text-black '>
                        <Reorder.Group values={items3} onReorder={setItems3}>
                            {items3.map((item) => (
                                // Change the li to Reorder.Item and add value prop
                                <Reorder.Item key={item.id} value={item} className='bg-white border-black border-[1px] rounded-lg hover:shadow-lg mb-4 p-2 px-4 duration-300 transition-shadow hover:cursor-pointer text-center sm:text-left'>
                                {item.name}
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </div>
                </div>

            </li>
        </ul>
    </div>
  )
}

export default Skillcard