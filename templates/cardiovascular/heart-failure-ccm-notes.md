# Heart Failure CCM Notes

**Category:** Cardiovascular
**Source:** https://www.soapnote.org/cardiovascular/heart-failure-ccm-notes/

---

Heart Failure Chronic Care Management Note

Heart Failure Type:
[select name="Heart_Failure_Type" value="Systolic (reduced ejectiion fraction)|Diastolic (presevered ejection fraction)|Unknown"]

Date of last echocardiogram: [date name="echo_date" default="01/19/2022"]

Ejection fraction: [text name="EF" default="%"]

Heart failure medications

Beta-blocker
[checklist name="beta_blocker" value="bisoprolol|carvedilol|metoprolol succinate|not on an evidence-based beta blocker"]
[conditional field="dose" condition="beta_blocker"value="bisoprolol|carvedilol|metoprolol succinate"] any text to display if condition is true [/conditional]
Current dose: [text name="beta_blocker_dose" default="mg daily"]
[comment memo="Target doses: bisoprolol 10mg daily, carvedilol 25 mg twice daily for weight <85 kg and 50 mg twice daily for weight >85 kg, metoprolol 200mg daily"]

[select name="beta_blocker_dose" value="choice A|choice B|choice C"]
