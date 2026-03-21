# Cough/Rhinitous

**Category:** Allergy & Otolaryngology
**Source:** https://www.soapnote.org/ear-nose-throat/cough-rhinitous/

---

[comment memo="Use with Cough symptoms Patient Questionnaire"]
[text size="3"]yo [select name="Sex" value="|M|F"] with cough for [text size="4"] [select value="day(s)|hour(s)|week(s)|month(s)"]
[comment memo="Initial questions"]
-Cough is [select name="prod" value="non-productive|productive"][conditional field="prod" condition="(prod).is('productive')"] - sputum color is [text size="20"][/conditional]
-Cough started when/while [text memo="inciting event" size="80"]
-Remedies/medicines attempted: [text size="80"]
-Effect of attempted remedies/medicines: [text size="80"]
-Since onset, sx have [select value="gotten better|gotten worse|stayed about the same"]
-Patient describes severity is [select value="minimal|moderate|severe"]
-Patient feels cough at nighttime [select value="not significantly affecting sleep|preventing adequate sleep"]
-Patient reports [select value="no known|known"] sick contacts at home, school, or work. [text size="40"]
-Other associated symptoms:
--[select value="no|YES"] <-chest pain with coughing
--[select value="no|YES"] <-coughing up blood
--[select value="no|YES"] <-fever/chills
--[select value="no|YES"] <-body aches
--[select value="no|YES"] <-hoarseness
--[select value="no|YES"] <-sore throat
--[select value="no|YES"] <-runny/stuffy nose
--[select value="no|YES"] <-ear pain
--[select value="no|YES"] <-sinus pain
--[select value="no|YES"] <-itchy/watery eyes
--[select value="no|YES"] <-pain with swallowing
--[select value="no|YES"] <-feeling of lump in throat (globus sensation)
-Hx of these conditions:
--[select value="no|YES"] <-recent cold
--[select value="no|YES"] <-allergic rhinitis
--[select value="no|YES"] <-non-allergic rhinitis
--[select value="no|YES"] <-frequent sinus infection 
--[select value="no|YES"] <-asthma
--[select value="no|YES"] <-frequent pneumonia
--[select value="no|YES"] <-frequent bronchitis
--[select value="no|YES"] <-GERD
--[select value="no|YES"] <-head/neck/throat/thyroid/lung cancer
--[select value="no|YES"] <-tuberculosis or positive tuberculin skin test
--[select value="no|YES"] <-Diabetes Mellitus

Tobacco: [checkbox name="tobacco" value="never smoked/chewed/dipped/vaped tobacco/nicotine products|currently smokes/chews/dips/vapes tobacco/nicotine products|formerly smoked/chewed/dipped/vaped tobacco/nicotine products|regularly exposed to second-hand smoke"][conditional field="tobacco" condition="(tobacco).is('currently smokes/chews/dips/vapes tobacco/nicotine products')||(tobacco).is('formerly smoked/chewed/dipped/vaped tobacco/nicotine products')"] [text memo="#packs per day & #years & how long ago quit if applicable" size="20"][/conditional].

Travel: recent travel in past 6 months to foreign country and regular close contact with local people where tuberculosis is endemic- [select value="no|YES"] [text size="50"]

Immunizations: [select value="vaccines UTD per CDC schedule including pertussis|PERTUSSIS VACCINATION STATUS UNKNOWN|UNVACCINATED TO PERTUSSIS"]

[conditional field="Sex" condition="(Sex).is('F')"]
-Currently pregnant- [select name="pg" value="|no|unsure|YES"][/conditional][conditional field="pg" condition="(pg).is('no')||(pg).is('unsure')"]
-Current contraception method: [text size="40"]
-LMP: [text size="10"][/conditional]
[textarea memo="add'l comments"]
[comment memo="For use in CRDAMC FM Clinic"]

[select value="less than 1 day|1 day|2 days|3 days|4 days|5 days|6 days|7 days|more than 1 week|more than 1 month"] <-- duration
[select value="no|YES"] <-- nasal congestion
[select value="no|YES"] <-- nasal discharge
[select value="no|YES"] <-- sneezing
[select value="no|YES"] <-- watery eyes
[select value="no|YES"] <-- cough
[select value="no|YES"] <-- headache
[select value="no|YES"] <-- fever
[select value="no|YES"] <-- past history of similar symptoms
Allergies identified 
[select value="no|YES"] <-- ragweed
[select value="no|YES"] <-- tree pollen
[select value="no|YES"] <-- mold
[select value="no|YES"] <-- grass
[select value="no|YES"] <-- animal dander
Prior treatment
[select value="no|YES"] <-- over the counter antihistamines
[select value="no|YES"] <-- loratidine
[select value="no|YES"] <-- fexofenadine
[select value="no|YES"] <-- cetirizine
[select value="no|YES"] <-- intranasal steroids
Past History
[select value="no|YES"] <-- asthma
[select value="no|YES"] <-- eczema
[textarea]
[textarea name="variable_1" default="sample text"]
