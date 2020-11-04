import React from 'react';

function Hooksfunction()
{

    const[datas,setdata] = React.useState([]);

    console.log(datas);

    React.useEffect(function effectfunction() {
        async function fetchid(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
            const json = await response.json();
            console.log('response:',response)
            console.log('json',json)
            setdata(json);
            console.log(json)
        }
        fetchid();
    },[]);


    return(
           <ul>
            {
            datas&&datas.map(data1 => (
                <li key={data1.id}>
                    <span>{data1.title}</span>   <span>{data1.id}</span>   <span>{data1.Userid}</span> 
                </li>  
            ))
            }   
        </ul>
    )
}

export default Hooksfunction;