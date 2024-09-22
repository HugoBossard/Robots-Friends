# RobotsFriends

## À propos du projet

L'objectif de ce projet est d'interoger une api existante afin de construire une application front web pour afficher, intéragir et naviguer à travers les diffèrentes routes ([documentation Swagger](https://robotsfriends.up.railway.app/docs)).

Il faut pouvoir avoir un menu principal avec la liste des robots et de pouvoir les mettres en favoris. Lors du click sur un robot, on peut voir ses informations tel que son numero de téléphone ou même son email.

Il y a également un menu qui est composé des robots mis en favoris par la personne utilisant l'application.

## Deployement du serveur

Lancez ma commande `ng serve` pour un serveur en local. Navigez vers `http://localhost:4200/`. L'application va automatiquement recharchée si vous changez n'importe lequel des fichiers sources.

## Aide supplémentaire 

Pour avoir plus d'aide sur Angular CLI utilisez `ng help` ou aller regarder la page [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Création des branches et nommage des commits

**Langue à respecter pour le nommage** : `Français` -> Par exemple : `Ajout : Icon coeur pour mettre en favoris les robots`

- Ajout : ajout d'une nouvelle fonctionnalité.
- Modif : modification d'une fonctionnalité déjà implémentée en précisant la modification apportée.
- Refacto : refactoring de code, de nommage. Ce qui modifie le code sans ajouter de fonctionnalités ou corriger de bugs.
- Fix : correction de bug.

Les noms des branches devront être en lien avec les US définis sur le board [miro](https://miro.com/welcomeonboard/UFJ3bk13a2xEaFVYMmE0OUdxYVowM1VvSTFuY05mNW40U3JHTmM5SktVQ2tzaDhVemRRVFRWWFBubkpoblhGOHwzNDU4NzY0NTM2MjEwNzYzOTQwfDI=?share_link_id=677541992365):

(us1)

Pour le nommage des commits, il faut respecter ce nommage afin que ce soit homogène :

[Ajout, Modif, Refacto, Fix] : [message explicite court]

Exemple, si je veux ajouter un commit car j'ai développé un nouveau composant -> 
`Ajout : Composant liste robot pour afficher tout les robots de l'api`

---

## Nommage des composants et des fichiers

**Langue à respecter pour le nommage** : `Anglais` -> par exemple : PageListRobot

- Le nom des fichiers devra avoir un nommage de type Kebab Case : nom-fichier


- Le nom des classes devra avoir un nommage de type Pascal Case: NomDeMaClasse


- Le nom des fonctions devra avoir un nommage de type Camel Case : nomDeMaFonction


- Le nom des constantes devra avoir un nommage de type  Snake Upper Case : NOM_DE_CONSTANTE


- Le nom des variables devra avoir un nommage de type Camel Case : nomVariable