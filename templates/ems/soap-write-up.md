# SOAP Write Up

**Category:** Emergency Medical Services
**Source:** https://www.soapnote.org/ems/soap-write-up/

---

[comment memo="ONE-LINER"]
Patient is a [text size="3"]-year-old [select value="male|female"] with a PMH significant for [textarea name="hpi" default=""] who presented with [text name="time" default=""]
[select value="day(s)|week(s)|month(s)"] of [textarea name="CC" default=""] most concerning for
[textarea name="ddx" default=""].[checkbox name="overnightevents" value="No overnight events to report"]
[checkbox name="ED course" value="ED course"][conditional field="ED course" condition="(ED course).is('Overnight Events')"][textarea memo="Events" memo_size="small" cols="100" rows="6"] [/conditional]This morning:[textarea name="subjective" default=""][comment memo="Last 24h events"]
[textarea name="last24h" default=""][comment memo="OBJECTIVE"]
Vitals- [select name="Vitals" value="reviewed/stable|reviewed/pertinent for- "][conditional field="Vitals" condition="(Vitals).is('reviewed/pertinent for- ')"][text default="BP *, HR *, RR *, T *, SpO2 * % on *L" size="60"][/conditional]Last bowel movement: [textarea name="bm" default=""]I/Os: [text name="in" default=""] / [text name="out" default=""]
source: [textarea name="source" default=""]
PE:
[checkbox name="notablefor" value="Notable For"][conditional field="notablefor" condition="(notablefor).is('Notable For')"][textarea memo="Events" memo_size="small" cols="100" rows="6"] [/conditional]GEN- [text size="60"] [checkbox value="well developed|well nourished|A&Ox4|NAD"]
HEENT- [text size="60"] [checkbox value="Normocephalic|atraumatic|conjunctiva clear|sclerae aninteric|TMs with clearly visible landmarks|nares patent|mucous membranes moist|throat nonerythematous/noninjected|good dentition"]
Neck- [text size="60"] [checkbox value="soft/supple|no JVD|no thyromegaly|no tender/enlarged lymph nodes"]
CHEST- [text size="60"] [checkbox value="Normal rise and fall B/L|No accessory muscle use"]
HEART- [text size="60"] [checkbox value="RRR|normal S1/S2|No M/R/G|No S3/S4 auscultated|no friction rub"]
LUNGS- [text size="60"] [checkbox value="CTAB|BSE b/l|no wheezes|no crackles|no rhonchi"]
ABD- [text size="60"] [checkbox value="soft|nontender|nondistended|no voluntary/involuntary guarding|no peritoneal signs|bowel sounds present in all 4 quadrants"]
SKIN- [text size="60"] [checkbox value="warm|dry|intact|no edema|no erythema|no ecchymosis"]
EXT- [text size="60"] [checkbox value="no gross deformities noted|no cyanosis|no clubbing"]
NEURO- [text size="60"] [checkbox value="mentating well|moves all extremities equally well|CN 2-12 grossly intact b/l|normal sensorium all 4 extremities|no gross motor deficits|Romberg negative|cerebellar testing normal|DTRs 2/4 x4|gait testing without abnormalities"]EKG- [select name="EKG" value="none|reviewed-"] [conditional field="EKG" condition="(EKG).is('reviewed-')"][checkbox value="normal sinus rhythm|tachycardia|bradycardia|normal axis|left axis deviation|right axis deviation|PR interval normal|QRS complex normal|No relevant ST segment deviation/elevation in contiguous leads|QT interval not prolonged"] [text size="80"][/conditional]LABS- [select name="Labs" value="nothing to review|reviewed/unremarkable|reviewed/notable for- "][conditional field="Labs" condition="(Labs).is('reviewed/notable for- ')"][textarea][/conditional]RADS- [select name="Rads" value="nothing to review|reviewed/unremarkable|reviewed/notable for- "][conditional field="Rads" condition="(Rads).is('reviewed/notable for- ')"][textarea][/conditional]_____________________________________________________________________________
[comment memo="Inpatient H&P AP Portion"]
A/P: [text size="3"]yo [select value="M|F"] with PMH of [text size="60"] with current [text size="60"] most concerning for [text size="60"] vs [text size="60"].
on hospital day [text size="5"], still admitted due to [text size="60"].[checkbox name="abx" value="Antibiotics"][conditional field="abx" condition="(abx).is('Antibiotics')"][text memo="day - of -" memo_size="small" size="60"]
[/conditional]#[text memo="dx" memo_size="small" size="60"]
[textarea discussion/plan" cols="100" rows="6"]
[comment memo="Drop-downs for add'l problems" memo_size="small"]
[checkbox name="Problem1" value="#"][conditional field="Problem1" condition="(Problem1).is('#')"][text memo="dx" memo_size="small" size="60"]
[textarea memo="discussion/plan" memo_size="small" cols="100" rows="6"][/conditional][checkbox name="Problem2" value="#"][conditional field="Problem2" condition="(Problem2).is('#')"][text memo="dx" memo_size="small" size="60"]
[textarea memo="discussion/plan" memo_size="small" cols="100" rows="6"][/conditional][checkbox name="Problem3" value="#"][conditional field="Problem3" condition="(Problem3).is('#')"][text memo="dx" memo_size="small" size="60"]
[textarea memo="discussion/plan" memo_size="small" cols="100" rows="6"][/conditional][checkbox name="Problem4" value="#"][conditional field="Problem4" condition="(Problem4).is('#')"][text memo="dx" memo_size="small" size="60"]
[textarea memo="discussion/plan" memo_size="small" cols="100" rows="6"][/conditional][checkbox name="Problem5" value="#"][conditional field="Problem5" condition="(Problem5).is('#')"][text memo="dx" memo_size="small" size="60"]
[textarea memo="discussion/plan" memo_size="small" cols="100" rows="6"][/conditional][checkbox name="Problem6" value="#"][conditional field="Problem6" condition="(Problem6).is('#')"][text memo="dx" memo_size="small" size="60"]
[textarea memo="discussion/plan" memo_size="small" cols="100" rows="6"][/conditional]Chronic Medical Conditions: [select name="Chronic" value="none|as follows"]
[conditional field="Chronic" condition="(Chronic).is('as follows')"][textarea default="#dx - stable. no issues. continue current home treatment/meds." cols="80" rows="10"][/conditional]
Prophylaxis
GI- [select value="not indicated|PPI"]
DVT- [select value="low padua score|SCDs|Lovenox|Heparin"]Dispo: Anticipate hospital stay length of [text size="5"] days. Anticipate discharge home once [comment memo="List discharge criteria" memo_size="small"][checkbox value="tolerating PO|dehydration resolved|stable O2 requirement|no O2 requirement|off of IV antibiotics|no longer requiring IV narcotics for pain control|pain adequately improved/improving"][text size="80"].Code status: [select name="codestatus2" value="Full Code|DNR/DNI|other-"][conditional field="codestatus2" condition="(codestatus2).is('other-')"][text size="50"][/conditional]
