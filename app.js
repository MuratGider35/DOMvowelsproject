const hesapla = document.querySelector(".btn");
const input = document.querySelector("#vowels");

hesapla.addEventListener("click", () => {
  function getVowels(str) {
    let vowelsCount = 0;
    let string = str.toString();
    for (let i = 0; i <= string.length - 1; i++) {
      if (
        string.charAt(i) == "a" ||
        string.charAt(i) == "e" ||
        string.charAt(i) == "i" ||
        string.charAt(i) == "o" ||
        string.charAt(i) == "u"
      ) {
        vowelsCount += 1;
      }
    }
    return `${vowelsCount}
     `;
  }

  let sergileme = document.querySelector("p");
  if (!input.value) {
    alert("lütfen bir şeyler yazınız");
  } else {
    sergileme.className = "yazı";
    sergileme.innerHTML = `There are ${getVowels(input.value)} vowels in ${
      input.value
    } `;
  }
});
