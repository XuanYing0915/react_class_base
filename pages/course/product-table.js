import React from 'react'
import data from '@/data/products.json'
import { values } from 'lodash'

export default function ProductTable() {
  return (
    <>
      <div>Map產品表</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => {
            return (
              <>
                <tr>
                  <td key={v.id}>{v.id}</td>
                  <td>
                    <img src={v.picture} />
                  </td>
                  <td>{v.name}</td>
                  <td>{v.price}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
