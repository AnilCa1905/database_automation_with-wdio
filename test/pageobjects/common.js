
/**
 * Export
 */
class Common {
  constructor() {
    /**
     * Elements
     */
  
  }

async openUrl(){
  await browser.url("https://www.redbus.in/");
  await browser.maximizeWindow();
} 

}

module.exports = Common;
