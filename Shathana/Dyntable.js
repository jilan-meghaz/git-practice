import React,{Component} from 'react';
import './Mystyle.css';


class Dyntable extends Component{
   
    constructor(props)
    {
        super(props)
        {
            this.state={
            
            posts:[],
            
            }
        }
    }  
    
    /*renderTableHeader()
        {

            let header = Object.keys(this.state.posts[0])
               return header.map((key, index) => {
               return <th key={index}>{key.toUpperCase()}</th>
            })
         }*/

    
       

    componentDidMount()
    {
        console.log('fetch Url function')
        fetch(`https://jsonplaceholder.typicode.com/todos`,{
        method:"GET"})
        .then(response=>response.json())
        .then((data)=>{
            this.setState({posts:data})
            console.log(this.state.posts)
        })

        .catch(console.timeLog)


    
          /*.then(result => {
             posts.result.forEach(item=>{
                console.log(item.id)
                console.log(item.Userid)
                console.log(item.title)
                console.log(item.completed)
            });
            this.setState({posts: posts.result})*/
        }
       


    render()
    {
        return(

           
              <div className="container">
              <div className="col-xs-12">
                 <table>
                     <h1>My JsonTodos</h1>
                     <tbody>
                     {/*<tr> {this.renderTableHeader()} </tr>*/}
                       {this.state.posts.map((post,key) => (

                    <div className="card">
                     <div className="card-body"> 
                       <tr key={post.id}>      
                       <td>{post.userId}</td>  
                       <td>{post.id}</td> 
                       <td>{post.title}</td>
                       <td>{post.completed}</td>  
                       </tr>
                    </div>
                    </div>
   
                     )) }
                     </tbody>
            </table>
           </div>
        </div>
    
        )
    } 
}

export default Dyntable