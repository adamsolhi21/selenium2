class HomePage {
  constructor(driver) {
    this.driver = driver;
  } 


open() {
  const URL = 'http://port-80-ppve8677ei.treehouse-app.com/';
driver.get(URL);

  }
}

export default HomePage;