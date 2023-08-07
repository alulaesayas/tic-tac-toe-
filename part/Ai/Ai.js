import {start} from '/part/Ai/start.js'
import {defense} from '/part/Ai/defense.js'
import {attack} from '/part/Ai/attack.js'
import {strategy} from '/part/Ai/strategy.js'
import {rand} from '/part/Ai/end.js'
export function ai(turn){
  setInterval(attack,1000)
  let lon=attack(turn)
  let lan=defense(turn)
  let lsn=start(turn)
  start(turn)
  attack(turn)
  defense(turn,lon)
  strategy(lon)
  rand(lon,lan,lsn)
}