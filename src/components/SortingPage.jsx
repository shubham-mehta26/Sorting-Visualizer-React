import React, { useState, useEffect, useRef, useCallback } from "react";
import "./SortingPage.css";
export default function SortingPage() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);
  const maxHeight = useRef(0);
  const sortingPageMainHeight = useRef(0);
  const arrayContainerWidth = useRef(0);
  const inputMaxvalue = useRef(0);

  const handleSliderChange = (event) => {
    setArraySize(Number(event.target.value));
  };

  // Generate a new random array
  const resetArray = useCallback(() => {
    const newArray = [];
    maxHeight.current = 0;
    for (let i = 0; i < arraySize; i++) {
      let num = randomIntFromInterval(1, arraySize);
      if (num > maxHeight.current) maxHeight.current = num;
      newArray.push(num);
    }
    setArray(newArray);
  }, [arraySize]);

  //reset Array after changing the arraySize
  useEffect(() => {
    sortingPageMainHeight.current =
      document.querySelector(".sortingPage-main").clientHeight * 0.7;
    arrayContainerWidth.current =
      document.querySelector(".array-container").clientWidth;
    resetArray();
    inputMaxvalue.current = arrayContainerWidth.current / 3;
  }, [arraySize, resetArray]);

  // heightMulFactor is used to scale the height of the bars
  // maxHeight * heightMulFactor = sortingPageMainHeight
  // heightMulFactor = sortingPageMainHeight / maxHeight
  const heightMulFactor = sortingPageMainHeight.current / maxHeight.current;

  //Width of array bar
  const arrayBarWidth = arrayContainerWidth.current / arraySize;

  // Generate a random integer within a range
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Bubble Sort algorithm
  const bubbleSort = async () => {
    
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight the two compared bars in red
        highlightBars(j, j + 1, "red");

        // Introduce a delay to slow down the sorting process
        await new Promise((resolve) => setTimeout(resolve, 2));

        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          // Swap the heights of the compared bars
          swapHeights(j, j + 1);
        }

        // Reset the color of the compared bars to turquoise
        highlightBars(j, j + 1, "turquoise");
      }

      // Highlight the sorted portion as green
      highlightSorted(n - i - 1);
    }
    setArray(arr);
  };
  

  const highlightBars = (barOneIdx, barTwoIdx, color) => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    barOneStyle.backgroundColor = color;
    barTwoStyle.backgroundColor = color;
  };

  const swapHeights = (barOneIdx, barTwoIdx) => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;

    const tempHeight = barOneStyle.height;
    barOneStyle.height = barTwoStyle.height;
    barTwoStyle.height = tempHeight;
  };

  const highlightSorted = (sortedIndex) => {
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = sortedIndex; i < array.length; i++) {
      const barStyle = arrayBars[i].style;
      barStyle.backgroundColor = "green";
    }
  };

  return (
    <div className="sortingPage-main">
      <div className="sort-settings">
        <div className="array-size">
          <label htmlFor="arraySize">Array Size</label>
          <input
            id="arraySize"
            type="range"
            min="5"
            max={`${inputMaxvalue.current}`}
            value={arraySize}
            onChange={handleSliderChange}
          />
          <span>{arraySize}</span>
        </div>
      </div>
      <div className="array-container">
        <div className="array-bar-container">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{
                height: `${value * heightMulFactor}px`,
                width: `${arrayBarWidth}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={resetArray} >Generate New Array</button>
        <button onClick={bubbleSort} >Bubble Sort</button>
      </div>
    </div>
  );
}
