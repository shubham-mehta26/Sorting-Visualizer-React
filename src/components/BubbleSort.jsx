import React from 'react'
import './SortInfo.css'

export default function BubbleSort() {
  return (
    <div className='sort-info'>
      <div className="sort-name">
          Name : Bubble Sort
        </div>
        <div className="sort-time">
          Time Complexity : O(n<sup>2</sup>)
        </div>
    </div>
  )
}
