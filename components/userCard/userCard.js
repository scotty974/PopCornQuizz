export default function HandleUserStorage(){
   const user =  JSON.parse(localStorage.getItem("pseudo"))
    const userPseudo = user.pseudo
    const userScore = user.score

    return {userPseudo, userScore}
    
}