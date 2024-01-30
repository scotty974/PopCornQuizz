export default function defineGuardPseudo(pseudo: string) {
  if (pseudo) {
    localStorage.setItem("pseudo", pseudo);
    return navigateTo("/level");
  } else {
    return false
  }
}
