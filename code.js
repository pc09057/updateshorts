const download_box = document.querySelector(".box"),
download_text = document.querySelector(".bar"),
download_btn = document.querySelector(".download a");
download_btn.addEventListener("click", progress);
var i = 0;
function progress() {
if (i == 0) {
i = 1
var elem = document.getElementById("text");
var load = document.getElementById("download");
var downloaded = document.getElementById("active");
var width = -1;
var id = setInterval(frame, 100)
function frame() {
if (width >= 100){
clearInterval(id);
i = 0;
downloaded.innerHTML = "<i class='bx bxs-check-circle' ></i>Update completed";
elem.classList.remove("active");
elem.classList.add("premium");
load.classList.add("done");
downloaded.style.background = "gray";
function download(fileUrl, fileName) {
var a = document.createElement("a");
a.href = fileUrl;
a.setAttribute("download", fileName);
a.click();
}
download("https://www.tiktok.com")
} else{
width++;
load.style.width = width + "%";
elem.innerHTML = width + "%";
downloaded.innerHTML = "<i class='bx bxs-cloud-download bx-flashing' ></i>Updating";
elem.classList.add("active");
elem.classList.remove("premium");
load.classList.add("show");
load.classList.remove("done");
downloaded.style.background = "gray";
}
}
}
}
