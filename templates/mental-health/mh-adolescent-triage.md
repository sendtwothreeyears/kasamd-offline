# MH - Adolescent Triage

**Category:** * Unknown
**Source:** https://www.soapnote.org/mental-health/mh-adolescent-triage/

---

TRIAGE DETAILS

Date of assessment: [text default="date"]

Time of assessment: [text default="time"]

Location: [text default=""]

Referred by: [text default=""]

Reason for referral: [textarea cols=80 rows=5 default="Pt was referred second to concerns over"]

Communication issues: [textarea cols=50 rows=1 default="Nil"] 

Information taken: [checkbox value="via telephone|face-to-face|from EMR|from triage report|from colleague"] [text default=""]

Is the client aware of the referral?: [select value="yes|no|uncertain"]

Is a designated care provider aware of the referral? [select value="N/A|yes|no|uncertain"]

HISTORY

History of presenting concerns: [textarea cols=80 rows=20 default=""].

Medical issues: [textarea cols=80 rows=10 default="Nil known"]. 

-- Current treatments --

Medication: [textarea cols=50 rows=5 default="Nil known"]
Psychological: [textarea cols=50 rows=5 default="Nil known"] 
Complementary: [textarea cols=50 rows=5 default="Nil known"]
Other: [textarea cols=50 rows=5 default="Nil known"]

Legal Status and Forensic issues: [textarea cols=50 rows=10 default="Nil known"].

Current functioning and supports: [textarea cols=80 rows=10 default=""].

[checkbox name="EDConcern" value="Eating Disorder concerns identified:|No Eating Disorder concerns identified."]
[conditional field="EDConcern" condition="(EDConcern).is('Eating Disorder concerns identified:')"]

SCOFF Assessment: [checkbox value="No concerns identified|Pt vomits when uncomfortably full|Pt has lost control of eating patterns|Pt has lost over 6kg in a three-month period|Pt perceives being overweight despite what others say|food dominates the Pt's life|Pt eats in secret|Pt is dissatisfied with eating habits"]

Other concerns:
[checkbox value="Nil identified|Relationship with food is problematic|Pt thinks about food, body, weight, and shape too much|Pt regularly diets or restricts food intake|Pt is underweight|Pt is losing weight quickly|Pt vomits after eating|Pt binges and overeats|Pt tries to control weight with laxatives|Pt exercises over 1 hour per day|Pt is fighting with family about eating|Pt is controlling the family's mealtimes|Pt wears loose fitting clothes"]

Medical risk:
[checkbox value="No medical concerns identified|Pt is fainting|Pt is vomiting multiple times a day|Pt vomits blood|Pt having chest pains|Pt feels weak and has muscle cramps|Pts GP is worried"]

Additional information:
[textarea default="Nil"]
[/conditional]

[comment memo=" Example of formulation: Pt presents with strong suicidal thoughts but no firm plan to act on these thoughts. This was precipitated by the recent breakdown of his marriage of 20 years. Historical factors contributing to this include: long history of depression, recent loss of job, and not attending to relationship challenges for a number of years. Pt reports this current pattern of dysfunction: he wakes up and just lies in bed ruminating, he can't eat or distract himself from miserable thoughts, he drinks alcohol too early in the day and texts his ex wanting her to return. Protective factors for Pt include: his dog, his kids who he loves, and supportive parents who are worried"].

Formulation: [textarea cols=80 rows=20 default="Pt presents with XXXX. This was precipitated by XXXX. Historical factors contributing to this include: XXXX. Pt reports this current pattern of dysfunction: XXXX. Protective factors for Pt include:"].

-- Mental Status Examination --

Pt is a [checkbox value="young adult|mid-aged adult|older adult|young teen|older teen|child"] [checkbox value="male|female"]. Grooming was [checkbox value="unable to be assessed|reasonable|neglected|meticulous"]. 
Posture was [checkbox value="unable to be assessed|relaxed|rigid|stooped|confident|aggressive|tense|slumped"]
Movement was [checkbox value="unable to be assessed|unremarkable|odd / peculiar|slowed|repetitive|restless|agitated|tremorous"]
Attention: [checkbox value="no concerns - attended well|seemed unaware|inattentive|distractible|hyper-vigilant|scattered concentration|preoccupied|confused|focused on irrelevancies"]
Engagement: [checkbox value="no concerns - engaged well|chatty|willing to open up|avoided eye contact|fixed staring|glaring at author|tense facial expression|dependent and needy|dramatic and exaggerating concerns|passive and difficult to engage|uninterested|silly and joking around|resistant|critical and verbally combative|hostile and threatening|sarcastic and taunting|irritable|fatuous|flirtatious|demanding|threatening|guarded|paranoid|defensive and resistant|manipulative|argumentative"]
Mood reported: [checkbox value="euthymic|sad|happy|ok|fine|angry|flat|depressed|neutral|worried|euphoric|dysphoric|apathetic|ashamed|irritable|hostile|pessimistic|manic"]
Affect observed: [checkbox value="congruent with reported mood|well regulated|incongruent with mood|constricted|labile|reactive|blunted."]
Speech: [checkbox value="spontaneous|normal RTV|abnormal RTV|clear and articulate|selectively mute|mute|loud|laconic|verbose|quiet|pressured|slowed|rambling|babbling|incongruent with mood and current circumstances"]
Thinking: [checkbox value="logical|linear|rigid and concrete|personalizing|persecutory|indecisive|unrealistic|difficulties of reference|magical ideas of influence|distorted|pseudologica fantastica|memory difficulties|provided unnecessary detail (circumstantial)|wandered between many topics (tangential)|jumped from one idea to another (loose associations)|racing thoughts (flight of ideas)|abruptly changed topic or stopped mid-sentence (thought blocking)|tended to loop or repeat themes (obsessive)|stuck on over-valued ideas (preoccupations)"]
Orientation: [checkbox value="no concerns|AH reported|VH reported|poor judgement|poor reality testing|poor insight|complete denial"]
Stressors disclosed without prompting: [checkbox value="nil|self-esteem|parenting|spouse|money|school|physical health|energy|sleep|body weight\shape|eating|food|housing|employment|mood|family|work|grief and loss|illness|transitions|legal|peers|relationship"]

-- SUICIDE RISK SUMMARY -- 

Pt confirmed having [checkbox name="freq" value="no suicidal thoughts.|suicidal thoughts"][conditional field="freq" condition="(freq).is('suicidal thoughts')"] [checkbox value="every now and then|every other day|every day"], and rated these thoughts as [checkbox value="mild|moderate|severe"] in their intensity. 

When asked about having suicide plans, the patient reported: [checkbox value="no current plans|vague plans|having a definite plan|they are unwilling to discuss it"]. 

When further asked about how close have they been to acting on these thoughts in the past, the patient reported [checkbox value="not close at all|very close|they did indeed attempt suicide|they do not wish to discuss it"]. 

When asked how certain they feel about acting on these thoughts in the future, the patient reported [checkbox value="it's unlikely|they weren't sure|they were absolutely certain|they did not wish to discuss it"] 

Finally, when I asked about having access to the means to suicide, the patient reported [checkbox value="no|yes possibly|yes absolutely"][/conditional]

Risk State (risk compared to Pts usual baseline): [checkbox value="higher than|similar to|lower than"] the Pts usual baseline of risk.

Risk Status (risk relative to a specified subpopulation): [checkbox value="higher than|similar to|lower than"] the general population, and [checkbox value="higher than|similar to|lower than"] other Pts in the current service setting.

Foreseeable changes in risk: 

[textarea default=""]

Available resources immediately accessible to the Pt: 

[textarea default="Help line numbers, Acute Care Team, PRN meds, Friends, Family, Counsellor, Community Mental Health Clinician, Disability Support Worker, NGO Caseworker"]

[checkbox name="stat" value="-- ENDURING RISK FACTORS --"][conditional field="stat" condition="(stat).is('-- ENDURING RISK FACTORS --')"] 

Strengths and Protective Factors

[checkbox value="treatment responsiveness|connectedness to individuals, family, community, and social institutions|problem-solving skills|coping skills|ability to adapt to change|they sense of purpose or meaning in life Cultural, religious, or personal beliefs that discourage self-injury|good social skills|ability to manage feelings of anger|good health|access to mental and physical health care|healthy fear of risky behaviours and pain|hope for the future and optimism|sobriety|medical compliance|a sense of the importance of health and wellness|impulse control|they strong sense of self-worth or self-esteem|a sense of personal control or determination|access to a variety of clinical interventions and support for seeking help|resiliency|expressed reasons for living|being married|being a parent|strong relationships, particularly with family members|opportunities to participate in and contribute to school or community projects and activities|living in a reasonably safe and stable environment|having restricted access to lethal means|sense of responsibility and duty to others|being a pet owner"]

Long-term Risk Factors

[checkbox value="Hx of denying the need for service contact|Hx of avoiding service contact|Dx of eating disorder|Dx neurological disorder|persistent psychotic illness|non-responsiveness to pharmacological treatment|non-responsiveness to psycho-social interventions|chronic stressors|Hx of psychiatric illness|long-standing fascination with death|social isolation|romantises death and dying|Hx of discrimination|a background of childhood adversity|having a family history of suicide|a disruptive and unsupportive family background|Dx of PTSD|combat veteran|background of being a first responder|Hx of relationship conflicts|divorced|complex family dynamics|unsupportive family|demographic - male - single age 35-64|substance misuse|absolutistic thinking|tunnel vision|perfectionism|sexual orientation rejected by family|guns in the home|access to abundant medications|chronic medical illness|chronic pain"]

Impulsivity/Self Control

[checkbox value="Hx of impulsive behaviour|problem-solving difficulties|unstable personality structure|Hx of substance abuse|low threshold for boredom|Hx of provocative behaviours|Dx with ABI|Dx with intellectual disability|Dx with developmental delay|Pt struggles with decision-making|Hx of sensation seeking behaviours|Pt struggles to delay gratification|Pt struggles to self-regulate emotions|low threshold for emotional arousal|Pt struggles to maintain goal focus|external locus of control|Hx of reckless self-endangerment|Pt struggles to inhibit aggression|limited capacity for self-soothing|low expecations for positive future|Dx with ADHD|Pt remains pre-occupied with suicide"]

Past Suicidal Behaviour

[checkbox value="history of self-harm|history of previous suicide attempts|previous hospitalization for suicidality|previous hospitalization for self-harm"][/conditional]

[checkbox name="Dyna" value="-- DYNAMIC RISK FACTORS --"][conditional field="Dyna" condition="(Dyna).is('-- DYNAMIC RISK FACTORS --')"] 

Recent/present suicide ideation or behaviour

[checkbox value="current suicidal ideation|has a suicide plan|suicide plan has high lethality|preparation behahiours|vocalising threat to suicide|rehearsal behaviours|access to lethal means|recent suicide attempt|Pt regrets not dying|mood lability|persistent agitation|tearful|guarded|withdrawal from services|increased impulsivity|increased recklessness|increased anger|seeking revenge|recent violent behaviours|final act behaviours"]

Stressors / precipitants

[checkbox value="financial loss|poor health|pending incarceration|detention|stressful loss|rejection|sense of being a burden|feeling alone|feeling isolated|suicide contagion in community|feeling trapped|recent humiliation|recent assualt|social rejection|anniversary of loss|suicide command hallucinations|argument with intimate|relationship conflict|loss of status|loss of self-esteem|loss of purpose and meaning|loss of social support|recent loss of job|suicide of an intimate"]

[textarea default=""]

Symptoms, suffering and recent changes

[checkbox value="increased depressive symptoms|reports inner torment|persistent negative thoughts about self|reports self-hatred|social media posts about suicide|persistent crying|final act behaviours|mental illness Sx|unremitting pain|recent discharge from MHIPU|feeling trapped|increased substance abuse|persistent self-devaluation|no reasons for living|stalking|comorbid MH concerns|increasing impulsivity|being victimised|pending unemployment|increasing financial pressures|persistent nightmares|increasing financial pressure|recklessness|feeling out of control|feeling intolerably alone|withdrawal|feeling anger|icreased anxiety|panic|fear|agitation|hopelesness|pending legal issues|negative appraisals of self|insomnia|intense jealousy over ex|low expectation for recovery|pending criminal charges|declining health|feelings of shame|change in sleep patterns|change in appetite|access to lethal means|unmet needs|feelings of anger"]

[textarea default=""][/conditional]

Self harm issues (current or past): [textarea cols=80 rows=10 default="No documented history and no foreseeable concerns disclosed when asked."]

Violence Issues (current or past): [textarea cols=80 rows=10 default="No documented history and no foreseeable concerns disclosed when asked."]

Other issues affecting urgency: [textarea cols=80 rows=10 default="No documented history and no foreseeable concerns disclosed when asked."]

Factors affecting assessment: 

Is the patient's presentation highly changeable? [textarea cols=20 rows=1 default="Yes / No evidence of changeability"]
Are the patient's circumstances and supports unstable? [textarea cols=20 rows=1 default="Yes / No"]
Is corroborative information available from family, carers or others? [textarea cols=20 rows=1 default="Yes / No"]

ACTION PLAN

[checkbox value="No action taken|provided brief supportive counselling|actively listened and validated Pt concerns|referred Pt to suicide prevention service|hospitalization recommended|immediate assessment with MH professional recommended|discussed Pt with supervisor|discussed Pt with MDT|supported Pt to remove lethal means|arranged monitoring by supportive person|informed family of risk|advised primary health provider of risk|recommended Pt seek treatment of MH Sx|recommended D&A treatment service|recommended counselling|helped Pt improve coping strategies|challenged Pts negative beliefs|emphasized behavioural control|encouranged behavioural activation to enhance mood|recommended pleasant activities|recommended to call 000 or present to ED after hours if needed|recommended Pt to call Acute Care Team after hours or Community Mental Health outpatients during business hours if Sx worsen|recommended use of PRN medications|alerted supportive individuals|recommended increasing psychosocial supports|encouraged reality-testing with family, friends or professionals|provided interruption strategies for troubling thoughts|after hours numbers provided|written safety plan provided"] [textarea cols=80 rows=10 default="Other"]

Other services involved: [textarea cols=40 rows=5 default="Nil"]

Contacts:

Communication undertaken with: [textarea cols=80 rows=10 default="Carer name; discussed the issues and action plan with (carer name) and they are (not) in agreement. Contact number. Comments. Date."]

GP: [textarea cols=80 rows=10 default="GP is . Contact number. Address."]

Referrer: [textarea cols=80 rows=10 default="Referrer is . Contact number. Address"]

Additional contacts: [textarea cols=80 rows=10 default="Additional contacts name. Contact number. Details"].
