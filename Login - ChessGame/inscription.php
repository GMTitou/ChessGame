

<!-- Affichage de la page -->
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="account.css" media="screen" type="text/css" />
        <title>Inscrition - ChessGame</title>
    </head>
    
    <body class="bodySignUp">
        <div id="container">
            <form method="POST" action="" class="ChampsInscription">

                <h1>Créer un compte</h1>

                <label><b>Créer ton nom d'utilisateur</b></label>
                <input type="text" name="pseudo" autocomplete="off"><br/>

                <label><b>Créer ton mot de passe</b></label>
                <input type="password" name="mdp" autocomplete="off">

                <label><b>Confirmer ton mot de passe</b></label>
                <input type="password" name="confirmMdp" autocomplete="off">

                <a href="http://localhost/Projet-Dev/ChessGame/Login%20-%20ChessGame/connexion.php">j'ai déjà un compte</a>

                <input type="submit" name="envoi">



                <!-- Verifier les éléments base de données -->
                <?php
                session_start();
                $bdd = new PDO('mysql:host=localhost; dbname=chessgame; charset=utf8;', 'root', '');

                if(isset($_POST['envoi'])) {
                    if(!empty($_POST['pseudo']) AND !empty($_POST['mdp'] AND !empty($_POST['confirmMdp']))) {
                        //On defini le pseudo => pseudoBDD & mdp => mdpBDD
                        $pseudo = htmlspecialchars($_POST['pseudo']);
                        $mdp = sha1($_POST['mdp']); 
                        $confirmMdp = sha1($_POST['confirmMdp']);
                        $elo = 1000;

                        //Recuperer utilisateur pour verifier si déjà existant
                        $selectPseudo = $bdd->prepare('SELECT * FROM users WHERE pseudo = ?');
                        $selectPseudo->execute(array($pseudo));
                        //Si aucun utilisateur:
                        if($selectPseudo->rowCount() == 0) {
                            //Verifier les mots de passes
                            if($mdp === $confirmMdp) {

                                //REQUETE SQL
                                //enregistrer dans la base de donnée pseudo & mdp (crypté)
                                $insertUser = $bdd->prepare('INSERT INTO users(pseudo, mdp, elo)VALUES(?, ?, ?)');
                                $insertUser->execute(array($pseudo, $mdp, $elo));

                                //Recupere utilisateur pour la sessions => id; nom; mdp & elo;
                                $selectUser = $bdd->prepare('SELECT * FROM users WHERE pseudo = ? AND mdp = ?');
                                $selectUser->execute(array($pseudo, $mdp));
                                //Gerer le deplacement de page
                                if($selectUser->rowCount() > 0) {
                                    $_SESSION['pseudo'] = $pseudo;
                                    $_SESSION['mdp'] = $mdp;
                                    $_SESSION['id'] = $selectUser->fetch()['id'];
                                    $_SESSION['elo'] = $elo;

                                    header('location: ../Plateau - ChessGame/index.php');
                                }

                                //Renvoie ID pour test la base
                                echo $_SESSION['id'];
                            } else {
                                echo "<p style='color:red'>Les mots de passe sont différents</p>";
                            }
                        } else {
                            echo "<p style='color:red'>Cet utilisateur existe déjà</p>";
                        }
                    
                    } else {
                        //Revoie message d'erreur si champs incomplet
                        echo "<p style='color:red'>Des champs sont incomplets, merci de les renseigner</p>";
                    }
                }
                ?>
            </form>
        </div>
    </body>
</html>