package Definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {
	
	WebDriver driver;
	//Copy line from TC1.feature and add @ before Given
	//Add ("^ to denote start of the string, $" will denote end of the string
	//instead of input URL we have to mention \"(.*)\" (regular expression. based on no.of input we have to add no.of regular exp) 
	@Given ("^login to demo automation with URL \"(.*)\"$")
		//create normal method by giving action name (ie, Now we are are login the URL)
		//based on no.of regular expression we have to create no.of string)
		public void login(String url){
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Sudha\\Desktop\\jar\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		//driver will launch the browser with full screen if this cmd is not there then browser will launch with small size
		driver.manage().window().maximize();
		//driver.get will launch the browser
		driver.get(url);
	}
	
	@When("^Skip sign in should launch the register page$")
	public void skip(){
		driver.findElement(By.xpath("//button [@id='btn2']")).click();
	}
	
	@Then("^Register page should get display$")
	public void checkregisterpage(){
		//checking register page by using firest name
		//by using assert.assertTrue - if the findelemnet true tese case will execte if it is false testcase will get terminate.
		Assert.assertTrue(driver.findElement(By.xpath("//input [@ng-model='FirstName']")).isDisplayed());
	}
	
	@And ("^close the browser$")
	public void closebrowser(){
		
		driver.close();
		
	}
	
	@Then("^Register page should get display and enter \"(.*)\" and \"(.*)\"$")
	public void firstname(String firstname, String lastname) throws InterruptedException{
		driver.findElement(By.xpath("//input [@ng-model='FirstName']")).sendKeys(firstname);
		driver.findElement(By.xpath("//input [@ng-model='LastName']")).sendKeys(lastname);
		//line 51 throws exception due to thread.sleep()
		Thread.sleep(2000);
	}
		
	
	

}
