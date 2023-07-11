import data from '@/data/products.json'

import styles from '@/styles/product-table.module.css'

// 每筆資料的物件樣子
// {
// "id": 1,
// "picture": "https://via.placeholder.com/150.png",
// "stock": 5,
// "name": "iPhone 12 Pro",
// "price": 25000,
// "tags": "蘋果,大螢幕"
// }

export default function ProductTable() {
  return (
    <>
      {/* <style jsx>
      </style> */}
      <table className={styles['my-table']}>
        <thead>
          <tr className={styles['my-tr']}>
            <th className={styles['my-th']}>ID</th>
            <th className={styles['my-th']}>圖片</th>
            <th className={styles['my-th']}>名稱</th>
            <th className={styles['my-th']}>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => {
            return (
              <tr key={v.id} className={styles['my-tr']}>
                <td className={styles['my-td']}>{v.id}</td>
                <td className={styles['my-td']}>
                  <img src={v.picture} />
                </td>
                <td className={styles['my-td']}>{v.name}</td>
                <td className={styles['my-td']}>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* style 直接引入 jsx */}
      {/* 語法  <style jsx >{` css格式  `}</style> */}
      {/* 自動轉換成 css語法 */}
      {/*頁面顯示為
      <td class="jsx-c411dcfc662a98f1 ">iPhone 12 Pro</td>  */}
      {/* 適合做單元件的巢狀套件 */}
      {/* 缺點  難管理  讓檔案變大 */}
      <style jsx>{`
        table {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        td,
        th {
          border: 1px solid #ddd;
          padding: 8px;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        tr:hover {
          background-color: #ddd;
        }

        th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #04aa6d;
          color: white;
        }
      `}</style>
    </>
  )
}
