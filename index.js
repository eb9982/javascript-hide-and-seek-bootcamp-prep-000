function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  const element = document.getElementById('nested')
  return element.children[0]
}
function deepestChild() {
  var element = document.getElementById('grand-node')
  var next = element.children[0]
  while (next) {
    element = next
    next = element.children[0]
  }
  if(next = 'undefined'){
    return element
  }
}
function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
     list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}
