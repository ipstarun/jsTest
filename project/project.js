
import LoginPage from '../Pages/LoginPage.js';
import ManagementProjectsPage from '../Pages/ManagementProjectsPage.js';

var Log4js = require("log4js");
var Logger = Log4js.getLogger();
Logger.level = "debug";


describe("Projects Test cases.", () => {

     it('TC_Projects_01 : Verify whether the user is able to refresh project page.', async () => {
          await LoginPage.loginWithValidCredentials();

     });

     it('TC_Projects_02 :"Verify whether the user is able to add a new project. Verify whether the below fields are mandatory while creating a project: Long name Short name Latitude Longitude Capacity Address Country Timezone Domain Data interval Contact Person Mob Email"', async () => {
          // console.log('run');

          await LoginPage.loginWithValidCredentials();
          await browser.pause(3000);
          await ManagementProjectsPage.clickOnManagement();
          await ManagementProjectsPage.clickOnManagement();

          await browser.pause(5000);

          await ManagementProjectsPage.addUser();
          await browser.pause(3000);
          await ManagementProjectsPage.setLongName();
          await browser.pause(3000);
          var shortName = await ManagementProjectsPage.setShortName();
          await browser.pause(1000);
          await ManagementProjectsPage.setProtocolType();
          await browser.pause(1000);
          await ManagementProjectsPage.setLatitudeValue();
          await browser.pause(1000);
          await ManagementProjectsPage.setLongitudeValue();
          await browser.pause(1000);
          await ManagementProjectsPage.setCapacity();
          await browser.pause(1000);
          await ManagementProjectsPage.setAddress();
          await browser.pause(1000);
          await ManagementProjectsPage.setCountry();
          await browser.pause(1000);
          await ManagementProjectsPage.setTimeJone();
          await browser.pause(1000);
          await ManagementProjectsPage.setDomain();
          await browser.pause(1000);
          await ManagementProjectsPage.setDataInterval();
          await browser.pause(1000);
          await ManagementProjectsPage.setplantControllerID();
          await browser.pause(1000);
          await ManagementProjectsPage.setContactPersonName();
          await browser.pause(1000);
          await ManagementProjectsPage.setMobileNo();
          await browser.pause(1000);
          await ManagementProjectsPage.setEmailId();
          await browser.pause(3000);



          ////filterForAsserctionCheck  //correct
          // await ManagementProjectsPage.filterForAsserctionCheck();
          // await browser.pause(3000);
          // await ManagementProjectsPage.getLongName();
          // await ManagementProjectsPage.getShortName();
          // await ManagementProjectsPage.getProtocolType();
          // await ManagementProjectsPage.getLatitudeValue();
          // await ManagementProjectsPage.getLongitudeValue();
          // await ManagementProjectsPage.getPlantLocation();
          // await ManagementProjectsPage.getCapacity();
          // await ManagementProjectsPage.getAddress();
          // await ManagementProjectsPage.getCountry();
          // await ManagementProjectsPage.getTimeJone();
          // await ManagementProjectsPage.getDomain();
          // await ManagementProjectsPage.getDataInterval();
          // await ManagementProjectsPage.getplantControllerID();
          // await ManagementProjectsPage.getContactPersonName();
          // await ManagementProjectsPage.getMobileNo();
          // await ManagementProjectsPage.getEmailId();
          // await browser.pause(3000);
     });


     it('TC_Projects_03 :"Verify whether the user is able to edit the created project"', async () => {

          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.clickOnManagement();

          var plantname = 321;//you can give the plant name
          await ManagementProjectsPage.filterForAsserctionCheck(plantname);//for specific user
          var initalShortName = await ManagementProjectsPage.editShortName();
          var initialLongName = await ManagementProjectsPage.editLongName();
          var initalProtocolType = await ManagementProjectsPage.editProtocolType();
          var initalLatitudeValue = await ManagementProjectsPage.editLatitudeValue();
          var initialLongitudeValue = await ManagementProjectsPage.editLongitudeValue();
          var initialPlantLocation = await ManagementProjectsPage.editPlantLocation();
          var initalCapacity = await ManagementProjectsPage.editCapacity();
          var initalAddress = await ManagementProjectsPage.editAddress();
          var enitialCountry = await ManagementProjectsPage.editCountry();
          var initalTimeJone = await ManagementProjectsPage.editTimeJone();
          var initalDomain = await ManagementProjectsPage.editDomain();
          var initalInterval = await ManagementProjectsPage.editDataInterval();
          var initalPlantControllerID = await ManagementProjectsPage.editplantControllerID();
          var initalContactPerson = await ManagementProjectsPage.editContactPersonName();
          var initalMobileNo = await ManagementProjectsPage.editMobileNo();
          var initalEmailId = await ManagementProjectsPage.editEmailId();


          var initalValues = [initalShortName, initialLongName, initalProtocolType, initalLatitudeValue, initialLongitudeValue, initialPlantLocation, initalCapacity, initalAddress, enitialCountry, initalTimeJone, initalDomain, initalInterval, initalPlantControllerID, initalContactPerson, initalMobileNo, initalEmailId];
          Logger.info(initalValues);

          // //assertion
          await $(ManagementProjectsPage.btnEditONProject).click();
          await ManagementProjectsPage.saveData();
          await ManagementProjectsPage.filterForAsserctionCheck(initalShortName);

          var asserstionCompareValues = await ManagementProjectsPage.afterEditGetDataForCompare();

          await ManagementProjectsPage.compareAssertionData(initalValues[0], asserstionCompareValues[0]);
          await ManagementProjectsPage.compareAssertionData(initalValues[1], asserstionCompareValues[1]);
          await ManagementProjectsPage.compareAssertionData(initalValues[2], asserstionCompareValues[2]);
          await ManagementProjectsPage.compareAssertionData(initalValues[3], asserstionCompareValues[3]);
          await ManagementProjectsPage.compareAssertionData(initalValues[4], asserstionCompareValues[4]);
          Logger.info("aassertion completed");
     });



     it.only('TC_Projects_04 :"Verify whether the user is able to edit after selecting existing "Project" by clicking on edit icon."', async () => {

          await LoginPage.loginWithValidCredentials();
          await ManagementProjectsPage.clickOnManagement();
          await browser.pause(3000);

          await $(ManagementProjectsPage.clickOnExitingProject).click();
          await browser.pause(3000);






          // var plantname = 321;//you can give the plant name
          // await ManagementProjectsPage.filterForAsserctionCheck(plantname);//for specific user













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


     });







});
