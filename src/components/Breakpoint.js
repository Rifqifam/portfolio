import React from 'react'

const Breakpoint = (props) => {
  return (
    <div className="pt-28">
      <div class="relative flex pb-5 items-center">
        <div class="flex-grow border-t border-slate-400">
        </div>

        <span class="flex-shrink mx-4 text-slate-900 font-secondary">{props.children}</span>

        <div class="flex-grow border-t border-slate-400">
        </div>
      </div>
    </div>
  )
}

export default Breakpoint