
const menuItems = document.querySelectorAll(".menu-li");
const dropdowns = document.querySelectorAll(".dropdown");

menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        dropdowns.forEach(d => d.classList.remove("show"));
        if(item.textContent.includes("Pra você")) {
            document.getElementById("pra-voce").classList.add("show");
        } else if (item.textContent.includes("O GoBank")){
            document.getElementById("o-gobank").classList.add("show");
        } else if (item.textContent.includes("Atendimento")) {
            document.getElementById("atendimento").classList.add("show");
        }
    });
});

document.querySelector("header").addEventListener("mouseleave", () => {
    dropdowns.forEach(d => d.classList.remove("show"));
});
