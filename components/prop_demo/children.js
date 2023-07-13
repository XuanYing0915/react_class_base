import React from 'react'

// 解構
// export default function Children({ id, name, price, text }) {
// 解構+賦值
export default function Children({
  id = 100,
  name = '子元件預設',
  price = '0',
  text = '預設',
}) {
  return (
    <>
      <div>子元件{id}</div>
      <p>商品:{name}</p>
      <p>價格:{price}</p>
      <p>內容:{text}</p>
      ------------------------
    </>
  )
}
