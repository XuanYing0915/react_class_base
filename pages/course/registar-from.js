import React, { useState } from 'react'

export default function RegistarFrom() {
  // 注意 狀態是物件時的初始值
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

  const handleSubmit = (e) => {
    // 阻擋預設提交行為  preventDefault()
    e.preventDefault()
    // 以下幫表單做檢查驗證
    if (!user.fullName) {
      alert('姓名未填寫')
    }
    if (!user.email) {
      alert('信箱未填寫')
    }
    if (!user.password) {
      alert('密碼未填寫')
    }
    if (!user.password2) {
      alert('驗證密碼未填寫')
    }
    if (user.password !== user.password2) {
      alert('驗證密碼與密碼不符合')
    }
  }
  return (
    <>
      <h1>註冊表單輸入與驗證</h1>
      <form onSubmit={handleSubmit}>
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
          <button type="button">加type="button" 才不會發送表單</button>
        </div>
        <div>
          <button type="submit">送出</button>
        </div>
      </form>
    </>
  )
}
