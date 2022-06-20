const TABLE_ID = "table";
const TBODY_TAG = "tbody";
const TR_TAG = "tr";
const TD_TAG = "td";
const HTTP_SUCCESS = 200;

function main() {
    getInfo()
        .then(result =>{
            let arr = parse(result);
            hideError();
            view(arr);
        })
        .catch(
            err => {
                viewError(err);
            }
        )
}

function getInfo() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json", true);
        xhr.onload = (res) => {
            const text = 'some error';
            xhr.status === HTTP_SUCCESS ? resolve(JSON.parse(xhr.responseText)) :  reject(text);
        };

        xhr.send();

    })
}

function parse(obj){
    let result = [];
    for (let item in obj.bpi) {
        result.push({
            code: obj.bpi[item].code,
            description: obj.bpi[item].description,
            rate: obj.bpi[item].rate
        })
    }

    return result;
}

function view(arr){
    var table = document.getElementById(TABLE_ID);
    var body = table.querySelector(TBODY_TAG);
    for (let i = 0; i < arr.length; i++){
        const tr = document.createElement(TR_TAG);

        tr.appendChild(buildTD(arr[i].code));
        tr.appendChild(buildTD(arr[i].rate));
        tr.appendChild(buildTD(arr[i].description));

        body.appendChild(tr);
    }
}


function viewError(status) {
    const tr = document.getElementsByClassName('error')[0];

    tr.querySelector(TD_TAG).innerText = status;
}

function hideError() {
    const tr = document.getElementsByClassName('error')[0];
    tr.style.display = 'none';
}

function buildTD(text) {
    const td = document.createElement(TD_TAG);

    td.innerText = text;

    return td;
}

main();