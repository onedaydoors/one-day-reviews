import { gsap } from 'gsap';

  function workIndexAnimation() {
    var tl = gsap.timeline();
    tl.from('.block',{duration: .5, y:50, opacity:0, ease: 'power1.out', stagger: .2});
  }

  export { workIndexAnimation };