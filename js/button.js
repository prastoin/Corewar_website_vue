"use strict";
import galerie_img from "./script";
import { Transform } from "stream";

let buttons = [
  document.getElementById("left"),
  document.getElementById("right")
];

function deal_button(l_r, galerie_img) {
  console.log(`Actuellement sur l'onglet :${galerie_img[3]}`);

  /* changing own galerie index*/
  l_r = l_r ? 1 : -1;
  galerie_img[galerie_img[3]].index =
    (galerie_img[galerie_img[3]].index + l_r) % 3;
  while (galerie_img[galerie_img[3]].index < 0)
    galerie_img[galerie_img[3]].index +=
      galerie_img[galerie_img[3]].imgs.length;
  console.log(`new image num :${galerie_img[galerie_img[3]].index}`);

  /* clearing curr branch galerie */

  for (let i = 0; i < galerie_img[galerie_img[3]].imgs.length; i++)
    galerie_img[galerie_img[3]].imgs[i].style.display = "none";
  /* displaying the good one*/
  galerie_img[galerie_img[3]].imgs[
    galerie_img[galerie_img[3]].index
  ].style.display = "block";
}

for (let i = 0; i < buttons.length; i++)
  buttons[i].addEventListener("click", event => deal_button(i, galerie_img));
