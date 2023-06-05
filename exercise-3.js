const a = [1, 3, 5, 2, 4]
const result = a.filter((data, index)=>{
    if (index % 2==0) {
        return data;
    }
})
const result3 = result.map(num => num*num)
console.log(result3);

