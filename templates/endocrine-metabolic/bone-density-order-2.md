# Bone Density Order

**Category:** Endocrine, Nutrition & Obesity
**Source:** https://www.soapnote.org/endocrine-metabolic/bone-density-order-2/

---

[comment memo="Patients who meet at least 1 of these criteria:\n\nWomen whose physician or qualified practitioner determines them estrogen-deficient and at clinical osteoporosis risk\nIndividuals with vertebral abnormalities\nIndividuals getting (or expecting to get) glucocorticoid therapy for more than 3 months\nIndividuals with primary hyperparathyroidism\nIndividuals monitored to assess FDA-approved osteoporosis drug therapy response"]
[text name="Age" memo="age" memo_size="small" size="5"] year old [select name="Race" value="White|African American"] [select name="Gender" memo="gender" memo_size="small" value="Male|Female"][conditional field="Gender|Age" condition="((Gender).is('Female'))&&((Age).isGreaterOrEqual('30')&&(Age).isLessOrEqual('64'))"] - [select name="wellvisitAPmenopause" value="premenopausal|perimenopausal|postmenopausal"][/conditional]

[select name="BoneDensity" value="77080 — Dual-energy X-ray absorptiometry (DXA), bone density study, 1 or more sites; axial skeleton (eg, hips, pelvis, spine)|77081 -  Dual-energy X-ray absorptiometry (DXA), bone density study, 1 or more sites; appendicular skeleton (peripheral) (eg, radius, wrist, heel)|77085 — Dual-energy X-ray absorptiometry (DXA), bone density study, 1 or more sites; axial skeleton (eg, hips, pelvis, spine), including vertebral fracture assessment"]

[checklist name="Diagnosis" value="Osteopenia M89.9|Osteoporosis M81.0|Screening for osteoporosis Z13.820|Asymptomatic menopausal state Z78.0|Long term use of systemic steroids Z79.52|Personal history of healed osteoporosis fracture Z87.310|Primary hyperparathyroidism E21.0|Hyperparathyroidism, unspecific E21.3|Asymptomatic postprocedural ovarian failure E89.40|Symptomatic postprocedural ovarian failure E89.41"]
