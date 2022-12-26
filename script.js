var domain = document.domain
if (domain.includes("repl.co")){
  document.title = "FluentOS - Website Test"
}
if (window.localStorage.getItem('darkMode')){
  document.body.classList.add("dark")
} else if (window.localStorage.getItem('darkMode') === null) {
  window.localStorage.setItem('darkMode', true)
  document.body.classList.add("dark")
}