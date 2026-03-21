# Pretest Probability of Malignancy for Solitary Pulmonary Nodule (VA Model)

**Category:** Assessment & Plan Elements
**Source:** https://www.soapnote.org/respiratory/pretest-probability-of-malignancy-for-solitary-pulmonary-nodule-va-model/

---

Pretest Probability of Malignancy for Solitary Pulmonary Nodule (VA Model)
Age --> [text name="age" size= 4 memo="age in years"] years
Smoking History --> [select name="smoke" value="current smoker=1|former smoker=1|never smoker=0"]
Diameter --> [text name="diameter" memo="diameter in mm" size=4] mm (largest diameter)
[conditional field="smoke" condition="(smoke).is('former smoker=1')"]Years since quitting --> [text name="yearsquit" memo="time since quitting in years" size=4] years

[calc value="scoreformer=(100*(Math.exp(((-8.404) + (2.061 * (smoke)) + (0.779 * (age) * (0.1)) + (0.112 * (diameter)) - (0.567 * (yearsquit) * (0.1))))/(1+Math.exp(((-8.404) + (2.061 * (smoke)) + (0.779 * (age) * (0.1)) + (0.112 * (diameter)) - (0.567 * (yearsquit) * (0.1))))))).toFixed(2)" memo="number"]% <-- Pretest Probability of Malignancy
[/conditional][conditional field="smoke" condition="(smoke).isNot('former smoker=1')"]
[calc value="scoresmoke=(100*(Math.exp((-8.404) + (2.061 * (smoke)) + (0.779 * (age) * (0.1)) + (0.112 * (diameter)))/(1+Math.exp((-8.404) + (2.061 * (smoke)) + (0.779 * (age) * (0.1)) + (0.112 * (diameter)))))).toFixed(2)" memo="number"]% <-- Pretest Probability of Malignancy
[/conditional]
[checkbox memo="References (Hide/Show)" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).isNot('')"]
[link url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3008547/" memo="#1"] Gould MK, Ananth L, Barnett PG; Veterans Affairs SNAP Cooperative Study Group. A clinical model to estimate the pretest probability of lung cancer in patients with solitary pulmonary nodules. Chest. 2007 Feb;131(2):383-8.[/conditional]
