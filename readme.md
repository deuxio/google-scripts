Ces scripts vous sont proposés par [deux.io, agence growth hacking à paris](https://deux.io).

# 3 scripts Google Sheets que vous pourriez trouver utiles
Google Sheets est un outil formidable pour collecter des données et les organiser. Vous pouvez l'utiliser pour suivre vos dépenses, suivre vos projets d'entreprise, et bien d'autres choses encore. Vous pouvez également utiliser Google Sheets comme outil de reporting. Vous pouvez vous connecter à d'autres services et ajouter des visualisations afin de présenter vos données de manière plus compréhensible. Dans cet article de blog, vous découvrirez 3 scripts Google Sheets qui vous aideront à enrichir vos données. Vous apprendrez également comment les utiliser et où les obtenir.


## Obtenir un site web d'entreprise à partir d'un nom d'entreprise
Voici l'exemple parfait de la connexion de Google Sheets à d'autres services. Vous pouvez facilement obtenir le site Web d'une entreprise en la recherchant à l'aide de la requête suivante:
[Obtenir le site Web d'une entreprise](https://github.com/deuxio/google-scripts/blob/master/company.gs)

Le script récupérera le site Web de l'entreprise et l'ajoutera à votre feuille de calcul en utilisant la fonction suivante:

```=companyWebsite(Nom de la Compagnie)```

## Obtenir un logo d'entreprise à partir d'un nom d'entreprise ou d'un site web
C'est à peu près la même chose que d'obtenir le site Web d'une entreprise. Vous pouvez obtenir le logo de l'entreprise en le recherchant à l'aide de la requête suivante :

[Obtenir un logo d'entreprise à partir d'un nom d'entreprise ou d'un site web](https://github.com/deuxio/google-scripts/blob/master/company.gs)

Le script ci-dessus récupérera le logo de l'entreprise et l'ajoutera à votre feuille de calcul en utilisant la fonction suivante:


```=companyLogo(Nom de la Compagnie)```

## Devinez le sexe à partir du prénom
Cela vous aide vraiment à comprendre les données que vous regardez. Vous pourrez dire M. ou Mme dans vos cold emails par exemple. En utilisant ce script, vous serez en mesure de trouver le sexe du prénom dans votre feuille de calcul.

[Devinez le sexe à partir du prénom](https://github.com/deuxio/google-scripts/blob/master/gender.gs)

Le script ci-dessus récupérera le genre depuis un prénom et l'ajoutera à votre feuille de calcul en utilisant la fonction suivante:

```=gender(prenom)```

## Obtenir les données de l'entreprise de la sirène (identifiant de l'entreprise française)
Le script ci-dessous va obtenir des données sur l'entreprise à partir de son SIREN. il utilise l'API du gouvernement basée sur la base Sirène.

[Obtenir les données de l'entreprise de la sirène (identifiant de l'entreprise française)](https://github.com/deuxio/google-scripts/blob/master/sirene.gs)

Le script va se connecter à la sirène et obtenir toutes les données qu'elle possède sur votre entreprise. Il ajoutera le prénom, le nom, l'intitulé du poste et l'adresse électronique de tous les employés. Il ajoutera également tous les produits ou services offerts par votre entreprise. Après avoir terminé, il supprimera les données déjà ajoutées par la Sirène.

Le script ci-dessus récupérera les données d'une entreprise à partir de son identifiant SIREN et l'ajoutera à votre feuille de calcul en utilisant la fonction suivante:

```=sirene(SIREN)```


## Trucs et astuces Google Sheets
Ces 3 scripts sont très utiles et vous aideront à enrichir vos données. Vous pouvez également ajouter des visualisations ou graphiques à votre feuille de calcul pour voir les données d'une manière plus compréhensible.

Il existe de nombreuses façons d'ajouter des visualisations à votre feuille de calcul qui vous aidera à mieux comprendre les données.
