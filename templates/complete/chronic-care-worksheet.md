# Chronic Care Worksheet

**Category:** Complete Note
**Source:** https://www.soapnote.org/complete/chronic-care-worksheet/

---

[text name="variable_1" memo="age"] y/o male.  Intake [text name="variable_2" memo="intake year"] for [text name="variable_3" memo="admission diagnosis"]

Past Medical History:
[textarea name="variable_4" memo="past medical history"]

Surgical History:
[textarea name="variable_5" memo="surgical history"]

Social Hx:
1.  Tobacco: [text name="variable_6" memo="tobacco"]
2.  Alcohol: [text name="variable_7" memo="alcohol"]
3.  Substances: [text name="variable_8" memo="substances"]
4.  Tattoos: [text name="variable_9" memo="tattoos"]
5.  Transfusions: [text name="variable_10" memo="transfusions"]
6.  Hx STDs: [text name="variable_11" memo="STDs"]
7.  Sexual Hx: [text name="variable_12" memo="sexual history"]

Family Hx:
1.  Father: [text name="variable_13" memo="father"]
2.  Mother: [text name="variable_14" memo="mother"]
3.  Brothers: [text name="variable_15" memo="brothers"]
4.  Sisters: [text name="variable_16" memo="sisters"]
5.  Sons: [text name="variable_17" memo="sons"]
6.  Daughters: [text name="variable_18" memo="daughters"]
7.  Other: [text name="variable_19" memo="other"]

Prev Med:
1.  Flu: [text name="variable_20" memo="flu"]
2.  Tdap: [text name="variable_21" memo="tdap"]
3.  PCV13: [text name="variable_22" memo="pcv13"]
4.  PCV23: [text name="variable_23" memo="pcv23"]
5.  Hepatitis B: [text name="variable_24" memo="hepatitis b"]
6.  PSA: [text name="variable_25" memo="psa"]
7.  Colon ca: [text name="variable_26" memo="colon ca"]
8.  AAA: [text name="variable_27" memo="aaa"]

Medical Duty Status:
1.  Limitations: [text name="variable_28" memo="limitations"]
2.  Equipment: [text name="variable_29" memo="equipment"]

Imaging Concerns:
1. Metal device: [text name="variable_30" memo="metal devices"]
2. Contrast allergy: [text name="variable_31" memo="contrast allergy"]
3. Claustrophobia: [text name="variable_32" memo="claustrophobia"]

Medication Monitoring:
[checklist name="variable_33" value="atypical antipsychotics|amiodarone|carbamazepine|digoxin|gabapentin|hydroxychloroquine|lamotrigine|levetiracetam|lithium|methotrexate|oxcarbazepine|phenytoin|pregabalin|topiramate|valproic acid" memo="medication monitoring"]
[conditional field="variable_33" condition="(variable_33).is('atypical antipsychotics')||(variable_33).is('amiodarone')||(variable_33).is('digoxin')||(variable_33).is('carbamazepine')||(variable_33).is('lithium')"]
EKG: [text name="variable_34" memo="EKG"][/conditional][conditional field="variable_33" condition="(variable_33).is('amiodarone')"]
PFT: [text name="variable_35" memo="PFT"][/conditional][conditional field="variable_33" condition="(variable_33).is('atypical antipsychotics')||(variable_33).is('amiodarone')||(variable_33).is('methotrexate')"]
Chest Xray: [text name="variable_36" memo="chest xray"][/conditional][conditional field="variable_33" condition="(variable_33).is('atypical antipsychotics')||(variable_33).is('amiodarone')||(variable_33).is('hydroxychloroquine')||(variable_33).is('carbamazepine')"]
Optometry: [text name="variable_37" memo="optometry"][/conditional][conditional field="variable_33" condition="(variable_33).is('atypical antipsychotics')||(variable_33).is('amiodarone')||(variable_33).is('carbamazepine')||(variable_33).is('hydroxychloroquine')||(variable_33).is('levetiracetam')||(variable_33).is('methotrexate')||(variable_33).is('oxcarbazepine')||(variable_33).is('levetiracetam')||(variable_33).is('phenytoin')||(variable_33).is('levetiracetam')||(variable_33).is('pregabalin')||(variable_33).is('valproic acid')||(variable_33).is('lithium')"]
CBC: [text name="variable_38" memo="CBC"][/conditional][conditional field="variable_33" condition="(variable_33).is('phenytoin')"]
PT/PTT: [text name="variable_39" memo="PT/PTT"][/conditional][conditional field="variable_33" condition="(variable_33).is('digoxin')||(variable_33).is('gabapentin')||(variable_33).is('oxcarbazepine')||(variable_33).is('topiramate')||(variable_33).is('lithium')"]
BMP: [text name="variable_40" memo="BMP"][/conditional][conditional field="variable_33" condition="(variable_33).is('digoxin')||(variable_33).is('gabapentin')||(variable_33).is('oxcarbazepine')||(variable_33).is('topiramate')"]
CMP: [text name="variable_41" memo="CMP"][/conditional][conditional field="variable_33" condition="(variable_33).is('digoxin')"]
Magnesium: [text name="variable_42" memo="Magnesium"][/conditional][conditional field="variable_33" condition="(variable_33).is('digoxin')||(variable_33).is('lithium')"]
Calcium: [text name="variable_43" memo="Calcium"][/conditional][conditional field="variable_33" condition="(variable_33).is('atypical antipsychotics')||(variable_33).is('carbamazepine')"]
Lipids: [text name="variable_44" memo="Lipids"][/conditional][conditional field="variable_33" condition="(variable_33).is('atypical antipsychotics')"]
HgbA1c: [text name="variable_45" memo="HgbA1c"][/conditional][conditional field="variable_33" condition="(variable_33).is('amiodarone')||(variable_33).is('carbamazepine')||(variable_33).is('oxcarbazepine')"]
TSH: [text name="variable_46" memo="TSH"][/conditional][conditional field="variable_33" condition="(variable_33).is('phenytoin')"]
Vitamin D: [text name="variable_47" memo="Vitamin D"][/conditional][conditional field="variable_33" condition="(variable_33).is('lithium')||(variable_33).is('phenytoin')||(variable_33).is('valproic acid')||(variable_33).is('carbamazepine')"]
Serum Levels: [text name="variable_48" memo="Serum Levels"][/conditional]
