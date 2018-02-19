var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.clickbus.com.br/');
driver.findElement(By.id('widget-vertical-origin-place')).sendKeys('Inconfidentes, MG');
driver.findElement(By.id('widget-vertical-destination-place')).sendKeys('Ouro Fino, MG');
driver.findElement(By.id('widget-vertical-departure-date')).click();
driver.findElement(By.className('ui-state-active')).click();
// driver.findElement(By.name('btnK')).click();
// driver.wait(check_title, 1000);

function check_title() {
  var promise = driver.getTitle().then(function(title) {
    if (title === 'wiki - Google Search') {
      console.log('success');
      return true;
    } else {
      console.log('fail - ' + title);
    }
  });

  return promise;
}