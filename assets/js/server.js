var url = "https://api.mcsrvstat.us/2/play.badrok.com:19132";
$.getJSON(url, function(r) {
 if(r.error){
    $('h2').html('Server Offline');
    $('#rest').html('Players Online: 0');
   return false;
       } else {
      $('h2').html('tws-mc.com');  
      $('#rest').html('Players Online: '+r.players.online+'/'+r.players.max);
 }   
});
function copyText(htmlElement)
{
    if(!htmlElement){
        return;
    }
    let elementText= htmlElement.innerText;
    
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
     swal("You copied the ip!","Come on our server and have fun","success", "Close", 1500);


}

document.querySelector('#copy-text-btn').onclick = 
function ()
{
    copyText(document.querySelector('#text'));
}
$(document).ready(function () {
    var discord = localStorage.getItem('hide-discord');
    if (discord != 1) {
        $('.discord-widget').addClass('active');
    }
});

$(document).on('click', '#close', function () {
    console.log("sads");
    Swal.fire({
        title: 'Are you sure you want to hide discord?',
        text: "You will need to reload the page to unhide discord",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
            localStorage.setItem('hide-discord', 1);
            $('.discord-widget').removeClass('active').slow();
        }
    })
})
(function() {
    "use strict"; // Start of use strict

    var mainNav = document.querySelector('#mainNav');

    if (mainNav) {

        var navbarCollapse = mainNav.querySelector('.navbar-collapse');

        if (navbarCollapse) {

            var collapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });

            var navbarItems = navbarCollapse.querySelectorAll('a');

            // Closes responsive menu when a scroll trigger link is clicked
            for (var item of navbarItems) {
                item.addEventListener('click', function(event) {
                    collapse.hide();
                });
            }
        }

        // Collapse Navbar
        var collapseNavbar = function() {

            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if (scrollTop > 100) {
                mainNav.classList.add("navbar-shrink");
            } else {
                mainNav.classList.remove("navbar-shrink");
            }
        };
        // Collapse now if page is not at top
        collapseNavbar();
        // Collapse the navbar when page is scrolled
        document.addEventListener("scroll", collapseNavbar);

        // Hide navbar when modals trigger
        var modals = document.querySelectorAll('.portfolio-modal');

        for (var modal of modals) {

            modal.addEventListener('shown.bs.modal', function(event) {
                mainNav.classList.add('d-none');
            });

            modal.addEventListener('hidden.bs.modal', function(event) {
                mainNav.classList.remove('d-none');
            });
        }
    }

})(); // End of use strict

if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
	});
}

document.addEventListener('DOMContentLoaded', function() {

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});
}, false);
