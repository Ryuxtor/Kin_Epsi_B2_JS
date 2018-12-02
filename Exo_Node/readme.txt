Exercice Présent dans ce fichier:
Service

que fait ce script?

Il indique la date sois au format Iso ou de manière classique

Comment faire fonctionner l'exercice service?

-Ouvrez le node.js command prompt
-dirigez vous dans le dossier de l'exercice (celui ou vous vous situez en théorie)
-dans le command prompt de node: entrez la commande suivante: npm init, appuyez sur enter jusqu'au "is this ok?" dans le terminal, réappuyez sur entrez.
-toujours dans le command prompt: entrez la commande suivante: npm install express
-Toujours dans le command prompt: entrez la commande suivante: node server.js
-Le commande prompt devrais indiqué qu'il écoute sur le port 1025
-Allez dans votre navigateur internet préféré et tappez cette Url: http://localhost:1025/service?type=date ou http://localhost:1025/service?type=iso
-La page devrais retourner la date en fonction du type demandez: iso ou date classique de votre machine
-Entrez tout autre chose à la place de date ou iso vous devriez tombé sur une erreur 404 car la page demandé n'existe pas
