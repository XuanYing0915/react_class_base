import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)
  const [count, setCount] = useState(products)

  //   增加
  const add = (id) => {
    // 把產品物件map
    const newProducts = products.map((v, i) => {
      // 如果id===點擊的id
      // 把物件攤開   回傳count+1的結果
      if (v.id === id) return { ...v, count: v.count + 1 }
      else return { ...v }
    })
    setProducts(newProducts)
  }

  //   減少
  const sub = (id) => {
    // 把產品物件map
    const newProducts = products.map((v, i) => {
      // 如果id===點擊的id
      // 把物件攤開   回傳count+1的結果
      if (v.id === id) return { ...v, count: v.count - 1 }
      else return { ...v }
    })
    setProducts(newProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {/* 名稱(數量) */}
          {product.name} (<b>{product.count}</b>)
          <button
            // 按鈕函式
            // 物件 =深拷貝
            onClick={() => {
              add(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              sub(product.id)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
