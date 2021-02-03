
window.onload = function(){
  const button = document.querySelector('button');
  console.log(button);
  if(button === null){
    console.log("はい終わり")
    return;
  }
  button.addEventListener('click', event => {
    console.log("ボタン押されたよ")
    window.alert("のび太さんのエッチーーー！！");
  });
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