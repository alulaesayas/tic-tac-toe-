
let attack_position=[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
  ]
let attack_position2=[
            [0,2,1],
            [3,5,4],
            [6,8,7],
            [0,6,3],
            [1,7,4],
            [2,8,5],
            [0,8,4],
            [2,6,4]
  ]
let long=0;
let avalue=c('.space').a
export function attack(right){
  let xs=0;
  let os=0;
  
  for (var a = 0; a < 9; a++) {
    if (avalue[a].innerText=='X') {
      xs++
    }
    if (avalue[a].innerText=='O') {
      os++
    }
  } 
  
  
  let check=0 
  if (os!=xs) {
    check=1
  let repeat_attack=0
  attack_position.forEach((part)=> {
    let apaint=0
    let apaint2=0
    for (var i = 0; i < part.length; i++) {
      if (avalue[part[i]].innerText=='O') {
        apaint++;
      }
     if (apaint==2 && repeat_attack==0) {
        if (avalue[part[i]].innerText=='') {
          repeat_attack=1
          avalue[part[i]].innerText='O'
          long=1;
        }
      }
    }
    for(var v = 2; v >= 0; v--){
      if (avalue[part[v]].innerText=='O') {
        apaint2++;
      }
     if (apaint2==2 && repeat_attack==0) {
        if (avalue[part[v]].innerText=='') {
          avalue[part[v]].innerText='O'
          repeat_attack=1
          long=1;
        }
      }
    }

    if (repeat_attack==0) {
      long=0
    }
  })
  attack_position2.forEach((part)=> {
    let point1 = 0
    for (var i = 0; i < part.length; i++) {
      if (avalue[part[i]].innerText=='O') {
        point1++
      }
      if (point1==2 && repeat_attack==0) {
        if (avalue[part[i]].innerText=='') {
          avalue[part[i]].innerText='O'
          long=1
          repeat_attack=1
          
        }
      }
    }
  })
  }
 
return long

  
  
} 