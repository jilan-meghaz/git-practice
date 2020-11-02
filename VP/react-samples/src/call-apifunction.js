import apicall from './services/api-service';

const Display = (data) => {
    const fetchJsonValue = () => {
        console.log('In fetchJsonValue ', data)
        //https://jsonplaceholder.typicode.com/todos/1
        //https://jsonplaceholder.typicode.com/users
        const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
        apicall(url).then(data => {
            console.log('data is not empty ********** ',data)
        });
    }

    return(
        <div>
            <a href="#" onClick={fetchJsonValue}>
                Fetch Value
            </a>
            {/* <Component/> */}
        </div>
    );

}
export default Display;