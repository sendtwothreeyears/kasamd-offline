# Subjective Form

**Category:** Subjective/History Elements
**Source:** https://www.soapnote.org/subjective/subjective-form/

---

[checkbox name="condition" value="Patient"][conditional field="condition" condition="(condition).is('Patient')"] [checkbox name="status" value="remained stable overnight|with some changes overnight|critical through the night|with improvement overnight|condition remains guarded this am"][text default="" size="60"].[/conditional] [checkbox name="lab" value="Morning labs reviewed."][conditional field="lab" condition="(lab).is('Morning labs reviewed.')"] [checkbox name="chemshows" value="Chemistry shows"] [checkbox name="chemresults" value="no significant change from baseline.|electrolytes improved overnight|creat improved overnight|creat with elevation on am labs"][text default="" size="60"]. [checkbox name="cbcshows" value="CBC shows"] [checkbox name="cbcresults" value="no change from baseline.|improving leukocytosis|worsening leukocytosis|with bandemia|without bandemia|Hgb stable|Hgb improving|Hgb down overnight"] [text default="" size="60"].[checkbox name="Trop" value="Troponin remained negative.|Troponin peaked overnight.|Troponin continues to elevate.|Troponin elevated this am."][text default="" size="60"] [/conditional]

[checkbox name="VS" value="VS reviewed and patient with"][conditional field="VS" condition="(VS).is('VS reviewed and patient with')"] [checkbox name="vss" value="stable vital signs|pyrexia overnight|some abnormalities on tele overnight|tachycardia noted |episodes of bradycardia through the night|BP elevated|improved oxygen demand|stable oxygen requirements|oxygen requirement increased overnight"] [text default="" size="60"]. [checkbox name="uop" value="UOP has been appropriate.|UOP has been poor.|Minimal UOP overnight.|Foley catheter in place."][text default="" size="60"][/conditional]

[checkbox name="mentation" value="Nursing staff reports"][conditional field="mentation" condition="(mentation).is('Nursing staff reports')"] [checkbox name="mental" value="no change in mental status|improved mental status|worsening somnolence|patient with altered mental status overnight|patient obtunded"] [text default="" size="60"].[/conditional]

[checkbox name="diet" value="Remains NPO|Diet is advancing as tolerated|Tolerating oral intake"].
[comment memo="PT and ADLs"]
[checkbox name="ptadls" value="Patient"][conditional field="ptadls" condition="(ptadls).is('Patient')"] [checkbox name="therapy" value="continues to work with therapy.|with PT consult pending.|remains independent with all ADLs."] [text default="" size="60"][/conditional] 
[comment memo="Pain and Nausea"]
[checkbox name="painnausea" value="Patient reports"][conditional field="painnausea" condition="(painnausea).is('Patient reports')"] [checkbox name="pain" value="pain well controlled.|pain improved.|pain worsened overnight.|no change in pain."] [checkbox name="nausea" value="nausea well controlled.|nausea improved.|nausea worsened overnight.|no change in nausea."][text default="" size="60"][/conditional]  

[checkbox name="slept" value="Slept well.|Slept poorly."] [checkbox name="family" value="Family at bedside.|No family at bedside."] [checkbox name="discusslab" value="Discussed lab results and diagnostics."] [checkbox name="planofcare" value="Discussed current plan of care."] [checkbox name="Questions" value="Questions and concerns answered|agrees to current plan of care."][text default="" size="60"]

[comment memo="Discharge"]
[checkbox name="discharge" value="Reports feeling much improved overall and is requesting d/c to home with OP follow up."][conditional field="discharge" condition="(discharge).is('Reports feeling much improved overall and is requesting d/c to home with OP follow up.')"] [checkbox name="safe" value="Patient is stable appropriate for home dc."][text default="" size="60"][/conditional]
