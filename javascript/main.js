'use strict';

const toDoList = document.getElementById('to-do-list');
const addToDoInput = document.getElementById('add-to-do-input');
let resultado = '';
let toDoListArray = [];

function cleanToDo() {
    toDoListArray = [];
    listToDo();
    return true;
};

function toRemove(number) {
    number = parseInt(number);
    toDoListArray.splice(number, 1);
    generateToDoList();
    listToDo();
    return true;
};

function generateToDoList() {
    for (let index = 0; index < toDoListArray.length; index++) {
        resultado += `<div class="row bg-light rounded justify-content-between align-items-center m-1 p-1"><span class="col">${toDoListArray[index]}</span><button class="col-auto btn bg-danger text-light ms-2" onclick="toRemove(${index})">Remover</button></div>`
    };
    return true;
};

function listToDo() {
    addToDoInput.value = '';
    toDoList.innerHTML = '';
    toDoList.innerHTML = resultado;
    resultado = '';
    return true;
};

function addToDo() {
    toDoListArray.push(addToDoInput.value);
    generateToDoList();
    listToDo();
    return true;
};