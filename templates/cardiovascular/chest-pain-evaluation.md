# Chest Pain Evaluation

**Category:** Cardiovascular
**Source:** http://www.soapnote.org:80/cardiovascular/chest-pain-evaluation/

---

Chest pain evaluation
This calculator is intended to help guide evaluation for chest pain in regards to the likelihood of non-cardiac causes.
[select name="Q1" value="no=0|YES=1"] <-- Male 55 years or over/Female 65 or over
[select name="Q2" value="no=0|YES=1"] <-- Known CAD or cerebrovascular disease
[select name="Q3" value="no=0|YES=1"] <-- Pain not reproducible by palpation
[select name="Q4" value="no=0|YES=1"] <-- Pain worse during exercise
[select name="Q5" value="no=0|YES=1"] <-- Patient assumes pain is cardiogenic
Score --> [calc value="score=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)" memo="score"] out of 5.  Interpretation --> [calc value="score=(Q1)+(Q2)+(Q3)+(Q4)+(Q5);score>3?'High (62.7%) risk, proceed with ACS evaluation.':score>1?'Moderate (12.1%) risk, obtain ECG and proceed with ACS or other evaluations as indicated.':'Low (0.6%) risk, if no other indication of cardiac cause, evaluate for non-cardiac causes.'" memo="interpretation"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference:  AAFP Point-of-Care Guide at [link url="http://www.aafp.org/afp/poc" memo="Ebell (2011) Am Fam Physician 83: 603-5"][/conditional]
