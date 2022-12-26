var domain = document.domain
if (domain.includes("repl.co")){
  document.title = "FluentOS - Website Test"
}
if (window.localStorage.getItem('darkMode') == "true"){
  document.body.classList.add("dark")
} else if (window.localStorage.getItem('darkMode') === null) {
  window.localStorage.setItem('darkMode', true)
  document.body.classList.add("dark")
}
function toggleTheme(){
  if (window.localStorage.getItem('darkMode') == "true"){
    window.localStorage.setItem('darkMode', false)
    document.body.classList.remove("dark")
  } else {
    window.localStorage.setItem('darkMode', true)
    document.body.classList.add("dark")
  }
}