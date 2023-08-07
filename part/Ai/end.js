let evalue=c('.space').a

export function rand(x,y,z){
  console.log(x,y,z);
  if (x==0 && y==0 && z==0) {
  let sx=0
  let po=0
  for (var a = 0; a < 9; a++) {
    if (evalue[a].innerText=='X') {
      sx++
    }
    if (evalue[a].innerText=='O') {
      po++
    }
  } 
  if (sx!=po) {
    for (var i = 0; i < 8; i++) {
      if (evalue[i].innerText=='') {
        evalue[i].innerText='O'
        break;
      }
    }
  }
 }
}