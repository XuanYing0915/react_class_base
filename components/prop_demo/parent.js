import React from 'react'
import Children from '@/components/prop_demo/children'
export default function Parent() {
  const oa = {
    text: '今天開始學react',
    name: 'Eddy',
    price: 100,
  }
  const abc = 'xxxx'
  const total = 100

  const product = {
    name: '小熊餅干',
    cat: '零食',
    price: 100,
    aa: 1,
    ab: 2,
    ac: 3,
  }
  return (
    <>
      <div>
        <h1>父元件</h1>
        父元件可定義子元件
        Parent元件渲染了Child，所以是Child的父母元件，才能建立P-C的關係 *
        在父母與子女元件中以props(屬性)的方式傳遞值，值可以是各種JS合法值，包含物件、陣列、函式
        <Children id="1" text="由父母元件更改" name="cc" price={100} />
        <Children id="2" text="可定義很多不同東西" name="cc" price={100} />
        <Children id="3" text="用同一個子元件" name="cc" price={100} />
        <Children />
        以下兩者同義
        <Children text="今天開始學react" name="Eddy" price={100} />
        <Children {...oa} />
        以下兩者同義
        <Children abc total /> {/* abc={true} total={true} */}
        <Children abc={true} total={true} />
        {/* 以下才是真的要傳10和11行的常數值進子女元件的語法 */}
        <Children abc={abc} total={total} />
        {/* 以下示範不好的作法，直接傳物件值到props */}
        {/* 因為react的元件的重新渲染，是會淺比較props的改變，如果傳遞物件會造成不論如何，子女元件必定會重新渲染，有可能會造成效能問題 */}
        {/* 可行但是不好  且子元件需要多拆一層  使用麻煩 */}
        <Children product={product} />
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
