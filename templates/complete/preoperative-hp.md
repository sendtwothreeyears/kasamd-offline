# Preoperative H&P

**Category:** Complete Note
**Source:** https://www.soapnote.org/complete/preoperative-hp/

---

S.

H&P: surgery details, anesthesia brief, significant PMH, short ROS, covid s/sx.
[text name="handp_1"]

PMH
[text name="pmh_1"] 

PSH:
[text name="psh_1"]

Allergies:
[text name="allergies_1"] 

Advance Directives, HCP:
[text name="advancehcp_1"]

Medications:
*** 

Social Hx: 
Address: [text name="address_1"] 
Transportation: [text name="transportation_"]
Tobacco: [text name="tobacco"]
Recreational: [text name="recreational_1"]

AUDIT-C:
[select name="Q1" value="(0) Never (Skip to Questions 9-10)=0|(1) Monthly or less=1|(2) 2 to 4 times a month=2|(3) 2 to 3 times a week=3|(4) 4 or more times a week=4"] <-- 1. How often do you have a drink containing alcohol?
[select name="Q2" value="(0) 1 or 2=0|(1) 3 or 4=1|(2) 5 or 6=2|(3) 7, 8, or 9=3|(4) 10 or more=4"] <-- 2. How many drinks containing alcohol do you have on a typical day when you are drinking?
[select name="Q3" value="(0) Never=0|(1) Less than monthly=1|(2) Monthly=2|(3) Weekly=3|(4) Daily or almost daily=4"] <-- 3. How often do you have six or more drinks on one occasion?
[select name="Q4" value="(0) Never=0|(1) Less than monthly=1|(2) Monthly=2|(3) Weekly=3|(4) Daily or almost daily=4"] <-- 4. How often during the last year have you found that you were not able to stop drinking once you had started?
[select name="Q5" value="(0) Never=0|(1) Less than monthly=1|(2) Monthly=2|(3) Weekly=3|(4) Daily or almost daily=4"] <-- 5. How often during the last year have you failed to do what was normally expected from you because of drinking?
[select name="Q6" value="(0) Never=0|(1) Less than monthly=1|(2) Monthly=2|(3) Weekly=3|(4) Daily or almost daily=4"] <-- 6. How often during the last year have you been unable to remember what happened the night before because you had been drinking?
[select name="Q7" value="(0) Never=0|(1) Less than monthly=1|(2) Monthly=2|(3) Weekly=3|(4) Daily or almost daily=4"] <-- 7. How often during the last year have you needed an alcoholic drink first thing in the morning to get yourself going after a night of heavy drinking?
[select name="Q8" value="(0) Never=0|(1) Less than monthly=1|(2) Monthly=2|(3) Weekly=3|(4) Daily or almost daily=4"] <-- 8. How often during the last year have you had a feeling of guilt or remorse after drinking?
[select name="Q9" value="(0) No=0|(2) Yes, but not in the last year=2|(4) Yes, during the last year=4"] <-- 9. Have you or someone else been injured as a result of your drinking?
[select name="Q10" value="(0) No=0|(2) Yes, but not in the last year=2|(4) Yes, during the last year=4"] <-- 10. Has a relative, friend, doctor, or another health professional expressed concern about your drinking or suggested you cut down?
A total score of 8 or more indicates harmful drinking behavior.
Total Score --> [calc memo="number" value="score1=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7)+(Q8)+(Q9)+(Q10)"]
Interpretation --> [calc memo="result" value="score2=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7)+(Q8)+(Q9)+(Q10);score2>7?'Harmful drinking behavior':'Negative screen'"]

Family Hx:
Mother: [text name="mother_hx"]
Maternal grandparents: [text name="maternal_grandparents_hx"]
Father: [text name="father_hx"]
Paternal grandparents: [text name="paternal_grandparents_hx"]
Children: [text name="children_hx"]

Review of Systems:
Gen: Denies fever/chills, fatigue.
HEENT: Denies any changes in vision/hearing, no sore throat/hoarseness
CV: Denies chest pain, dyspnea, palpitations, edema.
Pulmonary: Denies cough, hemoptysis, wheezes, SOB.
GI: Denies anorexia, N/V/D, abdominal pain, constipation, heartburn.
GU: Denies urinary symptoms at this time.
MS: Denies Decreased ROM, arthralgias, swelling, pain
Neuro: Denies weakness, numbness, HAs, seizures, dizziness/vertigo.
Skin: Denies rashes, erythema, skin breakdown, itching.

Risk Assessment:
Family or Personal History of prolonged bleeding or unusual bruising after:
Surgical Procedure: [select name="surgeryrisk_1" value="no|yes"]
Procedure: [select name="surgeryrisk_2" value="no|yes"]
Dental Extractions: [select name="surgeryrisk_3" value="no|yes"]
Shaving: [select name="surgeryrisk_3" value="no|yes"]
Tooth brushing: [select name="surgeryrisk_4" value="no|yes"]
Trauma: [select name="surgeryrisk_5" value="no|yes"]
History of Blood Transfusion: [select name="surgeryrisk_6" value="no|yes"]
Transfusion during or after a surgical procedure: [select name="surgeryrisk_7" value="no|yes"]
History of a problem with or reaction to a blood transfusion: [select name="surgeryrisk_8" value="no|yes"]
Currently or recently taking Medications, Vitamins or Over the Counter
medications that would cause prolonged bleeding: [select name="surgeryrisk_9" value="no|yes"]

Functional (METS):
Functional capacity is often expressed in terms of metabolic equivalents (METS), where 1 MET is the resting or basal oxygen consumption of a 40–year-old, 70-kg man. Functional capacity is classified as excellent (>10 METS), good (7 METs to 10 METS), moderate (4 METs to 6 METS), poor (<4 METS), or unknown. Perioperative cardiac and long-term risks are increased in patients unable to perform 4 METs of work during daily activities.

Which of these can you do?
[checkbox name="Q1" value="Bicycling at a pace of 11 mph (6 METS)=1|Bowling (4 METS)=1|Dance, Slow Step (4 METS)=1|Dance, Square Dancing (5 METS)=1|Dance, Fast Step (Aerobic) (6 METS)=1|Exercise Equipment - Elliptical trainer, moderate effort (5 METS)=1|Exercise Equipment - Exercise bike bicycling, moderate to vigorous effort (6.8 METS)=1|Exercise Equipment - Exercise bike bicycling, spin class (8.5 METS)=1|Exercise Equipment - Rowing machine, moderate effort (4.8 METS)=1|Exercise Equipment - Ski machine (6.8 METS)=1|Fishing from river bank and walking (4 METS)=1|Golf without a cart, walking (4 METS)=1|Housework, perform *heavy* work around the house (4.3 METS)=1|Hunting deer, elk, large game (6 METS)=1|Jumping rope (12.3 METS)=1|Playing Sports - Baseball (5 METS)=1|Playing Sports - Basketball (6.5 METS)=1|Playing Sports - Football (touch or flag) (4 METS)=1|Playing Sports - Softball (5 METS)=1|Playing Sports - Tennis Singles (5 METS)=1|Playing Sports - Volleyball (4 METS)=1|Running/Jogging at 5 mph (8.7 METS)=1|Have sexual relations? (2.8 to 5.25 METS)=1|Shoveling (5 METS)=1|Skating at 10 MPH (5 METS)=1|Skiing, downhill snowskiing (8 METS)=1|Skiing, waterskiing (6 METS)=1|Swimming at 0.25 mph (4 METS)=1|Walk on level ground at 4 mph (4 METS)=1"]
Total --> [calc memo="number of activities" value="score=(Q1)"] activities which require at least moderate (4 to 6 METS) functional capacity.

O.

Vitals
***

PE:
General: well developed, alert, cooperative, NAD.
HEENT: head normocephalic; eyes PEERL, EOMI; ears hearing intact; nose nares
patent, intact; throat
Neuro: CN 2-12 grossly intact, non-focal.
Cardiac: RRR, S1, S2, no S3 or murmurs; no peripheral edema.
Respiratory: CTAB, NWOB.
Musculoskeletal: spine aligned, ROM intact for spine and extremities, no joint
erythema or tenderness, normal muscular involvement, normal gait.
Back: normal lumbar lordosis, symmetrical spinal muscles, straight, without
tenderness, decreased ROM, or muscular spasm.
Extremities: no significant deformity or joint abnormalities, no edema,
peripheral pulses present.
Lower Extremities: both feet and toes normal in size and symmetry, full ROM,
sensation intact, capillary refill < 2 seconds.
Skin: skin normal color, clean, dry, intact. 

EKG:
***

Labs (CBCD, chems, LFTs, UA; if applicable):
*** 

Consults (cardiology, anesthesia, vascular):
***

A/P:

Recommendations, Follow-up:
***

IMED CONSENT: completed - [text name="consent_date"]
COAG: Patient will hold NSAIDS, supplements 5 days  prior to procedure.
NPO: NPO after midnight, clear liquid -2 hrs before arrival time.
MEDs: On morning of surgery, will take morning meds with sip water.
- Diabetic
- Anticoagulation
Pain MEDS: Per surgery team.
ALLERGY: Deny allergy to medications, latex or IV dye.
ABX: Ancef 2 g on call.
COVID testing and self quarantine: [text name="covidtest"]
Best contact #: [text name="best_contact_x"]
 
- No contraindication to planned surgery is apparent vs await further information/consult prior to planned surgery 
- E-anesthesia consult ordered.
- Patient had the opportunity to ask questions, all questions were answered in clinic and reinforced in pre-op. 
- Discuss s/sx of infection, bleeding, pain, abnormal changes that patient need to notify surgery team post-operative. 
- COVID testing Pt informed and agrees if more than 72 hours from testing to day of surgery. Pt must self-quarantine. Pt will not go out until day of surgery. 
All visitors to home must be masked and visit no more than 15 minutes. Pt will call surgery team if any signs or symptoms of COVID. 
- Upon discharge, patient will need to make sure that there is a follow-up appointment if needed. 
- Post-op/follow-up appointment will be schedule by surgery team.
