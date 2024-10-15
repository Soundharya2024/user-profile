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
      tabChange(activeTab);
    });
  });  
}

function tabChange(activeTab) {
  activeTab = activeTab.toLowerCase();
  document.getElementById("user-projects-container").classList.add("d-none");
  document.getElementById("user-overview-container").classList.add("d-none");
  document.getElementById("user-campaigns-container").classList.add("d-none");
  document.getElementById("user-documents-container").classList.add("d-none");
  document.getElementById("user-followers-container").classList.add("d-none");
  document.getElementById("user-activity-container").classList.add("d-none");
  document.getElementById(`user-${activeTab}-container`).classList.remove("d-none");
}
