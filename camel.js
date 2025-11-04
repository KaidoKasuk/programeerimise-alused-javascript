function camelToTitle(camel) {
  // Add space before every capital letter that follows a lowercase or number
  let title = camel.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Selgitus mis ln 3 on
  // replace() muudab terve stringi uueks stringiks, sisu jaoutus: .replace(pattern, replacement)
  // /sisu/ valib kogu stringi ulatuse ükskõik kui pikk string on
  // [a-z] suudab leida kõik tähed selles vahemikus, antud olukorras ka väiksed a kuni z, täpi tähti ei tunnista.
  // [A-Z] sama loogika
  // replace(pattern, replacement) pattern ehk ([a-z])([A-Z]) nt aZ
  // /g otsib terve stringi läbi mitte ei leia ainult esimese patterni
  // $1 ja $2: $1 ehk esimene osa patternis $2 teine osa
  // "$1 $2" vahel on " ", mida lisab matchi vahele.

  // stringi esimene char suureks ja lisab puutumata stringi teise poole juurde
  title = title.trim().charAt(0).toUpperCase() + title.trim().slice(1);

  return title;
}

document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("camel").value;
  const title = document.getElementById("title");

  title.textContent = camelToTitle(input);
});
