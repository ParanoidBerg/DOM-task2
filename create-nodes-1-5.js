const x = document.createElement('div')
const y = document.createElement('div')
const z = document.createElement('div')

x.textContent = 'Я вложен'

x.classList .add ('blue')
y.classList .add ('green')
z.classList .add ('red')

z.append(y)
y.append(x)

console.log(z)

