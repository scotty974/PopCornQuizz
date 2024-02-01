export default function handleScore(newScore) {
    // Récupération du score actuel depuis le localStorage
    const storedScore = parseInt(localStorage.getItem('score')) || 0;

    // Ajout du nouveau score
    const updatedScore = storedScore + parseInt(newScore);

    // Enregistrement du score mis à jour dans le localStorage
    localStorage.setItem('score', updatedScore.toString());

    // Affichage du score mis à jour
   
}
localStorage.setItem("score","0")

