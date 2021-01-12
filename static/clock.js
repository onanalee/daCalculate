
// START CLOCK SCRIPT

Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r) ;
    return r;
};

function updateClock() {
    let now = new Date();
    let sec = `${now.getSeconds()}`;
    let min = `${now.getMinutes()}`;
    let hou = `${now.getHours()}`;
    let mo = now.getMonth();
    let dy = now.getDate();
    let yr = now.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let tags = ["mon", "d", "y", "h", "m", "s"];
    let corr = [months[mo], dy, yr, hou.padStart(2,'0'), min.padStart(2,'0'), sec.padStart(2,'0')];
    for (let i = 0; i < tags.length; i++)
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}