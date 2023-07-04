$(document).ready(function(){ 
  let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
        if(isMobile != true){
 /* anim principal cont1 */
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('.p2GralCont').style.height= "0%")
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('.p1GralCont').style.height= "100%")
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('.p2GralCont').style.height= "50%")
   document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('.p1GralCont').style.height= "50%")
   document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('.t1').style.opacity= "1")
   document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('.t2').style.opacity= "1")
   
   /* anim principal cont1 txt */
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('.t1').style.opacity= "0")
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('.t2').style.opacity= "0")
 
 /* anim txt FadeOut */
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#textCowork').classList.add("animate__fadeOutUp"))
 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#textEvent').classList.add("animate__fadeOutDown"))

 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#textCowork').classList.add("animate__fadeOutUp"))
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#textEvent').classList.add("animate__fadeOutDown"))
 
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#up').classList.add("animate__fadeOutUpBig"))
 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#down').classList.add("animate__fadeOutDownBig"))
 
 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#up').classList.add("animate__fadeOutUpBig"))
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#down').classList.add("animate__fadeOutDownBig")) 

 /* anim txt remove FadeIn */
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#textCowork').classList.remove("animate__fadeInDown"))
 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#textEvent').classList.remove("animate__fadeInUp"))
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#textEvent').classList.remove("animate__fadeInUp"))
 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#textCowork').classList.remove("animate__fadeInDown"))
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#down').classList.remove("animate__fadeInDown"))
 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#up').classList.remove("animate__fadeInUp"))
 document.querySelector(".p1GralCont").addEventListener('mouseenter', () => document.querySelector('#up').classList.remove("animate__fadeInUp"))
 document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('#down').classList.remove("animate__fadeInDown"))
 
 /* anim txt remove FadeOut */
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#textCowork').classList.remove("animate__fadeOutUp"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#textEvent').classList.remove("animate__fadeOutDown"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#textCowork').classList.remove("animate__fadeOutUp"))
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#textEvent').classList.remove("animate__fadeOutDown"))
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#up').classList.remove("animate__fadeOutUpBig"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#down').classList.remove("animate__fadeOutDownBig"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#up').classList.remove("animate__fadeOutUpBig"))
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#down').classList.remove("animate__fadeOutDownBig"))
 
 /* anim txt FadeIn */
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#textCowork').classList.add("animate__fadeInDown"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#textEvent').classList.add("animate__fadeInUp"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#textCowork').classList.add("animate__fadeInDown"))
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#textEvent').classList.add("animate__fadeInUp"))
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#down').classList.add("animate__fadeInDown"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#up').classList.add("animate__fadeInUp"))
 document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('#down').classList.add("animate__fadeInDown"))
 document.querySelector(".p1GralCont").addEventListener('mouseleave', () => document.querySelector('#up').classList.add("animate__fadeInUp"))

/* anim principal cont2 */
   document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('.p1GralCont').style.height= "0%")
   document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('.p2GralCont').style.height= "100%")
   document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('.t1').style.opacity= "0")
   document.querySelector(".p2GralCont").addEventListener('mouseenter', () => document.querySelector('.t2').style.opacity= "0")
   document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('.p1GralCont').style.height= "50%")
   document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('.p2GralCont').style.height= "50%")
   document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('.t1').style.opacity= "1")
   document.querySelector(".p2GralCont").addEventListener('mouseleave', () => document.querySelector('.t2').style.opacity= "1")


        }
})