import { useState } from 'react'

export default function TodoIndex() {
  // 定義文字輸入狀態
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: '測試' },
    { id: 2, text: '測試2' },
    { id: 3, text: '測試3' },
  ])
  return (
    <>
      <input
        type="text"
        value={inputText}
        // 監聽改變事件
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const newTodo = { id: Number(new Date()), text: inputText }
            setTodos([newTodo, ...todos])
            setInputText('')
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((v) => {
          return <li key={v.id}>{v.text}</li>
        })}
      </ul>
    </>
  )
}
