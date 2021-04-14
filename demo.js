window.addEventListener("DOMContentLoaded",() => {


    const myList = document.getElementById("my-list")
    const submitButton = document.getElementById("submit-button")
    const listInput = document.getElementById("list-input")
 
    submitButton.addEventListener("click", (evt) => {
       evt.preventDefault()
        let newItem = document.createElement("li")
        newItem.innerHTML=listInput.value
        myList.append(newItem)
    })



})