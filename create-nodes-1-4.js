const x = document.createElement('ul')
x.classList .add ('list')
const y = document.createElement('li')
y.textContent = 'Hello World!'
x.append(y)
console.log(x)
