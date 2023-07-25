function highlight() {
  const boldWords = document.getElementsByTagName('strong');
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'green';
    boldWords[i].style.fontWeight = 'bold';
  }
}

function return_normal() {
  const boldWords = document.getElementsByTagName('strong');
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'black';
    boldWords[i].style.fontWeight = 'normal';
  }
}
