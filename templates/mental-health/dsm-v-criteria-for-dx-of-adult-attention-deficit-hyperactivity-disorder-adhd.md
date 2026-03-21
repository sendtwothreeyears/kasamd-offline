# DSM-V Criteria for Dx of Adult Attention Deficit Hyperactivity Disorder (ADHD)

**Category:** Psychiatry & Psychology
**Source:** https://www.soapnote.org/mental-health/dsm-v-criteria-for-dx-of-adult-attention-deficit-hyperactivity-disorder-adhd/

---

DSM-V Criteria for Adult (>17yo) ADHD ICD10 F90.x
For diagnosis, needs to show persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development, as characterized in #1 or #2, and meets all mandatory criteria below.

1. Five (or more) of the following symptoms of INATTENTION have persisted for at least six months to a degree that is maladaptive and inconsistent with developmental level and that negatively impacts directly on social and academic/occupational activities:
[select name="Q11" value="no=0|YES=1"] <-- Often fails to give close attention to details or makes careless mistakes in schoolwork, work, or other activities  (e.g., overlooks or misses details, work is inaccurate).
[select name="Q12" value="no=0|YES=1"] <-- Often has difficulty sustaining attention in tasks or play activities (e.g., has difficulty remaining focused during lectures, conversations, or lengthy reading).
[select name="Q13" value="no=0|YES=1"] <-- Often does not seem to listen when spoken to directly (e.g., mind seems elsewhere, even in the absence of any obvious distraction).
[select name="Q14" value="no=0|YES=1"] <-- Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (e.g., starts tasks but quickly loses focus and is easily sidetracked).
[select name="Q15" value="no=0|YES=1"] <-- Often has difficulty organizing tasks and activities (e.g., difficulty managing sequential tasks; difficulty keeping materials and belongings in order; messy, disorganized work; has poor time management; fails to meet deadlines).
[select name="Q16" value="no=0|YES=1"] <-- Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort (e.g., schoolwork or homework; for older adolescents and adults, preparing reports, completing forms, reviewing lengthy papers).
[select name="Q17" value="no=0|YES=1"] <-- Often loses things necessary for tasks or activities (e.g., school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile telephones).
[select name="Q18" value="no=0|YES=1"] <-- Is often easily distracted by extraneous stimuli (for older adolescents and adults, may include unrelated thoughts).
[select name="Q19" value="no=0|YES=1"] <-- Is often forgetful in daily activities (e.g., doing chores, running errands; for older adolescents and adults, returning calls, paying bills, keeping appointments).

2. Five (or more) of the following symptoms of HYPERACTIVITY-IMPULSIVITY have persisted for at least six months to a degree that is  inconsistent with developmental level and that negatively impacts directly on social and academic/occupational activities:
[select name="Q21" value="no=0|YES=1"] <-- Often fidgets with or taps hands or feet or squirms in seat.
[select name="Q22" value="no=0|YES=1"] <-- Often leaves seat in situations when remaining seated is expected (e.g., leaves his or her place in the classroom, in the office or other workplace, or in other situations that require remaining in place).
[select name="Q23" value="no=0|YES=1"] <-- Often runs about or climbs in situations where it is inappropriate. (Note: In adolescents or adults, may be limited to feeling restless.)
[select name="Q24" value="no=0|YES=1"] <-- Often unable to play or engage in leisure activities quietly.
[select name="Q25" value="no=0|YES=1"] <-- Is often “on the go,” acting as if “driven by a motor” (e.g., is unable to be or uncomfortable being still for extended time, as in restaurants, meetings; may be experienced by others as being restless or difficult to keep up with).
[select name="Q26" value="no=0|YES=1"] <-- Often talks excessively
[select name="Q27" value="no=0|YES=1"] <-- Often blurts out an answer before a question has been completed (e.g., completes people’s sentences; cannot wait for turn in conversation).
[select name="Q28" value="no=0|YES=1"] <-- Often has difficulty waiting his or her turn (e.g., while waiting in line).
[select name="Q29" value="no=0|YES=1"] <-- Often interrupts or intrudes on others (e.g., butts into conversations, games, or activities; may start using other people’s things without asking or receiving permission; for adolescents and
adults, may intrude into or take over what others are doing).

Mandatory criteria (needs to meet all of these)
[select name="Q31" value="no|YES"] <--  The symptoms are NOT solely a manifestation of oppositional behavior, defiance, hostility, or failure to understand tasks or instructions.
[select name="Q32" value="no|YES"] <-- Several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.
[select name="Q33" value="no|YES"] <-- Several inattentive or hyperactive-impulsive symptoms are present in two or more settings (e.g., at home, school, or work; with friends or relatives; in other activities).
[select name="Q34" value="no|YES"] <-- Clear evidence that the symptoms interfere with, or reduce the quality of, social, academic, or occupational functioning.
[select name="Q35" value="no|YES"] <-- Symptoms do NOT occur exclusively during the course of schizophrenia or another psychotic disorder AND are NOT better explained by another mental disorder (e.g., mood disorder, anxiety disorder, dissociative disorder, personality disorder, substance intoxication or withdrawal).

Interpretation 
ADHD - Inattention --> [calc memo="interpretation" value="score=(Q11)+(Q12)+(Q13)+(Q14)+(Q15)+(Q16)+(Q17)+(Q18)+(Q19);score>4?'MEETS CRITERIA ICD10 F90.0':'Does not meet criteria'"]
ADHD - Hyperactivity/Impulsivity --> [calc memo="interpretation" value="score=(Q21)+(Q22)+(Q23)+(Q24)+(Q25)+(Q26)+(Q27)+(Q28)+(Q29);score>4?'MEETS CRITERIA F90.1':'Does not meet criteria'"]
[comment memo="If both, use combined type ICD10 - F90.2"][checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference: 
Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (Copyright © 2013). American Psychiatric Association. referenced from https://images.pearsonclinical.com/images/assets/basc-3/basc3resources/DSM5_DiagnosticCriteria_ADHD.pdf[/conditional]
