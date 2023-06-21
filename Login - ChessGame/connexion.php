<!-- Affichage de la page -->
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="account.css" media="screen" type="text/css" />
        <title>Connexion - ChessGame</title>
    </head>
    
    <body class="bodyLogin">
        <div id="container">
            <form method="POST" action="" class="ChampsInscription">

                <h1>Connexion</h1>

                <label><b>Nom d'utilisateur</b></label>
                <input type="text" name="pseudo" autocomplete="off"><br/>

                <label><b>Mot de passe</b></label>
                <input type="password" name="mdp" autocomplete="off">

                <a href="http://localhost/Projet-Dev/ChessGame/Login%20-%20ChessGame/inscription.php">créer un compte</a>

                <input type="submit" name="envoi">

                <?php
                session_start();
                $bdd = new PDO('mysql:host=localhost; dbname=chessgame; charset=utf8;', 'root', '');
                if (isset($_POST['envoi'])) {
                    if (!empty($_POST['pseudo']) && !empty($_POST['mdp'])) {
                        $pseudo = htmlspecialchars($_POST['pseudo']);
                        $mdp = sha1($_POST['mdp']);

                        $selectUser = $bdd->prepare('SELECT * FROM users WHERE pseudo = ? AND mdp = ?');
                        $selectUser->execute(array($pseudo, $mdp));

                        if ($selectUser->rowCount() > 0) {
                            $user = $selectUser->fetch();
                            $_SESSION['pseudo'] = $pseudo;
                            $_SESSION['mdp'] = $mdp;
                            $_SESSION['id'] = $user['id'];
                            $_SESSION['elo'] = $user['elo'];

                            header('location: ../Plateau - ChessGame/index.php');
                            exit();
                        } else {
                            echo "<p style='color:red'>Nom d'utilisateur ou mot de passe incorrect</p>";
                        }
                    } else {
                        echo "<p style='color:red'>Des champs sont incomplets, merci de les renseigner</p>";
                    }
                }
                ?>
            </form>
        </div>
    </body>
</html>