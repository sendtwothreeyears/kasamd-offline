# FreeState – Consult Note

**Category:** Complete Note
**Source:** https://www.soapnote.org/complete/freestate-consult-note/

---

Status Post: [text size="50"]

HISTORY OF PRESENT ILLNESS
*******************************************************************************
Patient is a [text size="3" ]-year-old [select value="male|female"] that is being seen as a consult at the request of [select value="general surgery.|orthopedics.|cardiology."] Hospitalist team is consulted for assistance with med management post procedure. 
[checkbox name="variable_567" value="Surgery without complications|patient tolerated anesthesia|no significant change in VS during recovery|patient did have a nerve block per anesthesia which has been controlling postop pain"]. [textarea name="hpi" default=""] 

[comment memo="PREOP LABS AND DIAGNOSTICS"][checkbox name="Problem1" value="Preop vital signs, imaging, labs, and administered medications reviewed."]

[comment memo="ED IMAGING"][checkbox name="Problem800" value="Preop Imaging: 
No imaging collected Preop."][checkbox name="Problem801" value="Chest X-Ray:"] [conditional field="Problem801" condition="(Problem801).is('Chest X-Ray:')"][checkbox value="no acute abnormalities|infiltrate indicative of PNA|pleural effusion|cardiomegaly|pulmonary edema/overload"]. 
 [textarea name="cxr" default=""][/conditional] 
[checkbox name="Problem802" value="CT Head:"] [conditional field="Problem802" condition="(Problem802).is('CT Head:')"][checkbox value="no acute abnormalities|abnormal findings per radiology"]. [textarea name="cthead" default=""][/conditional]
[comment memo="PREOP LABS"] 
[checkbox name="Problem803" value="Preop Labs: 
No labs collected Preop."]
[checkbox name="Problem804" value="CBC:"] [conditional field="Problem804" condition="(Problem804).is('CBC:')"][checkbox value="is unremarkable|shows leukocytosis|with anemia|low platelets|with bandemia|is at patients baseline"].  [textarea name="cbc" default=""][/conditional] 
[checkbox name="Problem805" value="Chemistry:"] [conditional field="Problem805" condition="(Problem805).is('Chemistry:')"][checkbox value="unremarkable|hypoglycemia|hyperglycemia|hyponatremia|hypernatremia|hypokalemia|hyperkalemia|HAGMA|elevated BUN|elevated Cr|transaminitis|hypomagnesmia"]. [textarea name="cmp" default=""][/conditional] 
[checkbox name="Problem806" value="UA:"] [conditional field="Problem806" condition="(Problem806).is('UA:')"][checkbox value="negative preg|positive preg|without s/s of infection|positive leukocytes|positive nitrates|positive protein|positive glucose|positive ketones|+ THC|+ meth|+ opiates|+ benzos"]. [textarea name="ua" default=""][/conditional] 
[checkbox name="Problem807" value="Troponin:"] [conditional field="Problem807" condition="(Problem807).is('Troponin:')"][checkbox value="negative|elevated"]. [textarea name="trop" default=""][/conditional] 

[comment memo="EKG"][checkbox name="Problem11" value="EKG"] [conditional field="Problem11" condition="(Problem11).is('EKG')"][select name="EKG" value="reviewed-"] [conditional field="EKG" condition="(EKG).is('reviewed-')"][checkbox value="normal sinus rhythm|tachycardia|bradycardia|normal axis|left axis deviation|right axis deviation|PR interval normal|QRS complex normal|No relevant ST segment deviation/elevation in contiguous leads|QT interval not prolonged"]. [text size="80"][/conditional]

PATIENT HISTORY
*******************************************************************************
PMHx: [checkbox name="variable_2" value="No PMHx"]
[checkbox name="variable_1" value="Atrial fibrillation|Alcohol Abuse|Allergic Rhinitis|Anxiety|Asthma|CAD|CHF|Chronic pain|COPD|Dementia|Depression|DM|GERD|HLD|HTN|Hypothyroidism|Insomnia|Migraines|Osteoarthritis|Seizure Disorder|Tobacco User"] [textarea]

PSHx: [checkbox value="reviewed|noncontributory"]
[textarea]

FMHx: [checkbox value="reviewed|noncontributory"]
[textarea]

Social Hx: [checkbox value="reviewed"]
Tobacco: [select name="Tobacco" value="denies/never|previous smoker|current every day smoker"][conditional field="Tobacco" condition="(Tobacco).is('previous user')"][select value="Tobacco|Vape|Chew"] - [text size="7"] [select value="pack(s)/day|can(s)/wk|recharge(s)/pod(s)/wk"] x [text size="4"]yrs, quit [text size="4"]yrs ago, denies current use[/conditional][conditional field="Tobacco" condition="(Tobacco).is('current-')"][select value="Tobacco|Vape|Chew"] - [text size="7"] [select value="pack(s)/day|can(s)/wk|recharge(s)/pod(s)/wk"] x [text size="4"]yrs[/conditional]
ETOH: [select name="EtOH" value="denies/never|previous-|current-"][conditional field="EtOH" condition="(EtOH).is('current-')"][text size="3"] [select value="cans of beer|glasses of wine|shots of whiskey"] [select value="daily (average)|weekly (average)|on weekends only|rarely on special occasions"] for [text size="4"]yrs[/conditional][conditional field="EtOH" condition="(EtOH).is('previous-')"] quit [text size="4"] years ago, denies current use[/conditional]
Illicit Drugs: [select name="illicitdrugs" value="denies/never|previous-|current-"][conditional field="illicitdrugs" condition="(illicitdrugs).is('previous-')"][text size="50"] x [text size="4"]yrs, quit [text size="4"]yrs ago[/conditional][conditional field="Tobacco" condition="(Tobacco).is('current-')"][text size="50"] x [text size="4"]yrs[/conditional]

Living situation: [text default="" size="60"]

REVIEW OF SYSTEMS
*******************************************************************************
[checkbox name="Problem21" value="Patient denies"] [conditional field="Problem21" condition="(Problem21).is('Patient denies')"] [checkbox value="fever|chills|malaise|chest pain|palpitations|shortness of breath|cough|wheezing|abd pain|nausea|vomiting|diarrhea|constipation|vertigo|headache|confusion|blurry vision"][/conditional]

10-point review of systems is otherwise negative except as mentioned above.

[checkbox name="Problem400" value="GENERAL:"] [conditional field="Problem400" condition="(Problem400).is('GENERAL:')"] [checkbox value="Well-groomed, well-appearing patient, in no acute distress|Pediatric|Adult|Elderly|male patient|female patient|laying in bed|sitting at bedside|up in chair|well-groomed|well-appearing|chronically-ill in appearance|acutely ill in appearance|appears uncomfortable|appears in pain|toxic in appearance|in moderate distress|in no acute distress"].
[textarea name="gen" default=""][/conditional]
[checkbox name="Problem401" value="SKIN:"] [conditional field="Problem401" condition="(Problem401).is('SKIN:')"] [checkbox value="Warm, dry and intact. Color appropriate for ethnicity|Warm|Cool|Cold|dry|clammy|diaphoretic|color appropriate for ethnicity|pale"].
[textarea name="skin" default=""][/conditional]
[checkbox name="Problem402" value="HEENT:"] [conditional field="Problem402" condition="(Problem402).is('HEENT:')"] [checkbox value="Normocephalic, atraumatic|PERRL|no lymphadenopathy|trachea midline|oral os without edema or erythema|no JVD"].
[textarea name="head" default=""][/conditional]
[checkbox name="Problem403" value="RESP:"] [conditional field="Problem403" condition="(Problem403).is('RESP:')"] [checkbox value="Symmetrical with equal breath sounds. Clear to auscultation bilaterally|speaking in full sentences|diminished lung bases| wheezing|rhonchi|rales|tachypneic|nasal flaring|on RA|on supp O2 per NC|on HFNC|on mask|on BiPAP|intubated"].
[textarea name="resp" default=""][/conditional]
[checkbox name="Problem404" value="CARD:"] [conditional field="Problem404" condition="(Problem404).is('CARD:')"] [checkbox value="Regular rate and rhythm without murmurs, clicks or rubs|reg rate|reg rhythm|irregular rhythm|Grade I murmur best heard over apex|Grade II murmur best heard over apex|Grade III murmur best heard over apex|tachycardic|no significant abnormalities on telemetry|no significant abnormalities on 12-lead EKG|no BLE edema"].
[textarea name="card" default=""][/conditional]
[checkbox name="Problem405" value="GI:"] [conditional field="Problem405" condition="(Problem405).is('GI:')"] [checkbox value="Soft, non-tender and non-distended. Normal bowel sounds|soft|non-tender|non-distended|epigastric tenderness|RUQ tenderness|LUQ tenderness|RLQ tenderness|LLQ tenderness|suprapubic tenderness|right CVA tenderness|left CVA tenderness|distended|peritoneal signs present"].
[textarea name="abd" default=""][/conditional]
[checkbox name="Problem406" value="MS:"] [conditional field="Problem406" condition="(Problem406).is('MS:')"] [checkbox value="FROM to BUE|FROM to BLE|normal muscle bulk and tone|gait even and steady"].
[textarea name="ms" default=""][/conditional]
[checkbox name="Problem407" value="EXT:"] [conditional field="Problem407" condition="(Problem407).is('EXT:')"] [checkbox value="No edema to BLE, PPP, no clubbing or cyanosis|edema noted|venous stasis dermatitis to BLE|surgical extremity immobilized with sling|patient in hip precations|CMS intact to surgical extremity|surgical dressing is CDI|JP drain in place|draining sanguineous fluid|draining serous fluid|draining serosanguinous fluid|with no drainage"].
[textarea name="ext" default=""][/conditional]
[checkbox name="Problem408" value="NEURO:"] [conditional field="Problem408" condition="(Problem408).is('NEURO:')"] [checkbox value="Alert and oriented x 3, speech clear. No focal findings present|Alert|oriented to self|oriented to place|oriented to time|confusion noted|delirious|obtunded|somnolent|patient is at mental baseline|Cannot assess as pt is intubated"].
[textarea name="neuro" default=""][/conditional]
[checkbox name="Problem409" value="PSYCH:"] [conditional field="Problem409" condition="(Problem409).is('PSYCH:')"] [checkbox value="Normal mood and affect|tearful|appears anxious|physically combative|verbally combative|flat affect|denies SI|endorses SI|Cannot assess as pt is intubated"].
[textarea name="psych" default=""][/conditional]
 
ASSESSMENT
*******************************************************************************
[textarea name="assessment" default=""]

PLAN
*******************************************************************************
[checkbox name="variable_123" value="-Analgesia and antiemetics per surgery|-ADAT per surgery|-Monitor bowel and bladder|-Restart home medications|-Hold anticoagulation per surgery|-Disposition planning per surgical team"]
[textarea name="PLAN" default=""]

PROPHYLAXIS
GI- [select value="not indicated|PPI|Home med restarted"]
DVT- [select value="Early ambulation - Low Padua Score|SCDs|Lovenox|Heparin|Warfarin|NOAC|Contraindicated due to recent surgery"][textarea name="contraindicated" default=""]

Dispo: Dipso planning per surgical team. [text size="80"]

[checkbox name="Problem30" value="Consult exam and plan completed by NP/PA."][conditional field="Problem30" condition="(Problem30).is('Consult exam and plan completed by NP/PA.')"] Plan discussed with attending physician [checkbox value="Elisha Yaghmai, MD|Hannah Bingham, MD|Aaron Olson, MD|Kristen Cline, MD|Manish Shah, MD"] who agrees with plan.
