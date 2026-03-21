# DCHARTM Aid

**Category:** Objective/Exam Elements
**Source:** https://www.soapnote.org/ems/chartm-aid/

---

Dispatch: [comment memo="Unit responded? Emergently or Non-Emergently? Where did you respond? What did you respond for?"]
[select name="variable_1" value="KC1|KC2|KC3|UK1|UK3|UK4|UK5|UK6|UK7|UK8"] was dispatched and responded [select name="variable_2" value="emergently|non-emergently|"] to the above location for [checkbox name="variable_3" value="a non-emergency interfacility transfer|an emergency interfacility transfer"] [textarea name="variable_4" default=""]

Arrival: [comment memo="How did you discover the patient? What is the Primary Impression? Any issues gaining access to patient?"]
[textarea name="variable_5" default=""]

Chief Complaint: [comment memo="What did patient/bedside relay was wrong? How long has current issue been present?"]
[textarea name="variable_6" default=""]
[checkbox memo="" name="VAC333333" value="Pain Statement:"][conditional field="VAC333333" condition="(VAC333333).is('Pain Statement:')"]
The patient states their pain began while [text name="variable_41" default="O"]. [text name="variable_42" default="P"] makes the pain [select name="variable_43" value="worse|better"]. The patient describes the pain as [text name="variable_44" default="Q"]. The patient advises it [text name="variable_45" default="R"]. Advising it is a [select name="variable_46" value="1|2|3|4|5|6|7|8|9|10"]/10 in severity. The patient advised the pain has lasted [text name="variable_47" default="T"].[/conditional]

History: [comment memo="Note current history of illness or injury. Pertient medical history in reference to current issue."]
[textarea name="variable_7" default=""]

Assessment: [comment memo="Note significant findings indicated in assessment."]
[textarea name="variable_8" default=""]

Rx (Treatment): [comment memo="Reference Flowchart(s) for treatments and indicate significant findings. Detail if PTO."]
[textarea name="variable_9" default=""]

Transport: [comment memo="Where was the patient transported? How did the patient get from the bed/chair to the stretcher
stretcher to bed/chair? Note position of patient and safety belts. Was patient transported Emergently or Non-Emergently? Patient’s condition during transport and upon arrival? Detail information of patient care transfer."]
[textarea name="variable_10" default=""]

Medical Necessity Statement: 
[textarea name="variable_13" default=""]
