# Constipation Red Flags

**Category:** Gastroenterology & Hepatology
**Source:** https://www.soapnote.org/digestive-system/constipation-red-flags/

---

Constipation Red Flags
[select name="Q1" value="no=0|YES=1"] <-- Age over 50 years old and no prior Colorectal Cancer Screening
[select name="Q2" value="no=0|YES=1"] <-- Acute or recent onset constipation
[select name="Q3" value="no=0|YES=1"] <-- Weight loss (especially more than 10 pounds or 4.5 kg)
[select name="Q4" value="no=0|YES=1"] <-- Abdominal Pain or cramping
[select name="Q5" value="no=0|YES=1"] <-- Rectal bleeding, Melena, heme-positive stool (Iron Deficiency Anemia)
[select name="Q6" value="no=0|YES=1"] <-- Nausea or Vomiting
[select name="Q7" value="no=0|YES=1"] <-- Rectal Pain
[select name="Q8" value="no=0|YES=1"] <-- Fever
[select name="Q9" value="no=0|YES=1"] <-- Change in stool caliber
Constipation with [calc value="score=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7)+(Q8)+(Q9)" memo="number of red flags"] out of 8 Red Flags.
Recommendation:  [calc memo="result" value="score2=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7)+(Q8)+(Q9);score>0?'Colonoscopy is suggested':'Colonoscopy may not be needed'"]
[checkbox memo="References (Hide/Show)" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
[link url="http://www.aafp.org/afp/2015/0915/p500.html" memo="Mounsey A, Raleigh M, Wilson A. (2015) Am Fam Physician. 92(6):500-504."][/conditional]
