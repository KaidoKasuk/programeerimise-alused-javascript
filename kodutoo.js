let vanus = window.prompt("Kui vana sina oled?");

if (isNaN(vanus)) {
  window.prompt("Kui vana sina oled?");
} else if (vanus >= 7 && vanus <= 16)
  alert(" sa oled põhikooli õpilane ja sina sööd kell 10");
else if (vanus >= 17 && vanus <= 20) {
  alert("sa oled gümnaasiumi õpilane ja sina sööd kell 11");
} else if (vanus > 20 && vanus < 120) {
  alert("sa oled täiskasvanu ja sina sööd kell 12");
} else if (vanus < 7 && vanus >= 0) {
  alert("sa käid veel lasteaias...");
} else if (vanus > 120) {
  alert("Sa ei ole nii vana");
  window.prompt("Kui vana sina oled?");
} else {
  alert("See pole õige vanus");
  window.prompt("Kui vana sina oled?");
}
