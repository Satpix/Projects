let inputBox = document.querySelector(".input-block input")
let addBtn = document.querySelector(".input-block-button")
let tagsField = document.querySelector(".tags")
let deleteAllTags = document.querySelector(".delete-tags-button")
let readOnlyMode = document.getElementById('readonly')
let arr = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я',
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '!', '@', '#', '%', '&', '?', '-', '+', '=', '~', ' ']
inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.setAttribute("id", "active")
        readOnlyAdd()
    } else {
        addBtn.removeAttribute("id", "active")
    }
}
showTags();
addBtn.onclick = () => {
    let userData = inputBox.value;
    userData = userData.trim().split('').filter((item) => {
        let checks = false;
        arr.forEach((item2) => {
                if (item == item2) {
                    checks = true;
                }
            }
        )
        return checks;
    })
    userData = userData.join('').split(' ')
    userData = userData.filter(item => item != '')
    console.log(userData)
    let getLocaleStorage = localStorage.getItem("Tags")
    if (getLocaleStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocaleStorage)
    }
    listArr = listArr.concat(userData)
    localStorage.setItem("Tags", JSON.stringify(listArr))
    showTags();
    addBtn.removeAttribute("id", "active")
}

function showTags() {
    let getLocaleStorage = localStorage.getItem("Tags")
    if (getLocaleStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocaleStorage)
    }
    let countTags = document.querySelector('.number')
    if (listArr.length == 0) {
        deleteAllTags.removeAttribute("id", "active")
    } else {
        deleteAllTags.setAttribute("id", "active")
    }
    if (listArr.length == 1) {
        countTags.textContent = listArr.length + " tag";
    } else {
        countTags.textContent = listArr.length + " tags";
    }
    let newTag = '';
    listArr.forEach((element, index) => {
        if (readOnlyMode.checked == false) {
            newTag += `<li>${element}<span onclick="deleteTags(${index})" class="trash">X</span></li>`
        } else {
            newTag += `<li>${element}<span onclick="deleteTags(${index})" class="trash trash-off">X</span></li>`
        }
    })
    tagsField.innerHTML = newTag;
    inputBox.value = ""
    readOnlyAdd()
    addBtn.removeAttribute("id", "active")
}

function deleteTags(index) {
    let getLocaleStorage = localStorage.getItem("Tags")
    listArr = JSON.parse(getLocaleStorage)
    if (readOnlyMode.checked == false) {
        listArr.splice(index, 1)
    }
    localStorage.setItem("Tags", JSON.stringify(listArr))
    showTags();
}

deleteAllTags.onclick = () => {
    listArr = [];
    localStorage.setItem("Tags", JSON.stringify(listArr))
    showTags()
}

readOnlyMode.onclick = () => {
    showTags();
}

function readOnlyAdd() {
    let check = readOnlyMode.checked;
    if (check == true) {
        addBtn.removeAttribute("id", "active")
        deleteAllTags.removeAttribute("id", "active")
    } else {
        addBtn.setAttribute("id", "active")
        deleteAllTags.setAttribute("id", "active")
    }
}