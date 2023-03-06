let heading = document.querySelectorAll(".faq button");
heading.forEach((element) => {
    element.addEventListener("click", ()=>{
        let paragraph = element.nextElementSibling;
        if(paragraph.style.display==="none"){
            paragraph.style.display="block";
        }
        else{
            paragraph.style.display="none"
        }
    })
})


