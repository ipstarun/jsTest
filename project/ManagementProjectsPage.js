var Log4js = require("log4js");
var Logger = Log4js.getLogger();
Logger.level = "debug";



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


  //tt   //for project module
  // Selectorsa
  addBtn = '//*[@id="Add-Id"]';
  btnView = '//*[@id="View-Id"]';
  management = '(//*[@class="menu-scroll"])[2]';//'//*[@id="menuWrapper"]/*[@id="Management"]';//'//span[@id="Management"]';
  projects = "//a[contains(text(), 'Projects')]";//'//a[contains(text(),"Projects")]';

  btnEditONProject = '//*[@id="Edit-Id"]';
  // btnSave = '//*[@id="Save-Id"]';

  selLongName = '[itemid="LongNameId"]';
  selShortName = '[id="project-projectShortNameId"]';
  selProtocolType = '[id="projectProtocolTypeId"]';
  addProtocolType = '//*[contains(text(),"FTP")]';
  edtProtocolType = '//*[contains(text(),"Modbus")]';

  selLatitudeId = '[id="latitudeId"]';
  selLongitudeId = '[id="longitudeId"]';
  selPlantLocation = '[id="project-plantLocationId"]';

  selCapacityId = '[id="project-capacityId"]';
  selAddressId = '[id="project-addressId"]';
  selCountryName = '[id="project-countryId"]';
  addCountry = '//*[contains(text(),"Andorra")]';
  edtCountry = '//*[contains(text(),"Angola")]';

  selTimeJone = '[id="project-timezoneId"]';
  addTimeJone = '//*[contains(text(),"(UTC-12:00)")]';
  edtTimeJone = '//*[contains(text(),"(UTC-11:00)")]';

  selDomain = '[id="project-domainId"]';
  addDomain = '//*[contains(text(),"Battery Management System")]';
  //Battery Thermal Management System
  edtDomain = '//*[contains(text(),"Battery Thermal Management System")]';

  selDataInterval = '[id="project-dataIntervalId"]';
  addDataInterval = '//*[contains(text(),"10 - sec")]';
  edtDataInterval = '//*[contains(text(),"5 - sec")]';

  selContactPerson = '[id="project-contactpersonId"]';
  selControllerId = '[id="project-plantControllerId"]';
  selPrimaryAccount = '[name="PrimaryAccount"]';
  selMobileNo = '[id="project-mobileId2"]';
  selEmailId = '[id="project-emailId"]';

  btnOkUnderSave = '//*[@class="primary-cta ng-star-inserted"]';

  //for assertion
  clickOnShortName = '//*[@class="ag-header ag-focus-managed ag-pivot-off"]//*[@col-id="ProjectShortName"]';
  shortNameFilter = '(//*[@col-id="ProjectShortName"])//*[@ref="eMenu"]';
  shortForFilter = '//*[@class="ag-tabs ag-menu ag-focus-managed ag-ltr ag-popup-child"]//*[@class="ag-icon ag-icon-filter"]';
  inputProjectCodeForCheck = '//*[@ref="eCondition1Body"]//*[@aria-label="Filter Value"]';
  //getShortName = '//*[@class="ag-row-even ag-row ag-row-level-0 ag-row-position-absolute ag-row-first ag-after-created ag-row-selected ag-row-focus"]//*[@col-id="ProjectShortName"]';


  getSrNoDataHomePage = '(//*[@class="ag-pinned-left-header"])//*[@col-id="Id"]';
  getShortNameDataHomePage = '(//*[@class="ag-pinned-left-header"])//*[@col-id="ProjectShortName"]';
  getLongNameDataHomePage = '(//*[@class="ag-header-viewport"])//*[@col-id="ProjectLongNameSL"]';
  selectShortNameEdit = '(//*[@row-id="0"])//*[@col-id="ProjectShortName"]';
  cancelBtn = '//*[@id="Cancel-Id"]';
  clickOnExitingProject = '(//*[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-cell-value"])[5]';




  //functions

  async addUser() {
    await $(this.addBtn).click();
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


  async saveData() {
    await $(this.btnSave).click();
    await $(this.btnYes).click();
    browser.pause(3000);
    await $(this.btnOkUnderSave).click();
    browser.pause(2000);
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

  async setProtocolType() {
    var name = "FTP";
    await $(this.selProtocolType).click();
    await $(this.addProtocolType).click();
    Logger.info("setProtocolType");
    return name;

  }

  async editProtocolType() {
    var name = "Modbus";
    await $(this.selProtocolType).click();
    await $(this.edtProtocolType).click();
    Logger.info("editProtocolType", name);
    return name;

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
    await $(this.selCountryName).click();
    await $(this.edtCountry).click()
    Logger.info("editCountry", country);
    return country;
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

  async editTimeJone() {
    var timeJone = "(UTC-11:00)";
    await $(this.selTimeJone).click();
    await $(this.edtTimeJone).click();
    Logger.info("editTimeJone", timeJone);
    return timeJone;
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
    await $(this.selDomain).click();
    await $(this.edtDomain).click();
    Logger.info("editDomain", domain);
    return domain;
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
    await $(this.selDataInterval).click();
    await $(this.edtDataInterval).click();
    Logger.info("editDataInterval", dataInt);
    return dataInt;
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
  async filterForAsserctionCheck(shortname) {

    await $(this.clickOnShortName).click();
    await $(this.shortNameFilter).click();
    await $(this.shortForFilter).click();
    await $(this.inputProjectCodeForCheck).setValue(shortname);
    await $(this.clickOnShortName).click();
    await $(this.btnEditONProject).click();
    await browser.pause(2000);
  }

  async compareAssertionData(beforeEdit, afterEdit) {
    expect(beforeEdit).toEqual(afterEdit);
  }

}
export default new ManagementProjects();

