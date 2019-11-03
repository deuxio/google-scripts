// google script to get company website from a company name

function companyWebsite(companyName) {
  var url = "https://autocomplete.clearbit.com/v1/companies/suggest?query=" + companyName;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data[0].domain;
}

// google script to get company logo from a company name or website

function companyLogo(companyName) {
  var url = "https://autocomplete.clearbit.com/v1/companies/suggest?query=" + companyName;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data[0].logo;
}

// get both :)

function companyLogo(companyName) {
  var url = "https://autocomplete.clearbit.com/v1/companies/suggest?query=" + companyName;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return [[data[0].domain, data[0].logo]];
}
