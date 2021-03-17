$(function(){
  $(document).ready(function() {
      $("body").append("<h1>Fiche Client</h1><hr> <div id=\"menu\"><button id=\"connexion\">Se connecter</button> <button id=\"creerCompte\">Créer un compte</button></div>");

      function creerCompte(){
            $("#menu").css("display","none");
            $("body").append("<div class=\"form formCreerCompte\">"
                              +"<div id=\"erreur\">"
                              +"<p>Vous n'avez pas rempli correctement les champs du formulaire !</p>"
                              +"</div>"
                              +"<form>"
                              +"<div><label for=\"pseudo\">Pseudonyme</label> <input type=\"text\" id=\"pseudo\" class=\"champ\" /></div>"
                              +"<div><label for=\"mdp\">Mot de passe</label> <input type=\"password\" id=\"mdp\" class=\"champ\" /></div>"
                              +"<div><label for=\"confirmation\">Confirmation</label>  <input type=\"password\" id=\"confirmation\" class=\"champ\" /></div>"
                              +"<div><label for=\"mail\">E-mail</label> <input type=\"text\" id=\"mail\" class=\"champ\" /></div>"
                              +"<div><input type=\"submit\" id=\"envoi\" value=\"Envoyer\" /></div>"
                              +"</form>"
                              +"</div>");
            $("<button id=\"retour\">Revenir à la page de connexion</button>").insertBefore(".form");
            $("<h2>Créer votre compte client</h2>").insertBefore("#retour");
      }
      $("#creerCompte").on("click", creerCompte);

      function connexion(){
            $("#menu").css("display","none");
            $("body").append("<div class=\"form formConnexion\">"
                              +"<div id=\"erreur\">"
                              +"<p>Vous n'avez pas rempli correctement les champs du formulaire !</p>"
                              +"</div>"
                              +"<form>"
                              +"<div><label for=\"pseudo\">Pseudonyme</label> <input type=\"text\" id=\"pseudo\" class=\"champ\" /></div>"
                              +"<div><label for=\"mdp\">Mot de passe</label> <input type=\"password\" id=\"mdp\" class=\"champ\" /></div>"
                              +"<div><label for=\"confirmation\">Confirmation</label>  <input type=\"password\" id=\"confirmation\" class=\"champ\" /></div>"
                              +"<div><label for=\"mail\">E-mail</label> <input type=\"text\" id=\"mail\" class=\"champ\" /></div>"
                              +"<div><input type=\"submit\" id=\"envoi\" value=\"Envoyer\" /></div>"
                              +"</form>"
                              +"</div>");
            $("<button id=\"retour\">Revenir à la page de connexion</button>").insertBefore(".form");
            $("<h2>Connectez-vous</h2>").insertBefore("#retour");
      }
      $("#connexion").on("click", connexion);

      function retourConnexion(){
            $(".form").css("display","none");
            $("#menu").css("display","block");
      }
      $("#retour").on("click", retourConnexion);


  });


})
