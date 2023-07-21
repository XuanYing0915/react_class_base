import React from 'react'
import { useEffect } from 'react'
export default function Child(prop) {
  return (
    <>
      <h1>子元件(child)</h1>
      <div>姓名:{prop.name}</div>
      <div>狀態改變才會觸發重新渲染</div>
      <div>按鈕點兩次 屬性無改變 所以沒動作</div>
    </>
  )
}
