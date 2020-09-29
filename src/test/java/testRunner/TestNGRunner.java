package testRunner;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = "src/test/java/features",
        glue = {"stepDefinitions"},
        tags = "~@ignore",
        plugin = {
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber.json",
                "junit:target/cucumber.xml",
                "rerun:target/rerun.txt"
        },strict = true,
        dryRun = false
)
public class TestNGRunner  extends AbstractTestNGCucumberTests{




//        private TestNGCucumberRunner testNGCucumberRunner;
//        protected WebDriverManager webDriverManager = new WebDriverManager();
//
//        @BeforeClass
//        public void setUpClass() throws Exception {
//                testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
//        }
//
//
//
//        @Parameters({"browser","device"})
//        @BeforeTest(alwaysRun = true)
//        public void setUpTest(@Optional("chrome") String browser,@Optional("web") String device){
//                try {
//                        driver = webDriverManager.setDriver(browser,device);
//                } catch (MalformedURLException e) {
//                        e.printStackTrace();
//                }
//        }
//
//
//        @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
//        public void feature(CucumberFeatureWrapper cucumberFeature) {
//                testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
//        }
//
//        @DataProvider
//        public Object[][] features() {
//                return testNGCucumberRunner.provideFeatures();
//        }
//
//        @AfterClass(alwaysRun = true)
//        public void tearDownClass() throws Exception {
//                Reporter.loadXMLConfig(new File(PropertiesReader.getReportConfigPath()));
//                Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
//                Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
//                Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
//                Reporter.setSystemInfo("Selenium", "3.141.59");
//                Reporter.setSystemInfo("Maven", "3.5.2");
//                Reporter.setSystemInfo("Java Version", "1.8.0_231");
//                testNGCucumberRunner.finish();
//        }
//
//        @AfterTest
//        public void tearDown() {
//                driver.quit();
//        }



}




