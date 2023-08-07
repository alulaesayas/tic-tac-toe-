let value=c('.space').a
export function start(x,y){
  let lama=0
  if (value[4].innerText==x) {
    if (value[0].innerText=='') {
      value[0].innerText='O'
      lama=1
    }
  }
  for (var i = 0; i < 9; i++) {
    if (i%4!=0 || i==8 || i==0) {
      if (value[i].innerText==x) {
        if (value[4].innerText==''){
          value[4].innerText='O'
         lama=1
        }
      }
    }
  }
  return lama
}