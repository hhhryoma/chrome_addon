const getData = (key) => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(key, (result) => {
      resolve(result[key])
    })
  })
}

window.onload = async function(){
  const rate = await getData("rate");
  console.log(`rate: ${rate}`);
  if(Math.floor(Math.random()*100) > rate) {
    return;
  }
  
  let aRefs = document.querySelectorAll('a');
  const url = await getData("url");

  if(aRefs === null){
    console.log("はい終わり");
    return;
  }
  for(const a_ref of aRefs){
    a_ref.addEventListener('click', event => {
      a_ref.setAttribute("href", url)
    });
  }
  history.pushState(null, null, location.href);
  window.addEventListener("popstate", (element) => {
    history.go(1)
  })
};
