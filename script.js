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

  /*Followers Tab*/
  followBtnAction(); 
  showMoreBtnAction();
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

function followBtnAction() {
  document.querySelectorAll("#user-followers-container .card .follow-status-btn").forEach((followBtn) => {
      followBtn.addEventListener("click", (e) => {
          const followStatusBtn = e.currentTarget;
          const followStatusIcon = e.currentTarget.querySelector("i.btn-icon");
          const followSpinnerIcon = e.currentTarget.querySelector("span.spinner-icon");
          const followStatusTextEle = e.currentTarget.querySelector(".follow-status-text");
          const followStatus = e.currentTarget.dataset.followStatus;
          if (followStatus === "follow") {
              followStatusTextEle.textContent = "Please wait...";
              followSpinnerIcon.classList.remove("d-none");
              followStatusIcon.classList.remove("bi-plus");
              followStatusBtn.dataset.followStatus = "f-loading";
              setTimeout(() => {
                  followStatusIcon.classList.add("bi-check");
                  followSpinnerIcon.classList.add("d-none");
                  followStatusTextEle.textContent = "Following";
                  followStatusBtn.dataset.followStatus = "following";
              }, 2000);
          } else if (followStatus === "following") {
              followStatusTextEle.textContent = "Please wait...";
              followSpinnerIcon.classList.remove("d-none");
              followStatusIcon.classList.remove("bi-check");
              followStatusBtn.dataset.followStatus = "fg-loading";
              setTimeout(() => {
                  followStatusIcon.classList.add("bi-plus");
                  followSpinnerIcon.classList.add("d-none");
                  followStatusTextEle.textContent = "Follow";
                  followStatusBtn.dataset.followStatus = "follow";
              }, 2000);
          }
      });
  });
}

function showMoreBtnAction(){
  document.querySelector("#user-followers-container>div:last-child>button").addEventListener("click", (e) => {
    document.querySelectorAll("#user-followers-container>.row>.d-none").forEach((profileCard) => {
      profileCard.classList.remove("d-none");
    });
    e.currentTarget.classList.add("d-none");
  });
}