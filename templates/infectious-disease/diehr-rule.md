# Diehr Rule to Diagnose Pneumonia in Adults

**Category:** Featured
**Source:** https://www.soapnote.org/infectious-disease/diehr-rule/

---

Diehr Rule to Diagnose Pneumonia in Adults
[select value="Yes (-2 points)=-2|No (0 points)=0" name="rhinorrhea"] <-- Rhinorrhea
[select value="Yes (-1 point)=-1|No (0 points)=0" name="throat"] <-- Sore throat
[select value="Yes (+1 point)=1|No (0 points)=0" name="myalgia"] <-- Myalgia
[select value="Yes (+1 point)=1|No (0 points)=0" name="sweats"] <-- Night Sweats
[select value="Yes (+1 point)=1|No (0 points)=0" name="sputum"] <-- Sputum produced throughout the day
[select value="Yes (+2 points)=2|No (0 points)=0" name="respiratory"] <-- Respiratory rate over 25 breaths per minute
[select value="Yes (+2 points)=2|No (0 points)=0" name="temperature"] <-- Temperature over 100 degrees F or 37.8 C
Score:  [calc value="score=(rhinorrhea)+(throat)+(myalgia)+(sweats)+(sputum)+(respiratory)+(temperature)" memo="Score"]
Probability of Pneumonia:  [calc value="score=(rhinorrhea)+(throat)+(myalgia)+(sweats)+(sputum)+(respiratory)+(temperature);score>3?'29.4%':score>2?'25%':score>1?'10.3%':score>0?'8.8%':score>-1?'2.2%':score>-2?'1.6%':score>-3?'0.7%':'0.0%'" memo="Interpretation"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference:
[link url="//www.ncbi.nlm.nih.gov/pubmed/6699126" memo="#1"] Diehr (1984) J Chronic Dis 37:215-25
[link url="//www.ncbi.nlm.nih.gov/pubmed/16342831" memo="#2"] Cayley (2005) Am Fam Physician 72:2012-21
[link url="//www.fpnotebook.com/lung/exam/DhrRlTDgnsPnmn.htm" memo="#3"] FP Notebook page
[/conditional]
