# Rescue PCR BLEE

**Category:** Emergency Medical Services
**Source:** https://www.soapnote.org/ems/rescue-pcr-blee/

---

S- [text name="ou" default="Rescue"] was dispatched to [text name="AGE" default="AGE IN YEARS"] year-old [select name="gender" value="male|female"] for [text name="disp" default="Call Type"]. We responded in an [select name="respmode" value="emergent|non-emergent"] manner [select name="lights" value="with lights and sirens.|without lights and sirens."] We [select name="scene" value="arrived on-scene,|were cancelled en route.|canceled on scene."] and found the patient [text name="ptfound" default=""]. [select name="variable_1" value="Patient|Parent/Gaurdian|Family"] has a chief complaint of [text name="complaint" default=""], that has been going on for [select name="time" value="10|20|30|1|2|3|4|5|6|7|8|9|"] [select name="duration" value="minutes|hours|weeks"]. The patient states [textarea name="pmh" default=""]. [select name="history" value="No past medical history was reported.|Reported medical history of"] [checkbox name="variable_1" value="COPD|CHF|HTN|chronic renal failure/ckd|diabetes|cardiac arrhythmias|cardiac condition|cardiac stent|dementia|parkinson’s disease|A-Fib|A-flutter|pacemaker|blood disorder|decubitus ulcers|obesity|anxiety|depression|arthritis|asthma|bi-polar|cancer|cardiac condition|cellulitis|hepitisis|gallbladder disease|gout|kidney stones|CVA/stroke|amputee|anemia|anoxic brain injury|autistic disorder|chronic pain|drug abuse|alcohol abuse|cirrhosis of liver|colostomy|contractures|crohn’s disease|DVT|diverticulitis|edema|seizures/epilepsy|gastric bypass surgery|history of falls|thyroid disease|infectious disease|neuropathy|osteoarthritis|pneumonia|substance abuse|tremors|vertigo"][text name="hxnotstated" default=""].   [select name="allergies" value="Patient stated no known allergies.|Patient stated allergies to"][checkbox name="allergies" value="PCN|Sulfa|peanuts|Bees|amoxicillin|aspirin|codeine|morphine|Statins|cepro|cillins"] [text name="allergiesnotlisted” default=""].[select name="ptcharge" value="Patient|Parent/Guardian|Power of Attorney"] made decision to [select name="dt" value="refuse transport because|consent to be transported."] [text name="reasonno" default=""]

O- Airway: [checkbox name="airway" value="open, maintained by patient, with no concern for compromise|open|maintained by patient|no concerns for compromise|not open|compromised|requires manual opening|requires airway adjunct|requires advanced airway"][text name="airway" size = 55 default=" "][comment memo="Any other conditions not listed"]
Breathing: [checkbox name="breathing" value="breathing spontaneously, non-labored, with a regular rate and adequate tidal volume.|tachypneic|deep|bradypneic|shallow|agonal|apneic "][text name="breathing" size = 55 default=" "][comment memo="Any other conditions not listed"]
Circulation: [checkbox name="circulation" value="normal and without concerns. |regular and normal pulse rate|tachycardic|bradycardic|weak pulse|massive hemorrhage|diminished perfusion|pulseless "][text name="circulation" size = 55 default=" "][comment memo="Any other conditions not listed"]
Level of consciousness: [checkbox name="loc" value="alert and oriented to person, place, time, and event|alert|oriented|disoriented|person|place|time|event|arousable by verbal stimuli|arousable by painful stimuli|unresponsive"][text name="consciousness" size = 55 default=" "][comment memo="Any other conditions not listed"]
Skin: [checkbox name="skin" value="pink, warm, and dry|pale, cool, and clammy|pink|warm|dry |pale|cool|clammy|diaphoretic|hot|flushed|cyanotic|lividity|jaundiced"][text name="skin" size = 55 default=" "][comment memo="Any other conditions not listed"]
Capillary Refill: [checkbox name="CapillaryRefill" value="normal and unremarkable|less than 2 seconds|greater than 2 seconds|less than 3 seconds|greater than 3 seconds"][text name="extremities" size = 55 default=" "][comment memo="Any other conditions  not listed"]
additional assessment findings: [textarea name="additassess" default=" "][comment memo="Any other conditions not listed"] 
HEENT: [checkbox name="head" value="normal and unremarkable|no reported pain|pupils equally round and reactive|pupils unequal"][text name="head" size = 55 default=""][comment memo="X  meaning pupil size"]
Neck: [checkbox name="neck" value="normal and unremarkable|jvd|no jvd|tracheal deviation|no tracheal deviation|no reported pain"][text name="neck" size = 55 default=" "][comment memo="Any    other conditions not listed"]
Chest: [checkbox name="chest" value="normal and unremarkable|breath sounds clear equal bilaterally|no reported pain"][text name="chest" size = 55 default=" "]
Back: [checkbox name="back" value="normal and unremarkable|no reported pain"][text name="back" size = 55 default=" "][comment memo="Any other conditions not listed"]
Abdomen: [checkbox name="abdomen " value="soft, non-tender, unremarkable|no pain"][text name="abdomen" size = 55 default=" "][comment memo="Any other conditions not listed"]
Pelvis: [checkbox name="pelvis" value="normal and unremarkable|no reported pain "][text name="pelvis" size = 55 default=" ][comment memo="Any other conditions not listed"]
Extremities: [checkbox name="extremities" value="normal and unremarkable|equal strength x4 |unequal strength|cap refill less than 2 seconds|no reported pain "][text name="extremities" size = 55 default=" "][comment memo="Any other conditions not listed"]
additional assessment findings: [comment memo="Any other conditions not listed"] [textarea name="additassess" default="none"]

F-[text name="field" default=""]

T-[select name="ALSBLS" value="BLS|ALS"] assessment was done on the patient. The patient was [select name="tostretcher" value="assisted|positioned|lifted"] to the stretcher and placed in a [select name="position" value="semi-fowlers|supine|high fowlers"] position. Vitals were taken on the patient and were monitored enroute.
IV placed: [select name="iv" value="none|Left AC|Left Bicep|Left Hand|Left Forearm|Right AC|Right Bicep|Right Hand|Right Forearm|Left Radial|Right Radial"]
Catheter Size: [select name="size" value="none|14g|16g|18g|20g|22g|24g"]
Number of Attempts:[text name="attempt" default="1"]
Successful?: [select name="success" value="Yes|No"]. [checkbox name="treats" value="12 Lead was placed for ALS reading|O2 was given via nasal cannula|O2 was given via non-rebreather|albuterol 2.5mg in 3ml was administered via    nebulizer|Oral Glucose was administered oral route|Narcan was administered via nasal route|Glucagon 1mg was given IM    route|Glucagon was administered via IV line"].

Pre-Hospital activations: [checkbox name="pe_act_check" value="Stroke Alert|Trauma Alert|Sepsis Alert|STEMI Alert|no alerts activated"][text name="pe_act" default=" "]
On arrival, we were directed to [text name="hospassign" default="Bay#"]. Patient transferred to [select name="bed" value="hospital bed|chair|wheelchair"] without incident.
Report: Patient care report given to RN [text name="RNname" default=""] at bedside;prior to signing for patient care, they were given the opportunity to ask any questions, state any comments or address any concerns
Signatures Captured: [checkbox name="signature" value="obtained from patient|obtained from guardian/poa|obtained from responsible party|law enforcement signed as|nurse signed transfer of care|ems crew signed as| representative|witness|no representative available"][text name="pe_signature" default=" "]

We gathered our equipment and returned to service.

Brandon A. Lee
AEMT/FF2
A2052275
