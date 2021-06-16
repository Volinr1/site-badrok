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