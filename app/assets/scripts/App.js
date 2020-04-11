import '../styles/styles.css'
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/revealonscroll"
import StickyHeader from "./modules/stickyheader"

let mobileMenu= new MobileMenu();

let stickyheader= new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);

new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

if (module.hot) {
  module.hot.accept()
}