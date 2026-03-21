# HOSPITAL Score to Predict Readmission Risk

**Category:** Featured
**Source:** https://www.soapnote.org/general/hospital-score/

---

HOSPITAL Score to Predict Readmission Risk [link memo="see also the LACE index." url="https://www.soapnote.org/general/lace-index/"]
[select name="Q1" value="no (0 points)=0|YES (1 point)=1"] <-- Hemoglobin level below 12 g/dL
[select name="Q2" value="no (0 points)=0|YES (2 points)=2"] <-- Discharge from oncology service
[select name="Q3" value="no (0 points)=0|YES (1 point1)=1"] <-- Sodium level below 135 mEq/L (135 mmol/L)
[select name="Q4" value="no (0 points)=0|YES (1 point)=1"] <-- Procedure done during hospital stay
[select name="Q5" value="no (0 points)=0|YES (1 point)=1"] <-- Index admission type is nonelective
[select name="Q6" value="none (0 points)=0|one to five (2 points)=2|more than 5 (5 points)=5"] <-- Number of hospital admissions during the previous year
[select name="Q7" value="no (0 points)=0|YES (2 points)=2"] <-- Length of stay 5 or more days
Score --> [calc memo="number" value="Score0=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7)"] out of 13 points
Interpretation --> [calc memo="result" value="Score=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7);Score>6?'22.8 percent risk of avoidable readmission':Score>4?'11.9 percent risk of avoidable readmission':'5.8 percent risk of avoidable readmission'"]
[checkbox memo="hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
References:
[link url="https://www.ncbi.nlm.nih.gov/pubmed/27548597" memo="#1"] Jelinek S, Yunyongying P. Predicting Hospital Readmission. Am Fam Physician. 2016 Aug 15;94(4):307-9.
[link url="https://www.ncbi.nlm.nih.gov/pubmed/26954698" memo="#2"] Donzé JD, Williams MV, Robinson EJ, Zimlichman E, Aujesky D, Vasilevskis EE, Kripalani S, Metlay JP, Wallington T, Fletcher GS, Auerbach AD, Schnipper JL. International Validity of the HOSPITAL Score to Predict 30-Day Potentially Avoidable Hospital Readmissions. JAMA Intern Med. 2016 Apr;176(4):496-502.
[link url="https://www.ncbi.nlm.nih.gov/pubmed/23529115" memo="#3"] Donzé J, Aujesky D, Williams D, Schnipper JL. Potentially avoidable 30-day hospital readmissions in medical patients: derivation and validation of a prediction model. JAMA Intern Med. 2013 Apr 22;173(8):632-8.[/conditional]
