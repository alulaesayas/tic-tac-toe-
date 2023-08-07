import {turn} from '/part/compent/turn.js'
import {mulit} from '/part/two players /multiple.js'

c('#single').click(()=> {
  c('.you').css('display:grid')
  c('.choose').css('display:none')
  c('.power').css('display:grid')
  turn()
})
c('#two').click(()=> {
  c('.you').css('display:grid')
  c('.choose').css('display:none')
  c('.power').css('display:grid')
  mulit()
})
c('#back').click(()=> {
  document.location.reload(true)
})
