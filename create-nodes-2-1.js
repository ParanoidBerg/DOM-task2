const ul = document.createElement('ul')
const arr = ["html", "css", "js"]
for (let i=0; i<arr.length; i++) {
    let x = document.createElement('li')
    x.textContent = arr[i]
    ul.append(x)

}
console.log(ul)

document.body.append(ul)