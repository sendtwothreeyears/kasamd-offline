# ATRIA Tool for Assessing Bleeding Risk with Anticoagulants

**Category:** Hematology & Oncology
**Source:** https://www.soapnote.org/blood-lymph/atria/

---

Tool for Assessing Bleeding Risk with Anticoagulants from The AnTicoagulation and Risk Factors In Atrial Fibrillation (ATRIA) Study
[select name="Q1" value="no (0 points)=0|YES (1 point)=1"] <-- Prior bleeding
[select name="Q2" value="no (0 points)=0|YES (2 points)=2"] <-- Age greater than 75 years
[select name="Q3" value="no (0 points)=0|YES (3 points)=3"] <-- Severe renal disease (dialysis or glumerular filtration rate less than 30 mL per minute)
[select name="Q4" value="no (0 points)=0|YES (3 points)=3"] <-- Anemia (hemoglobin less than 13 g/dL for men, hemoglobin less than 12 g/dL for women)
[select name="Q5" value="no (0 points)=0|YES (1 point)=1"] <-- Hypertension
Score --> [calc value="score1=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)" memo="number"] out of 10
Recommendation (Risk estimation from validation cohort) --> [calc value="score2=(Q1)+(Q2)+(Q3)+(Q4)+(Q5);score2>4?'High Risk - Number Needed to Harm in 1 year - 120':score2>3?'Moderate Risk - Number Needed to Harm in 1 year - 41':'Low Risk - Number Needed to Harm in 1 year - 19'" memo="interpretation"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"] 
reference: 
[link url="https://www.ncbi.nlm.nih.gov/pubmed/21757117" memo="#1"] Fang MC, Go AS, Chang Y, Borowsky LH, Pomernacki NK, Udaltsova N, Singer DE. A new risk scheme to predict warfarin-associated hemorrhage: The ATRIA (Anticoagulation and Risk Factors in Atrial Fibrillation) Study. J Am Coll Cardiol. 2011 Jul 19;58(4):395-401.[/conditional]
