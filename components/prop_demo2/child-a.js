export default function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      <p>來自Parent(父元件)的資料: {props.pData}</p>
      <p>來自ChildB的內部資料:{props.dataFromChildB}</p>
    </>
  )
}
