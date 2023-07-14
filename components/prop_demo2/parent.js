import React, { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // 父元件必須定義一組狀態 讓子女B元件設定回資料到父元件來
  const [pData, setPData] = useState('parent data')
  return (
    <>
      <h1>Parent</h1>
      <ChildA />
      <ChildB />
    </>
  )
}
