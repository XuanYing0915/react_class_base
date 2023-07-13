import React from 'react'
import Children from '@/components/prop_demo/children'
export default function Parent() {
  return (
    <>
      <div>
        <h1>父元件</h1>
        父元件可定義子元件
        <Children id="1" text="由父母元件更改" name="cc" price={100} />
        <Children id="2" text="可定義很多不同東西" name="cc" price={100} />
        <Children id="3" text="用同一個子元件" name="cc" price={100} />
      </div>
      -------------------------
      <style jsx>{`
        div {
          border: 2px solid red;
        }
      `}</style>
    </>
  )
}
