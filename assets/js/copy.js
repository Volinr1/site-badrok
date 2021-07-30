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
