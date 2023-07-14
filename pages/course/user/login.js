import React from 'react'
// 必須使用link 不要用a
import Link from 'next/link'
// 引入鉤子
import { useAuth } from '@/hooks/use-auth'

export default function Login() {
  // 定義鉤子狀態
  const { auth, setAuth } = useAuth()

  const loginButton = (
    // 設定點按鈕就帶入資料
    <button
      onClick={() => {
        setAuth({
          id: 123,
          name: 'Eddy',
          token: 'xxxxx',
        })
      }}
    >
      登入
    </button>
  )
  // 設定點按鈕就把資料設為空
  const logoutButton = (
    <button
      onClick={() => {
        setAuth({
          id: 0,
          name: '',
          token: '',
        })
      }}
    >
      登出
    </button>
  )

  return (
    <>
      <h1>會員登入</h1>
      {/* 如果id為空  出現登入按鈕  如果不為空  出現登出 */}
      {auth.id === 0 ? loginButton : logoutButton}
      <hr />
      {/* 要用Link元件取代a連結，才能保持住狀態，不然在連結時會刷新頁面，狀態會重新初始化變為初始值 */}
      <Link href="/course/user/profile">會員資料</Link>
    </>
  )
}
