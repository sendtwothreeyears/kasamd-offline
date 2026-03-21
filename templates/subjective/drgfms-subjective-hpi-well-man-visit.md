# Subjective — HPI — Well Man Adult

**Category:** Subjective/History Elements
**Source:** https://www.soapnote.org/subjective/drgfms-subjective-hpi-well-man-visit/

---

Male Wellness Exam 

1. Age: [text size=5] 

2. Have you had any of the following problems: 
 - a. High blood pressure --> [select value="|yes|no|N/A|no answer"]
 - b. Heart disease --> [select value="|yes|no|N/A|no answer"]
 - c. Cancer --> [select value="|yes|no|N/A|no answer"]
 - d. High cholesterol --> [select value="|yes|no|N/A|no answer"]

3. Do you have any of the following problems:
 - a. Bothersome joint pains --> [select value="|yes|no|N/A|no answer"]
 - b. Sexual problems (getting and keeping erections, completing intercourse, etc.) --> [select value="|yes|no|N/A|no answer"]
 - c. Change in size/firmness of stools --> [select value="|yes|no|N/A|no answer"]
 - d. Change in size/color of a mole --> [select value="|yes|no|N/A|no answer"]
 - e. Sleeping poorly or having any trouble falling or staying asleep during the past month --> [select value="|yes|no|N/A|no answer"]
 - f. Often feeling down, depressed or hopeless during the past month --> [select value="|yes|no|N/A|no answer"]
 - g. Often having little interest or pleasure in doing things during the past month --> [select value="|yes|no|N/A|no answer"]
 - h. Difficulty with urine stream strength or flow rate --> [select value="|yes|no|N/A|no answer"]
 - i. Getting up frequently at night to urinate --> [select value="|yes|no|N/A|no answer"]
 - j. Chest pain, shortness of breath, stomach problems or heartburn --> [select value="|yes|no|N/A|no answer"]
 - k. Problems with falling or doing routine tasks at home --> [select value="|yes|no|N/A|no answer"]
 - l. Periods of weakness, numbness or inability to talk --> [select value="|yes|no|N/A|no answer"]

4. Do you have a parent, brother or sister with a history of the following:
 - a. Cancer of the prostate or intestine --> [select name="cancer" value="|yes|no|N/A|no answer"]
 - b. Heart pain or heart attacks before the age of 55 --> [select name="heartattack" value="|yes|no|N/A|no answer"] 
[conditional field="cancer|heartattack" condition="(heartattack).is('yes')||(cancer).is('yes')"]
Relation: [text size=10] Type: [text size=10] 
Relation: [text size=10] Type: [text size=10] 
Relation: [text size=10] Type: [text size=10] 
Relation: [text size=10] Type: [text size=10] [/conditional]

5. Have you ever used tobacco? [select name="tobacco" value="|yes|no|N/A|no answer"] 
[conditional field="tobacco" condition="(tobacco).is('yes')"]  
 - Average number of packs/day: [text size=5] 
 - Number of years smoked: [text size=5] 
 - Year quit: [text size=5] 
When are you planning to quit? [select value="|no answer|now|next 6 months|sometime"] [/conditional]


6. Do you drink alcohol? [select name="alcohol" value="|yes|no|N/A|no answer"] 
[conditional field="alcohol" condition="(alcohol).is('yes')"]
 - a. Have you ever felt you should cut down on your drinking? --> [select value="|yes|no|N/A|no answer"]
 - b. Have people ever annoyed you by nagging you about your drinking? --> [select value="|yes|no|N/A|no answer"]
 - c. Have you ever felt guilty about your drinking? --> [select value="|yes|no|N/A|no answer"]
 - d. Have you ever had a drink first thing in the morning to steady your nerves or get rid of a hangover? --> [select value="|yes|no|N/A|no answer"][/conditional]

7. Prevention:
 - a. Which of the following are included in your diet:
  --- Grains and starches --> [select value="|a lot|some|few"]
  --- Vegetables -----------> [select value="|a lot|some|few"]
  --- Dairy foods ----------> [select value="|a lot|some|few"]
  --- Meats ----------------> [select value="|a lot|some|few"]
  --- Sweets ---------------> [select value="|a lot|some|few"]
 - b. Exercise:
  --- Activity:     --> [text size=10]  Days per week  --> [text size=5]
  --- Time/duration --> [text size=5]  minutes
  --- Exertion:     --> [select value="|stroll|mild|heavy"]
 - c. Do you always wear seat belts? --> [select value="|yes|no|N/A|no answer"]
 - d. If over 30 years old,have you had your cholesterol level checked in the past five years? --> [select value="|yes|no|N/A|no answer"]
 - e. Have you had a tetanus shot in the past 10 years? --> [select value="|yes|no|N/A|no answer"]
 - f. Does your house have a working smoke detector? --> [select value="|yes|no|N/A|no answer"]
 - g. Do you have firearms at home? --> [select value="|yes|no|N/A|no answer"]
 - h. How many sexual partners have you had in the last year? --> [text size=5] Lifetime? --> [text size=5] 
 - i. When was your last dental check-up? --> [text size=10]

8. Please describe any concerns you have: 
[textarea default="None identified"]
