import React from 'react'

const section = (props) => {
  return (
    <span className={props.className} onClick={props.onClick}>{props.text}</span>
  )
}

export default section