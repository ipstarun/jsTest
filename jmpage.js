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
    management = '//*[@id="menuWrapper"]/*[@id="Management"]';
    jmr = "//a[contains(text(),'Joint Meter Reading')]";
    projects = '//a[contains(text(),"Projects")]';
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
    chkAssignedToAutomation = '//*[@id="UserID"]//*[@class="dropdown-list"]//*[text()="Automation"]';
    ddlUpBtnAssignedTo = "//*[@class='dropdown-multiselect--active']/*";
    ddlApprover = "//*[@id='UserID1']";
    chkSelectAllApprover = "//*[@id='UserID1']/*/*[2]/*[1]/*[1]";
    chkApprovedAutomation = '//*[@id="UserID1"]//*[@class="dropdown-list"]//*[text()="Automation"]';
    ddlUpBtnApprover = "//*[@id='UserID1']/*[1] /*[1]/span/*[2]/*";
    calenderBtnBillingMonth = "//*[@id='jmr-datepicker-from1']";
    btnDoneBillingMonth = "//*[@class='mat-button-wrapper']//*[contains(text(),'done')]";
    ddlStatus = "//*[@id='MultiStatusId']"; //(//*[@class="multiselect-dropdown"])[6]
    ddtStatusSelectAll = "((//*[@class='multiselect-item-checkbox ng-star-inserted'])/*[contains(text(),'Select All')])[6]";
    ddlSelectWorkNotStarted = '//*[@id="MultiStatusId"]//*[@class="dropdown-list"]//*[text() = "Work not started"]';
    firstJmrStatus = '//*[@row-id="0"]//*[@col-id = "JmrStatus"]';
    lastJmrStatus = '//*[@row-id="23"]//*[@col-id = "JmrStatus"]';
    firstJmrApprover = '//*[@row-id="0"]//*[@col-id = "ApproverName"]';
    lastJmrApprover = '//*[@row-id="23"]//*[@col-id = "ApproverName"]';
    lastJmrAssignedTo = '//*[@row-id="23"]//*[@col-id = "AssignedToName"]';
    firstJmrAssignedTo = '//*[@row-id="0"]//*[@col-id = "AssignedToName"]';
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
    chkAllJmr = '((//*[@col-id="Visible"])[1]/*/*/*)[1]';
    billingMonthColumnData = '//*[@col-id="BillingDate"]';
    btnBulkUpdate = '//*[@id="bulkUpdateId"]';
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
    projectCodeColumnForFirstJmr = '//*[@row-id="0"]/*[@col-id="ProjectCode"]';
    locationColumnForFirstJmr = '//*[@row-id="0"]/*[@col-id="Location"]';
    customerNameColumnForFirstJmr = '//*[@row-id="0"]/*[@col-id="CustomerName"]';
    spvNameColumnForFirstJmr = '//*[@row-id="0"]/*[@col-id="SPVName"]';
    selectDmrcProjectWithShortNameUnderProjects = '//*[@col-id="ProjectShortName" and text()="IN.RADI.ACMS"]';
    btnView = '//*[@id="View-Id"]';
    plantLocationUnderViewProject = '//*[@id="project-plantLocationId"]';
    referenceCodeUnderViewProject = '//*[@id="project-referenceCodeId"]';
    selectDmrcAsset = '//*[@title="IN.RADI.ACMS.AB1349U"]';
    scrollableDivSelector = '//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]';
    scrollableHorizontal = '//div[@class="ag-body-horizontal-scroll-viewport"]';
    btnNextPage = '//*[@aria-label="Next Page" and @aria-disabled="true"]';
    currentPageCount = '[ref="lbLastRowOnPage"]';
    totalJmrCount = '[ref="lbRecordCount"]';
    selectWorkNotStartedFilter = '//div[contains(text(),"Work not started")]';
    billingMonth = '(//*[@col-id="BillingDate"])[2]';
    billingMonthCalender = '(//*[@class="mat-button-wrapper"])[3]';
    selectDateInlineEditing = '[aria-label="December 2, 2023"]';
    btnApplyInlineEditing = '//*[@class="cdk-overlay-pane mat-datepicker-popup"]//mat-icon[contains(text(),"done")]';
    btnAddBilledUnitsAndDeemedGeneration = '(//*[@class="icon icon-Add"])[1]';
    btnEditBilledUnits = '(//*[@class="ng-star-inserted"]/*[@name="Value"])[1]';
    btnEditDeemedGeneration = '(//*[@class="ng-star-inserted"]/*[@name="Value"])[2]';
    btnApplytAfterEditing = '(//*[@class="mat-tooltip-trigger bttn action-btn"])[5]';
    btnSaveAfterBilledUnitsAndDeemedGeneration = '[class="options"]';
    selectStatusInlineEditing = '//div[@row-index="0"]//*[@col-id="JmrStatus"]';
    ddlStatusEditing = '//*[@class="ag-icon ag-icon-small-down"]';
    ddlSt = '//*[@col-id="JmrStatus"]//div[@ref="eDisplayField"]';
    dialogMessageToValidateAttachment = '//*[@class="dialog-message"][contains(text(),"Please add attachments")]';
    btnSortStatus = '//*[@class="ag-header-cell-text"][text() = "Status"]';
    selectFirstJmrCode = '(//*[@col-id="JmrCode"])[2]';
    firstJmrStatus = '(//*[@col-id="JmrStatus"])[2]';
    ddlStatusInEditJmr = '#JmrStatusId';
    ddlSelectApproved = '//*[contains(text(),"Approved")]';
    ddlBtnApproved = '//*[@class="ng-dropdown-panel-items scroll-host"]/*/*/*[contains(text(), "Approved")]';
    dialogMessageToValidateAttachment = '//*[@class="dialog-message"][contains(text(),"Please add attachments")]';
    btnOkDialogMessage = '//*[@class="options"]/*';
    assetListSelectors = '//*[@col-id="AssetId"]';
    selectPlantUnderEditJmr = '//*[@class="ng-value-label ng-star-inserted"][contains(text(),"DMRC Aerocity Metro Station")]';
    btnDelete = '//*[@id="Delete-Id"]';
    btnYesToConfirmDelete = '//*[@class="options"]/*[contains(text() , "Yes")]';
    btnOkAfterSuccessfulDelete = '//*[@class="options"]/*[contains(text() , "Ok")]';
    ddlChooseInProgress = '//*[contains(text(),"In Progress")]';
    selectStatus = '(//*[@class="dropdown-btn"])[6]';
    btnApprovedStatus = '(//li[@class="multiselect-item-checkbox ng-star-inserted"])[59]';
    btnFilesInAddJmr = '//*[@class="mat-tab-label-content"][contains(text() , "Files")]';
    btnUploadFileInAddJmr = '//*[@id="Upload-Id"]//input';
    uploadedFile = '//*[@class="fa fa-file-o"]';
    btnDeleteAttachedFileInAddJmr = '#jmr-span-delete';
    btnYesAfterDeleteAttachedFile = '//*[@class="options"]/*[contains(text(),"Yes")]';
    firstJmrCode = '(//*[@col-id="JmrCode"])[2]';
    btnThreeLinerForJmrCode = '//*[@col-id="JmrCode"]//*[@class="ag-icon ag-icon-menu"]';
    btnFilterUnderThreeLinerIcon = '[aria-label="filter"]';
    inputTextUnderFilter = '(//input[@ref="eInput"][@aria-label = "Filter Value"])[1]';
    selectProjectInFilterJmr = '[id="ProjectId1"]';
    selectAssignedToInFilterJmr = '[id="UserID"]';
    selectApproverInFilterJmr = '[id="UserID1"]'
    selectStatusInFilterBtn = '[id="MultiStatusId"]';
    statusSortInJmr = '//*[@col-id="JmrStatus"]//*[text() = "Status"]';
    firstJmrStatus = '(//*[@col-id="JmrStatus"])[2]';
    firstJmrRecordSNo = '(//*[@col-id="JmrId"])[2]';
    jmrGridInJmr = '[class="grid-layout"]';
    secondJmrStatus = '//*[@aria-rowindex="3"]/*[@col-id="JmrStatus"]';
    btnValidation = '//*[@class="primary-cta ng-star-inserted"]';

    //
    filterProjectCode = '//*[@class="ag-header ag-focus-managed ag-pivot-off"]//*[@col-id="JmrCode"]//*[@ref="eMenu"]//*';
    filterBtnClickJmr = '(//*[@class="ag-tabs-header ag-menu-header"])//*[@class="ag-icon ag-icon-filter"]';
    inputJmrCodeForCheck = '//*[@ref="eCondition1Body"]//*[@aria-label="Filter Value"]';
    clickCapacity = '//*[@ref="gridHeader"]//*[@col-id="Capacity"]';
    clickOnPlantCode = '//*[@ref="gridHeader"]//*[@col-id="ProjectCode"]';
    clickOnBillDate = '//*[@ref="gridHeader"]//*[@col-id="BillingDate"]';



    selFilter = '//button[@class="mat-tooltip-trigger bttn action-btn"]';
    getJmrCodeAfterFilter = '//*[@row-index="0"]//*[@col-id="JmrCode"]';
    fetchUbilledData = '(//*[@class="input-renderer ng-untouched ng-pristine ng-valid"])[1]';
    getDeemedValue = '//*[@col-id="DeemedGeneration"]//*[@type="number"]';
    clickbilled = '//*[contains(text(),"Billable")]';


    selWorkNotStarted = '//*[@class="item2"]//li[@class="multiselect-item-checkbox ng-star-inserted"]//*[contains(text(),"Work not ")]';
    getBilledDateAfterEdit = '//*[@row-index="0"]//*[@col-id="BillingDate"]';//'//*[@row-id="0" and @aria-rowindex="2"]//*[@col-id="BillingDate"]';
    iconPlusE = '//*[@row-id="0"]//span[@class="icon icon-Add"]';

    btnCalenderBillingMonthUnderBulkUpdate = '(//*[@class="mat-focus-indicator mat-icon-button mat-button-base"])[1]/*[1]';
    iconPlus = '//span[@class="icon icon-Add"]';


    //tc_9
    filClick = '[id="Filter-Id"]';
    automationClick = '[id="UserID"]';
    selAssignedTo = '(//div[contains(text(), "Automation")])[3]';
    selStatus = '[id="MultiStatusId"]';
    selInprogressStatus = '//*[@class="item2"]//li[@class="multiselect-item-checkbox ng-star-inserted"]//*[contains(text(),"In Progress")]';
    getJmrCo = '//*[@row-id="0"]//*[@col-id="JmrCode"]';
    getBillMonthData = '(//*[@row-id="0"])//*[@col-id="BillingDate"]';
    billingMonthDataJmr = '(//*[@row-id="0"])//*[@col-id="BillingDate"]';
    selectNxtMonth = '//*[@class="mat-calendar-table" ]//*[contains(text(),"11")]';
    selectRightTik = '//*[@class="cdk-overlay-pane mat-datepicker-popup"]//*[contains(text(),"done")]';
    clickBilledUnit = '(//*[@col-id="BilledUnits"])[2]';
    clickMeterRight = '//*[@id="jrm-btn-apply"]';
    clickOkbtn = '[class="primary-cta ng-star-inserted"]';
    clickOnStat = '(//*[@row-id="0"])//*[@col-id="JmrStatus"]';
    workNotStarted = '//*[contains(text(),"Work not ")]';
    getAssignedToValue = '//*[@row-index="0"]//*[@aria-colindex="14"]//span';
    getApprovedToValue = '//*[@row-index=0]//*[@aria-colindex="15"]//span';
    jmrStartDate = '(//*[@row-id="0"])//*[@col-id="StartDate"]';
    jmrEndDate = '(//*[@row-id="0"])//*[@col-id="EndDate"]';
    clickReadType = '//*[@row-id="0"]//*[@col-id="JmrReadingType"]';
    clickUnbilled = '//*[contains(text(),"Unbillable")]';
    assignedToSearchIcon = '(//*[@col-id="AssignedToName"])[2]/*/*';
    assignedtoSelectAutomation = '//*[@col-id="UserName" and @tabindex="-1" and @class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value"]';
    assignedToRightClickBtn = '(//*[@class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"])[10]';
    approveToSearchIcon = '[data-action-type="UserSearch2"]';
    sideClick = '(//*[@row-id="0"])//*[@col-id="Correction"]';
    sideClAtch = '(//*[@row-id="0"])//*[@col-id="0"]';
    clickOnRermarkBox = '(//*[@row-id="0"])//*[@col-id="Remarks"]';
    setRemarkValue = '(//*[@class="ag-input-field-input ag-text-area-input"])';
    clickHome = '[fill="#165FFA"]';

    // Functions
    async goToCmms() {
        await browser.pause(5000);
        await $(this.cmms).moveTo();
    }

    async clickToJmr() {
        await $(this.jmr).waitForDisplayed();
        await $(this.jmr).click();
        await browser.pause(5000);
    }

    async clickToAdd() {
        await $(this.btnAdd).click();
    }

    async clickOnSearch() {
        await $(this.searchBtn).click();
    }

    async assertRefreshBtn(totalCountBefore) {
        const totalCountAfter = await $(this.totalJmrCount).getText();
        if (totalCountAfter == parseInt(totalCountBefore) + 1) {
            console.log("Refresh button working well.");
        } else {
            console.log("Refresh button is not working well.");
        }
        expect(parseInt(totalCountAfter)).toBe(parseInt(totalCountBefore) + 1);
    }

    async getTotalJmrCount() {
        const totalJmrRecords = await $(this.totalJmrCount).getText();
        return totalJmrRecords;
    }

    async clickOnFilterBtn() {
        await $(this.filterBtn).waitForDisplayed();
        await $(this.filterBtn).click();
        await browser.pause(2000);
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
        await $(this.ddlAssignedTo).waitForDisplayed();
        await $(this.ddlAssignedTo).click();
        await $(this.chkAssignedToAutomation).click();
        await $(this.ddlUpBtnAssignedTo).click();
        await browser.pause(5000);
    }

    async chooseStatusUnderFilter() {
        await $(this.selectStatus).waitForDisplayed();
        await $(this.selectStatus).click();
        await $(this.btnApprovedStatus).waitForDisplayed();
        await $(this.btnApprovedStatus).click();
        await $(this.selectStatus).click();
    }

    async clickOnApprover() {
        await $(this.ddlApprover).click();
        await $(this.chkApprovedAutomation).click();
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
        await $(this.ddlSelectWorkNotStarted).click();
        await $(this.ddlStatusUpBtn).click();
    }

    async clickOnFilterSearchBtn() {
        await $(this.searchFilterBtn).click();
    }

    async addBilledUNitsAndDeemedGenertionClickableOrNot() {
        const scrollableDiv = await $(this.scrollableDivSelector);
        browser.execute((element) => {
            element.scrollTop = 3000; // Scroll to the position 200
        }, scrollableDiv);
        browser.pause(1000);

        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
        await browser.pause(6000);
        await $(this.btnAddBilledUnitsAndDeemedGeneration).waitForDisplayed();
        const isClickable = await $(this.btnAddBilledUnitsAndDeemedGeneration).isClickable();
        if (isClickable == true) {
            Logger.error("Fail");
        } else {
            Logger.info("Data is in read only mode");
        }
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

    async clickOnStatusColumnSort() {
        await $(this.statusSortInJmr).click();
    }

    async verifyStatusSorting() {
        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1500;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
        const firstRowJmrCodeDataBeforeSort = await $(this.firstJmrStatus).getText();
        await this.clickOnStatusColumnSort();
        const firstRowJmrCodeDataAfterSort = await $(this.firstJmrStatus).getText();
        expect(firstRowJmrCodeDataBeforeSort).toBe("Approved");
        Logger.info("Before Sort first row status : ", firstRowJmrCodeDataBeforeSort);
        expect(firstRowJmrCodeDataAfterSort).toBe("Work not started");
        Logger.info("After Sort first row status : ", firstRowJmrCodeDataAfterSort);

    }

    async clickOnSpvNameColumnGrid() {
        await $(this.spvNameGridColumn).click();
        await $(this.spvNameGridColumnSNo).click();
        await browser.pause(2000);
    }
    async verifyColumnOperation() {
        const isDisplayed = await $(this.sNoColumn).isDisplayed();
        expect(isDisplayed).toBe(false);
        if (isDisplayed == false) {
            Logger.info("Column level operations works well.");
        } else {
            Logger.error("Column level operations works not well.");
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
        await $(this.cancelBtn).click();
        await $(this.btnYesConfirmSave).click();
        await browser.pause(5000);
        const isDisplayed = await $(this.jmrGridInJmr).isDisplayed();
        expect(isClickable).toBe(true);
        expect(isDisplayed).toBe(true);


        if (isClickable == true) {
            Logger.info("Cancel button works.")
        } else {
            Logger.error("Cancel button not works.")
        }
    }

    async clickOnStatusUnderFilter() {
        await $(this.ddlStatus).click();
        await $(this.scrollViewSelector).scrollIntoView();
        await browser.pause(3000);
        await $(this.selectWorkNotStartedFilter).waitForDisplayed();
        await $(this.selectWorkNotStartedFilter).click();
        await $(this.ddlStatusUpBtn).click();
    }

    async inlineEditingBillingMonth() {

        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1500;
        }, scrollableHorizontalDiv);
        browser.pause(1000);

        await $(this.billingMonth).waitForDisplayed();
        const billingDate = await $(this.billingMonth);
        await billingDate.waitForDisplayed();
        await browser.pause(2000);
        await $(this.billingMonth).doubleClick();

        const monthCalendar = await $(this.billingMonthCalender);
        await browser.pause(2000);
        await monthCalendar.click();
        await $(this.selectDateInlineEditing).waitForDisplayed();
        await $(this.selectDateInlineEditing).click();
        await $(this.btnApplyInlineEditing).click();

    }

    async inlineEditingBilledUnitsAndDeemedGenertion() {
        await $(this.btnAddBilledUnitsAndDeemedGeneration).waitForDisplayed();
        await $(this.btnAddBilledUnitsAndDeemedGeneration).click();
        await $(this.btnEditBilledUnits).waitForDisplayed();
        await $(this.btnEditBilledUnits).click();
        await $(this.btnEditBilledUnits).setValue("21");
        await $(this.btnEditDeemedGeneration).waitForDisplayed();
        await $(this.btnEditDeemedGeneration).click();
        await $(this.btnEditDeemedGeneration).setValue("22");
        await $(this.btnApplytAfterEditing).click();
        await $(this.btnSaveAfterBilledUnitsAndDeemedGeneration).click();
        await browser.pause(1000);
    }

    async editingStatus() {
        await $(this.selectStatusInlineEditing).waitForDisplayed();
        await $(this.selectStatusInlineEditing).doubleClick();

        await $(this.ddlStatusEditing).waitForDisplayed();
        await $(this.ddlStatusEditing).click();
        await browser.pause(2000);

        await $(this.ddlChooseInProgress).waitForDisplayed();
        await $(this.ddlChooseInProgress).click();

        // await browser.keys(Key.ARROW_DOWN);
        // await browser.keys(Key.Enter); 
    }

    async getPaginationInfo() {
        let pagesInfo = await $(this.paginationElement).getText();
        await Logger.info("Pagination Data : ", pagesInfo);
        const isClickable = await $(this.btnNextPage).isDisplayed();
        const currentPageCount = await $(this.currentPageCount).getText();
        const totalJmrRecords = await $(this.totalJmrCount).getText();
        if ((isClickable) && (currentPageCount == totalJmrRecords)) {
            Logger.info("Pagination works well.")
        } else if (!isClickable) {
            await $('//*[@aria-label="Next Page" and @aria-disabled="false"]').click();
            const afterPaaginationSNo = await $(this.firstJmrRecordSNo).getText();
            expect(afterPaaginationSNo).toBe("101");
        } else {
            Logger.error("Pagination does not works well.")
        }
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

        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);

        const firstJmrStatus = await $(this.firstJmrStatus).getText();
        const firstJmrAssignee = await $(this.firstJmrAssignedTo).getText();
        const firstJmrApprover = await $(this.firstJmrApprover).getText();

        const expectedStatus = "Work not started";
        const expectedAssignee = "Automation";
        const expectedApprover = "Automation";

        expect(firstJmrStatus).toBe(expectedStatus);
        expect(firstJmrAssignee).toBe(expectedAssignee);
        expect(firstJmrApprover).toBe(expectedApprover);

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

        await this.clickOnFilterBtn();
        await this.clickOnAssignedTo();
        await this.clickOnApprover();
        await this.clickOnBillingMonth();
        await this.clickOnStatus();
        const projectBeforeReset = await $(this.selectProjectInFilterJmr).getText();
        const assigneeBeforeReset = await $(this.selectAssignedToInFilterJmr).getText();
        const approverBeforeReset = await $(this.selectApproverInFilterJmr).getText();
        const statusBeforeReset = await $(this.selectStatusInFilterBtn).getText();
        await this.clickOnFilterResetBtn();
        await browser.pause(3000);
        const projectAfterReset = await $(this.selectProjectInFilterJmr).getText();
        const assigneeAfterReset = await $(this.selectAssignedToInFilterJmr).getText();
        const ApproverAfterReset = await $(this.selectApproverInFilterJmr).getText();
        const statusAfterReset = await $(this.selectStatusInFilterBtn).getText();

        Logger.info("Before Reset project :", projectBeforeReset)
        Logger.info("After Reset project :", projectAfterReset)
        Logger.info("Before Reset Assigned to :", assigneeBeforeReset,)
        Logger.info("After Reset Assigned to :", assigneeAfterReset)
        expect(assigneeAfterReset).toBe("Please select Assigned To")
        Logger.info("Before reset Approver : ", approverBeforeReset);
        Logger.info("After reset Approver  :", ApproverAfterReset);
        expect(ApproverAfterReset).toBe("Please select Approver")
        Logger.info("Before reset Status : ", statusBeforeReset);
        Logger.info("After reset Status : ", statusAfterReset);
        expect(statusAfterReset).toBe("SelectStatus");


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
        await $(this.btnYesConfirmSave).waitForDisplayed();
        await $(this.btnYesConfirmSave).click();
        await $(this.btnOkUnderSave).waitForDisplayed();
        await $(this.btnOkUnderSave).click();
        // await browser.pause(7000);
    }

    async verifyBulkUpdate() {
        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
        const BillingMonthDataBeforeBulkUpdate = await this.fetchBillingMonthData();
        browser.execute((element) => {
            element.scrollLeft = -1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
        await this.chkAllJmrInJmr();
        await this.clickOnBulkUpdateBtn();
        await this.selectDateForBillingMonthUnderBulkUpdate();
        await this.clickOnSearch();
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(5000);
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
        if (temp) {
            Logger.info("Bulk Update Passed.")
        } else {
            Logger.error("Bulk Update Failed.")
        }
        expect(temp).toBe(true);
    }

    async chooseAsset() {
        await browser.pause(2000);
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).waitForDisplayed();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
    }

    async validationForAssetJmr() {
        await $(this.btnSave).click();
        const isAssettsValidate = await $(this.btnValidation).isDisplayed();
        await $(this.btnValidation).click();
        return isAssettsValidate;
    }
    async validationForBilledUnitsJmr() {
        await $(this.btnSave).click();
        const isBilledUnitsValidate = await $(this.btnValidation).isDisplayed();
        await $(this.btnValidation).click();
        return isBilledUnitsValidate;
    }
    async validationForDeemedGenerationJmr() {
        await $(this.btnSave).click();
        const isDeemedGenerationValidate = await $(this.btnValidation).isDisplayed();
        await $(this.btnValidation).click();
        return isDeemedGenerationValidate;
    }
    async validationForAssignedToJmr() {
        await $(this.btnSave).click();
        const isAssignedToValidate = await $(this.btnValidation).isDisplayed();
        await $(this.btnValidation).click();
        return isAssignedToValidate;
    }
    async validationForApproverJmr() {
        await $(this.btnSave).click();
        const isApproverValidate = await $(this.btnValidation).isDisplayed();
        await $(this.btnValidation).click();
        return isApproverValidate;
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
        const scrollableDiv = await $(this.scrollableDivSelector);
        browser.execute((element) => {
            element.scrollTop = 3000; // Scroll to the position 200
        }, scrollableDiv);
        browser.pause(1000);

        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);

        let lastBillableJmrData = '//*[@row-id="' + (totalJmr - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]';
        let lastBilledUnitsData = await $(lastBillableJmrData).getText();
        let lastAddedBilledUnits = lastBilledUnitsData.substr(0, 2)
        if (lastAddedBilledUnits == 25) {
            Logger.info("The user can create a JMR with billed units");
        } else {
            Logger.error("The user can't create a JMR with billed units");
        }
        expect(lastAddedBilledUnits).toBe("25");
    }

    async verifyLastJmrWithNonBilledUnits() {
        await $(this.totalJmrInPagination).waitForDisplayed();
        const scrollableDiv = await $(this.scrollableDivSelector);
        browser.execute((element) => {
            element.scrollTop = 3000; // Scroll to the position 200
        }, scrollableDiv);
        browser.pause(1000);

        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);

        let totalJmr = await $(this.totalJmrInPagination).getText();
        let lastBillableJmrData = '//*[@row-id="' + (totalJmr - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]';
        let lastBilledUnitsData = await $(lastBillableJmrData).getText();
        let lastAddedBilledUnits = lastBilledUnitsData.substr(0, 1)
        if (lastAddedBilledUnits == 0) {
            Logger.info("The user can create a JMR with non-billed units");
        } else {
            Logger.error("The user can't create a JMR with non-billed units");
        }
        expect(lastAddedBilledUnits).toBe("0");
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
        expect(dialogMsg).toBe("Please enter valid details");

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
        expect(isDisplayed).toBe(false);
        if (isDisplayed == true) {
            Logger.error('The delete asset is not working fine');
        } else {
            Logger.info('The delete asset is working fine');
        }
    }

    async verifyUserIsAbleToAttachFiles() {

        await $(this.btnAdd).click();
        await $(this.btnSearchAssignedToUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnSearchApproverUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await browser.pause(5000);
        await $(this.btnAddAssets).click();
        await $(this.inputAssetName).click();
        await $(this.inputAssetName).setValue("XC437214");
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnFilesInAddJmr).click();

        const uploadFile = await browser.uploadFile(FilePathData.fileData.FilePathAddJmrAttachment);
        await $(this.btnUploadFileInAddJmr).addValue(uploadFile);
        await browser.pause(5000);

        const uploadedFileDisplayed = await $(this.uploadedFile).isDisplayed();
        expect(uploadedFileDisplayed).toBe(true);
        if (uploadedFileDisplayed) {
            Logger.info("User can attach the file.")
        } else {
            Logger.error("User can not attach the file.")
        }
    }

    async verifyEditJmr() {
        await $(this.totalJmrInPagination).waitForDisplayed();
        await browser.pause(2000);
        let totalJmr = await $(this.totalJmrInPagination).getText();
        const scrollableDiv = await $(this.scrollableDivSelector);
        browser.execute((element) => {
            element.scrollTop = 3500; // Scroll to the position 200
        }, scrollableDiv);
        browser.pause(1000);
        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
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
        await browser.pause(2000);
        await $(this.totalJmrInPagination).waitForDisplayed();
        let totalJmrAfterEdit = await $(this.totalJmrInPagination).getText();
        const scrollableDivv = await $(this.scrollableDivSelector);
        browser.execute((element) => {
            element.scrollTop = 3500; // Scroll to the position 200
        }, scrollableDivv);
        browser.pause(1000);
        const scrollableHorizontalDivv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDivv);
        browser.pause(1000);

        let lastEditedBillableJmrData = '//*[@row-id="' + (totalJmrAfterEdit - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]'; 4
        let lastEditedBilledUnitsData = await $(lastEditedBillableJmrData).getText();
        let lastEditedBilledUnits = lastEditedBilledUnitsData.substr(0, 2);
        expect(lastEditedBilledUnits).toBe('40');
        if (lastEditedBilledUnits = 40) {
            Logger.info("The user can edit the JMR.");
        } else {
            Logger.error("The user can't edit the JMR.");

        }
    }


    async userIsAbleToDeleteAndDownload() {

        await $(this.btnAdd).click();
        await $(this.btnSearchAssignedToUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnSearchApproverUnderAddJmr).click();
        await $(this.automationUser).click();
        await $(this.btnApplyAfterselectingUser).click();
        await browser.pause(5000);
        await $(this.btnAddAssets).click();
        await $(this.inputAssetName).click();
        await $(this.inputAssetName).setValue("XC437214");
        await $(this.btnsearchAsset).click();
        await $(this.selectAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
        await $(this.btnFilesInAddJmr).click();

        const uploadFile = await browser.uploadFile(FilePathData.fileData.FilePathAddJmrAttachment);
        await $(this.btnUploadFileInAddJmr).addValue(uploadFile);
        await browser.pause(5000);
        await $(this.btnDeleteAttachedFileInAddJmr).click();
        await $(this.btnYesAfterDeleteAttachedFile).click();
        await browser.pause(2000);
        const uploadedFileDisplayed = await $(this.uploadedFile).isDisplayed();
        expect(uploadedFileDisplayed).toBe(false);
        if (uploadedFileDisplayed) {
            Logger.error("Can not delete added files.");
            expect(true).toBe(False);
        } else {
            Logger.info("Can delete added files");
        }
    }

    async verifyWhetherTheUserIsAbleToApproveJmr() {

        await browser.pause(3000);
        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        await browser.pause(1000);

        await $(this.btnSortStatus).click();
        await browser.pause(4000);

        await $(this.firstJmrCode).click();
        const jmrCode = await $(this.firstJmrCode).getText();
        console.log(jmrCode);
        await $(this.btnEditOnJmrPage).click();
        await browser.pause(3000);
        await $(this.ddlStatusInEditJmr).click();
        await browser.pause(3000);
        await $(this.ddlSelectApproved).click();
        await $(this.btnFilesInAddJmr).click();

        const uploadFile = await browser.uploadFile(FilePathData.fileData.FilePathAddJmrAttachment);
        await $(this.btnUploadFileInAddJmr).addValue(uploadFile);
        await $(this.btnSave).click();
        await $(this.btnYesToConfirmSave).click();
        await browser.pause(2000);
        await $(this.btnOkAfterSaving).click();
        await browser.pause(5000);
        await $(this.btnThreeLinerForJmrCode).click();
        await $(this.btnFilterUnderThreeLinerIcon).click();
        await $(this.inputTextUnderFilter).setValue(jmrCode);
        await $(this.firstJmrCode).click();
        const scrollableHorizontalDivv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDivv);
        await browser.pause(1000);
        const status = await $(this.firstJmrStatus).getText();

        expect(status).toBe("Approved");

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

    async verifyUserCanCreateJmrWithMultipleMeters() {
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
        await $(this.btnAddAssets).click();
        await $(this.selectDmrcAsset).click();
        await $(this.btnApplyAfterselectingUser).click();
        await browser.pause(5000);
        await $(this.btnSave).click();
        await $(this.btnYesToConfirmSave).click();
        await browser.pause(2000);
        // await $(this.btnOkAfterSaving).waitForDisplayed();
        await $(this.btnOkAfterSaving).click();
        await browser.pause(3000);
        await $(this.totalJmrInPagination).waitForDisplayed()
        let totalJmrAfterEdit = await $(this.totalJmrInPagination).getText();
        let btnAddBilledUnitsAndDeemedGenerationForLastJmr = '//*[@row-id="' + (totalJmrAfterEdit - 1) + '"]/*[@col-id="BilledUnitsDeemedGeneration"]/*/*';

        const scrollableDiv = await $(this.scrollableDivSelector);
        browser.execute((element) => {
            element.scrollTop = 3500; // Scroll to the position 200
        }, scrollableDiv);
        browser.pause(1000);

        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);

        await $(btnAddBilledUnitsAndDeemedGenerationForLastJmr).waitForDisplayed();
        await $(btnAddBilledUnitsAndDeemedGenerationForLastJmr).click();
        await browser.pause(2000);
        let lengthOfAssets = await $$(this.assetListSelectors).length;
        await browser.pause(2000);
        expect(lengthOfAssets).toBe(3);
        if (lengthOfAssets == 3) {
            Logger.info("Added JMR with multi meters Test Case Passed.");
        } else {
            Logger.error("Can't Add JMR with multi meters Test Case Failed.");
        }
    }


    async fetchFirstJmrDetails() {
        const jmrDetails = [];
        jmrDetails[0] = await $(this.spvNameColumnForFirstJmr).getText();
        // jmrDetails[1] = await $(this.customerNameColumnForFirstJmr).getText();
        jmrDetails[2] = await $(this.locationColumnForFirstJmr).getText();
        jmrDetails[3] = await $(this.projectCodeColumnForFirstJmr).getText();
        Logger.info(jmrDetails);
        return jmrDetails;

    }

    async fetchProjectDetailsFromViewProject() {
        const jmrDetailsInProjects = [];
        await $(this.selectDmrcProjectWithShortNameUnderProjects).click();
        await $(this.btnView).click();
        await $(this.plantLocationUnderViewProject).waitForDisplayed();
        jmrDetailsInProjects[2] = await $(this.plantLocationUnderViewProject).getValue();
        await $(this.referenceCodeUnderViewProject).waitForDisplayed();
        let referenceCode = await $(this.referenceCodeUnderViewProject).getValue();
        jmrDetailsInProjects[0] = referenceCode.substr(8, 23);
        jmrDetailsInProjects[3] = referenceCode.substr(32, 7);
        await browser.pause(5000);
        return jmrDetailsInProjects;
    }

    async verifyJmrDetailFromProjectMaster() {
        const jmrDetailsInJmr = await this.fetchFirstJmrDetails();
        await this.gotoManagement();
        await this.gotoProjectsUnderManagement();
        const jmrDetailsInProjects = await this.fetchProjectDetailsFromViewProject();
        Logger.info(jmrDetailsInJmr);
        Logger.info(jmrDetailsInProjects);

        // Assertion for SPV name
        expect(jmrDetailsInJmr[0]).toBe(jmrDetailsInProjects[0]);
        // Assertion for Location
        expect(jmrDetailsInJmr[1]).toBe(jmrDetailsInProjects[1]);
        // Assertion for Customer Name
        expect(jmrDetailsInJmr[2]).toBe(jmrDetailsInProjects[2]);
        // Assertion for Plant code
        expect(jmrDetailsInJmr[3]).toBe(jmrDetailsInProjects[3]);

    }

    async gotoManagement() {
        await $(this.management).moveTo();
    }
    async gotoProjectsUnderManagement() {
        await $(this.projects).waitForDisplayed();
        await $(this.projects).click();
    }

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
        await $(this.btnSearchAssignedToUnderAddJmr).waitForDisplayed();
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

    async verifyValidationToApproveJmr() {
        await browser.pause(3000);
        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 2000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
        await $(this.btnSortStatus).waitForDisplayed();
        await $(this.btnSortStatus).click();
        await $(this.firstJmrStatus).doubleClick();
        await $(this.firstJmrStatus).click();
        await $(this.ddlSelectApproved).click();
        await browser.pause(5000);
        let isDisplayedInline = await $(this.dialogMessageToValidateAttachment).isDisplayed();
        let isDisplayedEdit;
        if (!isDisplayedInline) {
            await $(this.secondJmrStatus).click()
            await $(this.btnEditOnJmrPage).click();
            await $(this.ddlStatusInEditJmr).click();
            await $(this.ddlBtnApproved).click();
            await $(this.btnSave).click();
            Logger.error("No Validation to attach files in inline editing. ")
            isDisplayedEdit = await $(this.dialogMessageToValidateAttachment).isDisplayed();

        } else {
            await $(this.btnOkDialogMessage).click();
            await $(this.searchBtn).click();
            await $(this.btnEditOnJmrPage).click();
            await $(this.ddlStatusInEditJmr).click();
            await $(this.ddlBtnApproved).click();
            await $(this.btnSave).click();
            isDisplayedEdit = await $(this.dialogMessageToValidateAttachment).isDisplayed();

        }

        expect(isDisplayedInline).toBe(true);
        expect(isDisplayedEdit).toBe(true);
    }

    async clickOnViewBtn() {
        await $(this.btnView).click();
    }

    async verifyDataIsReadOnlyModeAfterClickingOnViewBtn() {
        let readOnly = await $(this.btnAddAssets).isClickable();
        readOnly = await $(this.selectPlantUnderEditJmr).isClickable();

        if (readOnly == false) {
            Logger.info("Data is in read only mode.")
        } else {
            Logger.error("Data is not in read only mode.")
        }
    }

    async verifyDelete() {

        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1000;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
        await $(this.btnSortStatus).waitForDisplayed();
        await $(this.btnSortStatus).click();

        let firstJmrCodeBeforeDelete = await $(this.selectFirstJmrCode).getText();
        await browser.pause(2000);
        await $(this.selectFirstJmrCode).click();
        await $(this.btnDelete).click();
        await $(this.btnYesToConfirmDelete).waitForDisplayed();
        await $(this.btnYesToConfirmDelete).click();
        await $(this.btnOkAfterSuccessfulDelete).waitForDisplayed();
        await $(this.btnOkAfterSuccessfulDelete).click();
        await $(this.searchBtn).waitForDisplayed();
        await $(this.searchBtn).click();
        await browser.pause(3000);

        let firstJmrCodeAfterDelete = await $(this.selectFirstJmrCode).getText();

        if (firstJmrCodeAfterDelete != firstJmrCodeBeforeDelete) {
            Logger.info("User is able to delete the JMR with status Work not started.")
        } else {
            Logger.error("User is not able to delete the JMR with status Work not started.")
        }
    }

    async verifyStatusIsUpdatedByUser() {
        await browser.pause(6000);
        const scrollableHorizontalDiv = await $(this.scrollableHorizontal);
        browser.execute((element) => {
            element.scrollLeft = 1500;
        }, scrollableHorizontalDiv);
        browser.pause(1000);
        await $(this.btnSortStatus).click();
        const statusBefore = await $('(//*[@col-id="JmrStatus"])[2]').getText();
        await $('(//*[@col-id="JmrStatus"])[2]').doubleClick();
        await $('(//*[@col-id="JmrStatus"])[2]').click();
        await $('//*[contains(text(),"In Progress")]').click();
        await $(this.searchBtn).click();
        const statusAfter = await $('(//*[@col-id="JmrStatus"])[2]').getText();

        expect(statusAfter).toBe('In Progress');
        if (statusBefore != statusAfter) {
            Logger.info("Status Updated.")
        } else {
            Logger.error("Status not Updated.");
        }

    }
    async verifyValidationToAddJmr(asset, billedUnits, deemedGeneration, assignedTo, approver) {
        expect(asset).toBe(true);
        expect(billedUnits).toBe(true);
        expect(deemedGeneration).toBe(true);
        expect(assignedTo).toBe(true);
        expect(approver).toBe(true);
    }


    async filterOperationsForJmr() {
        await this.goToCmms();
        await this.clickToJmr();
        await this.filterOpertaionJmr();
    }

    async getInitialJmrNameAndCode() {
        var initialJMRV = await this.getJmrCode();
        var initialJMRValue = initialJMRV.slice(5, 12);
        return initialJMRValue;
    }



    async filterOpertaionJmr() {
        await $(this.filClick).click();
        await $(this.automationClick).click();
        await $(this.selAssignedTo).click();
        await $(this.automationClick).click();
        await $(this.selStatus).scrollIntoView();
        browser.pause(2000);
        await $(this.selStatus).click();
        await $(this.selInprogressStatus).click();
        await $(this.searchBtn).click();

    }

    async getJmrCode() {
        await $(this.getJmrCo).click();
        const jmrCode = await $(this.getJmrCo).getText();
        Logger.info("jmr code", jmrCode);
        return jmrCode;
    }


    async BillingMonthJmr() {
        const bilMonth = await $(this.getBillMonthData).getText();
        Logger.info("bill month", bilMonth);
        return bilMonth;
    }

    clickOnAssignedToSearchIcon = '//*[@row-id="0"]//*[@col-id="AssignedToName"]//*[@class="fa fa-search"]';
    clickOnApprovedToSearchIcon = '//*[@row-id="0"]//*[@col-id="ApproverName"]//*[@class="fa fa-search"]';;
    selectFirstNAmeFromAssignedTo = '//*[@row-id="0"]//*[@col-id="UserName"]';


    async inLineEditingAllJmrData() {

        // await $(this.clickOnAssignedToSearchIcon).click();
        // await $(this.clickOnApprovedToSearchIcon).click();
        // browser.pause(2000);
        // await $(this.selectFirstNAmeFromAssignedTo).click();
        // browser.pause(2000);
        // await $(this.btnApply).click();
        // browser.pause(2000);




        var initialJMRValue = await this.getInitialJmrNameAndCode();
        var defaultBillMonth = await this.BillingMonthJmr();
        await this.editBilledMonth();
        var initialBilingMonth = await this.BillingMonthJmr();
        //comparing  default billing month with the edited billling month
        await this.compareAssertionDataNotToBe(defaultBillMonth, initialBilingMonth);

        
        var [billAmount, deemedValue] = await this.editUnbilledAndDeemedValue();
        var initalStatus = await this.editProjectStatus();
        var initalReading = await this.editReadingType();
        var initalAssignedToVal = await this.editingAssignedTo();
        var initalApprovedTo = await this.editApprovedTo();
        browser.pause(2000);
        await this.editProjectStatus();
        // await this.editReadingType();
        browser.pause(2000);
        var defaultJmrstartDate = await this.getJmrStartingDate();
        var defaultJmrEndDate = await this.getJmrEndDate();
        await this.editJmrStartDate();
        browser.pause(4000);
        await this.editReadingType();
        await this.editJmrEndDate();
        var initalJmrStartingDate = await this.getJmrStartingDate();
        var initalJmrEndDate = await this.getJmrEndDate();
        //comparing  default start date and end date with edited values
        await this.compareAssertionDataNotToBe(defaultJmrstartDate, initalJmrStartingDate);
        await this.compareAssertionDataNotToBe(defaultJmrEndDate, initalJmrEndDate);
        var initalRemark = await this.editRemarkValue();

        await this.clickMenu();
        await this.goToCmms();
        await this.clickToJmr();
        await this.filterOpertaionJmrWorkNotStarted();
        await browser.pause(2000);
        await this.CheckJmrCode(initialJMRValue);
        await browser.pause(3000);

        // //assertion
        var initialValue = [initialJMRValue, initialBilingMonth, billAmount, deemedValue, initalStatus, initalReading, initalAssignedToVal, initalApprovedTo, initalJmrStartingDate, initalJmrEndDate, initalRemark];
        var afterEditValues = await this.inLineEditingData();

        await this.compareAssertionData(initialValue[0], afterEditValues[0]);
        await this.compareAssertionData(initialValue[1], afterEditValues[1]);
        await this.compareAssertionData(initialValue[3], afterEditValues[3]);
        await this.compareAssertionData(initialValue[4], afterEditValues[4]);
        await this.compareAssertionData(initialValue[5], afterEditValues[5]);
        await this.compareAssertionData(initialValue[6], afterEditValues[6]);
        await this.compareAssertionData(initialValue[7], afterEditValues[7]);
        await this.compareAssertionData(initialValue[8], afterEditValues[8]);
        await this.compareAssertionData(initialValue[9], afterEditValues[9]);
        await this.compareAssertionData(initialValue[10], afterEditValues[10]);
        await this.compareAssertionDataNotToBe(initialValue[2], afterEditValues[2]);
    }


    async editBilledMonth() {
        await $(this.billingMonthDataJmr).doubleClick();
        await browser.pause(2000);
        await $(this.btnCalenderBillingMonthUnderBulkUpdate).click();
        await $(this.btnNextMonthUnderBillingMonth).click();
        await $(this.selectNxtMonth).click();
        await $(this.selectRightTik).waitForDisplayed();
        await $(this.selectRightTik).click();
        await $(this.getJmrCo).click();
    }


    async editUnbilledAndDeemedValue() {
        var billedValue = PlantNameData.plantData.jmrSetBilledValue;
        var deemedValueSet = PlantNameData.plantData.jmrSetDeemedValue;

        await $(this.iconPlus).click();
        await $(this.clickBilledUnit).click();
        await $(this.clickBilledUnit).click();
        await $(this.fetchUbilledData).setValue(billedValue);
        await $(this.getDeemedValue).setValue(deemedValueSet);
        await $(this.clickMeterRight).click();
        await $(this.clickOkbtn).click();
        return [billedValue, deemedValueSet];

    }


    async editProjectStatus() {
        var statusVal = PlantNameData.plantData.jmrSetProjectStatus;
        await $(this.clickOnStat).doubleClick();
        await browser.pause(2000);
        await $(this.clickOnStat).doubleClick();
        Logger.info("clickeddd")
        await $(this.clickOnStat).click();
        await $(this.workNotStarted).click();
        // await $(this.getAssignedToValue).click();
        await $(this.getAssignedToValue).scrollIntoView();
        // await $(this.getApprovedToValue).click();
        await $(this.getApprovedToValue).scrollIntoView();

        await $(this.jmrStartDate).click();
        await $(this.jmrEndDate).click();
        return statusVal;

    }

    async editReadingType() {

        const readDataE = await $(this.clickReadType).getText();
        Logger.info("the readtype data ", readDataE);
        var unBill = PlantNameData.plantData.jmrSetReadType;

        if (readDataE != unBill) {
            console.log("if  block");
            await $(this.clickReadType).doubleClick();
            await $(this.clickReadType).click();
            browser.pause(2000);
            await $(this.clickUnbilled).click();
            browser.pause(2000);
            return unBill;
        }
        else {
            console.log("else block");
            return unBill;
        }
    }

    async editingAssignedTo() {
        var valueAssignedTO = PlantNameData.plantData.jmrEditAssignedTo;
        await $(this.assignedToSearchIcon).click();
        await $(this.assignedtoSelectAutomation).click();
        await $(this.assignedToRightClickBtn).click();
        return valueAssignedTO;
    }

    async editApprovedTo() {
        var valueApprovedTo = PlantNameData.plantData.jmrEditApprovedTo;
        await $(this.approveToSearchIcon).click();
        await $(this.assignedtoSelectAutomation).click();
        await $(this.assignedToRightClickBtn).click();
        return valueApprovedTo;
    }


    async getJmrStartingDate() {
        await browser.pause(2000);
        const jmstartDt = await $(this.jmrStartDate).getText();
        Logger.info("jmrstart", jmstartDt);
        return jmstartDt;
    }

    async getJmrEndDate() {
        const jmrEndDt = await $(this.jmrEndDate).getText();
        Logger.info("end date is", jmrEndDt);
        await $(this.jmrStartDate).click();
        await $(this.sideClick).click();
        await $(this.sideClAtch).click();
        return jmrEndDt;
    }


    async editJmrStartDate() {
        await $(this.jmrStartDate).doubleClick();
        await $(this.btnCalenderBillingMonthUnderBulkUpdate).click();
        await $(this.btnNextMonthUnderBillingMonth).click();
        await $(this.selectNxtMonth).click();
        await $(this.selectRightTik).click()

    }




    async editJmrEndDate() {
        await $(this.jmrEndDate).doubleClick();
        await $(this.btnCalenderBillingMonthUnderBulkUpdate).click();
        await $(this.btnNextMonthUnderBillingMonth).click();
        await $(this.selectNxtMonth).click();
        await $(this.selectRightTik).click();
        // await $(this.getAssignedToValue).click();
        await $(this.getAssignedToValue).scrollIntoView();
        await $(this.sideClick).click();
        await $(this.sideClAtch).click();
    }



    async editRemarkValue() {
        var remarkValue = PlantNameData.plantData.jmrEditRemarkValue;
        await $(this.clickOnRermarkBox).doubleClick();
        await $(this.setRemarkValue).setValue(PlantNameData.plantData.jmrEditRemarkValue);
        await $(this.jmrStartDate).click();
        return remarkValue;
    }


    async clickMenu() {
        await $(this.clickHome).click();
    }

    async goToCmms() {
        await browser.pause(5000);
        await $(this.cmms).moveTo();
    }

    async clickToJmr() {
        await $(this.jmr).click();
    }

    async filterOpertaionJmrWorkNotStarted() {
        await $(this.filClick).click();
        await $(this.automationClick).click();
        await $(this.selAssignedTo).click();
        await $(this.automationClick).click();
        await $(this.selStatus).scrollIntoView();
        browser.pause(2000);
        await $(this.selStatus).click();
        await $(this.selWorkNotStarted).click();
        await $(this.searchBtn).click();

    }


    async inLineEditingData() {

        //jmr code
        await $(this.getJmrCodeAfterFilter).click();

        const jmrCodeDa = await $(this.getJmrCodeAfterFilter).getText();
        const jmrCodeEdit = jmrCodeDa.slice(5, 12);
        Logger.info("jmr code", jmrCodeEdit);

        //billMOnth
        // await $(this.getBilledDateAfterEdit).click();
        const afterEditMonthE = await $(this.getBilledDateAfterEdit).getText();
        Logger.info("date after edit", afterEditMonthE);

        //unbilled and deemedd
        await $(this.iconPlusE).click();
        await browser.pause(2000);
        await $(this.fetchUbilledData).click();
        await browser.pause(2000);
        await $(this.fetchUbilledData).click();
        const billedValE = await $(this.fetchUbilledData).getValue();
        Logger.info("unbilled value ", billedValE);
        const deemedValE = await $(this.getDeemedValue).getValue();
        Logger.info("the deemedValue", deemedValE);
        await $(this.clickMeterRight).click();
        await browser.pause(2000);
        await $(this.clickOkbtn).click();
        await browser.pause(2000);

        //prj status
        var getStatusE = await $(this.clickOnStat).getText();
        Logger.info("status after edit:", getStatusE);
        await $(this.clickReadType).click();

        //readingtype
        const readDataE = await $(this.clickReadType).getText();
        Logger.info("the readtype data ", readDataE);
        await $(this.getAssignedToValue).click();
        await browser.pause(2000);

        const assignedToVE = (await $(this.getAssignedToValue).getText()).trim();

        Logger.info("assigned to", assignedToVE);
        await $(this.getApprovedToValue).click();


        const approvedToE = (await $(this.getApprovedToValue).getText()).trim();
        Logger.info("approved to", approvedToE);
        await $(this.jmrStartDate).click();


        const jmrstartE = await $(this.jmrStartDate).getText();
        Logger.info("jmrstart", jmrstartE);
        await $(this.jmrEndDate).click();


        const jmrEndDE = await $(this.jmrEndDate).getText();
        Logger.info("jmr date is", jmrEndDE);
        await $(this.sideClick).click();
        await $(this.sideClAtch).click();

        const remarkE = await $(this.clickOnRermarkBox).getText();
        Logger.info("the remark:", remarkE);
        return [jmrCodeEdit, afterEditMonthE, billedValE, deemedValE, getStatusE, readDataE, assignedToVE, approvedToE, jmrstartE, jmrEndDE, remarkE];

    }
    async CheckJmrCode(id) {
        // var id = 'AA0438G';
        await $(this.clickCapacity).doubleClick();
        await browser.pause(5000);
        await $(this.getJmrCo).click();
        await $(this.billingMonthDataJmr).click();
        await $(this.filterProjectCode).click();
        await $(this.filterBtnClickJmr).click();
        await $(this.inputJmrCodeForCheck).click();
        await browser.pause(2000);
        await $(this.inputJmrCodeForCheck).setValue(id);
        await $(this.clickCapacity).click();
    }
    async compareAssertionData(beforeEdit, afterEdit) {
        expect(beforeEdit).toEqual(afterEdit);
    }


    async compareAssertionDataNotToBe(beforeEdit, afterEdit) {
        expect(beforeEdit).not.toEqual(afterEdit);
    }




}

export default new JmrPage;
