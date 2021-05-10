export default function newXHR({ method, url, responseType, contentType, body }) {
    return new Promise((resolve, reject) => {
        
        let xhr = new XMLHttpRequest();

        xhr.responseType = responseType;
    
        xhr.open(method, url);
        
        xhr.setRequestHeader("Content-Type", contentType);
    
        xhr.send(body);
    
        xhr.onerror = () => {
            reject("Can not send request");
        }
        
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                let json = xhr.response;
                resolve(json)
            } else {
                reject("Error")
            }
        }
    })
}

export function createItem(item) {
    if (item.status == false) {
        let html = `
        <div class="not-item d-flex mb-5 mt-5 item">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" >
            </div>
            <p class="list-item">${item.title}</p>
            <div class="edit ms-auto btn-group">
                <button class="btn btn-primary" id="editBtn" onclick="editItem(this)">
                    <i class="far fa-edit"></i>
                </button>
                <button class="btn btn-danger" id="deleteBtn" onclick="deleteItem(this, ${item.id})">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
        `
        return html
    } else {
        let html = `
        <div class="done-item d-flex mb-5 mt-5 item">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" checked disabled>
            </div>
            <p class="list-item">${item.title}</p>
            <div class="edit ms-auto btn-group">
                <button class="btn btn-primary" id="editBtn" onclick="editItem(this)">
                    <i class="far fa-edit"></i>
                </button>
                <button class="btn btn-danger" id="deleteBtn" onclick="deleteItem(this, ${item.id})">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
        `
        return html
    }
}
