# Limited 1st Trimester Ultrasound Procedure Note

**Category:** Featured
**Source:** https://www.soapnote.org/featured/limited-1st-trimester-ultrasound/

---

[comment memo="1st Trimester Ultrasound Procedure Note"][checkbox name="1sttrichap" memo="*" memo_size="small" memo_color="blue" value="Chaperone:"][conditional field="1sttrichap" condition="(1sttrichap).is('Chaperone:')"] [text size="60"][/conditional][checkbox name="1sttriUSSup" value="Supervising Physician:"][conditional field="1sttriUSSup" condition="(1sttriUSSup).is('Supervising Physician:')"] Dr. [text size="60"][/conditional]LIMITED FIRST TRIMESTER ULTRASOUND (FOR DATING PURPOSES) - METHOD: [select name="1sttriusmethod" memo="*" memo_size="small" memo_color="blue" value="|TRANSABDOMINAL|TRANSVAGINAL"]
[conditional field="1sttriusmethod" condition="(1sttriusmethod).is('TRANSABDOMINAL')"][comment memo="CPT Code - 76801
" memo_size="small" memo_color="blue"]
[/conditional][conditional field="1sttriusmethod" condition="(1sttriusmethod).is('TRANSVAGINAL')"][comment memo="CPT Code - 76817
" memo_size="small" memo_color="blue"]
[/conditional]Date of u/s: [date name="dateus1" default="today"]
LMP: [date name="dateLMP"]Number of Fetuses: [select name="fetalcount" value="singleton|"][conditional field="fetalcount" condition="(fetalcount).is('')"][text size="20"][/conditional]
Cardiac Activity: [select name="FHR" value="FHR|present but indeterminant by M-mode|not present"][conditional field="FHR" condition="(FHR).is('FHR')"] [text size="4"] bpm, calculated via M-mode.[/conditional]
Assessments: [checkbox name="Measure" value="yolk sac visualized|fetal/embryonic pole visualized|crown-rump length assessed|mean sac diameter assessed"].
[conditional field="Measure" condition="(Measure).is('crown-rump length assessed')"]
CRL Measurements:
CRL: [text name="CRL1" size="8"] cm
CRL: [text name="CRL2" size="8"] cm
CRL: [text name="CRL3" size="8"] cm
Mean CRL: [/conditional][conditional field="Measure|meanCRLcalc" condition="((meanCRLcalc).isNot(''))&&((Measure).is('crown-rump length assessed'))"][text name="CRL3" size="8"] cm [/conditional][conditional field="Measure" condition="(Measure).is('crown-rump length assessed')"][checkbox name="meanCRLcalc" memo="click for calculated value" memo_size="small" memo_color="yellow" value=""][/conditional][conditional field="meanCRLcalc" condition="(meanCRLcalc).is('')"]
[calc value="score1=(CRL1)/3+(CRL2)/3+(CRL3)/3" memo="calc'd mean CRL"] cm
EGA by CRL: [calc value="score2=(CRL1)/3+(CRL2)/3+(CRL3)/3;score2>6.6?'cannot calculate':score2>6.449?'12w5d':score2>6.249?'12w4d':score2>6.049?'12w3d':score2>5.849?'12w2d':score2>5.649?'12w1d':score2>5.549?'12w0d':score2>5.349?'11w6d':score2>5.149?'11w5d':score2>4.949?'11w4d':score2>4.749?'11w3d':score2>4.649?'11w2d':score2>4.449?'11w1d':score2>4.249?'11w0d':score2>4.149?'10w6d':score2>3.949?'10w5d':score2>3.849?'10w4d':score2>3.649?'10w3d':score2>3.549?'10w2d':score2>3.349?'10w1d':score2>3.249?'10w0d':score2>3.049?'9w6d':score2>2.949?'9w5d':score2>2.849?'9w4d':score2>2.649?'9w3d':score2>2.549?'9w2d':score2>2.449?'9w1d':score2>2.349?'9w0d':score2>2.149?'8w6d':score2>2.049?'8w5d':score2>1.949?'8w4d':score2>1.849?'8w3d':score2>1.749?'8w2d':score2>1.649?'8w1d':score2>1.549?'8w0d':score2>1.449?'7w6d':score2>1.349?'7w5d':score2>1.249?'7w4d':score2>1.149?'7w3d':score2>1.049?'7w1d':score2>0.999?'7w0d':'cannot calculate'" memo="calc'd EGA"]
[comment memo="EGA calculation based on Robinson CRL Curve referenced in Robinson HP. Sonar measurements of fetal crown-rump length as means of assessing maturity in first trimester of pregnancy. Br Med J 1973;4:28-31" memo_size="small"]
[/conditional][conditional field="Measure" condition="(Measure).is('mean sac diameter assessed')"]
Gestation Sac Measurements:
Sac Measurement#1: [text name="GSD1" size="8"] cm
Sac Measurement#2: [text name="GSD2" size="8"] cm
Sac Measurement#3: [text name="GSD3" size="8"] cm
Mean Sac Diameter: [calc value="score1=(GSD1)/3+(GSD2)/3+(GSD3)/3" memo="calc'd mean GSD"] cm
[/conditional][conditional field="Measure" condition="(Measure).is('crown-rump length assessed')||(Measure).is('mean sac diameter assessed')"]
EGA by LMP: [text name="EGALMPw" size="5"]w [text name="EGALMPd" size="3"]d
EGA by U/S: [text name="EGAUSw" size="5"]w [text name="EGAUSd" size="3"]d

[/conditional]Interpretation:
-[select name="Interpretation" value="Intrauterine Pregnancy|Viability of pregnancy indeterminant|Possible embryonic demise"][conditional field="Interpretation|EDCdetermine" condition="((Interpretation).is('Intrauterine Pregnancy'))&&((EDCdetermine).is('LMP confirmed by 1st tri U/S'))"] at [var name="EGALMPw"]+[var name="EGALMPd"] wks
-EDD is [calc memo="final EDD" value="score1=(dateLMP).dateAdd(280)"][/conditional][conditional field="Interpretation|EDCdetermine" condition="((Interpretation).is('Intrauterine Pregnancy'))&&((EDCdetermine).is('1st tri U/S'))"] at [var name="EGAUSw"]+[var name="EGAUSd"] wks
-EDD is [date name="1sttriusEDD"][/conditional] [conditional field="Interpretation" condition="(Interpretation).is('Intrauterine Pregnancy')"]based on [select name="EDCdetermine" value="LMP confirmed by 1st tri U/S|1st tri U/S"][/conditional][conditional field="EDCdetermine" condition="(EDCdetermine).is('1st tri U/S')"] [select name="disconcordantdates" value="(disconcordant with EDC by LMP)|"][/conditional][conditional field="disconcordantdates" condition="(disconcordantdates).is('')"][text size="60"][/conditional][conditional field="Interpretation" condition="(Interpretation).isNot('Intrauterine Pregnancy')"].
[textarea rows="3"]
[/conditional][conditional field="Interpretation" condition="(Interpretation).is('Intrauterine Pregnancy')"]
[/conditional]
-Discussed with patient the limitations of this ultrasound, inability to completely rule out ectopic/heterotopic pregnancies, inability to rule out pelvic gynecologic pathologies, inability to rule out genetic abnormalities, and inability to rule out congenital malformations/deformities.-Plan: [checkbox value="no significant concerns|followup with assigned OB provider for routine prenatal care|immediate referral to OB/Gyn for further evaluation|obtain/order serial quantitative serum HCG levels with appropriate f/u"][comment memo="freetext" memo_size="small" memo_color="blue"][textarea rows="3"]
