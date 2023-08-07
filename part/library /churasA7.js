function c(value) {
  return{
    c:document.querySelector(value),
    a:document.querySelectorAll(value),
    name:document.querySelector(value),
    click:function(event){
      return this.name.addEventListener('click',event)
    },
    css:function(style){
      if (typeof style=='object') {
        return Object.assign(this.name.style,style)
      }
      if (typeof style!='object') {
        return this.name.setAttribute('style',style)
      }
    },
    attr:function(attribute,change){
      if (typeof attribute=='object') {
    Object.keys(attribute).forEach((attrs)=> {
       return  this.name.setAttribute(attrs,attribute[attrs])
       })

      }
      if (typeof attribute!='object') {
        return this.name.setAttribute(attribute,change)
      }
    },
    html:function(html){
      return this.name.innerHTML=html
    }
    ,
    append:function(add_html){
      return this.name.innerHTML+=add_html
    }
    ,
    text:function(text){
      return this.name.innerText=text
    },
    write:function(add_text){
      return this.name.innerText+=add_text
    }
    ,
    eq:function(number){
      return{
        name:document.querySelectorAll(value)[number],
     click:function(event){
      return this.name.addEventListener('click',event)
    },
     css:function(style){
      if (typeof style=='object') {
        return Object.assign(this.name.style,style)
      }
      if (typeof style!='object') {
        return this.name.setAttribute('style',style)
      }
    },
     attr:function(attribute,change){
      if (typeof attribute=='object') {
       
      Object.keys(attribute).forEach((attrs)=> {
       return  this.name.setAttribute(attrs,attribute[attrs])
       })
      }
      if (typeof attribute!='object') {
        return this.name.setAttribute(attribute,change)
      }
    },
    html:function(html){
      return this.name.innerHTML=html
    }
    ,
    append:function(add_html){
      return this.name.innerHTML+=add_html
    }
    ,
    text:function(text){
      return this.name.innerText=text
    },
    write:function(add_text){
      return this.name.innerText+=add_text
    }
    ,
      }
    }
  }
}
