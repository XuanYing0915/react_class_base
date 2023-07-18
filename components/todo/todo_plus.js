import { useState } from 'react'
import AddForm from './add-form'
import List from './list'

export default function TodoIndexPlus() {
  //   // 定義文字輸入用的狀態
  //   const [inputText, setInputText] = useState('')
  //   // 為了要修正中文輸入法的用Enter組字用的信號狀態
  //   const [isCompositing, setIsCompositing] = useState(false)

  // 定義待辨事項狀態，每個成員 todo = { id:number, text:string, completed:bool }
  // !!重要!! 資料一定要有id，因為key要用id才可以作新增、修改、刪除，這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  // 建立新todo
  // 純粹函式(pure function)，只處理狀態改變
  //   因為是閉鎖的  必須自己設定id 不能用引用日期或是外來套件產生
  //   所以選擇使用id+1方式
  const add = (todos, text) => {
    // 仿照資料庫遞增id的作法(id需要有規則和都是數字才可以)
    // 取出所有id為陣列
    const ids = todos.map((v) => v.id)
    // 得到陣列中最大值，之後加1(預設為1)
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1

    // 建立新的todo物件
    const newTodo = {
      id: newId,
      text: text,
      completed: false,
    }

    // 回傳新的todos狀態
    return [newTodo, ...todos]
  }

  // 切換完成狀態(completed)
  // 如果有比對到v.id是id，作切換布林值的動作
  // 純粹函式(pure function)，只處理狀態改變
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }
  // 純粹函式(pure function)，如果有比對到v.id是id，就作移除該成員
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id)
  }

  // 專門設計給拆分出AddForm子元件用的處理函式
  const handleAdd = (inputText) => {
    setTodos(add(todos, inputText))
  }
  // 專門設計給拆分出item子元件用的處理函式
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  // 專門設計給Item子元件用的處理函式
  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      {/* <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        // 開關中文輸入法組字期間
        onCompositionStart={() => setIsCompositing(true)}
        onCompositionEnd={() => setIsCompositing(false)}
        onKeyDown={(e) => {
          // 要在不是中文輸入法組字期間，按下Enter才加入到待辨事項
          // 有值時(不是空白才能加入)
          if (e.key === 'Enter' && !isCompositing && inputText) {
            // 新增一筆todo
            setTodos(add(todos, inputText))
            // 清空文字輸入框
            setInputText('')
          }
        }}
      /> */}
      <hr />
      {/* 引入list */}
      <List
        todos={todos}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
      />
      {/* <ul>
        {todos.map((v) => {
          const { id, completed, text } = v
          return (
            <Item
              key={id}
              id={id}
              completed={completed}
              text={text}
              handleToggleCompleted={handleToggleCompleted}
              handleRemove={handleRemove}
            />
          )
        })}
      </ul> */}
    </>
  )
}
{
  /* <li key={v.id}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  setTodos(toggleCompleted(todos, v.id))
                }}
              />
             切換completed狀態，呈現刪除線樣式 
              {v.completed ? <del>{v.text}</del> : v.text}
              <button
                onClick={() => {
                  setTodos(remove(todos, v.id))
                }}
              >
                刪除
              </button>
            </li> */
}
