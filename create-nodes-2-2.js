function render (arr) {
    const ul = document.createElement('ul')
    
    for (let i=0; i<arr.length; i++) {
    let x = document.createElement('li')
    x.textContent = arr[i]
    ul.append(x)
  }
document.body.append(ul)
return ul
}
console.log(render(["html", "css", "js"]))