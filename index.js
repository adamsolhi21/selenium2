const selenium = require("selenium-webdriver");
const By = selenium.By;

const driver = new selenium.Builder()
    .forBrowser("chrome")
    .build();

const URL = 'http://port-80-ppve8677ei.treehouse-app.com/';
driver.get(URL);

const locators = {
  inviteeForm: By.id("registrar"),
  inviteeNameField: By.name("name")
};

function addInvitee(name) {
driver.findElement(locators.inviteeNameField)
  .sendKeys(name);
driver.findElement(locators.inviteeForm).submit();
}

addInvitee("Celeste Sangster");
addInvitee("Adam Solhi");
