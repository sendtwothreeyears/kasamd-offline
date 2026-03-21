# CEMS

**Category:** Nursing
**Source:** https://www.soapnote.org/ems/cems/

---

S:
[checkbox name="DISPATCH" value="P1 dispatched to|P2 dispatched to"][textarea name="dispatch" default=" "]       
EMS arrived on scene, [textarea name="arrived" default=" "][checkbox name="ARRIVED" value="CFD Engine 1 on scene with patient|CFD Engine 2 on scene with patient|CFD Engine 3 on scene with patient|CFD Ladder 1 on scene with patient|CPD scene with patient"]
CC:[text name="CC" default=" "]
PMHx: [checkbox name="pmhx" value="Recorded in PCR|Unable to obtain"][textarea name="pmhx" default=" "]
MEDICATIONS: [checkbox name="meds" value="Recorded in PCR|Unable to obtain"][textarea name="medications" default=" "]
ALLERGIES: [checkbox name="allergies_check" value="NKDA|Recorded in PCR"][textarea name="allergies" default=" "]

O:
-LOC:  [checkbox name="loc" value="Alert|Oriented|Person|Place|Time|Event|Disoriented|Arousable By Verbal Stimuli|Arousable By Painful Stimuli|Unresponsive"][text name="consciousness" size = 55 default=" "]
-ABC: [checkbox name="ABC" value="Airway open and patent|Breathing adequate and unlabored|Skin pink, warm, and dry"][text name="ABC" size = 55 default=" "]
-HEENT:                            [checkbox name="Pupils" value="Pupils    PERL"] [checkbox name="pe_heent_check" value="Benign|No bleeding, No trauma to face or mouth|Bleeding|Positive halo test|Negative halo test|Dry mucous membranes|Extra salivation|Trauma to face|Trauma to mouth "][text name="pe_heent" default=" "]
-CARDIOVASCULAR: [checkbox name="pe_cardio_check" value="Peripheral pulses intact|Irregular rate|Irregular rhythm|ST elevation present|JVD present|Edema present|No peripheral pulses|Cyanosis present|Bleeding "][text name="pe_cardio" default=" "]
-RESPIRATORY: [checkbox name="pe_resp_check" value="Clear to auscultation bilaterally, adequate and unlabored|Wheezing|Rales|Rhonchi|Stridor|Upper respiratory congestion|Non-productive cough|Productive cough "][text name="pe_resp" default=" "]
-GI: [checkbox name="pe_gi_check" value="Atraumatic, abdomen soft/non-tender to palpation|Trauma present|Tender abdomen|Rigid abdomen|Distended abdomen|Guarding present|Masses present "][text name="pe_gi" default=" "]
-MSK: [checkbox name="pe_msk_check" value="Atraumatic, CSMs present in all extremities|Abnormal range of motion|Pain on palpation|Strength not present in all extremities|Unable to assess"][text name="pe_msk" default=" "]
-NEURO: [checkbox name="pe_neuro_check" value="Oriented x 4, sensation intact, smile normal, and speech not slurred|Neuro not intact|Gait abnormal|Sensation absent|No reflexes|Smile not symmetrical|Slurred speech|Unable to assess "][text name="pe_neuro" default=" "]
LAMS
[select name="Q1" value="Both    sides    move    normally     (0 points)=0|One    side    weak    or    flaccid (1 points)=1"] <-- Face
[select name="Q2" value=" Both    sides    move    normally    (0 points)=0|    One    side    is    weak (1 point)=1| One    side    is    flaccid/doesn't    move(2    points)=2"] <-- Arm   Drift
[select name="Q3" value="One    side    is    weak(1 points)=1|One    side    is    flaccid    or    doesn't    move (2 points)=2"] <-- Grip)
Score --> [calc memo="Score" value="score=(Q1)+(Q2)+(Q3)"] out of 5    points
Interpretation --> [calc memo="Interpretation" value="score=(Q1)+(Q2)+(Q3)

VITALS:
BP:[text name="pe_bp" default=" "], PULSE:[text name="pe_pulse" default=" "], RESP: [text name="Resp" default=" "], SPO2:[text name="pe_spo2" default=" "], BGL:[text name="pe_bgl" default=" "], TEMP:[text name="TEMP" default=" "]
-EKG FINDINGS: [checkbox name="EKG" value="4 Lead ECG obtained|& 12 Lead ECG obtained|Manual interpretation|Computer interpritation|STEMI|Sinus Rhythm|Paced Rhythm|Sinus Bradycardia|Sinus Tachycardia|Sinus Arrhythmia|Wandering Atrial Pacemaker|Multifocal Atrial Tachycardia|A-Fib|A-Fib w/ RVR|Supraventricular Tachycardia|Atrial Flutter|Junctional Rhythm|RBBB|LBBB|First Degree AV Block|Second Degree Type 1|Second Degree Type 2|3rd Degree Block|IVR|Accelerated IVR|V-Tach|V-Fib|Asystole|PEA|Torsades|w/ PVC's|w/ PAC's|w/ PJC's "][text name="ros_heme" default=" "]

A: [text name="assessment" default=""]

P:
[checkbox name="pe_trans_check" value="Secured patient to stretcher with 5 straps and rails upright|Loaded into ambulance for transport|Emergency|Non-emergency|Non-emergency upgraded to emergency|Patient refused transport|AMA|Transported to Miriam|Transported to Landmark|Transported to Rhode Island Hospital|Transported to Hasbro|Transported to VA, prior notice given|Transported to Roger Williams|Transported to Sturdy|per patient request|per family request|per CEMS crew member discretion as closest facility|per Med Control recommendation"][checkbox name="variable_1" value="Hospital    notified    via    Patient    Tracking    Systems|Hospital    notifed    via    Cellular"]
[checkbox name="treatment" value="Primary and secondary ALS assessment|Primary and secondary BLS assessment|Continuous cardiac monitoring "] [textarea name="rxt" default=" "]
[checkbox name="pe_rep_check" value="Verbal report to nurse|Patient belongings left with nurse|Patient belongings left with patient/family|Improvement in patient condition|Decline in patient condition|No change in patient condition "][text name="pe_rep" default=" "]
Signatures [checkbox name="SIGNATURE" value="obtained from patient|not obtained from patient|obtained from guardian/POA|obtained from receiving facility nurse"][text name="pe_SIG" default=" "]

[checkbox name="AMA" value="EMS performed an evaluation of the patient to the extent permitted. Efforts were made to encourage the patient to consent to continued EMS evaluation, treatment, and transport to the hospital for further assessment.

The patient was found to be alert and oriented to person, place, time, and event (AOx4), not under the influence of drugs or alcohol, of legal age, and able to make competent decisions. Despite persistent efforts by EMS, the patient firmly declined further evaluation, treatment, and transport against medical advice.

EMS informed the patient of the potential risks associated with refusal of care, including but not limited to, death and/or disability. The patient acknowledged understanding of these risks but maintained their decision to refuse. The patient was advised that they are free to call 911 if their condition worsens or if they decide to seek transport to the emergency department for further evaluation and treatment."]
