# Ottawa Knee Rule

**Category:** Musculoskeletal & Rheumatology
**Source:** http://www.soapnote.org:80/musculoskeletal/ottawa-knee-rule/

---

Ottawa Knee Rule [comment memo="Note:  Does not apply to children."]
[select value="false=0|TRUE=1" name="age"]  <-- Age 55 years or older.  
[select value="false=0|TRUE=1" name="fibula"]  <-- Tenderness at the head of the fibula.  
[select value="false=0|TRUE=1" name="patella"]  <-- Isolated tenderness of the patella (no bone tenderness of knee other than patella).  
[select value="false=0|TRUE=1" name="flex"]  <-- Inability to flex knee to 90 degrees.  
[select value="false=0|TRUE=1" name="walk"]  <-- Inability to bear weight for four steps both immediately and in the examination room regardless of limping.
Result:  [calc value="score=(age)+(fibula)+(patella)+(flex)+(walk); score>0?'X-ray required':'X-ray not necessary'" memo="Interpretation"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
references:  
[link url="//www.aafp.org/afp/2005/0315/p1169.html" memo="#1"] Ebell, MH. Am Fam Physician. 2005 Mar 15;71(6):1169-1172.
[link url="//www.ncbi.nlm.nih.gov/pubmed/14734335" memo="#2"] Bachmann LM, Haberzeth S, Steurer J, ter Riet G. The accuracy of the Ottawa knee rule to rule out knee fractures: a systematic review. Ann Intern Med. 2004;140:121–4.
[link url="//www.ncbi.nlm.nih.gov/pubmed/8060409" memo="#3"] Seaberg DC, Jackson R. Clinical decision rule for knee radiographs. Am J Emerg Med. 1994;12:541–3.
[/conditional]
