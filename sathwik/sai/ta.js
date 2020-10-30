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
    fetch(`https://jsonplaceholder.typicode.com/users/${userText}`)
    .then(response =>response.json())

    .then(function(data){
       
        var container = document.getElementById("tab");
        
      container.innerHTML = `
      <div class="container1">
             <h2> User Table</h2>
             <table class="table table-striped">
                    <thead>
                          <tr>
                              <th>ID</th>
                              <th>name</th>
                              <th>username</th>
                              <th>email</th>
                            </tr>
                    </thead>
                    <tbody>
                           <tr>
                           <th>${data.id}</th>
                           <th>${data.name}</th>
                           <th>${data.username}</th>
                           <th>${data.email}</th>
                           </tr>                 
                    </tbody>
             </table>
        </div> `
     
    })


 });