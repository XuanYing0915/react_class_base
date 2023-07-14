import { useState } from 'react'

export default function ChildB(props) {
  console.log(props)
  const [childBData, setChildBData] = useState('child B data')

  return (
    <>
      <h1>ChildB</h1>
      {/* 觸發事件利用事件函式，傳資料給父母 */}
      <button
        // 子元件不能直接傳子元件   必須透過父元件建立橋樑  所以資料必須先傳到父元件
        onClick={() => {
          props.setDataFromChildB(childBData)
        }}
      >
        傳資料給父母
      </button>
    </>
  )
}
