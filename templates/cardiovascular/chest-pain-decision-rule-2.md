# chest pain decision rule

**Category:** Cardiovascular
**Source:** https://www.soapnote.org/cardiovascular/chest-pain-decision-rule-2/

---

Bösner clinical decision rule to predict Coronary Artery Disease as a cause of chest pain
.....................................................................................................
Factors:

[select name="agesex" value="yes (1 point)=1|no (0 points)=0"] <-- Man 55 years or older OR Woman 65 years or older
[select name="vascular" value="yes (1 point)=1|no (0 points)=0"] <-- Known vascular disease (CAD, occlusive vascular disease, cerebrovascular disease)
[select name="exercise" value="yes (1 point)=1|no (0 points)=0"] <-- Pain worse with exercise
[select name="palpation" value="yes (1 point)=1|no (0 points)=0"] <-- Pain NOT elicited with palpation
[select name="assume" value="yes (1 point)=1|no (0 points)=0"] <-- Patient assumes pain is of cardiac origin
.....................................................................................................

Score --> [calc value="score1=(agesex)+(vascular)+(exercise)+(palpation)+(assume)" memo="number"] / 5
Interpretation (Likelihood that chest pain is cardiac) --> [calc value="score=(agesex)+(vascular)+(exercise)+(palpation)+(assume); score>3?'CAD prevalence 63%, Positive likelihood ratio 4.52 and Negative likelihood ratio 0.16':score>1?'Positive likelihood ratio 1.83 and Negative likelihood ratio 0.03':'CAD prevalence 1%, Positive likelihood ratio 1.09 and Negative likelihood ratio 0.0'" memo="result"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
reference: [link url="http://www.ncbi.nlm.nih.gov/pubmed/20603345" memo="#1"] Bösner S, Haasenritter J, Becker A, Karatolios K, Vaucher P, Gencer B, Herzig L, Heinzel-Gutenbrunner M, Schaefer JR, Abu Hani M, Keller H, Sönnichsen AC, Baum E, Donner-Banzhoff N. Ruling out coronary artery disease in primary care: development and validation of a simple prediction rule. CMAJ. 2010 Sep 7;182(12):1295-300.[/conditional]
