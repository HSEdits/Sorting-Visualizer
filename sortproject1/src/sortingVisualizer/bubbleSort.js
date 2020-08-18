
export function swap(List, a,b){
    let temp = List[a];
    List[a] = List[b];
    List[b] = temp;
    return List;

}

export function bubbleSort(List){
    let Length = List.length;
    let limit = Length - 1;
    let animations = [];
    for(let i = 1; i < Length; i++){
        let swapped = false;
        for (let j= 0; j < limit; j++){
            if (List[j] > List[j+1]){
                animations.push([j,j+1]);
                List = swap(List,j,j+1);
                swapped = true;
            }
        }
        if (swapped === false){
            break;
        }
    }
    return [List,animations];
}










//----------------------------------------------
