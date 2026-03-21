# Estimated Average Glucose to Hemoglobin A1c

**Category:** Endocrine, Nutrition & Obesity
**Source:** https://www.soapnote.org/endocrine-metabolic/eag-to-hgba1c/

---

[comment memo="As the hemoglobin goes above 8.4%, estimated average glucose tracks closer to the fasting glucose."]

[text name="variable_1"] <-- Estimated Average Glucose (mg/dL)

Hemoglobin A1c (%) --> [calc value="score=(((variable_1)+46.7)/28.7).toFixed(1)" memo="number"]

Interpretation --> [calc value="score1=(((variable_1)+46.7)/28.7);score1>6.4?'Diabetes':score1>5.7?'Impaired Glucose Tolerance':'Normal'" memo="result"]

[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
references: 
[link url ="https://www.ncbi.nlm.nih.gov/pubmed/11815495" memo="#1"] Rohlfing CL, Wiedmeyer HM, Little RR, England JD, Tennill A, Goldstein DE. Defining the relationship between plasma glucose and HbA(1c): analysis of glucose profiles and HbA(1c) in the Diabetes Control and Complications Trial. Diabetes Care. 2002 Feb;25(2):275-8.
[link url ="https://www.ncbi.nlm.nih.gov/pubmed/12610053" memo="#2"] Monnier L, Lapinski H, Colette C. Contributions of fasting and postprandial plasma glucose increments to the overall diurnal hyperglycemia of type 2 diabetic patients: variations with increasing levels of HbA(1c). Diabetes Care. 2003 Mar;26(3):881-5. 
[/conditional]
