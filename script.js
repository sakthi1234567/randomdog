document.querySelector("#button").addEventListener("click",getData)
function getData (){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data=> {
        document.querySelector("#img").setAttribute("src",`${data.message}`)
    })
}