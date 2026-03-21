# Claiborne EMS Narrative Template

**Category:** Emergency Medical Services
**Source:** https://www.soapnote.org/ems/claiborne-ems-narrative-template/

---

Dispatch: [comment memo="Who responded? How did you responded, immediately (unscheduled) or non-immediately (scheduled)? Where did you respond? & What did you respond for?"]
[select name="variable_1" value="Medic 1|Medic 2|Medic 3|Medic 4|Medic 5|Medic 6|Medic 7|Medic 8|Medic 9|Medic 10|Medic 11|"] was dispatched and responded [select name="variable_2" value="immediately|non-immediately|"] to the above location for [select name="variable_3" value="an interfacility transfer|a scene request|a convalescent transport|abdominal pain|air medical transport|an allergic reaction|altered mental status|an assault|pain|a hemorrhage/laceration|a traumatic injury|an unconscious/fainting|an unknown problem|a sick person|a standby|burn(s)|chest pain|a breathing problem|a diabetic problem|a fall|a medical alarm|a psychiatric issue|a stroke/CVA|a motor vehicle accident"]
[textarea name="variable_4" default=""]

Arrival: [comment memo="How did you discover the patient? What condition & position were they in? Paint a picture of what you saw."]
[textarea name="variable_5" default=""]

Chief Complaint(s): [comment memo="List ONLY the complaint(s) and duration in this field. Example: Chest Pain - 30 minutes, Shortness of Breath - 1 day, etc. All complaint details should be listed in the HPI field below."]
[textarea name="variable_6" default=""]

History of Present Illness/Injury (HPI): [comment memo="Current history of illness or injury. What did the patient/family/bystander/staff tell you was wrong? How long have these complaints existed?"]
[textarea name="variable_7" default=""]

[checkbox memo="" name="VAC333333" value="Pain Statement:"][conditional field="VAC333333" condition="(VAC333333).is('Pain Statement:')"]
The patient states their pain began while [text name="variable_41" default="O"]. [text name="variable_42" default="P"] makes the pain [select name="variable_43" value="worse|better"]. The patient describes the pain as [text name="variable_44" default="Q"]. The patient advises it [text name="variable_45" default="R"]. Advising it is a [select name="variable_46" value="1|2|3|4|5|6|7|8|9|10"]/10 in severity. The patient advised the pain has lasted [text name="variable_47" default="T"].[/conditional]

Past Medical History: [comment memo="List past medical and surgical history."]
[textarea name="variable_14" default=""]

Medications currently taking: [comment memo="List medications. List with patient or similar is not acceptable."]
[textarea name="variable_16" default=""]

Allergies: [comment memo="List environmental and pharmacologic allergies."]
[textarea name="variable_17" default=""]

Review of Systems: The remainder of a 10 pt review of systems was negative and/or unobtainable unless otherwise indicated in the HPI.

Assessment/Physical Exam:[comment memo="Highlight pertinant signs & symptoms. ***MUST*** match AngelTrack Impressions, Acute Symptoms, & Physical Exam fields."]
Gen: [text name="gen" default="Conscious, alert, in no acute distress" size="55"]
HEENT: [text name="heent" default="Normocephalic, atraumatic, pupils PERRL" size="55"]
Neck: [text name="neck" default="Supple, trachea midline" size="55"]
CV: [text name="cards" default="Normocardic, regular, extremities warm, well perfused" size="55"]
Resp: [text name="resp" default="Normal work of breathing, symmetric chest rise and fall, lungs clear" size="55"]
Abd: [text name="abd" default="Soft, non-traumatic, non-distended, no palpable organomegaly, bowel sounds present" size="55"]
MSK: [text name="msk" default="No obvious deformity, no edema, pulses 2+ bilaterally" size="55"]
GU: [text name="gu" default="Deferred" size="55"]
Rectal: [text name="rectal" default="Deferred" size="55"]
Neuro: [text name="neuro" default="Pleasant, alert, oriented" size="55"]
Skin: [text name="skin" default="Warm, dry, good turgor" size="55"]

Rx (Treatment/Interventions) provided provided prior to this units arrival: [comment memo="Highlight significant treatments/interventions provided PTA."]
[textarea name="variable_9" default=""]

Rx (Treatment/Interventions) provided during this transport: [comment memo="Utilize AngelTrack medications, interventions, and procedures. Highlight significant treatments/interventions/medications including IV access, cardiac monitoring, oxygen administration, etc. Justify the response and why needed. Document Medical Control orders here."]
[textarea name="variable_18" default=""]

Provider Impression/Medical Decision Making: Upon review of the patient’s chief complaint, history of present complaint, past medical history, physical exam findings, and diagnostic results, it is determined that the patient is experiencing [text name="diagnosismdm" default=" " size="55"] 


Transport: [comment memo="Where did you take the patient and why? How did the patient get to and from the ambulance? How did you transport? Patient's condition at destination. Details of patient care transfer."]
[textarea name="variable_10" default=""]

[checkbox memo="" name="VAC111111" value="Refusal/AMA:"][comment memo="Required on all Refusal/AMA."][conditional field="VAC111111" condition="(VAC111111).is('Refusal/AMA:')"] The following concerns/recommendation(s) have been expressed:[checkbox name="" value="Detailed explanation of possible risks and danger signs to patient or other authorized signer up to and including death|Informed the patient to call 911 if symptoms persist or get worse or any of the danger signs expressed appear|Call their doctor or go to an emergency department if symptoms persist or get worse or any of the danger signs expressed appear|"][textarea name="variable_19" default=""][/conditional]

[checkbox memo="Include any issues or unusual events that occured during the call." name="VAC222222" value="Exceptions:"][conditional field="VAC222222" condition="(VAC222222).is('Exceptions:')"][comment memo=""]
[textarea name="variable_12" default=""][/conditional]

[checkbox memo="" name="VAC444444" value="Medical Necessity Statement:"][comment memo="Required on all convalescent/IFT transports. Select ALL that apply."][conditional field="VAC444444" condition="(VAC444444).is('Medical Necessity Statement:')"] The patient requires ambulance transportation due to [checkbox name="" value="Inability to get up from bed without assistance, inability to ambulate, and inability to sit in a chair or wheelchair|Could be moved only by stretcher|Is confused combative, lethargic, or comatose|Is a flight risk|Required physical or chemical restraint to prevent injury to the beneficiary or others|Had to remain immobile because of a fracture that had not been set or the possibility of a fracture|Severe vertigo causing inability to remain upright|Needed advanced airway management (ventilator dependent, apnea monitor, possible intubation needed, deep suctioning)|Required cardiac/hemodynamic monitoring|Required non-self-administered IV meds en route|Required suctioning en route per transfer instructions|Required airway control/positioning en route per transfer instructions|Required third party assistance/attendant to apply, administer or regulate oxygen en route. Does not apply to patient capable of self-administration of portable or home 02. Patient is so frail as to require oxygen assistance.|Has a condition such that patient risks injury during vehicle movement despite restraints|Has morbid obesity which requires additional personnel or equipment to handle|Has a communicable disease or hazardous material exposure and must be isolated from the public or whose medical condition must be protected from public exposure|Has an orthopedic device that requires special handling en route (backboard, halo traction, use of pins and traction)|Has severe pain aggravated by transfers or moving vehicle such that trained expertise of EMT is required. Pain is present, but is not sole reason for transport.|Required positioning special handling to avoid further injury (less than grade 2 decubiti on buttocks).|Required positioning special handling that is inappropriate in a wheelchair or standard car seat due to contractures or recent extremity fracture|DVT requiring elevation of lower extremity|Contractures|Severe muscular weakness and de-conditioned state precludes any significant physical activity|Requires a higher level of care/specialty care unit unavailable at referring facility|Requires a procedure unavailable at referring facility"][/conditional]

[checkbox memo="" name="VAC555555" value="Authorization for Information Release:"][comment memo="Required on all transports. If the patient is unable to sign you must select the individual signing on behalf of the patient AND select the last field notating why the patient was unable to sign."][conditional field="VAC555555" condition="(VAC555555).is('Authorization for Information Release:')"] The Authorization for Information Release and Notice of Privacy Practices acknowledgement has been captured electronically by the following: [checkbox name="" value="The patient.|The patient's legal guardian.|Relative or other person who receives social security or other governmental benefits.|Relative or other person who arranges for the patient's treatment or exercise other responsibility for the patient's affairs on behalf of the patient.|Representative of an agency or institution that did not furnish the services for which payment is claimed but furnished other care, services or assistance to the patient.|The patient was unable to sign the Authorization for Information Release and Notice of Privacy Practices necessitating an authorized representative signature due to"][textarea name="variable_20" default=""][/conditional]
