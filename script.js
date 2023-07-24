function loaddata(){
    const xhr=new XMLHttpRequest();//create a new request

    xhr.onload=function(){
        const container=document.getElementById("demo");
        demo.innerHTML=xhr.responseText;

    };

    xhr.open("GET","/data.txt");
    xhr.send();
    
    setInterval(print,250);
    
}
let i=1;
function print(){
    let div=document.getElementById('me');
    
        let a=document.createElement("p");
        a.innerHTML=`<p style="color:gray;">${i} sending data to server...</p>`;
        div.appendChild(a);
        i++;
        window.scrollBy(1,50);
        
}

loaddata();