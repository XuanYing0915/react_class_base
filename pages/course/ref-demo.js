import React from 'react'
import RefsForm from '@/components/refs-demo/refs-form'
import IdForm from '@/components/refs-demo/id-form'

export default function RefsDemo() {
  return (
    <>
      <h1>Refs範例</h1>
      <IdForm />
      <IdForm />
      <div>id不能共用 點第2個也只偵測到第一個id</div>
      <h1>Refs範例</h1>
      <RefsForm />
    </>
  )
}
