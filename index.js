function addTransition(to){
    document.querySelector('body').className='transition'
    setTimeout(function(){
        console.log(document.body.getBoundingClientRect())
        window.location.href=to
    },2500)

}