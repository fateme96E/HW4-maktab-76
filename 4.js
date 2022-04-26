// function removeItems(arr){
    //     let itemInd;
    //     for (let item of arr){
    //         if (!item){
    //             itemInd = arr.indexOf(item);
    //             console.log(`${item} in index: ${itemInd}`);
    //             arr.splice(itemInd, 1);
    //         }
    //     }
    
    //     console.log(arr);
    // }
//}


function removeItems(arr){
    let res = arr.filter(item => {return item});
    console.log(res);
}
removeItems(["","purple",NaN,"yellow",0,"blue",false,"black","pink",null, "white", undefined,false, "false"]);
