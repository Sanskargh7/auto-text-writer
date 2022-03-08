

const text='hii sir chhotu ram institute of engineering and technology';
let index=0;
function demofunction(){
    document.body.innerText=text.slice(0,index);
    index++;
    if(index>text.length-1)
   {
       index=0;
   }
}
setInterval(demofunction,100);