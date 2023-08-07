import {win} from '/part/compent/winner.js'
import {restart} from '/part/compent/restart.js'
let x='X'
export function mulit(){
  for (var i = 0; i < 9; i++) {
    c('.space').eq(i).click((e)=> {
      e.target.innerText=x=x=='X'? 'O' :'X'
      win()
      restart()
    }) 
  }
}