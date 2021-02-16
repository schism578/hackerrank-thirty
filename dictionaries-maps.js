function processData(input) {
    let phoneBook = new Map();
    let arr = input.split('\n');
    let stringValue = '';
    for(var i=1; i<arr.length; i++){
        let valueSplit = arr[i].split(' ');
        if(valueSplit.length>1){
            phoneBook.set(valueSplit[0], valueSplit[1])
        } else {
            if(phoneBook.has(valueSplit[0])){ 
                stringValue += valueSplit[0]+'='+phoneBook.get(valueSplit[0])+'\n';
        } else { 
            stringValue += 'Not found'+'\n';
        }
        }
    }
        console.log(stringValue);
} 

console.log(processData())