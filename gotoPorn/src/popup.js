let rate = document.getElementById("rate");
let url = document.getElementById("url");

chrome.storage.sync.get("rate", (data) => {
    rate.value = data.rate;
});

chrome.storage.sync.get("url", (data) => {
    url.value = data.url;
});

rate.onchange = (element) => {
    chrome.storage.sync.set({"rate": element.target.value});
}

url.onchange = (element) => {
    chrome.storage.sync.set({"url": element.target.value});
}