import React from 'react'
import { useRouter } from 'next/router'

export default function UserName() {
  const router = useRouter()

  const { name } = router.query
  console.log(router.query)
  return (
    <>
      <div>檔名可以是[].js 組成</div>
      <div>name={name}</div>
      {/* <div>name={router.query[`user-id`]}</div>
      <div>name={router.query.uid}</div> */}
    </>
  )
}
