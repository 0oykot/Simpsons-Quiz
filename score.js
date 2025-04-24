  document.getElementById('quizForm').addEventListener('submit', function (event){ 
  event.preventDefault(); // Förhindrar att formuläret skickas på ett vanligt sätt

  // Lägg till loggning för felsökning
  console.log("Formuläret har skickats!");

  // Räknar resultaten
  let result = {
    Homer: 0,
    Marge: 0,
    Bart: 0,
    Lisa: 0
  };

  // Hämta alla valda svar
  const answer = document.querySelectorAll('input[type="radio"]:checked');

  //Lägg till loggning för att kontrollera valda svar
  console.log("Valda svar:", answer);

  // Gå igenom svaren och updaterar räknaren
  answer.forEach(function(answer){
    result[answer.value]++;
  });

  // Hitta den största poängen
  const maxResult=Object.keys(result).reduce(function(a,b) {
    return result[a] > result[b] ? a:b;
  });

  // Skriv resultatet till localStorage
  localStorage.setItem('personality', maxResult); // Sparar resultatet

  // Om du använder replace, så kan man inte använda back knappen
  window.location.href='resultat.html'; // Omdirigera till resultat-sidan
});