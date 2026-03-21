# SBIRT Plus Kiosk

**Category:** Featured
**Source:** https://www.soapnote.org/featured/sbirt-plus-kiosk/

---

[___] 
[select] <-- Gender
--Over the past 2 weeks, have you been bothered by: 
[select] <--1. Feeling nervous, anxious, or on edge? 
[select] <--2. Not being able to stop or control 
[select] <--3. Little interest or pleasure in doing things?
[select] <--4. Feeling down, depressed, or hopeless? 
--Over the past 12 months:
5. Have you used marijuana, other illegal drugs or taken a prescription medication for non-medical reasons? [select] 

How many times have you had 5 or more drinks in one day? [select] 
 How many times have you had 4 or more drinks in one day? [select] 
-score=(Q9b);score>0?'***********Brief Intervention: SI***********':''

 GAD-7 Calculator 
 - Generalized Anxiety Disorder diagnosis tool.
[select] <-- Feeling nervous, anxious or on edge (over the last two weeks)?
[select] <-- Being unable to stop or control worrying (over the last two weeks)?
[select] <-- Worrying too much about different things (over the last two weeks)?
[select] <-- Having trouble relaxing (over the last two weeks)?
[select] <-- Being so restless that it is hard to sit still (over the last two weeks)?
[select] <-- Becoming easily annoyed or irritable (over the last two weeks)?
[select] <-- Feeling afraid, as if something awful might happen (over the last two weeks)?
Score --> scorescore=(Q1a)+(Q2a)+(Q3a)+(Q4a)+(Q5a)+(Q6a)+(Q7a) out of 21 points
Interpretation --> interpretationscore=(Q1a)+(Q2a)+(Q3a)+(Q4a)+(Q5a)+(Q6a)+(Q7a);score>8?'suggestive of anxiety or panic disorder':score>0?'mild symptoms':'asymptomatic'

Patient Health Questionnaire PHQ-9 - Depression Screen

[select] <-- #1 Little interest or pleasure in doing things over the last 2 weeks
[select] <-- #2 Feeling down, depressed or hopeless over the last 2 weeks
[select] <-- #3 Trouble falling or staying asleep, or sleeping too much over the last weeks
[select] <-- #4 Feeling tired or having little energy over the last 2 weeks
[select] <-- #5 Poor appetite or overeating over the last 2 weeks
[select] <-- #6 Feeling bad about self-or are a failure or have let self or family down over the last 2 weeks
[select] <-- #7 Trouble concentrating on things, such as reading the newspaper or watching television over the last 2 weeks
[select] <-- #8 Moving or speaking so slowly that other people have noticed. Or the opposite-being so fidgety or restless that has been moving around a lot more than usual over the last 2 weeks
[select] <-- #9 Thoughts that would be better off dead or of hurting self in some way over the last 2 weeks

[select] <-- #10 How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?
Score --> scorescore=(Q1b)+(Q2b)+(Q3b)+(Q4b)+(Q5b)+(Q6b)+(Q7b)+(Q8b)+(Q9b) out of 27 points 
Interpretation --> interpretationscore=(Q1b)+(Q2b)+(Q3b)+(Q4b)+(Q5b)+(Q6b)+(Q7b)+(Q8b)+(Q9b);score>20?'Severe':score>14?'Moderately Severe':score>9?'Mild':score>4?'Minimal Symptoms':'Asymptomatic'

Drug Use Questionnaire (DAST - 10) 
The following questions concern information about your possible involvement with drugs not including alcoholic beverages during the past 12 months. 

In the statements *drug abuse* refers to (1) the use of prescribed or over the counter drugs may include: cannabis (e.g. marijuana, hash), solvents, tranquilizers (e.g. Valium), barbiturates, cocaine, stimulants (e.g. speed), hallucinogens (e.g. LSD) or narcotics (e.g. heroin). Remember that the questions do not include alcoholic beverages.

Please answer every question. If you have difficulty with a statement, then choose the response that is mostly right.

These questions refer to the past 12 months.

[select] <-- 1. Have you used drugs other than those required for medical reasons?
[select] <-- 2. Do you abuse more than one drug at a time?
[select] <-- 3. Are you always able to stop using drugs when you want to?
[select] <-- 4. Have you had "blackouts" or "flashbacks" as a result of drug use?
[select] <-- 5. Do you ever feel bad or guilty about your drug use?
[select] <-- 6. Does your spouse (or parents ) ever complain about your involvement with drugs?
[select] <-- 7. Have you neglected your family because of your use of drugs?
[select] <-- 8. Have you ever engaged in illegal activities in order to obtain drugs?
[select] <-- 9. have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?
[select] <-- 10. Have you had medical problems as a result of your drug use (e.g. memory loss, hepatitis, convulsions, bleeding, etc.)?

Total Score --> numberscore1=(Q1c)+(Q2c)+(Q3c)+(Q4c)+(Q5c)+(Q6c)+(Q7c)+(Q8c)+(Q9c)+(Q10c) / 10
Interpretation --> resultscore2=(Q1c)+(Q2c)+(Q3c)+(Q4c)+(Q5c)+(Q6c)+(Q7c)+(Q8c)+(Q9c)+(Q10c);score2>8?'Severe':score2>5?'Substantial':score2>2?'Intermediate':score2>0?'Low':'None'


The Alcohol Use Disorders Identification Test (AUDIT)
drink standards
[select] <-- How often do you have a drink containing alcohol?

[select] <-- How many drinks containing alcohol do you have on a typical day when you are drinking?
[select] <-- How often do you have six or more drinks on one occasion?
[select] <-- How often during the last year have you found that you were not able to stop drinking once you had started?
[select] <-- How often during the last year have you failed to do what was normally expected from you because of drinking?
[select] <-- How often during the last year have you been unable to remember what happened the night before because you had been drinking?
[select] <-- How often during the last year have you needed an alcoholic drink first thing in the morning to get yourself going after a night of heavy drinking?
[select] <-- How often during the last year have you had a feeling of guilt or remorse after drinking?
[select] <-- Have you or someone else been injured as a result of your drinking?
[select] <-- Has a relative, friend, doctor, or another health professional expressed concern about your drinking or suggested you cut down?

Total Score --> numberscore1=(Q1d)+(Q2d)+(Q3d)+(Q4d)+(Q5d)+(Q6d)+(Q7d)+(Q8d)+(Q9d)+(Q10d)
Interpretation --> resultscore2=(Q1d)+(Q2d)+(Q3d)+(Q4d)+(Q5d)+(Q6d)+(Q7d)+(Q8d)+(Q9d)+(Q10d);score2>7?'Harmful drinking behavior':'Negative screen'
