
window.onload = function(){
  const button = document.querySelector('button');
  console.log(button);
  if(!button){
    return;
  }
  button.addEventListener('click', event => {
    window.alert("のび太さんのエッチーーー！！");
  });
  // window.alert("read")
};

// window.onload = () => {
//   const button = document.querySelector('button');
//   console.log(button);
//   if(!button){
//     return;
//   }
//   button.addEventListener('click', event => {
//     window.alert("のび太さんのエッチーーー！！");
//   });
//   // window.alert("read")
// };