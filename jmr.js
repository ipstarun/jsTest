import HomePage from '../Pages/HomePage.js';
import LoginPage from '../Pages/LoginPage.js';
import PlantNameData from '../Data/PlantNameData.js';
import JmrPage from "../Pages/JmrPage.js";


describe("JMR Test cases.", () => {
    it('TC_Joint_Meter_Reading_01 : Verify whether the user is able to refresh the Joint meter reading page.', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        const totalCountBefore = await JmrPage.getTotalJmrCount();
        await browser.pause(5000);

        await browser.newWindow('https://staging.prescinto.ai/v3/login', {
            windowName: 'Prescinto'
        });
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await JmrPage.addJmrWithBilledUnits();
        // await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await browser.pause(5000);
        await JmrPage.clickOnSearch();
        await browser.pause(5000);

        // Assertion
        await JmrPage.assertRefreshBtn(totalCountBefore);

    });

    it('TC_Joint_Meter_Reading_02 : Verify whether the user is able to filter the joint meter reading .', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await JmrPage.clickOnFilterBtn();
        await JmrPage.clickOnAssignedTo();
        await JmrPage.clickOnApprover();
        await JmrPage.clickOnStatus();
        await JmrPage.clickOnFilterSearchBtn();
        await browser.pause(10000);

        await JmrPage.verifyFilterWithBillingMonth();
    });

    it('TC_Join_Meter_Reading_03 : Verify whether the user is able to reset the applied filter.', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.assertResetBtn();
    });

    it('TC_Joint_Meter_Reading_04 : Verify whether the user is able to perform sorting and column level operations in the grid.', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await JmrPage.clickOnSpvNameGridFilterBtn();
        await JmrPage.clickOnSpvNameColumnGrid();

        await JmrPage.verifyColumnOperation();
        await JmrPage.verifyStatusSorting();

    });

    it('TC_Joint_Meter_Reading_05 : Verify whether the pagination is working as expected', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);

        await JmrPage.getPaginationInfo();
    });

    it('TC_Joint_Meter_Reading_06 : Verify whether the user is able to download the files and view the grid details as well as the dates when the jmr was moved to In progress,Waiting for approval and approved.', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);

        await JmrPage.verifyWhetherTheUserIsAbleToDownloadTheFiles();
    });

    it('TC_Joint_Meter_Reading_07 : Verify whether the user is able to bulk update the jmr', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await browser.pause(10000);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);

        await JmrPage.verifyBulkUpdate();
    });

    it('TC_Joint_Meter_Reading_08 : Verify whether the user is able to cancel the current operation by clicking on cancel', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);
        await JmrPage.clickOnAddJmr();
        await JmrPage.verifyCancelBtn();
    });

    it.only('TC_Joint_Meter_Reading_09 : Verify whether the user is able to do inline editing in the below fields: Billing month,Billed units and Deemed Generation,status,Reading Type, Assigned to,Approver,Jmr start and end dates,Attachments and Remarks.', async () => {

        console.log('run');
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.filterOperationsForJmr();
        await JmrPage.inLineEditingAllJmrData();

    });



    it('TC_Joint_Meter_Reading_10 : Verify whether the user is able to view the spv name,customer name,Location and project code from the projects master.', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);

        await JmrPage.verifyJmrDetailFromProjectMaster();
    });

    it('TC_Joint_Meter_Reading_11 :Verify whether the user is getting validation to attach files  when the state is either changed to "Waiting for approval "and "Approved" Note:This should be checked from both grid and individual edit', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(3000);

        await JmrPage.verifyValidationToApproveJmr();
    });

    it('TC_Joint_Meter_Reading_12 : Add Jmr-Verify whether the user is able to create a jmr with billed units', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);
        await JmrPage.addJmrWithBilledUnits();

        await JmrPage.verifyLastJmrWithBilledUnits();
    });

    it('TC_Joint_Meter_Reading_13 : Add Jmr-Verify whether the user is able to create a jmr with unbilled units', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await JmrPage.addJmrWithUnBilledUnits();

        await JmrPage.verifyLastJmrWithNonBilledUnits();
    });
    it('TC_Joint_Meter_Reading_14 : Add Jmr-Verify whether the below fields are mandatory:Assigned to, Approver, Meter readings(meter,billed units/unbilled units,deemed generation)', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await JmrPage.clickToAdd();
        const assetValidation = await JmrPage.validationForAssetJmr();
        await JmrPage.clickOnPlusIcon();
        await JmrPage.chooseAsset();
        await JmrPage.addBilledUnits();
        const billedUnitsValidation = await JmrPage.validationForBilledUnitsJmr();
        await JmrPage.addBilledUnits();
        const deemedGenerationValidation = await JmrPage.validationForDeemedGenerationJmr();
        await JmrPage.addDeemedGeneration();
        const assignedToValidation = await JmrPage.validationForAssignedToJmr();
        await JmrPage.clickAssignedToSearch();
        await JmrPage.selectNameFromUsers();
        const approverValidation = await JmrPage.validationForApproverJmr();
        await JmrPage.clickApproverSearch();
        await JmrPage.selectNameFromUsers();

        await JmrPage.verifyValidationToAddJmr(assetValidation, billedUnitsValidation, deemedGenerationValidation, assignedToValidation, approverValidation);
        // await JmrPage.confirmSave();
    });

    it('TC_Joint_Meter_Reading_15 : Add JMR-Verify whether the billed units and deemed generation should not be allowed to enter less than 0', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);

        await JmrPage.verifyBilledUnitIsPositive();
    });

    it('TC_Joint_Meter_Reading_16 : Add JMR-Verify whether the user is able to add multiple Meters', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await browser.pause(15000);

        await JmrPage.verifyUserCanCreateJmrWithMultipleMeters();
    });

    it('TC_Joint_Meter_Reading_17 :Add JMR-Verify whether the user is able to delete the added Meters', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.verifyDeleteAsset();
    });

    it('TC_Joint_Meter_Reading_18 :Add JMR-Verify whether the user is able to attach files', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.verifyUserIsAbleToAttachFiles();

    });

    it('TC_Joint_Meter_Reading_19 :Edit JMR-Verify whether the user is able to edit the JMR', async () => {

        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.verifyEditJmr();
    });

    it('TC_Joint_Meter_Reading_20 :Edit JMR-Verify whether the user is able to delete and download the added files', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.userIsAbleToDeleteAndDownload();

    });

    it('TC_Joint_Meter_Reading_21 :Edit JMR-Verify whether the assignee/admin users are able to change the status from work not started->In progress-Waiting for approval', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.verifyStatusIsUpdatedByUser();
    });

    it('TC_Joint_Meter_Reading_22 :Edit JMR-Verify whether the approver/admin user is able to change the status to approved', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.verifyWhetherTheUserIsAbleToApproveJmr();
    });

    it('TC_Joint_Meter_Reading_23 :View JMR-Verify whether the fields are in read only mode when clicked on view icon', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await JmrPage.clickOnViewBtn();

        await JmrPage.verifyDataIsReadOnlyModeAfterClickingOnViewBtn();
    });

    it('TC_Joint_Meter_Reading_24 :Verify whether the fields are read only when the status is in approved status', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();
        await JmrPage.clickOnFilterBtn();
        await JmrPage.clickOnAssignedTo();
        await JmrPage.chooseStatusUnderFilter();
        await JmrPage.clickOnFilterSearchBtn();
        await JmrPage.addBilledUNitsAndDeemedGenertionClickableOrNot();
    });

    it('TC_Joint_Meter_Reading_25 :Verify whether the user is able to delete the JMR when the status is in work not started, In progress or waiting for approval', async () => {
        await LoginPage.loginWithValidCredentials();
        await HomePage.selectPlantName(PlantNameData.plantData.plantName);
        await JmrPage.goToCmms();
        await JmrPage.clickToJmr();

        await JmrPage.verifyDelete();
    });

});
