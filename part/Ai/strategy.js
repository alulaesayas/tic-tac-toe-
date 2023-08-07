let strategy_position=[
              [0,8,7],
              [2,6,7],
              [4,8,2],
              
           ] 
let svalue=c('.space').a
let lay=0
export function strategy(time){
  lay=0
  if (time==0) {
  strategy_position.forEach((part)=> {
    let point=0
    for (var i = 0; i < part.length; i++) {
      
      if (svalue[part[i]].innerText=='X') {
        point++
      }
      
      if (point==2) {
        if (svalue[part[i]].innerText=='') {
          svalue[part[i]].innerText='O'
          lay = 1
        }
      }
    }
  })
  }
  return lay
} 