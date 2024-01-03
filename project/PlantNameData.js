const PlantNameData = {
  plantData: {
    dashboardPlantName: "IN.CLPX.VELT", //  GR.SUNS.VATH  IN.CLPX.VELT -veltoor
    plantName: "IN.RADI.ACMS", //DMRC Aerocity Metro station
    specificPlantName: "Veltoor 120", // Veltoor 120  Vathilakos4
    selectModuleType: "JA_Solar_JAP6_72_320_4BB",//   ng-option ng-option-marked ng-star-inserted - vethilakos4 //JA_Solar_JAP6_72_320_4BB- veltoor module
    specificModuleType: "ng-option ng-option-marked ng-star-inserted",
    specificInverterName: "BLK01-INV01", // BLK01-INV01 - veltooor120 INV01 - Vathilakos4
    normalPercentageFromPieCharts:
      "highcharts-label highcharts-data-label highcharts-data-label-color-0", // highcharts-label highcharts-data-label highcharts-data-label-color-1- vethilakos4 , highcharts-label highcharts-data-label highcharts-data-label-color-0 - Veltoor 120

    expectedNormalText:
      "Normal - String current is well within the specified range and not constant or zero.",
    expectedIntermittentlyErroneousText:
      "Intermittently Erroneous - String current is zero, constant or Erroneous for few samples in the selected period.",
    expectedZeroText:
      "Zero - String current is zero across the selected period.",
    expectedConstantText:
      "Constant - String Current has a constant value across the selected period.",
    expectedExcessiveCurrentText:
      "Excessive Current - Strings with current higher than theoretical max across the selected period.",
    expectedDataNotAvailableText:
      "Data not available - String currents are null and no value associated with it for entire period or String details are not available in the Asset master or Plant configuration.",
    expectedTotalNoStringsText:
      "Total no. of Strings - Total No. of Strings connected to the selected Inverter and Module",


    lblInverterWisDeviation: "Inverter Wise Deviation",
    lblInverterwiseStringClassification: "Inverter Wise String Classification",

    lblPercentage: "Percentage",
    valueTextFieldCycleDetails: "cycle-02",
    valueTextFieldCycleName: "test-2",
    VerificationMessage: "Please enter valid details",
    valueTextFieldCycleNameInFilter: "test cycle",
    valueNull: "",
    automationPlant: "AutoTest",
    dashboardAbcRenewable: "IN.BRKF.ABCR", //ABC Renewable(RJ01) PRIVATE LIMITED
    plantNameABCRenewable: "ABC RENEWABLE (RJ01) PRIVATE LIMITED", // ABC RENEWABLE (RJ01) PRIVATE LIMITED
    plantNameVathilakos4: "Vathilakos", // Vathilakos4
    projectPlantName: "testuser01",
    projectTiltPlantName: "testuser21",
    projectNameForVerifyCounrty: "GR.SUNS.VATH",
    projectTiltVerify: "anderson",
    existingProjectPlantName: "autotest",
    subClassificationAssertMaster: "String",
    dataQualityPng: "Data Quality.png",
    dataQualityPdf: "Data Quality.pdf",
    dataQulaityExcelData: ['Count', 699, 3, 191, 4910],
    dataNotAvailableCategory: 'Data Not Available',
    erroneousCategory: "Erroneous",
    dataQulaityCsvData: '12.05',
    rankTableCsvData: 'BLK01-INV01',
    rankTableExcelData: 'BLK01-INV01|SMB01.String Current CH - 01',
    dataNotAvailableCsv: 'Data Not Available',
    erroneousCsv: 'Erroneous',
    normalCsv: 'Deviation(%) between 0 to -10',
    InverterWiseStringClassificationpng: "Inverter Wise String Classification.png",
    InverterWiseStringClassificationpdf: "Inverter Wise String Classification.pdf",
    InverterDeviationYaxis: "BLK06-INV23",
    SpecificCurrentIrradiancepng: "Specific Current & Irradiance.png",
    SpecificCurrentIrradiancepdf: "Specific Current & Irradiance.pdf",
    highChartDataCsv: "BLK01-INV01|SMB04.String Current CH - 08",

    //tn
    //trn
    editProjectLongName: 'AutomationTestEd',
    editProjectShortName: 'AutoEd',
    editProjectProtocolType: 'Modbus',
    editProjectLatitude: '123.32',
    editProjectLongitude: '9191.321',
    editProjectLocation: 'Mumbai',
    editProjectCapacity: '1320',
    editProjectAddress: '1 Mumbai',
    editProjectCountry: 'Angola',
    editProjectTimeZone: '(UTC-11:00) Coordinated Universal Time-11',
    editProjectDomain: 'Battery Thermal Management System',
    editProjectDataInterval: '5 - sec',
    editProjectPlantControlId: 'IND0111',
    editProjectContactPersonName: 'bilGates',
    editProjectMobileNo: 9009999000,
    editProjectEmailId: 'testedit@gmail.com',



    setProjectLongName: 'AutomationNewUser',
    setProjectShortName: 'newUserAuto',
    setProjectProtocolType: 'FTP',
    setProjectLatitude: '123.321.11',
    setProjectLongitude: '9191.123.1',
    setProjectPlantLocation: 'Delhi',
    setProjectPlantCapacity: 660,
    setProjectAddress: '1 Delhi',
    setProjectCountry: 'British Indian Ocean Territory',
    setProjectTimeZone: '(UTC-12:00)',
    setProjectDomain: 'Battery Management System',
    setProjectDataApiUrl: 'https://ftpstore.prescinto.com/',
    setProjectWeatherSource: 'https://ftpstore.prescinto.com/',
    setProjectDataInterval: '10 - sec',
    setProjectPlantControllerId: 'IND01',
    setProjectContactPersonName: 'Adani',
    setProjectMobileNumber: 9990001119,
    setProjectEmailId: 'test@gmail.com',

    projectActiveUserClass: 'ng-untouched ng-pristine ng-valid',
    projectActiveUserExpectedName: 'Fedral Power',
    projectDeActiveUserExpectedName: 'Fintech Power LTD',
    projectExpectedClassForFutureDate: 'mat-calendar-body-cell mat-calendar-body-disabled ng-star-inserted',
    setProjecrFeatureToCmms: 'CMMS',
    setProjectMountingTypeToFixedTilt: 'Fixed Tilt',
    setProjectMountingTypeToSeasonalTilt: 'Seasonal Tilt',
    setProjectMountingTypeToSingleAxisTracker: 'Single Axis Tracker',
    setProjectMountingTypeToDualAxisTracker: 'Dual Axis Tracker',
    selectDomainToSolarPvRooftop: 'Solar PV Rooftop',

    editProjectExistingLongName: 'AutomationT',
    editProjectExistingShortName: 'AutoIndia',

    setProjectlongNameAutomation: 'AutomationTest',
    setProjectShortNameToAuto: 'Auto',

    setProjectBritishLocation: 'London',

    projectActiveDeactivePlant: "Fedral",
    projectDeActivePlant: "Fintech",

    expectedMountingClass: 'default-input pl-0 ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-invalid',
    expectedTiltAngleClass: 'default-input ng-untouched ng-pristine ng-valid',
    expectedTiltSpanClass: 'mat-tooltip-trigger icon icon-Error error-icon error-required ng-star-inserted',
    varFixedTilt: 'Fixed Tilt',



  },
  lossCalculationPlantData: {
    dashboardPlantName: "IN.RADI.XLRI",
    specificPlantName: "XLRI"
  }


}
export default PlantNameData;

