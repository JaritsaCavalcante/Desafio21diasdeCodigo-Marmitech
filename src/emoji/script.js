const emojis = [ 
  '🚀',
  '😀',
  '😃',  
  '😄',  
  '😁',  
  '😆',  
  '😅',  
  '🤣',  
  '😂',  
  '🙂',  
  '🙃',  
  '🫠',  
  '😉',  
  '😊',
  '😇',  
  '🥰', 
  '😍',
  '🤩',  
  '😘', 
  '😗',  
  '😚', 
  '😙',  
  '🥲',  
  '😋',  
  '😛',  
  '😜',  
  '🤪', 
  '😝',  
  '🤑',  
  '🤗',  
  '🤭',  
  '🫢',  
  '🫣',  
  '🤫',  
  '🤔', 
  '🫡',  
  '🤐',  
  '🤨',  
  '😐️',  
  '😑',  
  '😶',  
  '🫥',  
  '😶‍🌫️',  
  '😏',  
  '😒',  
  '🙄',  
  '😬',  
  '😮‍💨',  
  '🤥',  
  '😌', 
  '😔',  
  '😪',  
  '🤤',  
  '😴',  
  '😷',  
  '🤒',  
  '🤕',  
  '🤢',  
  '🤮',  
  '🤧',  
  '🥵', 
  '🥶',  
  '🥴',  
  '😵',  
  '😵‍💫', 
  '🤯',  
  '🤠',  
  '🥳', 
  '🥸',  
  '😎', 
  '🤓',  
  '🧐',  
  '😕',  
  '🫤', 
  '😟',  
  '🙁', 
  '☹️', 
  '😮', 
  '😯',  
  '😲',  
  '😳',  
  '🥺',
  '🥹',  
  '😦',  
  '😧',  
  '😨',  
  '😰',  
  '😥',  
  '😢',  
  '😭',  
  '😱',  
  '😖',  
  '😣',  
  '😞',  
  '😓',  
  '😩',  
  '😫',  
  '🥱',  
  '😤',  
  '😡',  
  '😠',  
  '🤬',  
  '😈',  
  '👿',  
  '💀',  
  '☠️',  
  '💩',  
  '🤡',  
  '👹',  
  '👺',  
  '👻',  
  '👽️',  
  '👾', 
  '🤖',  
  '😺',  
  '😸',  
  '😹',  
  '😻',
  '😼',  
  '😽',  
  '🙀',  
  '😿',  
  '😾',  
  '🙈',  
  '🙉',  
  '🙊',  
  '💋', 
  '💌',  
  '💘',  
  '💝',  
  '💖',  
  '💗',  
  '💓',  
  '💞',  
  '💕',  
  '💟',  
  '❣️',  
  '💔',  
  '❤️‍🔥',  
  '❤️‍🩹',  
  '❤️',  
  '🧡',  
  '💛',  
  '💚',  
  '💙',  
  '💜',  
  '🤎',  
  '🖤',  
  '🤍',  
  '💯',  
  '💢',  
  '💥',  
  '💫'
]

const wrapperEmojis = document.querySelector('.wrapper-emojis')

function showEmojis() {
  for(let i = 0; i < emojis.length; i++) {
    wrapperEmojis.innerHTML += `<span>${emojis[i]}</span>` 
  }
}

showEmojis()

const allSpans = document.querySelectorAll('.wrapper-emojis span')
const spans = Array.from(allSpans)

const display = document.querySelector('.emoji')

function selectEmoji() {
  spans.map((span) => {
    span.addEventListener('click', () => {
      display.innerHTML = span.innerHTML;
    })
  })
}

selectEmoji()




function showMessage() {
  document.querySelector(".myTooltip").classList.add('tooltiptext');
  setTimeout(() => {
    document.querySelector(".myTooltip").classList.remove('tooltiptext');
  }, "2000")
}

function showTooltip() {
  passwordShow.select();
  passwordShow.setSelectionRange(0, 20);
  navigator.clipboard.writeText(passwordShow.value);
  showMessage()  
}

const btnCopy = document.querySelector('.copy')

btnCopy.addEventListener('click', () => {
  if ( passwordShow.value !== '') {
    showTooltip()
  } else return
})