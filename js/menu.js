const buscador = document.getElementById("myInput");
buscador.addEventListener('input',function(event){
  let frase = event.target.value.toUpperCase()
  let burbujas = document.getElementsByClassName("menud")
  let fondo = document.getElementById("menub")
  if(frase != ""){
    var cont = 0;
    for(let item of burbujas){
      let autor = item.getElementsByTagName("h2")[0].textContent.toUpperCase()
      let texto = item.getElementsByTagName("h3")[0].textContent.toUpperCase()

      if(autor.includes(frase.toUpperCase()) || texto.includes(frase.toUpperCase()) ){
        fondo.style.display = ""
        item.style.display = "flex"
        item.style.flex = "nowrap"
       
      //  fondo.style.display = "block"
       // fondo.style.columnCount = "2"
        //item.style.flex = "nowrap"
        cont++;
        if(cont%2!=0 ){
          fondo.style.display = "inline"
        }
      }
      else{
          item.style.display = "none"
      }
      console.log(cont)
    }
  }else{
    for(let item of burbujas){
      item.style.display = ""
      fondo.style.display = ""
    }
  }
});

let cargarDatos = () => {
    let divInicial = document.getElementById("menub")
    
    fetch("json/menu.json")
    .then((resultado) =>{
        return resultado.json();
    })
    .then((json) =>{
       var x = 1
        for(let elemento of json){
          let div = document.createElement("div")
         div.setAttribute("class","menud")
          div.setAttribute("id","menudiv")
          
          let div1 = document.createElement("div")
          div1.setAttribute("class","textodiv")
          div1.setAttribute("id","textiodiv")     

          let nombre = document.createElement("h2")
          nombre.textContent = elemento.nombre;
          nombre.setAttribute("class","nombreMenu")
         
          let textot = document.createElement("h3")
          nombre.textContent = elemento.nombre;
          nombre.setAttribute("class","textom")
          textot.textContent = elemento.texto 

          let imgd = document.createElement("div")
          imgd.setAttribute("class","imagenesmenu")
          let img = document.createElement("img");
          img.src = elemento.src;
          img.setAttribute("class","img")
          imgd.appendChild(img)
          
          div1.appendChild(nombre);
          div1.appendChild(textot);
          div.append(div1)
          div.appendChild(imgd);
         
          divInicial.appendChild(div)
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatos();
})