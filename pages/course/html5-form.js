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
    </>
  )
}
