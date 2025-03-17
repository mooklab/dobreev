const searchHighlighter = (element) => {
    results = element.nextElementSibling.querySelectorAll('a')
    results.forEach( result => {
    
        result.innerHTML = result.innerText.replace( new RegExp( element.value + '(?!([^<]+)?<)', 'gi'),'<b>$&</b>')

    })
    // let el = document.querySelector(elem)
    //     el.innerHTML = el.innerText
    //       .replace( new RegExp( that.value + '(?!([^<]+)?<)', 'gi'),
    //       '<mark>$&</mark>'
    //   )
    // return el
}