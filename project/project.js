
import PlantNameData from '../Data/PlantNameData.js';
import HomePage from '../Pages/HomePage.js';
import LoginPage from '../Pages/LoginPage.js';
import ManagementProjectsPage from '../Pages/ManagementProjectsPage.js';

var Log4js = require("log4js");
var Logger = Log4js.getLogger();
Logger.level = "debug";


describe("Projects Test cases.", () => {

     it('TC_Projects_02 :Verify whether the user is able to add a new project.', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.clickOnManagement();
          await ManagementProjectsPage.verifyNewUserDataValidation();
          await HomePage.logoutSession();

     });



     it('TC_Projects_03 :"Verify whether the user is able to edit the created project"', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.clickOnManagement();
          await ManagementProjectsPage.filterForCheck(PlantNameData.plantData.projectPlantName);//for specific user
          await ManagementProjectsPage.clickEditIcon();
          var defaultValues = await ManagementProjectsPage.readDefaultData();
          await browser.pause(3000);
          var initalData = await ManagementProjectsPage.editCreatedProject();
          await ManagementProjectsPage.saveEditedData();
          await ManagementProjectsPage.filterForCheck(initalData[0]);
          await ManagementProjectsPage.clickEditIcon();
          //assertion
          var asserstionCompareValues = await ManagementProjectsPage.afterEditGetDataForCompare();
          await ManagementProjectsPage.compareAssertionData(initalData[0], asserstionCompareValues[0]);
          await ManagementProjectsPage.compareAssertionData(initalData[1], asserstionCompareValues[1]);
          await ManagementProjectsPage.compareAssertionData(initalData[2], asserstionCompareValues[2]);
          await ManagementProjectsPage.compareAssertionData(initalData[3], asserstionCompareValues[3]);
          await ManagementProjectsPage.compareAssertionData(initalData[4], asserstionCompareValues[4]);
          await ManagementProjectsPage.setDefaultData(defaultValues[0], defaultValues[1], defaultValues[2]);
          await HomePage.logoutSession();
     });

     it('TC_Projects_04 :"Verify whether the user is able to edit after selecting existing "Project" by clicking on edit icon."', async () => {

          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.clickOnManagement();
          await browser.pause(3000);
          await ManagementProjectsPage.filterForCheck(PlantNameData.plantData.existingProjectPlantName);//for specific user
          await browser.pause(3000);
          await ManagementProjectsPage.clickEditIcon();
          var defaultValues = await ManagementProjectsPage.readDefaultData();
          Logger.info("default", defaultValues);
          await browser.pause(3000);
          var initalData = await ManagementProjectsPage.editExestingProject();
          await ManagementProjectsPage.saveEditedData();
          await ManagementProjectsPage.filterForCheck(initalData[0]);
          await ManagementProjectsPage.clickEditIcon();
          //assertion
          var asserstionCompareValues = await ManagementProjectsPage.afterEditGetDataForCompare();
          await ManagementProjectsPage.compareAssertionData(initalData[0], asserstionCompareValues[0]);
          await ManagementProjectsPage.compareAssertionData(initalData[1], asserstionCompareValues[1]);
          await ManagementProjectsPage.compareAssertionData(initalData[2], asserstionCompareValues[2]);
          await ManagementProjectsPage.compareAssertionData(initalData[3], asserstionCompareValues[3]);
          await ManagementProjectsPage.compareAssertionData(initalData[4], asserstionCompareValues[4]);
          await ManagementProjectsPage.setDefaultData(defaultValues[0], defaultValues[1], defaultValues[2]);
          await HomePage.logoutSession();
     });


     it('TC_Projects_05 :"Verify whether the user is able to view after selecting any project by clicking on view icon."', async () => {
          await LoginPage.loginWithValidCredentials();
          await browser.pause(3000);//required for side loading
          await ManagementProjectsPage.clickOnManagement();
          await browser.pause(3000);//required for side loading
          //Assertion 
          await ManagementProjectsPage.viewOnlyData();
          await HomePage.logoutSession();
     });

     it('TC_Projects_06 :"Verify whether the user is able to cancel the current operation by clicking on the cancel button"', async () => {

          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.clickOnManagement();
          var project = await ManagementProjectsPage.getHomePageData();
          await ManagementProjectsPage.editBasicDetails();
          //assertion
          var projectAssertionCheck = await ManagementProjectsPage.getHomePageDataForAssertion();
          await ManagementProjectsPage.compareAssertionData(project[0], projectAssertionCheck[0]);
          await ManagementProjectsPage.compareAssertionData(project[1], projectAssertionCheck[1]);
          await ManagementProjectsPage.compareAssertionData(project[2], projectAssertionCheck[2]);
          await HomePage.logoutSession();

     });




     it('TC_Projects_08 :Menu access rights-Verify whether the user is able to select all and deselect the menus in a single click for a module', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
          await ManagementProjectsPage.userIsAbleToSelectAllAndDeselectTheMenus();
          await HomePage.logoutSession();

     });

     it('TC_Projects_09 :Verify whether the charts are getting plotted based on operational start and end time set at project level', async () => {

          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
          await ManagementProjectsPage.chartsGettingPlottedBasedOnOperationalCurrentStartAndEndTime();
          await ManagementProjectsPage.chartsGettingPlottedBasedOnOperationalUpdatedStartAndEndTime();
          await HomePage.logoutSession();
     });

     it('TC_Projects_10 :Verify whether the project capacity is listed in landing page based on the selection in projects master', async () => {

          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
          await ManagementProjectsPage.projectCapacityListedInLandingPage();
          await HomePage.logoutSession();
     });

     it('TC_Projects_12 :Verify whether the plant is listed under respective country selected from projects master in landing page', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.filterForCheck(PlantNameData.plantData.projectNameForVerifyCounrty);//for specific user       
          await ManagementProjectsPage.verifyCountryLocation();
          await HomePage.logoutSession();


     });



     it('TC_Projects_13 :Verify whether the mounting type is a mandatory field while creating project with the below options to select from --Fixed Tilt,Seasonal Tilt,Single-axis-tracker,Dual-axis-tracker', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.createNewProjectToVerifyMountingType();
          await HomePage.logoutSession();
     });



     it('TC_Projects_14 :Verify whether the Tilt angle is a mandatory field when the user selects either fixed tilt or seasonal tilt  as mounting type', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.filterForCheck(PlantNameData.plantData.projectTiltPlantName);//for specific user
          await ManagementProjectsPage.clickEditIcon();
          //assertion
          await ManagementProjectsPage.verifySeasonalAndTiltAngle();
          await HomePage.logoutSession();

     });



     it('TC_Projects_15 :Verify whether the user is only allowed to enter values between -90 to +90 in the tilt angle field and any values outside this range should show the below error message- Please enter number between -90 to 90', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.filterForCheck(PlantNameData.plantData.projectTiltPlantName);//for specific user
          await ManagementProjectsPage.clickEditIcon();
          //assertion
          await ManagementProjectsPage.verifyTiletAngle();
          await HomePage.logoutSession();


     });


     it('TC_Projects_16 :Verify whether the user is able to enter current date or past date for the plant commission date other than the future date', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.filterForCheck(PlantNameData.plantData.projectTiltPlantName);//for specific user
          await ManagementProjectsPage.verifyUserNotAbleToSelectFutureDate();

     });

     it('TC_Projects_22 :Verify whether the user is able to select/unselect the features at project level and the same is getting reflected for the logged in users ', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.filterForCheck(PlantNameData.plantData.projectTiltPlantName);//for specific user
          await ManagementProjectsPage.selectAndUnselectFeature();
          await HomePage.logoutSession();
     });







     it('TC_Projects_29 :Verify whether the user is able to add/remove Maintenance engg,site in charge or safety in charge', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
          await ManagementProjectsPage.clickEditIcon();
          await ManagementProjectsPage.clickIconSearchMaintenanceEngineer();
          await ManagementProjectsPage.clickIconSearchSiteIncharge();
          await HomePage.logoutSession();
     });

     it('TC_Projects_30[1]:Verify whether the user is able to perform the column level(filter) operations in the grid', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.performFilterColumnLevel();
          await HomePage.logoutSession();
     });

     it('TC_Projects_30[2]:Verify whether the user is able to perform the sorting(Long Name) operations in the grid', async () => {
          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.gotoProjects();
          await ManagementProjectsPage.performShortingColumnLevel();
          await HomePage.logoutSession();
     });

});
