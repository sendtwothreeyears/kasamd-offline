# OESIL Risk Score for Syncope

**Category:** Cardiovascular
**Source:** http://www.soapnote.org:80/cardiovascular/oesil-risk-score/

---

OESIL Risk Score for Syncope
[select name="Q1" value="no (0 points)=0|YES (1 point)=1"] <-- Age > 65 years
[select name="Q2" value="no (0 points)=0|YES (1 point)=1"] <-- History of cardiovascular disease
[select name="Q3" value="no (0 points)=0|YES (1 point)=1"] <-- Syncope without a prodrome
[select name="Q4" value="no (0 points)=0|YES (1 point)=1"] <-- Abnormal ECG findings
score --> [calc memo="number" value="score1=(Q1)+(Q2)+(Q3)+(Q4)"]
interpretation --> [calc memo="result" value="score2=(Q1)+(Q2)+(Q3)+(Q4);score2>1?'31 % risk of all-cause mortality at 12 months':'0.6 % risk of all-cause mortality at 12 months'"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference:
[link url="//www.ncbi.nlm.nih.gov/pubmed/12727148" memo="#1"] Colivicchi F, Ammirati F, Melina D, Guido V, Imperoli G, Santini M; OESIL (Osservatorio Epidemiologico sulla Sincope nel Lazio) Study Investigators. Development and prospective validation of a risk stratification system for patients with syncope in the emergency department: the OESIL risk score. Eur Heart J. 2003 May;24(9):811-9.
[/conditional]
