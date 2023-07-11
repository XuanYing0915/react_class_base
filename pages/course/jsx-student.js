import React from 'react'

const students = [
  { id: 107001, name: '張佳蓉', age: 21 },
  { id: 107002, name: '楊智云', age: 20 },
  { id: 107003, name: '陳語合', age: 19 },
  { id: 107004, name: '林世名', age: 22 },
  { id: 107005, name: '張建彰', age: 21 },
  { id: 107006, name: '黃國瑄', age: 20 },
  { id: 107007, name: '徐昶意', age: 18 },
  { id: 107008, name: '賴靖瑞', age: 19 },
  { id: 107009, name: '宋紀仲', age: 22 },
]

export default function JsxStudent() {
  return (
    <>
      <div>jsx中使用map呈現資料</div>
      {/*可縮減為data.map((v,i)=>{})  */}
      {/* 語意完整的寫法 */}
      <ul>
        {students.map((student, i) => {
          return (
            <li key={student.id}>
              {student.id}/{student.name}/{student.age}
            </li>
          )
        })}
      </ul>
    </>
  )
}
