// const magnify = document.getElementById("magnify")


// // Mouse handler
// // https://stackoverflow.com/a/34348306
// onmousemove = (e) => {
//     // console.log("mouse location:", e.clientX, e.clientY);
//     magnify.style.top = e.clientY + "px";
//     // console.log(e);
// }

const search_input = document.getElementById('search_input');

function search(box, to) {
    if(search_input.value !== '') {
        console.log(`./search?q=${search_input.value}/`);
        window.location = `./search?q=${search_input.value}`;
    } else {
        console.log('Nothing entered');
        return;
    }
}

search_input.addEventListener('compositionstart', () => {
    console.log('compositionstart');
});

search_input.addEventListener('compositionupdate', () => {
    console.log('compositionupdate');
});

search_input.addEventListener('input', () => {
    console.log('input');
});