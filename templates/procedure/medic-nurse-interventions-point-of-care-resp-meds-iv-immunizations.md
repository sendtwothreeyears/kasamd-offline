# Medic/Nurse Interventions Point of Care (Resp/Meds/IV/Immunizations)

**Category:** Procedure Note
**Source:** https://www.soapnote.org/procedure/medic-nurse-interventions-point-of-care-resp-meds-iv-immunizations/

---

[comment memo="Medic/LPN/RN Point-of-Care Interventions

" memo_color="blue"][comment memo="*" memo_color="blue" memo_size="small"][checkbox name="nurseRespCare" memo="" memo_size="small" value="RESPIRATORY CARE"][conditional field="nurseRespCare" condition="(nurseRespCare).is('RESPIRATORY CARE')"]

[checkbox value="-Patient's medical record including allergies reviewed
-Physician/PA/NP orders reviewed and verified
-Correct patient verified by full name and DOB
-The following treatments were administered:

"][checkbox name="RespCare1" memo="*" memo_size="small" memo_color="blue" value="ALBUTEROL/ATROVENT (Duoneb)"][/conditional][conditional field="RespCare1" condition="(RespCare1).is('ALBUTEROL/ATROVENT (Duoneb)')"]
-Dose/drug: Albuterol 2.5mg in 0.083% nebulizer solution (3mL) concentration
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Dose/drug: Atrovent 0.02% (0.5mg/2.5mL)
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route: inhaled aerosol per nebulizer
-Verified by: [text size="80"]
-Given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted|symptoms improved slightly|symptoms improved significantly|symptoms worsened|symptoms unchanged|vitals stabilized"] [text size="80" memo="freetext if needed" memo_size="small" memo_color="yellow"]

[/conditional][conditional field="nurseRespCare" condition="(nurseRespCare).is('RESPIRATORY CARE')"][checkbox name="RespCare2" memo="*" memo_size="small" memo_color="blue" value="ALBUTEROL"][/conditional][conditional field="RespCare2" condition="(RespCare2).is('ALBUTEROL')"]
-Dose/route: [select name="RespCareAlb" value="90mcg MDI inhaled|2.5mg in 0.083% concentration nebulizer solution 3mL"]
[/conditional][conditional field="RespCareAlb|RespCare2" condition="((RespCareAlb).is('90mcg MDI inhaled'))&&((RespCare2).is('ALBUTEROL'))"]-[text size="5"] puff(s)
[/conditional][conditional field="RespCareAlb|RespCare2" condition="((RespCareAlb).is('2.5mg in 0.083% concentration nebulizer solution 3mL'))&&((RespCare2).is('ALBUTEROL'))"]-[text size="5"] treatment(s)/neb(s)
[/conditional][conditional field="RespCare2" condition="(RespCare2).is('ALBUTEROL')"]-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Verified by: [text size="80"]
-Given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted|symptoms improved slightly|symptoms improved significantly|symptoms worsened|symptoms unchanged|vitals stabilized"] [text size="80" memo="freetext if needed" memo_size="small" memo_color="yellow"]

[/conditional][conditional field="nurseRespCare" condition="(nurseRespCare).is('RESPIRATORY CARE')"][checkbox name="RespCare3" memo="*" memo_size="small" memo_color="blue" value="OXYGEN"][/conditional][conditional field="RespCare3" condition="(RespCare3).is('OXYGEN')"]
-Dose: [text size="5"] liters per minute
-Duration of time: [text size="5"] minute(s)
-Route: [checkbox value="Nasal cannula|Simple face mask|Non-rebreather mask|Partial non-rebreather mask"]
-Verified by: [text size="80"]
-Given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted|symptoms improved slightly|symptoms improved significantly|symptoms worsened|symptoms unchanged|vitals stabilized"] [text size="80" memo="freetext if needed" memo_size="small" memo_color="yellow"]

[/conditional][conditional field="nurseRespCare" condition="(nurseRespCare).is('RESPIRATORY CARE')"]Patient disposition
[checkbox value="-Tolerated medication(s) well without significant side effects
-Patient's overall clinical improved sufficiently for discharge
-Patient left in stable condition
"][textarea memo="dispo freetext if needed" memo_size="small" memo_color="yellow" rows="2"]
[/conditional][comment memo="*" memo_color="blue" memo_size="small"][checkbox name="nurseIMIVmeds" value="PARENTERAL MEDICATIONS"][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"]

[checkbox value="-Patient's medical record including allergies reviewed
-Physician/PA/NP orders reviewed and verified
-Correct patient verified by full name and DOB
-The following medications were administered:

"][checkbox name="IVIMmed1" memo="*" memo_size="small" memo_color="blue" value="KETOROLAC (Toradol)"][/conditional][conditional field="IVIMmed1" condition="(IVIMmed1).is('KETOROLAC (Toradol)')"]
-Dose: [select value="|15mg|30mg|60mg"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|IV push|R|L|Deltoid|Arm (IV)|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted|pain improved slightly|pain improved significantly|pain worsened|pain unchanged"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed2" memo="*" memo_size="small" memo_color="blue" value="CEFTRIAXONE (Rocephin)"][/conditional][conditional field="IVIMmed2" condition="(IVIMmed2).is('CEFTRIAXONE (Rocephin)')"]
-Dose: [select value="|250mg|500mg|1gm"]
-Reconstituted with [select name="rocephinreconst" value="|sterile water|saline|1% lidocaine"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|R|L|Deltoid|Gluteus"]
[/conditional][conditional field="rocephinreconst" condition="(rocephinreconst).is('1% lidocaine')"][comment memo="*" memo_color="orange" memo_size="small"]-Lidocaine Lot#: [text size="12"]
[comment memo="*" memo_color="orange" memo_size="small"]-Lidocaine EXP Date: [text size="12"]
[/conditional][conditional field="IVIMmed2" condition="(IVIMmed2).is('CEFTRIAXONE (Rocephin)')"]-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed3" memo="*" memo_size="small" memo_color="blue" value="DEXAMETHASONE (Decadron)"][/conditional][conditional field="IVIMmed3" condition="(IVIMmed3).is('DEXAMETHASONE (Decadron)')"]
-Dose: [select value="|4mg"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|IV slow push|R|L|Deltoid|Arm (IV)|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed4" memo="*" memo_size="small" memo_color="blue" value="METHYLPREDNISOLONE ACETATE (Depo-medrol)"][/conditional][conditional field="IVIMmed4" condition="(IVIMmed4).is('METHYLPREDNISOLONE ACETATE (Depo-medrol)')"]
-Dose: [select value="|80mg|40mg"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|IV push|R|L|Deltoid|Arm (IV)|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed5" memo="*" memo_size="small" memo_color="blue" value="METHYLPREDNISOLONE SUCCINATE (Solu-medrol)"][/conditional][conditional field="IVIMmed5" condition="(IVIMmed5).is('METHYLPREDNISOLONE SUCCINATE (Solu-medrol)')"]
-Dose: [select value="|40mg|125mg"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|IV push|R|L|Deltoid|Arm (IV)|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed6" memo="*" memo_size="small" memo_color="blue" value="PROMETHAZINE (Phenergan)"][/conditional][conditional field="IVIMmed6" condition="(IVIMmed6).is('PROMETHAZINE (Phenergan)')"]
-Dose: [select value="|6.25mg|12.5mg|25mg"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|IV slow push|R|L|Deltoid|Arm (IV)|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant side effects noted|nausea improved slightly|nausea improved significantly|nausea worsened|nausea unchanged"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed7" memo="*" memo_size="small" memo_color="blue" value="ONDANSETRON (Zofran)"][/conditional][conditional field="IVIMmed7" condition="(IVIMmed7).is('ONDANSETRON (Zofran)')"]
-Dose: [select value="|4mg|8mg"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|IV push|R|L|Deltoid|Arm (IV)|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant side effects noted|nausea improved slightly|nausea improved significantly|nausea worsened|nausea unchanged"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed8" memo="*" memo_size="small" memo_color="blue" value="METOCLOPRAMIDE (Reglan)"][/conditional][conditional field="IVIMmed8" condition="(IVIMmed8).is('METOCLOPRAMIDE (Reglan)')"]
-Dose: [select value="|5mg|10mg"]
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|IV push|R|L|Deltoid|Arm (IV)|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant side effects noted|nausea improved slightly|nausea improved significantly|nausea worsened|nausea unchanged|pain improved slightly|pain improved significantly|pain worsened|pain unchanged"] [text size="80"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"][checkbox name="IVIMmed9" memo="*" memo_size="small" memo_color="blue" value="MEDROXYPROGESTERONE (Depo-Provera)"][/conditional][conditional field="IVIMmed9" condition="(IVIMmed9).is('MEDROXYPROGESTERONE (Depo-Provera)')"]
-Pregnancy status: [checkbox value="Negative HCG verified|Patient currently in her window and no HCG required|Patient meets CDC criteria for no HCG testing"]
-Dose: 150mg
-Lot#: [text size="12"]
-EXP Date: [text size="12"]
-Route/Location: [checkbox value="IM|R|L|Deltoid|Gluteus"]
-Medication verified by: [text size="80"]
-Medication given by: [text size="80"]
-Date/time given: [date name="DepoDate" default="timestamp"]
-Reassessment: reassessed after [text size="5"] minutes, [checkbox value="no significant adverse side effects noted"] [text size="80"]
-Next window: [calc memo="calc value" value="score1=(DepoDate).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"]

[/conditional][conditional field="nurseIMIVmeds" condition="(nurseIMIVmeds).is('PARENTERAL MEDICATIONS')"]Patient disposition
[checkbox value="-Tolerated medication(s) well without significant side effects
-Patient's overall clinical improved sufficiently for discharge
-Patient left in stable condition
"][textarea memo="dispo freetext if needed" memo_size="small" memo_color="yellow" rows="2"]

[/conditional][comment memo="*" memo_color="blue" memo_size="small"][checkbox name="nurseIVhydration" value="IV HYDRATION"][conditional field="nurseIVhydration" condition="(nurseIVhydration).is('IV HYDRATION')"]

-Patient's medical record including allergies reviewed
-Physician/PA/NP orders reviewed and verified
-Correct patient verified by full name and DOB
-IV started using aseptic technique
-Successful site: [checkbox value="R|L"] [checkbox value="Arm|Hand|Leg|Foot"]
-Other sites attempted: [text default="n/a" size="60"]
-Hydration fluid: [checkbox value="D5W|NS|LR|D5 1/2 NS"]
-Infusion type: [/conditional][conditional field="IVInfusiontype" condition="(IVInfusiontype).is('mL/hr rate')"][text size="6"] [/conditional][conditional field="nurseIVhydration" condition="(nurseIVhydration).is('IV HYDRATION')"][checkbox name="IVInfusiontype" value="bolus|mL/hr rate"]
[/conditional][conditional field="IVInfusiontype" condition="(IVInfusiontype).is('mL/hr rate')"] over [text size="5"] [select value="hour(s)|minutes"][/conditional][conditional field="nurseIVhydration" condition="(nurseIVhydration).is('IV HYDRATION')"]
-Time fluid started: [date default="timestamp"]
-Total volume infused: [text size="6"] [select value="liters|mL"]
-Infusion monitored by: [text size="80"]
-Infusion administered by: [text size="80"]
-Reassessment: reassessed after [text size="6"] [select value="minutes|hour(s)"], [checkbox value="no significant side effects noted|symptoms improved slightly|symptoms improved significantly|symptoms worsened|symptoms unchanged"] [text memo="freetext if needed" memo_size="small" memo_color="yellow" size="80"]
-Patient disposition
[checkbox value=" -Tolerated medication(s) well without significant side effects
 -Patient's overall clinical improved sufficiently for discharge
 -Patient left in stable condition
"][textarea memo="dispo freetext if needed" memo_size="small" memo_color="yellow" rows="2"]
[comment memo="Coding info:
-90460 for introduction of needle catheter
-96360 for IV infusion, initial 31 minutes up to 1 hour
-96361 for IV infusion each additional hour
" memo_size="small" memo_color="lightgreen"]
[/conditional][comment memo="Oral Meds (placeholder, coding not yet started)

" memo_color="blue" memo_size="small"][comment memo="*" memo_color="blue" memo_size="small"][checkbox name="nurseimms" value="IMMUNIZATIONS"][conditional field="nurseimms" condition="(nurseimms).is('IMMUNIZATIONS')"]

[checkbox name="nurseimmsQ" value="Screening Questions"][/conditional][conditional field="nurseimmsQ" condition="(nurseimmsQ).is('Screening Questions')"]
[select value="no|YES|don't know"] - 1. Are you sick today?
[select value="no|YES|don't know"] - 2. Do you have allergies to medications, food, a vaccine component, or latex?
[select value="no|YES|don't know"] - 3. Have you ever had a serious reaction after receiving a vaccination?
[select value="no|YES|don't know"] - 4. Do you have a long-term health problem with heart, lung, kidney, or metabolic disease 
(e.g., diabetes), asthma, a blood disorder, no spleen, complement component deficiency,
a cochlear implant, or a spinal fluid leak? Are you on long-term aspirin therapy?
[select value="no|YES|don't know"] - 5. Do you have cancer, leukemia, HIV/AIDS, or any other immune system problem?
[select value="no|YES|don't know"] - 6. Do you have a parent, brother, or sister with an immune system problem?
[select value="no|YES|don't know"] - 7. In the past 3 months, have you taken medications that affect your immune system, such
as prednisone, other steroids, or anticancer drugs; drugs for the treatment of rheumatoid
arthritis, Crohn’s disease, or psoriasis; or have you had radiation treatments?
[select value="no|YES|don't know"] - 8. Have you had a seizure or a brain or other nervous system problem?
[select value="no|YES|don't know"] - 9. During the past year, have you received a transfusion of blood or blood products,
or been given immune (gamma) globulin or an antiviral drug?
[select value="no|YES|don't know"] - 10. For women: Are you pregnant or is there a chance you could become pregnant during the next month?
[select value="no|YES|don't know"] - 11. Have you received any vaccinations in the past 4 weeks?[/conditional][conditional field="nurseimms" condition="(nurseimms).is('IMMUNIZATIONS')"]

Vaccine Administration
[checkbox value="-Reviewed patient's immunization history/status and determined patient in need of immunization.
-No significant medical contraindications found to prevent patient from receiving immunization.
-Patient offered applicable vaccine information via printed Vaccine Information Statement.
-All patient's questions/concerns were addressed/answered.
-Patient (or responsible parent/guardian) consented to received immunization
-Correct patient verified by full name and DOB
"]
-The following immunization(s) given: 
 [comment memo="*" memo_size="small" memo_color="blue"]#1 - [select memo="CPT/HCPCS codes in ()" memo_size="small" memo_color="lightgreen" name="vacc1" value="|Anthrax (90581)|DTaP (90700)|DTaP-HepB-IPV (Pediarix, 90723)|DTaP-Hib-IPV (Pentacel, 90698)|DTaP-Hib (TriHIBit, 90721)|DTaP-IPV (Kinrix, 90696)|HepA|HepB|HepA-HepB (90636)|HepB-Hib (Comvax)|Hib|HPV|Influenza|IPV (90713)|JEV (90735)|Meningococcal|Meningococcal C/Y-HIB PRP 4 dose sch (90644)|MMR live subcutaneous (90707)|MMRV subcutaneous (ProQuad, 90710)|OPV (live, oral, 90712)|Pneumococcal|Rotavirus|Td (90714)|Tdap (90715)|Typhoid IM (90691)|Varicella live subQ (90716)|Yellow fever live subQ (90717)|Zoster/Shingles"][/conditional] [conditional field="vacc1" condition="(vacc1).is('HepA')"]- [checkbox value="Hep A adult (90632)|Hep A ped/adol 2 dose sch (90633)|Hep A ped/adol 3 dose sch (90634)"][text size="60" memo="other/not listed" memo_size="small" memo_color="lightgreen"][/conditional][conditional field="vacc1" condition="(vacc1).is('HepB')"]- [checkbox value="Hep B peds IM 3 dose sch (90744)|Hep B adult IM 3 dose sch (90746)|Hep B unspecified (90731)"][/conditional][conditional field="vacc1" condition="(vacc1).is('Hib')"]- [checkbox value="Hib (HbOC) 4 dose sch (90645)|Hib (PRP-D) booster (90646)|Hib (PRP-OMP) 3 dose sch (90647)|Hib (PRP-T) 4 dose sch (90648)|Hib, unspecified (90737)"][/conditional][conditional field="vacc1" condition="(vacc1).is('HPV')"]- [checkbox value="HPV quadrivalent 3 dose sch (90649)|HPV bivalent 3 dose sch (90650)|HPV9 nonavalent 2-3 dose sch (90651)"][/conditional][conditional field="vacc1" condition="(vacc1).is('Influenza')"]- [checkbox value="Influenza trivalent adjuvanted (90653)|Influenza seasonal intradermal preservative free (90654)|Influenza seasonal IM preservative free 0.25ml (90655)|Influenza seasonal IM preservative free 0.5ml (90656)|Influenza seasonal IM 0.25ml (90657)|Influenza seasonal IM 0.5ml (90658)|Novel Influenza-H1N1-09 IM or intranasal (90470)|Influenza live intranasal LAIV3 (90660)|Influenza unspecified formulation (90724)"][/conditional][conditional field="vacc1" condition="(vacc1).is('Meningococcal')"]- [checkbox value="meningococcal MCV4 (MenACWY, 90734)|meningococcal B, OMV, 2 dose (MenB-4C, 90620)|Meningococcal B, recombinant, 2-3 dose (MenB-FHbp, 90621)"][/conditional][conditional field="vacc1" condition="(vacc1).is('Pneumococcal')"]- [checkbox value="PCV7 (90669)|PCV13 (90670)|PPSV23 subQ/IM (90732)"][/conditional][conditional field="vacc1" condition="(vacc1).is('Rotavirus')"]- [checkbox value="RV1 live oral 2 dose sch (90681)|RV5 live oral 3 dose sch (90732)"][/conditional][conditional field="vacc1" condition="(vacc1).is('Zoster/Shingles')"]- [checkbox value="Zoster live subQ (Zostavax, 90736)|Zoster recombinant IM (Shingrix, 90750)"][/conditional][conditional field="nurseimms" condition="(nurseimms).is('IMMUNIZATIONS')"]
 -Route/Location: [checkbox value="IM|intranasal|intradermal|subQ|sublingual|oral|R|L|Deltoid|Glut|Thigh"]
 -Lot #: [text size="60"]
 -EXP date: [text size="60"]
 -Manufacturer: [text size="60"]
 -Given by: [text size="80"]
 -Date/time given: [date default="timestamp"]

[checkbox name="vacc2" memo="*" memo_size="small" memo_color="blue" value=" #2"][/conditional][conditional field="vacc2" condition="(vacc2).is(' #2')"] - [select name="vacc2n" value="|Anthrax (90581)|DTaP (90700)|DTaP-HepB-IPV (Pediarix, 90723)|DTaP-Hib-IPV (Pentacel, 90698)|DTaP-Hib (TriHIBit, 90721)|DTaP-IPV (Kinrix, 90696)|HepA|HepB|HepA-HepB (90636)|HepB-Hib (Comvax)|Hib|HPV|Influenza|IPV (90713)|JEV (90735)|Meningococcal|Meningococcal C/Y-HIB PRP 4 dose sch (90644)|MMR live subcutaneous (90707)|MMRV subcutaneous (ProQuad, 90710)|OPV (live, oral, 90712)|Pneumococcal|Rotavirus|Td (90714)|Tdap (90715)|Typhoid IM (90691)|Varicella live subQ (90716)|Yellow fever live subQ (90717)|Zoster/Shingles"][/conditional] [conditional field="vacc2n" condition="(vacc2n).is('HepA')"]- [checkbox value="Hep A adult (90632)|Hep A ped/adol 2 dose sch (90633)|Hep A ped/adol 3 dose sch (90634)"][text size="60" memo="other/not listed" memo_size="small" memo_color="lightgreen"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('HepB')"]- [checkbox value="Hep B peds IM 3 dose sch (90744)|Hep B adult IM 3 dose sch (90746)|Hep B unspecified (90731)"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('Hib')"]- [checkbox value="Hib (HbOC) 4 dose sch (90645)|Hib (PRP-D) booster (90646)|Hib (PRP-OMP) 3 dose sch (90647)|Hib (PRP-T) 4 dose sch (90648)|Hib, unspecified (90737)"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('HPV')"]- [checkbox value="HPV quadrivalent 3 dose sch (90649)|HPV bivalent 3 dose sch (90650)|HPV9 nonavalent 2-3 dose sch (90651)"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('Influenza')"]- [checkbox value="Influenza trivalent adjuvanted (90653)|Influenza seasonal intradermal preservative free (90654)|Influenza seasonal IM preservative free 0.25ml (90655)|Influenza seasonal IM preservative free 0.5ml (90656)|Influenza seasonal IM 0.25ml (90657)|Influenza seasonal IM 0.5ml (90658)|Novel Influenza-H1N1-09 IM or intranasal (90470)|Influenza live intranasal LAIV3 (90660)|Influenza unspecified formulation (90724)"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('Meningococcal')"]- [checkbox value="meningococcal MCV4 (MenACWY, 90734)|meningococcal B, OMV, 2 dose (MenB-4C, 90620)|Meningococcal B, recombinant, 2-3 dose (MenB-FHbp, 90621)"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('Pneumococcal')"]- [checkbox value="PCV7 (90669)|PCV13 (90670)|PPSV23 subQ/IM (90732)"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('Rotavirus')"]- [checkbox value="RV1 live oral 2 dose sch (90681)|RV5 live oral 3 dose sch (90732)"][/conditional][conditional field="vacc2n" condition="(vacc2n).is('Zoster/Shingles')"]- [checkbox value="Zoster live subQ (Zostavax, 90736)|Zoster recombinant IM (Shingrix, 90750)"][/conditional][conditional field="vacc2" condition="(vacc2).is(' #2')"]
 -Route/Location: [checkbox value="IM|intranasal|intradermal|subQ|sublingual|oral|R|L|Deltoid|Glut|Thigh"]
 -Lot #: [text size="60"]
 -EXP date: [text size="60"]
 -Manufacturer: [text size="60"]
 -Given by: [text size="80"]
 -Date/time given: [date default="timestamp"]

[checkbox name="vacc3" memo="*" memo_size="small" memo_color="blue" value=" #3"][/conditional][conditional field="vacc3" condition="(vacc3).is(' #3')"] - [select name="vacc3n" value="|Anthrax (90581)|DTaP (90700)|DTaP-HepB-IPV (Pediarix, 90723)|DTaP-Hib-IPV (Pentacel, 90698)|DTaP-Hib (TriHIBit, 90721)|DTaP-IPV (Kinrix, 90696)|HepA|HepB|HepA-HepB (90636)|HepB-Hib (Comvax)|Hib|HPV|Influenza|IPV (90713)|JEV (90735)|Meningococcal|Meningococcal C/Y-HIB PRP 4 dose sch (90644)|MMR live subcutaneous (90707)|MMRV subcutaneous (ProQuad, 90710)|OPV (live, oral, 90712)|Pneumococcal|Rotavirus|Td (90714)|Tdap (90715)|Typhoid IM (90691)|Varicella live subQ (90716)|Yellow fever live subQ (90717)|Zoster/Shingles"][/conditional] [conditional field="vacc3n" condition="(vacc3n).is('HepA')"]- [checkbox value="Hep A adult (90632)|Hep A ped/adol 2 dose sch (90633)|Hep A ped/adol 3 dose sch (90634)"][text size="60" memo="other/not listed" memo_size="small" memo_color="lightgreen"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('HepB')"]- [checkbox value="Hep B peds IM 3 dose sch (90744)|Hep B adult IM 3 dose sch (90746)|Hep B unspecified (90731)"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('Hib')"]- [checkbox value="Hib (HbOC) 4 dose sch (90645)|Hib (PRP-D) booster (90646)|Hib (PRP-OMP) 3 dose sch (90647)|Hib (PRP-T) 4 dose sch (90648)|Hib, unspecified (90737)"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('HPV')"]- [checkbox value="HPV quadrivalent 3 dose sch (90649)|HPV bivalent 3 dose sch (90650)|HPV9 nonavalent 2-3 dose sch (90651)"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('Influenza')"]- [checkbox value="Influenza trivalent adjuvanted (90653)|Influenza seasonal intradermal preservative free (90654)|Influenza seasonal IM preservative free 0.25ml (90655)|Influenza seasonal IM preservative free 0.5ml (90656)|Influenza seasonal IM 0.25ml (90657)|Influenza seasonal IM 0.5ml (90658)|Novel Influenza-H1N1-09 IM or intranasal (90470)|Influenza live intranasal LAIV3 (90660)|Influenza unspecified formulation (90724)"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('Meningococcal')"]- [checkbox value="meningococcal MCV4 (MenACWY, 90734)|meningococcal B, OMV, 2 dose (MenB-4C, 90620)|Meningococcal B, recombinant, 2-3 dose (MenB-FHbp, 90621)"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('Pneumococcal')"]- [checkbox value="PCV7 (90669)|PCV13 (90670)|PPSV23 subQ/IM (90732)"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('Rotavirus')"]- [checkbox value="RV1 live oral 2 dose sch (90681)|RV5 live oral 3 dose sch (90732)"][/conditional][conditional field="vacc3n" condition="(vacc3n).is('Zoster/Shingles')"]- [checkbox value="Zoster live subQ (Zostavax, 90736)|Zoster recombinant IM (Shingrix, 90750)"][/conditional][conditional field="vacc3" condition="(vacc3).is(' #3')"]
 -Route/Location: [checkbox value="IM|intranasal|intradermal|subQ|sublingual|oral|R|L|Deltoid|Glut|Thigh"]
 -Lot #: [text size="60"]
 -EXP date: [text size="60"]
 -Manufacturer: [text size="60"]
 -Given by: [text size="80"]
 -Date/time given: [date default="timestamp"]

[checkbox name="vacc4" memo="*" memo_size="small" memo_color="blue" value=" #4"][/conditional][conditional field="vacc4" condition="(vacc4).is(' #4')"] - [select name="vacc4n" value="|Anthrax (90581)|DTaP (90700)|DTaP-HepB-IPV (Pediarix, 90723)|DTaP-Hib-IPV (Pentacel, 90698)|DTaP-Hib (TriHIBit, 90721)|DTaP-IPV (Kinrix, 90696)|HepA|HepB|HepA-HepB (90636)|HepB-Hib (Comvax)|Hib|HPV|Influenza|IPV (90713)|JEV (90735)|Meningococcal|Meningococcal C/Y-HIB PRP 4 dose sch (90644)|MMR live subcutaneous (90707)|MMRV subcutaneous (ProQuad, 90710)|OPV (live, oral, 90712)|Pneumococcal|Rotavirus|Td (90714)|Tdap (90715)|Typhoid IM (90691)|Varicella live subQ (90716)|Yellow fever live subQ (90717)|Zoster/Shingles"][/conditional] [conditional field="vacc4n" condition="(vacc4n).is('HepA')"]- [checkbox value="Hep A adult (90632)|Hep A ped/adol 2 dose sch (90633)|Hep A ped/adol 3 dose sch (90634)"][text size="60" memo="other/not listed" memo_size="small" memo_color="lightgreen"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('HepB')"]- [checkbox value="Hep B peds IM 3 dose sch (90744)|Hep B adult IM 3 dose sch (90746)|Hep B unspecified (90731)"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('Hib')"]- [checkbox value="Hib (HbOC) 4 dose sch (90645)|Hib (PRP-D) booster (90646)|Hib (PRP-OMP) 3 dose sch (90647)|Hib (PRP-T) 4 dose sch (90648)|Hib, unspecified (90737)"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('HPV')"]- [checkbox value="HPV quadrivalent 3 dose sch (90649)|HPV bivalent 3 dose sch (90650)|HPV9 nonavalent 2-3 dose sch (90651)"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('Influenza')"]- [checkbox value="Influenza trivalent adjuvanted (90653)|Influenza seasonal intradermal preservative free (90654)|Influenza seasonal IM preservative free 0.25ml (90655)|Influenza seasonal IM preservative free 0.5ml (90656)|Influenza seasonal IM 0.25ml (90657)|Influenza seasonal IM 0.5ml (90658)|Novel Influenza-H1N1-09 IM or intranasal (90470)|Influenza live intranasal LAIV3 (90660)|Influenza unspecified formulation (90724)"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('Meningococcal')"]- [checkbox value="meningococcal MCV4 (MenACWY, 90734)|meningococcal B, OMV, 2 dose (MenB-4C, 90620)|Meningococcal B, recombinant, 2-3 dose (MenB-FHbp, 90621)"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('Pneumococcal')"]- [checkbox value="PCV7 (90669)|PCV13 (90670)|PPSV23 subQ/IM (90732)"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('Rotavirus')"]- [checkbox value="RV1 live oral 2 dose sch (90681)|RV5 live oral 3 dose sch (90732)"][/conditional][conditional field="vacc4n" condition="(vacc4n).is('Zoster/Shingles')"]- [checkbox value="Zoster live subQ (Zostavax, 90736)|Zoster recombinant IM (Shingrix, 90750)"][/conditional][conditional field="vacc4" condition="(vacc4).is(' #4')"]
 -Route/Location: [checkbox value="IM|intranasal|intradermal|subQ|sublingual|oral|R|L|Deltoid|Glut|Thigh"]
 -Lot #: [text size="60"]
 -EXP date: [text size="60"]
 -Manufacturer: [text size="60"]
 -Given by: [text size="80"]
 -Date/time given: [date default="timestamp"]

[checkbox name="vacc5" memo="*" memo_size="small" memo_color="blue" value=" #5"][/conditional][conditional field="vacc5" condition="(vacc5).is(' #5')"] - [select name="vacc5n" value="|Anthrax (90581)|DTaP (90700)|DTaP-HepB-IPV (Pediarix, 90723)|DTaP-Hib-IPV (Pentacel, 90698)|DTaP-Hib (TriHIBit, 90721)|DTaP-IPV (Kinrix, 90696)|HepA|HepB|HepA-HepB (90636)|HepB-Hib (Comvax)|Hib|HPV|Influenza|IPV (90713)|JEV (90735)|Meningococcal|Meningococcal C/Y-HIB PRP 4 dose sch (90644)|MMR live subcutaneous (90707)|MMRV subcutaneous (ProQuad, 90710)|OPV (live, oral, 90712)|Pneumococcal|Rotavirus|Td (90714)|Tdap (90715)|Typhoid IM (90691)|Varicella live subQ (90716)|Yellow fever live subQ (90717)|Zoster/Shingles"][/conditional] [conditional field="vacc5n" condition="(vacc5n).is('HepA')"]- [checkbox value="Hep A adult (90632)|Hep A ped/adol 2 dose sch (90633)|Hep A ped/adol 3 dose sch (90634)"][text size="60" memo="other/not listed" memo_size="small" memo_color="lightgreen"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('HepB')"]- [checkbox value="Hep B peds IM 3 dose sch (90744)|Hep B adult IM 3 dose sch (90746)|Hep B unspecified (90731)"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('Hib')"]- [checkbox value="Hib (HbOC) 4 dose sch (90645)|Hib (PRP-D) booster (90646)|Hib (PRP-OMP) 3 dose sch (90647)|Hib (PRP-T) 4 dose sch (90648)|Hib, unspecified (90737)"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('HPV')"]- [checkbox value="HPV quadrivalent 3 dose sch (90649)|HPV bivalent 3 dose sch (90650)|HPV9 nonavalent 2-3 dose sch (90651)"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('Influenza')"]- [checkbox value="Influenza trivalent adjuvanted (90653)|Influenza seasonal intradermal preservative free (90654)|Influenza seasonal IM preservative free 0.25ml (90655)|Influenza seasonal IM preservative free 0.5ml (90656)|Influenza seasonal IM 0.25ml (90657)|Influenza seasonal IM 0.5ml (90658)|Novel Influenza-H1N1-09 IM or intranasal (90470)|Influenza live intranasal LAIV3 (90660)|Influenza unspecified formulation (90724)"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('Meningococcal')"]- [checkbox value="meningococcal MCV4 (MenACWY, 90734)|meningococcal B, OMV, 2 dose (MenB-4C, 90620)|Meningococcal B, recombinant, 2-3 dose (MenB-FHbp, 90621)"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('Pneumococcal')"]- [checkbox value="PCV7 (90669)|PCV13 (90670)|PPSV23 subQ/IM (90732)"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('Rotavirus')"]- [checkbox value="RV1 live oral 2 dose sch (90681)|RV5 live oral 3 dose sch (90732)"][/conditional][conditional field="vacc5n" condition="(vacc5n).is('Zoster/Shingles')"]- [checkbox value="Zoster live subQ (Zostavax, 90736)|Zoster recombinant IM (Shingrix, 90750)"][/conditional][conditional field="vacc5" condition="(vacc5).is(' #5')"]
 -Route/Location: [checkbox value="IM|intranasal|intradermal|subQ|sublingual|oral|R|L|Deltoid|Glut|Thigh"]
 -Lot #: [text size="60"]
 -EXP date: [text size="60"]
 -Manufacturer: [text size="60"]
 -Given by: [text size="80"]
 -Date/time given: [date default="timestamp"]

[/conditional][conditional field="nurseimms" condition="(nurseimms).is('IMMUNIZATIONS')"]

Patient disposition
[text memo="freetext optional" memo_size="small" memo_color="lightgreen" size="80"][checkbox value="-Patient advised to wait 15min for observation
"][checkbox value="-After observation, patient found without significant adverse effects and left in stable condition
"][checkbox value="-Patient/parent declined to wait for observation, left in stable condition
"][comment memo="Coding info (to be used in addition to the above codes):
If done in conjunction with physician/PA/NP visit including receiving counseling
-90460 for each vaccination
-90461 for each additional vaccine component if combination vaccine
-25 modifier to E&M code
If done as walk-in and not in conjunction with physician/PA/NP visit
-90471 for each vaccination
-90461 for each additional vaccine component if combination vaccine
" memo_size="small" memo_color="lightgreen"]
[/conditional]
