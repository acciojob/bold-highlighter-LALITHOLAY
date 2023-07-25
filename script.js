function highlight() {
  const boldWords = document.getElementsByTagName('strong');
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'green';
  }
}

function return_normal() {
  const boldWords = document.getElementsByTagName('strong');
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'black';
  }
}

const highlightLink = document.getElementById('highlightLink');
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);

