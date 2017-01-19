function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget() {
  const target = document.getElementById('nested')
  return target
}
function increaseRankBy(n) {
  parseInt(n, 10)
  const ranks = document.querySelectorAll('ranked-list')
  for (var i = 0, l = ranks.length;i < l; i++) {
     ranks[i] += n
  }
  return ranks
}
