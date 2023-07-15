import React, { useState, useEffect, useRef, useCallback } from "react";
import "./SortingPage.css";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort"; 
import MergeSort from "./MergeSort";

export default function SortingPage(props) {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);
  const [speed, setSpeed] = useState("300");
  const sorting = useRef(false);
  const sortingSpeed = useRef("300");
  const maxHeight = useRef(0);
  const sortingPageMainHeight = useRef(0);
  const arrayContainerWidth = useRef(0);
  const inputMaxvalue = useRef(0);

  const handleArraySizeSliderChange = (event) => {
    setArraySize(Number(event.target.value));
  };
  const handleSortingSpeedSliderChange = (event) => {
    sortingSpeed.current = event.target.value;
    setSpeed(sortingSpeed.current);
  };
  const resetBarColors = useCallback(() => {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      const barStyle = arrayBars[i].style;
      barStyle.backgroundColor = props.barkMode ? "turquoise" : "#695cfe";
    }
  }, []);

  useEffect(() => {
    //bug
    if (sorting.current) sorting.current = false;
    let buttonELe = document.querySelector("button:nth-child(2)");
    if (props.page === "bubble-sort") {
      buttonELe.innerHTML = "Bubble Sort";
    } else if (props.page === "insertion-sort") {
      buttonELe.innerHTML = "Insertion Sort";
    } else if (props.page === "selection-sort") {
      buttonELe.innerHTML = "Selection Sort";
    } else if(props.page === "merge-sort"){
      buttonELe.innerHTML = "Merge Sort";
    }
    handlestopSorting();
    resetArray();
    resetBarColors();
  }, [props.page]);

  const highlightSortedBubble = useCallback(
    (sortedIndex) => {
      const arrayBars = document.getElementsByClassName("array-bar");

      for (let i = sortedIndex; i < array.length; i++) {
        const barStyle = arrayBars[i].style;
        barStyle.backgroundColor = "green";
      }
    },
    [array.length]
  );
  const highlightSortedInsertion = useCallback(
    (sortedIndex) => {
      const arrayBars = document.getElementsByClassName("array-bar");

      for (let i = 0; i < sortedIndex; i++) {
        const barStyle = arrayBars[i].style;
        barStyle.backgroundColor = "green";
      }
    },
    [array.length]
  );

  // Generate a new random array
  const resetArray = useCallback(() => {
    sorting.current = false;
    const newArray = [];
    maxHeight.current = 0;
    for (let i = 0; i < arraySize; i++) {
      let num = randomIntFromInterval(1, arraySize);
      if (num > maxHeight.current) maxHeight.current = num;
      newArray.push(num);
    }
    setArray(newArray);
    resetBarColors();
  }, [arraySize, resetBarColors]);

  //reset Array after changing the arraySize
  useEffect(() => {
    sortingPageMainHeight.current =
      document.querySelector(".sortingPage-main").clientHeight * 0.7;
    arrayContainerWidth.current = document.querySelector(
      ".array-container"
    ).clientWidth;
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
  const bubbleSort = useCallback(async () => {
    sorting.current = true;
    const arr = [...array];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (sorting.current === false) {
          // Stop the sorting process permanently
          return;
        }
        // Highlight the two compared bars in red
        highlightBars(j, j + 1, "red");
        // Introduce a delay to slow down the sorting process
        await new Promise((resolve) =>
          setTimeout(resolve, 2000 - sortingSpeed.current)
        );
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          // Swap the heights of the compared bars
          swapHeights(j, j + 1);
        }
        // Reset the color of the compared bars to turquoise
        highlightBars(j, j + 1, props.barkMode ? "turquoise" : "#695cfe");
      }
      // Highlight the sorted portion as green
      highlightSortedBubble(n - i - 1);
    }
    setArray(arr);
    sorting.current = false;
  }, [array]);

  //Insertion Sort algorithm
  const insertionSort = useCallback(async () => {
    if (sorting.current) return;
    sorting.current = true;
    const arr = [...array];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      if (sorting.current === false) {
        // Stop the sorting process permanently
        return;
      }

      let key = arr[i];
      let j = i - 1;
      highlightBars(i, i, "green");
      // Move elements of arr[0..i-1], that are greater than key,
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        // Highlight the compared element in red
        highlightBars(j, j + 1, "red");
        highlightBars(i, i, "green");

        await new Promise((resolve) =>
          setTimeout(resolve, 2000 - sortingSpeed.current)
        );
        // Move the element to the right
        arr[j + 1] = arr[j];
        // Move the bar visually to the right
        moveBar(j, j + 1);
        highlightBars(j, j + 1, "green");
        j--;
      }
      arr[j + 1] = key;
    }
    if (sorting.current) {
      setArray(arr);
    }
    sorting.current = false;
    return () => {
      // Cleanup function
      sorting.current = false;
      // Cancel any ongoing processes or timers
      // ...
    };
  }, [array]);

  const moveBar = (barOneIdx, barTwoIdx) => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;

    const tempHeight = barOneStyle.height;
    barOneStyle.height = barTwoStyle.height;
    barTwoStyle.height = tempHeight;
  };

  // Selection Sort algorithm
  const selectionSort = useCallback(async () => {
    sorting.current = true;
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      if (sorting.current === false) {
        return;
      }
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        highlightBars(j, j, "red");
        await new Promise((resolve) =>setTimeout(resolve, 2000 - sortingSpeed.current));
        highlightBars(j, j, "#695cfe");
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      highlightBars(minIndex, minIndex, "red");
      await swap(i, minIndex, arr);
      highlightBars(minIndex, minIndex, "#695cfe");
      highlightSortedInsertion(i);
    }
    highlightBars(n - 2, n - 1, "green");
    setArray(arr);
    sorting.current = false;
  }, [array]);

  const swap = (i, j, arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        setArray([...arr]);
        resolve();
      }, 2000 - sortingSpeed.current);
    });
  };

  //Merge Sort algorithm
  const mergeSort = useCallback(async (arr) => {
    sorting.current = true;
  
    const merge = async (arr, start, mid, end) => {
      const leftArr = arr.slice(start, mid + 1);
      const rightArr = arr.slice(mid + 1, end + 1);
  
      let i = 0;
      let j = 0;
      let k = start;
  
      while (i < leftArr.length && j < rightArr.length) {
        if (sorting.current === false) {
          // Stop the sorting process permanently
          return;
        }
  
        // Highlight the two compared bars in red
        highlightBars(start + i, mid + 1 + j, "red");
  
        // Introduce a delay to slow down the sorting process
        await new Promise((resolve) =>
          setTimeout(resolve, 2000 - sortingSpeed.current)
        );

        highlightBars(start + i, mid + 1 + j, "#695cfe");

        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          setArray([...arr]);
          highlightBars(i,k, "green");
          i++;
        } else {
          arr[k] = rightArr[j];
          setArray([...arr]);
          highlightBars(j,k, "green");
          j++;
        }
        k++;
        
      }
  
      while (i < leftArr.length) {
        if (sorting.current === false) {
          return;
        }
        
        arr[k] = leftArr[i];
        setArray([...arr]);
        highlightBars(k,i, "green");
        i++;
        k++;
        await new Promise((resolve) =>
          setTimeout(resolve, 2000 - sortingSpeed.current)
        );
      }
  
      while (j < rightArr.length) {
        if (sorting.current === false) {
          return;
        }
  
        arr[k] = rightArr[j];
        setArray([...arr]);
        highlightBars(k,j, "green");
        j++;
        k++;
  
        await new Promise((resolve) =>
          setTimeout(resolve, 2000 - sortingSpeed.current)
        );
      }
    };
  
    const mergeSortRec = async (arr, start, end) => {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSortRec(arr, start, mid);
        await mergeSortRec(arr, mid + 1, end);
        await merge(arr, start, mid, end);
      }
    };
  
    const arrCopy = [...array]; // Copy the array using the spread operator
  
    await mergeSortRec(arrCopy, 0, arrCopy.length - 1);
  
    setArray(arrCopy);
    sorting.current = false;
  }, [array]);
  
  

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
  const handleGenerateNewArray = () => {
    if (sorting.current) return; // Don't generate a new array while sorting
    sorting.current = false;
    resetArray();
  };

  const handlestopSorting = () => {
    if (sorting.current) {
      sorting.current = false;
    }
  };

  const handleSortClick = () => {
    if (sorting.current) return;
    if (props.page === "bubble-sort") {
      bubbleSort();
    } else if (props.page === "insertion-sort") {
      insertionSort();
    } else if (props.page === "selection-sort") {
      selectionSort();
    } else if(props.page === "merge-sort") {
      mergeSort();
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
            onChange={handleArraySizeSliderChange}
          />
          <span>{arraySize}</span>
        </div>
        <div className="sorting-speed">
          <label htmlFor="sortingSpeed">Sorting Speed</label>
          <input
            id="sortingSpeed"
            type="range"
            min="0"
            max="2000"
            value={speed}
            onChange={handleSortingSpeedSliderChange}
          />
          <span>{speed}</span>
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
        <button onClick={handleGenerateNewArray}>Generate New Array</button>
        <button onClick={handleSortClick}>Bubble Sort</button>
        <button onClick={handlestopSorting}>Stop</button>
      </div>
      <div className="sort-info">
        {props.page === "bubble-sort" ? <BubbleSort /> : null}
        {props.page === "selection-sort" ? <SelectionSort /> : null}
        {props.page === "insertion-sort" ? <InsertionSort /> : null}
        {props.page === "merge-sort" ? <MergeSort /> : null}
      </div>
    </div>
  );
}
