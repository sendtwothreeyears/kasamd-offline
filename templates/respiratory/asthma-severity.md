# Classification of Asthma Severity and Recommendations

**Category:** Pulmonology
**Source:** http://www.soapnote.org:80/respiratory/asthma-severity/

---

This is for patients not currently taking long-term control medication.  [link url="/respiratory/asthma-control/" memo="For patients who are taking long-term control medication, please see this page"]
[select name="Age" value="5 to 11 years|12 years and above"] <-- Age
[conditional field="Age" condition="(Age).is('5 to 11 years')"][select name="ImpSymp1" value="Up to 2 days per week=1|More than 2 days per week, but not daily=10|Daily=100|Throughout the day=1000"] <-- Impairment - Symptoms 
[select name="ImpNA1" value="Up to 2 times per month=1|3 to 4 times per month=10|More than 1 time per week, but not nightly=100|Often 7 times a week=1000"] <-- Impairment - Nighttime awakenings
[select name="ImpSA1" value="Up to 2 days per week=1|More than 2 days per week, but not daily=10|Daily=100|Several times per day=1000"] <-- Impairment - Short-acting beta2-agonist use for symptom control (not prevention of exercise induced bronchospasm)
[select name="ImpNorm1" value="None=1|Minor limitation=10|Some limitation=100|Extremely limited=1000"] <-- Impairment - Interference with normal activity
[select name="ImpLF1" value="Normal FEV1 between exacerbations, FEV1 more than 80% predicted, FEV1 to FVC more than 85%=1|FEV1 80% or more than predicted, FEV1 to FVC more than 80%=10|FEV1 60 to 80% predicted, FEV1 to FVC 75 to 80% predicted=100|FEV1 less than 60% predicted, FEV1 to FVC less than 75% predicted=1000"] <-- Impairment - Lung function
[select name="Risk1" value="0 to 1 per year=1|2 or more per year=10"] <-- Risk - Exacerbations requiring oral systemic corticosteroids
Interpretation --> [calc memo="Severity" value="score1=(ImpSymp1)+(ImpNA1)+(ImpSA1)+(ImpNorm1)+(ImpLF1)+(Risk1);score1>999?'Severe Persistent Asthma':score1>99?'Moderate Persistent Asthma':score1>9?'Mild Persistent Asthma':'Intermittent Asthma'"]
[link url="/wp-content/uploads/2018/08/asthma-steps-kids.jpg" memo="Stepwise medication table for children 5-11 years"][/conditional][conditional field="Age" condition="(Age).is('12 years and above')"][select name="ImpSymp2" value="Up to 2 days per week=1|More than 2 days per week, but not daily=10|Daily=100|Throughout the day=1000"] <-- Impairment - Symptoms
[select name="ImpNA2" value="Up to 2 times per month=1|3 to 4 times per month=10|More than 1 time per week, but not nightly=100|Often 7 times per week=1000"] <-- Impairment - Nighttime awakenings
[select name="ImpSA2" value="Up to 2 days per week=1|More than 2 days per week but not daily, and not more than 1 time on any day=10|Daily=100|Several times per day=1000"] <-- Impairment - Short-acting beta2-agonist use for symptom control (not prevention of exercise induced bronchospasm)
[select name="ImpNorm2" value="None=1|Minor limitation=10|Some limitation=100|Extremely limited=1000"] <-- Impairment - Interference with normal activity
[select name="ImpLF2" value="Normal FEV1 between exacerbations, FEV1 more than 80% predicted, FEV1 to FVC normal=1|FEV1 80% or more than predicted, FEV1 to FVC normal=10|FEV1 more than 60% but less than 80%, FEV1 to FVC reduced 5%=100|FEV1 less than 60% predicted, FEV1 to FVC reduced more than 5%=1000"] <-- Impairment - Lung function
Normal FEV1/FVC: 8-19 yr 85 percent; 20-39 yr 80 percent; 40-59 yr 75 percent; 60-80 yr 70 percent
[select name="Risk2" value="0 to 1 per year=1|2 or more per year=10"] <-- Risk - Exacerbations requiring oral systemic corticosteroids
Interpretation --> [calc memo="Severity" value="score2=(ImpSymp2)+(ImpNA2)+(ImpSA2)+(ImpNorm2)+(ImpLF2)+(Risk2);score2>999?'Severe Persistent Asthma':score2>99?'Moderate Persistent Asthma':score2>9?'Mild Persistent Asthma':'Intermittent Asthma'"]
[link url="/wp-content/uploads/2018/08/asthma-steps-adults.jpg" memo="Stepwise medication table for ages 12+ years"][/conditional]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference:  
[link url="//www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma" memo="#1"] National Asthma Education and Prevention Program (NAEPP) Coordinating Committee (CC) 2007 Guidelines 2007 Guidelines
[link url="//www.ncbi.nlm.nih.gov/pubmed/20141095" memo="#2"] Pollart (2009) Am Fam Physician 79:  761-7.[/conditional]
