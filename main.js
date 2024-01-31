var n=parseInt(prompt("Enter the range of the fibonacci series"))
var n1=0
var n2=1
var temp
document.write("Fibonacci series :")
for(i=0;i<n;i++){
    document.write(n1)
    temp=n1+n2
    n1=n2
    n2=temp
   }