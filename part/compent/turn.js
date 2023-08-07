import {ai} from '/part/Ai/Ai.js'
import {win} from '/part/compent/winner.js'
import {restart} from '/part/compent/restart.js'


let x='X';

export function turn(){
  for (var i = 0; i < 9; i++) {
    c('.space').eq(i).click((e)=> {
     if (e.target.innerText=='') {
       e.target.innerText=x
       let yes=e.target.innerText
      ai(yes)
      restart()
      win()
      
     }
  })    
  }
}