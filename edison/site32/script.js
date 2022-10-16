let textarea = document.querySelector("textarea");
let count = document.querySelector("span.count");
textarea.addEventListener('keyup', () => {
    const textWithoutSpace = textarea.value.replace(/\s/g, "");
    count.innerHTML = textWithoutSpace.length;
});