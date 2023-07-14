import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')
  //父母元件必需要先定義一組狀態，專門讓子女B元件傳遞資料到父母來
  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>Parent</h1>
      <ChildA pData={'由此輸入傳回子元件'} />
      <p>來自ChildB的內部資料:{dataFromChildB}</p>
      {/* 利用props傳遞，設定狀態的方法 */}
      <ChildB setDataFromChildB={setDataFromChildB} />
      {/* 利用props傳遞得到的狀態 */}
      {/* A拿到B的資料 */}
      <ChildA dataFromChildB={dataFromChildB} />
    </>
  )
}
