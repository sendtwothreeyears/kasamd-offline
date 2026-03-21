# Advanced Care Planning

**Category:** General & Administrative
**Source:** https://www.soapnote.org/general/advanced-care-planning/

---

Advanced Care Planning 
Date of Service -[date name="date1" default="today"]
Location - [text name="variable_1" default=""]

Demographics and Patient Status 
[textarea name="demo1" default=""]

Advanced Illness
[textarea name="acphpi1" default=""] 

Current Advanced Care Directives  
Health Care Proxy - [select name="HCP1" value="Yes|No"]
[conditional field="HCP1" condition="(HCP1).is('Yes')"]
[textarea name="HCPtxt1" default=""]
[comment memo="Name, Relationship to patient, Phone number"][/conditional]
[checkbox name="ACD_2" value="Living Will|Documentation of Oral Advance Directive|Durable Power of Attorney|DNR|DNI|No Feeding Tube|Do Not Hospitalize|"][conditional field="ACD_2" condition="(ACD_2).is('')"][textarea name="ACDtext1" default=""]
[comment memo="Discuss any additional information regarding ACD"][/conditional]

Members present during discussion-
[textarea name="acpwitness" default=""]
[comment memo="Name, Relationship to patient, Phone number"] 

Topics Discussed 
[textarea name="topics" default=""]

Change in Patient's Wishes -
[select name="Wish1" value="No|Yes"][conditional field="Wish1" condition="(Wish1).is('Yes')"]
[textarea name="ACDtext1" default=""][/conditional]
Outcome of Visit
[textarea name="outcomes" default=""]

Patient's Understanding 
[textarea name="understanding" default="At the end of our discussion, I asked the patient to explain their understanding of our discussion. The patient stated.......All parties present were in agreement with the decision made. "]
[comment memo="Describe the patients understanding in their words"]
