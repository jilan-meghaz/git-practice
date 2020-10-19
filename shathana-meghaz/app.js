
console.log(document.getElementById("button"));

document.getElementById("button").addEventListener('click',loadData);


//create function

function loadData(){

    console.log('loaddata');
    //create xml object
    const xhr =new XMLHttpRequest();

    //xhr.open it and get will read the txt file and synchronous is set true

    xhr.open('GET', 'data.txt',true);

    //load the page if the status of the http browser is 200---ok,400--bad

    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
        }
    }
    xhr.send();
}