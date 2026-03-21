# All-In-One; Psychiatric Assessment Notes

**Category:** Subjective/History Elements
**Source:** https://www.soapnote.org/mental-health/all-in-one-psychiatric-assessment-notes/

---

[select name="note_type" value="OPD First Visit Assessment Note|OPD Follow-up Note|ED visit Note|ED Admission Form|OPD Admission Form|Inpatient First Assessment Note|Inpatient Follow-up Note|Discharge Summary|Consultation Note"]



- Reason of Referral: [text name="ROR" size="20"].
- Source of Referral: [text name="SOR" size="20"].
- Date of Referral: [date name="DOR" format="dd/mm/yy"].
- Informant(s): [select name="informant" value="the patient|the patient and others|others"][conditional field="informant" condition="(informant).is('the patient and others')||(informant).is('others')"]; [text name="other_informant"].[/conditional]
- Reliability: [select name="reliability" value="reliable|unreliable"][conditional field="reliability" condition="(reliability).is('unreliable')"] because of [text name="ROUn"][/conditional].


- ID:
[select name="title" value="Mr.|Mrs.|Ms."] [text name="patient_name" size="23"] is [text name="patient_age" size="2"] year-old [select name="nationality" value="Afghan|Albanian|Algerian|American|Andorran|Angolan|Anguillan|Argentine|Armenian|Australian|Austrian|Azerbaijani|Bahamian|Bahraini|Bangladeshi|Barbadian|Belarusian|Belgian|Belizean|Beninese|Bermudian|Bhutanese|Bolivian|Botswanan|Brazilian|British|British Virgin Islander|Bruneian|Bulgarian|Burkinan|Burmese|Burundian|Cambodian|Cameroonian|Canadian|Cape Verdean|Cayman Islander|Central African|Chadian|Chilean|Chinese|Citizen of Antigua and Barbuda|Citizen of Bosnia and Herzegovina|Citizen of Guinea-Bissau|Citizen of Kiribati|Citizen of Seychelles|Citizen of the Dominican Republic|Citizen of Vanuatu|Colombian|Comoran|Congolese (Congo)|Congolese (DRC)|Cook Islander|Costa Rican|Croatian|Cuban|Cymraes|Cymro|Cypriot|Czech|Danish|Djiboutian|Dominican|Dutch|East Timorese|Ecuadorean|Egyptian|Emirati|English|Equatorial Guinean|Eritrean|Estonian|Ethiopian|Faroese|Fijian|Filipino|Finnish|French|Gabonese|Gambian|Georgian|German|Ghanaian|Gibraltarian|Greek|Greenlandic|Grenadian|Guamanian|Guatemalan|Guinean|Guyanese|Haitian|Honduran|Hong Konger|Hungarian|Icelandic|Indian|Indonesian|Iranian|Iraqi|Irish|Israeli|Italian|Ivorian|Jamaican|Japanese|Jordanian|Kazakh|Kenyan|Kittitian|Kosovan|Kuwaiti|Kyrgyz|Lao|Latvian|Lebanese|Liberian|Libyan|Liechtenstein citizen|Lithuanian|Luxembourger|Macanese|Macedonian|Malagasy|Malawian|Malaysian|Maldivian|Malian|Maltese|Marshallese|Martiniquais|Mauritanian|Mauritian|Mexican|Micronesian|Moldovan|Monegasque|Mongolian|Montenegrin|Montserratian|Moroccan|Mosotho|Mozambican|Namibian|Nauruan|Nepalese|New Zealander|Nicaraguan|Nigerian|Nigerien|Niuean|North Korean|Northern Irish|Norwegian|Omani|Pakistani|Palauan|Palestinian|Panamanian|Papua New Guinean|Paraguayan|Peruvian|Pitcairn Islander|Polish|Portuguese|Prydeinig|Puerto Rican|Qatari|Romanian|Russian|Rwandan|Salvadorean|Sammarinese|Samoan|Sao Tomean|Saudi Arabian|Scottish|Senegalese|Serbian|Sierra Leonean|Singaporean|Slovak|Slovenian|Solomon Islander|Somali|South African|South Korean|South Sudanese|Spanish|Sri Lankan|St Helenian|St Lucian|Stateless|Sudanese|Surinamese|Swazi|Swedish|Swiss|Syrian|Taiwanese|Tajik|Tanzanian|Thai|Togolese|Tongan|Trinidadian|Tristanian|Tunisian|Turkish|Turkmen|Turks and Caicos Islander|Tuvaluan|Ugandan|Ukrainian|Uruguayan|Uzbek|Vatican citizen|Venezuelan|Vietnamese|Vincentian|Wallisian|Welsh|Yemeni|Zambian|Zimbabwean"] [select name="gender" value="male|female|man|woman|boy|girl"], [select name="marital_status" value="single|engaged|married|separated|divorced|widowed"][conditional field="marital_status" condition="(marital_status).is('married')||(marital_status).is('separated')||(marital_status).is('divorced')||(marital_status).is('widowed')"] and a parent of; [text name="offspring" size="2"] kids[/conditional]. [conditional field="title" condition="(title).is('Mr.')"]He[/conditional][conditional field="title" condition="(title).is('Mrs.')||(title).is('Ms.')"]She[/conditional] lives in [text name="living_city" size="7"] [select name="living_with" value="alone|with the family;|with"] [conditional field="living_with" condition="(living_with).is('with the family;')||(living_with).is('with')"][text name="living_with_others"] [/conditional]in [select name="house_type" value="rented apartment|rented house|owned apartment|owned house"]. Currently, [conditional field="title" condition="(title).is('Mr.')"]he is[/conditional][conditional field="title" condition="(title).is('Mrs.')||(title).is('Ms.')"]she is[/conditional] [select name="job_status" value="unemployed|a full-time employee as|a part-time employee as|self-employed as|a student of|retired from|medically-retired from"][conditional field="job_status" condition="(job_status).is('unemployed')"] and depends on [text name="SOI"] as [conditional field="title" condition="(title).is('Mr.')"]his[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]her[/conditional] source of income.[/conditional][conditional field="job_status" condition="(job_status).is('a full-time employee as')||(job_status).is('a part-time employee as')||(job_status).is('self-employed as')"] [text name="work_type"] at [text name="work_place"].[/conditional][conditional field="job_status" condition="(job_status).is('a student of')"] [text name="work_type"] at [text name="work_place"] and depends on [text name="SOI"] as [conditional field="title" condition="(title).is('Mr.')"]his[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]her[/conditional] source of income.[/conditional][conditional field="job_status" condition="(job_status).is('retired from')"] [text name="work_place"].[/conditional][conditional field="job_status" condition="(job_status).is('medically-retired from')"] [text name="work_place"] because of [text name="medical_retirement"] and depends on [text name="SOI"] as [conditional field="title" condition="(title).is('Mr.')"]his[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]her[/conditional] source of income.[/conditional]



- CHIEF COMPLAINT & DURATION:
1- [text name="CC1"size="15"] for [text name="CCduration1" size="2"] [select name="CCD1" value="hours|days|weeks|months|years"].
2- [text name="CC2"size="15"] for [text name="CCduration2" size="2"] [select name="CCD2" value="hours|days|weeks|months|years"]. 


- HISTORY OF PRESENT ILLNESS:
[textarea name="HPI" cols="50" rows="5"].


- SYSTEMIC REVIEW:
[checklist name="MDD" value="Symptoms suggestive of; Major Depressive Disorder:"][conditional field="MDD" condition="(MDD).is('Symptoms suggestive of; Major Depressive Disorder:')"]
[textarea name="MDD_de" memo="enter details of depressive symptoms" cols="30" rows="3"][/conditional]

[checklist name="BAD" value="Symptoms suggestive of; Bipolar Affective Disorder:"][conditional field="BAD" condition="(BAD).is('Symptoms suggestive of; Bipolar Affective Disorder:')"]
[textarea name="BAD_de" memo="enter details of mania/hypomania symptoms" cols="30" rows="3"][/conditional]

[checklist name="GAD" value="Symptoms suggestive of; Generalized Anxiety Disorder:"][conditional field="GAD" condition="(GAD).is('Symptoms suggestive of; Generalized Anxiety Disorder:')"]
[textarea name="GAD_de" memo="enter details of anxiety symptoms" cols="30" rows="3"][/conditional]

[checklist name="OCD" value="Symptoms suggestive of; Obsessive-Compulsive Disorder:"][conditional field="OCD" condition="(OCD).is('Symptoms suggestive of; Obsessive-Compulsive Disorder:')"]
[textarea name="OCD_de" memo="enter details of anxiety symptoms" cols="30" rows="3"][/conditional]

[checklist name="PD" value="Symptoms suggestive of; Panic Disorder:"][conditional field="PD" condition="(PD).is('Symptoms suggestive of; Panic Disorder:')"]
[textarea name="PD_de" memo="enter details of panic symptoms" cols="30" rows="3"][/conditional]

[checklist name="PTSD" value="Symptoms suggestive of; Post-traumatic stress disorder:"][conditional field="PTSD" condition="(PTSD).is('Symptoms suggestive of; Post-traumatic stress disorder:')"]
[textarea name="PTSD_de" memo="enter details of Specific Phobia symptoms" cols="30" rows="3"][/conditional]

[checklist name="SP" value="Symptoms suggestive of; Social Phobia:"][conditional field="SP" condition="(SP).is('Symptoms suggestive of; Social Phobia:')"]
[textarea name="SP_de" memo="enter details of Social Phobia symptoms" cols="30" rows="3"][/conditional]

[checklist name="SpPh" value="Symptoms suggestive of; Specific Phobia:"][conditional field="SpPh" condition="(SpPh).is('Symptoms suggestive of; Specific Phobia:')"]
[textarea name="SpPh_de" memo="enter details of Specific Phobia symptoms" cols="30" rows="3"][/conditional]

[checklist name="Psychosis" value="Symptoms suggestive of; Psychosis:"][conditional field="Psychosis" condition="(Psychosis).is('Symptoms suggestive of; Psychosis:')"]
[textarea name="Psychosis_de" memo="enter details of psychotic symptoms" cols="30" rows="3"][/conditional]

[checklist name="substance" value="Substance Use History:"] [conditional field="substance" condition="(substance).is('Substance Use History:')"]
[textarea name="substance_de" memo="enter details of substance use" cols="30" rows="3"][/conditional]


- PAST PSYCHIATRIC HISTORY:
[select name="PPHx" value="The patient has never sought psychiatric assessment prior current presentation.|The patient has past psychiatric history:"][conditional field="PPHx" condition="(PPHx).is('The patient has past psychiatric history:')"]
[checklist name="PDx" value="Past Diagnoses:"][conditional field="PDx" condition="(PDx).is('Past Diagnoses:')"]
[textarea name="PDx_de" memo="enter details of Past Diagnoses" cols="30" rows="3"][/conditional]

[checklist name="Psychiatrists" value="Previous Psychiatrists:"][conditional field="Psychiatrists" condition="(Psychiatrists).is('Previous Psychiatrists:')"]
[textarea name="Psychiatrists_de" memo="enter details of Previous Psychiatrists" cols="30" rows="3"][/conditional]

[checklist name="hospitalization" value="Previous Hospitalizations:"][conditional field="hospitalization" condition="(hospitalization).is('Previous Hospitalizations:')"]
[textarea name="hospitalizations_de" memo="enter details of Previous Hospitalizations" cols="30" rows="3"][/conditional]

[checklist name="PPMeds" value="Previous Medications:"][conditional field="PPMeds" condition="(PPMeds).is('Previous Medications:')"]
[textarea name="PPMeds_de" memo="enter details of Previous Psychiatric Medications" cols="30" rows="3"][/conditional]

[checklist name="ECT" value="Electroconvulsive therapy:"][conditional field="ECT" condition="(ECT).is('Electroconvulsive therapy:')"]
[textarea name="ECT_de" memo="enter details of ECT" cols="30" rows="3"][/conditional]

[checklist name="Psychotherapy" value="Psychotherapy:"][conditional field="Psychotherapy" condition="(Psychotherapy).is('Psychotherapy:')"]
[textarea name="Psychotherapy_de" memo="enter details of Psychotherapy" cols="30" rows="3"][/conditional]
[/conditional]


[checklist name="safety" value="SAFETY AND FORENSIC HISTORY:"] [conditional field="safety" condition="(safety).is('SAFETY AND FORENSIC HISTORY:')"]
[checklist name="suicide" value="Suicidality or self-harm:"][conditional field="suicide" condition="(suicide).is('Suicidality or self-harm:')"]
[textarea name="suicide_de" memo="enter details of Suicidality or self-harm" cols="30" rows="3"][/conditional]

[checklist name="homicide" value="Homicidality or others-harm:"][conditional field="homicide" condition="(homicide).is('Homicidality or others-harm:')"]
[textarea name="homicide_de" memo="enter details of Homicidality or others-harm" cols="30" rows="3"][/conditional]

[checklist name="forensic" value="Forensic History:"][conditional field="forensic" condition="(forensic).is('Forensic History:')"]
[textarea name="forensic_de" memo="enter details of Forensic History" cols="30" rows="3"][/conditional][/conditional]


- MEDICAL HISTORY:
Patient is [select name= "medical" value= "medically free.|known case of:"]
[conditional field="medical" condition="(medical).is('known case of:')"] [textarea name="medical_list" cols="30" rows="3" default="1- "]

Currently on:
[textarea name="drugs_list" cols="30" rows="3" default="1- "]

[select name="compliance" value="With good compliance and no reported side effects.|With good compliance despite reported side effects|With poor compliance and no reported side effects|With poor compliance due to reported side effects"][conditional field="compliance" condition="(compliance).is('With good compliance despite reported side effects')||(compliance).is('With poor compliance due to reported side effects')"], such as: [text name="side_effects" size="20"].[/conditional][conditional field="compliance" condition="(compliance).is('With poor compliance and no reported side effects')"], because of [text name="incompliance" size="20"].[/conditional]
[/conditional]

[checklist name="head_injury" value="Head Injury"][conditional field="head_injury" condition="(head_injury).is('Head Injury')"] [textarea name="head_inj_de" memo="enter details of head injury" cols="30" rows="3"][/conditional]

[checklist name="seziures" value="Seziures"] [conditional field="seziures" condition="(seziures).is('Seziures')"] [textarea name="seziures_de" memo="enter details of seziures" cols="30" rows="3"][/conditional]

[checklist name="surgery" value="Surgeries"] [conditional field="surgery" condition="(surgery).is('Surgeries')"] [textarea name="surgeries_de" memo="enter details of surgries" cols="30" rows="3"][/conditional]

[checklist name="allergy" value="Food/drug allergy"] [conditional field="allergy" condition="(allergy).is('Food/drug allergy')"] [textarea name="allergy_de" memo="enter details of allergies" cols="30" rows="3"][/conditional]


- FAMILY HISTORY:
[checklist name="FMHX" value="Family Medical History:"] [conditional field="FMHX" condition="(FMHX).is('Family Medical History:')"] [textarea name="FMHX_de" memo="enter details of Family Medical History" cols="30" rows="3"][/conditional]

[checklist name="FMPHX" value="Family Psychiatric History (Mental, Substances and Suicide):"] [conditional field="FMPHX" condition="(FMPHX).is('Family Psychiatric History (Mental, Substances and Suicide):')"] [textarea name="FMPHX_de" memo="enter details of Family Psychiatric History" cols="30" rows="3"][/conditional]


- PERSONAL AND SOCIAL HISTORY:
-> Place of birth: [text name="birth_place" size="10"].
-> Lived and raised in: [text name="raised_place" size="10"].
-> Raised by: [text name="raised_by" size="10"].
-> [select name="siblings" value="The patient has no siblings|Number of siblings:"][conditional field="siblings" condition="(siblings).is ('Number of siblings:')"] [text name="brothers_num" size="2"] brother(s) and [text name="sisters_num" size="2"] sister(s); [text name="siblings_names"][/conditional].
[conditional field="siblings" condition="(siblings).is ('Number of siblings:')"]-> Birth order: [text name="birth_order" size="2"].[/conditional]
-> Level of Education: [select name="edu_level" value="uneducated|Elementary school|Middle school |High school|Diploma Degree|Bachelor Degree|Master Degree|Doctoral Degree"] [conditional field="edu_level" condition="(edu_level).is('Diploma Degree')||(edu_level).is('Bachelor Degree')||(edu_level).is('Master Degree')||(edu_level).is('Doctoral Degree')"] in [text name="edu_field"][/conditional].

[checklist name="employment_hx" value="Employment History"] [conditional field="employment_hx" condition="(employment_hx).is('Employment History')"] [textarea name="employment_hx _de" memo="enter details of Employment History" cols="30" rows="3"][/conditional]




MENTAL STATUS EXAM

Appearance: [select name="age_group" value="a young adult|a middle-aged|an elderly|an adolescent|a school-aged"] [conditional field="title" condition="(title).is ('Mr.')"]male[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]female[/conditional], looked [select name="age_appearance" value="like|older  than|younger than"] [conditional field="title" condition="(title).is ('Mr.')"]his[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]her[/conditional] stated age. [conditional field="title" condition="(title).is ('Mr.')"]He[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]She[/conditional] [select name="hair_type" value="was bald|had thining|had close-cropped|had short|had long|had shoulder lengthed|had crew cut|had straight|had curly|had wavy|had frizzy|had pony-tailed|had pig-tailed|had afro|had relaxed|had dreadlocks|had unevenly cut|had stiff|had greasy|had dry|had matted"] [conditional field="hair_type" condition="(hair_type).is('had thining')||(hair_type).is('had close-cropped') ||(hair_type).is('had short')||(hair_type).is('had long')||(hair_type).is('had shoulder lengthed')||(hair_type).is('had crew cut')||(hair_type).is('had straight')||(hair_type).is('had curly')||(hair_type).is('had wavy')||(hair_type).is('had frizzy')||(hair_type).is('had pony-tailed')||(hair_type).is('had pig-tailed')||(hair_type).is('had afro')||(hair_type).is('had relaxed')||(hair_type).is('had dreadlocks')||(hair_type).is('had unevenly cut')||(hair_type).is('had stiff')||(hair_type).is('had greasy')|| (hair_type).is('had dry')||(hair_type).is('had matted')"]hair[/conditional] [conditional field="title" condition="(title).is ('Mr.')"]with [select name="beard" value="clean shaven|neatly trimmed|long and scraggly|goatee|unshaven"] beard[/conditional]. [conditional field="title" condition="(title).is ('Mr.')"]He had[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]She had[/conditional] [select name="body_type" value="thin|cachectic|lean|frail|underweight|average|muscular|husky|stocky|overweight|obese"] body-built with [select name="stature" value="average|tall|short"] stature. [conditional field="title" condition="(title).is ('Mr.')"]He was[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]She was[/conditional] [select name="clothes_status" value="appropriately dressed|casually dressed|professionally dressed| immaculately dressed|fashionably dressed|ill-fitting dressed|outdated dressed|flamboyantly dressed|sexually provocative dressed|dirtly dressed"]; wearing [text name="clothes" size="18"]. During the interview, the patient [select name="movement" value="had no abnormal movements|was fidgety|was bobbing knee|was restless|was jittery|was wringing hands|was motionless|was rigid|was slumped|was lip smacking|was lip puckering"].
Behaviour: [conditional field="title" condition="(title).is ('Mr.')"]He was[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]She was[/conditional] [select name="behaviour" value="calm|restless|agitated|retarded|peculiar|impulsive"], [select name="interactivity" value="interactive|withdrawan"] with [select name="eye-contact" value="good|poor|intense|avoidant|fleeting"] eye-to-eye contact.
Attitude: [conditional field="title" condition="(title).is ('Mr.')"]He was[/conditional][conditional field="title" condition="(title).is('Ms.')||(title).is('Mrs.')"]She was[/conditional] [select name= "attitude" value="cooperative|hostile|over-friendly| guarded|evasive|minimizing|suspicious|apathetic|easily distracted|focused|defensive|demanding|seductive"]; [text name="attitude_ex" size="18"].
Speech: [select name="speech" value="spontaneous|induced|mute"] [conditional field="speech" condition="(speech).is('spontaneous')||(speech).is('induced')"]with [select name="reaction_time" value="normal reaction time|decreased reaction time|increased reaction time|variable reaction time"], [select name="speech_rate" value="normal rate|slow rate|rapid rate|pressured rate|over-talkative rate|staccato rate"], [select name="speech_volume" value="normal volume|loud volume|soft volume|monotonic volume"] and [select name="speech_rhythm" value="clear rhythm|slurred rhythm|hesitant rhythm|aphasic rhytm"], with [select name="articulation" value="good articulation.|poor articulation"][conditional field="articulation" condition="(articulation).is('poor articulation')"]; [text name="articulation" size="18"].[/conditional] [/conditional]
Mood & Affect: stated as “[text name="mood" size="8"]” with [select name="affect_qual" value="appropriate|calm|pleseant|relaxed|normal|friendly|comfortable|unremarkable|cheerful|bright|peppy|self-satisfied|silly|giggly|grandiose|euphoric|elated|exalted|sad|gloomy|sullen|depressed|pessimistic|morose|hopeless|discourged|anxious|worried|tense|nervious|apprehensive|frightened|terrified|paranoid|angry|irritable|disdainful|bitter|arrogant|defensive|sarcastic|annoyed|furious|enraged|hostile|indifferent|shallow|superficial|cool|distant|apathetic|aloof|dull|vacant|affectless|uninterested|cynical"], [select name="affect_range" value="normal ranged|constricted|blunted|flattened"] and [select name="affect_congruence" value="congruent|incongruent"] affect.
Thought process: [text name="TP" size="45"].
Thought content: [text name="TC" size="45"].
Perception: [select name="perc" value="no hallucinatory|hallucinatory"] attitude was noticed during the interview[conditional field="perc" condition="(perc).is('no hallucinatory')"].[/conditional][conditional field="perc" condition="(perc).is('hallucinatory')"]; [text name="mse_hall" size="20"].[/conditional]
Cognition: [text name="Cog" size="60"].
Insight: [select name="insight" value="insighful|partial|absent"].
Judgment: [select name="judgement" value="good|poor"].



Provisional diagnosis:
[textarea name="prov_dx" cols="30" rows="3"]

Diffrential diagnoses:
[textarea name="ddx" cols="30" rows="3"]


Plan as discussed with Dr [text name="MRP" size="15"]:
[textarea name="plan" cols="30" rows="3"]
