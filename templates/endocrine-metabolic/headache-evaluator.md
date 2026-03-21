# Headache evaluator

**Category:** Endocrine, Nutrition & Obesity
**Source:** https://www.soapnote.org/endocrine-metabolic/headache-evaluator/

---

Headache
Onset [text] prior to evaluation
Onset while:  [text]

Associated Pain (0=none, 10=severe)
Location: [text]
Radiation: [text]
Severity now (0-10): [text]
Severity at worst (0-10): [text]
Duration: [text]
Characterized as [text].

Pain modifiers
Relieved with [text]
Worse with [text]
[select value="no|YES"] <-- worse with bright light exposure.

Associated Symptoms:
[select value="no|YES"] <-- nausea/vomiting
[select value="no|YES"] <-- preceding aura before the headache (e.g. vision change, scotomata)
[select value="no|YES"] <-- blurred vision
[select value="no|YES"] <-- fever
[select value="no|YES"] <-- sinus pressure or nasal drainage
[select value="no|YES"] <-- extremity weakness
[textarea memo="details"]

Impact
[select value="no|YES"] <-- missed days of work or school 
[select value="no|YES"] <-- missed life events
[select value="no|YES"] <-- avoidance of activities
[select value="no|YES"] <-- emergency room visits
[textarea memo="details"]

Pertinent PMH
[select value="no|YES"] <-- Migraine Headache
[select value="no|YES"] <-- frequent Sinusitis
[select value="no|YES"] <-- Glaucoma
[select value="no|YES"] <-- Head Trauma
[select value="no|YES"] <-- Serious CNS risks (e.g. active cancer, immunosuppression, HIV)
[select value="no|YES"] <-- Exposures (e.g. Tick bites, carbon monoxide)
[textarea memo="details"]

[select value="no|YES"] <-- Family history of cerebral aneurysm or stroke

[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference:  contributed by Dr. Scott Moses, creator/author of the Family Practice Notebook [link url="http://www.fpnotebook.com" memo="website"][/conditional]
