import {swap} from "./bubbleSort.js"

export function selectionSort(List){
    let lenList = List.length - 1;
    let limit = List.length;
    let animations = [];
    for (let i = 0; i < limit; i++){
        let highest = i;
        for(let j = lenList; j > i; j-- ){
            if (List[i] >= List[j]){
                highest = j;
                List = swap(List,i,highest);
                animations.push([i, highest]);
            }

        }

    }

    return animations;
}