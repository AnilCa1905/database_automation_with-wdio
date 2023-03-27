const Common = require('./common');

class HomePage extends Common {
	constructor() {
		super();
		/**
		 * Elements
		 */
		this.$homePageLogo = () => $(`//a[contains(text(),'redbus')]`);
		this.$fromDestination = () => $(`#src`);
		this.$toDestination = () => $(`#dest`);
		this.$ClickOndDate = () =>$(`(//input[@class="db"])[3]`);
		this.$to = () =>$(`//i[@class="icon solr-icon icon-ic-city"]`);
		this.$selectDate = () => $(`//tr//td[@class="wd day"][2]`);
		this.$redRailButton = () =>$(`#redRail`)
		this.railFrom = () => $(`(//input[@class="search-input"])[1]`)		
	}

	/**
	 * Methods
	 */


	async selectFromDestination()
	{
		await this.$fromDestination().setValue("Kochi");
		await browser.pause('2000')
		await $('//li[@data-id="216"]').click();

	}
	async clearFromDestination()
	{
		await this.$fromDestination().clearValue();
	}

	async selectToDestination()
	{
		await this.$toDestination().setValue("Nilambur");
		 await browser.pause(3000);
		 await $('//li[@data-id="86873"]').click();
		 
		// await this.$to().click();
	}
	async selectDate() 
	{
		await this.$ClickOndDate().click();
		await browser.pause(3000);
		await this.$selectDate().click();

	}

	
	
	
	
}
module.exports = {
	homePage: new HomePage(),
};
