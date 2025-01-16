const navcolor=document.querySelectorAll(".nav-item");
navcolor.forEach(item=>{
    item.addEventListener("click", function(){
        navcolor.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});
