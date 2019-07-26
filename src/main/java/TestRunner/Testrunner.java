package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


//2nd step
//@CucumberOptions - input for AbstractTestNGCucumberTests
@CucumberOptions(
		
		//Pretty - to show the cucumber output in console
		//html:report/html - html report format
		//json:report/json/cucumber.json - to get the json format report
		format = {"pretty", "html:report/html", "json:report/json/cucumber.json"},
		//tags - bases on TC1.feaure tags tc will get execute
		tags={"@Test1,@Test2"},
		//features - path of the test case
		features="src/main/java/feature_Testcase",
		//glue - step definition pkg name
		glue={"Definition"}
		
		)

//3rd step: hv to create testNG.xml file (project>rightclick>new>file>xx.xml)

//1st step
//We have to extend AbstractTestNGCucumberTests so that we can access cucumber test cases 
//AbstractTestNGCucumberTests - stepdefinition.java pkg
public class Testrunner extends AbstractTestNGCucumberTests {

}
