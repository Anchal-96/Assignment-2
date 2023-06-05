const a = [1, 3, 5, 2, 4]
const result1= a.filter((data, index)=>{
    if (index % 2 == 0) {
        return data;
    }
})
console.log(result1);