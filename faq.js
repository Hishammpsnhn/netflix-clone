var acc = document.getElementsByClassName("btn");
var content = document.getElementsByClassName("content");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var parentFaq = this.parentElement;
        var icon = this.querySelector("i");
        // Close all content except panel
        for (var j = 0; j < content.length; j++) {
            if (content[j] !== panel) {
                console.log(   content[j].previousElementSibling)
                content[j].style.maxHeight = null;
                content[j].parentElement.classList.remove("active");
                content[j].previousElementSibling.querySelector("i").classList.remove("fa-xmark");
                content[j].previousElementSibling.querySelector("i").classList.add("fa-plus");
            }
        }
       
        // Toggle the clicked panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            parentFaq.classList.remove("active");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-plus");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            parentFaq.classList.add("active");
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-xmark");
        }
   
    });
}
