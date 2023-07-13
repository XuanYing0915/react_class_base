import React from 'react'

export default function Children(props) {
  console.log(props)
  return (
    <>
      <div>子元件{props.id}</div>
      <p>商品:{props.name}</p>
      <p>價格:{props.price}</p>
      <p>內容:{props.text}</p>
      ------------------------
    </>
  )
}
