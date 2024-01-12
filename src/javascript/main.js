var like = document.getElementById('like')
var deslike = document.getElementById('deslike')

like.addEventListener('click', function() {
  like.classList.add('active')
  deslike.classList.remove('active')
})

deslike.addEventListener('click', function(){
  like.classList.remove('active')
  deslike.classList.add('active')
})