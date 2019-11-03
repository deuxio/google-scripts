// google script to guess gender from firstname

function gender(firstname) {
  var url = "https://api.genderize.io/?name=" + firstname;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data.gender;
}
