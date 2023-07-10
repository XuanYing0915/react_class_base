import React from 'react'

export default function JsxMap() {
  const users = ['venti', 'Nahida', 'yin']

  //   const displayUsers = users.map((v, i) => {
  //     return <li key={i}>{v}</li>
  //   })
  return (
    <>
      <h2>Jsx語法中Map使用陣列方式(背起來)</h2>
      <ul>
        {/* map迭代會產生新陣列  key值為必加  否則出錯 不能重複*/}
        {/*  使用陣列索引作為實際上是不好的  稱為反樣式(anti-pattern) 唯一能使用的地方為靜態資料  不會變動的資料 */}
        {/* key的選擇 
        1.資料源自資料庫:用資料庫主鍵當key
        2.資料由應用中執行產生，uuid或naanoid函式庫來產生(但不可以)在渲染時，而是要在建立時產生
        3.隨機數:自己寫的隨機術或日期物件轉整數 */}
        {users.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
