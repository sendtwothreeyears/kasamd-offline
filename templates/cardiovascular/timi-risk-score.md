# TIMI (Thrombolysis in Myocardial Infarction) Risk Score

**Category:** Cardiovascular
**Source:** http://www.soapnote.org:80/cardiovascular/timi-risk-score/

---

TIMI (Thrombolysis in Myocardial Infarction) Risk Score Calculation
.....................................................................................................
Criteria
A. Age 65 years old or older? ---> [select name="age"  value="Yes (1 point)=1|No (0 points)=0"]
B. Aspirin used in the last 7 days? ---> [select name="aspirin"  value="Yes (1 point)=1|No (0 points)=0"]
C. Angina occurred 2 or more times in the last 24 hours? ---> [select name="angina"  value="Yes (1 point)=1|No (0 points)=0"]
D. ST changes 0.5mm or more on admit EKG? ---> [select name="stchanges"  value="Yes (1 point)=1|No (0 points)=0"]
E. Serum Troponin or other biomarker elevated? ---> [select name="troponin"  value="Yes (1 point)=1|No (0 points)=0"]
F. Coronary Artery Disease history (with at least 50% Coronary Artery stenosis)? ---> [select name="cad"  value="Yes (1 point)=1|No (0 points)=0"]
G. Cardiac Risk Factors (at least 3 need to be present)?
--- 1. Diabetes? ---> [select name="diabetes"  value="Yes=0.1|No=0"]
--- 2. Cigarette smoking? ---> [select name="cigarette"  value="Yes=0.1|No=0"]
--- 3. HTN (BP 140/90 mm Hg or on antihypertensive medication)? ---> [select name="hypertension"  value="Yes=0.1|No=0"]
--- 4. Low HDL cholesterol ( < 40 mg/dL)? ---> [select name="cholesterol"  value="Yes=0.1|No=0"]
--- 5. Family history of premature CAD (male 1st-degree relative < 55 years OR female 1st-degree relative < 65 years)? ---> [select name="family"  value="Yes=0.1|No=0"]
.....................................................................................................
TIMI Risk Score*: [calc value="score=(age)+(aspirin)+(angina)+(stchanges)+(troponin)+(cad)+(diabetes)+(cigarette)+(hypertension)+(cholesterol)+(family); score>6.2?'Score=7, 40.9% risk':score>5.2?'Score=6, 40.9% risk':score>4.2?'Score=5, 26.2% risk':score>3.2?'Score=4, 19.9% risk':score>2.2?'Score=3, 13.2% risk':score>1.2?'Score=2, 8.3% risk':score>0.2?'Score=1, 4.7% risk':'Score=0, 4.7% risk'" memo="score interpretation"]
*Mortality risk estimate is for 2 week subsequent risk of death, myocardial infarction, or need for revascularization following Acute Coronary Syndromes.
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
references:
[link url="//www.ncbi.nlm.nih.gov/pubmed/10938172" memo="#1"] Antman (2000) JAMA 284:835
[link url="//www.fpnotebook.com/cv/exam/TmRskScr.htm" memo="#2"] FP Notebook Page[/conditional]
