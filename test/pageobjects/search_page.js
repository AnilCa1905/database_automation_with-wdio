const Common = require('./common');
class SearchPage extends Common {
	constructor() {
		super();
		/**
		 * Elements
		 */
		this.$searchBtn = () => $(`#search_btn`);
		
		this.$viewSeat =() => $(`//div[@class="button view-seats fr"]`);
		this.$seats = () => $(`//div[@class="seat-layout clearfix"]`);
		this.$proceedBook = () => $(`//button[@class="button continue inactive"]`);
		this.$proceedHeading = () => $(`//h4[contains(text(),'Passenger Details')]`);
		this.$name = () => $(`#seatno-04`);
		this.$gender = () => $(`(//input[@class="radio_btn"])[2]`);
		this.$age = () => $(`#seatno-01`);
		this.$email = () =>$(`//input[@placeholder="Email ID"]`);
		this.$number = () => $(`//div[text()="18"]`).getText() ;



		
		
	}

/**
 * Function
 */
async searchBuss()
	{
		await this.$searchBtn().click();
	}

async viewBuss()
{
	
	await this.$viewSeat().click();

}	

async selectSeat()
{
	
		await this.$seats().click({ x: 166,y:68});
	
}
async proceedToBook()
{
	await this.$proceedBook().click();
	 await this.$name().setValue("Anil");
	 await browser.pause(3000);
	 await this.$gender().click({ x: 10,y:9});
	 await this.$age().setValue("22");
	 await this.$email().setValue("anil@gmail.com")
}

}
module.exports = {
	searchPage: new SearchPage(),
};
