let data1 = {
    name:'vijay',
    id:'234'
}

//get method in api
fetch('data.txt',{
    method:"GET"})
    //body:JSON.stringify(data1)})

.then(response => response.text())
.then(data=>console.log(data));
//.then(json =>console.log(json))
//.catch(err =>console.error(err));


//post method in api


fetch('https://jsonplaceholder.typicode.com/todos/5',{
method: 'PUT',
body: JSON.stringify({
userId: 1,
id: 5,
title: 'hello task',
completed: false
}),
headers: {
'Content-type': 'application/json; charset=UTF-8'
}
})
.then(response => response.json())
.then(json => console.log(json))


//put method in api

// PUT to the resource with id = 5 to change the name of task
fetch('https://jsonplaceholder.typicode.com/todos/5', {
method: 'PUT',
body: JSON.stringify({
userId: 1,
id: 5,
title: 'hello task changed',
completed: false
}),
headers: {
'Content-type': 'application/json; charset=UTF-8'
}
})
.then(response => response.json())
.then(json => console.log(json))

// delete
