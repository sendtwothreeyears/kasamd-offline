# Clinic Provider Chart Review Tool

**Category:** Featured
**Source:** https://www.soapnote.org/general/clinic-chart-review/

---

CLINIC PROVIDER CHART REVIEW TOOL
[text default="chart #" name="variable_1"] <-- Visit Identifier
[date name="variable_2"] <-- Visit Date
[text name="variable_3"] <-- Visit Provider
[text name="variable_4"] <-- Reviewer
[date name="variable_5"] <-- Review Date
[text name="variable_6"] <-- 1. Patient age
[select name="variable_7" value="yes|no|uncertain|not applicable"] <-- 2. Was the patient's chief complaint addressed?[conditional field="variable_7" condition="(variable_7).is('no')||(variable_7).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_8" value="yes|no|uncertain|not applicable"] <-- 3. HPI is Clear and understandably recorded?[conditional field="variable_8" condition="(variable_8).is('no')||(variable_8).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_9" value="yes|no|uncertain|not applicable"] <-- 4. Past Medical History is present?[conditional field="variable_9" condition="(variable_9).is('no')||(variable_9).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_10" value="yes|no|uncertain|not applicable"] <-- 5. Medications are updated and current?[conditional field="variable_10" condition="(variable_10).is('no')||(variable_10).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_11" value="yes|no|uncertain|not applicable"] <-- 6. Allergies: With reactions are listed?[conditional field="variable_11" condition="(variable_11).is('no')||(variable_11).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_12" value="yes|no|uncertain|not applicable"] <-- 7. Review of systems is appropriate and complete?[conditional field="variable_12" condition="(variable_12).is('no')||(variable_12).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_13" value="yes|no|uncertain|not applicable"] <-- 8. EXAM (Objective) General Appearance is included?[conditional field="variable_13" condition="(variable_13).is('no')||(variable_13).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_14" value="yes|no|uncertain|not applicable"] <-- 9. Vital signs are fully complete and appropriate?[conditional field="variable_14" condition="(variable_14).is('no')||(variable_14).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_15" value="yes|no|uncertain|not applicable"] <-- 10. Exam: Appropriate components are adequately  detailed?[conditional field="variable_15" condition="(variable_15).is('no')||(variable_15).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_16" value="yes|no|uncertain|not applicable"] <-- 11. Lab-work and special studies are appropriately ordered and interpreted?[conditional field="variable_16" condition="(variable_16).is('no')||(variable_16).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_17" value="yes|no|uncertain|not applicable"] <-- 12. Abnormal Vital Signs are repeated as is appropriate?[conditional field="variable_17" condition="(variable_17).is('no')||(variable_17).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_18" value="yes|no|uncertain|not applicable"] <-- 13. ASSESSMENT: Supported by history, exam and studies?[conditional field="variable_18" condition="(variable_18).is('no')||(variable_18).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_19" value="yes|no|uncertain|not applicable"] <-- 14. PLAN: Selects correct plan for each assessment?[conditional field="variable_19" condition="(variable_19).is('no')||(variable_19).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_20" value="yes|no|uncertain|not applicable"] <-- 15. Patient education is documented?[conditional field="variable_20" condition="(variable_20).is('no')||(variable_20).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_21" value="yes|no|uncertain|not applicable"] <-- 16. Medications prescribed- Side effects reviewed with patient?[conditional field="variable_21" condition="(variable_21).is('no')||(variable_21).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_22" value="yes|no|uncertain|not applicable"] <-- 17. Follow up visit recommendation is documented and appropriate?[conditional field="variable_22" condition="(variable_22).is('no')||(variable_22).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_23" value="yes|no|uncertain|not applicable"] <-- 18. Consultation/ Referrals reasons are clearly documented?[conditional field="variable_23" condition="(variable_23).is('no')||(variable_23).is('uncertain')"]
COMMENT: [text][/conditional]
[select name="variable_24" value="yes|no|uncertain|not applicable"] <-- 19. Appropriate Service Level and Procedure Code?[conditional field="variable_24" condition="(variable_24).is('no')||(variable_24).is('uncertain')"]
COMMENT: [text][/conditional]
OVERALL COMMENTS: [text size=100 name="variable_25"]
