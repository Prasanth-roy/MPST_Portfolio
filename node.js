document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});


const text = "Aspiring Frontend Developer | JavaScript Enthusiast";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        document.querySelector(".cursor").style.display = "none"; // Hide cursor after typing
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const text = " Aspiring Frontend Developer | JavaScript Enthusiast | Muscian | Student ||";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            document.querySelector(".cursor").style.display = "none"; // Hide cursor after typing
        }
    }

    typeEffect(); // Call function after DOM loads
});

function openCertificate(imageSrc) {
    document.getElementById("popupImage").src = imageSrc;
    document.getElementById("certificatePopup").style.display = "flex";
}

function closeCertificate() {
    document.getElementById("certificatePopup").style.display = "none";
}

     function searchContent() {
        let input = document.getElementById("searchBox").value.toLowerCase();
        let sections = document.querySelectorAll("section"); // Searching entire sections
    
        sections.forEach(section => {
            let text = section.innerText.toLowerCase();
            if (text.includes(input)) {
                section.style.backgroundColor = "yellow"; // Highlight result
            } else {
                section.style.backgroundColor = ""; // Remove highlight if not matched
            }
        });
    }

document.addEventListener("DOMContentLoaded", function() {
    // Show the loading animation
    const loadingAnimation = document.getElementById('loading-animation');
    const content = document.getElementById('content');

    // Set a timeout to hide the loading animation and show the content after 3 seconds
    setTimeout(function() {
        loadingAnimation.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // 3000 milliseconds = 3 seconds
});
