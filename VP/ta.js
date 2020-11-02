const searchid = document.getElementById('searchid');
// eventlistener
searchid.addEventListener('keyup',(e)=>{
    //get input text
    const id = e.target.value;
    console.log(`userid:${id}`);

    // if(userText!=='')
    // {
    //     console.log(`userid:${id}`);
    // }    
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    
    //.then(data=>console.log(data))

    .then(function(data){
           // data = JSON.parse(data);
            console.log("******************* ",data);
            let output = '';
            //json.forEach(function(obj) { console.log(obj.id); });
       //      data.forEach(function(obj) {
       //        output += `
       //        <div class="container1">
       //               <h2> User Table</h2>
       //               <table class="table table-striped">
       //                      <thead>
       //                            <tr>
       //                                <th>ID</th>
       //                                <th>name</th>
       //                                <th>body</th>
       //                                <th>email</th>
       //                              </tr>
       //                      </thead>
       //                      <tbody>
       //                             <tr>
       //                             <th>${obj.id}</th>
       //                             <th>${obj.name}</th>
       //                             <th>${obj.body}</th>
       //                             <th>${obj.email}</th>
       //                             </tr>                 
       //                      </tbody>
       //               </table>
       //          </div> `;
       //      });
        
       
         document.getElementById("tab").innerHTML =output;
        
      
     
    })


 });