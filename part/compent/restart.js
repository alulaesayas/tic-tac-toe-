export function restart(){
  c('.end').click(()=> {
         for (var v = 0; v <9; v++) {
           c('.space').eq(v).text('')
         }
       })
       c('.restart').eq(0).click(()=> {
         c('.content').css('display:grid')
         c('.take').css('display:grid')
         c('.begin').css('display:none')
         for (var v = 0; v <9; v++) {
           c('.space').eq(v).text('')
         }
       })
} 