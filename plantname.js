const PlantNameData = {
  plantData: {
    dashboardPlantName: "IN.CLPX.VELT", //  GR.SUNS.VATH  IN.CLPX.VELT -veltoor
    specificPlantName: "Veltoor 120", // Veltoor 120  Vathilakos4
    selectModuleType: "ng-option ng-star-inserted", //   ng-option ng-option-marked ng-star-inserted
    plantName: "IN.RADI.ACMS",
    automationPlant: "AutoTest",
    expectedValueHashMapCsv: "SMB08.String Current CH - 09",
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



    //tc_9
    jmrSetBilledValue: '1234',
    jmrSetUnBilledValue: '5432',
    jmrSetDeemedValue: '4321',
    jmrSetProjectStatus: 'Work not started',
    jmrSetReadTypeToBilled: 'Billable',
    jmrSetReadType: 'Unbillable',
    jmrEditAssignedTo: 'Automation',
    jmrEditApprovedTo: 'adminAutomate',
    jmrEditRemarkValue: 'RemarkSet',//adminAutomate








  },


}
export default PlantNameData;
