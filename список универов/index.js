const TABLE_ID = "table";
const TBODY_TAG = "tbody";
const TR_TAG = "tr";
const TD_TAG = "td";
const HTTP_SUCCESS = 200;

fetch("http://universities.hipolabs.com/search?country=Ukraine")
    .then(response => response.json())
    .then(result =>{
        let arr = result;
        console.log(result)
        hideError();
        view(arr);
    })
    .catch(
        err => {
            viewError(err);
        }
    )

function view(arr){
    var table = document.getElementById(TABLE_ID);
    var body = table.querySelector(TBODY_TAG);
    for (let i = 0; i < arr.length; i++){
        const tr = document.createElement(TR_TAG);
        
        tr.appendChild(buildTD(arr[i].name));
        tr.appendChild(buildTD(arr[i].country));
        tr.appendChild(buildTD(arr[i].web_pages));

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

function greyLine(arr) {
    for(let i = 0; i<arr.length;i++) {
        arr[i]%2==0?tr.style.backGround='grey':tr.style.backGround='white'
    }
}




