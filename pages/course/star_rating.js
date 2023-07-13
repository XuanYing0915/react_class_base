import React, { useState } from 'react'

export default function StarRating() {
  const [rating, setRating] = useState(0)

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
                // 如果評分小於等於i  上金色的class
                className={score <= rating ? 'on' : 'off'}
                onClick={() => {
                  setRating(score)
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
          }
          .off {
            color: gray;
          }
        `}
      </style>
    </>
  )
}
