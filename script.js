document.addEventListener("DOMContentLoaded", () => {
    alert("Website berhasil dimuat!");
    const title = document.querySelector("h1");
    const nav  =document.querySelector("nav");
    const mainContet = document.querySelector("main");
    const aside = document.querySelector("aside");
    const header = document.querySelector("header");
    const firstParagraph =  document.querySelector("article p")

    title.textContent = "💕Belajar Javascrip Interaktif - Interaksi Pertama!💕";
    title.addEventListener("click" , () => {
        nav.classList.toggle("show-nav");
    });

    document.addEventListener("keydown", (Event) => {
        if(Event.key === "d") {
            document.body.classList.toggle("dark");
        }
    });

    let count = 0;
    mainContet.addEventListener("click", () => {
        count++;
        aside.textContent = `Kamu klik konten ini sebanyak ${count} kali`;
    });

    const warnaHeader = ["#00ffddca", "#883d81ff", "#12c0a9ff", "#4297a4ff", "#ea52a3ff"];
    let inndexWarna = 0;

    header.addEventListener("click", () => {
        inndexWarna = (inndexWarna + 1) % warnaHeader.length;
        header.style.backgroundColor = warnaHeader[inndexWarna];
    });

    let fontBesar = false;
    
    document.addEventListener("keydown", (Event) => {
        if (Event.key === "f") {
            fontBesar = !fontBesar;
    document.body.style.fontSize = fontBesar ? "20px" : "16px"        
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.style.backgroundColor = "#ffe4f2";
        } else {
            document.body.style.backgroundColor = "";
        }
    });

    if (firstParagraph) {
        firstParagraph.textContent = "Belajar javascript";
    }
});