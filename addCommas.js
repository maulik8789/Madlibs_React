function addCommas(num) {
    let strNum = "";
    if(num > 0){
     strNum += `${num}`; 
    }
    if(num < 0){
     strNum += `${-num}`;
    }
    
    let commaPlacer = 1;
    for(let j = strNum.length - 1; j >= 0; j--){
        String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        if(commaPlacer % 3 == 0){
            strNum = strNum.splice(j, 0, ",");
        }
     commaPlacer++;
    }
 if(num > 0 || num == 0){
     return strNum; 
    }
    if(num < 0){
     strNum = "-" + strNum;
     return strNum;
    }
    
}
module.exports = addCommas;