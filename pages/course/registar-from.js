import React, { useState } from 'react'

export default function RegistarFrom() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
  })
  // 所有的表單欄位共用處理事件的函式
  const handleFieldChange = (e) => {
    // 物件為:
    // 抓取目標的name:目標填入的value
    // [e.target.name]
    // ^^^^^^^^^^^^^^^
    // 計算得來的屬性名稱()
    console.log(e.target.name, e.target.value)
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }
  return (
    <>
      <h1>註冊表單輸入與驗證</h1>
      <div>
        <label>
          姓名:
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleFieldChange}
          />
        </label>
      </div>
      <div>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
          />
        </label>
      </div>
      <div>
        <label>
          密碼:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
        </label>
      </div>
      <div>
        <label>
          確認密碼:
          <input
            type="password"
            name="password2"
            value={user.password2}
            onChange={handleFieldChange}
          />
        </label>
      </div>
      <button>送出</button>
    </>
  )
}
