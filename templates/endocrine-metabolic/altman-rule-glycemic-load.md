# Altman Rule to Identify Food with Lower Glycemic Load

**Category:** Social Work
**Source:** https://www.soapnote.org/endocrine-metabolic/altman-rule-glycemic-load/

---

Altman Rule to Identify Foods with Lower Glycemic Load
fiber (g) + protein (g) > sugar (g)
[text name="variable_1" size=5] <-- grams of fiber per serving
[text name="variable_2" size=5] <-- grams of protein per serving
[text name="variable_3" size=5] <-- grams of sugar per serving
Sugar heaviness --> [calc memo="Extra sugar" value="score0=(variable_3)-(variable_1)-(variable_2)"] grams
Verdict --> [calc memo="Answer" value="score=(variable_3)-(variable_1)-(variable_2);score>10?'No, this does not have a low glycemic load and it is not even close':score>5?'No, this does not have a low glycemic load but you are trying':score>1?'No, this does not have a low glycemic load, but it is probably fine':score>0?'No, this does not have a low glycemic load, but it is really close':score>-.0001?'This is about as close as you can get to having a low glycemic load without having a low glycemic load':'Yes, this food does have a low glycemic load'"]
[checkbox memo="Hide/Display References" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
references: 
 [link url="https://www.mdedge.com/familymedicine/article/265249/mixed-topics/altman-rule-proxy-glycemic-load" memo="#1"] Dong KR, Eustis S, Hawkins K, Altman, W. Is the Altman Rule a proxy for glycemic load? J Fam Pract. 2023 September;72(7):286-291.[/conditional]
