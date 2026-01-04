let cache = [];

function addProcess() {
    const capacity = document.getElementById("capacity").value;
    const process = document.getElementById("process").value;

    if (capacity === "" || process === "") {
        alert("Please enter capacity and process");
        return;
    }

    const cap = parseInt(capacity);

    // If process already exists → remove it
    const index = cache.indexOf(process);
    if (index !== -1) {
        cache.splice(index, 1);
    }

    // Add process to front (MRU)
    cache.unshift(process);

    // If capacity exceeded → remove LRU
    if (cache.length > cap) {
        cache.pop();
    }

    document.getElementById("process").value = "";
    renderCache();
}

function renderCache() {
    const container = document.getElementById("cacheContainer");
    container.innerHTML = "";

    cache.forEach(item => {
        const div = document.createElement("div");
        div.className = "cache-item";
        div.innerText = item;
        container.appendChild(div);
    });
}
