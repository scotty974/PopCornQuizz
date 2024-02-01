export default function HandleUserStorage(){
   const user =  JSON.parse(localStorage.getItem("pseudo"))
   const score = localStorage.getItem('score')
    const userPseudo = user.pseudo
    const userScore = score

    return {userPseudo, userScore}
    
}