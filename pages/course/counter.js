import React, { useState } from 'react'

export default function Counter() {
  // 獲得值的變數，設定值的方法=初始值
  const [count, setCount] = useState(0)
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
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
