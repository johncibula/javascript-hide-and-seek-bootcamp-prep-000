function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget() {
  const target = document.getElementById('nested')
  return target
}
function increaseRankBy(n) {
  parseInt(n, 10)
  const ranks = document.querySelectorAll('ul.ranked-list')
  for (var i = 0, l = ranks.length;i < l; i++) {
     ranks[i].innerHTML = (i + n).toString() 
  }
  return ranks
}
