# Transfer/Discharge Summary

**Category:** Obstetrics
**Source:** https://www.soapnote.org/social-work/it-discharge-summary/

---

[comment memo="Summary type: "]
[checkbox name="expand_tr" value="" memo="TRANSFER"][conditional field="expand_tr" condition="(expand_tr).is('')"]
TRANSFER SUMMARY 3.8.5.1   
Program: [checkbox value="Case Management|Individual Therapy|Couples/Family Therapy|Group Therapy"]
Summary Progress Toward Goal(s): [textarea name="summarytr" default=""]
Reason(s) for transfer: [checkbox value="Client requests transfer to another staff member. "][checkbox value="Client transferred to another staff member due to personnel change. "][checkbox value="Client transferred to another staff member due to caseload adjustment. "][checkbox name="expand_othtr" value="" memo="Other: "][conditional field="expand_othtr" condition="(expand_othtr).is('')"][text size="60"][/conditional][/conditional]
[checkbox name="expand_dc" value="" memo="DISCHARGE"][conditional field="expand_dc" condition="(expand_dc).is('')"]
DISCHARGE SUMMARY 3.8.5.1
Program: [checkbox value="Case Management|Individual Therapy|Couples/Family Therapy|Group Therapy"]
Summary Progress Toward Goal(s): [textarea name="summarydc" default=""]
Reason(s) for discharge: [checkbox value="Client goals met; client asked to discontinue services. "][checkbox value="Client goals not met; client asked to discontinue services. "][checkbox value="Client failed to maintain contact with staff. "][checkbox value="Client continued to have multiple no-shows. "][checkbox value="Client has not received services in last 30 days. "][checkbox value="Client was instructed to contact the front desk to reopen to services at any time. "][checkbox name="expand_oth" value="" memo="Other: "][conditional field="expand_oth" condition="(expand_oth).is('')"][text size="60"][/conditional][/conditional]

Bio/psycho/social status at transfer/discharge: [select value="|High functioning in all primary aspects of life.|Moderate/adequate functioning in all primary aspects of life.|Low functioning in all primary aspects of life."]
[checkbox name="expand_need" value="" memo="Need"][conditional field="expand_need" condition="(expand_need).is('')"]Need for improvement in [checkbox value="mental health|physical health|social/interpersonal functioning"].[/conditional]
[checkbox name="expand_rec" value="" memo="RECOVERY CLIENTS ONLY"][conditional field="expand_rec" condition="(expand_rec).is('')"]
Arrangements for recovery maintenance:
Referral #1: [text size="60"]
Instructions: [text size="60"]
Referral #2: [text size="60"]
Instructions: [text size="60"]
Total days abstinent from primary substance: [text size="3"][/conditional]
[checkbox value="Outcome measures entered in Continuum."]
Signed by /s/[text default="" memo="Full Name"], [text default="" memo="Credentials"]  

********************************************
[comment memo="INSTRUCTIONS: 
1. Select    Discharge    or    Transfer    and    complete    expanded    fields. 
2.    Click ‘Calculate the Result!’ 
3.    Copy/paste result into a 'DC' Continuum    encounter.

This    replaces paper form 3.8.5.1"]
