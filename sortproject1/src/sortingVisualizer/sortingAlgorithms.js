function swap(List, a,b){
    var temp = List[a];
    List[a] = List[b];
    List[b] = temp;
    return List;
    
}

function insertionSort(List){
    let Length = List.length;
    let limit = Length-1;
    for (let i = 0; i < limit; i++){
        let lowest = i
        for(let j = i+1; j < Length; j++){
            if(List[lowest] >= List[j]){
                lowest = j;
            }
        }
        List.splice(i,0, List[lowest]);
        List.splice(List.indexOf(List[lowest])+1,1);
    }


    return List;
}


//---------------------------------------------


function mergeSort(List){
    if (List.length <= 1){
        return List;
    }else{
        let mid = Math.floor(List.length/2);
        let leftSide = mergeSort(List.slice(0,mid));
        let rightSide = mergeSort(List.slice(mid));
        
        return merge(leftSide, rightSide);
    }
}

function merge(list1,list2){
    let orderedList = [];
    let i = 0;
    let j = 0;
    while(i < list1.length && j < list2.length){
        if (list1[i] <= list2[j]){
            orderedList.push(list1[i]);
            i++;
        }else{
            orderedList.push(list2[j]);
            j++;
        }
    }
    while (i < list1.length){
        orderedList.push(list1[i]);
        i++;
    }
    while (j < list2.length){
        orderedList.push(list2[j]);
        j++;
    }
    return orderedList;
}


//---------------------------------------------
function quickSort(List){
    if (List.length <= 1){
        return List;
    }else{
        let pivotPoint = partition(List);
        return quickSort(pivotPoint[0]).concat(pivotPoint[1], pivotPoint[2]);

    }
}
function partition(List){
    let startingPoint = Math.floor((List.length+1)/2);
    let pivot = List[startingPoint];
    List.splice(startingPoint,1)
    let lessThan = [];
    let moreThan =[];
    for (let i = 0; i < List.length; i++){
        if (List[i] < pivot){
            lessThan.push(List[i]);
        }
        if (List[i] >= pivot){
            moreThan.push(List[i]);
        }
    }
    return [lessThan, [pivot], moreThan];

}
//---------------------------------------------
