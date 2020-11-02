const searchid = document.getElementById('searchid');
// eventlistener
searchid.addEventListener('keyup',(e)=>{
    //get input text
    const id = e.target.value;
    
    //console.log(`userid:${id}`);
    // if(id!=='')
    // {
    //     console.log(`userid:${id}`);
    // }    
    // fetch('http://example.com/movies.json')
    // .then((response) => {
    //     return response.json();
    // })
    // .then((myJson) => {
    //     console.log(myJson);
    // });
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
       console.log(data)
        var container = document.getElementById("tab");
        // for (const key in data) {
        //     if (object.hasOwnProperty(key)) {
        //         const element = object[key];
        //         console.log(data[key]);
        //     }
        // }
      container.innerHTML = `
      <div class="container1">
             <h2> User Table</h2>
             <table class="table table-striped">
                    <thead>
                          <tr>
                              <th>ID</th>
                              <th>name</th>
                              <th>body</th>
                              <th>email</th>
                            </tr>
                    </thead>
                    <tbody>
                           <tr>
                           <th>${data.id}</th>
                           <th>${data.name}</th>
                           <th>${data.body}</th>
                           <th>${data.email}</th>
                           </tr>                 
                    </tbody>
             </table>
        </div> `
     
    });


 });