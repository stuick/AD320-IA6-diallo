

var input=process.argv;
var sum=0;


for(i=2;i<input.length;i++){
  sum+=Number(input[i]);
}

console.log(sum);
