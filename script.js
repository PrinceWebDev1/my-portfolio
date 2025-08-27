let wrapper = document.querySelectorAll('.wrapper');
let notification = document.querySelectorAll('.notification');
console.log(wrapper);

console.log(notification);


for (let index = 0; index < wrapper.length; index++) {
    wrapper[index].addEventListener('mouseenter', () => {
        gsap.to(notification[index], { duration: 0.3, top : "-50px",ease: "elastic.out(1,0.5)", opacity : "100%" });
    })
    wrapper[index].addEventListener('mouseleave', () => {
        gsap.to(notification[index], { duration: 0.3, top : 10 ,ease: "elastic.out(1,0.5)",opacity : 0 });
    })

}