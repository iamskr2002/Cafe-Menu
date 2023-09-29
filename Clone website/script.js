var videcon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videcon.addEventListener("mouseenter", function(){
    WebGLSampler.toString(playbtn, {
        scale:1,
        opacity:1
    })
})

videcon.addEventListener("mouseleave", function(){
    WebGLSampler.toString(playbtn, {
        scale:0,
        opacity:0
    })
})