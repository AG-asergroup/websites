const date = document.getElementsByClassName("day");
for(let i=0; i< date.length; i++ ) {
    date[i].innerHTML+=new Date().toDateString();
}
