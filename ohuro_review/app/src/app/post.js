// function PostInputResult(ResultJson) {
//     console.log(ResultJson);
// }

import axios from 'axios'

function PostInputResult(ResultJson) {
    // axios.post('https://jsonplaceholder.typicode.com/users/' + date3 + '/',
    axios.post('http://192.168.99.100:8082/restendpoint/',

        ResultJson
    )
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}

// async function GetInputResult() {
//     return await axios.get('https://jsonplaceholder.typicode.com/users/1',
//         {
//             headers: {
//                 "Content-Type": "application/json",
//                 // "Authorization": 'Bearer ' + TOKEN
//             },
//             responseType: 'json',
//         })
//         .then(response => { return response })
//         .catch(error => console.log(error))

// }

export default {
    PostInputResult
    // GetInputResult

}