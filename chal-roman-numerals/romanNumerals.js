const changeRoman = num => {
    if(num >= 4000){
        return 'This number is too big for our primitive number system'
    }
    
    let romanNums = {
        1 : ['I','V'],
        2 : ['X','L'],
        3 : ['C','D'],
        4 : ['M',''] 
    }

    let numeralStr = ''
    let numArr = String(num).split('')
    
    while(numArr.length > 0){
        let currentPlace = numArr.length
        let currentNum = parseInt(numArr[0])

        if(currentNum === 9){
            numeralStr += romanNums[currentPlace][0]
            numeralStr += romanNums[currentPlace + 1][0]
        }else if (currentNum >= 5){
            numeralStr += romanNums[currentPlace][1]
            currentNum -= 5
            numeralStr += romanNums[currentPlace][0].repeat(currentNum)
        }else if (currentNum === 4){
            numeralStr += romanNums[currentPlace][0]
            numeralStr += romanNums[currentPlace][1]
        }else {
            numeralStr += romanNums[currentPlace][0].repeat(currentNum)
        }
        numArr.shift()
    }
}

console.log(changeRoman(4004))
console.log(changeRoman(3754))
console.log(changeRoman(999))
console.log(changeRoman(44))