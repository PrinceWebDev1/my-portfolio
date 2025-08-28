let wrapper = document.querySelectorAll('.wrapper');
let notification = document.querySelectorAll('.notification');

for (let index = 0; index < wrapper.length; index++) {
    wrapper[index].addEventListener('mouseenter', () => {
        gsap.to(notification[index], { duration: 0.3, top: "-50px", ease: "elastic.out(1,0.5)", opacity: "100%" });
    })
    wrapper[index].addEventListener('mouseleave', () => {
        gsap.to(notification[index], { duration: 0.3, top: 10, ease: "elastic.out(1,0.5)", opacity: 0 });
    })
}

function startupAnimation() {
    let welcome = document.querySelector('.welcome');
    let to = document.querySelector('.to');
    let my = document.querySelector('.my');
    let portfolio = document.querySelector('.portfolio');
    let startupAnimation = document.querySelector('.startup-animation');


    let tl = gsap.timeline();
    tl.from(welcome, { duration: 0.3, y: 200, ease: "power4.out", opacity: "0" })
        .from(to, { duration: 0.3, y: 200, ease: "power4.out", opacity: "0" })
        .from(my, { duration: 0.3, y: 200, ease: "power4.out", opacity: "0" })
        .from(portfolio, { duration: 0.3, y: 200, ease: "power4.out", opacity: "0" })
        .to(startupAnimation, { duration: 0.5, top : '-1024px', ease: "power4.out" })


}

startupAnimation();
