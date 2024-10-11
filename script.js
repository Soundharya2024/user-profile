$(".dropdown-menu li a").click(function(){
  const selText = $(this).text();
  $(this).parents('.dropdown').find('.dropdown-bs-toggle').html(selText + ' <i class="d-inline-block bi bi-chevron-down ms-1"></i>');

  $(this).parents('.dropdown-menu').find('a').css({"background-color":"#FFFFFF", "color":"#4B5675"});
  $(this).parents('.dropdown-menu').find("i:not(.invisible)").toggleClass("invisible");

  $(this).css({"background-color":"#F9F9F9", "color":"#1B84FF"});
  $(this).find('i').toggleClass("invisible");
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.addEventListener("DOMContentLoaded", () => {
  tabNavEvent();
});

function tabNavEvent () {
  document.querySelectorAll("body.app-body>nav.app-container .nav-link").forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      document.querySelector("body.app-body>nav.app-container .nav-link.active").classList.remove("active");
      e.target.classList.add("active");
      const activeTab = document.querySelector("body.app-body>nav.app-container .nav-link.active").textContent;
    
      if(activeTab === "Overview") {
        document.getElementById("user-overview-container").classList.remove("d-none");
        document.getElementById("user-projects-container").classList.add("d-none");
      } else if (activeTab === "Projects") {
        document.getElementById("user-projects-container").classList.remove("d-none");
        document.getElementById("user-overview-container").classList.add("d-none");
      }
    });
  });  
}
