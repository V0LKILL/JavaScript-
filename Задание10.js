let nums = {
    num: 7,
    res: 1,
    factorial: function(num) {
        for (let i = 2; i<this.num; i++)
        this.res=this.res*i;
      console.log(this.res)
      }
}
 nums.factorial()

//  --------------------------

function twiceAsOld (a,b) {
    return a>2*b ? a-2*b : 2*b-a + ' лет назад' 
}
console.log(twiceAsOld (61, 31))

