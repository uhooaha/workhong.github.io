// const acco = document.querySelectorAll(".acco-items");


// const openAcco = (accoItem) => {
//     const content = accoItem.querySelector(".acco-items__contents");
//     accoItem.classList.add("acco-active");
//     content.style.maxHeight = content.scrollHeight + "px";
    
// };

// const closeAcco = (accoItem) => {
//     const content = accoItem.querySelector(".acco-items__contents");
//     accoItem.classList.remove("acco-active");
//     content.style.maxHeight = null;
// };

// acco.forEach((accoItem) => {
//     const title = accoItem.querySelector(".acco-items__title");
//     const content = accoItem.querySelector(".acco-items__contents");

//     title.onclick = () => {
//         if(content.style.maxHeight){
//             closeAcco(accoItem);
//         }else {
//             acco.forEach((accoItem) =>  closeAcco(accoItem));
//             openAcco(accoItem);
//         }
//     }
// })

const acco = document.querySelectorAll(".acco-items");
console.log("acco elements:", acco, "length:", acco.length);

acco.forEach((accoItem, index) => {
  const title = accoItem.querySelector(".acco-items__title");
  const content = accoItem.querySelector(".acco-items__contents");
  console.log(`Item ${index}:`, {accoItem, title, content});
  
  if (title) {
    title.onclick = () => {
      // 기존 코드
    };
  } else {
    console.error(`Title not found in item ${index}`);
  }
});