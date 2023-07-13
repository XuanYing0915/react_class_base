import React, { useState } from 'react'

export default function Menu() {
  const [itemText, setItemText] = useState('')
  const items = ['首頁', '關於我們', '產品']

  return (
    <ul>
      {items.map((v, i) => {
        return (
          <li key={i} className={itemText === v ? 'active' : ''}>
            <a
              href="#"
              onClick={() => {
                setItemText(v)
              }}
            >
              {v}
            </a>
          </li>
        )
      })}
      {/* <li className={itemText === '關於我們' ? 'active' : ''}>
        <a
          href="#"
          onClick={() => {
            setItemText('關於我們')
          }}
        >
          關於我們
        </a>
      </li>
      <li className={itemText === '產品' ? 'active' : ''}>
        <a
          href="#"
          onClick={() => {
            setItemText('產品')
          }}
        >
          產品
        </a>
      </li> */}
    </ul>
  )
}
// -------------------------------------------------
// 使用索引值的做法
// function App() {
//     // 目前的所有的選單項目
//     const menuItems = ['首頁', '關於我們', '產品']
//     // -1代表一開始沒有被按的項目
//     const [activeIndex, setActiveIndex] = useState(-1)

//     return (
//       <ul>
//         {menuItems.map((v, i) => {
//           return (
//             <li
//               key={i}
//               onClick={() => {
//                 setActiveIndex(i)
//               }}
//             >
//               <a href="#/" className={activeIndex === i ? 'active' : ''}>
//                 {v}
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }

// -------------------------------------------------
// 使用物件的做法
// 最多人使用
// const initState = (items) => {
//     const menuItems = []
//     for (let i = 0; i < items.length; i++) {
//       menuItems.push({
//         id: i + 1,
//         name: items[i],
//         active: false,
//       })
//     }

//     return menuItems
//   }

// const defaultMenuItems = [
//   {
//     id: 1,
//     name: '首頁',
//     active: false,
//   },
//   {
//     id: 2,
//     name: '關於我們',
//     active: false,
//   },
//   {
//     id: 3,
//     name: '產品',
//     active: false,
//   },
// ]

//   function App() {
//     // 目前的所有的選單項目
//     const items = ['首頁', '關於我們', '產品']

//     const defaultMenuItems = initState(items)
//     // 一開始沒有被按的項目, active全為false
//     const [menuItems, setmenuItems] = useState(defaultMenuItems)

//     return (
//       <ul>
//         {menuItems.map((v, i, array) => {
//           return (
//             <li
//               key={i}
//               onClick={() => {
//                 const newMenuItems = defaultMenuItems.map((v,index)=>{
//                   if(i===index)
//                   return {...v, active:true}

//                   return v
//                 })

//                 setmenuItems(newMenuItems)
//               }}
//             >
//               <a href="#/" className={v.active ? 'active' : ''}>
//                 {v.name}
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }
