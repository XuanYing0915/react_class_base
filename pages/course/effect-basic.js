import React, { useEffect, useState } from 'react'

export default function EffectBasic() {
  const [N, setN] = useState(0)
  // 每次render都會執行的樣式(少用)
  useEffect(() => {
    console.log('每次render會執行到這邊')
  })
  //   didMount(after first render)
  //   第一次渲染'後'執行,之後不會再執行
  useEffect(() => {
    console.log('第一次渲染"後"執行,之後不會再執行')
  }, [])
  return (
    <>
      <h1>useEffect範例</h1>
      <h2>{N}</h2>
      <button
        onClick={() => {
          setN(N + 1)
        }}
      >
        +1
      </button>
    </>
  )
}
