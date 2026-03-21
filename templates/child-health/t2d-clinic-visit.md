# T2D clinic visit

**Category:** Pediatrics
**Source:** https://www.soapnote.org/child-health/t2d-clinic-visit/

---

[comment memo="fill out"]
Pediatric Endocrinology Consultant Addendum
Consultant: [textarea cols=40 rows=1 default="Dr."]
Date: [date] (M-D-Y)
I saw and evaluated the patient on the date of service with the fellow [textarea cols=15 rows=1 default="Dr."]. I was present during the history and exam. I reviewed the pertinent medical records, medications, vital signs, labs, and imaging. I discussed the assessment/plan with fellow/resident, the primary team, and provided counseling for the patient/family.
Patient accompanied by: [select name="Q1" value="mother|father|mother,father"][text default="_"]
[comment memo="fill out"]
Contact info:
#
#
___________________________________
Chief Complaint: [textarea cols=40 rows=1 default="T2D, Obesity"]
[comment memo="fill out"]
In Summary:
This is a [textarea cols=10 rows=1 default="_"] [select value="y/o|m/o"] [select value="F|M"] , [textarea cols=60 rows=1 default="with obesity, and type 2 diabetes"].
The patient [select value="was referred to our clinic for evaluation of|is presenting to diabetes clinic for follow-up for"] [textarea cols=60 rows=1 default="type 2 DM"].
Probelm list:
1.[textarea default="_"]
[comment memo="fillout"]
___________________________________
T2D/Obesity pertinent clinical information:
*Risk factors:
[checklist value="sedentary lifestyle|excess caloric intake|high glycemic index food (sugar-containing beverages)|large portion sizes|fast food|prolonged screen time|shortened sleep duration or irregular sleep schedules|snoring or restless sleep|medication causing weight gain or insulin resistance (steroid, etc)"]
-Family history:
[checklist value="family history of diabetes"][textarea cols=60 rows=1 default=", first-degree relative"]
[checklist value="family history of extreme obesity"][textarea cols=60 rows=1 default=", first-degree relative"]
[checklist value="cardiovascular disease| hypertension|liver or gallbladder disease| respiratory problems (severe asthma or sleep apnea)"], [textarea cols=60 rows=1 default="first-degree relative"]
[textarea cols=60 rows=1 default="-Born FT_, BW: _kg."]
*features of syndromic/genetic obesity:
[checklist value="early-onset obesity (before 5yr)|developmental delay or intellectual disability| vision problems|deafness|history of hypotonia and feeding difficulties during infancy|hyperphagia"]
*BMI: [textarea cols=60 rows=1 default="_ kg/m2. Z score _."]
-BMI Classification
[checklist value=" Underweight:BMI <5th percentile|Healthy weight: BMI ≥5th to <85th percentile|Overweight: BMI ≥85th to <95th percentile|Class I obesity (mild):BMI ≥95th to <120% of the 95th percentile and <35 kg/m2|Class II obesity (extreme): BMI ≥120% to <140% of the 95th percentile or ≥35 kg/m2 (whichever is lower)|Class III obesity (extreme):BMI ≥140% of the 95th percentile or ≥40 kg/m2 (whichever is lower)"]
[link url="https://www.uptodate.com/contents/calculator-body-mass-index-bmi-percentiles-for-females-2-to-20-years?search=pediatric%20obesity&topicRef=5874&source=see_link" memo="Female calculator"][link url="https://www.uptodate.com/contents/calculator-body-mass-index-bmi-percentiles-for-males-2-to-20-years?search=pediatric%20obesity&topicRef=5874&source=see_link" memo="/ Male calculator"]
*Puberty: [select value="prepubertal|pubertal"]
[comment memo="will disappear"] [select name="Q11" value="Denies new puberty changes|Pubertal"] [conditional field="Q11" condition="(Q11).is('Pubertal')"] [textarea cols=65 rows=1 default="_Menarche at age_. Last menstrual period_."].[checkbox value="denies discharge or lesion|denies abnormal vaginal bleeding|denies amenorrhea|denies irregular monthly periods"][/conditional]
-ROS:
[checklist name="99" value="poor appetite/caloric intake|weight loss/poor weight gain|abdominal pain|nausea/vomiting|diarrhea|constipation|polyuria/polydipsia|heat or cold intolerance|skin/hair changes|easy brusing|headache|vision changes|fatigue|fever|arthralgia|rashes|psychytric issues"]
[comment memo="fillout"]
___________________________________
PHYSICAL EXAM Findings [textarea cols=60 rows=1 default="( done in presence of _, with patient/guardian permission)"].
[+][checkbox value="BP within normal for age/sex|High BP for age/sex"]
[link url="https://www.uptodate.com/contents/image?imageKey=PEDS%2F114638&topicKey=PEDS%2F2872&search=hypertension%20screening%20pediatric&source=outline_link&selectedTitle=1~71" memo="BP ranges"]
[checklist value="dysmorphic features|short stature|Red hair|Cushingoid fat distribution|Striae (>1cm)|acne|hirsutism|acanthosis"]
[comment memo="fill out"]
Tanner stage:
-T[select value="1|2|3|4|5"] pubic hair
-T[select value="1|2|3|4|5"] [select value="breast|testes"] [textarea cols=60 rows=2 default="_no clitromegaly, _no micropenis. Rt: _ml, Lt: _ml"]
___________________________________
[comment memo="skip"]
Lab/imaging review and interpretation
[textarea default="none
1.
2.
3. "]
[comment memo="fillour"]
Routine monitoring/ surveillance for T2D - mainly based on ADA 2022 guidelines:
1. BP: [date] (M-D-Y)--[textarea cols=20 rows=1 default="done today"] **done every visit**
2. urine A/C ration: [date] (M-D-Y)--[textarea cols=20 rows=1 default=" ordered, _normal"] **done at diagnosis and annually if normal**
3. Foot exam: [date] (M-D-Y)--[textarea cols=20 rows=1 default=" ordered, _normal"] **done at diagnosis and annually if normal**
4. Retinopathy screening: [date] (M-D-Y)--[textarea cols=20 rows=1 default=" ordered, _normal"] **done at diagnosis and annually if normal**
5. LFT (ALT/ALT): [date] (M-D-Y)--[textarea cols=20 rows=1 default=" ordered, _normal"] **done at diagnosis and annually if normal**
6. OSA symptoms: [date] (M-D-Y)--[textarea cols=20 rows=1 default=" no snoring or apnea"] **done at diagnosis and every visit**
7. PCOS: [date] (M-D-Y)--[textarea cols=20 rows=1 default=" _not menarcheal yet. no PCOS symptoms"] **done at diagnosis and every visit**
8. lipid profile: [date] (M-D-Y)--[textarea cols=20 rows=1 default=" ordered, _normal"] **done at diagnosis and annually if normal**
10. Kidney function (BUN and Cr): [date] (M-D-Y)--[textarea cols=20 rows=1 default="ordered_. normal"]
___________________________________
IMPRESSION:
[comment memo="fillout"]
# T2D,
[textarea default="new onset
A1C is _. on medical therapy"]
#Obesity,
[checklist value="Gradual onset, progressive|Abrupt onset of weight gain|Severe early-onset"]
[textarea default="likely exogenous related to sedentary lifestyle with excess caloric intake. No clinical features to suggest endocrine or genetic/syndromic causes of obesity."]
#Other T2D/Obesity comorbidities:
[checklist value="none|elevated BP reading without diagnosis of hypertension|Hypertension|Hyperlipidemia, hypertriglyceridemia|Elevated LFT/Fatty liver disease|sleep apnea|PCOS"]
[comment memo="skip"]
PLAN:
[textarea default="1-Lifestyle modification: Extensive education about nutritional therapy, healthy diet choices, and importance of physical activity was discussed with the family.
2- Medication: metformin
3- Labs: No further screening indicated at this time.Lipid profile, A1C, CMP, TSH/FT4, Vitamin d. Urine A/CR
4- retinopathy screening  
5- Imaging: none
6- Referral: dietitian for further counseling.
7- Counseling: obesity and associated comorbidities
8- Followup with me in 3 months."]
___________________________________
[textarea default="Counseled family at length about our impression, and explained diagnosis, lab results, and management plan. All questions were fully answered. Family verbalized understanding and agreement with the plan of care."]
