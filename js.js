
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
        await browser.pause(5000);
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
            console.log("Refresh button working well.");
        } else {
            console.log("Refresh button is not working well.");
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
            await console.log("Sorted");
        } else {
            await console.log("Not Sorted");
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
            console.log("Column level operations works well.");
        } else {
            console.log("Column level operations works not well.");
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
            console.log("Cancel button works.")
        } else {
            console.log("Cancel button not works.")
        }
    }

    async getPaginationInfo() {
        let pagesInfo = await $(this.paginationElement).getText();
        await console.log("Pagination Data : ", pagesInfo);
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
        console.log("Billing month data array : ", billingMonthDataArray);
        const billingMonthExpectedData = ['Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023', 'Nov-2023'];
        if (JSON.stringify(billingMonthDataArray) == JSON.stringify(billingMonthExpectedData)) {
            console.log("Test Case 2 Passed");
            console.log(billingMonthDataArray, billingMonthExpectedData);
        } else {
            console.log("Test Case 2 Failed.")
            console.log(billingMonthDataArray, billingMonthExpectedData);
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
            console.log("Test Case 3 Passed.");
        } else {
            console.log("Test Case 3 Failed.")
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
        console.log(billingMonthDataBeforeBulkUpdate);
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
        console.log(BillingMonthDataBeforeBulkUpdate, BillingMonthDataAfterBulkUpdate);
        let temp = true;
        for (let i = 1; i < BillingMonthDataAfterBulkUpdate.length; i++) {
            if (BillingMonthDataBeforeBulkUpdate[i] != BillingMonthDataAfterBulkUpdate[i]) {
                temp = true;
            } else {
                temp = false;
            }
        }
        // if(temp == false){
        //     console.log("Bulk Update Failed.");
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
            console.log("The user can create a JMR with billed units");
        } else {
            console.log("The user can't create a JMR with billed units");
        }
    }

    async verifyLastJmrWithNonBilledUnits() {
        await $(this.totalJmrInPagination).waitForDisplayed();
        let totalJmr = await $(this.totalJmrInPagination).getText();
        let lastBillableJmrData = '//*[@row-id="' + (totalJmr - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]';
        let lastBilledUnitsData = await $(lastBillableJmrData).getText();
        let lastAddedBilledUnits = lastBilledUnitsData.substr(0, 1)
        if (lastAddedBilledUnits == 0) {
            console.log("The user can create a JMR with non-billed units");
        } else {
            console.log("The user can't create a JMR with non-billed units");
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
            console.log("User can't enter billed units less than 0.");
        } else {
            console.log("User has not entered billed units less than 0.");
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
            console.log('The delete asset is not working fine');
        } else {
            console.log('The delete asset is working fine');
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
            console.log("The user can edit the JMR.");
        } else {
            console.log("The user can't edit the JMR.");
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



    //tarun jmr testcase 26
    navClick = '(//*[@class="ag-input-field-input ag-checkbox-input"])[10]';
    filClick = '(//*[@class="mat-tooltip-trigger bttn action-btn"])[2]';
    automationClick = '(//*[@class="dropdown-btn"])[4]';
    selAssignedTo = '(//div[contains(text(), "Automation")])[3]';
    selStatus = '(//*[@class="dropdown-btn"])[6]';
    selApprovedStatus = '(//li[@class="multiselect-item-checkbox ng-star-inserted"])[63]';
    selFilter = '//button[@class="mat-tooltip-trigger bttn action-btn"]';
    selectNavFilterList = '(//*[@class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first ag-after-created ag-row-selected"])[2]';
    getProjectName = '(//*[@col-id="SPVName"])[2]';
    jmrMeterdata = '(//*[@col-id="JmrCode"])[2]';
    fetchProjectCode = '(//*[@col-id="ProjectCode"])[2]';
    fetchJmrhStartingDate = '#jmr-input-schedule-start-date1';
    fetchJmrEndDate = '#jmr-input-schedule-end-date1';
    fethBillingMonthDate = '(//*[@id="BillingMonthId"])';
    fetchDemmedGen = '(//*[@class="input-renderer ng-untouched ng-pristine ng-valid"])[2]';

    //project master
    projectManagement = '(//*[@class="menu-scroll"])[1]';
    selectProjects = '(//*[@class="txt-12"])[1]';
    selectDMRCProjectName = '[ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value ag-cell-focus]'

    refernaceCodeData = '(//*[@id="project-referenceCodeId"])'

    //(//*[@class="input-renderer ng-untouched ng-pristine ng-valid"])[2]
    //(//*[@col-id="DeemedGeneration"])[2]



    //
    fetchBillingDataMonth = '(//*[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value ag-cell-focus"])';

    //erp api
    btnErpApiStatus = '//a[contains(text(), "ERP API Status")]';
    fromDateSelector = '(//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"])[1]';
    selectDateForFilter = '[aria-label="November 21, 2023"]';
    selectRightTick = '(//*[@class="mat-button-wrapper"])[12]';
    selectToDate = '(//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"])[2]';
    selectSearchOption = '(//*[@class="material-icons"])[2]';
    //getFullText = '(//*[@class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first ag-after-created ag-row-selected"])[2]'
    //compareing text
    //(//*[@class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first ag-after-created ag-row-selected"])[2]
    firstColProjectName = '(//div[@col-id="ProjectName"])[2]';
    expectedStatus = '(//div[@col-id="Status"])[2]';
    btnView = '[id="View-Id"]';
    getNavBodyData = '(//*[@class="default-input ng-untouched ng-pristine"])[2]'

    //expectedStatus = '.ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value ag-cell-focus'

    //erpSrno = '.ag-cell ag-cell-not-inline-editing ag-cell-normal-height serial-number ag-cell-value ag-cell-focus';

    //api page 
    selectFirstNot = '(//*[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height serial-number ag-cell-value"])[1]';
    //eyes button
    slectEye = '(//*[@class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"])[2]';
    //get nav data
    getNavData = '#NavBodyId';

    //compareData(eye)
    getCompareData = '(//*[@class="default-input ng-untouched ng-pristine"])[2]'




    async clinkChkBox() {

        await $(this.navClick).click();
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
        console.log("value project  name is : ", getPrjName);

        const jmrMeter = await $(this.jmrMeterdata).getText();
        console.log("jmr meret  reading is", jmrMeter);

        const projCode = await $(this.fetchProjectCode).getText();
        console.log("jmr project", projCode);

        const viewsBtn = await $(this.btnView).click();


        const projStart = await $(this.fetchJmrhStartingDate).getValue();
        console.log("jmr project start date", projStart);

        const projEndDate = await $(this.fetchJmrEndDate).getValue();
        console.log("jmr project end date", projEndDate);

        const deemedDate = await $(this.fetchDemmedGen).getValue();
        console.log("jmr deemed value is:-", deemedDate);

        const bilMon = await $(this.fethBillingMonthDate).getValue();
        console.log("jmr month date is:-", bilMon);

        await $(this.projectManagement).click();
        await $(this.selectProjects).click();
        // await $(this.selectDMRCProjectName).scrollIntoView();
        await $(this.selectDMRCProjectName).click();




        // const jmrStartDt = await $(this.jmrStartDate).getText();
        // console.log("jmr jmr startdat reading is", jmrStartDt);



        //  //erpApi
        // await $(this.cmms).moveTo();
        //await $(this.btnErpApiStatus).click();
        // await $(this.selFilter).click();
        // await $(this.fromDateSelector).click();
        // await $(this.selectDateForFilter).click();
        // await $(this.selectRightTick).click();
        // await $(this.selectToDate).click();
        // await $(this.selectDateForFilter).click();
        // await $(this.selectRightTick).click();
        // await $(this.selectSearchOption).click();
        // const b = await $(this.firstColProjectName).getText();
        // console.log("value first name is : ", b);
        // const a = await $(this.expectedStatus).getText();
        // console.log("value is : ", a);
        // await $(this.btnView).click();
        // const navb = await $(this.getNavBodyData).getValue();
        // console.log("navbar data is ", navb);
        await browser.pause(4000);

        //await $(this.btnErpApiStatus).scrollIntoView();
        // await $(this.btnErpApiStatus).click();
        // await $(this.jmr).click();

    }
}

export default new JmrPage;


// for (const item of this.selectNavFilterList) {
//     const text = await item.getValue();
//     console.log(text);
// }
