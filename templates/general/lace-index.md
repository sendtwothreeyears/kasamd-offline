# LACE Index for Hospital Readmission Risk

**Category:** General & Administrative
**Source:** https://www.soapnote.org/general/lace-index/

---

LACE Index [link memo="see also the HOSPITAL Score." url="//www.soapnote.org/general/hospital-score/"]
[select name="Q1" value="less than 1 (0 points)=0|one (1 point)=1|two (2 points)=2|three (3 points)=3|four to six (4 points)=4|seven to thirteen (5 points)=5|fourteen or more (7 points)=7"] <-- Length of stay (days)
[select name="Q2" value="no (0 points)=0|YES (3 points)=3"] <-- Acute/emergent admission
[select name="Q3" value="zero (0 points)=0|one (1 point)=1|two (2 points)=2|three (3 points)=3|four or more (5 points)=5"] <-- Charlson Comorbidity Score [link url="//www.soapnote.org/geriatrics/charlson-comorbidity-index/" memo="calculator link"]
[select name="Q4" value="zero (0 points)=0|one (1 point)=1|two (2 points)=2|three (3 points)=3|four (4 points)=4"] <-- Emergency department visits in the past 6 months

Score --> [calc memo="number" value="Score0=(Q1)+(Q2)+(Q3)+(Q4)"] out of 19 points
Interpretation --> [calc memo="result" value="Score=(Q1)+(Q2)+(Q3)+(Q4);Score>18?'43.7':Score>17?'39.1':Score>16?'34.6':Score>15?'30.4':Score>14?'26.6':Score>13?'23.0':Score>12?'19.8':Score>11?'17.0':Score>10?'14.4':Score>9?'12.2':Score>8?'10.3':Score>7?'8.7':Score>6?'7.3':Score>5?'6.1':Score>4?'5.1':Score>3?'4.3':Score>2?'3.5':Score>1?'3.0':Score>0?'2.5':'2.0'"] percent - Probability of readmission or death within 30 days of discharge

[checkbox memo="hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
Reference: [link url="https://www.ncbi.nlm.nih.gov/pubmed/20194559" memo="link"] van Walraven C, Dhalla IA, Bell C, Etchells E, Stiell IG, Zarnke K, Austin PC, Forster AJ. Derivation and validation of an index to predict early death or unplanned readmission after discharge from hospital to the community. CMAJ. 2010 Apr 6;182(6):551-7.[/conditional]
