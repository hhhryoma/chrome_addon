let rate = document.getElementById("rate");

chrome.storage.sync.get("rate", (data) => {
    rate.value = data.rate;
});

rate.onchange = (element) => {
    window.alert("hello world");
    chrome.storage.sync.set({"rate": element.target.value})
}