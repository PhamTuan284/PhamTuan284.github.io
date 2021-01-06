let forms = document.forms.todo;
let input = forms.elements.username;
let send = forms.elements.send;
console.log(forms);
console.log(input.value);
console.log(send);

a.onclick = function (e) {
    e.preventDefault()
}