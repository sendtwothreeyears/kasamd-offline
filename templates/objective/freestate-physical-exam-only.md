# FreeState Physical Exam Only

**Category:** Objective/Exam Elements
**Source:** https://www.soapnote.org/objective/freestate-physical-exam-only/

---

[checkbox name="Problem400" value="GENERAL:"] [conditional field="Problem400" condition="(Problem400).is('GENERAL:')"] [checkbox value="Well-groomed, well-appearing patient, in no acute distress|Pediatric|Adult|Elderly|male patient|female patient|laying in bed|sitting at bedside|up in chair|well-groomed|well-appearing|chronically-ill in appearance|acutely ill in appearance|appears uncomfortable|appears in pain|toxic in appearance|in moderate distress|in no acute distress"]. [textarea name="gen" default=""][/conditional]

[checkbox name="Problem401" value="SKIN:"] [conditional field="Problem401" condition="(Problem401).is('SKIN:')"] [checkbox value="Warm, dry and intact. Color appropriate for ethnicity|Warm|Cool|Cold|dry|clammy|diaphoretic|color appropriate for ethnicity|pale"]. [textarea name="skin" default=""][/conditional]

[checkbox name="Problem402" value="HEENT:"] [conditional field="Problem402" condition="(Problem402).is('HEENT:')"] [checkbox value="Normocephalic, atraumatic|PERRL|no lymphadenopathy|trachea midline|oral os without edema or erythema|no JVD"]. [textarea name="head" default=""][/conditional]

[checkbox name="Problem403" value="RESP:"] [conditional field="Problem403" condition="(Problem403).is('RESP:')"] [checkbox value="Symmetrical with equal breath sounds. Clear to auscultation bilaterally|speaking in full sentences|diminished lung bases| wheezing|rhonchi|rales|tachypneic|nasal flaring|on RA|on supp O2 per NC|on HFNC|on mask|on BiPAP|intubated"]. [textarea name="resp" default=""][/conditional]

[checkbox name="Problem404" value="CARD:"] [conditional field="Problem404" condition="(Problem404).is('CARD:')"] [checkbox value="Regular rate and rhythm without murmurs, clicks or rubs|reg rate|reg rhythm|irregular rhythm|Grade I murmur best heard over apex|Grade II murmur best heard over apex|Grade III murmur best heard over apex|tachycardic|no significant abnormalities on telemetry|no significant abnormalities on 12-lead EKG|no BLE edema"]. [textarea name="card" default=""][/conditional]

[checkbox name="Problem405" value="GI/GU:"] [conditional field="Problem405" condition="(Problem405).is('GI/GU:')"] [checkbox value="Soft, non-tender and non-distended. Normal bowel sounds|soft|non-tender|non-distended|bowel sounds normal|bowel sounds hypoactive|bowel sounds hyperactive|bowel sounds absent|epigastric tenderness|RUQ tenderness|LUQ tenderness|RLQ tenderness|LLQ tenderness|suprapubic tenderness|right CVA tenderness|left CVA tenderness|distended|peritoneal signs present|foley catheter in place"]. [textarea name="abd" default=""][/conditional]

[checkbox name="Problem406" value="MS:"] [conditional field="Problem406" condition="(Problem406).is('MS:')"] [checkbox value="FROM to BUE|FROM to BLE|normal muscle bulk and tone|gait even and steady"]. [textarea name="ms" default=""][/conditional]

[checkbox name="Problem407" value="EXT:"] [conditional field="Problem407" condition="(Problem407).is('EXT:')"] [checkbox value="No edema to BLE, PPP, no clubbing or cyanosis|edema noted|venous stasis dermatitis to BLE|surgical extremity immobilized with sling|patient in hip precations|CMS intact to surgical extremity|surgical dressing is CDI|JP drain in place|draining sanguineous fluid|draining serous fluid|draining serosanguinous fluid|with no drainage"]. [textarea name="ext" default=""][/conditional]

[checkbox name="Problem408" value="NEURO:"] [conditional field="Problem408" condition="(Problem408).is('NEURO:')"] [checkbox value="Alert and oriented x 3, speech clear. No focal findings present|Alert|oriented to self|oriented to place|oriented to time|confusion noted|delirious|obtunded|somnolent|patient is at mental baseline|Cannot assess as pt is intubated|"]. [textarea name="neuro" default=""][/conditional] 

[checkbox name="Problem409" value="PSYCH:"] [conditional field="Problem409" condition="(Problem409).is('PSYCH:')"] [checkbox value="Normal mood and affect|tearful|appears anxious|physically combative|verbally combative|flat affect|denies SI|endorses SI|Cannot assess as pt is intubated"]. [textarea name="psych" default=""][/conditional]

[checkbox name="Problem4999" value="Normal Physical Exam"] [conditional field="Problem4999" condition="(Problem4999).is('Normal Physical Exam')"] 
GENERAL:  Well-groomed, well-appearing patient, in no acute distress.

SKIN:  Warm, dry and intact. Color appropriate for ethnicity.

HEENT:  Normocephalic, atraumatic.

RESP:  Symmetrical with equal breath sounds. Clear to auscultation bilaterally.

CARD:  Regular rate and rhythm without murmurs, clicks or rubs.

GI/GU:  Soft, non-tender and non-distended. Normal bowel sounds.

MS:  FROM to BUE.

EXT:  No edema to BLE, PPP, no clubbing or cyanosis.

NEURO:  Alert and oriented x 3, speech clear. No focal findings present. 

PSYCH:  Normal mood and affect. [/conditional]

[checkbox name="Problem410" value="GCS Score:"] [conditional field="Problem410" condition="(Problem410).is('GCS Score:')"] Glasgow Coma Scale (GCS)
.....................................................................................................
1. Best Eye Opening Response
[select name="eye" value="Spontaneous (4 points)=4|Opens to verbal command (3 point)=3|Eyes open to pain (2 points)=2|No eye opening (0 points)=0"]

2. Verbal Response
[select name="verbal" value="Oriented (5 points)=5|Confused but answering questions (4 point)=4|Inappropriate response, words discernible (3 points)=3|Incomprehensible sounds or speech (2 points)=2|No verbal response (1 point)=1"]

3. Motor Response
[select name="motor" value="Obeys commands (6 points)=6|Purposeful movement to painful stimuli (5 points)=5|Withdraws from pain (4 points)=4|Abnormal flexion (decorticate) (3 points)=3|Abnormal extension (decerberate)(2 points)=2|No motor response (1 point)=1"]
.....................................................................................................
Total score: [calc value="(eye)+(verbal)+(motor)" memo="score"] (maximum=15)
[/conditional] 
[checkbox name="Problem411" value="NIH Score:"] [conditional field="Problem411" condition="(Problem411).is('NIH Score:')"] National Institutes of Health (NIH) Stroke Scale
.....................................................................................................
1a. Assess Level of Consciousness (Alert=0, Coma=3)
[select name="conscious" value="Alert (0 points)=0|Not Alert; arousable by minor stimulation (1 point)=1|Not alert; requires repeated stimulation to attend (2 points)=2|Not responsive or reflexive posturing only (3 points)=3"]

1b. Assess Orientation: Month, Age (1 point per bad answer)
[select name="orientation" value="Answers both questions correctly (0 points)=0|Answers one question correctly (1 point)=1|Answers neither question correctly (2 points)=2"]

1c. Follow Commands: Open and close eyes, make fist and release (1 point per command NOT obeyed)
[select name="commands" value="Performs both tasks correctly (0 points)=0|Performs one task correctly (1 point)=1|Performs neither task correctly (2 points)=2"]

2. Follow my finger (Normal=0, Forced deviation=2)
[select name="finger" value="Normal (0 points)=0|Partial gaze palsy (1 point)=1|Forced deviation (2 points)=2"]

3. Visual field (Normal=0, hemianopia=2, bilateral loss=3)
[select name="visual" value="No visual loss (0 points)=0|Partial hemianopia (1 point)=1|Complete hemianopia (2 points)=2|Bilateral loss (3 points)=3"]

4. Facial palsy: Show teeth, Raise eyebrows, Squeeze eyes shut (Normal=0, Complete=3)
[select name="face" value="Normal (0 points)=0|Minor paralysis (1 point)=1|Partial paralysis (2 points)=2|Complete paralysis (3 points)=3"]

5a. Motor Strength Left Arm: Elevate to 90 degrees
[select name="left_arm" value="No drift (0 points)=0|Drift (1 point)=1|Some effort against gravity (2 points)=2|No effort against gravity (3 points)=3|No movement (4 points)=4|Amputation or joint fusion (0 points)=0"]

5b. Motor Strength Right Arm: Elevate to 90 degrees
[select name="right_arm" value="No drift (0 points)=0|Drift (1 point)=1|Some effort against gravity (2 points)=2|No effort against gravity (3 points)=3|No movement (4 points)=4|Amputation or joint fusion (0 points)=0"]

6a. Motor Strength Left Leg: Elevate to 30 degrees
[select name="left_leg" value="No drift (0 points)=0|Drift (1 point)=1|Some effort against gravity (2 points)=2|No effort against gravity (3 points)=3|No movement (4 points)=4|Amputation or joint fusion (0 points)=0"]

6b. Motor Strength Right Leg: Elevate to 30 degrees
[select name="right_leg" value="No drift (0 points)=0|Drift (1 point)=1|Some effort against gravity (2 points)=2|No effort against gravity (3 points)=3|No movement (4 points)=4|Amputation or joint fusion (0 points)=0"]

7. Coordination or limb ataxia: Finger-nose-finger, Heel-knee-shin (Absent=0, both limbs=2)
[select name="ataxia" value="Absent (0 points)=0|Ataxia in one limb (1 point)=1|Ataxia in two limbs (2 points)=2"]

8. Sensory: Pin prick to face, arm, trunk, and legs, Compare sides (Normal=0, Severe loss=2)
[select name="sensory" value="Normal (0 points)=0|Mild to moderate loss (1 point)=1|Severe to total loss (2 points)=2"]

9. Language: Name items, Describe picture, Read sentences (No Aphasia=0, Mute=3)
[select name="language" value="No aphasia (0 points)=0|Mild to moderate aphasia (1 point)=1|Severe aphasia (2 points)=2|Mute, global aphasia (3 points)=3"]

10. Dysarthria: Speech clarity while reading word list (Normal=0, Nearly unintelligible=2)
[select name="dysarthria" value="Normal (0 points)=0|Mild to moderate dysarthria (1 point)=1|Severe dysarthria (2 points)=2|Intubated or physical barrier (0 points)=0"]

11. Extinction and Inattention: Formerly called 'Neglect' (None=0, Complete=2)
[select name="extinction" value="No abnormality (0 points)=0|Visual, tactile, auditory, spatial, or personal inattention in one sensory modality (1 point)=1|Profound hemi-inattention or extinction to more than one modality (2 points)=2"]

.....................................................................................................
Total score: [calc value="(conscious)+(orientation)+(commands)+(finger)+(visual)+(face)+(left_arm)+(right_arm)+(left_leg)+(right_leg)+(ataxia)+(sensory)+(language)+(dysarthria)+(extinction)" memo="score"] (maximum=42)
[/conditional]
