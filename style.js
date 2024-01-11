  console.log('This is the page');
     function num(){
        nie.style.display='none'
        forget.style.display='none'
        if(btn.style.display!='none'){
            btn.style.display='none'
        }
        else{
            btn.style.display='block'
        }
     }
     function timeout(){
        time=new Date;
        console.log(time);
        document.getElementById('time').innerHTML=time;
     }
     setInterval(timeout,1000)
