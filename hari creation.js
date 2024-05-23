let categoryCard = document.querySelectorAll(".categoryCard");
let shopcard = document.querySelectorAll(".shopcard");//categorycard wali class ko y queryselectorall se terget krga isalye y use hota h//
//contact
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;

    if (hash === '#Contact') {
        // Hide all sections
        document.querySelectorAll("section").forEach(section => { // Show only the contact section
            section.style.display = "none";
        });
       
        document.getElementById("Contact").style.display = "block";

        // Add active class to the contact link
        document.querySelector("a[href='#Contact']").classList.add("activeLink");
    } else {
        // Show all sections if no specific hash is provided
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "block";
        });
    }
});
//category
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;

    if (hash === '#Category') {
        // Hide all sections
        document.querySelectorAll("section").forEach(section => { // Show only the contact section
            section.style.display = "none";
        });
       
        document.getElementById("Category").style.display = "block";

        // Add active class to the contact link
        document.querySelector("a[href='#Category']").classList.add("activeLink");
    } else {
        // Show all sections if no specific hash is provided
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "block";
        });
    }
});
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  });
 
 