import { useEffect } from 'react'

export default function Child2(props) {
  // didMount+pros改變(didUpdate)
  useEffect(() => {
    console.log('didMount+pros改變(didUpdate)')
  }, [props])

  return (
    <>
      <h1>子元件(Child)</h1>
      <p>姓名: {props.name.myname}</p>
      <div>didMount+pros改變(didUpdate)</div>
      <div>物件不管按鈕屬性有無變化 都會重新渲染</div>

      <div>因為對物件來說 是不同的屬性更改</div>
    </>
  )
}
