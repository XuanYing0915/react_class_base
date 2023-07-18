import React from 'react'
import TodoIndex from '@/components/todo/index'
import TodoIndexPlus from '@/components/todo/todo_plus'

export default function Todo() {
  return (
    <>
      <h1>Todo待辨事項</h1>
      <TodoIndex />
      <h1>新增純粹函式</h1>
      <TodoIndexPlus />
    </>
  )
}
