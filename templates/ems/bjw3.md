# Interfacility Transfer - Maine - 3

**Category:** Objective/Exam Elements
**Source:** https://www.soapnote.org/ems/bjw3/

---

Dispatch//
Dispatched for [select name="LOS" value="a PIFT |an ALS|a BLS"] level transfer from [select name="Origin" value="|Pen Bay Medical Center|Waldo County General Hospital"] of a(n) [text name="age" size="2"] year-old  [select name="gender" value="male|female"] to [select name="destination" value="|Maine Medical Center|Eastern Maine Medical Center|Pen Bay Medical Center|Waldo County General Hospital"] with a dispatch reason of [text name="dispatch" size="15"].

Chief complaint//
The patient reports [textarea name="chiefcomplaint" default=" a chief complaint of"]

History//
Allergies and medications are noted elsewhere in this report. The patient arrived at the sending facility [text name="inhospitaltime" size="3" default=""] [select name="time_unit" value="Hours ago|day(s) ago"] by [select name="mode_of_transport" value="ambulance|private Vehicle|"]. [textarea name="HPI" default=""][comment memo="HISTORY OF PRESENT ILLNESS"] 

Assessment//
LOC: [select name="loc" value="Alert (GCS score of 15)|Alert to verbal (GCS 14)|XXX"] 
Orientation: [select name="orientationdropdpwn" value="Oriented to person, place, time, and events||"]
Airway and breathing: [select name="airway" value="Eupneic|Labored|Rapid|Shallow|Rapid and shallow||"]
Circulation: [textarea name="Vitals" default="Blood pressure and pulse rate are unremarkable."]
Skin: [checkbox name="skin" value="Warm|Dry|Pink|Pale|Diaphoretic|Cold"]

RX (treatment)//
Sending facility paperwork, including written orders are reviewed for missing information or opportunities for clarification. The patient relocates to our stretcher by [select name="move_method" value="|standing and pivoting|draw sheet|walking without observed ataxia"]. All seatbelts are used to secure the patient [select name="position" value="in a Semi-Fowler position|In a high fowler’s position|In a low fowler’s position|In a supine position"] before loading in the ambulance without complication. Ongoing treatments per written or standing orders include [checkbox name="orders" value="Oxygen therapy|Vital sign monitoring|EKG monitoring|PIFT level medications, listed elsewhere in this report with dose and times and include: "][textarea name="other_orders" default=""]

[conditional field="orders" condition="(orders).is('EKG monitoring')"]
Secondary assessment //
Initial ECG assessment: [select name="rhythem" value="Normal sinus rhythm|Sinus bradycardia|Sinus tachycardia|atrial fibrillation|Paced|"][select name="modifiers" value="| With unifocal PVCs| With multifocal PVCs"].

[/conditional]
Transport//
The patient is transported code 1, without lights or sirens. Transport is uneventful.

Care is transferred with a verbal report to the patient’s nurse. An opportunity is given for questions and clarification prior to our departure.
