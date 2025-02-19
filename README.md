To-Do List Application
Une application simple de gestion de tâches (To-Do List) développée avec React. Cette application permet aux utilisateurs d'ajouter, de modifier, de supprimer et de marquer des tâches comme terminées. Elle inclut également une fonctionnalité de validation par code PIN pour les opérations sensibles comme la suppression et la modification des tâches.

Fonctionnalités
Ajouter une tâche : Ajoutez une nouvelle tâche avec un nom et une description.

Modifier une tâche : Modifiez les détails d'une tâche existante après avoir validé un code PIN.

Supprimer une tâche : Supprimez une tâche après avoir validé un code PIN.

Marquer une tâche comme terminée : Cochez une tâche pour la marquer comme terminée.

Persistance des données : Les tâches sont sauvegardées dans le localStorage du navigateur et persistent entre les sessions.

Validation par code PIN : Un code PIN est requis pour modifier ou supprimer une tâche (code PIN par défaut : 1234).

Technologies utilisées
React : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.

localStorage : Pour la persistance des données entre les sessions.

CSS : Pour le style et la mise en page de l'application.

Comment exécuter le projet localement
Suivez ces étapes pour exécuter l'application sur votre machine :

Prérequis
Node.js et npm installés sur votre machine. Vous pouvez les télécharger ici.

Étapes
Clonez ce dépôt sur votre machine :

bash
Copy
git clone https://github.com/votre-utilisateur/todo-list-app.git
Accédez au répertoire du projet :

bash
Copy
cd todo-list-app
Installez les dépendances :

bash
Copy
npm install
Démarrez l'application :

bash
Copy
npm start
Ouvrez votre navigateur et accédez à :

Copy
http://localhost:3000
Structure du projet
App.js : Le composant principal qui gère l'état de l'application et les opérations sur les tâches.

TaskForm.js : Un formulaire pour ajouter ou modifier une tâche.

TaskList.js : Affiche la liste des tâches.

TaskItem.js : Représente une tâche individuelle avec des boutons pour éditer, supprimer et marquer comme terminée.

PinModal.js : Une modale pour valider le code PIN avant de modifier ou supprimer une tâche.

App.css : Contient les styles CSS pour l'application.

Personnalisation
Changer le code PIN
Par défaut, le code PIN est défini sur 1234. Pour le modifier, recherchez la ligne suivante dans App.js :

javascript
Copy
if (pin === "1234") {
Remplacez "1234" par le code PIN de votre choix.
