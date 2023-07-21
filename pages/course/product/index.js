import { useEffect, useState } from 'react'
import Link from 'next/link'

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
export default function ProductIndex() {
  // [
  //   {
  //       "id": "1",
  //       "picture": "https://via.placeholder.com/150",
  //       "stock": 5,
  //       "name": "iPhone 12 Pro",
  //       "price": 25000,
  //       "tags": "蘋果,大螢幕"
  //    }
  // ]
  const [products, setProducts] = useState([])

  // 向伺服器獲取資料的函式
  const getProducts = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    )
    const data = await res.json()

    setProducts(data)
    console.log(data)
  }

  // didMount(第一次渲染)時，載入資料
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v) => {
          return (
            <li key={v.id}>
              <Link href={`/course/product/${v.id}`}>
                {v.name} / {v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
