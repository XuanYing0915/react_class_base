import { useState } from 'react'
import style from './todo.module.css'
export default function Filter({ type, setType }) {
  const typeOptions = ['所有', '進行中', '已完成']

  return (
    <>
      {typeOptions.map((v, i) => {
        return (
          <>
            <button
              key={i}
              className={type === v ? style['active-btn'] : style['normal-btn']}
              onClick={() => {
                setType(v)
              }}
            >
              {v}
            </button>
          </>
        )
      })}
    </>
  )
}
