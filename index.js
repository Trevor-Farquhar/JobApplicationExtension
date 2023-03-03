let myLeads = []
let oldLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/trevor-farquhar-908b42256/"}
]

tabBtn.addEventListener("click", function(){
    myLeads.push(tabs[0].url)
})

function renderLeads(applicationLinks){
    let listItems = ""
    for (let i = 0; i <applicationLinks.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${applicationLinks[i]}'>${applicationLinks[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)
    
})


