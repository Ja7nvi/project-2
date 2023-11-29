const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
})

gsap.from(".link", {
    stagger: .1,
    y: 50,
    duration: 1,
    opacity: 0

})
Shery.textAnimate(".two .headings h1" /* Element to target.*/ , {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});