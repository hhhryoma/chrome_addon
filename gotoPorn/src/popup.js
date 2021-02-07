let rate = document.getElementById("rate");
let url = document.getElementById("url");

chrome.storage.sync.get("rate", (data) => {
    rate.value = data.rate;
});

chrome.storage.sync.get("url", (data) => {
    url.value = data.url;
});

// URL上書きの確率設定イベント
rate.onchange = (element) => {
    chrome.storage.sync.set({"rate": element.target.value});
}

// 上書くURLの設定用イベント
url.onchange = (element) => {
    chrome.storage.sync.set({"url": element.target.value});
}