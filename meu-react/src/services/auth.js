export function getUsuarioLogado() {
  return JSON.parse(localStorage.getItem("usuario"));
}
