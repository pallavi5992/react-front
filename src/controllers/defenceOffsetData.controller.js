const db = require("../models");
const DefenceOffsetData = db.defenceoffsetOffline;
const axios = require("axios");
const moment = require("moment");

const addDefenceOffsetOfflinedata = async (req, res) => {
  const { dataStatus, ip } = req.params;

  try {
    const response = await axios.get(
      `https://domw.gov.in/Dashboardfilterclaim/getDatacontract/DOMWMODsupport1/${dataStatus}`
    );

    if (response.status === 200) {
      const model1 = response.data;
      const existingRecords = await DefenceOffsetData.findAll({
        where: { dataStatus: dataStatus },
      });

      for (const item of existingRecords) {
        await item.destroy();
      }

      const createdRecords = [];

      if (model1.result.data.length > 1) {
        for (const item of model1.result.data) {
          const data = await DefenceOffsetData.create({
            contractid: item.contractid,
            oem_name: item.oem_name,
            contract_short: item.contract_short,
            contract_description: item.contract_description,
            claims_submitted_cgda: parseFloat(item.claims_submitted_cgda),
            incomplete_claims_clarification_sought: parseFloat(
              item.incomplete_claims_clarification_sought
            ),
            under_examination_by_domw: parseFloat(
              item.under_examination_by_domw
            ),
            under_examination_by_cgda: parseFloat(
              item.under_examination_by_cgda
            ),
            claims_verified: parseFloat(item.claims_verified),
            claims_rejected: parseFloat(item.claims_rejected),
            claim_rejected_by_domw: parseFloat(item.claim_rejected_by_domw),
            DataStatus: dataStatus,
            ModifiedBy: 1,
            ModifiedOn: new Date(),
            IPAddress: ip,
          });
          createdRecords.push(data);
        }

        return res.status(200).send({status:true, message: "Updated Successfully", data: createdRecords });
      } else {
        return res.status(200).send("No Records Found");
      }
    } else {
      return res.status(500).send("Something Went Wrong");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const DefenceOffSetYearlyData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://domw.gov.in/Dashboardfilterclaim/getData/DOMWMODsupport1/all"
    );

    if (response.status === 200) {
      const model1 = response.data;
      const arrmonth = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const currYear = moment().year();
      const asonDate = `As on ${moment().format("D")} ${
        arrmonth[moment().month() + 1]
      } ${currYear}`;

      const dataYear = await tblModuleConfiguration.findOne({
        where: { ModuleID: 2 },
      });

      if (dataYear !== null) {
        const existingRecords = await DefenceOffset.findAll({
          where: { YearID: dataYear.DataYearID },
        });

        for (const item of existingRecords) {
          await item.destroy();
        }
      }

      const tbloffset = await DefenceOffset.create({
        YearID: dataYear.DataYearID,
        Year: asonDate,
        claims_submitted_cgda: parseFloat(model1.result.claims_submitted_cgda),
        incomplete_claims_clarification_sought: parseFloat(
          model1.result.incomplete_claims_clarification_sought
        ),
        under_examination_by_domw: parseFloat(model1.result.under_examination_by_domw),
        under_examination_by_cgda: parseFloat(model1.result.under_examination_by_cgda),
        claims_verified: parseFloat(model1.result.claims_verified),
        claims_rejected: parseFloat(model1.result.claims_rejected),
        offsets_obligation: parseFloat(model1.result.offsets_obligation),
        claim_rejected_by_domw: parseFloat(model1.result.claim_rejected_by_domw),
      });

      const offsetsObligation = parseFloat(tbloffset.offsets_obligation);
      const claimsSubmittedCgda = parseFloat(tbloffset.claims_submitted_cgda);
      const claimsVerified = parseFloat(tbloffset.claims_verified);
      const claimsRejected = parseFloat(tbloffset.claims_rejected);
      const incompleteClaimsClarificationSought = parseFloat(
        tbloffset.incomplete_claims_clarification_sought
      );
      const claimsUE = parseFloat(
        tbloffset.under_examination_by_domw +
          tbloffset.under_examination_by_cgda +
          tbloffset.claim_rejected_by_domw
      );

      const con = new Sequelize("YourDBName", "YourDBUser", "YourDBPassword", {
        host: "YourDBHost",
        dialect: "mssql",
      });

      await con.authenticate();
      const [results] = await con.query(
        "exec AddNewDefenceOffsetData @Instance_Code=1, @Sec_Code=8, @Ministry_Code=11, @Dept_Code=13, @Project_Code=100366, @Frequency_Id=1, @Group_Id=1, @Datadate=@Datadate, @atmpt=0, @Lvl1_Code=91, @KPI1_Data=@KPI1_Data, @KPI2_Data=@KPI2_Data, @KPI3_Data=@KPI3_Data, @KPI4_Data=@KPI4_Data, @KPI5_Data=@KPI5_Data, @KPI6_Data=@KPI6_Data",
        {
          replacements: {
            Datadate: moment().format("MM/DD/YYYY"),
            KPI1_Data: offsetsObligation,
            KPI2_Data: claimsSubmittedCgda,
            KPI3_Data: claimsVerified,
            KPI4_Data: claimsRejected,
            KPI5_Data: incompleteClaimsClarificationSought,
            KPI6_Data: claimsUE,
          },
        }
      );

      const chklist = await tblModuleConfiguration.findOne({
        where: { ModuleID: 2 },
      });

      if (chklist !== null) {
        await tblModuleConfiguration.update(
          { As_On_Date: new Date(), ModifiedOn: new Date() },
          { where: { ModuleID: 2 } }
        );
      }

      return res.status(200).send("Updated Successfully");
    } else {
      return res.status(500).send("No Records Found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};




module.exports = {
  addDefenceOffsetOfflinedata,
  
  DefenceOffSetYearlyData,
};
