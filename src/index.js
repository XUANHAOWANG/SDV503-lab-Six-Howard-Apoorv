//Odds and even

function addOddNumbers(n){
    var result=0;
    for(var i=1;i<=n;i=i+2)//conditions chose all odds numbers(less than n)
    {
        result=result+i;//calculate the result that plus all adds number
    }
    console.log(result);
}
addOddNumbers(5);
addOddNumbers(13);



//filterArr
function filterArr(str){
    var sum='';//variable a empty value
      var newArr=[];//creat a empty arr
    for (var i = 0; i<str.length; i++) {//only chose numbers in a arr
         
         if(str[i]>='0'&&str[i]<='9'){
               sum+=str[i]//store numbers in  sum
         }else{
             if(sum!=''){
                newArr.push(sum);//store numbers in arr
             }
             sum='';//clear string 
         }
 }
 //push numbers in array
 if(sum!=''){
    newArr.push(sum);
}
 console.log(newArr)
}
 var str='af22jas485igjs123sgdhhe456osdofd789';
 filterArr(str);


 //getCount


 const counts={    
    like:a,
    dislike:b,
feedBack:total=a-b
}
console.log(counts)
 


