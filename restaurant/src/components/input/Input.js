import React from 'react'

const Input = React.forwardRef((props, ref) => (
  // forwardRef - automatically passes a ref through a component
  // to one of its children
  <div className='input'>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
  </div>
)
)

export default Input