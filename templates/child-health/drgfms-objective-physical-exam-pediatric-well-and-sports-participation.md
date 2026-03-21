# Objective — Physical Exam — Pediatric well and sports participation

**Category:** Pediatrics
**Source:** https://www.soapnote.org/child-health/drgfms-objective-physical-exam-pediatric-well-and-sports-participation/

---

PHYSICAL EXAM:
[checkbox name="PEsports" value="Sports Eval"][conditional field="PEsports" condition="(PEsports).is('Sports Eval')"]
-Vitals: [checkbox value="reviewed|no remarkable abnormalities|hypertensive"]
-Visual acuity: [checkbox value="reviewed|no remarkable abnormalities|decreased visual acuity"]
-Hearing: [text default="no overt/gross hearing loss detected" size="80"]
-General: [text default="WD/WN/NAD, non-ill appearing" size="80"]
-Heart: [text memo="free text" memo_size="small" size="80"][checkbox value="RRR|normal S1/S2|No M/R/G|No S3/S4 auscultated|no murmur detected on dynamic/valsalva testing|no friction rub"] [comment memo="abnormals" memo_color="orange" memo_size="small"][checkbox name="examheartabn1" value="MURMUR AUSCULTATED"][/conditional][conditional field="examheartabn1" condition="(examheartabn1).is('MURMUR AUSCULTATED')"] - GRADE [text size="3"]/6 [select value="SYSTOLIC EJECTION|SYSTOLIC|DIASTOLIC|HOLOSYSTOLIC"] HEARD BEST AT [select value="R|L"] [checkbox value="UPPER STERNAL BORDER|LOWER STERNAL BORDER|APEX|WITH DYNAMIC/VALSALVA TEST"]
[/conditional][conditional field="PEsports" condition="(PEsports).is('Sports Eval')"]
-Lungs: [text memo="free text" memo_size="small" size="80"][checkbox value="CTAB|BSE b/l|no wheezes|no crackles|no rhonchi"] [comment memo="abnormals" memo_color="orange" memo_size="small"][checkbox name="examlungsabn1" value="WHEEZING-"][/conditional][conditional field="examlungsabn1" condition="(examlungsabn1).is('WHEEZING-')"] [checkbox value="EXPIRATORY|INSPIRATORY|B/L LUNGS|R LUNG|L LUNG|DIFFUSE|LOWER FIELD(S)|UPPER FIELD(S)"] [/conditional][conditional field="PEsports" condition="(PEsports).is('Sports Eval')"][checkbox name="examlungsabn2" value="RHONCHI-"][/conditional][conditional field="examlungsabn2" condition="(examlungsabn2).is('RHONCHI-')"] [checkbox value="EXPIRATORY|INSPIRATORY|B/L LUNGS|R LUNG|L LUNG|DIFFUSE|LOWER FIELD(S)|UPPER FIELD(S)"] [/conditional][conditional field="PEsports" condition="(PEsports).is('Sports Eval')"][checkbox name="examlungsabn3" value="BREATH SOUNDS DIMINISHED-"][/conditional][conditional field="examlungsabn3" condition="(examlungsabn3).is('BREATH SOUNDS DIMINISHED-')"] [checkbox value="B/L LUNGS|R LUNG|L LUNG|DIFFUSE|LOWER FIELD(S)|UPPER FIELD(S)"][/conditional][conditional field="PEsports" condition="(PEsports).is('Sports Eval')"]
-MSK: [comment memo="only select those MSK items that were abnormal" memo_size="small"]
[checklist value="Abnormalities/defects in Neck ROM|Abnormalities/defects in Resisted Shoulder Shrug|abnormalities/defects in resisted arm abduction at 90deg|Abnormalities/defects in active shoulder ext rotation at 90deg abduction & elbows at 90deg|Abnormalities/defects in Elbow ROM|Abnormalities/defects Wrist supination/pronation ROM|Abnormalities/defects in finger MCP/PIP/DIP ROM|Abnormalities/defects in hip/knee/ankle strength/ROM/stability (duck walk)|Abnormalities/defects in spine/shoulder height/alignment|Abnormalities/defects in calves/achilles tone/strength/ROM"][textarea memo="description of MSK abnormals" memo_size="small" memo_color="orange"]

[/conditional][checkbox name="PEwellvisit" value="Well Visit"][conditional field="PEwellvisit" condition="(PEwellvisit).is('Well Visit')"] for [select name="Q1" value="|3-5 day|1 month|2 month|4 month|6 month|9 month|12 month|15 month|18 month|2 year|2.5 year (30mo)|3 year|4 year|5-6 year|7-8 year|9-10 year|11-14 year|15-17 year|18-21 year"] [select name="Q2" value="|female|male"] patient
[/conditional][conditional field="Q1|Q2" condition="((Q1).is('3-5 day')||(Q1).is('1 month'))&&((Q2).is('male'))"]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Eyes: Red reflex present bilaterally. Pupils equally round and reactive to light"]
[text size=80 default="Head: Normocephalic with age appropriate fontanelles."]
[text size=80 default="Peripheral Vessels: Normal pulses and perfusion."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs."]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Nontender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal male external genitalia. Testes descended bilaterally. No hernia present."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Hips with full range-of-motion; negative Barlow and Ortolani."]
[text size=80 default="Extremities: No clubbing, cyanosis, or edema. Normal upper and lower extremities."]
[text size=80 default="Mental Status: Alert and in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional][conditional field="Q1|Q2" condition="((Q1).is('3-5 day')||(Q1).is('1 month'))&&((Q2).is('female'))"]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Eyes: Red reflex present bilaterally. Pupils equally round and reactive to light"]
[text size=80 default="Head: Normocephalic with age appropriate fontanelles."]
[text size=80 default="Peripheral Vessels: Normal pulses and perfusion."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs."]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Nontender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal female external genitalia. No hernia present."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Hips with full range-of-motion; negative Barlow and Ortolani."]
[text size=80 default="Extremities: No clubbing, cyanosis, or edema. Normal upper and lower extremities."]
[text size=80 default="Mental Status: Alert and in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional][conditional field="Q1|Q2" condition="((Q1).is('2 month')||(Q1).is('4 month')||(Q1).is('6 month')||(Q1).is('9 month'))&&((Q2).is('male'))"]
[text size=80 default="General: Child appears age appropriate. "]
[text size=80 default="Vitals noted and stable."]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Head: Normocephalic with age appropriate fontanelles."]
[text size=80 default="Eyes: Conjunctivae noninjected; sclerae anicteric; lids without ptosis, edema, or erythema; extraocular movements intact; pupils equal, round, and reactive to light. Red reflex present bilaterally."]
[text size=80 default="ENT: TMs gray, sharp landmarks, mobile. Nose clear. Palate is complete. Dentition normal for age. Tonsils small and non-inflamed bilaterally."]
[text size=80 default="Lymph Nodes: No significant lymphadenopathy."]
[text size=80 default="Thyroid: No thyromegaly; trachea midline without masses."]
[text size=80 default="Breasts: Without lesions or drainage."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs."]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds; no wheezes, crackles, rales, rhonchi, or retractions."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Non-tender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal male external genitalia; testes descended bilaterally; no hernia."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Full range of motion about all joints."]
[text size=80 default="Extremities: Peripheral pulses are equal. There is no clubbing, cyanosis or edema of the extremities. Capillary refill is less than 2 seconds."]
[text size=80 default="Gait: Normal and appropriate gait for age."]
[text size=80 default="Mental Status: Alert and in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional][conditional field="Q1|Q2" condition="((Q1).is('2 month')||(Q1).is('4 month')||(Q1).is('6 month')||(Q1).is('9 month'))&&((Q2).is('female'))"]
[text size=80 default="General: Child appears age appropriate. Vitals noted and stable."]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Head: Normocephalic with age appropriate fontanelles."]
[text size=80 default="Eyes: Conjunctivae noninjected; sclerae anicteric; lids without ptosis, edema, or erythema; extraocular movements intact; pupils equal, round, and reactive to light. Red reflex present bilaterally."]
[text size=80 default="ENT: TMs gray, sharp landmarks, mobile. Nose clear. Palate is complete. Dentition normal for age. Tonsils small and non-inflamed bilaterally."]
[text size=80 default="Lymph Nodes: No significant lymphadenopathy."]
[text size=80 default="Thyroid: No thyromegaly; trachea midline without masses."]
[text size=80 default="Breasts: Without lesions or drainage."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs."]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds; no wheezes, crackles, rales, rhonchi, or retractions."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Non-tender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal female external genitalia."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Full range of motion about all joints."]
[text size=80 default="Extremities: Peripheral pulses are equal. There is no clubbing, cyanosis or edema of the extremities. Capillary refill is less than 2 seconds."]
[text size=80 default="Gait: Normal and appropriate gait for age."]
[text size=80 default="Mental Status: Alert and in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional][conditional field="Q1|Q2" condition="((Q1).is('12 month')||(Q1).is('15 month')||(Q1).is('18 month')||(Q1).is('2 year')||(Q1).is('3 year')||(Q1).is('4 year'))&&((Q2).is('male'))"]
[text size=80 default="General: Child appears age appropriate. Vitals noted and stable."]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Head: Normocephalic."]
[text size=80 default="Eyes: Conjunctivae noninjected; sclerae anicteric; lids without ptosis, edema, or erythema; extraocular movements intact; pupils equal, round, and reactive to light. Red reflex present bilaterally. Symmetric light reflex."]
[text size=80 default="ENT: TMs gray, sharp landmarks, mobile. Nose clear. Palate is complete. Dentition normal for age. Tonsils small and non-inflamed bilaterally."]
[text size=80 default="Lymph Nodes: No significant lymphadenopathy."]
[text size=80 default="Thyroid: No thyromegaly; trachea midline without masses."]
[text size=80 default="Breasts: Without lesions or drainage."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs. "]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds; no wheezes, crackles, rales, rhonchi, or retractions."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Non-tender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal male external genitalia; testes descended bilaterally; no hernia."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Full range of motion about all joints."]
[text size=80 default="Extremities: Peripheral pulses are equal. There is no clubbing, cyanosis or edema of the extremities. Capillary refill is less than 2 seconds."]
[text size=80 default="Gait: Normal and appropriate gait for age."]
[text size=80 default="Mental Status: Alert and in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional][conditional field="Q1|Q2" condition="((Q1).is('12 month')||(Q1).is('15 month')||(Q1).is('18 month')||(Q1).is('2 year')||(Q1).is('2.5 year (30mo)')||(Q1).is('3 year')||(Q1).is('4 year'))&&((Q2).is('female'))"]
[text size=80 default="General: Child appears age appropriate. Vitals noted and stable."]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Head: Normocephalic."]
[text size=80 default="Eyes: Conjunctivae noninjected; sclerae anicteric; lids without ptosis, edema, or erythema; extraocular movements intact; pupils equal, round, and reactive to light. Red reflex present bilaterally. Symmetric light reflex."]
[text size=80 default="ENT: TMs gray, sharp landmarks, mobile. Nose clear. Palate is complete. Dentition normal for age. Tonsils small and non-inflamed bilaterally."]
[text size=80 default="Lymph Nodes: No significant lymphadenopathy."]
[text size=80 default="Thyroid: No thyromegaly; trachea midline without masses."]
[text size=80 default="Breasts: Without lesions or drainage."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs. "]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds; no wheezes, crackles, rales, rhonchi, or retractions."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Non-tender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal female external genitalia."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Full range of motion about all joints."]
[text size=80 default="Extremities: Peripheral pulses are equal. There is no clubbing, cyanosis or edema of the extremities. Capillary refill is less than 2 seconds."]
[text size=80 default="Gait: Normal and appropriate gait for age."]
[text size=80 default="Mental Status: Alert and in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional][conditional field="Q1|Q2" condition="((Q1).is('5-6 year')||(Q1).is('7-8 year')||(Q1).is('9-10 year')||(Q1).is('11-14 year')||(Q1).is('15-17 year')||(Q1).is('18-21 year'))&&((Q2).is('male'))"]
[text size=80 default="General: Child appears age appropriate. Vitals noted and stable."]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Head: Normocephalic."]
[text size=80 default="Eyes: Conjunctivae noninjected; sclerae anicteric; lids without ptosis, edema, or erythema; extraocular movements intact; pupils equal, round, and reactive to light. Symmetric light reflex, normal fundi."]
[text size=80 default="ENT: TMs gray, sharp landmarks, mobile. Nose clear. Palate is complete. Dentition normal for age. Tonsils small and non-inflamed bilaterally."]
[text size=80 default="Lymph Nodes: No significant lymphadenopathy."]
[text size=80 default="Thyroid: No thyromegaly; trachea midline without masses."]
[text size=80 default="Breasts: Without lesions or drainage."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs. "]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds; no wheezes, crackles, rales, rhonchi, or retractions."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Non-tender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal male external genitalia; testes descended bilaterally; no hernia."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Full range of motion about all joints."]
[text size=80 default="Extremities: Peripheral pulses are equal. There is no clubbing, cyanosis or edema of the extremities. Capillary refill is less than 2 seconds."]
[text size=80 default="Gait: Normal and appropriate gait for age."]
[text size=80 default="Mental Status: Alert, oriented, in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional][conditional field="Q1|Q2" condition="((Q1).is('5-6 year')||(Q1).is('7-8 year')||(Q1).is('9-10 year')||(Q1).is('11-14 year')||(Q1).is('15-17 year')||(Q1).is('18-21 year'))&&((Q2).is('female'))"]
[text size=80 default="General: Child appears age appropriate. Vitals noted and stable."]
[text size=80 default="Skin: Normal turgor and without lesions."]
[text size=80 default="Head: Normocephalic."]
[text size=80 default="Eyes: Conjunctivae noninjected; sclerae anicteric; lids without ptosis, edema, or erythema; extraocular movements intact; pupils equal, round, and reactive to light. Symmetric light reflex, normal fundi."]
[text size=80 default="ENT: TMs gray, sharp landmarks, mobile. Nose clear. Palate is complete. Dentition normal for age. Tonsils small and non-inflamed bilaterally."]
[text size=80 default="Lymph Nodes: No significant lymphadenopathy."]
[text size=80 default="Thyroid: No thyromegaly; trachea midline without masses."]
[text size=80 default="Breasts: Without lesions or drainage."]
[text size=80 default="Heart: Regular rate and rhythm; normal S1 and S2; no murmurs, gallops, or rubs. "]
[text size=80 default="Lungs: Unlabored respirations; symmetric chest expansion; clear breath sounds; no wheezes, crackles, rales, rhonchi, or retractions."]
[text size=80 default="Abdomen: Soft, without organomegaly. Bowel sounds normal. Non-tender without rebound. No masses palpable. No distention."]
[text size=80 default="Genitalia: Normal female external genitalia."]
[text size=80 default="Spine: Straight with no lesions."]
[text size=80 default="Joints: Full range of motion about all joints."]
[text size=80 default="Extremities: Peripheral pulses are equal. There is no clubbing, cyanosis or edema of the extremities. Capillary refill less than 2 seconds."]
[text size=80 default="Gait: Normal and appropriate gait for age."]
[text size=80 default="Mental Status: Alert, oriented, in no distress. Appropriate for age."]
[text size=80 default="Neuro: Normal reflexes; normal tone; no focal deficits appreciated. Appropriate for age."]

[/conditional]
ASSESSMENT/PLAN:
[conditional field="PEsports" condition="(PEsports).is('Sports Eval')"]#PRE-PARTICIPATION SPORTS EVALUATION Z02.5
-Neuro considerations- [checkbox value="no concerns|epilepsy in hx/fmhx|hx of concussion|conditions stable|warrants further eval"]
-BH considerations- [checkbox value="no concerns|euthymic|low-risk|warrants further eval"]
-BMI & Eating d/o screening- [checkbox value="no concerns|underweight|concern for possible eating disorder|overweight|obese|discussed nutrition & exercise|warrants further eval"]
-Cardiovasc considerations- [checkbox value="no concerns|EKG performed and normal|physiologic murmur|concerning murmur|warrants further eval"]
-Pulmonary considerations- [checkbox value="no concerns|asthma hx|well-controlled|uncontrolled|has rescue inhaler|rescue inhaler rx'd|discussed appropriate use of inhaler|needs PFT|warrants further eval"]
-Ortho/MSK considerations- [checkbox value="no concerns|evidence of previous injuries|previous injuries appear well healed and stable|concern for scoliosis|concern for instability of joint(s)|warrants further eval"]
-Hematologic concerns- [checkbox value="no concerns|sickle cell fmhx|sickle cell trait present|sickle cell disease|possible bleeding d/o in fmhx|warrants further eval"]

-Overall Assessment: [select value="Low risk. Cleared for participation in selected sport|Not cleared for participation selected sport|Needs further workup prior to clearance for selected sport"]

-Recommendations for further eval/workup: [checkbox value="no further eval needed|metabolic labs for obesity|Neuro referral|BH referral|EKG referral|EchoCG ordered|Cards referral|Pulm referral|PFT ordered|Ortho/SM referral|labs checking for sickle cell|labs checking for bleeding disorders"]
-Education: [checkbox value="discussed risk of harm from identified health conditions with participation in certain sports|discussed avoidance of texting while driving|discussed avoidance of drug and alcohol use|discussed prevention of obesity|discussed eating disorders|discussed depression and suicidality|discussed bullying (especially online)|discussed sexual activity and contraception/STI prevention"]

-Disposition: [checkbox value="no routine f/u needed|f/u with PCM regarding chronic health issues identified|f/u for re-evaluation for sports participation after completing above workup"]
[checkbox name="sportscontralist" memo="List of contraindications for sports participation" memo_size="small" value=""]
[/conditional][conditional field="sportscontralist" condition="(sportscontralist).is('')"][comment memo="-Active myocarditis or pericarditis
-Hypertrophic cardiomyopathy
-Severe hypertension until controlled by therapy (static resistance activities, such as weight lifting, are particularly contraindicated)
-Suspected coronary artery disease until fully evaluated (patients with impaired resting left ventricular systolic function less than 50%, or exercise-induced ventricular dysrhythmias, or exercise-induced ischemia on exercise stress testing are at greatest risk of sudden death)
-Long QT interval syndrome
-History of recent concussion and symptoms of postconcussion syndrome (no contact or collision sports)
-Poorly controlled convulsive disorder (no archery, riflery, swimming, weight lifting or power lifting, strength training or sports involving heights)
-Recurrent episodes of burning upper-extremity pain or weakness, or episodes of transient quadriplegia until stability of cervical spine can be assured (no contact or collision sports)
-Sickle cell disease (no high-exertion, contact or collision sports)
-Eating disorder where athlete is not compliant with therapy and follow-up, or where there is evidence of diminished performance or potential injury because of eating disorder
-Acute enlargement of spleen or liver" memo_size="small"][/conditional][conditional field="PEwellvisit" condition="(PEwellvisit).is('Well Visit')"]#Wellness Visit
[comment memo="Z00.129 peds well with no new abnormals found
Z00.121 peds well with NEW abnormals
Z02.0 peds school/preschool physical
" memo_size="small" memo_color="lightgreen"][checkbox value="-Normal growth and development.
"][checkbox value="-Approved for all routine preventive medicine services, including immunizations
"][checkbox value="-Abuse/neglect, functional status, nutrition and pain assessed and no further evaluation is needed.
"][comment memo="Vaccination status/discussion" memo_size="small"][checkbox value="-Recommended immunization schedule reviewed and discussed, including side effects, risks, and benefits of immunizations.
"][checkbox value=" -Patient uptodate.
"][checkbox value=" -Patient NOT uptodate.
"][checkbox value=" -Immunizations per recommended schedule to be given today.
"][checkbox value=" -No immunizations to be given today.
"][checkbox value=" -Parent/patient agreed to recommended catchup immunizations today.
"][checkbox value=" -Parent/patient declined recommended immunizations today (will continue to address hesistancy at next visit)
"][/conditional][conditional field="Q1" condition="(Q1).is('3-5 day')"][comment memo="Relevant Immunizations: 
-Hep B vacc #1 at birth (offered today if not received)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health 
  -living situation and food security (community agencies, WIC/SNAP)
  -Tobacco exposure if applicable (800-QUIT-NOW)
  -Family/community support (asking for help)
"][checkbox value=" -Parent/family health & well-being
  -resting when baby rests
  -spending time with other children and maintaing their routines
"][checkbox value=" -Newborn behavior/care
  -sing/talk/read to baby, avoid TV and other digital media
  -help baby wake for feeding by patting/diaper change/undressing
  -calming baby with stroking head & gentle rocking
  -never hit or shake baby
  -checking temperature rectally (not skin/ear)
  -emergency preparedness plan (first aid kit, list of phone #s)
  -wash hands often, avoid crowds
  -avoid sun, use infant sunscreen
"][checkbox value=" -Nutrition and feeding
  -weight gain
  -feeding strategies
  -holding, burping, hunger and satisfaction cues
  -breast/formula feeding guidance
"][checkbox value=" -Safety
  -carseat safety
  -parental use of seatbelt
  -heatstroke prevention
  -safe sleep (back to sleep, crib guidance)
  -burn prevention (hot drinks, baths)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic at 1 month of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('1 month')"][comment memo="Relevant Immunizations: 
-Hep B vacc #2 at 1-2mo
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -living situation and food security (community agencies, WIC/SNAP)
  -Tobacco exposure if applicable (800-QUIT-NOW)
  -mold/radon/pesticides (check home, avoid use)
  -intimate partner violence (800-799-SAFE)
  -alcohol/substance abuse (avoidance)
  -family/community support (childcare)
"][checkbox value=" -Parent/family health & well-being
  -arranging postpartum checkup
  -maternal depression/anxiety prevalence (self-care, when to seek help)
  -family relationships (time with partner)
"][checkbox value=" -Infant behavior/development
  -put in crib when awake/drowsy
  -pacifier use
  -calming baby with stroking head & gentle rocking
  -never hit or shake baby
  -avoid TV/digital media with baby
  -start 'tummy time' when awake
  -take temperature rectally (not by skin/ear)
  -wash hands often, avoid crowds
  -avoid sun, use infant sunscreen
"][checkbox value=" -Nutrition and feeding
  -feeding plans/choices
  -breast/formula feeding guidance
"][checkbox value=" -Safety
  -carseat safety
  -parental use of seatbelt
  -safe sleep
  -preventing falls
  -choking/strangulation hazards
  -emergency care
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic at 2 months of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('2 month')"][comment memo="Relevant Immunizations: 
-Hep B vacc #2 at 1-2mo
-Rotavirus #1 at 2mo
-DTaP #1 at 2mo
-Hib #1 at 2mo
-PCV13 #1 at 2mo
-IPV #1 at 2mo
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -living situation and food security (community agencies, WIC/SNAP)
  -family support (handling unwanted advice)
  -childcare (choosing quality childcare, recognizing difficulty of separation)
"][checkbox value=" -Parent/family health & well-being
  -arranging postpartum checkup & family planning
  -maternal depression/anxiety prevalence (self-care, when to seek help)
  -family relationships (time with other children)
"][checkbox value=" -Infant behavior/development
  -hold/cuddle/talk/sing to baby
  -learn baby's temperment, personality
  -attention to baby's cues for sleep, put down when awake/drowsy
  -schedule naps and nighttime sleep
  -avoid TV/digital media with baby
  -start 'tummy time' when awake
  -calm baby - stroking head, gentle rocking, walking in stroller
  -never hit or shake baby
"][checkbox value=" -Nutrition and feeding
  -breast/formula feeding guidance
  -delaying solid foods
  -hunger and satiety cues
"][checkbox value=" -Safety
  -carseat safety
  -parental use of seatbelt
  -safe sleep
  -burn prevention (hot drinks, baths)
  -preventing falls
  -drowning prevention
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic at 4 months of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('4 month')"][comment memo="Relevant Immunizations: 
-Rotavirus #2 at 4mo
-DTaP #2 at 4mo
-Hib #2 at 4mo
-PCV13 #2 at 4mo
-IPV #2 at 4mo
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -environment risk (lead)
  -maintaining social contacts and family relationships
  -childcare (choosing quality childcare)
"][checkbox value=" -Infant behavior/development
  -continue calming strategies when baby fussy
  -spending time talking/playing with baby
  -create daily routine for feeding/naps/bedtime
  -avoid TV/digital media with baby
  -use quiet (reading/singing) and active (tummy time) playtime
  -provide safe opportunities to explore
"][checkbox value=" -Oral health
  -maternal oral health
  -teething/drooling
  -good oral hygiene (no bottle in bed, cleaning teeth)
"][checkbox value=" -Nutrition and feeding
  -breast/formula feeding guidance
  -delaying solid foods
  -feeding choices
  -supplements and OTC medications
"][checkbox value=" -Safety
  -carseat safety
  -parental use of seatbelt
  -safe sleep
  -burn prevention (hot drinks, baths)
  -preventing falls
  -drowning prevention
  -choking/suffocation hazards
  -avoiding infant walkers
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic at 6 months of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('6 month')"][comment memo="Relevant Immunizations: 
-Heb B #3 at 6-18mo
-Rotavirus #3 at 6mo
-DTaP #3 at 6mo
-Hib #3 at 6mo
-PCV13 #3 at 6mo
-IPV #3 at 6-18mo
-Influenza annual (seasonal)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -living situation and food security (community agencies, WIC/SNAP)
  -Tobacco exposure if applicable (800-QUIT-NOW)
  -alcohol/substance abuse (avoidance)
  -parental depression (how to get help)
  -family/community support (depending on social network)
  -childcare (trusted, responsible provider)
"][checkbox value=" -Infant behavior/development
  -use high chair or upright seat so baby can see you
  -interactive/reciprocal play (talk/sing/read, play games)
  -avoid TV/digital media with baby
  -continue daily routines
  -continue calming strategies when baby fussy
"][checkbox value=" -Oral health
  -fluoride source
  -good oral hygiene (no bottle in bed, cleaning teeth)
  -avoiding baby foods that baby sucks out of a bag
  -don't share spoons, don't clean pacifier in your mouth
"][checkbox value=" -Nutrition and feeding
  -breast/formula feeding guidance
  -solid foods (introduce one at a time, iron-rich)
  -pesticides (wash fruits/vegetables)
  -limit juice to 2-4oz/day
"][checkbox value=" -Safety
  -carseat safety
  -parental use of seatbelt
  -safe sleep
  -burn prevention (hot drinks, baths)
  -preventing falls
  -drowning prevention
  -choking/suffocation hazards
  -avoiding infant walkers
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic at 9 months of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('9 month')"][comment memo="Relevant Immunizations: 
-Heb B #3 at 6-18mo
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -intimate partner violence (800-799-SAFE)
  -make time for self, partner, and social contacts
"][checkbox value=" -Infant behavior/development
  -consistent daily routines
  -provide opportunities for safe exploration
  -be realistic about abilities
  -recognize new social skills, separation anxiety, sensitive to temperament
  -play cause-and-effect toys; talk/sing/read together; respond to baby's cues
  -avoid TV, videos, computers; making a family media use plan
"][checkbox value=" -Discipline
  -consistent positive discipline (limit 'no', use distraction, be role model)
"][checkbox value=" -Nutrition and feeding
  -self-feeding
  -mealtime routines
  -transition to solid foods (table food introduction)
  -encourage cup drinking
  -plans for weaning (continue breastfeeding if mutually desired)
"][checkbox value=" -Safety
  -carseat safety
  -parental use of seatbelt
  -heatstroke prevention
  -firearms safety
  -home safety check (stair gates, barriers around space heaters cleaning products electric cords)
  -burn prevention (hot liquids)
  -poisonings (poison help # 800-222-1222)
  -preventing falls (operable window guards)
  -drowning prevention ('touch supervision' near water, pools, bathtubs)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic at 12 months of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('12 month')"][comment memo="Relevant Immunizations: 
-Heb B #3 at 6-18mo
-Hib #4 at 12-15mo
-PCV13 #4 at 12-15mo
-IPV #3 at 6-18mo
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-MMR #1 at 12-15mo
-Varicella #1 at 12-15mo
-Hep A #1 at 12-23mo (#2 6mo later)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -living situation & food security (WIC/SNAP)
  -tobacco, EtOH, drugs (800-QUIT-NOW)
  -discuss with childcare giver childs needs (medical, feelings about diet, discipline, oral health, physical activity, media use)
  -maintain ties with friends, community
"][checkbox value=" -Establishing routines
  -positive discipline, time-outs, distractions, praise for good behaviors
  -carve out family time daily, consistent daily routines
  -continue 1 nap aday, nightly bedtime routine with quiet time, reading, singing, favorite toy
  -establish teeth-brushing routine
  -avoid TV and other digital media with toddler, family media use plan
"][checkbox value=" -Feeding and appetite changes
  -encourage self-feeding, avoid small hard foods
  -healthy food and snacks, encourage caregivers follow this also
  -3 meals and 2-3 snacks daily, toddlers tend to graze, trust child to decide how much to eat
"][checkbox value=" -Establishing a dental home
  -dentist visit by 12 months of age or after first tooth erupts
  -brush teeth 2x/day with small smear of toothpast, soft toothbrush
  -if still using bottle, offer only water in bottle (avoid added sugar)
"][checkbox value=" -Safety
  -carseat safety
  -falls prevention (stair gates, furniture away from windows, window guards)
  -drowning prevention ('touch supervision' near water, empty buckets pools bathtubs immediately after use)
  -sun protection (hat and clothing, sunscreen, avoid prolonged exposure 11am-3pm)
  -pets (keep child away from pet feeding area, monitor child/pet interactions)
  -poisoning (remove/lockup poisons & toxic household products, poison # 800-222-1222)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic at 15 months of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('15 month')"][comment memo="Relevant Immunizations: 
-Heb B #3 at 6-18mo
-DtaP #4 at 15-18mo
-Hib #4 at 12-15mo
-PCV13 #4 at 12-15mo
-IPV #3 at 6-18mo
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-MMR #1 at 12-15mo
-Varicella #1 at 12-15mo
-Hep A #1 at 12-23mo (#2 6mo later)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Communication and social development
  -allow child to choose between 2 options acceptable to you (when possible)
  -stranger anxiety, separation anxiety (these reflect new cognitive gains), speaking reassuringly
  -take time for self, partner, seek support from other parents
  -use simple, clear words/phrases to promote language development
"][checkbox value=" -Sleep routines and issues
  -consistent bedtime and nighttime routine, tuck in when drowsy/awake
  -if night waking, reassure briefly
  -no bottle in bed, no TV/computer/digital device in child's bedroom
"][checkbox value=" -Temperament, development, behavior, discipline
  -modify child's environment to avoid conflict/tantrums
  -use distractions, accept messiness, allow child to choose (when appropriate)
  -praise good behavior and accomplishments
  -use discipline for teaching/protecting (not punishing)
  -use time-outs to avoid negative attention
  -teach not to hit, bite, use aggressive behavior (model this as parent)
"][checkbox value=" -Healthy teeth
  -schedule dentist visit if hasn't seen dentist yet
  -brush teeth 2x/day with small smear of toothpast, soft toothbrush
  -preent tooth decay with good family oral health habits (brushing, flossing)
  -not sharing utensils
  -if nighttime bottle, use water only
"][checkbox value=" -Safety
  -carseat safety
  -ensure everyone uses seat belt
  -poisoning (remove poisons & toxic household products, poison # 800-222-1222)
  -falls prevention (stair gates, furniture away from windows, window guards)
  -install smoke detector on every level, test monthly, change batteries annually, fire escape plan, set home hot water <120F
"][comment memo="other specifics" memo_size="small"][checkbox value="-Screened for Tuberculosis Risk (Close contact with person with TB, live in area where TB is common, recent immigrant?) - low risk.
"][checkbox value="-Advised return to clinic at 18 months of age, or sooner if needed.
"][/conditional][conditional field="Q1" condition="(Q1).is('18 month')"][comment memo="Relevant Immunizations: 
-Heb B #3 at 6-18mo
-DtaP #4 at 15-18mo
-Hib #4 at 12-15mo
-PCV13 #4 at 12-15mo
-IPV #3 at 6-18mo
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-MMR #1 at 12-15mo
-Varicella #1 at 12-15mo
-Hep A #1 at 12-23mo (#2 6mo later)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -living situation & food security (WIC/SNAP)
  -tobacco, EtOH, drugs (800-QUIT-NOW)
  -discuss with childcare giver childs needs (medical, feelings about diet, discipline, oral health, physical activity, media use)
  -maintain ties with friends, community
"][checkbox value=" -Establishing routines
  -positive discipline, time-outs, distractions, praise for good behaviors
  -carve out family time daily, consistent daily routines
  -continue 1 nap aday, nightly bedtime routine with quiet time, reading, singing, favorite toy
  -establish teeth-brushing routine
  -avoid TV and other digital media with toddler, family media use plan
"][checkbox value=" -Feeding and appetite changes
  -encourage self-feeding, avoid small hard foods
  -healthy food and snacks, encourage caregivers follow this also
  -3 meals and 2-3 snacks daily, toddlers tend to graze, trust child to decide how much to eat
"][checkbox value=" -Establishing a dental home
  -dentist visit by 12 months of age or after first tooth erupts
  -brush teeth 2x/day with small smear of toothpast, soft toothbrush
  -if still using bottle, offer only water in bottle (avoid added sugar)
"][checkbox value=" -Safety
  -carseat safety
  -falls prevention (stair gates, furniture away from windows, window guards)
  -drowning prevention ('touch supervision' near water, empty buckets pools bathtubs immediately after use)
  -sun protection (hat and clothing, sunscreen, avoid prolonged exposure 11am-3pm)
  -pets (keep child away from pet feeding area, monitor child/pet interactions)
  -poisoning (remove/lockup poisons & toxic household products, poison # 800-222-1222)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Screened for Tuberculosis Risk (Close contact with person with TB, live in area where TB is common, recent immigrant?) - low risk.
"][checkbox value="-Advised return to clinic at 2 years of age, or sooner if needed.
"][/conditional][conditional field="Q1" condition="(Q1).is('2 year')"][comment memo="Relevant Immunizations: 
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-Hep A #1 at 12-23mo (#2 6mo later)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -intimate partner violence (800-799-SAFE)
  -living situation & food security (WIC/SNAP)
  -tobacco, EtOH, drugs (800-QUIT-NOW)
  -maintain social contacts, take care of self
  -create opportunities for family time
  -spend time with each child
  -not allowing hitting/biting/aggressive behavior, modeling this
"][checkbox value=" -Temperament and behavior
  -praise good behavior, listen to and respect child
  -help child express feelings like joy, anger, sadness, frustration
  -encourage self-expression
  -learn child's way fo reacting to people/situations
  -encourage free play up to 60min/day, age-appropriate play equipment
  -make time for learning through reading, talking, singing, exploring
  -limit TV and other screens to no more than 1hr/day, avoid TV during meals
"][checkbox value=" -Assessment of language development
  -model appropriate language
  -should be able to follow 1-2 step commands
  -read/look at books together daily, child may want same story over and over
"][checkbox value=" -Toilet training
  -begin when ready (dry for 2hr periods, knows wet/dry, can pull pants up/down, can indicate BM)
  -plan for frequent toilet breaks (up to 10x/day)
  -teach to wash hands
"][checkbox value=" -Safety
  -carseat safety, everyone else using seat belt
  -supervise outside, especially around cars/machinery/streets
  -use bike helmet
  -firearms safety (remove from home or store unloaded/locked/ammo separated)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Screened for Tuberculosis Risk (Close contact with person with TB, live in area where TB is common, recent immigrant?) - low risk.
"][checkbox value="-Screened for Lead Poisoning Risk (house older than 1950) - low risk
"][checkbox value="-Advised return to clinic at 2.5 years of age (30mo), or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('2.5 year (30mo)')"][comment memo="Relevant Immunizations: 
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-Hep A #1 at 12-23mo (#2 6mo later)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Family routines
  -day and evening routines
  -enjoyable family activities
  -parental activities outside the family
  -consistency in the child's environment
"][checkbox value=" -Language promotion and communication
  -Read together daily; go to the library
  -Listen when child speaks; repeat, using correct grammar
"][checkbox value=" -Promoting social development
  -Encourage play with other children, but supervise because child not ready yet to share/play cooperatively
  -Build independence by offering choices between 2 acceptable alternatives
  -Limit TV and digital media to no more than 1 hour a day; monitor what child watches
"][checkbox value=" -Preschool considerations
  -Consider group child care, preschool program, organized playdates or playgroups
  -Encourage toilet training success by: dressing child in easy-to-remove clothes; establish daily routine; place on potty every 1-2 hrs; praise; relaxed environment
"][checkbox value=" -Safety
  -Carseat safety, everyone else using seat belt
  -Supervise outside, especially around cars/machinery/streets
  -Provide 'touch supervision' near water, bathtubs, pools, toilet
  -Use hat/sun protection clothing, sunscreen
  -Avoid prolonged exposure when sun is strongest, between 11:00 am and 3:00 pm
  -Install smoke detectors on every level; test monthly; change batteries annually
  -Fire escape plan; keep matches/hot objects out of sight/away from child
"][comment memo="other specifics" memo_size="small"][checkbox value="-Screened for Tuberculosis Risk (Close contact with person with TB, live in area where TB is common, recent immigrant?) - low risk.
"][checkbox value="-Screened for Lead Poisoning Risk (house older than 1950) - low risk
"][checkbox value="-Advised return to clinic at 3 years of age, or sooner if concerns arise.
"][/conditional][conditional field="Q1" condition="(Q1).is('3 year')"][comment memo="Relevant Immunizations: 
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-Hep A #1 at 12-23mo (#2 6mo later)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -living situation & food security (WIC/SNAP)
  -tobacco, EtOH, drugs (800-QUIT-NOW)
  -Show affection in family; handle anger constructively; give child opportunities to make choices
  -Take time for self, partner; create opportunities for family to spend time with the child
"][checkbox value=" -Playing with siblings and peers
  -Encourage play with appropriate toys and safe exploration; expect fantasy play
  -Encourage interactive games with peers; explain importance of taking turns
  -Help your children develop good relations with each other
"][checkbox value=" -Encouraging literacy activities
  -Read, sing, play rhyme games together; let child 'tell' story; practice reading wherever you go
  -Encourage child to talk about friends, experiences
"][checkbox value=" -Promoting healthy nutrition and physical activity
  -Always have cool water available
  -Provide 16 to 24 oz low-fat/fat-free milk daily
  -Juice is not a necessary drink. Limit to 4 oz daily and always serve it
with a meal
  -Offer variety of healthy foods/snacks, especially vegetables, fruits, lean protein
  -Trust child to decide how much to eat
  -Encourage opportunities for physical activity for child, family
  -Limit TV and other digital media to no more than 1 hour a day
  -Monitor what child watches; consider making a family media use plan
"][checkbox value=" -Safety
  -Carseat safety, everyone else using seat belt
  -Prevent choking by cutting food into small pieces
  -Supervise all play near streets/driveways; don’t
allow child to cross street alone
  -Move furniture away from windows; install operable window guards
  -Provide 'touch supervision' near water, bathtubs, pools, toilet
  -Teach child about safety around pets
  -Firearms safety (remove from home or store unloaded/locked/ammo separated)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Screened for Tuberculosis Risk (Close contact with person with TB, live in area where TB is common, recent immigrant?) - low risk.
"][checkbox value="-Screened for Lead Poisoning Risk (house older than 1950) - low risk
"][checkbox value="-Advised return to clinic at 4 years of age, or sooner if concerns arise
"][/conditional][conditional field="Q1" condition="(Q1).is('4 year')"][comment memo="Relevant Immunizations: 
-DtaP #5 at 4-6yr
-IPV #4 at 4-6yr
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-MMR #2 at 4-6yr
-Varicella #2 at 4-6yr
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -living situation & food security (WIC/SNAP)
  -tobacco, EtOH, drugs (800-QUIT-NOW)
  -intimate partner violence (800-799-SAFE)
  -Teach child rules for being safe with adults:
   (1) no adult should tell a child to keep secrets from parents
   (2) no adult should express interest in private parts
   (3) no adult should ask a child for help with his/her private parts
  -Maintain or expand participation in community activities
"][checkbox value=" -School readiness
  -Give child time to finish sentences; encourage speaking skills by reading/talking together; keep answers short and simple
  -Read together daily; ask child questions about the stories
  -Children are very sensitive, either easily encouraged or hurt
  -Model respectful behavior and apologize if wrong
  -Praise when demonstrates sensitivity to feelings of others
  -Provide opportunities for your child to play with other children
  -Visit child’s preschool/child care program; become actively involved; talk with child about what they are learning
"][checkbox value=" -Developing healthy nutrition and personal habits
  -Always have cool water available
  -Provide 16 to 24 oz low-fat/fat-free milk daily
  -Juice not a necessary drink. Limit to 4 oz daily and always serve it with a meal
  -Offer variety of healthy foods/snacks, especially vegetables, fruits, lean protein
  -Trust child to decide how much to eat
  -Create calm bedtime ritual; enjoy mealtimes without TV
  -Ensure child brushes teeth twice a day with fluoridated toothpaste
"][checkbox value=" -Media use
  -Limit TV and video to no more than 1 hour a day; no TV in bedroom
  -Supervise any Internet use; consider making a family media use plan
  -Make opportunities for daily play; be physically active as a family
"][checkbox value=" -Safety
  -Carseat safety, everyone else using seat belt
  -Supervise all outdoor play; never leave child alone; don’t allow to cross street alone
  -Be sure swimming pools are fenced; use life jacket; teach child to swim
  -Use hat/sun protection clothing, sunscreen
  -Avoid prolonged exposure when sun is strongest, between 11:00 am and 3:00 pm
  -Teach child about safety around pets
  -Firearms safety (remove from home or store unloaded/locked/ammo separated)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Advised return to clinic in one year or sooner if concerns arise
"][/conditional][conditional field="Q1" condition="(Q1).is('5-6 year')"][comment memo="Relevant Immunizations: 
-DtaP #5 at 4-6yr
-IPV #4 at 4-6yr
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-MMR #2 at 4-6yr
-Varicella #2 at 4-6yr
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -Teach child nonviolent conflict-resolution techniques
  -Talk with parents/trusted adult if bullied
  -living situation & food security (WIC/SNAP)
  -tobacco, EtOH, drugs (800-QUIT-NOW)
  -Encourage independence, self-responsibility; show affection; praise appropriately
  -Spend time with child; make time to talk
"][checkbox value=" -Development and mental health
  -Continue family routines; assign household chores
  -Use discipline for teaching, not punishment
  -Model anger management/self-discipline
  -Solve conflict/anger by talking, going outside and playing, walking away
"][checkbox value=" -School
  -Ensure child is ready to learn (regular bedtime routine, healthy breakfast)
  -Tour school; attend back-to-school events
  -Be sure after-school care is safe, positive
  -Talk with child about school experiences
  -If child has special health care needs, be active in IEP process
"][checkbox value=" -Physical growth and development
  -Help child with brushing teeth if needed
  -Visit dentist twice a year
  -Brush teeth twice a day; floss once
  -Help child choose healthy eating (provide healthy foods, eat together as a family, be a role model)
  -Eat breakfast; eat vegetables/fruits
  -Eat when hungry; stop when satisfied
  -Drink milk 2 to 3 times a day
  -Limit sugary drinks/foods
  -Consider making family media use plan
  -Be physically active often during the day
"][checkbox value=" -Safety
  -Use properly positioned belt-positioning booster seat in backseat
  -Teach safe street habits (crossing/riding school bus)
  -Ensure child uses safety equipment (helmet, pads)
  -Teach child to swim; supervise around water
  -Use sunscreen; wear hat
  -Avoid prolonged exposure when sun is strongest, between 11:00 am and 3:00 pm.
  -Teach child rules for being safe with adults:
   (1) no adult should tell a child to keep secrets from parents
   (2) no adult should express interest in private parts
   (3) no adult should ask a child for help with his/her private parts
  -Install smoke detectors and carbon monoxide detector/alarms; make fire escape plan
  -Firearms safety (remove from home or store unloaded/locked/ammo separated)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Vision screening/acuity performed and unremarkable
"][checkbox value="-Hearing screening performed and unremarkable
"][checkbox value="-Hearing screening attempted but child uncooperative
"][checkbox value="-Advised return to clinic in one year or sooner if concerns arise
"][/conditional][conditional field="Q1" condition="(Q1).is('7-8 year')"][comment memo="Relevant Immunizations: 
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -Teach child nonviolent conflict-resolution
techniques
  -Talk with parents/trusted adult if bullied
  -Contact community resources, like SNAP, for help with food assistance
  -tobacco, EtOH, drugs (800-QUIT-NOW)
  -Put family computer in easily seen place; monitor computer use; install safety filter
  -Don’t give out personal information online
  -Encourage independence, self-responsibility; show affection; praise appropriately
  -Spend time with child; make time to talk; know child’s friends
"][checkbox value=" -Development and mental health
  -Encourage competence/independence/self-responsibility
  -Discuss rules, consequences
  -Be positive role model; do not hit or let others hit
  -Talk about worries
  -Be aware of pubertal changes; answer questions simply
"][checkbox value=" -School
  -Ensure child is ready to learn (regular bedtime
routine, healthy breakfast)
  -Show interest in school and activities
  -If concerns, ask teacher about evaluation for special help/tutoring; help with bullying.
  -If child has special health care needs, be active in IEP process
"][checkbox value=" -Physical growth and development
  -Take child to dentist twice a year
  -Give fluoride supplement if dentist recommends
  -Limit sweetened drinks/snacks
  -Brush teeth twice a day; floss once
  -Wear mouth guard during sports
  -Help child choose healthy eating (provide healthy foods, eat together as a family, be a role model)
  -Eat breakfast; eat vegetables/fruits
  -Eat when hungry; stop when satisfied
  -Drink milk 3 or more times a day
  -Limit sugary drinks/foods
  -Be physically active often during the day
  -Consider making family media use plan
"][checkbox value=" -Safety
  -Use belt-positioning booster seat in backseat
  -Ensure child uses safety equipment (helmet, pads)
  -Be a role model and always wear a helmet
  -Teach child to swim; supervise around water
  -Use sunscreen; wear hat
  -Avoid prolonged exposure when sun is strongest, between 11:00 am and 3:00 pm
  -Know child’s friends; teach home safety rules for fire/emergencies
  -Teach child rules for being safe with adults:
   (1) no adult should tell a child to keep secrets from parents
   (2) no adult should express interest in private parts
   (3) no adult should ask a child for help with his/her private parts
  -Firearms safety (remove from home or store unloaded/locked/ammo separated)
"][/conditional][conditional field="Q1" condition="(Q1).is('9-10 year')"][comment memo="Relevant Immunizations: 
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-HPV can start at 9yrs, routine 11-12yrs (2-shot series, #2 given 6-12mo later and no earlier 5mo later) optional at this age
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -Teach child nonviolent conflict-resolution
techniques
  -If concerns at school, ask for help from teacher/principal; discuss bullying
  -Talk with parents/trusted adult if bullied
  -Contact community resources like SNAP for help with food assistance
  -Don’t use tobacco/e-cigarettes; Call 800-QUITNOW
(800-784-8669) for help to quit smoking
  -Put family computer in easily seen place; monitor computer use; install safety filter
  -Don’t give out personal information online
  -Encourage new opportunities, activities, helping out at home/in community
  -Spend time with your child; discuss changing responsibilities within family
  -Clearly communicate rules, expectations
  -Get to know child’s friends.
  -Making and keeping friends is an important life skill
"][checkbox value=" -Development and mental health
  -Anticipate new adolescent behaviors, importance of peers
  -Reinforce values; encourage discussion of thoughts/feelings
  -Appropriate anger management; provide personal space at home
  -Be a role model for positive behavior
  -Supervise activities with peers.
  -Answer questions about puberty/sexuality; counsel to avoid sexual activity
  -Teach rules for being safe with adults:
   (1) no adult should tell a child to keep secrets from parents
   (2) no adult should express interest in private parts
   (3) no adult should ask a child for help with his/her private parts
"][checkbox value=" -School
  -Show interest in school performance/activities; if concerns, ask teacher about extra help
  -Create quiet space for homework
"][checkbox value=" -Physical growth and development
  -Visit dentist twice a year
  -Give fluoride supplements if dentist recommends
  -Brush teeth 2 minutes, twice a day; floss once.
  -Wear mouth guard during sports.
  -Help child choose healthy eating (provide healthy foods, eat together as a family, be a role model)
  -Eat breakfast; eat vegetables/fruits/whole grains/low-fat or nonfat dairy/lean protein
  -Eat when hungry; stop when satisfied
  -Limit foods/drinks high in sugar/saturated fats/refined grains
  -Talk with physician before trying to lose weight
  -Be physically active often during the day
  -Consider making family media use plan
"][checkbox value=" -Safety
  -The backseat is the safest place to ride. Switch from booster seat to seat belt in rear seat when child is ready
  -Use safety equipment (helmets, pads)
  -Teach child to swim; supervise around water
  -Use sunscreen; wear hat
  -Avoid prolonged exposure when sun is strongest, between 11:00 am and 3:00 pm.
  -Know child’s friends; make plan for personal safety.
  -Firearms safety (remove from home or store unloaded/locked/ammo separated)
"][comment memo="other specifics" memo_size="small"][checkbox value="-Vision screening/acuity performed and unremarkable
"][checkbox value="-Hearing screening performed and unremarkable
"][checkbox value="-Hearing screening attempted but child uncooperative
"][checkbox value="-Advised return to clinic in one year or sooner if concerns arise
"][/conditional][conditional field="Q1" condition="(Q1).is('11-14 year')"][comment memo="Relevant Immunizations: 
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-Tdap #1 at 11-12yrs
-HPV can start at 9yrs, routine 11-12yrs (2-shot series, #2 given 6-12mo later and no earlier 5mo later)
-MenACWY #1 at 11-12yrs (#2 at 16yrs)
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -Learn to manage conflict nonviolently; walk away if necessary; Talk with parent/trusted adult if bullied
  -When dating or in sexual situations, no means NO; No is OK
  -Teach your child nonviolent conflict-resolution skills
  -Discuss Internet safety; explain expectations about time with friends/dating
  -Community agencies can help with concerns about living situation
  -Programs like SNAP are available for help with food situation
  -Don’t use tobacco/e-cigarettes; talk with physician if worried about family member drug/alcohol use
  -Spend time with your family; help out at home, in the community; follow family rules
  -Making and keeping friends is an important life skill
  -Take responsibility for schoolwork; talk with parent/trusted adult about problems at school
  -Pursue interests outside of school
  -Involve child in family decision-making; encourage to think through problems
"][checkbox value=" -Physical growth and development
  -Brush teeth twice a day; floss once
  -Continue dentist visits; give fluoride if dentist recommends it
  -Support healthy self-image by praising activities/achievements, not appearance
  -Eat when hungry; stop when satisfied
  -Eat breakfast; eat vegetables/fruits/whole grains/lean protein
  -Have 24 oz or more low-fat/nonfat dairy/other dairy daily
  -Limit foods and drinks high in sugar/saturated fats/refined grains and low in nutrients
  -Drink water
  -Support healthy weight and help child choose healthy eating (provide healthy foods, eat together as a family, be a role model)
  -Be physically active 60 minutes a day
  -Use safety equipment during sports
  -Consider making family media use plan
  -Get enough sleep
"][checkbox value=" -Emotional well-being
  -Find ways to deal with stress
  -Discussing concerns about child’s behavior, moods, mental health, or
substance use
  -Recognize that hard times come and go; talk with parents/trusted adult
  -Get accurate information about physical development, sexuality and sexual feelings toward opposite or same sex; talk with physician/parents/trusted adults
  -Talk with child about the physical changes that occur during puberty, including menstruation for girls
  -Discussing questions about adolescent sexual development, sexual orientation, or gender identity
"][checkbox value=" -Risk reduction
  -Don’t smoke/vape, drink alcohol, or use drugs; avoid situations with drugs/alcohol
  -Don’t share own or others’ prescription medications; support friends who don’t use; discussing concerns about own or a family member’s use.
  -Talk with your child about tobacco/alcohol/drugs; praise for not using; be a role model
  -The safest way to prevent pregnancy and STIs is to not have sex, including oral sex
  -Plan how to avoid risky situations; if sexually active, protect against STIs/pregnancy
  -Know child’s friends and activities; clearly discuss rules, expectations
  -Talk about relationships, sex, values
  -Encourage sexual abstinence; provide opportunities for safe activities
  -Wear hearing protection when exposed to loud noise (concerts, lawn mowing)
  -Keep earbud volume moderate
"][checkbox value=" -Safety
  -Wear seat belt, helmet, protective gear, life jacket
  -Wear seat belt; don’t allow ATV riding
  -Use sunscreen; wear hat
  -Avoid prolonged sun exposure between 11:00 am and 3:00 pm
  -Don’t ride in car with person who has used alcohol/drugs; call parents/trusted adult for help
  -Help youth make plan for handling situation in which feels unsafe riding in a car
  -Remove firearms from home; if firearm necessary, store unloaded and locked, with ammunition locked separately
"][comment memo="other specifics" memo_size="small"][checkbox value="-Vision screening/acuity performed and unremarkable
"][checkbox value="-Hearing screening performed and unremarkable
"][checkbox value="-Hearing screening attempted but child uncooperative
"][checkbox value="-Advised return to clinic in one year or sooner if concerns arise
"][/conditional][conditional field="Q1" condition="(Q1).is('15-17 year')"][comment memo="Relevant Immunizations: 
-Influenza annual (seasonal, 2 doses 4wks apart if first immunization for 6mo-8yr olds)
-MenACWY #2 at 16yrs
" memo_size="small" memo_color="lightgreen"][comment memo="anticipatory guidance
" memo_size="small"]-Injury prevention, health promotion issues discussed including age specific guidance:
[checkbox value=" -Social determinants of health
  -Learn to manage conflict nonviolently; walk away if necessary
  -Avoid risky situations; call for help if things get dangerous
  -When dating or in sexual situations, no means NO; No is OK.
  -Teach adolescent nonviolent conflict resolution skills; discuss Internet safety.
  -Community agencies can help with concerns about your living situation
  -Programs like SNAP available to help with concerns about food situation
  -Don’t use tobacco/e-cigarettes; talk with physician if worried about family member drug/alcohol use
  -Spend time with family; work with them to solve problems
  -Making and keeping friends is an important life skill
  -Spend time with/praise/be affectionate with adolescent; agree on limits, consequences; know where he and friends are; provide opportunities for independent decision-making.
  -Help adolescent follow interests to new activities; increase awareness of community issues/needs
  -Take responsibility for schoolwork; follow family rules; ask for help when needed
  -Find ways to deal with stress; talk with parents/trusted adult
  -Involve adolescent in family decision-making; encourage to think through problems and practice independent decision-making
"][checkbox value=" -Physical growth and development
  -Brush teeth twice a day; floss once.
  -Continue dentist visits; give fluoride if dentist recommends.
  -Figure out the healthy eating/physical activity combination that will keep body strong and healthy.
  -Eat when hungry; stop when satisfied
  -Eat breakfast; eat vegetables/fruits/whole grains/lean protein
  -Have 24 oz or more low-fat/nonfat dairy/other dairy daily
  -Limit foods and drinks high in sugar/saturated fats/refined grains and low in nutrients
  -Drink water
  -Be physically active 60 minutes a day
  -Use safety equipment during sports
  -Get enough sleep
  -Support healthy self-image by praising activities/achievements, not appearance
  -Support healthy weight and help adolescent choose healthy eating (provide healthy foods, eat together as a family, be a role model)
"][checkbox value=" -Emotional well-being
  -Recognize that hard times come and go; talk with parents/trusted adult
  -Talk with me about concerns for adolescent’s emotional well-being/mental health
  -Get accurate information about physical development as well as sexuality and sexual feelings toward opposite or same sex; talk with parents/trusted adults
  -Communicate often; share expectations clearly
  -Discussing questions about adolescent sexual development, sexual orientation, or gender identity
"][checkbox value=" -Risk reduction
  -Don’t smoke/vape, drink alcohol, or use drugs; avoid situations with drugs/alcohol
  -Don’t share your own or others’ prescription medications; support friends who don’t use; talk with physician  if concerned about family member’s use
  -Talk with adolescent about tobacco/alcohol/drugs; know youth’s friends and activities; clearly discuss rules/expectations; praise for not using
  -Be a role model; lock liquor cabinet; store prescription medicines in locked location
  -Abstaining from sexual intercourse, including oral sex, is the safest way to prevent pregnancy and STIs
  -Plan how to avoid sex, risky situations
  -If sexually active, protect against STIs and pregnancy by correctly/consistently using long-acting reversible contraception, such as
IUD/contraceptive implant, or birth control pills; Use with a condom
  -Help adolescent make a plan for resisting pressure; help as accepts responsibility for her decisions and relationships
  -Wear hearing protection when exposed to loud noise (concerts, lawn mowing)   -Keep earbud volume moderate
"][checkbox value=" -Safety
  -Wear seat belt; don’t talk/text/use mobile device when driving
  -Wear helmet, protective gear, life jacket
  -Wear seat belt; don’t talk/text/use mobile device when driving
  -Use sunscreen; wear hat
  -Avoid prolonged sun exposure between 11:00 am and 3:00 pm; avoid tanning parlors
  -Remove firearms from home; if firearm necessary, store unloaded and locked, with ammunition locked separately
"][comment memo="other specifics" memo_size="small"][checkbox value="-Vision screening/acuity performed and unremarkable
"][checkbox value="-Hearing screening performed and unremarkable
"][checkbox value="-Hearing screening attempted but child uncooperative
"][checkbox value="-Advised return to clinic in one year or sooner if concerns arise
"][/conditional]-Additional comments: [textarea default="none"]
[comment memo="coding blurbs" memo_size="small"][checkbox value="-The above SocHx/Allergies/Meds/PMHx/PSHx/FMHx were reviewed & updated at today's visit.
"][checkbox value="-The scribe/medic/nurse/student assisted in collecting and documenting the patient's history.
-I have personally reviewed it and verified its accuracy.
"][checkbox value="-The scribe/medic/nurse/student assisted in documenting the physical exam performed by me.
-I have personally reviewed it and verified its accuracy.
"][checkbox value="-Laboratory results as displayed were reviewed and interpreted
"][checkbox value="-Radiologic study results as displayed were reviewed and interpreted
"][checkbox value="-Radiologic study images which results are displayed in note were reviewed and interpreted
"][link url="https://brightfutures.aap.org/Bright%20Futures%20Documents/BF4_POCKETGUIDE.pdf" memo="
Peds Anticipatory Guidance Guide (AAP)"][link url="https://www.aap.org/en-us/Documents/periodicity_schedule.pdf" memo="
Peds Prev Health Screening Schedule (AAP)"]
[link url="https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html" memo="
Peds Immunizations Schedule (CDC)"]
[comment memo="Adapted from original work by "][link url="https://www.soapnote.org/author/marnold2777/" memo="marnold2777"][comment memo=" at "][link url="https://www.soapnote.org/plan/pwf3pw-pe-ap-peds-well-visit-physician-workflow-template-3pw/" memo="https://www.soapnote.org/plan/pwf3pw-pe-ap-peds-well-visit-physician-workflow-template-3pw/"][comment memo="Arnold M. PWF3pw – PE/AP Peds Well & Sports Physical – Physician Workflow Part 3pw. ​​The SOAPnote Project. https://www.soapnote.org/plan/pwf3pw-pe-ap-peds-well-visit-physician-workflow-template-3pw/. Published December 24, 2019. Updated February 15, 2020. Accessed July 1, 2020."]
