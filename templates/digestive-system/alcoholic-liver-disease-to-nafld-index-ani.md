# Alcoholic liver disease to NAFLD Index (ANI)

**Category:** Gastroenterology & Hepatology
**Source:** https://www.soapnote.org/digestive-system/alcoholic-liver-disease-to-nafld-index-ani/

---

Alcoholic liver disease to NAFLD Index (ANI)
[select name="variable_1" value="select|male=6.35|female=0"] <-- Gender
[text name="variable_2"] <-- Height (inches)
[text name="variable_3"] <-- Weight (pounds)
[text name="variable_4"] <-- MCV
[text name="variable_5"] <-- AST
[text name="variable_6"] <-- ALT

ANI --> [calc memo="number" value="score1=((-58.5)+((0.637)*(variable_4))+(((3.91)*(variable_5))/(variable_6))+(((-0.406)*(variable_3)*(703))/((variable_2)*(variable_2)))+(variable_1)).toFixed(2)"]
Probability of Alcoholic Liver Disease --> [calc memo="percentage" value="score2=(100*(Math.exp(score1))/(1+(Math.exp(score1)))).toFixed(2)"] percent

[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
References:
[link url="https://pubmed.ncbi.nlm.nih.gov/17030176/" memo="#1"] Dunn W, Angulo P, Sanderson S, Jamil LH, Stadheim L, Rosen C, Malinchoc M, Kamath PS, Shah VH. Utility of a new model to diagnose an alcohol basis for steatohepatitis. Gastroenterology. 2006 Oct;131(4):1057-63. doi: 10.1053/j.gastro.2006.08.020. Epub 2006 Aug 10. PMID: 17030176; PMCID: PMC2483536.[/conditional]
