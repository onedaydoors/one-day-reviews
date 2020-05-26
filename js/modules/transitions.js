import { gsap } from 'gsap';

  function IndexAnimation() {
    var tl = gsap.timeline();
    tl.from('.animate-in',{duration: .5, y:50, opacity:0, ease: 'power1.out', stagger: .2});
  }

  export { IndexAnimation };