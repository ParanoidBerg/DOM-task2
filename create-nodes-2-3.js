function render (arr) {
    const ul = document.createElement('ul')


    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        let link = document.createElement('a')
        link.href = arr[i].url
        link.textContent = arr[i].name
        li.append(link)
        ul.append(li)
        
    }
    document.body.append(ul)
    return ul
}

console.log(render([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]))