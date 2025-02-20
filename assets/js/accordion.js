const acco = document.querySelectorAll(".acco-items");

const openAcco = (accoItem) => {
    const content = accoItem.querySelector(".acco-items__contents");
    accoItem.classList.add("acco-active");
    content.style.maxHeight = content.scrollHeight + "px";
    
};

const closeAcco = (accoItem) => {
    const content = accoItem.querySelector(".acco-items__contents");
    accoItem.classList.remove("acco-active");
    content.style.maxHeight = null;
};

acco.forEach((acco) => {
    const title = accoItem.querySelector(".acco-items__title");
    const content = accoItem.querySelector(".acco-items__contents");

    title.onclick = () => {
        if(content.style.maxHeight){
            closeAcco(accoItem);
        }else {
            acco.forEach((accoItem) => closeAcco(accoItem));
            openAcco(accoItem);
        };
    };
});