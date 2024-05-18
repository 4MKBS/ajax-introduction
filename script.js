let i = 1;
let don;
function loaddata() {
    const xhr = new XMLHttpRequest(); // Create a new request

    xhr.onload = function() {
        const container = document.getElementById("demo");
        container.innerHTML = xhr.responseText;
    };

    xhr.open("GET", "/data.txt");
    xhr.send();

    don = setInterval(print, 50);
    
}

function print() {
    let div = document.getElementById('me');
    let a = document.createElement("h3");
    a.innerHTML = `sending data to server.....${i/10}%`;
    a.style.height = '20px';
    a.style.width = '300px';
    a.style.border = '1px solid green';
    a.style.padding = '10px';
    a.style.margin = '10px';
    a.style.textAlign = 'center';
    a.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate a valid hex color
    div.appendChild(a);
    i++;
    window.scrollBy(0, 50); // Scroll vertically
    if(i == 1002){
        clearInterval(don);
        a.innerHTML = 'Data sent Complete....100%';

        document.getElementById('done').innerHTML='Data sent Complete....100%';
    }
}
