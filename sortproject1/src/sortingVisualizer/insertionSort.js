export function insertionSort(List){
    let Length = List.length;
    let limit = Length-1;
    let animations = [];
    for (let i = 0; i < limit; i++){
        let lowest = i
        for(let j = i+1; j < Length; j++){
            if(List[lowest] >= List[j]){
                lowest = j;
            }
        }
        console.log(List[lowest]);
        List.splice(i,0, List[lowest]);
        List.splice(List.indexOf(List[lowest])+1,1);
        animations.push([i,lowest])
    }


    return [List, animations];
}