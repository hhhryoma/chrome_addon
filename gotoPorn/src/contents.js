// ストレージから引数のキーに対応する値を取得する
const getData = (key) => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(key, (result) => {
      resolve(result[key])
    })
  })
}

window.onload = async function(){
  const rate = await getData("rate");
  const url = await getData("url");
  // URLが指定されていない場合は終了
  if(url === ""){
    return;
  }
  // 上書き後のURLアクセス時には戻るボタン無効化
  if(document.URL.match(url)) {
    history.pushState(null, null, location.href);
    window.addEventListener("popstate", (element) => {
      history.go(1);
    })
    return;
  }
  // URLを上書きするか判定
  if(Math.floor(Math.random()*100) > rate) {
    return;
  }
  
  let aRefs = document.querySelectorAll('a');

  if(aRefs === null){
    console.log("はい終わり");
    return;
  }
  // ページのaタグの遷移先を上書きしていく
  for(const a_ref of aRefs){
    a_ref.addEventListener('click', event => {
      a_ref.setAttribute("href", url)
    });
  }
};
