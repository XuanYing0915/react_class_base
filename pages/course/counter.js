import { useState } from 'react'

export default function InlineIf() {
  // 使用react 的特性 =狀態(state) 不可改變性
  // 若要改變  需要賦予一個新的值  並設定給他覆蓋
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          const newN = count + 1
          // set...有異步的特性
          setCount(count + 1)
          console.log(newN)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -
      </button>
      <div>點擊次數: {count}</div>
    </>
  )
}
