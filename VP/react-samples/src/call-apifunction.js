import apicall, {getInfoBloom} from './services/api-service';

const Display = (res) => {
    const fetchJsonValue = () => {
        console.log('In fetchJsonValue ')
        //https://jsonplaceholder.typicode.com/todos/1
        //https://jsonplaceholder.typicode.com/users

        // const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
        // apicall(url).then(data => {
        //     console.log('data is not empty ********** ',data)
        // });

        getInfoBloom("https://bloomlms.azure-api.net/student/v1/1/profile").then((data) => {
            console.log('bloom data is : ',data);
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