// export default function createxhr({ method, url, responseType, contentType, body }) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();

//         xhr.responseType = responseType;
        
//         xhr.open(method, url);

//         //phân trang, limit,...
//         xhr.setRequestHeader("Content-type", contentType);

//         xhr.send(body);

//         xhr.onerror = () => reject("Cannot send request");

//         xhr.onload = () => {
//             if (xhr.status == 200) {
//                 resolve(json);
//             } else {
//                 reject("Error onload");
//             }
//         }
//     })
// }