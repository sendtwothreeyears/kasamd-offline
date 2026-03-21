# Strep Throat Decision Tool – Modified Centor Score

**Category:** Noteworthy
**Source:** https://www.soapnote.org/child-health/strep-throat-decision-tool/

---

Modified Centor Score
[select name="Q1Fever" value="No (0 points)=0|YES (1 point)=1"] <-- History of fever or measured temperature > 100.4 degrees F
[select name="Q2Cough" value="Cough is present (0 points)=0|COUGH IS ABSENT (1 point)=1"] <-- Presence of coughing
[select name="Q3Nodes" value="No (0 points)=0|YES (1 point)=1"] <-- Tender anterior cervical nodes
[select name="Q4Tonsil" value="No (0 points)=0|YES (1 point)=1"] <-- Tonsillar swelling or exudates
[select name="Q5Age" value="< 15 years (1 point)=1|15 to 45 years (0 points)=0|> 45 years (-1 point)=-1"] <-- Age
Score --> [calc value="score=(Q1Fever)+(Q2Cough)+(Q3Nodes)+(Q4Tonsil)+(Q5Age)" memo="score"]
Interpretation -->  Risk of group A beta-hemolytic streptococcus is [calc value="score=(Q1Fever)+(Q2Cough)+(Q3Nodes)+(Q4Tonsil)+(Q5Age);score>3?'51 to 53%, consider empiric antibiotic treatment.':score>2?'28 to 35%, perform throat culture or rapid antigen detection testing and treat accordingly.':score>1?'11 to 17%, perform throat culture or rapid antigen detection testing and treat accordingly.':score>0?'5 to 10%, may forego antibiotics OR may perform throat culture or rapid antigen detection testing and treat accordingly.':'1 to 2.5%, antibiotic treatment or further testing is not warranted.'" memo="Risk and Recommendation"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
references:
[link url="http://www.ncbi.nlm.nih.gov/pubmed/11033707" memo="#1"] McIsaac WJ, Goel V, To T, Low DE. The validity of a sore throat score in family practice. CMAJ. 2000 Oct 3;163(7):811-5.
[link url="https://www.ncbi.nlm.nih.gov/pubmed/19275067" memo="#2"] Choby BA. Diagnosis and treatment of streptococcal pharyngitis. Am Fam Physician. 2009 Mar 1;79(5):383-90. Erratum in: Am Fam Physician. 2013 Aug 15;88(4):222.[/conditional]
