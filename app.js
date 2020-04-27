const elAddBtn = document.querySelector('.addButton')
const input =document.querySelector('.input')
const elContainer = document.querySelector('.container')


class item {
    constructor(itemName) {

        this.createDiv(itemName)
    }

    createDiv(itemName) {
        let input = document.createElement('input')
        input.value = itemName
        input.disabled = true
        input.classList.add('item__input')
        input.type = 'text'

        let elItemBox = document.createElement('div')
        elItemBox.classList.add('item')

        let elDelBtn = document.createElement('button')
        elDelBtn.innerHTML = "<i class='fa fa-trash'>"
        elDelBtn.classList.add('deleteButton')

        let elEditBtn = document.createElement('button')
        elEditBtn.innerHTML = "<i class='fa fa-edit'>"
        elEditBtn.classList.add('deleteButton')

        elContainer.appendChild(elItemBox)
        elItemBox.appendChild(input)
        elItemBox.appendChild(elEditBtn)
        elItemBox.appendChild(elDelBtn)

        elEditBtn.addEventListener('click', () => this.edit(input))
        elDelBtn.addEventListener('click', () => this.delete(elItemBox))
        
    }
    
    edit(input) {
        input.disabled = !input.disabled
    }
    delete(item) {
        elContainer.removeChild(item)
    }
} 

function check() {
    if(input.value != '') {
        new item(input.value)
        input.value = ''
    }
}


elAddBtn.addEventListener('click', check) 
window.addEventListener('keydown', (e) => {
        if(e.which == 13) {
            check()
        }
    })