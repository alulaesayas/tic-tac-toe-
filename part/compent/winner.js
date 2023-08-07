let winner=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ]
 
  export function win(){
    winner.forEach((num)=> {
        let yes=num.every((id)=> {
          return c('.space').a[id].innerText=='X'
        })
        let nop=num.every((id)=> {
          return c('.space').a[id].innerText=='O'
        })
        if (yes || nop) {
          c('.begin').css('display:grid')
          
          if (nop) {
            c('.restart').eq(0).text('win O')
          }
          if (yes) {
            c('.restart').eq(0).text('win X')
          }
        }
      })
  }