//search for the User

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
            <div class="card card-body mb-3">
                 <div class="row">
                      <div class="col-md-9">
                         <div>                           
                           <span class="bg-primary">ID:${data.id}</span>
                         </div>  
                         <div >   
                           <span class="bg-success">userId:${data.userId}</span>
                           </div> 
                           <div>     
                           <span class="bg-info">title:${data.title}</span>
                           </div>
                           <div>   
                           <span class="bg-info">completed:${data.completed}</span>
                           </div>
                       </div>
                  </div>
            </div>`
    })

 });
    


    






    