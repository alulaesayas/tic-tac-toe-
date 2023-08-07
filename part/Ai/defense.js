let defense_position=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
 let defensep2=[
            [0,2,1],
            [3,5,4],
            [6,8,7],
            [0,6,3],
            [1,7,4],
            [2,8,5],
            [0,8,4],
            [2,6,4]
              ]
 let dvalue=c('.space').a
 
export function defense(x,y){
  let land=0
  if (y==0) {
  let repeat=0 
  defense_position.forEach((part)=> {
    let point=0
    let point1=0
    
    for (var i = 0; i < part.length; i++) {
      if (dvalue[part[i]].innerText==x) {
        point++
      }
      if (point==2 && repeat==0) {
        if (dvalue[part[i]].innerText=='') {
          repeat=1
          dvalue[part[i]].innerText='O'
          land=1
          
        
          
        }
      }
    }
    
    for (var v = 2; v >= 0; v--) {
      if (dvalue[part[v]].innerText==x) {
        point1++
      }
      
      if (point1==2 && repeat==0) {
        if (dvalue[part[v]].innerText=='') {
          repeat=1
          dvalue[part[v]].innerText='O'
          land=1
        }
      }
      
    }
            if (repeat==0) {
                 land=0
             }
  })

  if (y==0) {
  defensep2.forEach((part)=> {
    let point2=0;
    
        for (var i = 0; i < part.length; i++) {
      if (dvalue[part[i]].innerText==x) {
        point2++
      }
      if (point2==2 && repeat==0) {
        if (dvalue[part[i]].innerText=='') {
          dvalue[part[i]].innerText='O'
          repeat=1
          land=1
        }
      }
    }
        if (repeat==0) {
                 land=0
             }
  })
  }
 }
 return land
} 