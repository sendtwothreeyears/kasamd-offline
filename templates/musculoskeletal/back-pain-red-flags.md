# Back Pain Red Flags

**Category:** Objective/Exam Elements
**Source:** https://www.soapnote.org/musculoskeletal/back-pain-red-flags/

---

Back Pain Red Flags 
[checklist name="Q1" value="New urinary retention=1|Saddle sensation disturbance=1|Bladder fullness=1|Abnormal neurologic examination=1|Fever=1|Hemoglobin less than 10 g/dL=1|History of intravenous drug use and prior infection=1|Indwelling vascular catheter=1|Recent spine fracture=1|Trauma and neurologic deficit=1|History of cancer and clinical suspicion of cancer=1"]
[checklist name="Q2" value="Older than 75 years and recent trauma=1|Older than 75 years and osteoporosis=1|Older than 75 years and pain 7 to 10 out of 10=1|Older than 75 years and thoracic pain=1"] 
Number of Red Flags --> [calc value="score1=(Q1)+(Q2)" memo="number"]  [calc value="score2=(Q2);score2>1?'  Risk of fracture is at least 42%.  ':''"] 
----- Differential is below -----
[conditional field="Q1" condition="(Q1).is('New urinary retention=1')||(Q1).is('Saddle sensation disturbance=1')||(Q1).is('Bladder fullness=1')"]Cauda Equina.  [/conditional][conditional field="Q1" condition="(Q1).is('Abnormal neurologic examination=1')"]Serious or progressive neurologic deficit.  [/conditional][conditional field="Q1" condition="(Q1).is('Fever=1')"]Infection.  [/conditional][conditional field="Q1" condition="(Q1).is('Hemoglobin less than 10 g/dL=1')"]Cancer.  Epidural hematoma.  [/conditional][conditional field="Q1" condition="(Q1).is('History of intravenous drug use and prior infection=1')||(Q1).is('Indwelling vascular catheter=1')||(Q1).is('Recent spine fracture=1')"]Epidural abscess.  [/conditional][conditional field="Q1" condition="(Q1).is('Trauma and neurologic deficit=1')"]Vertebral fracture.  [/conditional][conditional field="Q1" condition="(Q1).is('History of cancer and clinical suspicion of cancer=1')"]Cancer.  [/conditional][conditional field="Q2" condition="(Q2).is('Older than 75 years and recent trauma=1')||(Q2).is('Older than 75 years and osteoporosis=1')||(Q2).is('Older than 75 years and pain 7 to 10 out of 10=1')||(Q2).is('Older than 75 years and thoracic pain=1')"]Vertebral fracture.  [/conditional]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"] 
Reference: 
[link url="https://www.healthquality.va.gov/guidelines/Pain/lbp/" memo="#1"] VA.gov [/conditional]
