<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./plate.css"/>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script defer src="chess.js"></script>
        <title>ChessGame</title>
    </head>

    <body>

    <?php
    session_start();
    $id = $_SESSION["id"];
    $pseudo = $_SESSION["pseudo"];
    $elo = $_SESSION["elo"];
    ?>

    <section id="plateau-de-jeu" class="Plateau_De_Jeu">
        <div id="wehaveawinner"></div>
        <div id="choose"></div>
        <table>
            <tr>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="07" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="17" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="27" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="37" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="47" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="57" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="67" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="77" class="image" src=""></div></td>
            </tr>
            <tr>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="06" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="16" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="26" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="36"class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="46" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="56" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="66" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="76" class="image" src=""></div></td>
            </tr>
            <tr>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="05" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="15" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="25" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="35" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="45" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="55" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="65" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="75" class="image" src=""></div></td>
            </tr>
            <tr>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="04" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="14" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="24" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="34" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="44" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="54" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="64" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="74" class="image" src=""></div></td>
            </tr>
            <tr>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="03" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="13" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="23" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="33" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="43" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="53" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="63" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="73" class="image" src=""></div></td>
            </tr>
            <tr>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="02" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="12" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="22" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="32" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="42" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="52" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="62" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="72" class="image" src=""></div></td>
            </tr>
            <tr>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="01" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="11" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="21" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="31" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="41" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="51" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="61" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="71" class="image" src=""></div></td>
            </tr>
            <tr>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="00" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="10" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="20" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="30" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="40" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="50" class="image" src=""></div></td>
                <td class="blue"><div  onClick="reply_click(this.id)"><img id="60" class="image" src=""></div></td>
                <td class="white"><div  onClick="reply_click(this.id)"><img id="70" class="image" src=""></div></td>
            </tr>
        </table>
        <br>
        <br>
    </section>

    <section class="Information_User">
        <p>Pseudo: <?php echo $pseudo ?></p>
        <p>Elo: <?php echo $elo ?></p>
        <p>id: <?php echo $id ?></p>
    </section>

    <section class="DataBase">
        <script defer src="database.js"></script>
    </section>

    <form method="POST" action="">
        <label><b>Nom de la partie</b></label>
        <br>
        <input type="text" name="name_party" autocomplete="off">
        <br>
        <br>
        <input type="submit" id="btnRegistered_Party" name="addParty" value="Ajouter une partie">
    </form>

    <?php
    $bdd = new PDO('mysql:host=localhost; dbname=chessgame; charset=utf8;', 'root', '');

    if(!empty($_POST['name_party'])) {
        if(isset($_POST['addParty'])) {
            echo $_POST['coups'];
            $name_party = htmlspecialchars($_POST['name_party']);
            $ListeDeCoup = $_POST['coups'];

            $insertUser = $bdd->prepare('INSERT INTO registered_party(name_party, user_id)VALUES(?, ?)');
            $insertUser->execute(array($name_party, $id));
        } else {
            echo "<p style='color:red'>Veuillez saisir un nom à votre partie</p>";
        }
    }
    ?>

    </body>
</html>