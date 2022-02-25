function checki() {
  let scrollHeight = Math.min(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let element = document.querySelector('.footer_warp');
  console.log(element); 
  if (window.innerHeight>scrollHeight) {
    element.classList.add('footer_btm');
  } else  {
    element.classList.remove('footer_btm');        
  } 
}     
window.onload = checki;
window.onresize = checki;
      
// function textInfo () {
//   return alert('Thanks You For Downloading')
// }