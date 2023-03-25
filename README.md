# Test_Clac

## Introduction :
L'API Test Clac permet la gestion de chickens avec les méthodes suivantes : GET, POST, PUT, PATCH et DELETE. Elle permet également d'augmenter la variable steps de 1 pour chaque exécution du webservice /chicken/run.

## Prérequis :
Pour utiliser cette API, il est recommandé d'avoir une connaissance basique en NodeJS et en manipulation de base de données.

## Utilisation :
Pour utiliser cette API, il est nécessaire d'envoyer des requêtes HTTP avec un client REST tel que Postman ou Insomnia. L'adresse de l'API doit être spécifiée dans l'URL de la requête.

## Endpoints :
L'API Test Clac possède les endpoints suivants :

- GET /chicken : récupère tous les chickens présents dans la base de données.
- GET /chicken/:id : récupère le chicken correspondant à l'ID spécifié dans l'URL de la requête.
- POST /chicken : crée un nouveau chicken avec les propriétés suivantes : name, birthday, weight, steps, isRunning.
- PUT /chicken/:id : met à jour les propriétés d'un chicken spécifié par son ID.
- DELETE /chicken/:id : supprime le chicken correspondant à l'ID spécifié dans l'URL de la requête.
- PATCH /chicken/run/:id : augmente la variable steps du chicken correspondant à l'ID spécifié dans l'URL de la requête de 1.

## Propriétés d'un chicken :
Un chicken possède les propriétés suivantes :
- name : nom du chicken, type : string, obligatoire.
- birthday : date de naissance du chicken, type : date.
- weight : poids du chicken, type : number, obligatoire.
- steps : nombre de pas effectués par le chicken, type : number, par défaut à 0.
- isRunning : indique si le chicken est en train de courir, type : boolean, par défaut à false.


## Bonus :
Un lien de chicken vers un autre objet comme farmyard ou coop peut être ajouté en créant une nouvelle propriété "link" dans l'objet chicken et en y stockant l'ID de l'objet vers lequel on souhaite créer le lien. Ensuite, une nouvelle méthode GET /chicken/link/:id peut être créée pour récupérer les informations de l'objet lié.
