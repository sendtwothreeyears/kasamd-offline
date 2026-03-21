# FINAL EMEDS FORM

**Category:** Emergency Medical Services
**Source:** https://www.soapnote.org/ems/final-emeds-form/

---

[checklist name="hx" value="HISTORY OF PRESENT ILLNESS|CARE PRIOR TO ARRIVAL|DIFFERENTIALS & RULE OUT|TRANSPORT"]
Howard County [select name="UNIT" value="Paramedic 15|Paramedic 25|Ambulance 26|Paramedic 35|Paramedic 45|Paramedic 55|Paramedic 56|Paramedic 65|Ambulance 66|Paramedic 75|Paramedic 76|Ambulance 76|Paramedic 85|Paramedic 95|Ambulance 96|Paramedic 105|Paramedic 115|Paramedic 135|Paramedic 145"] responds with a crew of [select name="STAFF" value="2|3|4"]  for [select name="DISP" value="Chest Pain|Trouble Breathing|Abdominal Pain|a Sick Person|Seizures|an Unconscious Person|an Unknown Emergency|Syncope|a Fall|Motor Vehicle Collision|Cardiac Arrest|Traumatic injuries|Overdose|Stroke|Diabetic Emergency|Cardiac Emergency|Anxiety|Behavioral Emergency"] at a [select name="SCENE" value="Residence|Physician's Office|Urgent Care|Dialysis Facility|Skilled Nursing Facility|Independent Living Facility|Retail Store|Restaurant|School|Recreational Area|Outdoor Facility|Commercial Building|Along the Roadway|Intersection|Interstate 29|Interstate 95|Route 32|Interstate 70"]. Upon arrival on scene EMS finds [textarea name="IMPRESSION" default="...general impression..."] 
[conditional field="hx" condition="(hx).is('HISTORY OF PRESENT ILLNESS')"]
HISTORY OF PRESENT ILLNESS:
[textarea name="HPI"] [/conditional]
[conditional field="hx" condition="(hx).is('CARE PRIOR TO ARRIVAL')"]
CARE PRIOR TO ARRIVAL:
[textarea name="PTA"] [/conditional]
ASSESSMENT
[checkbox memo_color="blue" memo="ADULT CAOx4" name="22" value=""][conditional field="22" condition="(22).is('')"][textarea cols=80 rows=4 default="CAOx4, GCS 15. Pt is cooperative, and appears to be in no acute distress. Stroke scale Negative. Pupils PERRL. Breathing is unlabored and Pt speaks in full sentences. Lungs clear to auscultation bilaterally. Skin is pink, warm, and dry. No pallor or cyanosis. Regular radial pulses present. No gross bleeding noted."][/conditional] [checkbox memo_color="blue" memo="FULL ADULT EXAM" name="21" value=""][conditional field="21" condition="(21).is('')"][textarea cols=80 rows=2 default="GENERAL APPEARANCE: Well developed, well nourished, alert and cooperative, and appears to be in no acute distress."]
[textarea cols=80 rows=3 default="NEURO: alert and oriented x4. GCS: 15. Cincinnati Stroke Scale negative."]
[textarea cols=80 rows=3 default="HEENT: airway is patent. Pupils: PERRL. Facial symmetry and speech pattern normal."]
[textarea cols=80 rows=3 default="NECK: atraumatic. Neck veins are flat, trachea is mid-line."]
[textarea cols=80 rows=3 default="CHEST: Respirations: unlabored, speaks in complete sentences. Lung Sounds: clear and equal bilaterally in anterior lung fields. Chest rise is equal"]
[textarea cols=80 rows=3 default="CARDIAC: ECG: Rhythm is regular. There is no peripheral edema, cyanosis or pallor. Extremities are warm and well perfused. Capillary refill is less than 2 seconds."]
[textarea cols=80 rows=3 default="LUNGS: Clear to auscultation and percussion without rales, rhonchi, wheezing or diminished breath sounds."]
[textarea cols=80 rows=4 default="ABDOMEN:
GENITOURINARY: no dysuria/frequency/blood in urine/incontinence.
GASTROINTESTINAL: no constipation/diarrhea/blood in stool/melena. Positive bowel sounds. Soft, nondistended, nontender. No guarding or rebound. No masses."]
[textarea cols=80 rows=3 default="MUSKULOSKELETAL: Adequately aligned spine. ROM intact spine and extremities. No joint erythema or tenderness. Normal muscular development. Normal gait."]
[textarea cols=80 rows=3 default="BACK: Examination of the spine reveals normal gait and posture, no spinal deformity, symmetry of spinal muscles, without tenderness, decreased range of motion or muscular spasm."]
[textarea cols=80 rows=3 default="BACK: Examination of the spine reveals normal gait and posture, no spinal deformity, symmetry of spinal muscles, without tenderness, decreased range of motion or muscular spasm."]
[textarea cols=80 rows=6 default="LOWER EXTREMITY: Examination of both feet reveals all toes to be normal in size and symmetry, normal range of motion, normal sensation with distal capillary filling of less than 2 seconds without tenderness, swelling, discoloration, nodules, weakness or deformity; examination of both ankles, knees, legs, and hips reveals normal range of motion, normal sensation without tenderness, swelling, discoloration, crepitus, weakness or deformity."]
[textarea cols=80 rows=3 default="NEUROLOGICAL: CN II-XII intact. Strength and sensation symmetric and intact throughout. Reflexes 2+ throughout. Cerebellar testing normal."]
[textarea cols=80 rows=3 default="SKIN: Skin normal color, texture and turgor with no lesions or eruptions, no rashes, bruising, nail or hair changes."]
[textarea cols=80 rows=4 default="PSYCHIATRIC: The mental examination revealed the patient was oriented to person, place, and time. The patient was able to demonstrate good judgment and reason, without hallucinations, abnormal affect or abnormal behaviors during the examination. Patient is not suicidal."] [/conditional] [checkbox memo_color="blue" memo="PEDIATRIC" name="23" value=""][conditional field="23" condition="(23).is('')"] [textarea default="General Appearance: no acute respiratory distress. Non-toxic appearing. Without barky cough or hoarse voice."]
[textarea default="Ears: bilaterally intact TMs without bulging or erythema."]
[textarea default="Throat: normal, without exudate or tonsillar hypertrophy."]
[textarea default="Lymph nodes: normal, without anterior or posterior cervical adenopathy."]
[textarea default="Heart: RR, no murmur/click, S3/S4."]
[textarea default="Lungs: clear. No nasal flaring. No intercostal retractions. No stridor. No wheezes, rhonchi, or crackles."]
[textarea default="Abdomen: normal bowel sounds, soft, nontender."]
[textarea default="Extremities: Capillary refill is normal, less than 2 seconds."]
[textarea default="Skin: Color is good, without cyanosis."][/conditional][conditional field="Q1" condition="(Q1).is('Chicken Pox')"]
[textarea default="The patient is alert, NAD. Non-toxic appearing."]
[textarea default="Eyes: PERRL, conjunctiva normal. lids are normal."]
[textarea default="Ears: canals and tympanic membranes intact and without erythema bilaterally."]
[textarea default="Oropharynx: no ulcers or vesicles. no erythema or exudate at posterior pharynx."]
[textarea default="Lungs: clear without rhonchi or wheezes."]
[textarea default="Heart: RR, normal heart sounds, no murmur."]
[textarea default="Skin: no vesicular eruption typical of varicella, no areas of impetiginization."]
[textarea default="Extremities: capillary refill less than 2 seconds."]



[/conditional]
[conditional field="hx" condition="(hx).is('DIFFERENTIALS & RULE OUT')"]
DIFFERENTIALS & RULE OUT:
[textarea name="DIFF"] [/conditional]
TREATMENT:
Unit arrives safely on scene and [checkbox name="treat_tran1" value="Pt is extricated from vehicle|Pt is spinally immobilized with a backboard and C-Collar|Pt is placed in a C-Collar|Injury is immobilzed|Pt is assisted to the lowered cot and secured with waist straps and guard rails|Pt is transferred to the lowered cot via use of a stair chair|Pt is transferred to the lowered cot via use of a reeves sleeve|Pt is secured with waist straps and guard rails|Pt is assisted to a seated position|Pt is assisted to bed|Pt is assisted off the floor|Pt is left in a supine position for further assessment|Pt is relocated to the unit and secured for transport |Pt is secured for transport in the Captain's chair"][checkbox name="treat_tran2" value="A complete set of vitals are obtained|a blood glucose is obtained|a 3-lead ECG is performed|a 12 lead ECG is performed|IV access is established with a saline lock|Pt is placed on supplemental O2 via nasal cannula|Pt is placed on supplemental O2 via NRB|Pt is administered 324mg of ASA|Pt is administered one dose of SL nitroglycerin|Pt is administered 8mg of zofran for nausea|Pt/ADM states transport to ED is not necessary|Despite best efforts Pt continues to deny transport to the ED|Pt/ADM is explained the risks associated with refusing transport and multiple attempts are made to convince the Pt/ADM to accept transport"] [checkbox memo_color="blue" memo="OTHER TREATMENT" name="33" value=""][conditional field="33" condition="(33).is('')"][textarea cols=80 rows=4 default="...Other Treatment..."][/conditional] [conditional field="hx" condition="(hx).is('TRANSPORT')"]
TRANSPORT:
Transport is initiated priority [text cols=5 rows=1 name="variable_1"] to [checkbox name="variable_1" value="Howard County General|Adventist White Oak|Laurel Regional Medical Center|Accension Saint Agnes|Baltimore Washington Medical Center|Montgomery County General Hospital|Johns Hopkins Hospital Adult|Northwest Hospital|R Adams Cowley Shock Trauma Center|University of Maryland Medical Center\Carrol Hospital Center|Frederick Memorial Hospital"] [checkbox name="variable_3" value="Vitals are monitored throughout transport|Vitals are monitored throughout transport with no change|Serial 12 lead ECGs are completed en route|A consultation is completed with the receiving facility and no orders are requested or received.|A consult is completed with the receiving facility via EMRC|a 12 lead ecg is transmitted to the receiving facility"][/conditional]
[comment memo_color="red" memo="DON'T FORGET TO CHANGE BED NUMBER"]
DISPOSITION:
[checkbox name="DISPO" value="Unit arrives at destination without incident|Pt is transferred to bed XXX in the ED where a full handoff report is provided to nursing staff at bedside|Pt is transferred to triage where a full handoff report is provided to nursing staff|Pt is unable to sign due to altered mental status|Pt is unable to sign due to distress level|Pt is unable to sign due to impairment of extremities|Pt is unable to sign due to visual impairment.|In spite of multiple attempts by myself and my partner to convince the patient/ADM to be transported to hospital for evaluation and treatment, we have unfortunately been unsuccessful. The patient/ADM has the capacity to give, receive, and withhold information and verbalizes understanding of their condition and symptoms and that refusing care could pose significant risk to their life. The patient/ADM has verbalized to me that they understand our specific treatment plan which includes transport to a hospital, and does not agree with us and understands without this treatment it may cause worsening of condition or death. The patient/ADM understands they are free to call 911 if condition worsens and they feel they wish to be transported to the emergency department for further evaluation and treatment.|Pt care is released to the RN.|Unit returns to service.|Unit Remains OOS for decon and resupply."]
