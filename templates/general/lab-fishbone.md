# Lab Fishbone

**Category:** General & Administrative
**Source:** https://www.soapnote.org/general/lab-fishbone/

---

[select name="variable_100" value="Adult Male|Adult Female"][conditional field="variable_100" condition="(variable_100).is('Adult Male')"]
[text name="variable_1" default=0 size=5] <-- Na (normal: [text name="variable_2" default=136 size=5] to [text name="variable_3" default=145 size=5])
[text name="variable_4" default=0 size=5] <-- K (normal: [text name="variable_5" default=3.5 size=5] to [text name="variable_6" default=5.0 size=5])
[text name="variable_7" default=0 size=5] <-- Cl (normal: [text name="variable_8" default=98 size=5] to [text name="variable_9" default=106 size=5])
[text name="variable_10" default=0 size=5] <-- CO2 (normal: [text name="variable_11" default=23 size=5] to [text name="variable_12" default=28 size=5])
[text name="variable_13" default=0 size=5] <-- BUN (normal: [text name="variable_14" default=8 size=5] to [text name="variable_15" default=20 size=5])
[text name="variable_16" default=0 size=5] <-- Cr (normal: [text name="variable_17" default=0.70 size=5] to [text name="variable_18" default=1.30 size=5])
[text name="variable_19" default=0 size=5] <-- Glu (normal: [text name="variable_20" default=65 size=5] to [text name="variable_21" default=139 size=5])

Na [calc value="score_1=(variable_1);score_1>99?'':score_1>9?' ':'  '"][var name="variable_1" memo="***"]    |Cl [calc value="score_7=(variable_7);score_7>99?'':score_7>9?' ':'  '"][var name="variable_7" memo="***"]   |BUN [calc value="score_13=(variable_13);score_13>99?'':score_13>9?' ':'  '"][var name="variable_13" memo="***"]      /
([var name="variable_2" memo="***"]-[var name="variable_3" memo="***"]) |([var name="variable_8" memo="***"]-[var name="variable_9" memo="***"]) |([var name="variable_14" memo="***"]-[var name="variable_15" memo="***"])      / Glu [var name="variable_19"  memo="***"]
__________|_________|___________/  ([var name="variable_20" memo="***"]-[var name="variable_21" memo="***"])
K [calc value="score_4=(variable_4);score_4>9?'':' '"][calc memo="***" value="score_4=(score_4).toFixed(1)"]    |CO2 [calc value="score_10=(variable_10);score_10>9?'':' '"][var memo="***" name="variable_10"]   |Cr [calc value="score_16=(variable_16);score_16>9?'':' '"][calc memo="***" value="score_16=(score_16).toFixed(2)"]   \
([var name="variable_5" memo="***"]-[var name="variable_6" memo="***"]) |([var name="variable_11" memo="***"]-[var name="variable_12" memo="***"])  |([var name="variable_17" memo="***"]-[var name="variable_18" memo="***"]) \        
          |         |             \
 

[text name="variable_22" default=0 size=5] <-- WBC (normal: [text name="variable_23" default=4.0 size=5] to [text name="variable_24" default=11.0 size=5])
[text name="variable_25" default=0 size=5] <-- Hb (normal: [text name="variable_26" default=14 size=5] to [text name="variable_27" default=18 size=5])
[text name="variable_28" default=0 size=5] <-- Hct (normal: [text name="variable_29" default=42 size=5] to [text name="variable_30" default=50 size=5])
[text name="variable_31" default=0 size=5] <-- Plt (normal: [text name="variable_32" default=150 size=5] to [text name="variable_33" default=450 size=5])

         \   Hb [calc value="score_25=(variable_25);score_25>99?'':score_25>9?' ':'  '"][calc value="score_25=(score_25).toFixed(1)" memo="***"]    /
WBC [calc value="score_22=(variable_22);score_22>99?'':score_22>9?' ':'  '"][calc value="score_22=(score_22).toFixed(1)" memo="***"] \  ([var name="variable_26" memo="***"]-[var name="variable_27" memo="***"])    / Plt [calc value="score_31=(variable_31);score_25>99?'':score_31>9?' ':'  '"][calc value="score_31=(score_31).toFixed(0)" memo="***"]
([var name="variable_23" memo="***"]-[var name="variable_24" memo="***"]) \___________/  ([var name="variable_32" memo="***"]-[var name="variable_33" memo="***"])
           / Hct [calc value="score_28=(variable_28);score_28>99?'':score_28>9?' ':'  '"][calc value="score_28=(score_28).toFixed(1)" memo="***"] \
          /  ([var name="variable_29" memo="***"]-[var name="variable_30" memo="***"])    \
         /               \[/conditional][conditional field="variable_100" condition="(variable_100).is('Adult Female')"]
[text name="variable_1" default=0 size=5] <-- Na (normal: [text name="variable_2" default=136 size=5] to [text name="variable_3" default=145 size=5])
[text name="variable_4" default=0 size=5] <-- K (normal: [text name="variable_5" default=3.5 size=5] to [text name="variable_6" default=5.0 size=5])
[text name="variable_7" default=0 size=5] <-- Cl (normal: [text name="variable_8" default=98 size=5] to [text name="variable_9" default=106 size=5])
[text name="variable_10" default=0 size=5] <-- CO2 (normal: [text name="variable_11" default=23 size=5] to [text name="variable_12" default=28 size=5])
[text name="variable_13" default=0 size=5] <-- BUN (normal: [text name="variable_14" default=8 size=5] to [text name="variable_15" default=20 size=5])
[text name="variable_16" default=0 size=5] <-- Cr (normal: [text name="variable_17" default=0.50 size=5] to [text name="variable_18" default=1.10 size=5])
[text name="variable_19" default=0 size=5] <-- Glu (normal: [text name="variable_20" default=65 size=5] to [text name="variable_21" default=139 size=5])

Na [calc value="score_1=(variable_1);score_1>99?'':score_1>9?' ':'  '"][var name="variable_1" memo="***"]    |Cl [calc value="score_7=(variable_7);score_7>99?'':score_7>9?' ':'  '"][var name="variable_7" memo="***"]   |BUN [calc value="score_13=(variable_13);score_13>99?'':score_13>9?' ':'  '"][var name="variable_13" memo="***"]      /
([var name="variable_2" memo="***"]-[var name="variable_3" memo="***"]) |([var name="variable_8" memo="***"]-[var name="variable_9" memo="***"]) |([var name="variable_14" memo="***"]-[var name="variable_15" memo="***"])      / Glu [var name="variable_19"  memo="***"]
__________|_________|___________/  ([var name="variable_20" memo="***"]-[var name="variable_21" memo="***"])
K [calc value="score_4=(variable_4);score_4>9?'':' '"][calc memo="***" value="score_4=(score_4).toFixed(1)"]    |CO2 [calc value="score_10=(variable_10);score_10>9?'':' '"][var memo="***" name="variable_10"]   |Cr [calc value="score_16=(variable_16);score_16>9?'':' '"][calc memo="***" value="score_16=(score_16).toFixed(2)"]   \
([var name="variable_5" memo="***"]-[var name="variable_6" memo="***"]) |([var name="variable_11" memo="***"]-[var name="variable_12" memo="***"])  |([var name="variable_17" memo="***"]-[var name="variable_18" memo="***"]) \        
          |         |             \
 

[text name="variable_22" default=0 size=5] <-- WBC (normal: [text name="variable_23" default=4.0 size=5] to [text name="variable_24" default=11.0 size=5])
[text name="variable_25" default=0 size=5] <-- Hb (normal: [text name="variable_26" default=12 size=5] to [text name="variable_27" default=16 size=5])
[text name="variable_28" default=0 size=5] <-- Hct (normal: [text name="variable_29" default=37 size=5] to [text name="variable_30" default=47 size=5])
[text name="variable_31" default=0 size=5] <-- Plt (normal: [text name="variable_32" default=150 size=5] to [text name="variable_33" default=450 size=5])

         \   Hb [calc value="score_25=(variable_25);score_25>99?'':score_25>9?' ':'  '"][calc value="score_25=(score_25).toFixed(1)" memo="***"]    /
WBC [calc value="score_22=(variable_22);score_22>99?'':score_22>9?' ':'  '"][calc value="score_22=(score_22).toFixed(1)" memo="***"] \  ([var name="variable_26" memo="***"]-[var name="variable_27" memo="***"])    / Plt [calc value="score_31=(variable_31);score_25>99?'':score_31>9?' ':'  '"][calc value="score_31=(score_31).toFixed(0)" memo="***"]
([var name="variable_23" memo="***"]-[var name="variable_24" memo="***"]) \___________/  ([var name="variable_32" memo="***"]-[var name="variable_33" memo="***"])
           / Hct [calc value="score_28=(variable_28);score_28>99?'':score_28>9?' ':'  '"][calc value="score_28=(score_28).toFixed(1)" memo="***"] \
          /  ([var name="variable_29" memo="***"]-[var name="variable_30" memo="***"])    \
         /               \[/conditional]
[checkbox memo="References (Hide/Show)" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"][link memo="ABIM laboratory test reference ranges." url="https://www.abim.org/~/media/ABIM%20Public/Files/pdf/exam/laboratory-reference-ranges.pdf"][/conditional]
