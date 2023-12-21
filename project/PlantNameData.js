const PlantNameData = {
  plantData: {
    dashboardPlantName: "IN.CLPX.VELT", //  GR.SUNS.VATH  IN.CLPX.VELT -veltoor
    deshboardDmrcAerocity: "IN.RADI.ACMS", //DMRC Aerocity Metro station
    specificPlantName: "Veltoor 120", // Veltoor 120  Vathilakos4
    selectModuleType: "ng-option ng-star-inserted",//   ng-option ng-option-marked ng-star-inserted - vethilakos4 //ng-option ng-star-inserted- veltoor module
    specificModuleType: "ng-option ng-option-marked ng-star-inserted",
    specificInverterName: "BLK01-INV01",// BLK01-INV01 - veltooor120 INV01 - Vathilakos4
    dataNotFoundInverter: "BLK18-INV70", //BLK18-INV70 ,INV08
    normalPercentageFromPieCharts: "highcharts-label highcharts-data-label highcharts-data-label-color-0", // highcharts-label highcharts-data-label highcharts-data-label-color-1- vethilakos4 , highcharts-label highcharts-data-label highcharts-data-label-color-0 - Veltoor 120
    expectedValueHashMapCsv: "SMB08.String Current CH - 09", // can't get string name from UI, hardcoded string name
    expectedNormalCurrentHashMapCsv: "1",
    expectedNormalCurrentValueHashMapCsv: "8",
    expectedNormalText: "Normal - String current is well within the specified range and not constant or zero.",
    expectedIntermittentlyErroneousText: "Intermittently Erroneous - String current is zero, constant or Erroneous for few samples in the selected period.",
    expectedZeroText: "Zero - String current is zero across the selected period.",
    expectedConstantText: "Constant - String Current has a constant value across the selected period.",
    expectedExcessiveCurrentText: "Excessive Current - Strings with current higher than theoretical max across the selected period.",
    expectedDataNotAvailableText: "Data not available - String currents are null and no value associated with it for entire period or String details are not available in the Asset master or Plant configuration.",
    expectedTotalNoStringsText: "Total no. of Strings - Total No. of Strings connected to the selected Inverter and Module",
    dataQualitycsvExpectedValue: "Data Quality",
    dataQualityPdfExpectedValue: "Data Quality",
    dataQualityExcelExpectedValue: "-2.9668411867364837",
    tableViewCsvExpectedValue: "BLK01-INV01",
    tableViewExcelExpectedValue: "-3.0250145433391533",
    expectedValueHigherStringInHighChart: "BLK01-INV01|SMB04.String Current CH - 08 ",
    expectedValueLowerStringInHighChart: "BLK01-INV01|SMB03.String Current CH - 09",
    expectedValueTheoriticalCurrentInHighChart: "6.462348535570529e-27 ",
    expectedValueIrradianceInHighChart: "0.6",
    lblInverterWisDeviation: "Inverter Wise Deviation",
    lblInverterwiseStringClassification: "Inverter Wise String Classification",
    percentageStringCurrent: "5.64",
    projectPlantName: "testuser01",//you cna change the name accordrdingly
    projectTiltPlantName: "testuser21",
    projectNameForVerifyCounrty: "GR.SUNS.VATH",
    projectTiltVerify: 'anderson',
    existingProjectPlantName: "autotest",
  },
}
export default PlantNameData;
