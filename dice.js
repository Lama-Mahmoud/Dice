

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        rand();
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}