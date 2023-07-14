import React from 'react'
import PropTypes from 'prop-types'
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

  // return (
  //   <>
  //     <div>子元件{id}</div>
  //     <p>商品:{name}</p>
  //     <p>價格:{price}</p>
  //     <p>內容:{text}</p>
  //     ------------------------
  //   </>
  // )

  // 檢查格式語法
  // Children.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   text: PropTypes.string,
  // }

  // 類別屬性(靜態屬性)語法
  // Child.defaultProps = {
  //   name: 'Amy',
  //   text: 'xxx',
  //   price: 11,
  // }
}
