node
const selenium = require("selenium-webdriver");
const By = selenium.By;
const driver = new selenium.Builder().forBrowser("chrome").build();
URL="http://port-80-ppve8677ei.treehouse-app.com";
driver.get(URL);
const form = driver.findElement(By.id("registrar"));
driver.findElement(By.css("input")).clear();
driver.findElement(By.name("name")).sendKeys("Adam Solhi");
form.findElement(By.css("button")).click();
driver.findElement(By.css("h1")).getText().then(txt => console.log(txt));
const invitedList = driver.findElement(By.id("invitedList"));
const firstItem = invitedList.findElement(By.css("li"));
const secondItem = invitedList.findElement(By.cssSelector("ul#invitedList li:nth-of-type(3)"));
firstItem.findElement(By.css("input")).click();
secondItem.findElement(By.css("input")).click();
firstItem.getAttribute("class").then(attr => console.log(attr));
const hideCheckbox = driver.findElement(By.className("main")).findElement(By.css("input"));
firstItem.isDisplayed().then(isDisplated => console.log(isDisplayed));
hideCheckbox.click()
const thirdItem = driver.findElement(By.cssSelector("ul#invitedList li:nth-of-type(3)"));
thirdItem.isDisplayed().then(isDisplayed => console.log(isDisplayed));
