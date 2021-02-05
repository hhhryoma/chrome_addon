const getStorageData = (key) => {
  return new Promise(resolve => {
    resolve(chrome.storage.sync.get(key, (result) => {
      return result.key;
    }))
  })
}

const asyncGetStorageData = async (key) => {
  const ret = await getStorageData(key);
  return ret;
}

window.onload = function(){
  let rate = 0;
  asyncGetStorageData("rate").then(result => {
    console.log(result)
  })
  // const isGoto = chrome.storage.sync.get(["rate"], (result) => {
  //   const rnd = Math.floor(Math.random()*100)
  //   console.log(`rate: ${result.rate}  rand: ${rnd}`);
  //   return rnd > result.rate
  // })
  // console.log(isGoto)
  // if(!isGoto){
  //   return;
  // }
  console.log(`rate: ${rate}`);
  if(Math.floor(Math.random()*100) > rate) {
    return;
  }
  
  let a_refs = document.querySelectorAll('a');
  let url = "https://google.com"


  console.log(a_refs);
  if(a_refs === null){
    console.log("はい終わり")
    return;
  }
  for(const a_ref of a_refs){
    a_ref.addEventListener('click', event => {
      a_ref.setAttribute("href", url)
    });
  }
};
