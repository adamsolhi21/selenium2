const selenium = require("selenium-webdriver");
const By = selenium.By;

const HomePage = require('./home');

const driver = new selenium.Builder()
    .forBrowser("chrome")
    .build();

    const homePage = new HomePage(driver);
    homePage.open();

const invitees = [
  'Gonzalo Torres del Fierro',
  'Shadd Anderson',
  'George Aparece',
  'Shadab Khan',
  'Joseph Michael Casey',
  'Jennifer Nordell',
  'Faisal Albinali',
  'Taron Foxworth',
  'David Riesz',
  'Maicej Torbus',
  'Martin Luckett',
  'Joel Bardsley',
  'Reuben Varzea',
  'Ken Alger',
  'Amrit Pandey',
  'Rafal Rudzinski',
  'Brian Lynch',
  'Lupe Camacho',
  'Luke Fiji',
  'Sean Christensen',
  'Philip Graf',
  'Mike Norman',
  'Michael Hulet',
  'Brent Suggs'
];

const locators = {
  inviteeForm: By.id("registrar"),
  inviteeNameField: By.css("#registrar input[name='name']"),
  toggleNonRespondersVisibility: By.css(".main > div input"),
  removeButtonForInvitee: invitee => By.xpath(`//span[text() = "${invitee}"]/../button[last()]`)
};

function addInvitee(name) {
driver.findElement(locators.inviteeNameField)
  .sendKeys(name);
driver.findElement(locators.inviteeForm).submit();
}

function removeInvitee(invitee) {
  driver.findElement(locators.removeButtonForInvitee(invitee))
    .click();
}

function toggleNonRespondersVisibility() {
  driver.findElement(locators.toggleNonRespondersVisibility)
  .click();
}

invitees.forEach(addInvitee);

//toggleNonRespondersVisibility();

removeInvitee('Shadd Anderson');
