const storedTheme = localStorage.getItem('theme')
const themeIcon = {
  auto:'<i class="fa-regular fa-circle-half-stroke fa-fw"></i>',
  dark:'<i class="fa-regular fa-moon-stars fa-fw"></i>',
  light:'<i class="fa-regular fa-sun fa-fw"></i>'
}

if (storedTheme != null) {
  document.documentElement.setAttribute('data-bs-theme', storedTheme)
  document.querySelector('#btn-theme').innerHTML = themeIcon[storedTheme]
}else{
  document.documentElement.setAttribute('data-bs-theme', 'auto')
  localStorage.setItem('theme', 'auto')
  document.querySelector('#btn-theme').innerHTML = themeIcon[auto]
}

function changeTheme(theme){
  document.documentElement.setAttribute('data-bs-theme', theme)
  localStorage.setItem('theme', theme)
  document.querySelector('#btn-theme').innerHTML = themeIcon[theme]
}
