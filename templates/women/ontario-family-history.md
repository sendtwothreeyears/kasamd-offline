# Ontario Family History Assessment Tool

**Category:** Gynecology & Women's Health
**Source:** https://www.soapnote.org/women/ontario-family-history/

---

Ontario Family History Assessment Tool
Breast and ovarian cancer	 
[checklist name="variable_1" value="Mother (10 points)=10|Sibling (7 points)=7|Second-/third-degree relative (5 points)=5"]
Breast cancer relatives	 
[checklist name="variable_2" value="Parent (4 points)=4|Sibling (3 points)=3|Second-/third-degree relative (2 points)=2|Male relative (additional 2 points)=2"]
Breast cancer characteristics
- Breast cancer onset age	 
[checklist name="variable_3" value="20-29 years (6 points)=6|30-39 years (4 points)=4|40-49 years (2 points)=2"]	  
- Premenopausal/perimenopausal [checklist name="variable_4" value="Yes (2 points)=2"]
- Bilateral/multifocal [checklist name="variable_5" value="Yes (3 points)=3"]
Ovarian cancer relatives	 
[checklist name="variable_6" value="Mother (7 points)=7|Sibling (4 points)=4|Second-/third-degree relative (3 points)=3"]
Ovarian cancer onset age
[checklist name="variable_7" value="less than 40 years (6 points)=6|40-60 years (4 points)=4|greater than 60 years (2 points)=2"]
Prostate cancer onset age
[checklist name="variable_8" value="less than 50 years (1 point)=1"]
Colon cancer onset age
[checklist name="variable_9" value="less than 50 years (1 point)=1"]
Score --> [calc memo="number" value="score_1=(variable_1)+(variable_2)+(variable_3)+(variable_4)+(variable_5)+(variable_6)+(variable_7)+(variable_8)+(variable_9)"]
Recommendation --> [calc memo="result" value="score_2=(variable_1)+(variable_2)+(variable_3)+(variable_4)+(variable_5)+(variable_6)+(variable_7)+(variable_8)+(variable_9);score_2>9?'Double lifetime risk for breast cancer (22 percent), refer to genetics center':'Below the cutoff for referral to genetics center'"]
[checkbox memo="References (Hide/Show)" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
[link url="//www.ncbi.nlm.nih.gov/pubmed/11076055" memo="#1"] Gilpin CA, Carson N, Hunter AG. A preliminary validation of a family history assessment form to select women at risk for breast or ovarian cancer for referral to a genetics center. Clin Genet. 2000 Oct;58(4):299-308.
[/conditional]
