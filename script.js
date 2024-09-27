$(".dropdown-menu li a").click(function(){
  const selText = $(this).text();
  $(this).parents('.dropdown').find('.dropdown-bs-toggle').html(selText + ' <i class="d-inline-block bi bi-chevron-down ms-1"></i>');
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));