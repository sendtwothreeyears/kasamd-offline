# FMC H&P Final

**Category:** Complete Note
**Source:** https://www.soapnote.org/complete/fmc-hp-final/

---

First Name: [text name="variable_1" default=" "]
Last Name: [text name="variable_2" default=" "]
DOB: [date name="variable_2" default=""]
Gender: [select name="variable_3" value="|Male|Female|Other"]


SUBJECTIVE
CC: [textarea name="variable_4" default=""]

HPI: [comment memo="Turn this entire HPI into 3 separate paragraphs:1. What happened, 2. PT statement, 3. ED course. "]
[text name=""] is a [text name="variable_8" default=""] year old [select name="variable_9" value="|M|F|Other"] with a PMH of [text name="variable_10" default=""] who presents to the [select name="variable_11" value="|ED|office"] for a chief complaint of [textarea name="variable_12" default=" Problem 1 Location: Quality: Severity: Timeframe: Time during day: Lasts for: Improves/worsens with: Associated with: "]

[comment memo="Other problems:"]
[checkbox name="variable_191" value="Problem 2|Problem 3|Problem 4"]
[conditional field="variable_191" condition="(variable_191).is('Problem 2')"] 
PT's [text name="variable_14" default="Problem 2"] is located in [text name="variable_15" default="LOCATION"]. It is [text name="variable_16" default="sharp/dull"] in quality & is rated a [text name="variable_17" default="#/10"] in severity. It has been present for the last [text name="variable_18" default="TIMEFRAME"] and occurs [text name="variable_19" default="TIMING (in morning/randomly)"], usually [text name="variable_20" default="context ex: after meals"]. When it does come on, it lasts approximately [text name="variable_99" default="TIMEFRAME (# min)"]. [text name="variable_21" default="Nothing"] makes it better or worse. It is associated with [text name="variable_22" default="other signs/symptoms"].
[remark]Other[/remark][textarea name="variable_23" default="Location: Quality: Severity: Timeframe: Time during day: Lasts for: Improves/worsens with: Associated with: "][/conditional]
[conditional field="variable_191" condition="(variable_191).is('Problem 3')"] 
PT's [text name="variable_14" default="Problem 3"] is located in [text name="variable_15" default="LOCATION"]. It is [text name="variable_16" default="sharp/dull"] in quality & is rated a [text name="variable_17" default="#/10"] in severity. It has been present for the last [text name="variable_18" default="TIMEFRAME"] and occurs [text name="variable_19" default="TIMING (in morning/randomly)"], usually [text name="variable_20" default="context ex: after meals"]. When it does come on, it lasts approximately [text name="variable_99" default="TIMEFRAME (# min)"]. [text name="variable_21" default="Nothing"] makes it better or worse. It is associated with [text name="variable_22" default="other signs/symptoms"].
[remark]Other[/remark][textarea name="variable_23" default="Location: Quality: Severity: Timeframe: Time during day: Lasts for: Improves/worsens with: Associated with: "][/conditional]
[conditional field="variable_191" condition="(variable_191).is('Problem 4')"] 
PT's [text name="variable_14" default="Problem 4"] is located in [text name="variable_15" default="LOCATION"]. It is [text name="variable_16" default="sharp/dull"] in quality & is rated a [text name="variable_17" default="#/10"] in severity. It has been present for the last [text name="variable_18" default="TIMEFRAME"] and occurs [text name="variable_19" default="TIMING (in morning/randomly)"], usually [text name="variable_20" default="context ex: after meals"]. When it does come on, it lasts approximately [text name="variable_99" default="TIMEFRAME (# min)"]. [text name="variable_21" default="Nothing"] makes it better or worse. It is associated with [text name="variable_22" default="other signs/symptoms"].
[remark]Other[/remark][textarea name="variable_23" default="Location: Quality: Severity: Timeframe: Time during day: Lasts for: Improves/worsens with: Associated with: "][/conditional]

Problem List/PMH
[textarea name="variable_100" default="Acute Problems: Chronic Problems: "]
Procedure/Surgical Hx 
[textarea name="variable_102" default=""]

[checkbox name="variable_1419" value="PT Baseline"]
[conditional field="variable_1419" condition="(variable_1419).is('PT Baseline')"]
At baseline, PT ambulates with [text name="variable_96" default=""], requires [text name="variable_95" default=""] O2 to breathe, and can [select name="variable_67" value=" perform|perform some|not perform|"] ADLs such as [text name="variable_1" default="hygiene and chores"].
[textarea name="variable_45" default=" Of note.... "]
[/conditional]
[checkbox name="variable_01" value="Sexual Hx"]
[conditional field="variable_01" condition="(variable_01).is('Sexual Hx')"]
Current Activity: [select name="variable_010" value="|Sexually Active|Not Sexually Active|Virgin"]
# of Partners: [text name="variable_011" default=" "]
Gender of partners: [select name="variable_012" value="|M|F|Both"]
Birth control: [text name="variable_013" default=""]
Hx of STDs? Which? [textarea name="variable_014" default=" "]
Interest in STD testing? [select name="variable_015" value="|Y, full|Y, partial|N"] [comment memo="Blood work: Syphillis, HIV, Herpes. Urine: trichomonas, gonorrhea "][/conditional]
[checkbox name="variable_02" value="Female PHx"]
[conditional field="variable_02" condition="(variable_02).is('Female PHx')"]
LMP:[select name="variable_03" value="|less than 30 Days ago|more than 30 days ago|None D/t IUD|None D/t Post Menopausal|None D/t Lactational Amenorrhea"]
-Birth Control Method: [text name="variable_04" default=" "]
-Last Pap [text name="variable_05" default=""] years ago. Results: [select value="|Cytology negative|ASCUS|LSIL|HSIL"] & [select value="|-|+"] HPV; with [select value="|-|+"] Hx of abnormal Pap: [text name="variable_06" default=""]
-Last Mammogram [text name="variable_07" default=""] years ago. Results: [select value="|BI-RADS 0|BI-RADS 1|BI-RADS 2|BI-RADS 3|BI-RADS 4|BI-RADS 5|BI-RADS 6"]; with [select value="|-|+"] Hx of abnormal Mamogram[text name="variable_08" default=""]
[/conditional]

Medical Reconciliation
Current Home Medications: 
[textarea name="variable_128" default="drug, # mg = # tab/cap, oral/subQ, daily/BID/evening"]
[checkbox name="variable_129" value="Not Taking"]
[conditional field="variable_129" condition="(variable_129).is('Not Taking')"]
[textarea name="variable_129" default="+Reason why not taking"][/conditional]

Allergies: [select name="variable_1999" value="No Known Allergies|Present"]
[conditional field="variable_1999" condition="(variable_1999).is('Present')"]
[textarea name="variable_119" default="Allergy, Reaction"]
[/conditional]


Social Hx
[select name="variable_300" value="Currently works in|Retired. Worked|Student|Unemployed"] in [text name="variable_301" default="career"].

Smoking Status: [select name="variable_1319" value="Never used|Former smoker|Admits to current use"]
[conditional field="variable_1319" condition="(variable_1319).is('Admits to current use')"]Reports smoking [text name="variable_104" default="#"] packs per day for the last [text name="variable_106" default=""] year(s). Pack years:[calc value="score1=(variable_104)*(variable_106)"][/conditional][conditional field="variable_1319" condition="(variable_1319).is('Former smoker')"]
Stopped on [date name="variable_107" default=""] 
When they did smoke, they report smoking [text name="variable_130" default="#"] packs per day for the last [text name="variable_131" default="#"] year(s).Pack years:[calc value="score1=(variable_130)*(variable_131)"][/conditional]
Alcohol Status: [select name="variable_1320" value="Never used|Former user|Admits to current use"]
[conditional field="variable_1320" condition="(variable_1320).is('Admits to current use')"]Reports drinking:[text name="variable_208" default="#"] shots per [text name="variable_209" default="day/week/month"][/conditional][conditional field="variable_1320" condition="(variable_1320).is('Former user')"]
Stopped on [date name="variable_120" default=""] 
When they did drink, they report drinking: [text name="variable_133" default="#"] shots per [select name="variable_134" value="day|week|month"].[/conditional]
Illicit Drug Use: [select name="variable_1321" value="Never used|Former user|Admits to current use"][conditional field="variable_1321" condition="(variable_1321).is('Former user')"]
Stopped on [date name="variable_120" default=""]
Reports previous use of: [checkbox name="variable_112" value="Benzodiazepine use|Opiate use|Cocaine use|MDMA use|PCP use|LSD use|Marijuana use|Barbituate use|Nicotine use|Amphetamine use"][link url="https://www.soapnote.org" memo="SOAPnote Home"][textarea name="variable_113" default="Quantify amount, # of years."][/conditional][conditional field="variable_1321" condition="(variable_1321).is('Admits to current use')"]
Reports current use of: [checkbox name="variable_112" value="Benzodiazepine use|Opiate use|Cocaine use|MDMA use|PCP use|LSD use|Marijuana use|Barbituate use|Nicotine use|Amphetamine use"]
[textarea name="variable_113" default="Quantify amount, # of years."][/conditional]


Family History 
Mother: [select name="variable_114" value="Alive|Deceased|Unknown"] [text name="variable_115" default="Age"] yo, [text name="variable_135" default="Health"]
Father: [select name="variable_116" value="Alive|Deceased|Unknown"] [text name="variable_117" default=""] yo, [text name="variable_136" default=""]
[checkbox name="variable_1370" value="Sibling 1"][conditional field="variable_1370" condition="(variable_1370).is('Sibling 1')"][select name="variable_1391" value="Male|Female"] [select name="variable_116" value="Alive|Deceased"] [text name="variable_138" default=""]
[/conditional]
[checkbox name="variable_1470" value="Sibling 2"][conditional field="variable_1470" condition="(variable_1470).is('Sibling 2')"][select name="variable_159" value="Male|Female"] [select name="variable_899" value="Alive|Deceased"] [text name="variable_138" default=""]
[/conditional]

[textarea name="variable_141" default="PMHx on Maternal/Paternal side:"]

Contact Person: [text name="variable_941" default=""], [text name="variable_1111" default="Phone"]


[checkbox name="variable_120" value="Lab Results"][conditional field="variable_120" condition="(variable_120).is('Lab Results')"]
[textarea name="variable_1209" default="significant for..."][/conditional]

[checkbox name="variable_121" value="Diagnostic Results"][conditional field="variable_121" condition="(variable_121).is('Diagnostic Results')"]
[textarea name="variable_121" default=""]
[/conditional]



REVIEW OF SYSTEMS 

Constitutional: [checkbox name="variable_54" value="fever|chills|fatigue|weight changes"]

HEENT:[select name="variable_055" value="Normal|Expand|Not Performed"][conditional field="variable_055" condition="(variable_055).is('Normal')"][textarea name="variable_00055" default=" PT denies headaches, changes in vision, hearing problems, and congestion. "][/conditional][conditional field="variable_055" condition="(variable_055).is('Expand')"][checkbox name="variable_5512" value="headaches|changes in vision|hearing problems|congestion|dizziness|eye pain|ringing in ears|nose bleeds|discharge|sinus infections"][/conditional]
Resp:[checklist name="variable_56" value="SOB|cough|hemoptysis|Expand"][conditional field="variable_56" condition="(variable_56).is('Expand')"][checkbox name="variable_55505" value="phelgm|bronchitis|emphysema|COPD"][/conditional]
Cardio: [checklist name="variable_57" value="chest pain|palpitations|HTN|Expand"][conditional field="variable_57" condition="(variable_57).is('Expand')"][checkbox name="variable_55506" value="heart murmurs|hx of heart medications|rheumatic heart disease| high cholesterol|change in color of fingers/toes"][/conditional]
GI:[select name="variable_058" value="Normal|Expand|Not Performed"][conditional field="variable_058" condition="(variable_058).is('Normal')"][textarea name="variable_00058" default=" PT denies nausea, vomiting, diarrhea, constipation, abdominal pain, or rectal bleeding. "][/conditional][conditional field="variable_058" condition="(variable_058).is('Expand')"]
[checkbox name="variable_581" value="nausea|vomiting|diarrhea|constipation|abdominal pain|rectal bleeding|problems swallowing|heart burn|change in bowel habits|excessive burping|excessive flatus|food intolerance|hemorrhoids|yellowing of skin"][/conditional]

GU:[select name="variable_059" value="Normal|Expand|Not Performed"][conditional field="variable_059" condition="(variable_059).is('Normal')"][textarea name="variable_1" default="Denies pain on urination, blood in urine, UTIs, and having any kidney stones."][/conditional][conditional field="variable_059" condition="(variable_059).is('Expand')"][checkbox name="variable_59" value="pain/burning when you pee|blood in urine|UTI|stones|difficulty peeing|urgent need to pee|urine incontinence|dribbling|decreased stream|frequent peeing at night|stones|prostate issues"][/conditional]

MSK: [select name="variable_060" value="Normal|Expand|Not Performed"][conditional field="variable_060" condition="(variable_060).is('Normal')"][textarea name="variable_0601" default="Denies joint pain, back pain, or muscle pain."][/conditional]
[conditional field="variable_060" condition="(variable_060).is('Expand')"][checkbox name="variable_601" value="joint pain|back pain|muscle painswelling|stiffness|decreased ROM|broken bones|arthritis|gout|difficulty walking"][/conditional]
Peripheral Vasc: [select name="variable_061" value="Normal|Expand|Not Performed"][conditional field="variable_061" condition="(variable_061).is('Normal')"][textarea name="variable_1" default="Denies any swelling, leg cramps, or clots in veins."][/conditional][conditional field="variable_061" condition="(variable_061).is('Expand')"]
[checkbox name="variable_60121" value="swelling|leg cramps|clots in veins|swelling in hand|swelling in feet|varicose veins|venous stasis"][/conditional]
Skin: [select name="variable_0623" value="Normal|Not Performed"][conditional field="variable_0623" condition="(variable_0623).is('Normal')"][textarea name="variable_1" default="Denies having rashes or any other skin complaints."][/conditional]

Neurologic: [select name="variable_063" value="Normal|Expand|Not Performed"][conditional field="variable_063" condition="(variable_063).is('Normal')"][textarea name="variable_16323" default="Denies having any headaches, seizures, LOC, numbness, or tingling."][/conditional][conditional field="variable_063" condition="(variable_063).is('Expand')"][checkbox name="variable_631" value="Headaches|seizures|LOC/fainting|numbness|tingling|migraines|paralysis|weakness|muscle spasms|tremor|involuntary movement|incoordination|memory deficits"][/conditional]
Endocrine: [select name="variable_064" value="Normal|Expand|Not Performed"][conditional field="variable_064" condition="(variable_064).is('Normal')"][textarea name="variable_1" default="PT denies having any changes in third or urine production, diabetes, or unusual fatigue."][/conditional]
[conditional field="variable_064" condition="(variable_064).is('Expand')"][checkbox name="variable_6401" value="changes in thirst|changes in urine production|diabetes|unusual fatigue|abnormal growth|thyroid issues|excessive sweating|heat/cold intolerance"][/conditional]
Immunologic: [select name="variable_065" value="Normal|Not Performed"][conditional field="variable_065" condition="(variable_065).is('Normal')"][textarea name="variable_11212" default="Denies having TB, hepatisis, or any other recurrent infections."][/conditional]

Psych:[select name="variable_066" value="Normal|Expand|Not Performed"][conditional field="variable_066" condition="(variable_066).is('Normal')"][textarea name="variable_06372" default="Denies having anxiety, depression, sleep issues, past treatment with psychiatrist, or any other psychiatric diagnosis."][/conditional][conditional field="variable_066" condition="(variable_066).is('Expand')"][checkbox name="variable_120202" value="anxiety|depression|sleep issues|past treatment with psychiatrist|other psychiatric diagnosis|thoughts of suicide/self harm|thoughts of hurting others|memory issues|changes in mood|pleasure in doing things|ADD/ADHD"][/conditional]

[checkbox name="variable_071" value="Other ROS"]
[conditional field="variable_071" condition="(variable_071).is('Other ROS')"][textarea name="variable_0732" default=""][/conditional]


OBJECTIVE

Physical Exam
General Appearance: [textarea name="variable_68" default="Adult, AAOx3, well developed, well-groomed, overweight, alert & cooperative, and appears in no acute distress."]
[checkbox name="variable_001" value="Guide"][conditional field="variable_001" condition="(variable_001).is('Guide')"]
AAOx4: Who are you? Where are you? Date & Time? What just happened to you?
Age: pediatric|adult|elderly|
Grooming: well-groomed|disheveled|cachectic|appears stated age|appears older than stated age
Weight: thin|well nourished (normal)|overweight|obese|morbidly obese
AOx: alert & cooperative|frustrated|stuporoous|depressed|anxious
Health:well appearing|acutely-ill appearing|chronically-ill appearing|
or Disposition: appears comfortable|appears uncomfortable|appears in pain|in no acute distress|in mild distress|in moderate distress|in severe distress|toxic in appearance"][/conditional]

Neuro: [select name="variable_7201" value="Not performed|Normal|Expand"]
[conditional field="variable_7201" condition="(variable_7201).is('Normal')"]
[textarea name="variable_72" default="CN II-XII intact. Strength and sensation symmetric and intact throughout. Reflexes 2+ throughout. Cerebellar testing normal."][/conditional]
[conditional field="variable_7201" condition="(variable_7201).is('Expand')"]
[checkbox name="variable_73" value="Normal motor function w/ muscle strength 5/5 BL on UE and LE|Sensation intact B/L|Memory grossly intact|No gait abnormalities observed|Neuro exam not performed. "]
Head: [select name="variable_7202" value="Not performed|Normal|Expand"]
[conditional field="variable_7202" condition="(variable_7202).is('Normal')"]
[checkbox name="variable_74" value=" Normocephalic and atraumatic|w/o tenderness/visible/palpable masses| Hair of normal texture & distribution"]
Eyes: [select name="variable_7205" value="Not performed|Normal|Expand"]
[conditional field="variable_7205" condition="(variable_7205).is('Normal')"]
[checkbox name="variable_75" value="Conjuctiva are clear w/o exudates or hemorrhage|Sclera is non-icteric|EOM intact|PERRLA"]
Ears:[select name="variable_7206" value="Not performed|Normal|Expand"]
[conditional field="variable_7206" condition="(variable_7206).is('Normal')"]
[checkboxame="variable_76" value="B/L external ear canals NT and w/o swelling|Hearing grossly intact|Difficulty Hearing|Hearing aide present"]
Nose:[select name="variable_7207" value="Not performed|Normal|Expand"]
[conditional field="variable_7207" condition="(variable_7207).is('Normal')"]
[checkbox name="variable_77" value="Nasal mucosa is pink and moist|Nares patent B/L |No nasal discharge|Clear nasal discharge|Purulent nasal discharge"]
Throat: [select name="variable_7208" value="Not performed|Normal|Expand"]
[conditional field="variable_7208" condition="(variable_72018).is('Normal')"]
[checkbox name="variable_78" value="Oral mucosa is pink and moist|No inflammation, swelling, exudate, or lesions noted|Good dentition|Poor dentition|Dentures present|HEENT exam not performed"]
Neck: [select name="variable_7209" value="Not performed|Normal|Expand"]
[conditional field="variable_7209" condition="(variable_7209).is('Normal')"]
[checkbox name="variable_79" value="Supple, NT, w/o lymphadenopathy, masses, or thyromegaly|Trachea is midline|THyroid gland is normal w/o any palpable masses|Carotid pulse 2+ B/L w/o bruit|No JVD"]
Cardio:[select name="variable_7280" value="Not performed|Normal|Expand"]
[conditional field="variable_7280" condition="(variable_7280).is('Normal')"]
[textarea name="variable_80" default="Normal S1 and S2. No S3, S4 or murmurs. Rhythm is regular. There is no peripheral edema, cyanosis or pallor. Extremities are warm and well perfused. Capillary refill is less than 2 seconds. No carotid bruits."]
HR: [select name="variable_81" value="Normal|Tachycardia|Bradycardia"]
Rhythm: [select name="variable_82" value="Regular|Irregular|Irregularly irregular rhythm"]
Extra Heart sounds: [checklist name="variable_83" value="+murmur|+gallop/rub|other heart sound"] 
Respiratory:
[textarea name="variable_84" default="Clear to auscultation and percussion without rales, rhonchi, wheezing or diminished breath sounds."]

GI: [select name="variable_7285" value="Not performed|Normal|Expand"]
[conditional field="variable_7285" condition="(variable_7285).is('Normal')"]
[textarea name="variable_85" default="Positive bowel sounds. Soft, nondistended, nontender. No guarding or rebound. No masses."]
[checkbox name="variable_86" value="GI exam not performed."]
Integumentary:
[textarea name="variable_87" default="Skin normal color, texture and turgor with no lesions or eruptions."]
[checkbox name="variable_88" value="Skin exam not performed."]
MSK: 
[textarea name="variable_89" default=": Adequately aligned spine. ROM intact spine and extremities. No joint erythema or tenderness. Normal muscular development. Normal gait."]
[checkbox name="variable_90" value="MSK exam not performed."]
Extremities: 
[textarea name="variable_91" default="No significant deformity or joint abnormality. No edema. Peripheral pulses intact. No varicosities."]
[checkbox name="variable_92" value="Extremity exam not performed."]
Psych:
[textarea name="variable_93" default="Patient is oriented to person, place, and time. The patient was able to demonstrate good judgement and reason, without hallucinations, abnormal affect or abnormal behaviors during the examination. Patient is not suicidal."]
[checkbox name="variable_94" value="Psych exam not performed."]

GU MALE 
Genital:
[textarea name="variable_95" default="Genital exam revealed normally developed male genitalia. No scrotal mass or tenderness, no hernias or inquinal lymphadenopathy. No perineal or perianal abnormalities are seen. No genital lesions or urethral discharge."]
Rectal:
[textarea name="variable_96" default="Good sphincter tone with no anal, perineal or rectal lesions. Prostate is not tender, enlarged, boggy, or nodular."]
[checkbox name="variable_1" value="Male GU exam not performed."]

GU FEMALE: 
Breasts:
[textarea name="variable_97" default="No masses, tenderness, asymmetry, nipple discharge or axillary lymphadenopathy. "]
Pelvic:
[textarea name="variable_98" default="Normally developed external female genitalia with no external lesions or eruptions. Vagina and cervix have no lesions, inflammation, discharge or tenderness. Cervix is nontender. Uterus is within normal limits with no adnexal fullness."]
[checkbox name="variable_99" value="Female GU exam not performed."]


ASSESSMENT/PLAN

#[comment memo="Problem 1"][text name="variable_122" default=""]
DDx:[textarea name="variable_600" default="List of differential diagnoses"]
POA: [textarea name="variable_601" default="Point of Admission; any abnormal labs drawn on admission to ED"]
[textarea name="variable_602" default="Chronology of what has been done"]
Plan: [textarea name="variable_603" default="Any active interventions"]

[checkbox name="variable_1240" value="Problem 2"][conditional field="variable_1240" condition="(variable_1240).is('Problem 2')"]
[text name="variable_124" default="#"]
DDx:[textarea name="variable_604" default="List of differential diagnoses"]
POA: [textarea name="variable_605" default="Point of Admission; any abnormal labs drawn on admission to ED"]
[textarea name="variable_606" default="Chronology of what has been done"]
Plan: [textarea name="variable_607" default="Any active interventions"]
[/conditional]

[checkbox name="variable_1269" value="Problem 3"][conditional field="variable_1269" condition="(variable_1269).is('Problem 3')"]
[text name="variable_126" default="#"]
DDx:[textarea name="variable_608" default="List of differential diagnoses"]
POA:[textarea name="variable_609" default="Point of Admission; any abnormal labs drawn on admission to ED"]
[textarea name="variable_610" default="Chronology of what has been done"]
Plan:[textarea name="variable_611" default="Any active interventions"]
[/conditional]

[checkbox name="variable_2269" value="Problem 4"][conditional field="variable_2269" condition="(variable_2269).is('Problem 4')"][text name="variable_1126" default="#"]
DDx:[textarea name="variable_1608" default="List of differential diagnoses"]
POA:[textarea name="variable_1609" default="Point of Admission; any abnormal labs drawn on admission to ED"]
[textarea name="variable_1610" default="Chronology of what has been done"]
Plan:[textarea name="variable_1611" default="Any active interventions"]
[/conditional]


[comment memo="Pre-visit Course"]
Patient is a [text name="variable_800" default="#"]yo [select name="variable_801" value="|M|F"] with PMHx of [text name="variable_802" default=""] who presents with cc of [text name="variable_803" default=""]. PT was sent to the ED by [textarea name="variable_804" default=""].  PT reports  [textarea name="variable_"805 default="PT complaints + ROS findings"]. On exam, PT presents with [textarea name="variable_806" default=" PE findings"]. PT is currently taking [textarea name="variable_807" default="medication A, for X condition, medication B, for Y condition..."] PT currently [select name="variable_808" value="works in|attends school| is unemployed|is retired"] and lives in [text name="variable_809" default="location"]. PT [select name="variable_900" value="does|does not"] have family in the area, and [select name="variable_901" value="does|does not"] have a PCP in town. [textarea name="variable_902" default="ADD EXTRA HERE, CONSULTS"] We will continue to monitor her vitals and [text name="variable_903" default="next steps"] in the [select name="variable_904" value="AM|PM"].

  
Authenticated by: [text name="variable_94" default="DR NAME"] on [text name="variable_90" default="DATE"][text name="variable_91" default="TIME"]
 Electronically Signed by:  [text name="variable_94" default="DR NAME"] on [text name="variable_90" default="DATE"][text name="variable_91" default="TIME"]
 Performed by:  [text name="variable_94" default="DR NAME"]



H&P for existing patient
Pt is here for annual check up.
Currently stable and doing well.

Allergies/new or additional alleriges:
None. 

Meds:
Med rec completed and has been updated.
Currently only taking Hydrocholothiazide for HTN, and flonase as needed. 
Flonase as need. 

Pmhx/Interval change in Pmhx:
None. 

Pshx/Interval change in Pshx:
Abdominal liposuction in 2022

Preventative:
Mammogram - up to date
Colonoscopy -up to date. 
DM - Overdue.
HLD - last done in 2019
Vaccinations - overdue for TDAP (last done in 2012)

Famhx/Change in Fmhx:
No change

SocHx/Change in Sochx:
Alcohol: occasional
Smoking : denies
