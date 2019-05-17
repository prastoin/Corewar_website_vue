"use strict";

let galerie_img = [
  {
    imgs: [
      document.getElementById("ASM_0"),
      document.getElementById("ASM_1"),
      document.getElementById("ASM_2")
    ],
    index: 0
  },
  {
    imgs: [
      document.getElementById("VM_0"),
      document.getElementById("VM_1"),
      document.getElementById("VM_2")
    ],
    index: 0
  },
  {
    imgs: [
      document.getElementById("CHAMP_0"),
      document.getElementById("CHAMP_1"),
      document.getElementById("CHAMP_2")
    ],
    index: 0
  },
  0
];

const tabs = [
  document.getElementById("ASM_TAB"),
  document.getElementById("VM_TAB"),
  document.getElementById("CHAMP_TAB")
];

function clear_galerie(galerie_img, curr) {
  /* clearing others tabs*/
  console.log(`ma galerie contient ${galerie_img.length} branches`);
  for (let i = 0; i < galerie_img.length - 1; i++) {
    if (i != curr)
      for (let j = 0; j < galerie_img[i].imgs.length; j++)
        galerie_img[i].imgs[j].style.display = "none";
  }

  /*displaying good image*/
  for (let i = 0; i < galerie_img[curr].imgs.length; i++) {
    if (i != galerie_img[curr].index)
      galerie_img[curr].imgs[i].style.display = "none";
    else galerie_img[curr].imgs[i].style.display = "block";
  }
}

function deal_click(galerie_img, num) {
  console.log(`j ai cliquer sur l'onglet numero: ${num}`);
  galerie_img[3] = num;
  clear_galerie(galerie_img, galerie_img[3]);
}

for (let i = 0; i < tabs.length; i++)
  tabs[i].addEventListener("click", event => deal_click(galerie_img, i));
/*for (const [i, tab] of tabs.entries())
	tab.addEventListener('click', (event) => deal_click(event, i));*/

export default galerie_img;
