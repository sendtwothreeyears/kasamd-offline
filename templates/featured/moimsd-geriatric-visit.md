# MOIMSD Geriatric Visit

**Category:** Subjective/History Elements
**Source:** https://www.soapnote.org/featured/moimsd-geriatric-visit/

---

History Provided by [select name="variable_1" value="|The patient|Spouse|Son|Daughter|Other"][conditional field="variable_1" condition="(variable_1).is('Other')"] [text name="variable_2" default=":"][/conditional]
Marital History:[select name="variable_4" value="|Married|Widowed|Divorsed|Single"]
Home:[select name="variable_5" value="|House|Apartment|With Family Member|Nursing Home"]
Lives:[select name="variable_6" value="|Family|Alone|Other"][conditional field="variable_6" condition="(variable_6).is('Other')"] [text name="variable_3" default=":"][/conditional]
Caregiver Relashinship:[select name="variable_8" value="|Spouse |Offspring|Sibling|Other"][conditional field="variable_8" condition="(variable_8).is('Other')"] [text name="variable_9" default=":"][/conditional]
Caregiver Stress:[select name="variable_10" value="None|Low|Moderate|High"]
Past Medical/Surgical History:[textarea cols=61 rows=1 name="variable_16" size=30]
Code Status:[select name="variable_11" value="Full Code|DNR"]
----------------------------------------
Current Friality Score:[select name="variable_12" value="|(1) Very Fit|(2) Fit|(3) Managing Well|(4) Living with Very Mild Fiality|(5) Living with Mild Frailty|(6) Living with Moderate Frailty|(7) Living with Severe Friality|(8) Living with Very Severe Friality|(9) Terminally Ill"]
Mental Health:
1-PHQ-2 Depression Screening Test:[select name="variable_13" value="Normal|Abnormal"]
2-Mini-Cog Test:[select name="variable_14" value="Pass|Fail|Not Done"]
3-Cognition:[select name="variable_15" value="Normal|Dementia|Delerium"]
----------------------------------------
Mobility & Independance:
- Get up and Go Test: [select name="variable_27" value="Normal|Abnormal" memo="Normal=<20 sec " memo_color="blue" memo_style="bold-italic" memo_size="small"]
- History of Falls: [select name="variable_28" value="No|Yes"][conditional field="variable_28" condition="(variable_28).is('Yes')"] [text name="variable_32" default="N. of Falls="][/conditional]
- Level of Independence (Katz index): [select name="variable_29" value="High|Moderate|Low"]
- Use of Aids: [select name="variable_30" value="Non|Cane|Walker|Wheel Chair"]
----------------------------------------
Polypharmacy assesment:[comment memo=">5 drugs considered polypharmacy" memo_color="green" memo_style="bold-italic" memo_size="small"]
-Patient was reminded to bring all medications to each visit.
-[select name="variable_17" value="All patient medications have been evaluated, and none pose a risk of interactions, adverse effects, or falls.|Medication modification was done as following:"][conditional field="variable_17" condition="(variable_17).is('Medication modification was done as following:')"][textarea name="variable_18"][/conditional]
----------------------------------------
Nutrition:
-Wieght:[select name="variable_19" value="Normal|Under Wieght|Over Wieght|Obese" memo="Geriatric normal BMI 23-30 kg/m2" memo_color="green" memo_style="bold-italic" memo_size="small"]
-Appetite:[select name="variable_20" value="Normal|Fair|Poor"]
-Loss of 5 Kg in last 6 months? --->[select name="variable_21" value="No|Yes"]
----------------------------------------
Elimination:
-Bladder --->[select name="variable_22" value="Continent|Incontinent"]
-Bowel --->[select name="variable_23" value="Continent|Incontinent"]
----------------------------------------
Communication:
- Hearing: [select name="variable_24" value="Normal|Impaired"]
- Vision: [select name="variable_25" value="Normal|Impaired"]
- Speech: [select name="variable_26" value="Normal|Impaired"]
----------------------------------------
Immunizations:
[checklist name="variable_31" value="Covid-19 Vaccine|Influenza Vaccine|Tetanus Vaccine|Pneumococcal Vaccine|Zoster Vaccine"]
[link url="https://www.soapnote.org/plan/moimsd-care-plan/" memo="«To Document The Patient Care Plan Press Here»"]
