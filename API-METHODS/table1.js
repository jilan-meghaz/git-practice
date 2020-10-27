const searchid = document.getElementById('searchid');
// eventlistener
searchid.addEventListener('keyup',(e)=>{
    //get input text
    const userText = e.target.value;
    
    console.log(`userid:${userText}`);
    if(userText!=='')
    {
        console.log(`userid:${userText}`);
    }    
    fetch(`https://jsonplaceholder.typicode.com/todos/${userText}`)
    .then(response =>response.json())
    
    //.then(data=>console.log(data))

    .then(function(data){
        console.log(data);
        let output='';
        output=console.log(`${data.id}`);

        var maincontainer = document.getElementById("profile");
        
      maincontainer.innerHTML = `
      <div class="container1">
             <h2> User Table</h2>
             <table class="table table-striped">
                    <thead>
                          <tr>
                              <th>UserID</th>
                              <th>ID</th>
                              <th>Title</th>
                              <th>Completed</th>
                            </tr>
                    </thead>
                    <tbody>
                           <tr>
                           <th>${data.userId}</th>
                           <th>${data.id}</th>
                           <th>${data.title}</th>
                           <th>${data.completed}</th>
                           </tr>                 
                    </tbody>
             </table>
        </div> `
     
    })


 });
    