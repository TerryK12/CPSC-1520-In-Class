console.log('main.js is loaded');


function updateInnerHTML(selector,newValue) {
    document.querySelector(selector).InnerHTML = newValue;
}

function strong(value) {
    return '<strong>' + value + '</strong>'
}