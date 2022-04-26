function remove_first_occurrence(str, searchStr){
    let serachStrIndex = str.indexOf(searchStr);
    if (serachStrIndex === -1){
        console.log(str);
    }else{
        let firstPart = str.slice(0,serachStrIndex-1);
        let secondPart = str.slice(serachStrIndex + searchStr.length);
        console.log(firstPart +secondPart);
    }
}
remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the');