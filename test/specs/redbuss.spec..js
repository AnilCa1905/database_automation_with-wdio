const {homePage} = require('../pageobjects/homePage');
const {searchPage} = require('../pageobjects/search_page');
const { database } = require('../pageobjects/database')
let data

describe('End to End flow for Redbuss.com to book a Buss', () => {
	it('The user should be able to load the url', async () => {
		//   await database.connectToDatabase()
		await homePage.openUrl();
		await expect(browser).toHaveUrl('https://www.redbus.in/');
		expect(await homePage.$homePageLogo().isDisplayed()).toBe(true,'Expect homepage Logo to be displayed');
	});
	it('The user should be able to enter From destination', async()=> {
		await homePage.selectFromDestination();
		expect(await homePage.$homePageLogo().isDisplayed()).toBe(true,'Expect homepage Logo to be displayed');
	});
	it('The user should be able to enter To destination', async()=> {
		await homePage.selectToDestination();
		expect(await homePage.$homePageLogo().isDisplayed()).toBe(true,'Expect homepage Logo to be displayed');
	});

	it('The user should be able to select a date', async()=> {
		await homePage.selectDate();
		expect(await homePage.$homePageLogo().isDisplayed()).toBe(true,'Expect homepage Logo to be displayed');
	});
	it('The user should be able to search for buss', async()=> {
		await searchPage.searchBuss();
		
		let data1 =await $(`//div[text()="19"]`).getText()
		data = data1.split(" ")[0];
	   console.log("--------------------getText()------------------------------------->"+data)
	//    await database.connectAndQuery(data)
	  // await browser.pause(15000);
		
	   expect(await homePage.$homePageLogo().isDisplayed()).toBe(true,'Expect homepage Logo to be displayed');
	});
	it('The user should be able to select a buss', async()=> {
		await searchPage.viewBuss();
		expect(await homePage.$homePageLogo().isDisplayed()).toBe(true,'Expect homepage Logo to be displayed');
	});
	it('The user should be able to select a seat', async()=> {
		await searchPage.selectSeat();
		expect(await homePage.$homePageLogo().isDisplayed()).toBe(true,'Expect homepage Logo to be displayed');
	});
	it('The user should be able to click proceed to book and enter details', async()=> {
		await searchPage.proceedToBook();
		expect(await searchPage.$proceedHeading().isDisplayed());
	});
	it('The user should be able to click proceed to book and enter details', async()=> {
		await searchPage.proceedToBook();
		expect(await searchPage.$proceedHeading().isDisplayed());
	});
	it('The user should be able to connectandquerry ', async()=> {
		await database.connectAndQuery(data)
	});
	
		});



