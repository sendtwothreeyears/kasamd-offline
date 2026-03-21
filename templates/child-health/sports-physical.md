# Sports Pre-Participation Examination

**Category:** Complete Note
**Source:** http://www.soapnote.org/child-health/sports-physical/

---

[checkbox memo="display/hide demographics" name="demographics" value=""][conditional field="demographics" condition="(demographics).isNot('')"]
Name: [text size=40 default="Patient Name"]
Date of Birth: [date][/conditional]

[checkbox memo="display/hide history section" name="history" value=""][link url="//soapnote.org/child-health/sports-history/" memo="history questionnaire for athlete or guardian to complete separately"]
[conditional field="history" condition="(history).isNot('')"] 
HISTORY
[select name="Q1" value="NO|YES|DO NOT KNOW"]  <-- 1. Has anyone in the athlete’s family died suddenly before the age of 50 years?
[select name="Q2" value="NO|YES|DO NOT KNOW"]  <-- 2. Has the athlete ever passed out during exercise or stopped exercising because of dizziness or chest pain?
[select name="Q3" value="NO|YES|DO NOT KNOW"]  <-- 3. Does the athlete have asthma (wheezing), hay fever, other allergies, or carry an EPI pen?
[select name="Q4" value="NO|YES|DO NOT KNOW"]  <-- 4. Is the athlete allergic to any medications or bee stings?
[select name="Q5" value="NO|YES|DO NOT KNOW"]  <-- 5. Has the athlete ever broken a bone, had to wear a cast, or had an injury to any joint?
[select name="Q6" value="NO|YES|DO NOT KNOW"]  <-- 6. Has the athlete ever had a head injury or concussion?
[select name="Q7" value="NO|YES|DO NOT KNOW"]  <-- 7. Has the athlete ever had a hit or blow to the head that caused confusion, memory problems, or prolonged headache?
[select name="Q8" value="NO|YES|DO NOT KNOW"]  <-- 8. Has the athlete ever suffered a heat‐related illness (heat stroke)?
[select name="Q9" value="NO|YES|DO NOT KNOW"]  <-- 9. Does the athlete have a chronic illness or see a physician regularly for any particular problem?
[select name="Q10" value="NO|YES|DO NOT KNOW"]  <-- 10. Does the athlete take any prescribed medicine, herbs or nutritional supplements?
[select name="Q11" value="NO|YES|DO NOT KNOW"]  <-- 11. Does the athlete have only one of any paired organ (eyes, kidneys, testicles, ovaries, etc.)?
[select name="Q12" value="NO|YES|DO NOT KNOW"]  <-- 12. Has the athlete ever had prior limitation from sports participation?
[select name="Q13" value="NO|YES|DO NOT KNOW"]  <-- 13. Has the athlete had any episodes of shortness of breath, palpitations, history of rheumatic fever or tiring easily?
[select name="Q14" value="NO|YES|DO NOT KNOW"]  <-- 14. Has the athlete ever been diagnosed with a heart murmur or heart condition or hypertension?
[select name="Q15" value="NO|YES|DO NOT KNOW"]  <-- 15. Is there a history of young people in the athlete’s family who have had heart disease: examples are cardiomyopathy, abnormal heart rhythms, long QT or Marfan's syndrome? 
[select name="Q16" value="NO|YES|DO NOT KNOW"]  <-- 16. Has the athlete ever been hospitalized overnight or had surgery?
[select name="Q17" value="NO|YES|DO NOT KNOW"]  <-- 17. Does the athlete lose weight regularly to meet the requirements for your sport?
[select name="Q18" value="NO|YES|DO NOT KNOW"]  <-- 18. Does the athlete have anything he or she wants to discuss with the physician?
[select name="Q19" value="NO|YES|DO NOT KNOW"]  <-- 19. Does the athlete cough, wheeze, or have trouble breathing during or after activity?
[select name="Q20" value="NO|YES|DO NOT KNOW"]  <-- 20. Is the athlete unhappy with his or her weight?
[textarea default="Provider Comments on Questionnaire Items"] [/conditional]

EXAMINATION
[checkbox memo="display/hide vitals section" name="vitals" value=""][conditional field="vitals" condition="(vitals).isNot('')"]
VITALS
Weight: [text name="wt"] lbs
Height: [text name="ht"] inches
BMI: [calc memo="calculated - will display in output" value="score=((wt)*(703)/((ht)*(ht))).toFixed(1)"]
Blood Pressure: [text]
Heart Rate: [text][/conditional]
[checkbox memo="display/hide vision section" name="vision" value=""][conditional field="vision" condition="(vision).isNot('')"]
VISION
Right 20/[text] - Left 20/[text]  - [select value="Uncorrected|Corrected"][/conditional]
[select name="E1" value="normal|abnormal"] <-- Appearance[conditional field="E1" condition="(E1).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E2" value="normal|abnormal"] <-- Eyes / Ears / Nose / Throat[conditional field="E2" condition="(E2).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E3" value="normal|abnormal"] <-- Lymph Nodes[conditional field="E3" condition="(E3).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E4" value="normal|abnormal"] <-- Heart[conditional field="E4" condition="(E4).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E5" value="normal|abnormal"] <-- Lungs[conditional field="E5" condition="(E5).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E6" value="normal|abnormal"] <-- Abdomen[conditional field="E6" condition="(E6).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E7" value="normal|abnormal"] <-- Skin[conditional field="E7" condition="(E7).is('abnormal')"]
[text size=40 default="details..."][/conditional]
MUSCULOSKELETAL
[select name="E8" value="normal|abnormal"] <-- Stand facing examiner (check AC joints, general habitus)[conditional field="E8" condition="(E8).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E9" value="normal|abnormal"] <-- Look at ceiling, floor, over shoulders, touch ears to shoulders (check cervical spine motion)[conditional field="E9" condition="(E9).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E10" value="normal|abnormal"] <-- Shrug shoulders against resistance (check trapezius strength)[conditional field="E10" condition="(E10).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E11" value="normal|abnormal"] <-- Abduct shoulders 90 degrees, hold against resistance (check deltoid strength)[conditional field="E11" condition="(E11).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E12" value="normal|abnormal"] <-- Externally rotate arms fully (check shoulder motion)[conditional field="E12" condition="(E12).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E13" value="normal|abnormal"] <-- Flex and extend elbows (check elbow motion)[conditional field="E13" condition="(E13).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E14" value="normal|abnormal"] <-- Arms at sides, elbows 90 degrees flexed, pronate/supinate wrists[conditional field="E14" condition="(E14).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E15" value="normal|abnormal"] <-- Spread fingers, make fist (check elbow and wrist motion)[conditional field="E15" condition="(E15).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E16" value="normal|abnormal"] <-- Contract quadriceps, relax quadriceps (check symmetry and knee/ankle effusion)[conditional field="E16" condition="(E16).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E17" value="normal|abnormal"] <-- “Duck walk” 4 steps away from examiner (check hip, knee and ankle motion)[conditional field="E17" condition="(E17).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E18" value="normal|abnormal"] <-- Stand with back to examiner (check scoliosis)[conditional field="E18" condition="(E18).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E19" value="normal|abnormal"] <-- Knees straight, touch toes (check scoliosis, hip motion, hamstrings)[conditional field="E19" condition="(E19).is('abnormal')"]
[text size=40 default="details..."][/conditional]
[select name="E20" value="normal|abnormal"] <-- Rise up on heels, then toes (check calf symmetry, leg strength)[conditional field="E20" condition="(E20).is('abnormal')"]
[text size=40 default="details..."][/conditional]

ASSESSMENT:
[select name="A1" value="Cleared|Cleared after completing evaluation|Not Cleared"][conditional field="A1" condition="(A1).isNot('Cleared')"]
[text size=40 default="details..."][/conditional]

RECOMMENDATIONS:
[textarea default="Age appropriate anticipatory guidance provided in regards to high risk adolescent issues.   Guidance on common and less common concerns including risky behaviors (texting while driving), drug and alcohol use, obesity, eating disorders, depression and suicidality, bullying (especially online), sexual activity and contraception/STI prevention."]

[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
Reference: [link memo="#1" url="https://www.ncbi.nlm.nih.gov/pubmed/26371570"] Mirabelli MH, Devine MJ, Singh J, Mendoza M. The Preparticipation Sports Evaluation. Am Fam Physician. 2015 Sep 1;92(5):371-6.[/conditional]
