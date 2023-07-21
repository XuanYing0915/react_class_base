import { useEffect, useState } from 'react'
import Child from '@/components/effect-basic2/child'
import Child2 from '@/components/effect-basic2/child2'
export default function EffectBasic2() {
  const [name, setName] = useState('venti')
  const [name1, setName1] = useState({ myname: 'Iris' })
  return (
    <>
      <h1>useEffect基本陣列</h1>
      <button
        onClick={() => {
          setName('Nahida')
        }}
      >
        更改姓名
      </button>
      <button
        onClick={() => {
          setName('Venti')
        }}
      >
        更改姓名
      </button>
      <Child name={name} />

      <h1>useEffect基本範例-物件</h1>
      <button
        onClick={() => {
          setName1({ myname: 'Nike' })
        }}
      >
        改名為Nike
      </button>
      <button
        onClick={() => {
          setName1({ myname: 'Iris' })
        }}
      >
        改名為Iris
      </button>
      <Child2 name={name1} />
    </>
  )
}
