const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]




function superbowlWin(Array){
    const found = Array.find(({result}) => result  === "W");
    
    if (typeof(found) === 'object'){
        console.log(found);
    }

    // return result;
}

superbowlWin(record)


// function logSuperBowlWin(Array, search){
//     let result 
//     let found = Array.find(element => element(''))

//     result.push(found)
// }

// function search(record){
//     return  record.result === 'W';
// }


// function superbowlWin(Array){
//     return record.result = 'W';
// }

// console.log(record.find(superbowlWin))