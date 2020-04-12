import '../styles/styles.css'
import "lazysizes"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/revealonscroll"
import StickyHeader from "./modules/stickyheader"

let mobileMenu= new MobileMenu();

let stickyheader= new StickyHeader();

let modal;

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);

new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);


if (module.hot) {
  module.hot.accept()
}

document.querySelectorAll(".open-modal").forEach(el => {
	   el.addEventListener("click", e => {
		   
		   e.preventDefault()
		   if (typeof modal == "undefined"){
			   
			   import(/* webpackChunkName: "modal"*/"./modules/modal").then(x => {
			  modal = new x.default()
			  setTimeout(() => modal.openTheModal(), 20)
			   
		   }).catch(() => console.log("there was a problem"))
			   
			   
		   }else{
			   
			   modal.openTheModal()
			   
		   }


           
		   
	   })
	
})

