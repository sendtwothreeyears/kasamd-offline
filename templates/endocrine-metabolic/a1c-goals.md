# Personalized Hemoglobin A1c Goals

**Category:** Psychiatry & Psychology
**Source:** https://www.soapnote.org/endocrine-metabolic/a1c-goals/

---

Personalized Hemoglobin A1c Goals:  
Age --> [select name="agegroup" value="Less than 65|65 or older"]
Diabetes --> [select name="diabetes" value="Yes|No"]
[conditional field="diabetes|agegroup" condition="(diabetes).is('Yes')&&(agegroup).is('65 or older')"]Health --> [select name="health" value="Good|Significant comorbidities|Poor"][/conditional]
Goal --> [conditional field="diabetes"  condition="(diabetes).is('No')"]Less than 5.7%[/conditional][conditional field="agegroup|diabetes"  condition="(agegroup).is('Less than 65')&&(diabetes).is('Yes')"]Less than 7.0%[/conditional][conditional field="agegroup|diabetes|health"  condition="(agegroup).is('65 or older')&&(diabetes).is('Yes')&&(health).is('Good')"]Less than 7.5%, fasting and preprandial blood sugars 140-160 mg/dL[/conditional][conditional field="agegroup|diabetes|health"  condition="(agegroup).is('65 or older')&&(diabetes).is('Yes')&&(health).is('Significant comorbidities')"]Less than 8%, fasting and preprandial blood sugars 160-170 mg/dL[/conditional][conditional field="agegroup|diabetes|health"  condition="(agegroup).is('65 or older')&&(diabetes).is('Yes')&&(health).is('Poor')"]Less than 8.5%, average blood sugars ~200 mg/dL[/conditional]
