//show LineMovement => afficher la liste des coups lorsque l'utilisateur joue
function showLineMovement(variable) {
    var databaseElement = document.querySelector('.DataBase');
    databaseElement.textContent = "Liste des coups : [" + variable + " ]";
    databaseElement.insertAdjacentHTML('beforeend', '<br>');
    databaseElement.insertAdjacentHTML('beforeend', '<br>');
}


// Fonction pour gérer l'événement de clic sur le bouton submit
function handleFormSubmit(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    
    // Verifier si un champ est null pour enregistrer une partie ou envoyer la variable "Liste des coups"
    if (ListeValue.length === 0) {
      window.alert('Veuillez jouer un coup pour enregistrer votre partie');
    } else {
      let textListValue = ListeValue.join(', ');

      console.log(ListeValue)
      // Envoie de la requête AJAX vers le fichier "index.php"
      $.ajax({
        type: "POST",
        url: "index.php",
        data: { coups: textListValue, addParty: true },
        success: function(response) {
          //console.log(response);
        }
      });
    }
  }
  
  // Ajouter un écouteur d'événement au formulaire pour intercepter la soumission
  var form = document.querySelector('form');
  form.addEventListener('btnRegistered_Party', handleFormSubmit);
  