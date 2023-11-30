
// import { numberOfElementsToBe } from "wdio-wait-for";
import PlantNameData from "../Data/PlantNameData.js";
import HomePage from "./HomePage.js";
import FilePathData from "../Data/FilePathData.js";
var xlsx = require('xlsx');
var Log4js = require("log4js");
var Logger = Log4js.getLogger();
Logger.level = "debug";
const path = require('path');

class JmrPage {
    // Selectors
    cmms = "#menuWrapper #CMMS";
    jmr = "//a[contains(text(),'Joint Meter Reading')]";
    searchBtn = "#SearchId";
    addBtn = '//*[@id="Add-Id"]';
    cancelBtn = '//*[@id="Cancel-Id"]';
    yesBtnUnderCancel = '(//*[@class="options"]/*)[1]';
    filterBtn = "#Filter-Id";
    scrollViewSelector = "(//*[@class='multiselect-item-checkbox ng-star-inserted'])/*[contains(text(),'Approved')]";
    ddlSpvName = "//span[contains(text(),'Select SPV Name')]";

    chkSelectAllSpvName = "//*[@id='SPVName']/*/*[2]/*[1]/*[1]";
    ddlLocation = "//span[contains(text(),'SelectLocationText')]";
    ddlUpBtnSpvName = '(//*[@class="dropdown-multiselect__caret"])[1]';
    chkSelectAllLocation = "//*[@id='Location']/*/*[2]/*[1]/*[1]";
    ddlUpBtnLocation = "//*[@id='Location']/*[1]/*[1]/span/*[2]";
    ddlAssignedTo = "//*[@id='UserID']";
    chkSelectAllAssignedTo = "//*[@id='UserID']/*[1]/*[2]/*[1]/*[1]";
    ddlUpBtnAssignedTo = "//*[@class='dropdown-multiselect--active']/*";
    ddlApprover = "//*[@id='UserID1']";
    chkSelectAllApprover = "//*[@id='UserID1']/*/*[2]/*[1]/*[1]";
    ddlUpBtnApprover = "//*[@id='UserID1']/*[1] /*[1]/span/*[2]/*";
    calenderBtnBillingMonth = "//*[@id='jmr-datepicker-from1']";
    btnDoneBillingMonth = "//*[@class='mat-button-wrapper']//*[contains(text(),'done')]";
    ddlStatus = "//*[@id='MultiStatusId']"; //(//*[@class="multiselect-dropdown"])[6]
    ddtStatusSelectAll = "((//*[@class='multiselect-item-checkbox ng-star-inserted'])/*[contains(text(),'Select All')])[6]";
    ddlStatusUpBtn = "(//*[@class='dropdown-multiselect__caret'])[6]"
    searchFilterBtn = "//*[@id='AutoRenewId']";
    resetFilterBtn = "#ResetId";
    spvNameGridBtn = "//*[@class='ag-header-viewport']/*/*/*[3]/*[3]/*[1]";
    spvNameSortBtn = "//*[@class='ag-header-container']/*/*[3]/*[3]";
    spvNameGridFilterBtn = '(//*[@class="ag-icon ag-icon-menu"])[1]';
    spvNameGridFilterText = "//*[@id='ag-10459-input']";
    jmrDownloadBtn = "#Download-Id";
    paginationElement = '//*[@class="ag-paging-row-summary-panel"]';
    billingMonthData = '(//*[@col-id="BillingDate"][text()="Nov-2023"])';
    totalJmrInPagination = '(//*[@class="ag-paging-row-summary-panel-number"])[3]';
    jmrRecordsSelector = '(//*[@class="ag-center-cols-container"]/*)[1]';
    jmrCodeColumnSort = '(//*[@col-id ="JmrCode"])[1]';
    jmrCodeFirstRowData = '(//*[@col-id="JmrCode"])[2]';
    spvNameGridColumn = '//*[@class="ag-icon ag-icon-columns"]';
    spvNameGridColumnSNo = '((//*[@class="ag-column-select-column ag-column-select-indent-0"])[2]/*/*/*)[1]';
    sNoColumn = '//*[@class="ag-header-cell-text" and text()="Sl No"]';
    chkAllJmr = '(((//*[@class="ag-header-cell ag-focus-managed"])[1]/*)[2]/*)[2]/*';
    billingMonthColumnData = '//*[@col-id="BillingDate"]';
    btnBulkUpdate = '//*[@id="bulkUpdateId"]';
    btnCalenderBillingMonthUnderBulkUpdate = '(//*[@class="mat-focus-indicator mat-icon-button mat-button-base"])[1]/*[1]';
    btnNextMonthUnderBillingMonth = '//*[@class="mat-calendar-controls"]/*[4]';
    selectFirstDateOfMonthUnderBillingMonth = '(//*[@class="mat-calendar-body-cell-content mat-focus-indicator"])[1]'
    btnDoneInBillingMonthCalender = '//*[@class="cdk-overlay-pane mat-datepicker-popup"]/*/*[3]/*';
    btnCalenderScheduleStartDateUnderBulkUpdate = '(//*[@class="mat-focus-indicator mat-icon-button mat-button-base"])[2]';
    btnCalenderScheduleEndDateUnderBulkUpdate = '(//*[@class="mat-focus-indicator mat-icon-button mat-button-base"])[3]';
    btnSave = '//*[@id="Save-Id"]';
    btnYesConfirmSave = '(//*[@class="primary-cta ng-star-inserted"])[1]';
    btnOkUnderSave = '//*[@class="primary-cta ng-star-inserted"]';
    btnAdd = '#Add-Id ';
    iconSearchAssignedTo = '(//i[@class="fa fa-search"])[1]';
    iconSearchApprover = '(//i[@class="fa fa-search"])[2]';
    nameFromUsers = '(//*[@col-id="UserName"])[2]';
    btnApply = '#applyButton';
    iconPlus = '//span[@class="icon icon-Add"]';
    inputBoxName = '//input[@id="name1-id"]';
    btnSearchAssignedToUnderAddJmr = '(//*[@class="form-input-box"]/*)[10]/*[2]';
    automationUser = '//*[@col-id="UserName"][text()="Automation"]';
    btnApplyAfterselectingUser = '//*[@id="applyButton"]';
    btnSearchApproverUnderAddJmr = '(//*[@class="form-input-box"]/*)[12]/*[2]';
    btnAddAssets = '//*[@class="icon icon-Add"]';
    inputAssetName = '//*[@id="name1-id"]';
    btnsearchAsset = '//*[@id="auto-renew1-id"]';
    selectAsset = '//*[@col-id="AssetName"][text()="XC437214"]';
    // selectBilledUnitsElement = '//*[@row-index="0"]/*[@col-id="BilledUnits"]/*';
    inputBilledUnits = '(//*[@role="rowgroup"]/*[@row-index="0"]/*)[3]/*/*/*';
    inputDeemedGeneration = '(//*[@role="rowgroup"]/*[@row-index="0"]/*/*/*/*)[2]';
    btnYesToConfirmSave = '//*[@class="options"]/*[1]';
    btnOkAfterSaving = '//*[@class="primary-cta ng-star-inserted"]';
    chkBilledUnits = '//*[@id="BilledUnitsId"]/*/*';
    dialogMessage = '//*[@class="dialog-message"]';
    firstAddedAsset = '//*[@row-index="0"]';
    btnDeleteAsset = '//*[@class="fa fa-trash-o"]';
    btnEditOnJmrPage = '//*[@id="Edit-Id"]';
    btnDownloadUploadedFileInJmr = '//*[@id="jmr-span-download"]';
    btnDeleteUploadedFileInJmr = '//*[@id="jmr-span-delete"]';
    jmrStatusColumn = '//*[@row-id="69"]//*[@col-id="JmrStatus"]';
    dropDownJmrStatus = '//*[@class="ag-picker-field-display"]';



    jmrAssignedToName = '//*[@row-id="69"]/*[@col-id="AssignedToName"]';
    lblFiles = '(//*[@class="mat-ripple mat-tab-label mat-focus-indicator ng-star-inserted"])[2]';
    btnUpload = '(//*[@class="mat-tooltip-trigger bttn action-btn"])[3]';

    //t
    navClick = '(//*[@class="ag-input-field-input ag-checkbox-input"])[10]';
    filClick = '[id="Filter-Id"]';
    automationClick = '(//*[@class="dropdown-btn"])[4]';
    selAssignedTo = '(//div[contains(text(), "Automation")])[3]';
    selStatus = '(//*[@class="dropdown-btn"])[6]';
    selInprogressStatus = '(//li[@class="multiselect-item-checkbox ng-star-inserted"])[61]'
    selApprovedStatus = '(//li[@class="multiselect-item-checkbox ng-star-inserted"])[63]';
    selFilter = '//button[@class="mat-tooltip-trigger bttn action-btn"]';
    selectNavFilterList = '(//*[@class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first ag-after-created ag-row-selected"])[2]';
    getProjectName = '//*[@col-id="SPVName" and @class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value"]';
    getMonthYearData = '(//*[@col-id="BillingDate"])[2]'
    jmrMeterdata = '(//*[@col-id="JmrCode"])[2]';
    //
    fetchProjectCode = '(//*[@col-id="ProjectCode"])[2]';
    fetchJmrhStartingDate = '#jmr-input-schedule-start-date1';
    fetchJmrEndDate = '#jmr-input-schedule-end-date1';
    fethBillingMonthDate = '(//*[@id="BillingMonthId"])';
    fetchDemmedGen = '(//*[@class="input-renderer ng-untouched ng-pristine ng-valid"])[2]';
    fetchUbilledData = '(//*[@class="input-renderer ng-untouched ng-pristine ng-valid"])[1]';

    //project master
    projectManagement = '(//*[@class="menu-scroll"])[1]';
    selectProjects = '(//*[@class="txt-12"])[1]';
    selectDMRCProjectName = '//*[@col-id="ProjectShortName"][contains(text(),"IN.RADI.ACMS")]';

    refernaceCodeData = '(//*[@id="project-referenceCodeId"])';
    fetchBillingDataMonth = '(//*[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value ag-cell-focus"])';

    //erp api
    btnErpApiStatus = '//a[contains(text(), "ERP API Status")]';
    fromDateSelector = '(//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"])[1]';
    selectDateForFilter = '[aria-label="November 24, 2023"]';
    //selectRightTick = '(//*[@class="mat-button-wrapper"])[12]';
    clickMeterRight = '//*[@id="jrm-btn-apply"]';
    selectRightTik = '[class="mat-focus-indicator ng-tns-c246-11 mat-button mat-stroked-button mat-button-base"]';
    selectToDate = '(//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"])[2]';
    selectSearchOption = '(//*[@class="material-icons"])[2]';
    firstColProjectName = '(//div[@col-id="ProjectName"])[2]';
    erpExpectedStatus = '(//div[@col-id="Status"])[3]';
    erpUpdateOn = '(//*[@col-id="UpdatedOn"])[3]';
    btnView = '[id="View-Id"]';
    getNavBodyData = '(//*[@class="default-input ng-untouched ng-pristine"])[2]';
    //

    //jmr9
    clickBilledUnit = '(//*[@col-id="BilledUnits"])[2]';
    clickBillBox = '(//*[@col-id="UnbilledUnits"])[2]/*';
    setbilledValuee = '[class="input-renderer ng-pristine ng-valid ng-touched"]';
    setDeemedVaalue = '//*[@col-id="DeemedGeneration"]//*[@type="number"]';

    clickOnDeemedGen = '(//*[@class="input-renderer ng-pristine ng-valid ng-touched"])[2]';
    clickOnStat = '(//*[@col-id="JmrStatus"])[2]';
    clickWorkNotstar = '//*[contains(text(),"Work not ")]';
    selectNextMonth = '[aria-label="December 24, 2023"]';
    clickReadType = '(//*[@col-id="JmrReadingType"])[2]';
    clickUnbilled = '//*[contains(text(),"Unbillable")]';
    jmrStartDate = '(//*[@col-id="StartDate"])[2]';
    jmsEndDate = '(//*[@col-id="EndDate"])[2]';
    assignedToSearchIcon = '(//*[@col-id="AssignedToName"])[2]/*/*';
    assignedtoSelectAutomation = '//*[@col-id="UserName" and @tabindex="-1" and @class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value"]';
    assignedToRightClickBtn = '(//*[@class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"])[10]';
    approveToSearchIcon = '[data-action-type="UserSearch2"]';
    clickOnRermarkBox = '(//*[@col-id="Remarks"])[2]';
    setRemarkValue = '(//*[@class="ag-input-field-input ag-text-area-input"])';
    getAssignedToValue = '//*[@row-index="0"]//*[@aria-colindex="14"]//span';
    getApprovedToValue = '//*[@row-index]//*[@aria-colindex="15"]//span';
    clickOkbtn = '[class="primary-cta ng-star-inserted"]';
    getJmrCo = '//*[@row-id="0"]//*[@col-id="JmrCode"]';


    async addJmrWithBilledUnits() {
        await $(this.btnAdd).click();
        await $(this.btnSearchAssignedToUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnSearchApproverUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnAddAssets).click();
        await $(this.inputAssetName).click();
        await $(this.inputAssetName).setValue("XC437214");
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.inputBilledUnits).waitForDisplayed();
        await $(this.inputBilledUnits).click();
        await $(this.inputBilledUnits).setValue("25");
        await $(this.btnSave).click();
        await $(this.btnYesConfirmSave).click();
        await $(this.btnOkAfterSaving).waitForDisplayed();
        await $(this.btnOkAfterSaving).click();
        // await browser.pause(5000);

    }

    async addJmrWithUnBilledUnits() {
        await $(this.btnAdd).click();
        await $(this.chkBilledUnits).click();
        await $(this.btnSearchAssignedToUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnSearchApproverUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnAddAssets).click();
        await $(this.inputAssetName).click();
        await $(this.inputAssetName).setValue("XC437214");
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnSave).waitForDisplayed();
        await $(this.btnSave).click();
        await $(this.btnYesConfirmSave).waitForDisplayed();
        await $(this.btnYesConfirmSave).click();
        await $(this.btnOkAfterSaving).waitForDisplayed();
        await $(this.btnOkAfterSaving).click();
        // await browser.pause(5000);
    }



    // Functions
    async goToCmms() {
        await browser.pause(5000);
        await $(this.cmms).moveTo();
    }
    async clickToJmr() {
        await $(this.jmr).click();
        //await browser.pause(5000);
    }

    async clickToAdd() {
        await $(this.btnAdd).click();
    }
    async clickOnSearch() {
        await $(this.searchBtn).click();
    }
    async assertRefreshBtn() {
        let isDisplayed = await $(this.jmrRecordsSelector).isDisplayed();
        if (isDisplayed == true) {
            Logger.info("Refresh button working well.");
        } else {
            Logger.info("Refresh button is not working well.");
        }
    }
    async clickOnFilterBtn() {
        await $(this.filterBtn).click();
    }
    async clickOnDdlSpvName() {
        await $(this.ddlSpvName).click();
        await $(this.chkSelectAllSpvName).click();
        await $(this.ddlUpBtnSpvName).click();
        // await browser.pause(5000);
    }
    async clickOnDdlLocation() {
        await $(this.ddlLocation).click();
        await $(this.chkSelectAllLocation).click();
        await $(this.ddlUpBtnLocation).click();
        await browser.pause(5000);
    }
    async clickOnAssignedTo() {
        await $(this.ddlAssignedTo).click();
        await $(this.chkSelectAllAssignedTo).click();
        await $(this.ddlUpBtnAssignedTo).click();
        await browser.pause(5000);
    }
    async clickOnApprover() {
        await $(this.ddlApprover).click();
        await $(this.chkSelectAllApprover).click();
        await $(this.ddlUpBtnApprover).click();
        await browser.pause(5000);
    }
    async clickOnBillingMonth() {
        await $(this.calenderBtnBillingMonth).click();
        await $(this.btnDoneBillingMonth).click();
        await browser.pause(5000);
    }
    async clickOnStatus() {
        await $(this.ddlStatus).click();
        await $(this.scrollViewSelector).scrollIntoView();
        await $(this.ddtStatusSelectAll).click();
        await $(this.ddlStatusUpBtn).click();
    }
    async clickOnFilterSearchBtn() {
        await $(this.searchFilterBtn).click();
    }
    async clickOnFilterResetBtn() {
        await $(this.resetFilterBtn).click();
        await browser.pause(5000);
    }
    async clickOnSpvNameGridBtn() {
        await $(this.spvNameGridBtn).click();
        await browser.pause(5000);
    }
    async clickOnSpvNameSortBtn() {
        await $(this.spvNameSortBtn).click();
        await browser.pause(5000);
    }
    async clickOnSpvNameGridFilterBtn() {
        await $(this.spvNameGridFilterBtn).click();
        await browser.pause(2000);
    }
    async sendTextOnSpvNameGridFilter() {
        await $(this.spvNameGridFilterText).setValue("DMRC");
        await browser.pause(2000);
    }
    async clickOnDownloadJmrBtn() {
        await $(this.jmrDownloadBtn).click();
        await browser.pause(10000);
    }
    async clickOnJmrCodeColumnSort() {
        await $(this.jmrCodeColumnSort).click();
    }
    async verifyJmrCodeSorting() {
        const firstRowJmrCodeDataBeforeSort = await $(this.jmrCodeFirstRowData).getText();
        await this.clickOnJmrCodeColumnSort();
        const firstRowJmrCodeDataAfterSort = await $(this.jmrCodeFirstRowData).getText();

        if (firstRowJmrCodeDataBeforeSort != firstRowJmrCodeDataAfterSort) {
            await Logger.info("Sorted");
        } else {
            await Logger.info("Not Sorted");
        }
    }

    async clickOnSpvNameColumnGrid() {
        await $(this.spvNameGridColumn).click();
        await $(this.spvNameGridColumnSNo).click();
        await browser.pause(2000);
    }
    async verifyColumnOperation() {
        const isDisplayed = await $(this.sNoColumn).isDisplayed();
        if (isDisplayed == false) {
            Logger.info("Column level operations works well.");
        } else {
            Logger.info("Column level operations works not well.");
        }
    }

    async clickOnAddJmr() {
        await $(this.addBtn).click();
        await browser.pause(2000);
    }
    async clickOnCancel() {
        await $(this.cancelBtn).click();
        await $(this.yesBtnUnderCancel).click();
        await browser.pause(2000);
    }

    async verifyCancelBtn() {
        const isClickable = await $(this.cancelBtn).isClickable();
        if (isClickable == false) {
            Logger.info("Cancel button works.")
        } else {
            Logger.info("Cancel button not works.")
        }
    }

    async getPaginationInfo() {
        let pagesInfo = await $(this.paginationElement).getText();
        await Logger.info("Pagination Data : ", pagesInfo);
    }

    async clickAssignedToSearch() {
        await $(this.iconSearchAssignedTo).click();
        await browser.pause(2000);
    };

    async selectNameFromUsers() {
        await $(this.nameFromUsers).waitForDisplayed();
        await $(this.nameFromUsers).click();
        await $(this.btnApply).click();
    }

    async clickApproverSearch() {
        await $(this.iconSearchApprover).click();
        await browser.pause(2000);
    }
    async clickOnPlusIcon() {
        await $(this.iconPlus).click();
        await browser.pause(4000);
        await $(this.inputBoxName).setValue("XC");
        await $(this.inputBoxName).waitForDisplayed({ timeout: 6000 });
    }

    async verifyFilterWithBillingMonth() {
        const totalJmrBillingMonthLength = await $$(this.billingMonthData).length;
        const billingMonthDataArray = [];
        for (let i = 0; i < totalJmrBillingMonthLength; i++) {
            let tempData = await $$(this.billingMonthData)[i].getText();
            billingMonthDataArray.push(tempData);
        }
        Logger.info("Billing month data array : ", billingMonthDataArray);
        const billingMonthExpectedData = ['Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023'];
        if (JSON.stringify(billingMonthDataArray) == JSON.stringify(billingMonthExpectedData)) {
            Logger.info("Test Case 2 Passed");
            Logger.info(billingMonthDataArray, billingMonthExpectedData);
        } else {
            Logger.info("Test Case 2 Failed.")
            Logger.info(billingMonthDataArray, billingMonthExpectedData);
        }
    }

    async getTotalJMRBefore() {
        let totalJmrBefore = $(this.totalJmrInPagination).getText();
        return totalJmrBefore;
    }

    async getTotalJmrAfter() {
        let totalJmrAfter = $(this.totalJmrInPagination).getText();
        return totalJmrAfter;
    }

    async assertResetBtn() {
        let totalJmrBefore = this.getTotalJMRBefore();
        let totalJmrAfter = this.getTotalJmrAfter();
        if (totalJmrAfter != totalJmrBefore) {
            Logger.info("Test Case 3 Passed.");
        } else {
            Logger.info("Test Case 3 Failed.")
        }

    }

    async chkAllJmrInJmr() {
        await $(this.chkAllJmr).click();
        await browser.pause(5000);

    }

    async fetchBillingMonthData() {
        const billingMonthDataBeforeBulkUpdate = [];
        const lengthOfData = await $$(this.billingMonthColumnData).length;
        for (let i = 0; i < lengthOfData; i++) {
            billingMonthDataBeforeBulkUpdate.push(await $$(this.billingMonthColumnData)[i].getText());
        }
        Logger.info(billingMonthDataBeforeBulkUpdate);
        return billingMonthDataBeforeBulkUpdate;
    }

    async clickOnBulkUpdateBtn() {
        await $(this.btnBulkUpdate).click();
        await browser.pause(5000);
    }

    async selectDateForBillingMonthUnderBulkUpdate() {
        await $(this.btnCalenderBillingMonthUnderBulkUpdate).click();
        await $(this.btnNextMonthUnderBillingMonth).click();
        await $(this.selectFirstDateOfMonthUnderBillingMonth).click();
        await $(this.btnDoneInBillingMonthCalender).click();
        await $(this.btnSave).click();
        await $(this.btnYesConfirmSave).click();
        await $(this.btnOkUnderSave).click();
        // await browser.pause(7000);
    }

    async verifyBulkUpdate() {
        const BillingMonthDataBeforeBulkUpdate = await this.fetchBillingMonthData();
        await this.chkAllJmrInJmr();
        await this.clickOnBulkUpdateBtn();
        await this.selectDateForBillingMonthUnderBulkUpdate();
        await this.clickOnSearch();
        const BillingMonthDataAfterBulkUpdate = await this.fetchBillingMonthData();
        Logger.info(BillingMonthDataBeforeBulkUpdate, BillingMonthDataAfterBulkUpdate);
        let temp = true;
        for (let i = 1; i < BillingMonthDataAfterBulkUpdate.length; i++) {
            if (BillingMonthDataBeforeBulkUpdate[i] != BillingMonthDataAfterBulkUpdate[i]) {
                temp = true;
            } else {
                temp = false;
            }
        }
        // if(temp == false){
        //     Logger.info("Bulk Update Failed.");
        // }
    }

    async chooseAsset() {
        await browser.pause(2000);
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).waitForDisplayed();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
    }
    async validationForJmrFields() {
        await $(this.btnSave).click();
        await $(this.btnOkUnderSave).waitForDisplayed();
        await $(this.btnOkUnderSave).click();
    }
    async addBilledUnits() {
        await $(this.inputBilledUnits).waitForDisplayed();
        await $(this.inputBilledUnits).click();
        await $(this.inputBilledUnits).setValue("25");
    }
    async addDeemedGeneration() {
        await $(this.inputDeemedGeneration).waitForDisplayed();
        await $(this.inputDeemedGeneration).click();
        await $(this.inputDeemedGeneration).setValue("25");
    }
    async confirmSave() {
        await $(this.btnSave).waitForDisplayed();
        await $(this.btnSave).click();
        await $(this.btnYesConfirmSave).waitForDisplayed();
        await $(this.btnYesConfirmSave).click();
        await $(this.btnOkAfterSaving).waitForDisplayed();
        await $(this.btnOkAfterSaving).click();
    }

    async verifyLastJmrWithBilledUnits() {
        await $(this.totalJmrInPagination).waitForDisplayed();
        let totalJmr = await $(this.totalJmrInPagination).getText();
        let lastBillableJmrData = '//*[@row-id="' + (totalJmr - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]';
        let lastBilledUnitsData = await $(lastBillableJmrData).getText();
        let lastAddedBilledUnits = lastBilledUnitsData.substr(0, 2)
        if (lastAddedBilledUnits == 25) {
            Logger.info("The user can create a JMR with billed units");
        } else {
            Logger.info("The user can't create a JMR with billed units");
        }
    }

    async verifyLastJmrWithNonBilledUnits() {
        await $(this.totalJmrInPagination).waitForDisplayed();
        let totalJmr = await $(this.totalJmrInPagination).getText();
        let lastBillableJmrData = '//*[@row-id="' + (totalJmr - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]';
        let lastBilledUnitsData = await $(lastBillableJmrData).getText();
        let lastAddedBilledUnits = lastBilledUnitsData.substr(0, 1)
        if (lastAddedBilledUnits == 0) {
            Logger.info("The user can create a JMR with non-billed units");
        } else {
            Logger.info("The user can't create a JMR with non-billed units");
        }
    }

    async verifyBilledUnitIsPositive() {
        await $(this.btnAdd).click();
        await $(this.btnSearchAssignedToUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnSearchApproverUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnAddAssets).click();
        await $(this.inputAssetName).click();
        await $(this.inputAssetName).setValue("XC437214");
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.inputBilledUnits).waitForDisplayed();
        await $(this.inputBilledUnits).click();
        let val = '--1';
        await $(this.inputBilledUnits).setValue(val);
        await $(this.btnSave).click();
        let dialogMsg = await $(this.dialogMessage).getText();
        if (dialogMsg == "Please enter valid details") {
            Logger.info("User can't enter billed units less than 0.");
        } else {
            Logger.info("User has not entered billed units less than 0.");
        }
    }

    async verifyDeleteAsset() {
        await $(this.btnAdd).click();
        await $(this.btnSearchAssignedToUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnSearchApproverUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnAddAssets).click();
        await $(this.inputAssetName).click();
        await $(this.inputAssetName).setValue("XC437214");
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnDeleteAsset).click();
        let isDisplayed = await $(this.firstAddedAsset).isDisplayed();
        if (isDisplayed == true) {
            Logger.info('The delete asset is not working fine');
        } else {
            Logger.info('The delete asset is working fine');
        }
    }

    async verifyEditJmr() {
        await $(this.totalJmrInPagination).waitForDisplayed();
        let totalJmr = await $(this.totalJmrInPagination).getText();
        let lastBillableJmrData = '//*[@row-id="' + (totalJmr - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]';
        await $(lastBillableJmrData).click();
        await $(this.btnEditOnJmrPage).click();
        await $(this.inputBilledUnits).click();
        await $(this.inputBilledUnits).setValue('40');
        await $(this.btnSave).waitForDisplayed();
        await $(this.btnSave).click();
        await $(this.btnYesConfirmSave).waitForDisplayed();
        await $(this.btnYesConfirmSave).click();
        await $(this.btnOkAfterSaving).waitForDisplayed();
        await browser.pause(2000);
        await $(this.btnOkAfterSaving).click();
        await $(this.totalJmrInPagination).waitForDisplayed();
        let totalJmrAfterEdit = await $(this.totalJmrInPagination).getText();
        let lastEditedBillableJmrData = '//*[@row-id="' + (totalJmrAfterEdit - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]'; 4
        let lastEditedBilledUnitsData = await $(lastEditedBillableJmrData).getText();
        let lastEditedBilledUnits = lastEditedBilledUnitsData.substr(0, 2)
        if (lastEditedBilledUnits = 40) {
            Logger.info("The user can edit the JMR.");
        } else {
            Logger.info("The user can't edit the JMR.");
        }


    }
    async verifyWhetherTheUserIsAbleToDownloadTheFiles() {
        // Download Excel File
        await $(this.jmrDownloadBtn).click();
        await browser.pause(10000);
        // Specify the path to your Excel file
        const workbook = xlsx.readFile(FilePathData.fileData.FilePathJMR_20112023_140314Excel);
        const sheetName = workbook.SheetNames[0]; // Assuming you want to read the first sheet
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);
        Logger.info(data);
        const dataZeroIndex = data[0];
        Logger.info(dataZeroIndex);

        //Assert that Excel File is Downloaded
        expect(dataZeroIndex).toBePresent("SPV Name");
    }

    async clickToFiles() {
        await $(this.lblFiles).click();

    }

    async userIsAbleToDeleteAndDownload() {
        await $(this.btnUpload).click();


    }

    async getAllErpData() {
        const listItems = $(this.getNavBodyData);
        await browser.pause(2000);
        let listItemTexts = await listItems.getValue();
        listItems.forEach((item) => {
            listItemTexts.push(item.textContent);
        });
        let listJsonString = JSON.stringify(listItemTexts);
        let ndata = listJsonString.trim();
        Logger.info("the jsonstring", ndata);
        let projName = ndata.slice(20, 43);
        Logger.info("the proj name is js:", projName);
        let projeCode = ndata.slice(64, 71);
        Logger.info("the project code name is js:", projeCode);
        let plnCode = ndata.slice(90, 98);
        Logger.info("the plant code name is js:", plnCode);

    }
    async projectMasterAlldata() {
        //refernaceCodeData
        const listItems = $(this.refernaceCodeData);
        await browser.pause(2000);
        let listItemTexts = await listItems.getValue();
        listItems.forEach((item) => {
            listItemTexts.push(item.textContent);
        })
        Logger.info("project master all data", listItemTexts);
    }




    async jmrDataMainMethod() {
        await $(this.filClick).click();
        await $(this.automationClick).click();
        await $(this.selAssignedTo).click();
        await $(this.selStatus).scrollIntoView();
        await $(this.selStatus).click();
        await $(this.selApprovedStatus).click();
        await $(this.selStatus).click();
        await $(this.selectSearchOption).click();
        await $(this.selFilter).click();

        const getPrjName = await $(this.getProjectName).getText();
        Logger.info("value project  name is : ", getPrjName);

        const getPrjMonthData = await $(this.getMonthYearData).getText();
        Logger.info("Project year date is : ", getPrjMonthData);

        const jmrMeter = await $(this.jmrMeterdata).getText();
        Logger.info("jmr meret  reading is", jmrMeter);

        const projCode = await $(this.fetchProjectCode).getText();
        Logger.info("jmr project", projCode);


        const projStart = await $(this.fetchJmrhStartingDate).getValue();
        Logger.info("jmr project start date", projStart);

        const projEndDate = await $(this.fetchJmrEndDate).getValue();
        Logger.info("jmr project end date", projEndDate);

        const deemedData = await $(this.fetchDemmedGen).getValue();
        Logger.info("jmr deemed value is:-", deemedData);

        const unbilled = await $(this.fetchUbilledData).getValue();
        Logger.info("jmr billed value is:-", unbilled);

        const bilMon = await $(this.fethBillingMonthDate).getValue();
        Logger.info("jmr month date is:-", bilMon);

        //correct end
        await browser.pause(2000);


    }


    async erpAPRIDatamethod() {
        await $(this.cmms).moveTo();
        await $(this.btnErpApiStatus).click();
        await $(this.selFilter).click();
        await $(this.fromDateSelector).click();
        await $(this.selectDateForFilter).click();
        await $(this.selectRightTick).click();
        await $(this.selectToDate).click();
        await $(this.selectDateForFilter).click();
        await browser.pause(2000);
        await $(this.selectRightTick).click();
        await browser.pause(2000);
        await $(this.selectSearchOption).click();
        await browser.pause(4000);

        const prjName = await $(this.firstColProjectName).getText();
        Logger.info("value first name is : ", prjName);

        const erpUpdOn = await $(this.erpUpdateOn).getText();
        Logger.info("the updated date is : ", erpUpdOn);


        const expStatus = await $(this.erpExpectedStatus).getText();
        Logger.info("expectedStatus ERP value is :", expStatus);

        await $(this.btnView).click();

        //erps json
        const listItems = $(this.getNavBodyData);
        await browser.pause(2000);
        let listItemTexts = await listItems.getValue();
        listItems.forEach((item) => {
            listItemTexts.push(item.textContent);
        });

        let listJsonString = JSON.stringify(listItemTexts);
        let ndata = listJsonString.trim();
        Logger.info("the jsonstring", ndata);
        let projName = ndata.slice(20, 43);
        Logger.info("the proj name is js:", projName);
        let projeCode = ndata.slice(64, 71);
        Logger.info("the project code name is js:", projeCode);
        let plnCode = ndata.slice(90, 98);
        Logger.info("the plant code name is js:", plnCode);



        //project master
        await $(this.projectManagement).click();
        browser.pause(3000);
        await $(this.selectProjects).click();

        await $(this.selectDMRCProjectName).click();
        await $(this.btnView).click();

        const listItemss = await $(this.refernaceCodeData);
        const da = await listItemss.getValue();
        const listDa = await da.trim();
        Logger.info("list da:", listDa)

        let proName = await listDa.slice(8, 31);
        Logger.info("the project name is:", proName);

        let proCode = await listDa.slice(32, 39);
        Logger.info("the project code is:", proCode);

        let planCode = await listDa.slice(40, 49);
        Logger.info("the plant code is:", planCode);

        // comapre name
        Logger.info(proName);
        Logger.info(projName);


        expect(proName).toEqual(projName);
        expect(proCode).toEqual(projeCode);
        expect(planCode).toEqual(plnCode);
        await browser.pause(2000);
    }



    //tc9

    async getJmrCode() {
        await $(this.getJmrCo).click();
        const jmrCode = await $(this.getJmrCo).getText();
        Logger.info("jmr code", jmrCode);

    }


    async filterOpertaionJmr() {
        await $(this.filClick).click();
        await $(this.automationClick).click();
        await $(this.selAssignedTo).click();
        //await browser.pause(2000);
        await $(this.selStatus).scrollIntoView();
        //await browser.pause(2000);
        await $(this.selStatus).click();
        // await browser.pause(2000);
        await $(this.selInprogressStatus).click();
        // await browser.pause(2000);
        await $(this.selFilter).click();
        // await browser.pause(5000);

    }

    async beforeEditingProjectStatus() {
        var getSta = await $(this.clickOnStat).getText();
        Logger.info("status:", getSta);

    }

    async EditingProjectStatus() {
        await $(this.clickOnStat).doubleClick();
        Logger.info("clickeddd")
        await browser.pause(2000);
        await $(this.clickOnStat).click();
        await $(this.clickWorkNotstar).click();

    }

    async beforeEditingReadingType() {
        const readData = await $(this.clickReadType).getText();
        Logger.info("the reasd", readData);
        await browser.pause(2000);

    }

    async EditingReadingType() {
        await $(this.clickReadType).doubleClick();
        await browser.pause(2000);
        await $(this.clickReadType).click();
        await browser.pause(2000);
        await $(this.clickUnbilled).click();
        await browser.pause(2000);
    }

    async beforeEditingBilledMonth() {
        const bilMonth = await $(this.billingMonthData).getText();
        Logger.info("bil month", bilMonth);
    }

    async EditingBilledMonth() {
        await $(this.billingMonthData).doubleClick();
        await browser.pause(2000);
        await $(this.btnCalenderBillingMonthUnderBulkUpdate).click();
        await browser.pause(2000);
        await $(this.btnNextMonthUnderBillingMonth).click();
        await $(this.selectNextMonth).click();
        await browser.pause(2000);
        await $(this.selectRightTik).waitForDisplayed();
        await $(this.selectRightTik).click();
        await browser.pause(2000);

    }

    async beforeEditingJmrStaringDate() {
        const jmstart = await $(this.jmrStartDate).getText();
        Logger.info("jmrstart", jmstart);
    }

    async EditingJmrDate() {
        await $(this.jmrStartDate).doubleClick();
        await $(this.btnCalenderBillingMonthUnderBulkUpdate).click();
        await browser.pause(2000);
        await $(this.btnNextMonthUnderBillingMonth).click();
        await $(this.selectNextMonth).click();
        await browser.pause(2000);
        await $(this.selectRightTik).click()
        await browser.pause(2000);

    }

    async beforeEditingJmrEndDate() {
        const jmrEndD = await $(this.jmsEndDate).getText();
        Logger.info("end date is", jmrEndD);
    }

    async EditingJmrEndDate() {
        await $(this.jmsEndDate).doubleClick();
        await $(this.btnCalenderBillingMonthUnderBulkUpdate).click();
        await browser.pause(2000);
        await $(this.btnNextMonthUnderBillingMonth).click();
        await $(this.selectNextMonth).click();
        await browser.pause(2000);
        await $(this.selectRightTik).click();
        await browser.pause(2000);
    }
    async beforeEditAssignedToValue() {
        const assignedToV = await $(this.getAssignedToValue).getText();
        Logger.info("assigned to", assignedToV);
    }

    async editingAssignedTo() {
        await browser.pause(2000);
        await $(this.assignedToSearchIcon).click();
        await browser.pause(2000);
        await $(this.assignedtoSelectAutomation).click();
        await browser.pause(2000);
        await $(this.assignedToRightClickBtn).click();
        await browser.pause(2000);
    }


    async beforeEditApprover() {
        const approvedTo = await $(this.getApprovedToValue).getText();
        Logger.info("approved to", approvedTo);
    }

    async editingApprovedTo() {
        await browser.pause(2000);
        await $(this.approveToSearchIcon).click();
        await browser.pause(2000);
        await $(this.assignedtoSelectAutomation).click();
        await browser.pause(2000);
        await $(this.assignedToRightClickBtn).click();
        await browser.pause(2000);
    }

    async beforeEditRemarkValue() {
        const remark = await $(this.clickOnRermarkBox).getValue();
        Logger.info("the remark:", remark);

    }

    async editRemarkValue() {
        await browser.pause(2000);
        await $(this.clickOnRermarkBox).doubleClick();
        await browser.pause(2000);
        await $(this.setRemarkValue).setValue("remark");
        await browser.pause(2000);
        await $(this.jmrStartDate).click();
        await browser.pause(2000);
    }

    async beforeEditBilledAndDeemedValue() {
        await $(this.iconPlus).click();
        await browser.pause(2000);
        await $(this.clickBilledUnit).click();
        await browser.pause(2000);
        await $(this.clickBilledUnit).click();
        const unbilledVal = await $(this.fetchUbilledData).getValue();
        Logger.info("unbilled value ", unbilledVal);
        const deemedVal = await $(this.setDeemedVaalue).getValue();
        Logger.info("the deemedValue", deemedVal);
        await $(this.clickMeterRight).click();
        await browser.pause(2000);
        await $(this.clickOkbtn).click();
        await browser.pause(2000);
    }


    async editUnbilledAndDeemedValue() {
        await $(this.iconPlus).click();
        await browser.pause(2000);
        await $(this.clickBilledUnit).click();
        await browser.pause(2000);
        await $(this.clickBilledUnit).click();
        await $(this.fetchUbilledData).setValue("100");
        await browser.pause(2000);
        await $(this.setDeemedVaalue).setValue("101");
        await $(this.selectRightTik).click();
        await $(this.clickOkbtn).click();
        await browser.pause(2000);
    }




}

export default new JmrPage;

