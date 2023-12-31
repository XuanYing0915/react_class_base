import { useState } from 'react'

export default function TodoIndex() {
  // 定義文字輸入狀態
  const [inputText, setInputText] = useState('')

  // 為了要修正中文輸入法的用Enter組字用的信號狀態
  const [isCompositing, setIsCompositing] = useState(false)

  const [todos, setTodos] = useState([
    { id: 1, text: '測試', completed: false },
    { id: 2, text: '測試2', completed: true },
    { id: 3, text: '測試3' },
  ])

  const toggleCompleted = (id) => {
    const newTodos = todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })

    setTodos(newTodos)
  }
  return (
    <>
      <input
        type="text"
        value={inputText}
        // 監聽改變事件 讀取輸入值
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        // 開關中文輸入法組字期間
        onCompositionStart={() => setIsCompositing(true)}
        onCompositionEnd={() => setIsCompositing(false)}
        // enter發送 會將值帶入  並用日期展生id
        onKeyDown={(e) => {
          // 要在不是中文輸入法組字期間，按下Enter才加入到待辨事項
          // 有值時(不是空白才能加入)
          if (e.key === 'Enter' && !isCompositing && inputText) {
            // 按按鈕  新增一個物件
            //定義一個新的物件
            // id使用時間日期轉成毫秒的方式當id
            const newTodo = {
              id: Number(new Date()),
              text: inputText,
              completed: false,
            }
            // 展開陣列 加入物件
            setTodos([newTodo, ...todos])
            // 清空輸入欄位
            setInputText('')
          }
        }}
      />
      <hr />
      <ul>
        {/* 將陣列物件渲染 */}
        {todos.map((v) => {
          return (
            <li key={v.id}>
              {/* checked true = 打勾  */}
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  toggleCompleted(v.id)
                }}
              />
              {/* 判斷  ture=上刪除線 */}
              {v.completed ? <del>{v.text}</del> : v.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}
