'use strict';

const mainTable = document.querySelector("#maintable");
const OKButton = document.querySelector("#OK-button");
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const year_of_createInput = document.querySelector("#year_of_create");


const loadList = async function(url) {
    const responce = await fetch(url);
    if (!responce.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${responce.status}!`);
    }
    return await responce.json();
}

function makeTableRow({title, author, year_of_create}) {
    const row = document.createElement('tr');
    row.className = 'table_row';
    row.insertAdjacentHTML("beforeend", `
            <td>${author}</td><td>${title}</td><td>${year_of_create}</td>
    `)
    mainTable.insertAdjacentElement('beforeend', row)
}

const newBook = async function(author, title, year_of_create){
    function findCSRFtoken () {
        let coockies = document.cookie;
        let c1 =  coockies.split(';')
        for (let c of c1) {
            c = c.trim()
            if (c.search(/^csrftoken=/) != -1) {
                c = c.replace(/^csrftoken=/, '')
                return c
            }
        }
    }
    let csrf = findCSRFtoken();
    console.log(csrf, author, title, year_of_create);
    const body = {
            'author' : author,
            'title' : title,
            'year_of_create': year_of_create
    }
    let response = await fetch('/create', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-CSRFToken': csrf
        },
        body: JSON.stringify(body)
    })
    if (response.ok) {
        init();
    } else {
        let mess = 'Ошибка! '
        let result = await response.json();
        for (let value of Object.values(result)) {
                console.log(value);
                mess = mess + value + ' ';
        }
        alert(mess)
    }


    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => alert(error.message))
    // init()
}

OKButton.addEventListener("click", (event) => {
    event.preventDefault()
    const author = authorInput.value
    const title = titleInput.value
    const year_of_create = year_of_createInput.value
    newBook (author, title, year_of_create)


})

function clearTable(){
    for (let row of mainTable.querySelectorAll('.table_row')) {
        row.remove()
    }
}

function init() {
    clearTable();
    loadList('/list').then(function (data) {
        data.forEach(makeTableRow)
    })
}

init();