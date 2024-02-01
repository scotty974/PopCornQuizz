export default function defineGuardPseudo(pseudo: string, score : number) {
 
  if (pseudo) {
    localStorage.setItem("pseudo", JSON.stringify({pseudo : pseudo, score : score }));

    return navigateTo("/level");
  } else {
    return false;
  }
}
