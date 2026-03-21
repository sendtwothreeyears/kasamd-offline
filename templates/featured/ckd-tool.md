# Chronic Kidney Disease – Primary Care Decision Tool

**Category:** Featured
**Source:** https://www.soapnote.org/featured/ckd-tool/

---

Chronic Kidney Disease - Primary Care Decision Tool
[checkbox memo="display/hide caution" name="caution" value=""][conditional field="caution" condition="(caution).isNot('')"]Caution: This decision tool is not intended to manage CKD patients on dialysis. The large number of medications and the high frequency of lab testing for patients with Chronic Kidney Disease can be a large burden supported by limited evidence. For this reason, this decision tool contains recommendations that are consistent with current guidelines (as of February 2018), but are generally biased toward fewer interventions and tests. In addition, for testing to fit into a workable clinic follow-up plan, testing was arranged into quarterly, semi-annual, and yearly recommendations. More frequent testing and follow up may be required. Finally, referral to a nephrologist is necessary for patients with CKD Stage 4 or 5 and is recommended for patients at earlier stages of the disease.[/conditional]

PART A: RISK ASSESSMENT
1. Stage of Chronic Kidney Disease
GFR....................Stage
90 and higher..........Stage 1
60 to 89...............Stage 2
45 to 59...............Stage 3a
30 to 44...............Stage 3b
15 to 29...............Stage 4
0 to 14................Stage 5
Stage --> [select name="Q1" value="Stage 1|Stage 2|Stage 3a|Stage 3b|Stage 4|Stage 5"]

2. Urine Microalbumin Level
Albuminuria............Level
less than 30 mg/g......A1 - normal
30 to 300 mg/g.........A2 - moderately increased
greater than 300 mg/g..A3 - severely increased
Urine Microalbumin Level --> [select name="Q2" value="A1|A2|A3"]

RISK ASSESSMENT AND SCREENING RECOMMENDATIONS:
[conditional field="Q1|Q2" condition="(Q1).is('Stage 1')&&(Q2).is('A1')"]CKD 1 A1 - Low risk. Check serum creatinine and urine albumin every year.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 1')&&(Q2).is('A2')"CKD 1 A2 - Moderately increased risk. Check serum creatinine and urine albumin every year.][/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 1')&&(Q2).is('A3')"]CKD 1 A3 - High risk. Check serum creatinine and urine albumin every 6 months.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 2')&&(Q2).is('A1')"]CKD 2 A1 - Low risk Check serum creatinine and urine albumin every year.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 2')&&(Q2).is('A2')"]CKD 2 A2 - Moderately increased risk Check serum creatinine and urine albumin every year.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 2')&&(Q2).is('A3')"]CKD 2 A3 - High risk Check serum creatinine and urine albumin every 6 months.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 3a')&&(Q2).is('A1')"]CKD 3a A1 - Moderately increased risk Refer to registered dietician. Check serum creatinine, ionized calcium, phosphate, PTH, bicarbonate, hemoglobin and urine albumin every year. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 3a')&&(Q2).is('A2')"]CKD 3a A2 - High risk Refer to registered dietician. Check serum creatinine and urine albumin every 6 months. Check serum ionized calcium, phosphate, PTH, bicarbonate, 25(OH)D level, and hemoglobin every year. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 3a')&&(Q2).is('A3')"]CKD 3a A3 - Very high risk Refer to registered dietician. Check serum creatinine and urine albumin every 3 months. Check serum ionized calcium, phosphate, and bicarbonate every 6 months. Check hemoglobin, 25(OH)D level, and PTH every year. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 3b')&&(Q2).is('A1')"]CKD 3b A1 - High risk Refer to registered dietician. Check serum creatinine and hemoglobin and urine albumin every 6 months. Check serum ionized calcium, phosphate, bicarbonate, 25(OH)D level, and PTH every year. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 3b')&&(Q2).is('A2')"]CKD 3b A2 - Very high risk Refer to registered dietician. Check serum creatinine and urine albumin every 3 months. Check serum ionized calcium, phosphate, bicarbonate, and hemoglobin every 6 months. Check PTH and 25(OH)D level every year. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 3b')&&(Q2).is('A3')"]CKD 3b A3 - Very high risk Refer to registered dietician. Check serum creatinine and urine albumin every 3 months. Check serum ionized calcium, phosphate, bicarbonate, and hemoglobin every 6 months. Check PTH and 25(OH)D level every year. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 4')&&(Q2).is('A1')"]CKD 4 A1 - Very high risk Refer to nephrology and registered dietician. Check serum creatinine, ionized calcium, phosphate, bicarbonate, and urine albumin every 3 months. Check PTH and hemoglobin every 6 months. Check 25(OH)D level yearly.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 4')&&(Q2).is('A2')"]CKD 4 A2 - Very high risk Refer to nephrology and registered dietician. Check serum creatinine, ionized calcium, phosphate, PTH, bicarbonate, and urine albumin every 3 months. Check PTH and hemoglobin every 6 months. Check 25(OH)D level yearly.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 4')&&(Q2).is('A3')"]CKD 4 A3 - Very high risk Refer to nephrology and registered dietician. Check serum creatinine, ionized calcium, phosphate, PTH, bicarboante, and urine albumin every 3 months. Check PTH and hemoglobin every 6 months. Check 25(OH)D level yearly.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 5')&&(Q2).is('A1')"]CKD 5 A1 - Very high risk Refer to nephrology and registered dietician. Check serum creatinine, ionized calcium, phosphate, PTH, bicarbonate, and urine albumin every 3 months. Check hemoglobin every 6 months. Check 25(OH)D level yearly.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 5')&&(Q2).is('A2')"]CKD 5 A2 - Very high risk Refer to nephrology and registered dietician. Check serum creatinine, ionized calcium, phosphate, PTH, bicarbonate, and urine albumin every 3 months. Check hemoglobin every 6 months. Check 25(OH)D level yearly.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Stage 5')&&(Q2).is('A3')"]CKD 5 A3 - Very high risk Refer to nephrology and registered dietician. Check serum creatinine, ionized calcium, phosphate, PTH, bicarbonate, and urine albumin every 3 months. Check hemoglobin every 6 months. Check 25(OH)D level yearly.[/conditional]

PART B: TREATMENT SUGGESTIONS
1. Gender --> [select name="Q3" value="male|female"]

2. [conditional field="Q3" condition="(Q3).is('male')"]Goal hemoglobin level for men is 13.5 mg/dL and above.[/conditional][conditional field="Q3" condition="(Q3).is('female')"]Goal hemoglobin level for women is 12 mg/dL and above.[/conditional]
Hemoglobin Level --> [select name="Q4" value="not tested|At Goal|Low"]

3. Goal bicarbonate level is 22 mmol/L and above
Bicarbonate Level --> [select name="Q5" value="not tested|At Goal|Low"]

4. Goal blood pressure is below 130/80
Blood Pressure --> [select name="Q6" value="not tested|At Goal|High"]

5. Calcium level
Serum Total Calcium (CKD I and II)
Above 9.4 mg/dL.........High
7.6 to 9.4 mg/dL........At Goal
Less than 7.6 mg/dL.....Low

Serum Ionized Calcium (CKD III, IV, and V)
Above 5.25 mg/dL........High
4.65 to 5.25 mg/dL......At Goal
Less than 4.65..........Low

Calcium level --> [select name="Q7" value="not tested|High|At Goal|Low"]

6. Phosphate level
Above 4.5 mg/dL.........High
4.5 mg/dL and lower.....At Goal
Phosphate level --> [select name="Q8" value="not tested|High|At Goal"]

7. Intact Parathyroid Hormone (iPTH) Level (the upper bounds of acceptable is 3 times the upper limit of your lab's normal range)
200 pg/mL...............High
less than 200 pg/mL.....At Goal
Intact Parathyroid Hormone --> [select name="Q9" value="not tested|High|At Goal"]

8. 25(OH)D (Vitamin D) Level (A test in the last 6-12 months is needed)
30 mg/mL and above......At Goal
Less than 30 mg/mL......Low 25(OH)D (Vitamin D)
Level --> [select name="Q10" value="not tested|At Goal|Low"]

TREATMENT SUGGESTIONS: [conditional field="Q4" condition="(Q4).is('At Goal')"]
[textarea]
Anemia is NOT present. No change in therapy indicated. Continue ongoing iron supplementation if present, but monitor ferritin to avoid iron overload.[/textarea][/conditional][conditional field="Q4" condition="(Q4).is('Low')"]
[textarea]
Anemia is present. Additional evaluation for other anemia causes: B12/folate hemoccult/FIT/colonoscopy Baseline Labs for anemia of CKD: Ferritin; iron studies (Fe, % Sat, TIBC); CBC with differential. If ferritin/iron studies are low --> Start oral iron therapy, i.e. Ferrous Sulfate (FeSO4) 325mg QD to TID. Docusate 100mg BID as needed to reduce constipation. Monitor ferritin to avoid iron overload. If Hb < 9 with symptoms unresponsive to treatment--> IV iron/blood transfusion/erythropoiesis stimulating agents.[/textarea][/conditional][conditional field="Q5" condition="(Q5).is('At Goal')"]
[textarea]
Acidosis is controlled. Continue maintenance therapy if present, i.e. sodium bicarbonate 325-650 mg (1 to 2 tabs) TID to QID.[/textarea][/conditional][conditional field="Q5" condition="(Q5).is('Low')"]
[textarea]
Acidosis is NOT controlled. Sodium bicarbonate 325-650 mg (1 to 2 tabs) TID to QID.[/textarea]][/conditional][conditional field="Q6" condition="(Q6).is('At Goal')"]
[textarea]
Hypertension is controlled. Continue current therapy (ACE/ARB is first line).[/textarea][/conditional][conditional field="Q5" condition="(Q6).is('High')"]
[textarea]
Hypertension is uncontrolled. Increase ACE/ARB dosage (monitor potassium) Add additional agent to lower blood pressure to goal less than 130/80.[/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('not tested')||(Q8).is('not tested')||(Q9).is('not tested')||(Q10).is('not tested')"]
[textarea]
Calcium, Phosphate, iPTH, and Vitamin D levels are all needed to address Mineral and Bone Disorder of Chronic Kidney Disease. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('At Goal')&&(Q9).is('At Goal')&&(Q10).is('At Goal')"]
[textarea]
Hypercalcemia. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol, vitamin D, and calcium-based phosphate binders. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('At Goal')&&(Q9).is('At Goal')&&(Q10).is('Low')"]
[textarea]
Hypercalcemia with low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol, vitamin D, and calcium-based phosphate binders. Although vitamin D is low, supplementing this vitamin could harmfully increase calcium level. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('At Goal')&&(Q9).is('High')&&(Q10).is('At Goal')"]
[textarea]
Hypercalcemia with elevated parathyroid hormone. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol and calcium-based phosphate binders. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('At Goal')&&(Q9).is('High')&&(Q10).is('Low')"]
[textarea]
Hypercalcemia with elevated parathyroid hormone and low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol and calcium-based phosphate binders. Although vitamin D is low, supplementing this vitamin could harmfully increase calcium level. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('High')&&(Q9).is('At Goal')&&(Q10).is('At Goal')"]
[textarea]
Hypercalcemia and hyperphosphatemia. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol and calcium-based phosphate binders. Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('High')&&(Q9).is('At Goal')&&(Q10).is('Low')"]
[textarea]
Hypercalcemia and hyperphosphatemia with low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol and calcium-based phosphate binders. Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. Although vitamin D is low, supplementing this vitamin could harmfully increase calcium level. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('High')&&(Q9).is('High')&&(Q10).is('At Goal')"]
[textarea]
Hypercalcemia and hyperphosphatemia with elevated parathyroid hormone. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol and calcium-based phosphate binders. Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('High')&&(Q8).is('High')&&(Q9).is('High')&&(Q10).is('Low')"]
[textarea]
Hypercalcemia and hyperphosphatemia with elevated parathyroid hormone and low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Decrease calcium by holding calcitriol and calcium-based phosphate binders. Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. Although vitamin D is low, supplementing this vitamin could harmfully increase calcium level. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('At Goal')&&(Q9).is('At Goal')&&(Q10).is('At Goal')"]
[textarea]
Phosphate, calcium, iPTH, and vitamin D are all at goal. Diet: Limit dietary phosphate to 900 mg/day Continue current medications. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('At Goal')&&(Q9).is('At Goal')&&(Q10).is('Low')"]
[textarea]
Low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Increase vitamin D with 800 units of vitamin D3 daily. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('At Goal')&&(Q9).is('High')&&(Q10).is('At Goal')"]
[textarea]
Elevated parathyroid hormone. Diet: Limit dietary phosphate to 900 mg/day Reduce iPTH with calcitriol 0.25 mcg three times per week. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('At Goal')&&(Q9).is('High')&&(Q10).is('Low')"]
[textarea]
Elevated parathyroid hormone and low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Reduce iPTH and increase vitamin D with 800 units of vitamin D3 daily. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('high')&&(Q9).is('At Goal')&&(Q10).is('At Goal')"]
[textarea]
Hyperphosphatemia. Diet: Limit dietary phosphate to 900 mg/day Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('High')&&(Q9).is('At Goal')&&(Q10).is('Low')"]
[textarea]
Hyperphosphatemia with low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. Although vitamin D is low, supplementing this vitamin is not advised when phosphate is high. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('High')&&(Q9).is('High')&&(Q10).is('At Goal')"]
[textarea]
Hyperphosphatemia with elevated parathyroid hormone. Diet: Limit dietary phosphate to 900 mg/day Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. Calcitriol should not be given because phosphate is high. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('At Goal')&&(Q8).is('High')&&(Q9).is('High')&&(Q10).is('Low')"]
[textarea]
Hyperphosphatemia with elevated parathyroid hormone and low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. Although vitamin D is low and PTH is low, calcitriol and vitamin D supplementation is not advised when phosphate is high. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('At Goal')&&(Q9).is('At Goal')&&(Q10).is('At Goal')"]
[textarea]
Hypocalcemia. Diet: Limit dietary phosphate to 900 mg/day Calcium supplementation may lead to hypercalcemia and is usually reserved for cases of symptomatic hypocalcemia. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('At Goal')&&(Q9).is('At Goal')&&(Q10).is('Low')"]
[textarea]
Hypocalcemia with low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Calcium supplementation may lead to hypercalcemia and is usually reserved for cases of symptomatic hypocalcemia. Increase calcium and vitamin D with 800 units of Vitamin D3 daily. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('At Goal')&&(Q9).is('High')&&(Q10).is('At Goal')"]
[textarea]
Hypocalcemia with elevated parathyroid hormone. Diet: Limit dietary phosphate to 900 mg/day Reduce iPTH and increase calcium with calcitriol 0.25 mcg three times per week. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('At Goal')&&(Q9).is('High')&&(Q10).is('Low')"]
[textarea]
Hypocalcemia with elevated parathyroid hormone and low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Reduce iPTH, increase vitamin D, and increase calcium with 800 units of Vitamin D3 daily. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('High')&&(Q9).is('At Goal')&&(Q10).is('At Goal')"]
[textarea]
Hypocalcemia and hyperphosphatemia. Diet: Limit dietary phosphate to 900 mg/day Calcium supplementation may lead to hypercalcemia and is usually reserved for cases of symptomatic hypocalcemia. Sevelamer (Renagel) 800-1600 mg TID may be used to decrease phosphate. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('High')&&(Q9).is('At Goal')&&(Q10).is('Low')"]
[textarea]
Hypocalcemia and hyperphosphatemia with low Vitamin D. Diet: Limit dietary phosphate to 900 mg/day Calcium supplementation may lead to hypercalcemia and is usually reserved for cases of symptomatic hypocalcemia. Reduce iPTH, increase vitamin D, and increase calcium with 800 units of Vitamin D3 daily. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('High')&&(Q9).is('High')&&(Q10).is('At Goal')"]
[textarea]
Hypocalcemia and hyperphosphatemia with elevated parathyroid hormone. Diet: Limit dietary phosphate to 900 mg/day Calcium supplementation may lead to hypercalcemia and is usually reserved for cases of symptomatic hypocalcemia. Reduce iPTH and increase calcium with calcitriol 0.25 mcg three times per week. [/textarea][/conditional][conditional field="Q7|Q8|Q9|Q10" condition="(Q7).is('Low')&&(Q8).is('High')&&(Q9).is('High')&&(Q10).is('Low')"]
[textarea]
Hypocalcemia and hyperphosphatemia with elevated parathyroid hormone and low vitamin D. Diet: Limit dietary phosphate to 900 mg/day Calcium supplementation may lead to hypercalcemia and is usually reserved for cases of symptomatic hypocalcemia. Reduce iPTH, increase vitamin D, and increase calcium with 800 units of Vitamin D3 daily. [/textarea][/conditional]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
references:
[link memo="#1" url="http://www.kisupplements.org/article/S2157-1716(17)30001-1/fulltext"] KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of Chronic Kidney Disease–Mineral and Bone Disorder (CKD-MBD) Kidney International Supplements, Volume 7, Issue 1, 1 - 59
[link memo="#2" url="http://www.kisupplements.org/article/S2157-1716(15)31070-4/fulltext"] Chapter 1: Diagnosis and evaluation of anemia in CKD Kidney International Supplements, Volume 2, Issue 4, 288 - 291
[link memo="#3" url="http://www.kisupplements.org/article/S2157-1716(15)31103-5/fulltext"] Chapter 3: Management of progression and complications of CKD Kidney International Supplements, Volume 3, Issue 1, 73 - 90[/conditional]
