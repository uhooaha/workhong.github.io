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

acco.forEach((accoItem) => {
    const title = accoItem.querySelector(".acco-items__title");
    const content = accoItem.querySelector(".acco-items__contents");
    
    // title과 content가 모두 존재하는지 확인
    if (title && content) {
        title.onclick = () => {
            if(content.style.maxHeight){
                closeAcco(accoItem);
            }else {
                acco.forEach((item) => {
                    const itemContent = item.querySelector(".acco-items__contents");
                    if (itemContent) {
                        closeAcco(item);
                    }
                });
                openAcco(accoItem);
            }
        };
    }
});