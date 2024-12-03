var adGroupIterator = AdWordsApp.adGroups();
while (adGroupIterator.hasNext()) {
  var adGroup = adGroupIterator.next();
  Logger.log(adGroup.getName());
}
