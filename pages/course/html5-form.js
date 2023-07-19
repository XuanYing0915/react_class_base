import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from 'next/dist/shared/lib/constants'
import React, { useState } from 'react'

export default function Html5Form() {
  // input
  const [inputText, setInputText] = useState('')
  //   textarea
  const [textareaText, setTextareaText] = useState('')
  // input-pwd
  const [PWD, setPWD] = useState('')
  //   showPWD  (呈現密碼用  true=呈現密碼)
  const [show, setShow] = useState(false)

  // radio
  const option = ['選項1', '選項2', '選項3']
  const [radioOption, setRadioOption] = useState('')

  // select
  const select = ['選項1', '選項2', '選項3']
  const [selectOption, setSelectOption] = useState('')

  //checkbox group-1
  const fruitOption = ['溫迪', '鍾離']
  const [fruits, setFruit] = useState([''])

  // 獨立出處理函式
  const handleFruits = (e) => {
    const targetValue = e.target.value
    // 判斷是否在 state陣列中
    if (fruits.includes(targetValue)) {
      // 如果有，則移出state陣列
      const newFruits = fruits.filter((v2) => v2 != targetValue)
      setFruit(newFruits)
    } else {
      // 如果沒有，則加入state陣列
      setFruit([...fruits, targetValue])
    }
  }
  return (
    <>
      <h1>可控表單元件</h1>
      <section id="input-text">
        <h2>文字輸入框(input text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        ></input>
      </section>
      <section id="textarea-text">
        <h2>文字輸入框(textarea text)</h2>
        <div>react 沒有textarea 使用會跳警告</div>
        <textarea
          type="text"
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        ></textarea>
      </section>
      <section id="input-text-PWD">
        <h2>文字密碼書框轉換</h2>
        <input
          type={show ? 'text' : 'password'}
          value={PWD}
          onChange={(e) => {
            setPWD(e.target.value)
          }}
        />
        <label>
          <input
            type="checkbox"
            checked={show}
            onChange={(e) => {
              setShow(e.target.checked)
            }}
          />
          顯示密碼
        </label>
      </section>
      <section id="radio-group">
        <h2>按鈕選項群組radio</h2>
        {option.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                name="radioName"
                value={v}
                // 用值和目前選中的food狀態來比較，決定是否呈現選中的樣子
                checked={v === radioOption}
                // 狀態中要記錄的是每個選項按鈕被點按後的值
                onChange={(e) => {
                  setRadioOption(e.target.value)
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section id="select">
        <h2>下拉選單(select)</h2>
        <div>選擇列表的傳值方式在select上</div>
        <div>默認選項放外面且value必須等於useStates</div>
        <select
          value={selectOption}
          onChange={(e) => {
            setSelectOption(e.target.value)
          }}
        >
          <option value="">-默認選項-</option>
          {select.map((v, i) => {
            return (
              <>
                <option key={i} value={v}>
                  {v}
                </option>
              </>
            )
          })}
        </select>
      </section>
      <section id="checkbox-group-1">
        {fruitOption.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                value={v}
                checked={fruits.includes(v)}
                //判斷是否在state陣列中
                // 如果有  移出陣列
                // 如果沒有  加入陣列
                onChange={handleFruits}
              />
              {v}
            </label>
          )
        })}
      </section>
    </>
  )
}
