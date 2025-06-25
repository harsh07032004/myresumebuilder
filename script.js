document.querySelector('form').addEventListener('submit',(event)=>
{
event.preventDefault();
}
)
document.querySelector('#submit').addEventListener('click',()=>
{
    window.location.href="/page2.html";
})
document.querySelector("#Signup").addEventListener('click',()=>
{
    window.location.href="/signup.html";
})

