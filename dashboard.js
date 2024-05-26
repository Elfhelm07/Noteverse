document.addEventListener("DOMContentLoaded", function() {
    const bookContentDivs = document.querySelectorAll(".book-content");
    const header = document.querySelector(".right-header");

    
    function handleBookClick(event) {
        const clickedContent = event.currentTarget;
        const allContents = document.querySelectorAll(".book-content");
        const isFirstRow = clickedContent.classList.contains("first-row");

        
        const isEnlarged = clickedContent.classList.contains("enlarged");

       
        allContents.forEach(content => {
            content.style.transition = "none";
            content.style.transform = "scale(1)";
            content.style.opacity = "1";
            content.style.zIndex = "auto"; 
            if (!isFirstRow && content !== clickedContent) {
                content.style.opacity = "0.5"; 
            }
        });

        
        if (isFirstRow) {
            header.style.opacity = isEnlarged ? "1" : "0.5";
        }

        
        if (!isEnlarged) {
            clickedContent.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            clickedContent.style.transform = "scale(1.5)";
            clickedContent.style.opacity = "1";
            clickedContent.classList.add("enlarged");
            clickedContent.style.zIndex = "9999"; 
        } else {
            
            allContents.forEach(content => {
                content.style.transition = "none";
                content.style.transform = "scale(1)";
                content.style.opacity = "1";
                content.classList.remove("enlarged");
                content.style.zIndex = "auto"; 
            });
            
            header.style.opacity = "1";
        }
    }

    
    bookContentDivs.forEach(content => {
        content.addEventListener("click", handleBookClick);
    });
});
