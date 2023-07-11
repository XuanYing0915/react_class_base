import React, { useState } from 'react'
// React 提供的一個 Hook 函式，用於在函式組件中創建狀態。

export default function InlineIf() {
  // 使用 useState 創建一個狀態
  // count 是狀態的值，setCount 是更新狀態的函式
  // useState 參數為初始狀態的值，這裡將初始值設定為 0
  // 初始值必須要給  沒填寫=undefined 容易壞
  const [count, setCount] = useState(0)
  // [獲得值的變數,設定值的方法]=useState(初始值)
  //     [變數  ,set變數]

  return (
    <>
      <button
        onClick={() => {
          // 使用 setCount 更新狀態，設定新的值

          setCount(count + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // 使用 setCount 更新狀態，設定新的值

          setCount(count - 1)
        }}
      >
        -
      </button>
      <div>點擊次數: {count}</div>
    </>
  )
}
