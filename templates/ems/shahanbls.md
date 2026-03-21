# Shahan BLS

**Category:** Emergency Medical Services
**Source:** https://www.soapnote.org/ems/shahanbls/

---

C/C:[text name="CC" default=" "]

Hx:[checkbox name="station" value="Rescue Station 1|Fire Company 1|Fire Company 2|Fire Company 3"] dispatched for [textarea name="dispatch" default=""]. 
[textarea name="ecc" default="county dispatch"] ECC reported [checkbox name="covid" value="Positive COVID-19 pre-screening|Negative COVID-19 pre-screening|Unable to determine COVID-19 pre-screening| no COVID-19 pre-screening result"].[select name="type" value="Medic|Ambulance"]-[text name="unit" default=""] arrived on scene to find the patient[textarea name="arrival" default=""].
[textarea name="hpi" default="HPI"].

The patient has a previous medical history significant for:[checkbox name="PMH" value="None|Hypertension|Diabetes|COPD|Asthma|Cancer|AFIB|CVA|TIA|Seizures|Dementia"][text name="rospmh" default=""]. The patient's normally ambulates with[checkbox name="gaithx" value="without Assistance|with a cane|with a walker|with a wheelchair"].The patient[checkbox name="COVIDhx" value="has received a COVID-19 vaccine|is not vaccinated for COVID-19"].

Ax:GENERAL:[checkbox name="pe_general_check" value="Unresponsive|NO LOC|Alert to Verbal Stimuli|Alert to Painful Stimuli"][text name="pe_general" default=" "];PSYCH: [checkbox name="ros_psych_check" value="Normal|Denies Suicidal Ideations|Denies Hommicidal Ideations|Depression|Mild Anxiety|SUICIDAL/HOMICIDAL IDEATIONS|Hallucinations|"][text name="ros_psych" default=" "];NEURO: [checkbox name="pe_neuro_check" value="Gait Normal|Gait Abmormal|SMILE NORMAL/Even|Speech Clear|Smile NOT Symmetrical|Slurred Speech"][text name="pe_neuro" default=" "];NECK: [checkbox name="pe_heent_check" value="NO Neck Pain|Neck Pain|JVD"][text name="pe_heent" default=" "];CARDIO: [checkbox name="pe_cardio_check" value="NO Chest Pain|Chest Pain|Chest Pain Desribed as Pressure| Chest Pain Described as Sharp|Hypotension|Symptomatic Bradycardia|Hypertension|Heart Racing Sensation"][text name="pe_cardio" default=" "]
EKG: [checkbox name="EKG" value="Sinus Rhythm|Sinus Bradycardia|Sinus Tachycardia; Sinus Arrhythmia|AFIB|AFIB with RVR| Supraventricular Tachycardia| First Degree AV Block|Second Degree AV Block Type I| Second Degree AV Block Type II| Third Degree AV Block|Ventricular Tachycardia|Ventricular Fibrillation|Asytole|PEA|W/PVC'S|W/PAC'S|W/PJC'S"][text name="ros_heme" default=" "] via 
[checkbox name="monitor" value="12-Lead EKG|4-Lead EKG|Defib Pads|Continuous Monitoring|Monitor Interpretation"];RESPIRATORY: [checkbox name="pe_resp_check" value="Clear Bi-Lat|Audible Wheezes|Shortness of Breath|Non-Productive Cough|Productive Cough|Ronchi Noted"][text name="pe_resp" default=" "];GI:[checkbox name="pe_gi_check" value="NO Abdominal Pain|RUQ Pain|RLQ Pain|LUQ Pain|LLQ Pain|NO Nausea/Vomiting|Nausea|Vomiting|Distention"][text name="pe_gi" default=" "];MSK: [checkbox name="pe_msk_check" value="NO Upper Extremity Pain|NO Lower Extremity Pain|NO Back Pain|PMS x4|"][text name="pe_msk" default=" "];SKIN: [checkbox name="pe_skin_check" value="Warm|Dry|Cool|Moist|Diaphoretic|Cold"][text name="pe_skin" default=" "];Gait: [checkbox name="pe_heme_check" value="Normal|Required Assistance"][text name="pe_heme" default=" "]

Rx: [checkbox name="Airway" value="Oxygen|at 2lpm via NC|at 2lpm via ETCO2 NC| at 15lpm via NRB|via CPAP at 5cm H20"];[checkbox name="advair" value="iGel|King Airway"][text name="airdet" default=""];[checkbox name="Meds" value="Aspirin 324mg PO|Zofran 4mg ODT| Albuterol 3ml NEB|Atrovent 3m|Narcan 2mg IN"]
[text name="medman" default=" "];[checkbox name="vs" value="Vital Signs Obtained|Assessment|Emotional Support Provided"]


Tx: The patient[textarea name="transax" default=""], otherwise unchanged from Assessment during transport.[checkbox name="hosint" value="VCUTH|BSRGH|VCU|MRMC"] ED contacted via [checkbox name="coms" value="HEAR Phone|COR Phone|HEAR Phone|HEAR Radio"], with [textarea name="orders" default=""]. The patient was transported [checkbox name="speed" value="non-emergent|emergent|emergent to non-emergent|non-emergent to emergent"].

Dx:The patient was transported to [checkbox name="hos" value="VCU Tappahannock Hospital|Bon Secours Rappahannock General Hospital|VCU Health Richmond|Bon Secours Memorial Regional Medical Center"]. The patient was turned over to ED staff at Bed [text name="bed" default=""] upon arrival.

[checkbox name="Medbox" value="NOTE:PEMS Medication Box Used:
PEMS Medication Box Received:
"]
