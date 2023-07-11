import { useState } from 'react'
import login from '../user/login'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        1.列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        2.列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      {/* ----------------------------------------- */}

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          // 1.設定uuid/nanoid產生隨機數來代表id
          const newId = self.crypto.randomUUID()
          // 2.利用時間日期物件轉毫秒整數
          const newIdTime = +new Date()
          //或寫成 Number(new Date())
          const newIdDate = Number(new Date())

          // 3.一般的隨機數

          // 4.模仿資料庫產生遞增   只能用於數字且規律的Id

          // 先定義一個id陣列
          const id = data.map((v, i) => v.id)
          // 抓取id中的最大值  來+1  生成新的id
          const newIdDatabase = Math.max(...id) + 1
          console.log(newIdDatabase)

          const newObj = { id: newIdDatabase, text: 'xxx' }
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        3.列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      {/* ----------------------------------------- */}

      <button
        onClick={() => {
          const id = data.map((v, i) => v.id)
          const newIdDatabase = Math.max(...id) + 1
          console.log(newIdDatabase)

          const newObj = { id: newIdDatabase, text: 'yyy' }
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [...data, newObj]
          setData(newData)
        }}
      >
        4.列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      {/* ----------------------------------------- */}
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          // filter 過濾
          // 將包含的函示過濾
          const newData = data.filter((v) => {
            // includes 包含
            // 回傳text裡包含'a'2的
            return v.text.includes('a')
            // return會傳回true = 有包含的物件
          })

          // 3
          // 渲染回畫面  =只顯示包含物件
          setData(newData)
        }}
      >
        5.尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      {/* ----------------------------------------- */}

      <button
        onClick={() => {
          //1//2
          //在陣列中刪除某些指定物件 = 回傳一個裡面沒有這指定物件的陣列
          const newData = data.filter((v) => {
            return v.text !== 'b'
          })
          //3
          setData(newData)
        }}
      >
        刪除文字為b的物件資料
      </button>
      <br />
      {/* ----------------------------------------- */}

      <button
        onClick={() => {
          //1//2
          //在陣列中刪除某些指定物件 = 回傳一個裡面沒有這指定物件的陣列
          const newData = data.filter((v) => {
            return v.id !== 4
          })
          //3
          setData(newData)
        }}
      >
        刪除id為4的物件資料
      </button>
      <br />
      {/* ----------------------------------------- */}

      <button
        onClick={() => {
          // 1.尋找id=2的索引
          // findIndex 尋找索引值 (若沒有該所引  回傳-1)
          const foundIndex = data.findIndex((v) => v.id === 2)
          // 如果有找到  = 不等於-1  可以寫!== 比較清楚  或是偷懶寫法>
          //  if (foundInex !== -1
          if (foundIndex > -1) {
            // 建立要插入的新物件
            const newObj = { id: 5, text: 'bbb' }
            // 2.把陣列切開成兩個陣列
            // 分割陣列  array.slice(開始索引,結束索引)  注意!不包含結束索引的值
            const a = data.slice(0, foundIndex + 1)
            const b = data.slice(foundIndex + 1) //只給一個值=切到最後一個
            console.log(a, b)
            // 3.將想加入的資料放進陣列裡後合併陣列
            const newData = [...a, newObj, ...b]
            //4.渲染
            setData(newData)
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      {/* ----------------------------------------- */}
      <h3>取代id為3的文字為cccc</h3>
      <button
        onClick={() => {
          // 方式1  深拷貝
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 由於是修改物件(陣列裡包裹的資料)  2層
          // 必須執行深拷貝
          // 將資料轉為json字串  再轉回js語法
          const deepCloneData = JSON.parse(JSON.stringify(data))
          const foundIndex = deepCloneData.findIndex((v) => v.id === 3)
          if (foundIndex !== -1) {
            deepCloneData[foundIndex].text = 'cccc'
          }
          // 不需要擔心修改到資料
          // 缺點 會遺漏資料 因為是copy  並不會影響最初的資料

          setData(deepCloneData)
        }}
      >
        方式一 深拷貝
      </button>
      {/* ----------------------------------------- */}

      <button
        onClick={() => {
          const newData = data.map((v, i) => {
            if (v.id === 3) return { ...v, text: 'cccc' }
            else return { ...v }
          })

          setData(newData)
        }}
      >
        方式2 map
      </button>
    </>
  )
}
