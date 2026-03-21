# Generalized Anxiety Disorder – GAD 7 – Calculator

**Category:** Featured
**Source:** http://www.soapnote.org:80/featured/generalized-anxiety-disorder-gad-7/

---

GAD-7 Calculator 
Generalized Anxiety Disorder diagnosis tool.
[select name="Q1" value="Not at all (0 points)=0|Several days (1 points)=1|More than half the days (2 points)=2|Nearly everyday (3 points)=3"] <-- Feeling nervous, anxious or on edge (over the last two weeks)?
[select name="Q2" value="Not at all (0 points)=0|Several days (1 points)=1|More than half the days (2 points)=2|Nearly everyday (3 points)=3"] <-- Being unable to stop or control worrying (over the last two weeks)?
[select name="Q3" value="Not at all (0 points)=0|Several days (1 points)=1|More than half the days (2 points)=2|Nearly everyday (3 points)=3"] <-- Worrying too much about different things (over the last two weeks)?
[select name="Q4" value="Not at all (0 points)=0|Several days (1 points)=1|More than half the days (2 points)=2|Nearly everyday (3 points)=3"] <-- Having trouble relaxing (over the last two weeks)?
[select name="Q5" value="Not at all (0 points)=0|Several days (1 points)=1|More than half the days (2 points)=2|Nearly everyday (3 points)=3"] <-- Being so restless that it is hard to sit still (over the last two weeks)?
[select name="Q6" value="Not at all (0 points)=0|Several days (1 points)=1|More than half the days (2 points)=2|Nearly everyday (3 points)=3"] <-- Becoming easily annoyed or irritable (over the last two weeks)?
[select name="Q7" value="Not at all (0 points)=0|Several days (1 points)=1|More than half the days (2 points)=2|Nearly everyday (3 points)=3"] <-- Feeling afraid, as if something awful might happen (over the last two weeks)?
Score --> [calc value="score=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7)" memo="score"] out of 21 points
Interpretation --> [calc value="score=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7);score>8?'suggestive of anxiety or panic disorder':score>0?'mild symptoms':'asymptomatic'" memo="interpretation"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]     
references:  
[link url="http://www.ncbi.nlm.nih.gov/pubmed/16717171" memo="#1"] Spitzer RL, Kroenke K, Williams JB, Löwe B. Arch Intern Med. 2006 May 22;166(10):1092-7. A brief measure for assessing generalized anxiety disorder: the GAD-7
[link url="http://www.aafp.org/afp/2008/0815/p501.html" memo="#2"] Am Fam Physician. 2008 Aug 15;78(4):501-502[/conditional]
