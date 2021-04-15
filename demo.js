window.addEventListener("DOMContentLoaded",() => {


    const myList = document.getElementById("my-list")
    const catList = document.getElementById("cat-list")

    const submitButton = document.getElementById("submit-button")
    const catButton = document.getElementById("cat-button")

    const listInput = document.getElementById("list-input")
 
    submitButton.addEventListener("click", (evt) => {
       evt.preventDefault()
        let newItem = document.createElement("li")
        newItem.innerHTML=listInput.value
        myList.append(newItem)
    })

    

    async function newFact(evt) {
        evt.preventDefault()
        let response = await axios.get("https://cat-fact.herokuapp.com/facts")
        let catFact = response.data[0].text
        let newItem = document.createElement("li")
        newItem.innerHTML= catFact
        catList.append(newItem)
    }

    catButton.addEventListener("click", newFact)

})