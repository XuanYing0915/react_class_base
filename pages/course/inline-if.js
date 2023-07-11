import { useState } from 'react'

export default function InlineIf() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>判斷式應用</div>
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
      <hr />
      {/* &&前面的運算要能算出布林值 */}
      {!!count && <h2>訊息:目前次數為{count}</h2>}
      {Boolean(count) && <h2>訊息:目前次數為{count}</h2>}
      {count !== 0 && <h2>訊息:目前次數為{count}</h2>}
      {count > 0 && <h2>訊息:目前次數為{count}</h2>}
    </>
  )
}
