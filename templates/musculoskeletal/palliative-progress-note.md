# Palliative Progress Note

**Category:** Musculoskeletal & Rheumatology
**Source:** https://www.soapnote.org/musculoskeletal/palliative-progress-note/

---

Date of Service -[date name="date1" default="today"]
Location - [select name="loc" value="Riverside|Enclave"]

Demographics and Patient Status 
[textarea name="demo1" default=""]

History of Presenting Illness 
[comment memo="write HPI below"]
[textarea name="variable5" default=""]

A palliative consultation was requested by the patients attending physician to alleviate the burden associated with the following condition/s 

Allergies -[textarea name="allergies_1" default="No Known Allergies"]
Past Surgical History -[textarea name="Surgical1" default="See Consult Note"]

Family History -[textarea name="Family_text" default="See Consult Note"]

Social History - [textarea name="Social_1" default="See Consult Note"]

Medication - 
[select name="Med1" value="I have reviewed the patients medications|"][conditional field="Med1" condition="(Med1).is('')"][textarea name="Medtxt1" default=""][/conditional]

Advanced Care Directives - 
Health Care Proxy - [select name="HCP1" value="Yes|No"]
[conditional field="HCP1" condition="(HCP1).is('Yes')"]
[textarea name="HCPtxt1" default=""]
[comment memo="Name, Relationship to patient, Phone number"][/conditional]
[checkbox name="ACD_2" value="Living Will|Documentation of Oral Advance Directive|Durable Power of Attorney|DNR|DNI|No Feeding Tube|Do Not Hospitalize|"][conditional field="ACD_2" condition="(ACD_2).is('')"][textarea name="ACDtext1" default=""]
[comment memo="Discuss any additional information regarding ACD"][/conditional]

Change in Patient's Wishes -
[select name="Wish1" value="No|Yes"][conditional field="Wish1" condition="(Wish1).is('Yes')"]
[textarea name="ACDtext1" default=""][/conditional]

Review of Systems
[select name="ROS_1" value="This patient is able to provide appropriate answers|This patient is nonverbal/otherwise unable to assess"][conditional field="ROS_1" condition="(ROS_1).is('This patient is able to provide appropriate answers')"]
[comment memo="Default will be negative. Click if positive"]
General
[checklist name="ROS1" value="Sleep Disturbances|Fatigue|Skin Changes|Recent Falls"]
Neurological 
[checklist name="ROS2" value="Syncope|Headache|Coordination Changes|Weakness| Numbness"]
HEENT
[checklist name="ROS3" value="Vision Changes|Eye Pain|Nasal Congestion|Nasal Discharge|Hearing Changes|Pain in Ear|Dysphagia|Odynophagia"]
Cardiovascular 
[checklist name="ROS4" value="Chest Pain|Palpitations"]
Respiratory
[checklist name="ROS5" value="Dyspnea|Cough|Shortness of Breath"]
Gastrointestinal
[checklist name="ROS6" value="Nausea|Vomitting|Diarrhea|Constipation|Abdominal Pain"]
Genitourinary
[checklist name="ROS7" value="Urinary incontinence|Dysuria"]
Musculoskeletal
[checklist name="ROS8" value="Muscle Weakness|Joint pain|Joint stiffness"] 
[/conditional]

Physical Exam [comment memo="Please write in Vitals"]
Vital Signs - [textarea name="VS1" default="BP-  mmgHg T-  °F P-  beats/min R-  breaths/min"]
General - [textarea name="Pe1" default="No acute distress, Well developed, well nourished, Afebrile"]
Neurological  -  [textarea name="Pe2" default="Alert and Oriented, Normal mood and affect, Cranial Nerves II-XII grossly intact"]
HEENT  -  [textarea name="Pe3" default="Head is normocephalic, atraumatic. Bilateral pupils equal and reactive to light and accommodating.  No scleral icterus, no conjunctival pallor.  No neck masses palpated."] 
Pulmonary  -  [textarea name="Pe4" default="Respiratory effort within normal limits. No crackles. No rhales or rhonchi."]  
Cardiovascular  -  [textarea name="Pe5" default="Distal pulses 2+ in all extremeties.  Adequate perfusion. No peripheral signs of cyanosis. Regular rate and rhythm.  No murmurs auscultated."] 
Gastrointestinal  -  [textarea name="Pe6" default="Abdomen soft, nontender, nondistended. No guarding or tenderness. Bowel sounds auscultated."]
Musculoskeletal - [textarea name="Mskphys" default="No difficulty with passive ROS Strength 5/5 bilateral upper extremeties. "]

Assessment
[textarea name="Ass1" default=""]

Plan 
[textarea name="Plan1" default=""]

Total time spent 
[select name="with the patient|with the patient's family"] was approximately [text name="time_1" default="70"] minutes. Greater than 50% of the time was spent counseling, coordinating care for the patient. In addition to obtaining history, examining the patient, reviewing all pertinent diagnosis, diagnostic studies, reviewing active orders, documenting care, I have also spent a significant amount of time counseling the patient on end of life issues, answering questions and coordinating care
