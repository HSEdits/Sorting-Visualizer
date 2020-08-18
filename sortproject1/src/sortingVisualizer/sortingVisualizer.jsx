import React from 'react';
import "./sortingVisualizer.css";
import "./sortingAlgorithms.js"
import {bubbleSort} from "./bubbleSort.js"
import {selectionSort} from "./selectionSort.js"
import {insertionSort} from "./insertionSort.js"

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
      }

    resetArray(){
       let array = [];
        for(let i = 0; i < 100; i++){
            let randomNum = this.randomIntFromInterval(100, 300);
            array.push(randomNum);
          
        }
        
        this.setState({array});
    }

    randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    animateBubbleSort(){
      let Array = this.state.array;
      let sorted = bubbleSort(Array);
      let animationList = sorted[1];
      let allBars = document.getElementsByClassName("bar")
      console.log("all the bars before being sorted",allBars)
      let unSortedList = [];
      for (let i = 0; i < allBars.length; i++){
        unSortedList.push(parseInt(allBars[i].style.height));
      }
      console.log("before beggining sort",unSortedList)
      for (let i = 0; i < animationList.length; i ++){
        let index1 = animationList[i][0];
        let index2 = animationList[i][1];
        setTimeout( () => {
          let barOneStyle =  allBars[index1].style;
          let barTwoStyle =  allBars[index2].style;
          let temp = barOneStyle.height;
          barOneStyle.height = `${barTwoStyle.height}`;
          barTwoStyle.height = `${temp}`;

          let temp1 = unSortedList[index1];
          unSortedList[index1] = unSortedList[index2];
          unSortedList[index2] = temp1;
          
          console.log(unSortedList);
          console.log("sorted list from function",sorted[0]);


        }, i * 2)
        

  }

    

    }

      testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = this.randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(this.randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const bubbleSortArray = bubbleSort(array.slice())[0];
          console.log(arraysAreEqual(javaScriptSortedArray, bubbleSortArray));
        }
      }
 



    
    animateSelectionSort(){
      let Array = this.state.array;
      let animationList = selectionSort(Array);
      let allBars = document.getElementsByClassName("bar");
      for (let i = 0; i < animationList.length; i ++){
        let index1 = animationList[i][0];
        let index2 = animationList[i][1];
        setTimeout( () => {
          let temp = allBars[index1].style.height;
          allBars[index1].style.height = `${allBars[index2].style.height}`;
          allBars[index2].style.height = `${temp}`;

        }, i * 30 )
    }
  }

  animateInsertionSort(){
    let Array = this.state.array;
    let sorted = insertionSort(Array);
    let animationList = sorted[1];
    console.log(sorted[0]);
    let allBars = document.getElementsByClassName("bar");
    for (let i = 0; i < animationList.length; i ++){
      let index1 = animationList[i][0];
      let index2 = animationList[i][1];
      setTimeout( () => {
        let temp = allBars[index1].style.height;
        allBars[index1].style.height = `${allBars[index2].style.height}`;
        allBars[index2].style.height = `${temp}`;

      }, i * 3 )
  }



  }






    render(){
        const {array} = this.state;
        console.log("array",array);
        return (
            <div className="container">
              {array.map((value, idx) => (
                <div
                  className="bar"
                  key={idx}
                  style={{
                    height: `${value}px`,
                    backgroundColor: "red"
                }}></div>
              ))}
               <button className = "button" onClick = {() => this.resetArray()}>Reset Array</button>
               <button className = "button" onClick = {() => this.animateBubbleSort()}>Bubble Sort</button>
               <button className = "button" onClick = {() => this.animateSelectionSort()}>Selection Sort</button>
               <button className = "button" onClick = {() => this.animateInsertionSort()}>Insertion Sort</button>
               <button className = "button" onClick = {() => this.resetArray()}>Merge Sort</button>
               <button className = "button" onClick = {() => this.animateBubbleSort()}>Quick Sort</button>
               <button className = "button" onClick = {() => this.testSortingAlgorithms()}>Test</button>
              </div>
            );
    }
    
}
function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}