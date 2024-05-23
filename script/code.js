let idfield = document.querySelector(".idnumber")
             
document.querySelector(".submit").addEventListener("click", getResult)



function getResult() {
    if (idfield.value.length > 13) {
        idfield.value = ""
    }
}