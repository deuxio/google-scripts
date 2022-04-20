// google script to get company data from siren (french company id)

function sirene(siren) {
  var url = "https://entreprise.data.gouv.fr/api/sirene/v1/siren/" + siren;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return [[ 
    data.numero_tva_intra, data.siret, data.nom_raison_sociale, 
    data.l4_declaree, data.l6_declaree, data.libelle_activite_principale, 
    data.categorie_entreprise, data.date_creation_entreprise
    ]];
}
