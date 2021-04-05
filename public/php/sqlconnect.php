<?php
    // Création de la connexion
    $id = new mysqli("ni-web-01.srv.nihost.fr", "dotcorel_adminsql", "Thesys42", "dotcorel_but")

    // Vérification de la connexion
    if (mysqli_connect_errno()) {
        echo "Impossible de se connecter à à la base de données :" . mysqli_connect_error();
        exit();
    }

    // Envoi d'une requête test
    if ($res = mysqli_query($id, "SELECT * FROM Users")) {
        // On affiche le résultat de la requête
        echo "Lignes retournées : " . mysqli_num_rows($res);

        // On libère la mémoire qui a été attribuée au résultat
        mysqli_free_result($res);
    }

    // On ferme la connexion
    mysqli_close($id);
?>