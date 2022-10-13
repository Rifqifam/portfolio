import React from 'react'

const Panel = (props) => {

  return (
    <div class="max-w-sm bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl   mx-8 duration-500 mb-5 cursor-default">
        <div className='overflow-hidden'>
            <img class="rounded-t-lg hover:shadow-sm cursor-" src={props.img} alt="pic" />
        </div>
        <div class="p-5 border-t-[1px] border-slate-100">
            <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-900">{props.org}</h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 font-secondary">{props.desc}</p>
            <div class="inline-flex items-center py-2 px-3 text-sm font-third font-medium text-left text-slate-700 bg-white   outline-slate-200 outline-[0.8px] rounded-lg hover:shadow-lg duration-500 cursor-default">
                    {props.pos}
            </div>
        </div>
    </div>
  )
}

export default Panel