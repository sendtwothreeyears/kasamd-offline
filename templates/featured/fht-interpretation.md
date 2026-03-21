# Interpretation of Fetal Heart Tracings

**Category:** Featured
**Source:** https://www.soapnote.org/featured/fht-interpretation/

---

Interpretation of Fetal Heart Tracings
VARIABILITY [comment memo="Fluctuations in baseline that are irregular in amplitude and frequency.  Measured in a 10 minute window.  Amplitude is measured peak to trough."]
Finding --> [select name="Q1" value="Absent - amplitude undetectable|Minimal - amplitude 0 to 5 bpm|Moderate - amplitude 6 to 25 bpm|Marked - amplitude over 25 bpm"]
BASELINE RATE [comment memo="Mean bpm (rounded to 0 or 5) over a 10 minute interval, excluding periodic changes, periods of marked variability, and segments that differ by more than 25 bpm.  The baseline must be identifiable for 2 minutes during the interval (but not necessarily a contiguous 2 minutes), otherwise it is considered indeterminate."]
Finding --> [text name="Q2"] bpm
ACCELERATION [comment memo="An abrupt (less than 30 seconds) increase in the fetal heart rate.  Before 32 weeks gestation, accelerations should last 10 or more seconds and peak 10 or more bpm above baseline.  After 32 weeks gestation, accelerations should last 15 or more seconds and peak 15 or more bpm above baseline.  A prolonged acceleration is 2 or more minutes, but less than 10 minutes.  An acceleration of 10 minutes or more is considered a change in baseline."]
Finding --> [text name="Q3"] accelerations
LATE DECELERATION [comment memo="A gradual (30+ seconds) decrease and return to baseline of the fetal heart rate associated with a uterine contraction.  The nadir of the deceleration occurs after the peak of the contraction."]
Finding --> [text name="Q4"] late decelerations
EARLY DECELERATION [comment memo="A gradual (30+ seconds) decrease and return to baseline of the fetal heart rate associated with a uterine contraction.  The nadir of the deceleration and the peak of the contraction occur at the same time."]
Finding --> [text name="Q5"] early decelerations
VARIABLE DECELERATION [comment memo="An abrupt (less than 30 seconds) decrease in the fetal heart rate below the baseline.  The decrease is at least 15 bpm lasting between 15 seconds and 2 minutes from onset to return to baseline."]
Finding --> [text name="Q6"] variable decelerations
CONTRACTIONS
Finding --> [select name="Q7" value="Present|Absent"][conditional field="Q7" condition="(Q7).is('Present')"]
Frequency --> Every [text name="Q8"] minutes
Rhythm --> [select name="Q9" value="Regular|Irregular"][/conditional]
-------------------------------------------------------------------------------------------------------
INTERPRETATION --> [select name="Q10" value="Reassuring|Non-Reassuring|Ominous"]
[checkbox name="Q11" value=" " memo="show interpretation suggestions"][conditional field="Q11" condition="(Q11).is(' ')"]
INTERPRETATION SUGGESTIONS from FPNotebook.com [link url="http://www.fpnotebook.com/OB/Fetus/FtlHrtTrcng.htm" memo="FPNotebook.com"]
Reassuring
..  Normal baseline (120-160)
..  Moderate Fetal Bradycardia (100-120), good variability
..  Good beat-to-beat variability (short term variability)
..  Accelerations
....    Heart Rate increases by 15-25 bpm over baseline
....    Increase persists for 15-25 seconds
..  Early Decelerations
....    Suggests head compression with contraction
..  Mild Variable Decelerations
Non-Reassuring
..  Fetal Tachycardia (>160)
..  Moderate Fetal Bradycardia (100-120), lost variability
..  Absent beat-to-beat variability (short term variability)
..  Marked Fetal Bradycardia (90-100 bpm)
..  Moderate Variable Decelerations
..  Variable Decelerations
..  Early Decelerations and slow return baseline
Ominous
..  Fetal Tachycardia with loss of variability
..  Prolonged marked Fetal Bradycardia (<90 bpm)
..  Late Decelerations
..  Severe Variable Decelerations
....    Fetal Heart Rate drops below 70 beats per minute
....    Deceleration persists for 1 minute or more
[/conditional]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference:  
[link url="//www.ncbi.nlm.nih.gov/pubmed/18757666" memo="#1"] Macones GA, Hankins GD, Spong CY, Hauth J, Moore T. The 2008 National Institute of Child Health and Human Development workshop report on electronic fetal monitoring: update on definitions, interpretation, and research guidelines. Obstet Gynecol. 2008 Sep;112(3):661-6.
[/conditional]
