import { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from '@/styles/londer.module.css'

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

  // 載入指示器用
  const [loading, setLoading] = useState(false)

  // 向伺服器獲取資料的函式
  const getProducts = async () => {
    // 開啟載入指示動畫
    setLoading(true)

    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    )
    const data = await res.json()

    setProducts(data)

    // 1.5秒後關閉載入指示動畫
    setTimeout(() => {
      setLoading(false)
    }, 1500)

    console.log(data)
  }

  // didMount(第一次渲染)時，載入資料
  useEffect(() => {
    getProducts()
  }, [])

  const loader = (
    <div className={styles['lds-facebook']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  const display = (
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
  )

  return (
    <>
      <h1>商品列表頁</h1>
      {loading ? loader : display}
    </>
  )
}
