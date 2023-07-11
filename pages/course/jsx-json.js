import React from 'react'
// 引入資料  +@代表跟目錄
import data from '@/data/students.json'

export default function JsxJson() {
  return (
    <>
      <div className="row">
        <div className="col-6 d-flex">
          <div>jsx中使用map呈現資料</div>
          {/* 使用迭代將每個資料都帶入*/}
          <ol>
            {data.map((data, i) => {
              return (
                <li key={data.id}>
                  {data.id}/{data.name}/{data.age}
                </li>
              )
            })}
          </ol>
          <div className="col-6">
            <div>table使用法</div>
            {/* 使用迭代將每個資料都帶入*/}
            <table border="1">
              <tr>
                <th>編號</th>
                <th>姓名</th>
                <th>年齡</th>
              </tr>

              {data.map((data, i) => {
                return (
                  <>
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                    </tr>
                  </>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
