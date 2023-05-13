
const btn = document.querySelector('#submit')
const name = document.getElementById('name')
const nametext = document.getElementById('nametext')
const msg = document.querySelector(".msg")
const listall = document.querySelector("#listall")
const listP = document.querySelector("#list-p")
const listC = document.querySelector("#list-c")
const closeBtn = document.querySelector(".close")
const clearBtn = document.querySelector(".button")
const todos = document.getElementsByTagName("li")
const textarea = document.querySelector("textarea")
const upperBtn = document.querySelector(".upperBtn")
const lowerBtn = document.querySelector(".lowerBtn")      
const text = document.querySelector(".text")
const textc = document.querySelector(".textc")
const textp = document.querySelector(".textp")
const borderBox = document.querySelector(".border-bot")
const listContainer = document.querySelector(".list-container")
const body = document.querySelector("body")
const allBtn = document.querySelector(".all")
const pendingBtn = document.querySelector(".pending")
const completedBtn = document.querySelector(".completed")
const formsTextandName = document.querySelector(".form")
const alertbox = document.querySelector(".alertbox")
const okay = document.querySelector(".okay")      
const cancel = document.querySelector(".cancel")    




closeBtn.addEventListener("click", (a)=>{

    msg.style.display = "none";
})
        

  //nav link

  okay.addEventListener("click", ()=>{   
    allBTN()
       
})
      
  allBtn.addEventListener("click", ()=>{   
    allBTN()
       
})

function allBTN(){
    listall.classList.add("dpflex")                            
    listP.classList.remove("dpflex")          
    listP.classList.add("dpnone")
    listC.classList.remove("dpflex")
    listC.classList.add("dpnone")
    

    
    pendingBtn.classList.remove("active")
    allBtn.classList.add("active")
    completedBtn.classList.remove("active")  
   borderBox.style.top = "5%" 
   borderBox.style.width = "45%" 
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

pendingBtn.addEventListener("click", ()=>{

    
    
    listall.classList.remove("dpflex")                            
    listall.classList.add("dpnone")                            
    listP.classList.add("dpflex")          
    listP.classList.remove("dpnone")
    listC.classList.remove("dpflex")
    listC.classList.add("dpnone")
    


    pendingBtn.classList.add("active")
    allBtn.classList.remove("active")
    completedBtn.classList.remove("active")
    borderBox.style.top = "23%"    
    borderBox.style.width = "63%"                                    
    window.scrollTo({ top: 0, behavior: 'smooth' });           
})

completedBtn.addEventListener("click", ()=>{
    listall.classList.remove("dpflex")                            
    listall.classList.add("dpnone")                            
    listP.classList.remove("dpflex")          
    listP.classList.add("dpnone")
    listC.classList.add("dpflex")
    listC.classList.remove("dpnone")
   

    
    
   pendingBtn.classList.remove("active")
   allBtn.classList.remove("active")
   completedBtn.classList.add("active")
  borderBox.style.top = "41%"   
  borderBox.style.width = "79%"                        
  window.scrollTo({ top: 0, behavior: 'smooth' });                
})


 btn.addEventListener("click", allBTN);
 name.addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {

        onclick =allBTN();
        
    }
});



function textFlexing() {
    const allitems = document.querySelectorAll("#listall li")
    const penditems = document.querySelectorAll("#list-p li")
    const compitems = document.querySelectorAll("#list-c li")
    

    if (allitems.length <= 0) {
        text.style.display = "flex"
    }else{
        text.style.display = "none"
    }

            if (penditems.length <= 0) {
                textp.style.display = "flex"
            }else{
                textp.style.display = "none"
            }

    if (compitems.length <= 0) {
        textc.style.display = "flex"
    }else{
        textc.style.display = "none"
    }

}

textFlexing()


function index(){
    function indexS() {
        msg.style.display = "none";
       const li = document.createElement("li");
       const lia = document.createElement("li");
       
       const editInputname = document.createElement("input")
      const editInputdesc = document.createElement("textarea")
      editInputdesc.classList = "editTextarea"
        editInputdesc.placeholder = "Description"
        editInputname.type = "text"
        editInputname.placeholder = "New note title"
        editInputname.classList = "editInputname"
        editInputname.maxLength = "12"

        const editInputnamea = document.createElement("input")
      const editInputdesca = document.createElement("textarea")
      editInputdesca.classList = "editTextarea"
        editInputdesca.placeholder = "Description"
        editInputnamea.type = "text"
        editInputnamea.placeholder = "New note title"
        editInputnamea.classList = "editInputname"
        editInputnamea.maxLength = "12"

       
       const div = document.createElement("div")
       const diva = document.createElement("div")
       div.className = "edit-container"
       diva.className = "edit-container"
       div.innerHTML ="<div class='color'><div class='default'></div><div class='red'></div><div class='tomato'></div><div class='green'></div></div><div class='read'><i class='fa-regular fa-circle-check'></i></div><div class='dropbtn-c'><i style='font-size:22px' class='fa-solid fa-ellipsis'></i><div class='dropbtn'><a class='save'>Save</a><a class='edit'>Edit</a><a class='remove'>Delete</a></div></div>"
       diva.innerHTML ="<div class='colora'><div class='defaulta'></div><div class='reda'></div><div class='tomatoa'></div><div class='greena'></div></div><div class='reada'><i class='fa-regular fa-circle-check'></i></div><div class='dropbtn-c'><i style='font-size:22px' class='fa-solid fa-ellipsis'></i><div class='dropbtn'><a class='savea'>Save</a><a class='edita'>Edit</a><a class='removea'>Delete</a></div></div>"
      
     
       const namevalue = `<div class="nametext">${nametext.value}</div>`
       const litext = `<div class="litext">${valeu}</div>`
       
      
      
       li.className = "activex"
       lia.className = "activex"
       li.appendChild(div);
       li.appendChild(editInputname);
       li.appendChild(editInputdesc);
       lia.appendChild(diva);
       lia.appendChild(editInputnamea);
       lia.appendChild(editInputdesca);
       li.insertAdjacentHTML("afterbegin", `<div class="nametext">${nametext.value}</div>`)
       li.insertAdjacentHTML("beforeend", `<div class="litext">${valeu}</div>`)
      
       lia.insertAdjacentHTML("afterbegin", `<div class="nametext">${nametext.value}</div>`)
       lia.insertAdjacentHTML("beforeend", `<div class="litext">${valeu}</div>`)
  
       listall.prepend(li); 
       listP.prepend(lia); 
      
 
       name.value = ""
       nametext.value = ""

       editInputnamea.style.display = "none";
       editInputname.style.display = "none";
       editInputdesca.style.display = "none";
       editInputdesc.style.display = "none";

       const saveBtn = document.querySelector(".save")
       const editBtn = document.querySelector(".edit")
       const saveaBtn = document.querySelector(".savea")
       const editaBtn = document.querySelector(".edita")
       saveBtn.style.display = "none"; 
       saveaBtn.style.display = "none"; 
             

        const namestext = document.querySelector("#listall .nametext")
        const desctext = document.querySelector("#listall .litext")
        const namestexta = document.querySelector("#list-p .nametext")
        const desctexta = document.querySelector("#list-p .litext")
        const redColor = document.querySelector(".red")
        const greenColor = document.querySelector(".green")
        const tomatoColor = document.querySelector(".tomato")
        const defaultColor = document.querySelector(".default")
        const redColora = document.querySelector(".reda")
        const greenColora = document.querySelector(".greena")
        const tomatoColora = document.querySelector(".tomatoa")
        const defaultColora = document.querySelector(".defaulta")
        defaultColor.addEventListener("click", ()=>{
            li.style.borderColor = "#ffffff40";
            lia.style.borderColor = "#ffffff40";
            redColor.style.border = "2px solid transparent";
            greenColor.style.border = "2px solid transparent";
            tomatoColor.style.border = "2px solid transparent";
        })
        redColor.addEventListener("click", ()=>{
            console.log("sdfsdf");
            li.style.borderColor = window.getComputedStyle(redColor).backgroundColor;
            lia.style.borderColor = window.getComputedStyle(redColor).backgroundColor;
            redColor.style.border = "2px solid skyblue";
            greenColor.style.border = "2px solid transparent";
            tomatoColor.style.border = "2px solid transparent";
        })
        greenColor.addEventListener("click", ()=>{
            li.style.borderColor = window.getComputedStyle(greenColor).backgroundColor;
            lia.style.borderColor = window.getComputedStyle(greenColor).backgroundColor;
            greenColor.style.border = "2px solid skyblue";
            redColor.style.border = "2px solid transparent";
            tomatoColor.style.border = "2px solid transparent";
        })
        tomatoColor.addEventListener("click", ()=>{
            li.style.borderColor = window.getComputedStyle(tomatoColor).backgroundColor;
            lia.style.borderColor = window.getComputedStyle(tomatoColor).backgroundColor;
            tomatoColor.style.border = "2px solid skyblue";
            redColor.style.border = "2px solid transparent";
            greenColor.style.border = "2px solid transparent";
        })
        defaultColora.addEventListener("click", ()=>{
            li.style.borderColor = "#ffffff40";
            lia.style.borderColor = "#ffffff40";
            redColor.style.border = "2px solid transparent";
            greenColor.style.border = "2px solid transparent";
            tomatoColor.style.border = "2px solid transparent";
        })
        redColora.addEventListener("click", ()=>{
            console.log("sdfsdf");
            li.style.borderColor = window.getComputedStyle(redColor).backgroundColor;
            lia.style.borderColor = window.getComputedStyle(redColor).backgroundColor;
            redColor.style.border = "2px solid skyblue";
            greenColor.style.border = "2px solid transparent";
            tomatoColor.style.border = "2px solid transparent";
        })
        greenColora.addEventListener("click", ()=>{
            li.style.borderColor = window.getComputedStyle(greenColor).backgroundColor;
            lia.style.borderColor = window.getComputedStyle(greenColor).backgroundColor;
            greenColor.style.border = "2px solid skyblue";
            redColor.style.border = "2px solid transparent";
            tomatoColor.style.border = "2px solid transparent";
        })
        tomatoColora.addEventListener("click", ()=>{
            li.style.borderColor = window.getComputedStyle(tomatoColor).backgroundColor;
            lia.style.borderColor = window.getComputedStyle(tomatoColor).backgroundColor;
            tomatoColor.style.border = "2px solid skyblue";
            redColor.style.border = "2px solid transparent";
            greenColor.style.border = "2px solid transparent";
        })
      
       editBtn.addEventListener("click", ()=>{
        editInputname.value = namestext.textContent;
        editInputdesc.value = desctext.textContent;
        editInputnamea.value = namestext.textContent;
        editInputdesca.value = desctext.textContent;
        
        editInputname.style.display = "block";
        editInputdesc.style.display = "block";                          
        editInputnamea.style.display = "block";
        editInputdesca.style.display = "block";                          
        editBtn.style.display = "none"; 
        editaBtn.style.display = "none"; 
        saveBtn.style.display = "block"; 
        saveaBtn.style.display = "block";
        setTimeout(anim, 000)
        function anim() {
            editInputname.style.left = "0px";
        editInputdesc.style.left = "0px";
        editInputnamea.style.left = "0px";
        editInputdesca.style.left = "0px";
        editInputdesc.style.opacity = "1";
        editInputname.style.opacity = "1";
        editInputdesca.style.opacity = "1";
        editInputnamea.style.opacity = "1";
        }
        read.style.transform = "scale(0)"
        reada.style.transform = "scale(0)"
         editInputdesc.focus();
       
   })

   

   function saveing() {
    namestext.textContent = editInputname.value
    desctext.textContent = editInputdesc.value
    namestexta.textContent = editInputname.value
    desctexta.textContent = editInputdesc.value
    if(editInputname.value.trim().length === 0 && editInputdesc.value.trim().length === 0 ){
        lia.classList.add("activexs") 
             li.classList.add("activexs") 
    setTimeout(removes, 200); 
    function removes() {
        li.remove(valeu)
        lia.remove(valeu)
        textFlexing()
    }  
    }
  

    editInputname.style.left = "-300px";
        editInputdesc.style.left = "-350px";           
    setTimeout(anim, 300)
        function anim() {
            editInputname.style.display = "none";
        editInputdesc.style.display = "none";                          
        editInputnamea.style.display = "none";
        editInputdesca.style.display = "none"; 
    editBtn.style.display = "block"; 
    saveBtn.style.display = "none"; 
    editaBtn.style.display = "block"; 
    saveaBtn.style.display = "none"; 
    read.style.transform = "scale(1)"
    reada.style.transform = "scale(1)"
        }
    
   
   
  
   }

  
  

   editInputname.addEventListener("keydown", (e)=>{

            if (e.key === "Enter") {
                saveing()
            }
        })

        editInputdesc.addEventListener("keydown", (e)=>{
            
            if (e.key === "Enter") {
                e.preventDefault()
                saveing()
            }
        })
   saveBtn.addEventListener("click", ()=>{
    saveing()
   
   })

   


   editaBtn.addEventListener("click", ()=>{
        editInputnamea.value = namestext.textContent;
        editInputdesca.value = desctext.textContent;
        editInputname.value = namestexta.textContent;
        editInputdesc.value = desctexta.textContent;
       
        editInputname.style.display = "block";
        editInputdesc.style.display = "block";                          
        editInputnamea.style.display = "block";
        editInputdesca.style.display = "block";                          
        editBtn.style.display = "none"; 
        saveBtn.style.display = "block"; 
        editaBtn.style.display = "none"; 
        saveaBtn.style.display = "block";
        setTimeout(anim, 000)
        function anim() {
            editInputnamea.style.left = "0px";
        editInputdesca.style.left = "0px";
        editInputname.style.left = "0px";
        editInputdesc.style.left = "0px";
        editInputdesca.style.opacity = "1";
        editInputnamea.style.opacity = "1";
        editInputdesc.style.opacity = "1";
        editInputname.style.opacity = "1";
        }
        read.style.transform = "scale(0)"
        reada.style.transform = "scale(0)"
         editInputdesca.focus();
   })

   function saveaing() {
    namestext.textContent = editInputnamea.value
    desctext.textContent = editInputdesca.value

    namestexta.textContent = editInputnamea.value
    desctexta.textContent = editInputdesca.value
    if(editInputnamea.value.trim().length === 0 && editInputdesca.value.trim().length === 0 ){
        lia.classList.add("activexs") 
             li.classList.add("activexs") 
    setTimeout(removes, 200); 
    function removes() {
        li.remove(valeu)
        lia.remove(valeu)
        textFlexing()
    }  
    }

    editInputnamea.style.left = "-300px";
        editInputdesca.style.left = "-350px";
        editInputname.style.left = "-300px";
        editInputdesc.style.left = "-350px";
    setTimeout(anim, 300)
        function anim() {
            editInputname.style.display = "none";
        editInputdesc.style.display = "none";                          
        editInputnamea.style.display = "none";
        editInputdesca.style.display = "none"; 
    editBtn.style.display = "block"; 
    saveBtn.style.display = "none"; 
    editaBtn.style.display = "block"; 
    saveaBtn.style.display = "none"; 
    read.style.transform = "scale(1)"
    reada.style.transform = "scale(1)"}

    
   }

   editaBtn.addEventListener("mousedown", ()=>{
            document.addEventListener("mousedown", (evt) => {
        
        let targetElement = evt.target; 

        do {
            if (targetElement == li || targetElement == lia) {
            
                
                return;
            }
        
            targetElement = targetElement.parentNode;
        } while (targetElement);

      
    
        saveaing()
    });
   })

   editBtn.addEventListener("mousedown", ()=>{
            document.addEventListener("mousedown", (evt) => {
        
        let targetElement = evt.target; 

        do {
            if (targetElement == lia || targetElement == li) {
            
                
                return;
            }
        
            targetElement = targetElement.parentNode;
        } while (targetElement);

      
        saveing()
       
    });
   })

   editInputnamea.addEventListener("keydown", (e)=>{
            if (e.key === "Enter") {
                saveaing()
            }
        })
        editInputdesca.addEventListener("keydown", (e)=>{
            if (e.key === "Enter") {
                e.preventDefault()
                saveaing()
            }
        })

   saveaBtn.addEventListener("click", ()=>{
    saveaing()
    
   })
       }

       
  
    
          
   
    valeu = name.value;
   
     
    indexS()
      
 
  
   
   

   
   const remove = document.querySelector(".remove")         
   const removea = document.querySelector(".removea")         
   
   
   const li = document.querySelector("li")
   const lia = document.querySelector("#list-p li")
   
    
      const read = document.querySelector(".read");
      const reada = document.querySelector(".reada");
      //edit
  
   

     
      
      read.addEventListener("click", (e)=>{
        
        setTimeout(flexing, 200)
        function flexing() {
            textFlexing()
        }
       
        e.preventDefault();

     
        lia.classList.toggle("checked")
        li.classList.toggle("checked")
      
        setTimeout(pending, 100)
        function pending(){
            if (lia.className === "activex checked") {
                listC.prepend(lia); 
              read.innerHTML = "<i class='fa-solid fa-circle-check'></i>"
             reada.innerHTML = "<i class='fa-solid fa-circle-check'></i>"
        
            

                
             
          
                         
        }else{
            
        
            listP.prepend(lia); 
            read.innerHTML = "<i class='fa-regular fa-circle-check'></i>"
            reada.innerHTML = "<i class='fa-regular fa-circle-check'></i>"
           
                          
        }
       
        
        }

                      
        
      })

      

      reada.addEventListener("click", (e)=>{
        
       setTimeout(flexing, 200)
        function flexing() {
            textFlexing()
        }
       

        e.preventDefault();
        
                     lia.classList.toggle("checked")
       
                     li.classList.toggle("checked")
                     
        setTimeout(pending, 100)
        function pending(){
         
            if (lia.className === "activex checked") {
               
                          listC.prepend(lia); 
                     
                          read.innerHTML = "<i class='fa-solid fa-circle-check'></i>"
                          reada.innerHTML = "<i class='fa-solid fa-circle-check'></i>"
        }else{
       
          
            listP.prepend(lia); 
            
            
            read.innerHTML = "<i class='fa-regular fa-circle-check'></i>"
                          reada.innerHTML = "<i class='fa-regular fa-circle-check'></i>"
                      
       
              
    
          
                 }
                }

                          
        
      })

      
      
   //coming

   
  


okay.addEventListener("click", ()=>{

    alertbox.style.display = "none" 
    var valeu = name.value;
        lia.remove(valeu)
        li.remove(valeu)
        textFlexing()
})

cancel.addEventListener("click", ()=>{
alertbox.style.display = "none" 
})
      
clearBtn.addEventListener("click", ()=>{
    const alerko = document.querySelectorAll("#listall li")

   if (alerko.length > 0) {
    alertbox.style.display = "flex"  
   }                                   
})


    

  
 
  
//remover
    remove.addEventListener("click", (e)=>{

    e.preventDefault();

             lia.classList.add("activexs") 
             li.classList.add("activexs") 
    setTimeout(removes, 200); 
    function removes() {
        li.remove(valeu)
        lia.remove(valeu)
        textFlexing()
    }                          
   }) 

   removea.addEventListener("click", (e)=>{
    
    e.preventDefault();
    
    lia.classList.add("activexs") 
    setTimeout(removes, 200);
   

    function removes() {
        li.remove(valeu)
        lia.remove(valeu)
        textFlexing()
    }                           
   })   
            
}


formsTextandName.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        e.preventDefault()
        formkabul()  
    }
} )


function formkabul() {
if (nametext.value.trim().length === 0 && name.value.trim().length === 0) {            
       msg.style.display = "flex";
       msg.classList.toggle("animation");
  name.value = "";
  nametext.value = "";
   }else{
    index()
      textFlexing()
      allBTN()
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }   
}


btn.addEventListener("click", ()=> {
    formkabul()    
} );
    

upperBtn.addEventListener("click", ()=>{
    var valeu = name.value;
    var valeus = nametext.value;
    name.value = valeu.toUpperCase();                
    nametext.value = valeus.toUpperCase();                
})

lowerBtn.addEventListener("click", ()=>{
    var valeu = name.value;
    var valeus = nametext.value;
    name.value = valeu.toLowerCase();                                    
    nametext.value = valeus.toLowerCase();                                    
})


