# Pre-operative Assessment

**Category:** Complete Note
**Source:** https://www.soapnote.org/complete/pre-operative-assessment/

---

HPI: [text size="5"] yo [select value="M|F"] awaiting [text memo="specific surgery" memo_size="small" memo_color="yellow" size="50"]. Here for pre-operative assessment. [checkbox name="preophxcomorbid" value="Has the following notable comorbidities: "][conditional field="preophxcomorbid" condition="(preophxcomorbid).is('Has the following notable comorbidities: ')"][textarea memo="
list significant cardiac, respiratory, neurologic, endocrine disease that affect patient's functional status and/or require additional recommendations and considerations regarding further risk assessment and perioperative medication management" memo_color="yellow" memo_size="small"][/conditional]

-Functional Assessment - Patient able to perform - [checkbox name="Q1" value="Bicycling at a pace of 11 mph (6 METS)=1|Bowling (4 METS)=1|Dance, Slow Step (4 METS)=1|Dance, Square Dancing (5 METS)=1|Dance, Fast Step (Aerobic) (6 METS)=1|Exercise Equipment - Elliptical trainer, moderate effort (5 METS)=1|Exercise Equipment - Exercise bike bicycling, moderate to vigorous effort (6.8 METS)=1|Exercise Equipment - Exercise bike bicycling, spin class (8.5 METS)=1|Exercise Equipment - Rowing machine, moderate effort (4.8 METS)=1|Exercise Equipment - Ski machine (6.8 METS)=1|Fishing from river bank and walking (4 METS)=1|Golf without a cart, walking (4 METS)=1|Housework, perform *heavy* work around the house (4.3 METS)=1|Hunting deer, elk, large game (6 METS)=1|Jumping rope (12.3 METS)=1|Playing Sports - Baseball (5 METS)=1|Playing Sports - Basketball (6.5 METS)=1|Playing Sports - Football (touch or flag) (4 METS)=1|Playing Sports - Softball (5 METS)=1|Playing Sports - Tennis Singles (5 METS)=1|Playing Sports - Volleyball (4 METS)=1|Running/Jogging at 5 mph (8.7 METS)=1|Have sexual relations? (2.8 to 5.25 METS)=1|Shoveling (5 METS)=1|Skating at 10 MPH (5 METS)=1|Skiing, downhill snowskiing (8 METS)=1|Skiing, waterskiing (6 METS)=1|Swimming at 0.25 mph (4 METS)=1|Walk on level ground at 4 mph (4 METS)=1"]
Total --> [calc memo="number of activities" value="score=(Q1)"] activities which require at least moderate (4 to 6 METS) functional capacity.
-Cardiovascular Assessment - Fleisher-Eagle Algorithm for Preoperative Cardiac Risk Assessment
[select value="NO=0|YES=1" name="ischemic"] <-- Ischemic heart disease (angina or prior MI)?
[select value="NO=0|YES=1" name="chf"] <-- Heart failure?
[select value="NO=0|YES=1" name="riskysurg"] <-- High-risk surgery (including intraperitoneal, intrathoracic, and suprainguinal vascular procedures)?
[select value="NO=0|YES=1" name="diabetes"] <-- Diabetes mellitus (especially insulin-requiring)?
[select value="NO=0|YES=1" name="renal"] <-- Renal insufficiency?
[select value="NO=0|YES=1" name="poorfunc"] <-- Poor functional status (defined as the inability to walk four blocks or climb two flights of stairs)?
[conditional field="ischemic|chf|riskysurg|diabetes|renal|poorfunc" condition="(ischemic).is('YES=1')||(chf).is('YES=1')||(riskysurg).is('YES=1')||(diabetes).is('YES=1')||(renal).is('YES=1')||(poorfunc).is('YES=1')"][select value="NO=0|YES=10" name="coronary"] <-- History consistent with coronary heart disease? [/conditional]

[checkbox name="preopPE" value="PHYSICAL EXAM" memo="*" memo_color="blue" memo_size="small"][conditional field="preopPE" condition="(preopPE).is('PHYSICAL EXAM')"]
-Vitals Review - [textarea rows="1" cols="80" default="reviewed, no remarkable abnormalities"]
-General - [textarea rows="1" cols="80" default="well developed, well nourished, no apparent distress"]
-HEENT - [textarea rows="1" cols="80" default="normocephalic, atraumatic, nares patent, mucous membranes moist"]
-Neck - [textarea rows="1" cols="80" default="soft/supple, no JVD, no thyromegaly"]
-Heart/CV - [textarea rows="1" cols="80" default="RRR/no ectopy, normal S1/S2, No M/R/G, No S3/S4 auscultated, no friction rub"]
-Lungs/Pulm - [textarea rows="1" cols="80" default="CTAB, BSE b/l, no wheezes, no crackles, no rhonchi"]
-Abdomen - [textarea rows="1" cols="80" default="soft, nontender, nondistended, no voluntary/involuntary guarding, no rigidity, no rebound, bowel sounds present in all 4 quadrants"]
-Skin - [textarea rows="1" cols="80" default="warm, dry, intact, no edema/erythema/induration/ecchymosis"]
-EXT - [textarea rows="1" cols="80" default="no cyanosis, no over/gross deformity"]
-PSYCH - [textarea rows="1" cols="80" default="appropriate mood/affect"]
-NEURO - [textarea rows="1" cols="80" default="appropriate balance, normal gait"]

[/conditional]A/P
#Pre-operative assessment Z01.818
 -OVERALL: [select value="no further risk assessment or chronic disease optimization prior to surgery recommended|recommend further risk assessment AND disease optimization described below prior to surgery|recommend further risk assessment described below prior to surgery|recommend further chronic disease optimization described below prior to surgery"]

 -Laboratory Assessment/Recommendations: [textarea memo="CBC/BMP/UA if indicated" memo_size="small" memo_color="blue" default="no additional labwork warranted"]
 -Cardiac Assessment/Recommendations: [calc value="score=(ischemic)+(chf)+(riskysurg)+(diabetes)+(renal)+(poorfunc)+(coronary); score>2?'Noninvasive testing should be performed, followed by cardiac catheterization if the results are positive.':score>0?'Perioperative beta blocker therapy may be recommended - see updated 2014 ACC/AHA perioperative guidelines - but no further testing is recommended.':'No further testing or treatment recommended.'" memo="score interpretation"]
[textarea rows="2" cols="80" memo="add'l testing/EKG/cards eval if needed" memo_size="small" memo_color="blue" default="no additional testing warranted"]
 -Pulmonary Assessment: [textarea rows="2" cols="80" memo="PFT if needed" memo_size="small" memo_color="blue" default="no additional testing warranted"]
 -Nutritional Assessment/Recommendation: [textarea rows="2" cols="80" default="no severe malnourishment detected, no restrictions or additional considerations to being NPO"]
 -Chronic disease/medications assessment/recommendations: 
  [checkbox value=" -DM2 - hold oral meds while NPO
"][checkbox value=" -HTN - hold oral meds except b-blocker while NPO
"][checkbox value=" -A-Fib - may hold anticoagulation or aspirin prior to surgery, and resume in post-operative period
"][checkbox value=" -Primary CAD prevention - may hold aspirin prior to surgery, and resume in post-operative period
"][checkbox value=" -Primary CAD prevention - recommend continuation of statin therapy pre-operatively, okay to hold morning of surgery then resume immediately post-operatively
"][checkbox value=" -no additional medication adjustments necessary
"] -Additional chronic disease management recommendations: [textarea rows="1" cols="80" default="none"]
