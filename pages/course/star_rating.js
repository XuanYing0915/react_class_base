import React, { useState } from 'react'

export default function StarRating() {
  // 點擊星星確定評分
  const [rating, setRating] = useState(0)
  // 滑鼠滑過紀錄的星星狀態
  const [hover, setHover] = useState(0)

  return (
    <>
      <h1>星星評分</h1>
      <div>
        {/* 簡單的迴圈陣列 */}
        {/* Array(要迴圈的次數).fill(要迴圈的東西) */}
        {/* 可加入map的運用  方便賦予狀態 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            //* 記得+key
            const score = i + 1
            return (
              <button
                key={i}
                // 分數小於等於目前的評分狀態的星星圖  設定為點亮狀態
                className={score <= rating || score <= hover ? 'on' : 'off'}
                onClick={() => {
                  setRating(score)
                }}
                // 滑動時暫時設定為點亮
                onMouseEnter={() => {
                  setHover(score)
                }}
                // 離開時恢復為原本狀態
                onMouseLeave={() => {
                  setHover(0)
                }}
              >
                &#9733;
              </button>
            )
          })}
        <div>感謝您的 {rating} 星 評分</div>
      </div>
      <style jsx>
        {`
          button {
            background-color: transparent;
            border: 0 solid transparent;
            padding: 5px;
          }
          .on {
            color: gold;
            font-size: 50px;
          }
          .off {
            font-size: 30px;
            color: gray;
          }
        `}
      </style>
    </>
  )
}
