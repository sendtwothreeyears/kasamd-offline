# DM clinic visit

**Category:** Pediatrics
**Source:** https://www.soapnote.org/child-health/dm-clinic-visit-5/

---

[comment memo="fill out"]
Pediatric Diabetes Clinic Note
Consultant: [textarea cols=40 rows=1 default=" Dr."]
Date: [date] (M-D-Y)
Patient accompanied by: [select name="Q1" value="mother|father|mother,father"][text default="_"]
[comment memo="fill out"]
___________________________________
Chief Complaint/Reason for visit: [textarea cols=40 rows=1 default=" Diabetes"]
In Summary:
This is a [textarea cols=5 rows=1 default="_"] [select value="y/o|m/o"] [select value="F|M"] , with [select value="Type 1 diabetes | Type 2 diabetes | diabetes"]. [select value="He|She"] was diagnosed on [textarea cols=60 rows=1 default="_, on MDI insulin regimen with iCGM, with excellent/good/fair/poor glycemic control."].
Problem list:
1. Diabetes, [select value="Type 1|Type 2"]
[textarea cols=60 rows=1].The patient [select value="is presenting to our clinic for follow-up of|was referred to our clinic for evaluation of"] [textarea cols=60 rows=1 default=" diabetes. Last seen on _"].
[comment memo="may skip text"]
___________________________________
HPI:
-Family diabetes concerns today are:
[textarea cols=60 rows=3 default="1.
2.
3."].
ROS:[comment memo="fillout"]
[checklist name="99" value="poor appetite/caloric intake|weight loss/poor weight gain|abdominal pain|nausea/vomiting|diarrhea|constipation|polyuria/polydipsia|heat or cold intolerance|skin/hair changes|headache|vision changes|fatigue|fever|arthralgia|rashes|lymphadenopathy"]
Puberty:[comment memo="will disappear"] [select name="Q11" value="Denies new puberty changes|Pubertal"] [conditional field="Q11" condition="(Q11).is('Pubertal')"] [textarea cols=65 rows=1 default="_Menarche at age_. Last menstrual period_."].[checkbox value="denies discharge or Lesion|denies abnormal vaginal bleeding|denies amenorrhea|denies irregular monthly periods"]
[/conditional]___________________________________
INSULIN THERAPY:[comment memo="fillout"]
-Basal insulin ([select value="Lantus/Glargine|Levemir/Detemir|Tresiba/degludec"]) = [textarea cols=5 rows=1 default="_"] units [textarea cols=5 rows=1 default="at _"]
-Bolus insulin ([select value="NovoLog/Aspart|Humalog/Lispro|Apidra/Glulisine|Fiasp"]) = [select name="Q2" value="fixed|ICR"][conditional field="Q2" condition="(Q2).is('fixed')"] [textarea cols=5 rows=1 default=" _"] units premeals [textarea cols=30 rows=1 default="and _ units pre-snacks."]
[/conditional][conditional field="Q2" condition="(Q2).is('ICR')"]: 1 unit per [textarea cols=5 rows=1 default="_"] gram CHO premeals. [textarea cols=30 rows=1 default="Pre-snacks 1unit:_gms."]
[/conditional] ISF: [textarea cols=5 rows=1 default="_"], Target 100 mg/dL. [select value="(using sliding scale)| "]
-TDD = [textarea cols=5 rows=1 default="_"] units/kg/day ([textarea cols=5 rows=1 default="_"]% basal, [textarea cols=5 rows=1 default="_"]%bolus)
[checklist value="Rotates site of insulin injections|Administering all the insulin doses prior to meals|Missing doses"]
[+] Insulin injections are given by [textarea cols=30 rows=1 default="_ patient, mother, _"].
[comment memo="fillout"]
GLYCEMIC CONTROL: [comment memo="fillout"]
TAR [textarea cols=5 rows=1 default="_"]%
TIR [textarea cols=5 rows=1 default="_"]%
TBR [textarea cols=5 rows=1 default="-"]%
Sensor use [textarea cols=5 rows=1 default="-"]% for [textarea cols=5 rows=1 default="14 days"]
GMI: [textarea cols=5 rows=1 default="_"]
Interpretation: [textarea cols=65 rows=4 default="_Persistent hyperglycemia throughout the day/night. Hyperglycemia throughout the day secondary to excessive carb intake and frequent snaking with lack of structured meal schedule"].[checklist value="Significant episodes of hypoglycemia|Recognizes the symptoms of low blood glucose|Need to use glucagon, or episode of seizures due to hypoglycemia|Recurrent DKA"]
[textarea cols=60 rows=1 default="[+] last DKA _ (on diagnosis)"]
DIET: [comment memo="fillout"]
[checklist value="Structured meal schedule| Understands carb counting concepts|Perform carb counting|Frequent snacking|High carb intake|Picky eater|Poor dietary habits"]
EXERCISE: [comment memo="fillout"]
[checklist value="Regular exercise|Participate in sports|Sedentary lifestyle"]
PSYCHOSOCIAL:[comment memo="fillout"]
[x] Lives with [textarea cols=30 rows=1 default="_both parents"].
[x] Diabetes primarycare giver is [textarea cols=30 rows=1 default="_"].
[x] Education/Work structure: [textarea cols=30 rows=2 default="Father works as_, mother works as_ /housewife"].
[x] School: Grade[textarea cols=30 rows=1 default="_"].
[checklist value="Frequent school absences"]
Challenges are: [comment memo="will disappear"][checkbox value="Family conflict|Poor parenting |Diabetes burnout|Anxiety or Depression|Fear of hypoglycemia|Poor socioeconomic status|Adolescent rebellion"]
FAMILY HX
-[checklist value="FHx of Diabetes|FHx of autoimmune diseases|FHx of consanguinity"]
DIABETES CARE ASSESSMENT:[comment memo="fillout"]
-[select value="Excellent|Good|Fair|Poor"] adherence to blood glucose monitoring and insulin administration.
-[select value="Excellent|Good|Fair|Poor"] diabetes control.
-[checklist value="recurrent hospitalization due to diabetes"]
___________________________________
PHYSICAL EXAM [textarea cols=60 rows=1 default="( done in presence of _, with patient/guardian permission)"].
[textarea cols=60 rows=2 default="GEN: Awake, alert and oriented. No acute distress. vitals reviewed. Healthy appearing, hydrated and nourished."]
[textarea cols=60 rows=1 default="HEAD: atraumatic, normocephalic."]
[textarea cols=60 rows=2 default="ENT: Moist mucus membranes. Normal eyes, conjunctiva clear. No abnormal eye movement."]
[textarea cols=60 rows=2 default="NECK: Thyroid is normal in size, no goiter. no nodules or tenderness."]
[textarea cols=60 rows=1 default="PULM/CVS: Regular rate, no tachypnea or no increase WOB."]
[textarea cols=60 rows=2 default="ABDOMEN: soft, non-tender, non-distended, _no organomegaly or masses. _no striae."]
[textarea cols=60 rows=3 default="NEURO/MSK:Alert, no focal findings, PERRL, _ optic disc, deep tendon reflexes normal and symmetric, muscle tone and strength normal, gait normal, no tremors.."]
[textarea cols=60 rows=2 default="SKIN: warm, well perfused, no rashes or birth marks, _acanthosis."]
[textarea cols=60 rows=2 default="GU: normal female, no enlarged clitoris. _normal male, testes (Rt: _ml, Lt:_ml. SPL:_cm)."]
[comment memo="fill out"]
Tanner stage:
-T[select value="1|2|3|4|5"] pubic hair
-T[select value="1|2|3|4|5"] [select value="breast|testes"]
[checklist value=" lipohypertrophy at injection/infusion sites"][comment memo="fill out"]Growth parameters:
-Current height Z score: [textarea cols=5 rows=1 default="_"]
-Current weight Z score: [textarea cols=5 rows=1 default="_"]
-Current BMI Z score: [textarea cols=5 rows=1 default="_"]
[textarea cols=60 rows=1 default="-Weight _ percentile, BMI _percentile"]
-Growth velocity:[textarea cols=60 rows=1 default=" _ cm/yr in the last _"]
[textarea cols=60 rows=1 default="-Growth curve description: patient growth following percentiles "]
___________________________________
IMPRESSION:
[comment memo="fill out"][textarea cols=60 rows=2 default="1. Type 1 diabetes (diagnosed on _ , on MDI insulin regimen with iCGM, _ controlled, A1c _%). "]
-[select value="Excellent|Good|Fair|Poor"] glycemic control.
-[select value="Excellent|Good|Fair|Poor"] diabetes self-management care.
-[select value="Excellent|Good|Fair|Poor"] family involvement in the care of diabetes.
[textarea default="_"]
[textarea cols=60 rows=2 default="2. Growth, normal."]
PLAN:[comment memo="skip"]
1. [textarea default="Adjust insulin regimen doses _"]
2. [textarea cols=60 rows=2 default="Labs/investigations:
- DM routine monitoring labs per ADA guidelines"]
[checklist value="TSH/FT4|Thyroid antibodies|celiac screening tTG-IgA|lipid panel|urine A/C ratio|vitamin D/CMP|A1C|retinopathy"]
3. Counseling: diabetes glycemic goals, self-care management.
4. Diabetes multidisciplinary team assessment for today:
[checklist value="Diabetes Educator|Dietitian|Psychologist"]
5. Referral: [textarea cols=8 rows=1 default="none."]
6. Follow up: [textarea cols=20 rows=1 default="in 3-4 months with me."]
___________________________________
Routine monitoring/ surveillance for T1D based on ADA 2022 guidelines:
1. Hypoglycemia assessment [q 3 mo visit] == [select value="done|deferred"] [date]. [textarea cols=20 rows=1 default="(no hypoglycemia)"]
2. Psychosocial assessment [q 3 mo visit] == [select value="done by physician|deferred"] [date]. [textarea cols=20 rows=1 default="(no concerns)"]
3. Growth and puberty [q 3 mo visit] == [select value="done|deferred"] [date]. [textarea cols=20 rows=2 default="(normal growth, _Tanner )"]
4. BP [q 3 mo visit] == [select value="done|deferred"] [date]. [textarea cols=20 rows=1 default="(normal)"]
5. Foot exam [done annually if age >=10 years (or onset of puberty, if earlier) + diabetes for >=5 years] == [select value="not indicated|done"] [textarea cols=20 rows=1 default="_, (normal)"]
6. urine A/C ration [done annually if age >=10 years (or onset of puberty, if earlier) + diabetes for >=5 years] == [select value="not indicated|done"] [textarea cols=20 rows=1 default="_, (normal)"]
7. A1C level [q 3 mo visit] == [date]. [textarea cols=20 rows=1 default="(%)"]
8. lipid profile [done at diagnosis once glycemic control is acheived and age >=2yr. If initial LDL =100, initiate serial testing at age 9-11 years and --> repeat q3 yrs if normal. repeat annually if LDL is abnormal or if glycemic control is poor.] == [select value="done|ordered"] [date]. [textarea cols=20 rows=1 default="(unremarkable)"]
9. thyroid profile [done at diagnosis, then q1-2yrs . ADA suggests that antibodies to TPO and thyroglobulin should be measured at diagnosis.] == [select value="done|ordered"] [date]. [textarea cols=20 rows=1 default="(unremarkable, antibodies _)"]
10. celiac screening (IgA, tTG) [ at diagnosis. Repeat within 2 yrs of dx, then after 5 years, or if GI develop, and more frequently if a first-degree relative has celiac disease] == [select value="done|ordered"] [date]. [textarea cols=20 rows=1 default="(_normal IgA, tTG _)"]
11. retinopathy screening [Done q2hyrs starting at age >=11 years (or onset of puberty, if earlier) + diabetes for 3 -5 years] == [select value="not indicated|done|ordered"] [textarea cols=20 rows=1 default="_, (normal)"]
___________________________________
Counseling:
I have counseled the family extensively on diabetes pathophysiology, importance of adherence to diabetes care, avoidable complications and intensive management strategies, and diabetes management plan outlined above.
