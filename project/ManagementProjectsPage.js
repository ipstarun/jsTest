var Log4js = require("log4js");
var Logger = Log4js.getLogger();
Logger.level = "debug";
import PlantNameData from "../Data/PlantNameData";



class ManagementProjects {
  // Selectors
  btnManagement = '//span[@id="Management"]';
  btnProjects = "//a[contains(text(), 'Projects')]";
  dgdSelectVeltoor120 = '//div[text()="Veltoor 120"]';
  btnEdit = "#Edit-Id > mat-icon";
  ddlFeatures = "#project-features span.dropdown-multiselect__caret";
  chkStringAnalysis = '//div[text()="String Analysis"]';
  btnSave = "#Save-Id > mat-icon";
  btnLogout = "#logout-id > svg > path";
  btnYes = "*//app-confirm-dialog//button[1]";
  chkDataValidation = '//div[text()="Data Validation"]';




  // Functions
  // Click on 'Management' part from the navigation bar and then go to projects section
  async gotoProjects() {
    await browser.pause(5000); // It is working by the hardcode method only. It won't work, if functions are used.
    await $(this.btnManagement).moveTo();
    await $(this.btnProjects).click();
  }

  //First select plant name, Edit,Go to features ddl, then uncheck String Analysis Then click on save
  async toggleStringAnalysis() {
    await $(this.dgdSelectVeltoor120).click();
    await $(this.btnEdit).click();
    await $(this.ddlFeatures).click();
    await $(this.chkStringAnalysis).click();
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    await $(this.btnYes).click();
  }
  // click on logout button
  async logout() {
    await $(this.btnLogout).click();
    await $(this.btnYes).click();
  }
  async toggleDataValidation() {
    await $(this.dgdSelectVeltoor120).click();
    await $(this.btnEdit).click();
    await $(this.ddlFeatures).click();
    await $(this.chkDataValidation).click();
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    await $(this.btnYes).click();
  }




  addBtn = '//*[@id="Add-Id"]';
  btnView = '//*[@id="View-Id"]';
  management = '(//*[@class="menu-scroll"])[2]';//'//*[@id="menuWrapper"]/*[@id="Management"]';//'//span[@id="Management"]';
  projects = "//a[contains(text(), 'Projects')]";//'//a[contains(text(),"Projects")]';
  btnEditONProject = '//*[@id="Edit-Id"]';
  selLongName = '[itemid="LongNameId"]';
  chkDisableLongName = '[id="project-projectLongNameId"][disabled]';
  selShortName = '[id="project-projectShortNameId"]';
  chkDisableShortName = '[id="project-projectShortNameId"][disabled]';
  selProtocolType = '[id="projectProtocolTypeId"]';
  chkDisableProtocolType = '//*[@id="projectProtocolTypeId"]//*[@disabled]';
  addProtocolType = '//*[contains(text(),"FTP")]';
  edtProtocolType = '//*[contains(text(),"Modbus")]';
  selLatitudeId = '[id="latitudeId"]';
  chkDisableLatitude = '[id="latitudeId"][disabled]';
  selLongitudeId = '[id="longitudeId"]';
  chkDisableLongitude = '[id="longitudeId"][disabled]';
  selPlantLocation = '[id="project-plantLocationId"]';
  chkDisablePlantLocation = '[id="project-plantLocationId"][disabled]';
  selCapacityId = '[id="project-capacityId"]';
  chkDisableCapacityId = '[id="project-capacityId"][disabled]';
  selAddressId = '[id="project-addressId"]';
  chkDisableAddress = '[id="project-addressId"][disabled]';
  selCountryName = '[id="project-countryId"]';
  chkDisableCountryName = '//*[@id="project-countryId"]//*[@disabled]';
  addCountry = '//*[contains(text(),"Andorra")]';
  edtCountry = '//*[contains(text(),"Angola")]';
  selTimeJone = '[id="project-timezoneId"]';
  chkDisableTimeJone = '//*[@id="project-timezoneId"]//*[@disabled]';
  addTimeJone = '//*[contains(text(),"(UTC-12:00)")]';
  edtTimeJone = '//*[contains(text(),"(UTC-11:00)")]';
  selDomain = '[id="project-domainId"]';
  selMountingType = '[name="MountingType"]';
  editMountingType = '//*[contains(text(),"Fixed Tilt")]';
  checkErrorMesasge = '[class="error-msg ng-star-inserted"]'

  selTiltAngle = '[id="project-tiltAngle"]';
  chkDisableDomain = '//*[@id="project-domainId"]//*[@disabled]';
  addDomain = '//*[contains(text(),"Battery Management System")]';
  edtDomain = '//*[contains(text(),"Battery Thermal Management System")]';
  edtDomainTOsolar = '//*[contains(text(),"Solar PV Rooftop")]';
  selDataInterval = '[id="project-dataIntervalId"]';
  addDataInterval = '//*[contains(text(),"10 - sec")]';
  edtDataInterval = '//*[contains(text(),"5 - sec")]';
  selContactPerson = '[id="project-contactpersonId"]';
  selControllerId = '[id="project-plantControllerId"]';
  selPrimaryAccount = '[name="PrimaryAccount"]';
  selMobileNo = '[id="project-mobileId2"]';
  selEmailId = '[id="project-emailId"]';
  btnOkUnderSave = '//*[@class="primary-cta ng-star-inserted"]';
  clickOnShortName = '//*[@class="ag-header ag-focus-managed ag-pivot-off"]//*[@col-id="ProjectShortName"]';
  shortNameFilter = '(//*[@col-id="ProjectShortName"])//*[@ref="eMenu"]';
  shortForFilter = '//*[@class="ag-tabs ag-menu ag-focus-managed ag-ltr ag-popup-child"]//*[@class="ag-icon ag-icon-filter"]';
  inputProjectCodeForCheck = '//*[@ref="eCondition1Body"]//*[@aria-label="Filter Value"]';
  getSrNoDataHomePage = '(//*[@class="ag-pinned-left-header"])//*[@col-id="Id"]';
  getShortNameDataHomePage = '(//*[@class="ag-pinned-left-header"])//*[@col-id="ProjectShortName"]';
  getLongNameDataHomePage = '(//*[@class="ag-header-viewport"])//*[@col-id="ProjectLongNameSL"]';
  selectShortNameEdit = '(//*[@row-id="0"])//*[@col-id="ProjectShortName"]';
  cancelBtn = '//*[@id="Cancel-Id"]';
  clickOnExitingProject = '(//*[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-cell-value"])[5]';
  iconSearchMaintenanceEngineer = '#project-addME > i';
  chkbxFirstUsers = '//*[@row-id="0"]//*[@ref="eWrapper"]';
  btnApply = '[id="applyButton"]';
  divMaintainanceEngineerList = '[name="MaintainanceEngineerList"]';
  divSiteEngineerList = '[name="SiteEngineerList"]'
  iconDeleteMangementEngineer = '[id="project-removeallME"]';
  iconDeleteSiteIncharge = '[id="project-removeallSE"]'
  iconSearchSiteIncharge = '//*[@id="project-addSE"]/i';
  btnOk = '//button[@class="primary-cta ng-star-inserted"]';
  btnMenu = '//div[@col-id="ProjectShortName"]/div[3]/span/*';
  btnFilter = '//span[@aria-label="filter"]';
  textFieldFilter = '//*[@ref="eWrapper"]//*[@aria-label="Filter Value"]';
  firstCellShortName = '(//div[@aria-colindex="2"])[2]';
  iconAsc = '//span[(text()="Long Name")]';
  firstCellLongName = '//*[@row-index="0"]//div[@col-id="ProjectLongNameSL"]';
  secondCellLongName = '//*[@row-index="1"]//div[@col-id="ProjectLongNameSL"]';
  thirdCellLongName = '//*[@row-index="2"]//div[@col-id="ProjectLongNameSL"]';
  fourthCellLongName = '//*[@row-index="3"]//div[@col-id="ProjectLongNameSL"]';
  clickOnFirstProjectName = '//*[@row-index="0"]//*[@col-id="ProjectShortName"]';

  //prj
  // Pranju 
  iconView = '[id="View-Id"]';
  divStartTime = '//*[@id="project-starttime"]//div[@class="ngx-timepicker-control"]/*[@placeholder="HH"]';
  divEndTime = '//*[@id="project-endtime"]//div[@class="ngx-timepicker-control"]/*[@placeholder="HH"]';
  btnHome = '[id="home-button-id"]';
  selCapacityId = '[id="project-capacityId"]';
  firstCellCapacity = '//*[@row-index="0"]//div[@col-id="Capacity"]';
  chekboxManagementView = '(//div[@col-id="ViewEnum"])[2]';
  chekboxManagementEdit = '(//div[@col-id="EditEnum"])[2]';
  afterUncheckedManagementView = '(//div[@col-id="ViewEnum"])[2]//span[@class="fa fa-times-circle toggle-button-no"]';
  afterCheckedManagementView = '(//div[@col-id="ViewEnum"])[2]//span[@class="fa fa-check-circle toggle-button-yes"]';
  afterUncheckedManagementEdit = '(//div[@col-id="EditEnum"])[2]//span[@class="fa fa-times-circle toggle-button-no"]';
  afterCheckedManagementEdit = '(//div[@col-id="EditEnum"])[2]//span[@class="fa fa-check-circle toggle-button-yes"]';


  async userIsAbleToSelectAllAndDeselectTheMenus() {

    await this.clickEditIcon();
    await $(this.chekboxManagementView).click();
    let afterUncheckedManagementView = await $(this.afterUncheckedManagementView).isExisting();
    if (afterUncheckedManagementView) {
      Logger.info("Unchecked Management View is Working in a single click");
      expect(true).toBe(true);
    }
    else {
      Logger.info("Unchecked Management View is Not Working in a single click");
      expect(true).toBe(false);
    };
    await browser.pause(5000);
    await $(this.chekboxManagementView).click();
    let afterCheckedManagementView = await $(this.afterCheckedManagementView).isExisting();
    if (afterCheckedManagementView) {
      Logger.info("Checked Management View is Working in a single click");
      expect(true).toBe(true);
    }
    else {
      Logger.info("Checked Management View is Not Working in a single click");
      expect(true).toBe(false);
    };
    await browser.pause(5000);
    await $(this.chekboxManagementEdit).click();
    let afterCheckedManagementEdit = await $(this.afterCheckedManagementEdit).isExisting();
    if (afterCheckedManagementEdit) {
      Logger.info("Checked Management Edit is Working in a single click");
      expect(true).toBe(true);
    }
    else {
      Logger.info("Checked Management Edit is Not Working in a single click");
      expect(true).toBe(false);
    };
    await browser.pause(5000);
    await $(this.chekboxManagementEdit).click();
    let afterUncheckedManagementEdit = await $(this.afterUncheckedManagementEdit).isExisting();
    if (afterUncheckedManagementEdit) {
      Logger.info("Unchecked Management Edit is Working in a single click");
      expect(true).toBe(true);
    }
    else {
      Logger.info("Unchecked Management Edit is Not Working in a single click");
      expect(true).toBe(false);
    };
    await browser.pause(5000);
    // After Assertion Checked Again otherWise another test cases not working properly
    await $(this.chekboxManagementEdit).click();

  };



  async selectSpecificPlantName(specificPlantName) {
    await $("//div[text()='" + specificPlantName + "']").click();

  };

  async gotoProjects() {
    await browser.pause(5000); // It is working by the hardcode method only. It won't work, if functions are used.
    await $(this.btnManagement).moveTo();
    await $(this.btnProjects).click();
    await browser.pause(5000);
  };

  //First select plant name, Edit,Go to features ddl, then uncheck String Analysis Then click on save
  async toggleStringAnalysis() {
    await this.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
    await $(this.btnEdit).click();
    await $(this.ddlFeatures).click();
    await $(this.chkStringAnalysis).click();
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    await $(this.btnYes).click();
  };
  // click on logout button
  async logout() {
    await $(this.btnLogout).click();
    await $(this.btnYes).click();
  };

  async clickEditIcon() {
    await $(this.btnEdit).click();
  };

  async clickIconSearchMaintenanceEngineer() {
    await $(this.iconSearchMaintenanceEngineer).click();
    await $(this.chkbxFirstUsers).click();
    await browser.pause(5000);
    await $(this.btnApply).click();
    const maintainanceEngineerListAfterSelectName = await $(this.divMaintainanceEngineerList).getText();
    Logger.info("MaintainanceEngineer List After Select Name:", maintainanceEngineerListAfterSelectName);
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    await browser.pause(5000);
    await $(this.btnOk).click();

    await this.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
    await $(this.btnEdit).click();

    await $(this.iconDeleteMangementEngineer).click();
    const maintainanceEngineerListAfterDelete = await $(this.divMaintainanceEngineerList).getText();
    Logger.info("MaintainanceEngineer List After Delete:", maintainanceEngineerListAfterDelete);
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    await browser.pause(5000);
    await $(this.btnOk).click();
    await this.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
    await $(this.btnEdit).click();
    // Assertion 
    expect(maintainanceEngineerListAfterSelectName).not.toBePresent(maintainanceEngineerListAfterDelete);
  };

  async clickIconSearchSiteIncharge() {
    await $(this.iconSearchSiteIncharge).click();
    await $(this.chkbxFirstUsers).click();
    await browser.pause(5000);
    await $(this.btnApply).click();
    const siteInchargeListAfterSelectName = await $(this.divSiteEngineerList).getText();
    Logger.info("Site Incharge List After Select Name:", siteInchargeListAfterSelectName);
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    await browser.pause(5000);
    await $(this.btnOk).click();
    await this.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
    await $(this.btnEdit).click();
    await $(this.iconDeleteSiteIncharge).click();
    const siteInchargeListAfterDelete = await $(this.divSiteEngineerList).getText();
    Logger.info("Site Incharge List After Delete:", siteInchargeListAfterDelete);
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    await browser.pause(5000);
    await $(this.btnOk).click();
    await this.selectSpecificPlantName(PlantNameData.plantData.specificPlantName);
    await $(this.btnEdit).click();

    // Assertion 
    expect(siteInchargeListAfterSelectName).not.toBePresent(siteInchargeListAfterDelete);

  };

  async setPlantName(dashboardPlantName) {
    return dashboardPlantName;

  };

  async performFilterColumnLevel() {
    await $(this.btnMenu).click();
    await browser.pause(5000);
    await $(this.btnFilter).click();
    await browser.pause(5000);
    let item = await this.setPlantName(PlantNameData.plantData.dashboardPlantName);
    await $(this.textFieldFilter).setValue(item);
    await browser.pause(50000);
    await $(this.btnFilter).click();
    let firstCellShortName = await $(this.firstCellShortName).getText();
    Logger.info("firstCellShortName:", firstCellShortName);

    // Assertion
    expect(item).toEqual(firstCellShortName);

  };

  async performShortingColumnLevel() {
    await $(this.iconAsc).click();
    await browser.pause(5000);
    let ascOrderFirstCellLongName = await $(this.firstCellLongName).getText();
    let ascOrderSecondCellLongName = await $(this.secondCellLongName).getText();
    let ascOrderThirdCellLongName = await $(this.thirdCellLongName).getText();
    let ascOrderFourthCellLongName = await $(this.fourthCellLongName).getText();
    Logger.info("Ascending", ascOrderFirstCellLongName)
    Logger.info("Ascending", ascOrderSecondCellLongName)
    Logger.info("Ascending", ascOrderThirdCellLongName)
    Logger.info("Ascending", ascOrderFourthCellLongName)

    // Store the names in an array
    const ascendingList = [ascOrderFirstCellLongName, ascOrderSecondCellLongName, ascOrderThirdCellLongName, ascOrderFourthCellLongName];
    // Assert that the array is sorted in ascending order
    for (let i = 0; i < ascendingList.length - 1; i++) {
      expect(ascendingList[i] <= ascendingList[i + 1]).toBe(true);
    };

    await $(this.iconAsc).click();
    await browser.pause(5000);
    let descOrderirstCellLongName = await $(this.firstCellLongName).getText();
    let descOrderSecondCellLongName = await $(this.secondCellLongName).getText();
    let descOrderThirdCellLongName = await $(this.thirdCellLongName).getText();
    let descFourthCellLongName = await $(this.fourthCellLongName).getText();

    Logger.info("Desending", descOrderirstCellLongName)
    Logger.info("Desending", descOrderSecondCellLongName)
    Logger.info("Desending", descOrderThirdCellLongName)
    Logger.info("Desending", descFourthCellLongName)

    const descendingList = [descOrderirstCellLongName, descOrderSecondCellLongName, descOrderThirdCellLongName, descFourthCellLongName];

    // Assert that the array is sorted in descending order
    for (let i = 0; i < descendingList.length - 1; i++) {
      expect(descendingList[i] >= descendingList[i + 1]).toBe(true);
    };
  }

  async addUser() {
    await $(this.addBtn).click();
  };


  async viewOnlyData() {
    await $(this.selectShortNameEdit).click();
    browser.pause(3000);
    await $(this.btnView).click();
    browser.pause(5000);
    await $(this.selLongName).click();
    browser.pause(3000);
    var reslongname = await $(this.chkDisableLongName).isDisplayed();
    browser.pause(3000);
    var resShortname = await $(this.chkDisableShortName).isDisplayed();
    browser.pause(3000);
    await $(this.selProtocolType).click();
    var resProtocoltype = await $(this.chkDisableProtocolType).isDisplayed();
    var reslatitude = await $(this.chkDisableLatitude).isDisplayed();
    var reslongitude = await $(this.chkDisableLongitude).isDisplayed();
    var resPlantLoctaion = await $(this.chkDisablePlantLocation).isDisplayed();
    var resCapacity = await $(this.chkDisableCapacityId).isDisplayed();
    var resAddress = await $(this.chkDisableAddress).isDisplayed();
    await $(this.selCountryName).click();
    var resCountry = await $(this.chkDisableCountryName).isDisplayed();
    await $(this.selTimeJone).click();
    var resTimeJone = await $(this.chkDisableTimeJone).isDisplayed();
    await $(this.selDomain).click();
    var resDomain = await $(this.chkDisableDomain).isDisplayed();

    Logger.info("reslongname is ", reslongname);
    Logger.info("resShortname is ", resShortname);
    Logger.info("resProtocoltype is ", resProtocoltype);
    Logger.info("reslatitude is ", reslatitude);
    Logger.info("reslongitude is ", reslongitude);
    Logger.info("resPlantLoctaion is ", resPlantLoctaion);
    Logger.info("resCapacity is ", resCapacity);
    Logger.info("resAddress is ", resAddress);
    Logger.info("resCountry is ", resCountry);
    Logger.info("resTimeJone is ", resTimeJone);
    Logger.info("resDomain is ", resDomain);

    expect(reslongname).toBe(true);
    expect(resShortname).toBe(true);
    expect(resProtocoltype).toBe(true);
    expect(reslatitude).toBe(true);
    expect(reslongitude).toBe(true);
    expect(resPlantLoctaion).toBe(true);
    expect(resCapacity).toBe(true);
    expect(resAddress).toBe(true);
    expect(resCountry).toBe(true);
    expect(resTimeJone).toBe(true);
    expect(resDomain).toBe(true);
    Logger.info("testcase  passed")
  }

  async getHomePageData() {
    await $(this.getSrNoDataHomePage).click();
    var srno = await $(this.getSrNoDataHomePage).getText();
    Logger.info("sr no us:", srno);
    var shortName = await $(this.getShortNameDataHomePage).getText();
    Logger.info("shortName", shortName);
    var longName = await $(this.getLongNameDataHomePage).getText();
    Logger.info("longName", longName);
    await $(this.selectShortNameEdit).click();
    await $(this.btnEditONProject).click();

    return [srno, shortName, longName];

  };



  async createaNewProject() {
    await this.addUser();
    await this.setLongName();
    var shortName = await this.setShortName();
    Logger.info(shortName);
  }

  async verifySeasonalAndTiltAngle() {
    var domainSolar = "Solar PV Rooftop";
    var domain = await this.getDomain();
    Logger.info("domainnn", domain);

    if (domain != domainSolar) {
      await $(this.selDomain).click();
      await $(this.edtDomainTOsolar).click();
      await $(this.selMountingType).click();
      await $(this.editMountingType).click();
      await $(this.btnSave).click();
      await $(this.btnOkUnderSave).click();
      await $(this.selTiltAngle).click();
      await $(this.selTiltAngle).setValue(-10);
      await this.saveEditedData();
    }
  }


  async verifyTiletAngle() {
    var domainSolar = "Solar PV Rooftop";
    var domain = await this.getDomain();
    var expectedError = "Please enter number between -90 to 90";
    if (domainSolar != domain) {
      await $(this.selDomain).click();
      await $(this.edtDomainTOsolar).click();
      await $(this.selMountingType).click();
      await $(this.editMountingType).click();
      await $(this.selTiltAngle).click();
      await $(this.selTiltAngle).setValue(110);
      var getErrorVal = await $(this.checkErrorMesasge).getText();
      //assertion
      expect(getErrorVal).toEqual(expectedError);
      await $(this.selTiltAngle).setValue(-90);
      await this.saveEditedData();
    }
    else {
      browser.pause(4000);
      await $(this.selTiltAngle).click();
      browser.pause(3000);
      await $(this.selTiltAngle).setValue(110);
      browser.pause(3000);
      //assertion
      var getErrorVal = await $(this.checkErrorMesasge).getText();
      expect(getErrorVal).toEqual(expectedError);
      await $(this.selTiltAngle).setValue(56);
      await this.saveEditedData();
    }
  }





  async editCreatedProject() {
    var longname = await this.editLongName();
    browser.pause(2000);
    var shortname = await this.editShortName();
    browser.pause(2000);
    var prototype = await this.editProtocolType();
    var latitude = await this.editLatitudeValue();
    var longitude = await this.editLongitudeValue();
    var location = await this.editPlantLocation();
    var capacity = await this.editCapacity();
    var address = await this.editAddress();
    var country = await this.editCountry();
    var timeZone = await this.editTimeZone();
    var domain = await this.editDomain();
    var dataInterval = await this.editDataInterval();
    var plantController = await this.editplantControllerID();
    var contactPerson = await this.editContactPersonName();
    var mobileNo = await this.editMobileNo();
    var emailId = await this.editEmailId();
    return [shortname, longname, prototype, latitude, longitude, location, capacity, address, country, timeZone, domain, dataInterval, plantController, contactPerson, mobileNo, emailId];
  }

  async getDeafaultColumnData() {

  }

  async editExistingLongName() {
    var name = "AutomationT";
    await $(this.selLongName).click();
    await $(this.selLongName).setValue(name);
    Logger.info("editLongName", name);
    return name;
  }

  async editExistingShortName() {
    var name = "AutoIndia";
    await $(this.selShortName).click();
    await $(this.selShortName).setValue(name);
    Logger.info("editShortName", name);
    return name;
  }

  async editExestingProject() {
    var longname = await this.editExistingLongName();
    browser.pause(2000);
    var shortname = await this.editExistingShortName();
    browser.pause(3000);
    var prototype = await this.editProtocolType();
    browser.pause(3000);
    var latitude = await this.editLatitudeValue();
    var longitude = await this.editLongitudeValue();
    var location = await this.editPlantLocation();
    var capacity = await this.editCapacity();
    var address = await this.editAddress();
    var country = await this.editCountry();
    var timeZone = await this.editTimeZone();
    var domain = await this.editDomain();
    var dataInterval = await this.editDataInterval();
    var plantController = await this.editplantControllerID();
    var contactPerson = await this.editContactPersonName();
    var mobileNo = await this.editMobileNo();
    var emailId = await this.editEmailId();
    return [shortname, longname, prototype, latitude, longitude, location, capacity, address, country, timeZone, domain, dataInterval, plantController, contactPerson, mobileNo, emailId];
  }


  async getHomePageDataForAssertion() {
    await $(this.getSrNoDataHomePage).click();
    var srno = await $(this.getSrNoDataHomePage).getText();
    Logger.info("sr no us:", srno);
    var shortName = await $(this.getShortNameDataHomePage).getText();
    Logger.info("shortName", shortName);
    var longName = await $(this.getLongNameDataHomePage).getText();
    Logger.info("longName", longName);
    await $(this.selectShortNameEdit).click();
    await $(this.btnEditONProject).click();
    return [srno, shortName, longName];
  };





  async editBasicDetails() {
    var longname = await this.editLongName();
    var shortname = await this.editShortName();
    await $(this.cancelBtn).click();
    await $(this.btnYes).click();
    return [shortname, longname];
  }


  async saveEditedData() {
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    browser.pause(3000);
    await $(this.btnOkUnderSave).click();
    browser.pause(6000);
    await $(this.btnOkUnderSave).click();

  }





  async afterEditGetDataForCompare() {
    var shortName = await this.getShortName();
    var longName = await this.getLongName();
    var protoType = await this.getProtocolType();
    var latitudeValue = await this.getLatitudeValue();
    var longitudeValue = await this.getLongitudeValue();
    return [shortName, longName, protoType, latitudeValue, longitudeValue];
  }

  async clickOnManagement() {
    Logger.info("clicked")
    browser.pause(1000);
    await $(this.management).click();
    Logger.info("clicked");
    browser.pause(1000);
    await $(this.projects).click();

  }

  async setLongName() {
    var name = "AutomationTest";
    await $(this.selLongName).click();
    await $(this.selLongName).setValue(name);
    Logger.info("setLongName");
    return name;
  }

  async editLongName() {
    var name = "AutomationTestEd";
    await $(this.selLongName).click();
    await $(this.selLongName).setValue(name);
    Logger.info("editLongName", name);
    return name;
  }

  async getLongName() {
    await $(this.selLongName).click();
    var longName = await $(this.selLongName).getValue();
    Logger.info("longname", longName);
    return longName;
  }

  async setShortName() {
    var name = "Auto";
    await $(this.selShortName).click();
    await $(this.selShortName).setValue(name);
    Logger.info("setShortName");
    return name;
  }

  async editShortName() {
    var name = "AutoEd";
    await $(this.selShortName).click();
    await $(this.selShortName).setValue(name);
    Logger.info("editShortName", name);
    return name;

  }

  async getShortName() {
    await $(this.selShortName).click();
    var shortName = await $(this.selShortName).getValue();
    Logger.info("getShortName", shortName);
    return shortName;
  }
  //selMountingType

  async getMountingType() {
    await $(this.selMountingType).click();
    var mountingType = await $(this.selMountingType).getText();
    Logger.info("mountingType", mountingType);
    return mountingType;
  };



  async setProtocolType() {
    var name = "FTP";
    await $(this.selProtocolType).click();
    await $(this.addProtocolType).click();
    Logger.info("setProtocolType");
    return name;

  }

  async editProtocolType() {
    var name = "Modbus";
    var prototype = await this.getProtocolType();
    Logger.info("prois", prototype);

    if (name == prototype) {
      return name;
    } else {
      browser.pause(3000);
      await $(this.selProtocolType).click();
      await $(this.edtProtocolType).click();
      Logger.info("editProtocolType", name);
      return name;
    }
  }

  async getProtocolType() {
    var protcolType = await $(this.selProtocolType).getText();
    Logger.info("protcolType", protcolType);
    return protcolType;
  }

  async setLatitudeValue() {
    var latitude = "123.321.11";
    await $(this.selLatitudeId).click();
    await $(this.selLatitudeId).setValue(latitude);
    Logger.info("setLatitudeValue");
    return latitude;
  }

  async editLatitudeValue() {
    var latitude = "123.321";
    await $(this.selLatitudeId).click();
    await $(this.selLatitudeId).setValue(latitude);
    Logger.info("editLatitudeValue", latitude);
    return latitude;
  }

  async getLatitudeValue() {
    var latitude = await $(this.selLatitudeId).getValue();
    Logger.info("LatitudeValue", latitude);
    return latitude;
  }


  async setLongitudeValue() {
    var longitude = "9191.123.1";
    await $(this.selLongitudeId).click();
    await $(this.selLongitudeId).setValue(longitude);
    Logger.info("setLongitudeValue");
    return longitude;
  }

  async editLongitudeValue() {
    var longitude = "9191.321";
    await $(this.selLongitudeId).click();
    await $(this.selLongitudeId).setValue(longitude);
    Logger.info("editLongitudeValue", longitude);
    return longitude;
  }

  async getLongitudeValue() {
    var longitude = await $(this.selLongitudeId).getValue();
    Logger.info("getLongitudeValue", longitude);
    return longitude;
  }


  async setPlantLocation() {
    var name = "Delhi";
    await $(this.selPlantLocation).click();
    await $(this.selPlantLocation).setValue(name);
    Logger.info("setPlantLocation");
    return name;
  }

  async editPlantLocation() {
    var name = "Mumbai";
    await $(this.selPlantLocation).click();
    await $(this.selPlantLocation).setValue(name);
    Logger.info("editPlantLocation", name);
    return name;
  }

  async getPlantLocation() {
    var name = await $(this.selPlantLocation).getValue();
    Logger.info("getPlantLocation", name);
    return name;
  }

  async setCapacity() {
    var name = 660;
    await $(this.selCapacityId).click();
    await $(this.selCapacityId).setValue(name);
    Logger.info("setCapacity");
    return name;
  }

  async editCapacity() {
    var name = 1320;
    await $(this.selCapacityId).click();
    await $(this.selCapacityId).setValue(name);
    Logger.info("editCapacity", name);
    return name;
  }


  async getCapacity() {
    await $(this.selCapacityId).click();
    var name = await $(this.selCapacityId).getValue();
    Logger.info("getCapacity", name);
    return name;
  }

  async setAddress() {
    var address = "1 Delhi";
    await $(this.selAddressId).click();
    await $(this.selAddressId).setValue(address);
    Logger.info("setAddress");
    return address;
  }

  async editAddress() {
    var address = "1 Mumbai";
    await $(this.selAddressId).click();
    await $(this.selAddressId).setValue(address);
    Logger.info("editAddress", address);
    return address;
  }


  async getAddress() {
    await $(this.selAddressId).click();
    var address = await $(this.selAddressId).getValue();
    Logger.info("getAddress", address);
    return address;
  }

  async setCountry() {
    var country = "Andorra";
    await $(this.selCountryName).click();
    await $(this.addCountry).click()
    Logger.info("setCountry");
    return country;
  }

  async editCountry() {
    var country = "Angola";
    var getCountryName = await this.getCountry();
    if (country == getCountryName) {
      return country;
    } else {
      await $(this.selCountryName).click();
      await $(this.edtCountry).click()
      Logger.info("editCountry", country);
      return country;
    }
  }

  async getCountry() {
    var country = await $(this.selCountryName).getText();
    Logger.info("getCountry:-", country);
    return country;
  }

  async setTimeJone() {
    var timeJone = "(UTC-12:00)";
    await $(this.selTimeJone).click();
    await $(this.addTimeJone).click();
    Logger.info("setTimeJone");
    return timeJone;
  }

  async editTimeZone() {
    var editTimeZone = "(UTC-11:00) Coordinated Universal Time-11";
    var getTime = await this.getTimeJone();
    Logger.info("getTime", getTime)
    if (editTimeZone == getTime) {
      return editTimeZone;

    } else {
      await $(this.selTimeJone).click();
      await $(this.edtTimeJone).click();
      // Logger.info("editTimeZone", timeJone);
      return editTimeZone;
    }
  }


  async getTimeJone() {
    var timeJone = await $(this.selTimeJone).getText();
    Logger.info("getTimeJone:-", timeJone);
    return timeJone;
  }

  async setDomain() {
    var domain = "Battery Management System";
    await $(this.selDomain).click();
    await $(this.addDomain).click();
    Logger.info("setDomain");
    return domain;
  }

  async editDomain() {
    var domain = "Battery Thermal Management System";

    var domaiData = await this.getDomain();
    if (domain == domaiData) {
      return domain;
    } else {
      await $(this.selDomain).click();
      await $(this.edtDomain).click();
      Logger.info("editDomain", domain);
      return domain;
    }

  }

  async getDomain() {
    var domain = await $(this.selDomain).getText();
    Logger.info("getDomain", domain);//giving moredata at end
    return domain;
  }

  async setDataInterval() {
    var dataInt = "10 - sec";
    await $(this.selDataInterval).click();
    await $(this.addDataInterval).click();
    Logger.info("setDataInterval");
    return dataInt;
  }

  async editDataInterval() {
    var dataInt = "5 - sec";
    var getDataInt = await this.getDataInterval();

    if (dataInt == getDataInt) {
      return dataInt;
    } else {
      await $(this.selDataInterval).click();
      await $(this.edtDataInterval).click();
      Logger.info("editDataInterval", dataInt);
      return dataInt;
    }

  }

  async getDataInterval() {
    var dataInt = await $(this.selDataInterval).getText();
    Logger.info("getDataInterval", dataInt);
    return dataInt;
  }

  async setplantControllerID() {
    var plantId = "IND01";
    await $(this.selControllerId).click();
    await $(this.selControllerId).setValue(plantId);
    Logger.info("setplantControllerID");
    return plantId;
  }

  async editplantControllerID() {
    var plantId = "IND0111";
    await $(this.selControllerId).click();
    await $(this.selControllerId).setValue(plantId);
    Logger.info("editplantControllerID", plantId);
    return plantId;
  }

  async getplantControllerID() {
    await $(this.selControllerId).click();
    var plantId = await $(this.selControllerId).getValue();
    Logger.info("getplantControllerID", plantId);
    return plantId;
  }

  async setContactPersonName() {
    var name = "Adani";
    await $(this.selContactPerson).click();
    await $(this.selContactPerson).setValue(name);
    Logger.info("setContactName");
    return name;
  }


  async editContactPersonName() {
    var name = "Reliance";
    await $(this.selContactPerson).click();
    await $(this.selContactPerson).setValue(name);
    Logger.info("editContactPersonName", name);
    return name;
  }
  async getContactPersonName() {
    await $(this.selContactPerson).click();
    var name = await $(this.selContactPerson).getValue();
    Logger.info("getContactName", name);
    return name;
  }

  async setMobileNo() {
    var no = 9999999999;
    await $(this.selMobileNo).click();
    await $(this.selMobileNo).setValue(no);
    Logger.info("setMobileNo");
    return no;
  }

  async editMobileNo() {
    var no = 9999999000;
    await $(this.selMobileNo).click();
    await $(this.selMobileNo).setValue(no);
    Logger.info("editMobileNo", no);
    return no;
  }

  async getMobileNo() {
    await $(this.selMobileNo).click();
    var no = await $(this.selMobileNo).getValue();
    Logger.info("getMobileNo", no);
    return no;
  }

  async setEmailId() {
    var eId = "test@gmail.com";
    await $(this.selEmailId).click();
    await $(this.selEmailId).setValue(eId);
    Logger.info("setEmailId");
    return eId;
  }

  async editEmailId() {
    var eId = "testedit@gmail.com";
    await $(this.selEmailId).click();
    await $(this.selEmailId).setValue(eId);
    Logger.info("editEmailId", eId);
    return eId;
  }

  async getEmailId() {
    await $(this.selEmailId).click();
    var eId = await $(this.selEmailId).getValue();
    Logger.info("getEmailId", eId);
    return eId;
  }

  //filter for assertion process

  async readDefaultData(shortname) {
    var shortName = await this.getShortName();
    var longName = await this.getLongName();
    var latitude = await this.getLatitudeValue();

    Logger.info("filterForReadDefaultData", shortName, longName, latitude)
    return [shortName, longName, latitude];
  }

  async setLongNameParameter(name) {
    await $(this.selLongName).click();
    await $(this.selLongName).setValue(name);
    Logger.info("setLongName");
    return name;
  }
  async setShortNameParameter(name) {
    await $(this.selShortName).click();
    await $(this.selShortName).setValue(name);
    Logger.info("setShortName");
    return name;
  }
  async setProtocolTypeParameter(name) {
    await $(this.selProtocolType).click();
    await $(this.addProtocolType).click();
    Logger.info("setProtocolType");
    return name;

  }
  async setLatitudeValueParameter(latitude) {
    await $(this.selLatitudeId).click();
    await $(this.selLatitudeId).setValue(latitude);
    Logger.info("setLatitudeValue");
    return latitude;
  }


  async setDefaultData(shortname, longname, latitude) {

    await this.setShortNameParameter(shortname);
    await this.setLongNameParameter(longname);
    await this.setLatitudeValueParameter(latitude);
    await this.saveEditedData();
  }


  async filterForCheck(shortname) {
    await $(this.clickOnShortName).click();
    await $(this.shortNameFilter).click();
    await $(this.shortForFilter).click();
    await $(this.inputProjectCodeForCheck).setValue(shortname);
    await $(this.inputProjectCodeForCheck).click();
    await browser.pause(2000);
    await $(this.shortForFilter).click();
    await browser.pause(2000);
  }

  async compareAssertionData(beforeEdit, afterEdit) {
    expect(beforeEdit).toEqual(afterEdit);
  }

}
export default new ManagementProjects();

