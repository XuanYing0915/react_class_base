import { remove } from 'lodash'
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

  // 把加減統整成一個函式
  // 找到符合id的商品物件，把count屬性 +value
  const updateCount = (id, value) => {
    const newProducts = products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count + value }
      else return { ...v }
    })

    setProducts(newProducts)
  }

  const remove = (id) => {
    const newProducts = products.filter((v) => {
      return v.id !== id
    })
    setProducts(newProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              updateCount(product.id, 1)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 移除商品
              // 因為鉤子不同步  所以必須定義出另一個值  表示鉤子執行後的值    才可以在函式內運作

              // 用臨界值判斷  可以省略一個定義步驟
              // 1-1=0 =要移除
              // 如果量剩餘1  等於下一次減法要移除
              if (product.count === 1) {
                remove(product.id)
              } else {
                // 如果不為1  直接執行減法
                updateCount(product.id, -1)
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
