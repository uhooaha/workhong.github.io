
const openImg = document.getElementById("popup-data")
const popup = document.querySelector(".box-browser");
const overlay = popup.querySelector(".bg-dimmed");
const closeBtn = popup.querySelector(".btn-arr");
const openPopup = () => {
    popup.classList.remove("popup-hidden")
}

const closePopup = () => {
    popup.classList.add("popup-hidden")
}

overlay.addEventListener("click", closePopup);
closeBtn.addEventListener("click", closePopup);
openImg.addEventListener("click", openPopup)