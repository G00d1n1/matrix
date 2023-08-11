
let matrixField = document.querySelector('.matrix')
let alphavite = ['ЙЦУКЕНГШЩФЫВПАРСОЛЯТЧИЬ'];
let aa = alphavite.toString()
let bb = aa.split('').join('')
let alphaviteArray = Array.from(bb)

let matrix = function(){
      /// создание столбца
  function createColumn(){
    let createColumn = function(){
      function getRandomCoord(min, max){
          return Math.round(Math.random() * (max - min) + min)
      }
      return getRandomCoord(0, 29)
    }
    let column = document.createElement('div')
    column.className = 'matrix-column'
    column.style.left = createColumn() * 20 + 'px'
    column.style.top = 0 + 'px'
    
    matrixField.appendChild(column)

    let columns = document.querySelectorAll('.matrix-column')
    columns.forEach(column => {
            /// получение случайного элемента из массива
      function getRandom(min,max){
        return Math.round(Math.random() * (max-min) + min)
      }
      let uniqueChar = alphaviteArray[getRandom(0,alphaviteArray.length - 1)]

            /// добавление символов
      let y = 0
      y += 20
      
      let char = document.createElement('div')
      char.className = 'matrix-char'
      char.style.top += y + 'px'
      char.innerHTML = uniqueChar

      column.appendChild(char)

      let numbers = column.querySelectorAll('.matrix-char')

      if(numbers.length > 15){
        column.remove()
      }

    });

  }
  setInterval(() => {
    createColumn()
  }, 200);

  

}
matrix()

