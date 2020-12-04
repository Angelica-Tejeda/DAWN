
 // });
 let cargarDatos = () => {
    let divInicial = document.getElementById("aqui")
    
    fetch("imagenes.json")
    .then((resultado) =>{
        return resultado.json();
    })
    .then((json) =>{
        
       
        for(let elemento of json){

            let li = document.createElement("li")
            
           

            let a = document.createElement("a")
            a.setAttribute("class","thumb")	
            a.setAttribute("href",elemento.land)
            a.setAttribute("alt","eleven")
            let img = document.createElement("img")
            img.src = elemento.src
       
			
			


           
          a.appendChild(img);
          li.appendChild(a);
         
          divInicial.appendChild(li)
          
          
        }

    }
    
    )
    .then(() =>{
        console.log("hola")
    })


}
	
//setTimeout(function(){
   
//},500);
//jQuery("aqui").ready(function() {
//	console.log("hola")
	//setTimeout(() => {  
   // window.addEventListener('Load', function() {
          cargarDatos();
     //   })
	//}, 500);
	  //Adds a grid to the html