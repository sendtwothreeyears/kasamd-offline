# Female GYN Procedure

**Category:** Procedure Note
**Source:** https://www.soapnote.org/procedure/female-gyn-procedure/

---

CHAPERONE: [conditional field="femaleprocchapdecl" condition="(femaleprocchapdecl).isNot('declined')"][text size="40"][/conditional][checkbox name="femaleprocchapdecl" value="declined"][checkbox name="FemaleProcSup" value="Supervising Physician:"][conditional field="FemaleProcSup" condition="(FemaleProcSup).is('Supervising Physician:')"] Dr. [text size="40"][/conditional][checkbox name="femaleproctypeIUDIns" value="IUD INSERTION PROCEDURE NOTE"][conditional field="femaleproctypeIUDIns" condition="(femaleproctypeIUDIns).is('IUD INSERTION PROCEDURE NOTE')"]DIAGNOSIS: [checkbox value="Z30.430 Encounter for insertion of IUD|Z30.014 Encounter for initial prescription of IUD"][comment memo="Z30.014 includes the initial prescription of the IUD, counseling, and advice, but excludes the IUD insertion" memo_size="small"]PROCEDURE: Insertion of IUD - CPT 58300 - [select name="IUDtypeinserted" memo="*" memo_size="small" memo_color="blue" value="|Mirena|Kyleena|Skyla|Liletta|Paragard/Copper IUD"]
IUD LOT#: [text size="20"][comment memo="type of consent (choose one)" memo_color="blue"][checkbox memo="verbal" memo_size="small" name="IUDinsconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="IUDinsconsenttypewritten" value=""]INDICATIONS/COUNSELING:
-Patient desires long-term, reversible contraception.
-Reason(s) patient desires this specific IUD: [checkbox value="prevent pregnancy|irregular menses|dysmenorrhea|menorrhagia|dysfunctional uterine bleeding|forgets to take pills|other-"] [text size="50"]
-The patient was counseled regarding the risks, benefits and alternatives of IUD insertion and use.
-She is aware that there are other methods of contraception such as OCPs, contraceptive patches and rings and barrier methods of contraception.
-She was informed that the failure rate is about one woman for every 1000 women who use the IUD for one year.
-If she should become pregnant, the risk of ectopic or tubal pregnancy is about 50%.
-If she ever has symptoms of pregnancy, she should have a pregnancy test immediately as tubal pregnancies can be life threatening.
-Complications following insertion of an IUD are rare.
-There is a small possibility that the instrument used to measure the uterus or the IUD itself could perforate the wall of the uterus. This might not be obvious immediately.
-If she experiences symptoms of infection such as pain, fever >100.4, chills, painful intercourse, nausea and vomiting, prolonged bleeding or foul smelling discharge, she should be seen in clinic.
-In the rare event that an IUD has passed through the wall of the uterus into the abdomen, it will need to be removed surgically. In extreme cases, the IUD may cause scarring which could lead to the need for a hysterectomy (surgery to remove the uterus) and the inability to have children.
-She was advised to check her string after each menstrual cycle or at least monthly and to make an appointment with her provider immediately if she is not able to find the strings, suspects she is pregnant or experiences any of the symptoms mentioned above.
-Confirmed that all of her questions were answered and she desires to proceed with the IUD insertion.
[/conditional][conditional field="IUDinsconsenttypeverbal" condition="(IUDinsconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="IUDinsconsenttypewritten" condition="(IUDinsconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeIUDIns" condition="(femaleproctypeIUDIns).is('IUD INSERTION PROCEDURE NOTE')"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure type matches the consent form.
-For final timeout, physician paused or verbally confirmed with procedure team of:
-Correct patient, and correct procedure.
-Patient has been positioned correctly for the procedure.
-All necessary equipment are available.
-Instrument sterility verified.
"]
PROCEDURE:
[checkbox name="bimanualIUDins" value="-Bimanual exam was performed and position of uterus determined to be "][/conditional][conditional field="bimanualIUDins" condition="(bimanualIUDins).is('-Bimanual exam was performed and position of uterus determined to be ')"][select value="anteroverted.|midposition.|posteroverted."]
[/conditional][conditional field="femaleproctypeIUDIns" condition="(femaleproctypeIUDIns).is('IUD INSERTION PROCEDURE NOTE')"]-The speculum was inserted and the cervix was identified.
-[select value="Betadine|Chlorhexidine"] was used to clean the cervix.
[checkbox value="-An os dilator was used.
"][checkbox value="-A sound was used.
"]-Uterus sounded to a depth of [text size="5"] cm.
[checkbox name="tenaculum1" value="-A tenaculum was applied to "][/conditional][conditional field="tenaculum1" condition="(tenaculum1).is('-A tenaculum was applied to ')"][select value="superior/anterior cervix. |posterior/inferior cervix."]
[/conditional][conditional field="femaleproctypeIUDIns" condition="(femaleproctypeIUDIns).is('IUD INSERTION PROCEDURE NOTE')"]-[var name="IUDtypeinserted"] was [select name="IUDsuccess1" value="successfully|unsuccessfully"] inserted per manufacturer protocol.
[/conditional][conditional field="femaleproctypeIUDIns|IUDsuccess1" condition="((femaleproctypeIUDIns).is('IUD INSERTION PROCEDURE NOTE'))&&((IUDsuccess1).is('successfully'))"]-The string was cut to a 3 centimeters length and a sample of the remaining string was given to the patient for later comparison.
[checkbox value="-EBL less than 5 ml.
"]-Gave return precautions: fever, severe lower abdominal cramping, heavy bleeding, or purulent discharge.
-The patient was counseled to check the strings herself monthly to ensure the IUD has not been displaced.
-Date inserted: [date name="IUDinsDate1" default="today"]
[/conditional][conditional field="IUDtypeinserted" condition="(IUDtypeinserted).is('Mirena')"]-Effective for contraception for 5 years (possibly longer, 6-7 year duration is off-label), latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDinsDate1).dateAdd(1825)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDtypeinserted" condition="(IUDtypeinserted).is('Kyleena')"]-Effective for contraception for 5 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDinsDate1).dateAdd(1825)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDtypeinserted" condition="(IUDtypeinserted).is('Skyla')"]-Effective for contraception for 3 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDinsDate1).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDtypeinserted" condition="(IUDtypeinserted).is('Liletta')"]-Effective for contraception for 6 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDinsDate1).dateAdd(2190)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDtypeinserted" condition="(IUDtypeinserted).is('Paragard/Copper IUD')"]-Effective for contraception for 10 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDinsDate1).dateAdd(3650)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="femaleproctypeIUDIns|IUDsuccess1" condition="((femaleproctypeIUDIns).is('IUD INSERTION PROCEDURE NOTE'))&&((IUDsuccess1).is('successfully'))"][textarea memo="free text" memo_size="small"][/conditional][conditional field="femaleproctypeIUDIns|IUDsuccess1" condition="((femaleproctypeIUDIns).is('IUD INSERTION PROCEDURE NOTE'))&&((IUDsuccess1).is('unsuccessfully'))"][textarea rows="10" default="-Despite unsuccessful insertion, patient tolerated the procedure well, without any immediate concerning complications noted. Next steps were discussed with patient including followup. Patient was referred to Gynecologist. Patient acknowledged understanding and intent to followup as discussed/planned."][/conditional][checkbox name="femaleproctypeIUDRemov" value="IUD REMOVAL PROCEDURE NOTE"][conditional field="femaleproctypeIUDRemov" condition="(femaleproctypeIUDRemov).is('IUD REMOVAL PROCEDURE NOTE')"]

DIAGNOSIS: Z30.432 Encounter for removal of IUD

PROCEDURE: Removal of IUD - CPT 58301 - [select name="IUDtyperemoved" memo="*" memo_size="small" memo_color="blue" value="|Hormone IUD|Paragard/Copper IUD"]
[comment memo="type of consent (choose one)" memo_color="blue" memo_size="small"]
[checkbox memo="verbal" memo_size="small" name="IUDremovconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="IUDremovconsenttypewritten" value=""]INDICATIONS/COUNSELING:
-Confirmed patient desires removal of IUD for the following reason(s): [checkbox value="desires to get pregnant|current IUD needs replaced|having undesirable side effects|wants to switch to different form of contraception"].
-Confirmed patient aware of ability to get pregnant once removed if this IUD form of contraception not replaced or appropriately transitioned to another form of contraception.
-Confirmed that patient has plan in place for alternate form of contraception if not desiring to get pregnant
[/conditional][conditional field="IUDremovconsenttypeverbal" condition="(IUDremovconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="IUDremovconsenttypewritten" condition="(IUDremovconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeIUDRemov" condition="(femaleproctypeIUDRemov).is('IUD REMOVAL PROCEDURE NOTE')"][comment memo="only select what's applicable" memo_size="small"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure type matches the consent form.
-For final timeout, physician paused or verbally confirmed with procedure team of:
-Correct patient, and correct procedure.
-Patient has been positioned correctly for the procedure.
-All necessary equipment are available.
-Instrument sterility verified.
"]
PROCEDURE:
-The speculum was inserted and the cervix was identified.
-The IUD strings were: [select name="IUDstrings1" value="identified|not identified"][/conditional][conditional field="femaleproctypeIUDRemov|IUDstrings1" condition="((femaleproctypeIUDRemov).is('IUD REMOVAL PROCEDURE NOTE'))&&((IUDstrings1).is('identified'))"] and grasped with a Kelly clamp.
-With gentle traction, the IUD was [select name="IUDtraction1" value="removed.|unable to be removed."][/conditional][conditional field="IUDtraction1" condition="(IUDtraction1).is('unable to be removed.')"]
-The following actions were taken: [checkbox value="Patient referred to Gynecologist for assistance with extraction|Pelvic ultrasound was ordered to confirm location of IUD|other-"][textarea memo="add'l actions taken" memo_size="small" memo_color="orange"][/conditional][conditional field="IUDstrings1" condition="(IUDstrings1).is('not identified')"].
-Attempted visualization & retrieval of strings with use the following: [checkbox value="cytobrush|IUD hook|endocervical speculum"]
-Retrieval was ultimately [select name="cytobrushretrieval1" value="successful.|unsuccessful."]
[/conditional][conditional field="femaleproctypeIUDRemov|IUDstrings1|cytobrushretrieval1" condition="((femaleproctypeIUDRemov).is('IUD REMOVAL PROCEDURE NOTE'))&&((IUDstrings1).is('not identified'))&&((cytobrushretrieval1).is('successful.'))"] -Strings were grasped with a Kelly clamp.
-With gentle traction, the IUD was [select name="IUDtraction2" value="removed.|unable to be removed."]
[/conditional][conditional field="IUDtraction2" condition="(IUDtraction2).is('unable to be removed.')"]-The following actions were taken: [checkbox value="Patient referred to Gynecologist for assistance with extraction|Pelvic ultrasound was ordered to confirm location of IUD|other-"][textarea memo="add'l actions taken" memo_size="small" memo_color="orange"]
[/conditional][conditional field="cytobrushretrieval1" condition="(cytobrushretrieval1).is('unsuccessful.')"]-The following actions were taken: [checkbox value="Patient referred to Gynecologist for assistance with extraction|Pelvic ultrasound was ordered to confirm location of IUD|other-"][textarea memo="add'l actions taken" memo_size="small" memo_color="orange"]
[/conditional][checkbox name="femaleproctypeIUDReins" value="IUD REMOVAL & REINSERTION PROCEDURE NOTE"][conditional field="femaleproctypeIUDReins" condition="(femaleproctypeIUDReins).is('IUD REMOVAL & REINSERTION PROCEDURE NOTE')"]DIAGNOSIS: Z30.433 Encounter for removal and reinsertion of intrauterine
contraceptive devicePROCEDURE:
-Removal of IUD - CPT 58301 - [select name="IUDreinstyperemoved" memo="*" memo_size="small" memo_color="blue" value="|Hormone IUD|Paragard/Copper IUD"]
-Insertion of IUD - CPT 58300 - [select name="IUDreinstypeinserted" memo="*" memo_size="small" memo_color="blue" value="|Mirena|Kyleena|Skyla|Liletta|Paragard/Copper IUD"]
IUD LOT#: [text size="20"][comment memo="type of consent (choose one)" memo_color="blue"][checkbox memo="verbal" memo_size="small" name="IUDreinsconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="IUDreinsconsenttypewritten" value=""]INDICATIONS/COUNSELING:
-Confirmed patient desires removal of IUD due to current IUD needing replacement and patient continues to desire long-term contraception.
-Reason(s) patient desires to continue this specific IUD: [checkbox value="prevent pregnancy|irregular menses|dysmenorrhea|menorrhagia|dysfunctional uterine bleeding|forgets to take pills|other-"] [text size="50"]
-The patient was counseled regarding the risks, benefits and alternatives of IUD insertion and use.
-She is aware that there are other methods of contraception such as OCPs, contraceptive patches and rings and barrier methods of contraception.
-She was informed that the failure rate is about one woman for every 1000 women who use the IUD for one year.
-If she should become pregnant, the risk of ectopic or tubal pregnancy is about 50%.
-If she ever has symptoms of pregnancy, she should have a pregnancy test immediately as tubal pregnancies can be life threatening.
-Complications following insertion of an IUD are rare.
-There is a small possibility that the instrument used to measure the uterus or the IUD itself could perforate the wall of the uterus. This might not be obvious immediately.
-If she experiences symptoms of infection such as pain, fever >100.4, chills, painful intercourse, nausea and vomiting, prolonged bleeding or foul smelling discharge, she should be seen in clinic.
-In the rare event that an IUD has passed through the wall of the uterus into the abdomen, it will need to be removed surgically. In extreme cases, the IUD may cause scarring which could lead to the need for a hysterectomy (surgery to remove the uterus) and the inability to have children.
-She was advised to check her string after each menstrual cycle or at least monthly and to make an appointment with her provider immediately if she is not able to find the strings, suspects she is pregnant or experiences any of the symptoms mentioned above.
-Confirmed that all of her questions were answered and she desires to proceed with the IUD reinsertion.
[/conditional][conditional field="IUDreinsconsenttypeverbal" condition="(IUDreinsconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="IUDreinsconsenttypewritten" condition="(IUDreinsconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeIUDReins" condition="(femaleproctypeIUDReins).is('IUD REMOVAL & REINSERTION PROCEDURE NOTE')"][comment memo="only select what's applicable" memo_size="small"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure type matches the consent form.
"][checkbox name="timeoutIUDreins" value=" -For final timeout, physician paused or verbally confirmed with procedure team of:
-correct patient, correct procedure, and correct site/side.
-The patient has been positioned correctly for the procedure.
-All necessary equipment are available.
"][checkbox value=" -Instrument sterility verified.
"]
PROCEDURE:
[checkbox name="bimanualIUDreins" value="-Bimanual exam was performed and position of uterus determined to be "][/conditional][conditional field="bimanualIUDreins" condition="(bimanualIUDreins).is('-Bimanual exam was performed and position of uterus determined to be ')"][select value="anteroverted.|midposition.|posteroverted."]
[/conditional][conditional field="femaleproctypeIUDReins" condition="(femaleproctypeIUDReins).is('IUD REMOVAL & REINSERTION PROCEDURE NOTE')"]-The speculum was inserted and the cervix was identified.
-The IUD strings were: [select name="IUDstrings2" value="|identified|not identified"][/conditional][conditional field="IUDstrings2" condition="(IUDstrings2).is('identified')"] and grasped with a Kelly clamp.
-With gentle traction, the IUD was [select name="IUDtraction3" value="removed.|unable to be removed."]
[/conditional][conditional field="IUDtraction3" condition="(IUDtraction3).is('unable to be removed.')"]
-The following actions were taken: [checkbox value="Patient referred to Gynecologist for assistance with extraction|Pelvic ultrasound was ordered to confirm location of IUD|other-"][textarea memo="add'l actions taken" memo_size="small" memo_color="orange"][/conditional][conditional field="IUDstrings2" condition="(IUDstrings2).is('not identified')"].
-Attempted retrieval of strings with cytobrush and [select name="cytobrushretrieval2" value="|successful.|unsuccessful."][/conditional][conditional field="cytobrushretrieval2" condition="(cytobrushretrieval2).is('successful.')"]
-Strings were grasped with a Kelly clamp.
-With gentle traction, the IUD was [select name="IUDtraction4" value="removed.|unable to be removed."]
[/conditional][conditional field="IUDtraction4" condition="(IUDtraction4).is('unable to be removed.')"]-The following actions were taken: [checkbox value="Patient referred to Gynecologist for assistance with extraction|Pelvic ultrasound was ordered to confirm location of IUD|other-"][textarea memo="add'l actions taken" memo_size="small" memo_color="orange"]
[/conditional][conditional field="cytobrushretrieval2" condition="(cytobrushretrieval2).is('unsuccessful.')"]-The following actions were taken: [checkbox value="Patient referred to Gynecologist for assistance with extraction|Pelvic ultrasound was ordered to confirm location of IUD|other-"][textarea memo="add'l actions taken" memo_size="small" memo_color="orange"]
[/conditional][conditional field="femaleproctypeIUDReins|IUDtraction3|IUDtraction4" condition="(femaleproctypeIUDReins).is('IUD REMOVAL & REINSERTION PROCEDURE NOTE')&&((IUDtraction3).is('removed.')||(IUDtraction4).is('removed.'))"]-[select value="|Betadine|Chlorhexidine"] was used to clean the cervix.
[checkbox value="-An os dilator was used.
"][checkbox value="-A sound was used.
"]-Uterus sounded to a depth of [text size="5"] cm.
-[select memo="choose whether tenaculum used" memo_size="small" name="tenaculum2" value="|A tenaculum was applied to |A tenaculum was not used. "][/conditional][conditional field="tenaculum2" condition="(tenaculum2).is('A tenaculum was applied to ')"][select value="superior/anterior cervix. |posterior/inferior cervix."][/conditional][conditional field="femaleproctypeIUDReins|IUDtraction3|IUDtraction4" condition="(femaleproctypeIUDReins).is('IUD REMOVAL & REINSERTION PROCEDURE NOTE')&&((IUDtraction3).is('removed.')||(IUDtraction4).is('removed.'))"]
-[var name="IUDreinstypeinserted"] was inserted per manufacturer protocol.
-The string was cut to a 3 centimeters length and a sample of the remaining string was given to the patient for later comparison.
[checkbox value="-EBL less than 5 ml.
-The patient tolerated the procedure well, without any S/S of vasovagal responses or other immediate procedural complications.
-Gave return precautions: fever, severe lower abdominal cramping, heavy bleeding, or purulent discharge.
-The patient was counseled to check the strings herself monthly to ensure the IUD has not been displaced.
"]-Date inserted: [date name="IUDreinsDate1" default="today"]
[/conditional][conditional field="IUDreinstypeinserted" condition="(IUDreinstypeinserted).is('Mirena')"]-Effective for contraception for 5 years (possibly longer, 6-7 year duration is off-label), latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDreinsDate1).dateAdd(1825)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDreinstypeinserted" condition="(IUDreinstypeinserted).is('Kyleena')"]-Effective for contraception for 5 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDreinsDate1).dateAdd(1825)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDreinstypeinserted" condition="(IUDreinstypeinserted).is('Skyla')"]-Effective for contraception for 3 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDreinsDate1).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDreinstypeinserted" condition="(IUDreinstypeinserted).is('Liletta')"]-Effective for contraception for 6 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDreinsDate1).dateAdd(1825)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="IUDreinstypeinserted" condition="(IUDreinstypeinserted).is('Paragard/Copper IUD')"]-Effective for contraception for 10 years, latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(IUDreinsDate1).dateAdd(3650)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.
[/conditional][conditional field="femaleproctypeIUDReins|IUDtraction3|IUDtraction4" condition="(femaleproctypeIUDReins).is('IUD REMOVAL & REINSERTION PROCEDURE NOTE')&&((IUDtraction3).is('removed.')||(IUDtraction4).is('removed.'))"][checkbox memo="check for free text" memo_size="small" name="IUDfreetext" value=""][/conditional][conditional field="IUDfreetext" condition="(IUDfreetext).is('')"][textarea]
[/conditional][checkbox name="femaleproctypeNexplanonIns" value="NEXPLANON INSERTION PROCEDURE NOTE"][conditional field="femaleproctypeNexplanonIns" condition="(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE')"]DIAGNOSIS: Z30.017 Encounter for initial prescription of implantable
subdermal contraceptivePROCEDURE: Insertion of Nexplanon - CPT 11981
NEXPLANON LOT#: [text size="20"]
ANESTHESIA AGENT(S): [checkbox value="Lidocaine 1% with epinephrine|Lidocaine 1% without epinephrine|Lidocaine 2% with epinephrine|Lidocaine 2% without epinephrine|Marcaine 0.5%|Bicarbonate buffering solution"]
-Total amt used: [text size="5"] ml[comment memo="type of consent (choose one)" memo_color="blue"][checkbox memo="verbal" memo_size="small" name="nexplanoninsconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="nexplanoninsconsenttypewritten" value=""]COUNSELING/INDICATIONS:
-Reason(s) patient desires this specific form of contraception: [checkbox value="prevent pregnancy|irregular menses|dysmenorrhea|menorrhagia|dysfunctional uterine bleeding|forgets to take pills|other-"] [text size="50"]
-The patient was counseled regarding the risks, benefits and alternatives of Nexplanon insertion and use.
-She is aware that there are other methods of contraception such as OCPs, contraceptive patches and rings and barrier methods of contraception.
-Discussed and patient verbalized understanding of the risks, benefits, alternatives and possible complications of subdermal implants to include:
-possible contraindications include known or suspected pregnancy, current or past history of thrombosis, liver disease, undiagnosed abnormal genital bleeding, current or past history of breast cancer, allergic reaction to any components of the Nexplanon device.
-potential changes in menstrual bleeding pattern including 22% amenorrhea, 18% prolonged bleeding, 7% frequent bleeding, 34% infrequent bleeding.
-possible adverse effects including ectopic pregnancy, thrombotic events or liver disease, depression or emotional lability, headache, weight increase.
-Nexplanon may be used for nursing after the 4th week.
-Confirmed that all of her questions were answered and she desires to proceed with the Nexplanon insertion.
[/conditional][conditional field="nexplanoninsconsenttypeverbal" condition="(nexplanoninsconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="nexplanoninsconsenttypewritten" condition="(nexplanoninsconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeNexplanonIns" condition="(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE')"][comment memo="only select what's applicable" memo_size="small"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure and site/side matches the consent form.
-Patient was involved in the site/side marking.
"][checkbox name="timeoutnexplanonins" value=" -For final timeout, physician paused or verbally confirmed with procedure team of:
-correct patient, correct procedure, and correct site/side.
-The patient has been positioned correctly for the procedure.
-All necessary equipment are available.
"][checkbox value=" -Instrument sterility verified.
"]
PROCEDURE:
-[select value="Left|Right"] arm landmarks identified and insertion site and guiding site marked with [select value="tissue marker|retracted tip of pen"] per manufacturer's recommendations.
-Area cleansed with [select value="Betadine/Iodine|Chlorhexidine"] and adequate drying time allowed per manufacturer recommendations and infection control protocol.
-Above anesthetic agent was injected with 27g needle under the skin of the identified insertion point and along the insertion canal.
-In sterile fashion applicator was inspected and presence of Nexplanon device verified.
-Applicator used to insert Nexplanon device.
-Grooved tip of obturator was visible inside needle upon removal.
-Both myself and patient palpated the Nexplanon device in subdermal location.
-Hemostasis assured.
-EBL < 1ml.
-The site was dressed with [checkbox value="Dermabond|SteriStrips|pressure dressing|bacitracin ointment"].
-Wound care instructions reviewed.
-Discussed return precautions to include: [checkbox value="bleeding at insertion site that is continuing to soak through pads after first removed|worsening pain after first 24 hours|increasing swelling after first 24 hours|pus coming from insertion site|fever"].
[/conditional][checkbox name="femaleproctypeNexplanonRemov" value="NEXPLANON REMOVAL PROCEDURE NOTE"][conditional field="femaleproctypeNexplanonRemov" condition="(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE')"]DIAGNOSIS: Z30.46 Encounter for surveillance of implantable subdermal contraceptivePROCEDURE: Removal of nexplanon - CPT 11982
ANESTHESIA AGENT(S): [checkbox value="Lidocaine 1% with epinephrine|Lidocaine 1% without epinephrine|Lidocaine 2% with epinephrine|Lidocaine 2% without epinephrine|Marcaine 0.5%|Bicarbonate buffering solution"]
-Total amt used: [text size="5"] ml[comment memo="type of consent (choose one)" memo_color="blue"][checkbox memo="verbal" memo_size="small" name="nexplanonremovconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="nexplanonremovconsenttypewritten" value=""]INDICATIONS/COUNSELING:
-Confirmed patient desires removal of Nexplanon for the following reason: [select value="|desires to get pregnant|having undesirable side effects"]. [text memo="add'l explanation if needed" memo_size="small" size="50"]
-Confirmed patient aware of ability to get pregnant once removed if this Nexplanon device not replaced or appropriately transitioned to another form of contraception.
-Confirmed that patient has plan in place for alternate form of contraception if not desiring to get pregnant
[/conditional][conditional field="nexplanonremovconsenttypeverbal" condition="(nexplanonremovconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="nexplanonremovconsenttypewritten" condition="(nexplanonremovconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeNexplanonRemov" condition="(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE')"][comment memo="only select what's applicable" memo_size="small"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure and site/side matches the consent form.
-Patient was involved in the site/side marking.
"][checkbox name="timeoutnexplanonremov" value=" -For final timeout, physician paused or verbally confirmed with procedure team of:
-correct patient, correct procedure, and correct site/side.
-The patient has been positioned correctly for the procedure.
-All necessary equipment are available.
"][checkbox value=" -Instrument sterility verified.
"]
PROCEDURE
-Device was palpated, distal end identified, and guiding site marked with [select value="tissue marker|retracted tip of pen"]
-The area surrounding the Nexplanon was cleansed with [select value="Betadine/Iodine|Chlorhexidine"] and adequate drying time allowed per manufacturer recommendations and infection control protocol.
-Above anesthetic agent was injected with 27g needle through the skin enough to form a very small wheal and the remainder under the distal aspect of the device.
-Using [select value="#11blade|#15blade"] scalpel, a skin incision was made over the distal aspect of the device.
-The tissue capsule surrounding the device was lysed sharply and the device removed using a hemostat.
-Hemostasis was assured.
-EBL < 1ml.
-The site was dressed with [checkbox value="Dermabond|SteriStrips|pressure dressing|bacitracin ointment"].
-Wound care instructions reviewed.
-Discussed return precautions to include: [checkbox value="bleeding at removal site that is continuing to soak through pads after first removed|worsening pain after first 24 hours|increasing swelling after first 24 hours|pus coming from insertion site|fever"].[/conditional][checkbox name="femaleproctypeNexplanonReIns" value="NEXPLANON REMOVAL & REINSERTION PROCEDURE NOTE"][conditional field="femaleproctypeNexplanonReIns" condition="(femaleproctypeNexplanonReIns).is('NEXPLANON REMOVAL & REINSERTION PROCEDURE NOTE')"]DIAGNOSIS: Z30.46 Encounter for surveillance of implantable subdermal
contraceptivePROCEDURE: Removal with reinsertion of nexplanon - CPT 11983
NEXPLANON LOT#: [text size="20"]
ANESTHESIA AGENT(S): [checkbox value="Lidocaine 1% with epinephrine|Lidocaine 1% without epinephrine|Lidocaine 2% with epinephrine|Lidocaine 2% without epinephrine|Marcaine 0.5%|Bicarbonate buffering solution"]
-Total amt used: [text size="5"] ml[comment memo="type of consent (choose one)" memo_color="blue"][checkbox memo="verbal" memo_size="small" name="nexplanonreinsconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="nexplanonreinsconsenttypewritten" value=""]INDICATIONS/COUNSELING:
-Confirmed patient desires removal/reinsertion of Nexplanon for the following reason(s): [select value="current Nexplanon needs replaced|other"]. [text memo="add'l explanation if needed" memo_size="small" size="50"]
-Reason(s) patient desires to continue this specific form of contraception: [checkbox value="prevent pregnancy|irregular menses|dysmenorrhea|menorrhagia|dysfunctional uterine bleeding|forgets to take pills|other-"] [text size="50"]
-The patient was counseled regarding the risks, benefits and alternatives of Nexplanon insertion and use.
-She is aware that there are other methods of contraception such as OCPs, contraceptive patches and rings and barrier methods of contraception.
-Discussed and patient verbalized understanding of the risks, benefits, alternatives and possible complications of subdermal implants to include:
-possible contraindications include known or suspected pregnancy, current or past history of thrombosis, liver disease, undiagnosed abnormal genital bleeding, current or past history of breast cancer, allergic reaction to any components of the Nexplanon device.
-potential changes in menstrual bleeding pattern including 22% amenorrhea, 18% prolonged bleeding, 7% frequent bleeding, 34% infrequent bleeding.
-possible adverse effects including ectopic pregnancy, thrombotic events or liver disease, depression or emotional lability, headache, weight increase.
-Nexplanon may be used for nursing after the 4th week.
-Confirmed that all of her questions were answered and she desires to proceed with the Nexplanon reinsertion.
[/conditional][conditional field="nexplanonreinsconsenttypeverbal" condition="(nexplanonreinsconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="nexplanonreinsconsenttypewritten" condition="(nexplanonreinsconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeNexplanonReIns" condition="(femaleproctypeNexplanonReIns).is('NEXPLANON REMOVAL & REINSERTION PROCEDURE NOTE')"][comment memo="only select what's applicable" memo_size="small"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure and site/side matches the consent form.
-Patient was involved in the site/side marking.
"][checkbox name="timeoutnexplanonreins" value=" -For final timeout, physician paused or verbally confirmed with procedure team of:
-correct patient, correct procedure, and correct site/side.
-The patient has been positioned correctly for the procedure.
-All necessary equipment are available.
"][checkbox value=" -Instrument sterility verified.
"]
PROCEDURE:
-Device was palpated, distal end identified, and guiding site marked with [select value="tissue marker|retracted tip of pen"]
-The area surrounding the Nexplanon was cleansed with [select value="Betadine/Iodine|Chlorhexidine"] and adequate drying time allowed per manufacturer recommendations and infection control protocol.
-Above anesthetic agent was injected with 27g needle through the skin enough to form a very small wheal and the remainder under the distal aspect of the device.
-Using [select value="#11blade|#15blade"] scalpel, a skin incision was made over the distal aspect of the device.
-The tissue capsule surrounding the device was lysed sharply and the device removed using a hemostat.
-In sterile fashion applicator for replacement Nexplanon device was inspected and presence of Nexplanon device verified.
-Applicator used to insert Nexplanon device [select value="through original/initial incision|through new site that was marked"] on [select value="left arm|right arm"] per manufacturers recommendations.
-Grooved tip of obturator was visible inside needle upon removal.
-Both myself and patient palpated the Nexplanon device in subdermal location.
-Hemostasis assured.
-EBL < 1ml.
-The site was dressed with [checkbox value="Dermabond|SteriStrips|pressure dressing|bacitracin ointment"].
-Wound care instructions reviewed.
-Discussed return precautions to include: [checkbox value="bleeding at insertion site that is continuing to soak through pads after first removed|worsening pain after first 24 hours|increasing swelling after first 24 hours|pus coming from insertion site|fever"].
[/conditional][checkbox name="femaleproctypeColpo" value="COLPOSCOPY PROCEDURE NOTE"][conditional field="femaleproctypeColpo" condition="(femaleproctypeColpo).is('COLPOSCOPY PROCEDURE NOTE')"]
DIAGNOSIS: [select value="|ASCUS - R87.610|ASC-H - R87.611|LSIL - R87.612|HSIL - R87.613|AGC - R87.619"] [select value="Negative for high-risk HPV|Positive for high-risk HPV"]
PROCEDURE: [select value="Colposcopy (with biopsy) - 57455|Colposcopy with ECC - 57454|Colposcopy with ECC (no visible cervical lesions biopsied) - 57456"]
ANESTHESIA: [text default="none" size="40"][comment memo="type of consent (choose one)" memo_color="blue"][checkbox memo="verbal" memo_size="small" name="colpoconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="colpoconsenttypewritten" value=""]INDICATIONS/COUNSELING:
-Discussed the reasons for this procedure which include: abnormal pap, determining future risk of progression to cervical cancer.
-Discussed the risks of this procedure which include but are not limited to:
-bleeding possibly necessitating application of Monsels solution
-infection possibly necessitating antibiotic therapy
-allergic reaction to the solutions used in the procedure
-possibility that the test may not detect premalignant/malignant conditions (false-negative)
-Discussed alternatives to procudure which include: continued observation with PAP smears, referral for gynecologist/second opinion.
-Discussed expections for post-operative period:
-necessary recuperation time period of <1day
-bleeding, brown discharge and some cramping which may persist for 1-2 days if biopsies are taken.
-Timeframe/mode of followup for discussing results of potential biopsies was discussed.
-Patient acknowledged understanding of the items above and patient agrees to proceed.
[/conditional][conditional field="colpoconsenttypeverbal" condition="(colpoconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="colpoconsenttypewritten" condition="(colpoconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeColpo" condition="(femaleproctypeColpo).is('COLPOSCOPY PROCEDURE NOTE')"][comment memo="only select what's applicable" memo_size="small"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure type matches the consent form.
"][checkbox name="timeoutcolpo" value=" -For final timeout, physician paused or verbally confirmed with procedure team of:
-correct patient, correct procedure, and correct site/side.
-The patient has been positioned correctly for the procedure.
-All necessary equipment are available.
-Instrument sterility verified.
"]
PROCEDURE
-The speculum was inserted and the cervix was identified.
-Utilizing adequate magnification with colposcope, the entire transformation zone and squamocolumnar junction [select value="were|were NOT"] visualized.
-[select value="Acetic acid solution then lugol's iodine solution were|Acetic acid solution was"] applied sequentially to cervix and cervix reexamined.
-[select name="colpolesions" value="Lesions adequately identified as described in findings|No lesions visualized"]FINDINGS:
-Vagina: [text default="normal vaginal mucosa without lesions or evidence of genital warts." size="50"]
-External genitalia: [text default="normal" size="50"]
-Perirectal exam: [text default="normal" size="50"]
-Cervix exam without then with [select value="acetic acid & Lugol's iodine solution|acetic acid solution"], the following lesion(s) identified and biopsied:
[checkbox name="colpolesion1" value="*Lesion/Specimen 1/A"][/conditional][conditional field="colpolesion1" condition="(colpolesion1).is('*Lesion/Specimen 1/A')"] at [text size="5"] o'clock position:
-Size- [select value="small patch|large patch"]
-Margins- [select value="sharp|indistinct"]
-Color- [select value="bright white|dull/pearly gray"]
-Punctations- [select name="punc1" value="none|small|large"][/conditional][conditional field="punc1" condition="(punc1).isNot('none')"] caliber, [select value="sparse|numerous"][/conditional][conditional field="colpolesion1" condition="(colpolesion1).is('*Lesion/Specimen 1/A')"]
-Mosaicism - [select value="not present|PRESENT"]
-Abnormal Vessels- [select name="abnves1" value="none|uniform|sporadic"][/conditional][conditional field="abnves1" condition="(abnves1).isNot('none')"], [select value="sparse|numerous"], [select value="small|large"] caliber
[/conditional][conditional field="femaleproctypeColpo" condition="(femaleproctypeColpo).is('COLPOSCOPY PROCEDURE NOTE')"]
[checkbox name="colpolesion2" value="*Lesion/Specimen 2/B"][/conditional][conditional field="colpolesion2" condition="(colpolesion2).is('*Lesion/Specimen 2/B')"] at [text size="5"] o'clock position:
-Size- [select value="small patch|large patch"]
-Margins- [select value="sharp|indistinct"]
-Color- [select value="bright white|dull/pearly gray"]
-Punctations- [select name="punc2" value="none|small|large"][/conditional][conditional field="punc2" condition="(punc2).isNot('none')"] caliber, [select value="sparse|numerous"][/conditional][conditional field="colpolesion2" condition="(colpolesion2).is('*Lesion/Specimen 2/B')"]
-Mosaicism - [select value="not present|PRESENT"]
-Abnormal Vessels- [select name="abnves2" value="none|uniform|sporadic"][/conditional][conditional field="abnves2" condition="(abnves2).isNot('none')"], [select value="sparse|numerous"], [select value="small|large"] caliber
[/conditional][conditional field="femaleproctypeColpo" condition="(femaleproctypeColpo).is('COLPOSCOPY PROCEDURE NOTE')"]
[checkbox name="colpolesion3" value="*Lesion/Specimen 3/C"][/conditional][conditional field="colpolesion3" condition="(colpolesion3).is('*Lesion/Specimen 3/C')"] at [text size="5"] o'clock position:
-Size- [select value="small patch|large patch"]
-Margins- [select value="sharp|indistinct"]
-Color- [select value="bright white|dull/pearly gray"]
-Punctations- [select name="punc3" value="none|small|large"][/conditional][conditional field="punc3" condition="(punc3).isNot('none')"] caliber, [select value="sparse|numerous"][/conditional][conditional field="colpolesion3" condition="(colpolesion3).is('*Lesion/Specimen 3/C')"]
-Mosaicism - [select value="not present|PRESENT"]
-Abnormal Vessels- [select name="abnves3" value="none|uniform|sporadic"][/conditional][conditional field="abnves3" condition="(abnves3).isNot('none')"], [select value="sparse|numerous"], [select value="small|large"] caliber
[/conditional][conditional field="femaleproctypeColpo" condition="(femaleproctypeColpo).is('COLPOSCOPY PROCEDURE NOTE')"]
[checkbox name="colpolesion4" value="*Lesion/Specimen 4/D"][/conditional][conditional field="colpolesion4" condition="(colpolesion4).is('*Lesion/Specimen 4/D')"] at [text size="5"] o'clock position:
-Size- [select value="small patch|large patch"]
-Margins- [select value="sharp|indistinct"]
-Color- [select value="bright white|dull/pearly gray"]
-Punctations- [select name="punc4" value="none|small|large"][/conditional][conditional field="punc4" condition="(punc4).isNot('none')"] caliber, [select value="sparse|numerous"][/conditional][conditional field="colpolesion4" condition="(colpolesion4).is('*Lesion/Specimen 4/D')"]
-Mosaicism - [select value="not present|PRESENT"]
-Abnormal Vessels- [select name="abnves4" value="none|uniform|sporadic"][/conditional][conditional field="abnves4" condition="(abnves4).isNot('none')"], [select value="sparse|numerous"], [select value="small|large"] caliber[/conditional][conditional field="femaleproctypeColpo" condition="(femaleproctypeColpo).is('COLPOSCOPY PROCEDURE NOTE')"]
-Entirety of lesion(s) [select value="were|were NOT"] visualized.
[checkbox value="-Pap smear was repeated.
"][checkbox value="-Endocervical curretage was performed.
"][checkbox value="-Endometrial biopsy was performed.
"][/conditional][checkbox name="femaleproctypeEMB" value="ENDOMETRIAL BIOPSY PROCEDURE NOTE"][conditional field="femaleproctypeEMB" condition="(femaleproctypeEMB).is('ENDOMETRIAL BIOPSY PROCEDURE NOTE')"]PRE-OP DIAGNOSIS: [select value="N93.8 - Other specified abnormal uterine and vaginal bleeding|"][text size="60"]
FINDINGS: [select value="none|"][text size="60"]
POST-OP DIAGNOSIS: [select value="N93.8 - Other specified abnormal uterine and vaginal bleeding|"][text size="60"]
PROCEDURE: Endometrial biopsy - CPT 58100
ANESTHESIA: [select value="none|"][text size="60"][comment memo="type of consent (choose one)" memo_color="blue"][checkbox memo="verbal" memo_size="small" name="EMBconsenttypeverbal" value=""][checkbox memo="written" memo_size="small" name="EMBconsenttypewritten" value=""]INDICATIONS/COUNSELING:
-Reason(s) for this procedure: [checkbox value="evaluation of abnormal uterine bleeding|evaluation of post-menopausal bleeding|evaluation of abnormal endometrial cells found on a Pap smear"]. [text size="50"]
-Discussed with patient the risks of this procedure which include: bleeding, infection, pain, and need for repeat procedure.
-Discussed with patient the alternatives to this procedure which include: referral for gynecologist/second opinion.
-Verified patient's non-pregnancy status by negative [select value="serum|urine"] HCG.
-Verified that all patient's questions were answered. No guarantees were given or implied.
[/conditional][conditional field="EMBconsenttypeverbal" condition="(EMBconsenttypeverbal).is('')"]-Patient consent and timeout were performed verbally in lieu of written consent due to: [checkbox value="austere medical conditions|high patient volume and unavailability of support staff to assist|unavailability of accessible/printed forms"]
-Patient made aware of above conditions preventing written consent and agreed to proceed.
-A time out was performed prior to the procedure ensuring:
[/conditional][conditional field="EMBconsenttypewritten" condition="(EMBconsenttypewritten).is('')"]-Confirmed that consent form appropriately signed and hardcopy to be scanned into patient's medical record.
-A time out was performed prior to the procedure and documented in a hardcopy form to be scanned into patient's record to include ensuring:
[/conditional][conditional field="femaleproctypeEMB" condition="(femaleproctypeEMB).is('ENDOMETRIAL BIOPSY PROCEDURE NOTE')"][comment memo="only select what's applicable" memo_size="small"]
[checkbox value=" -Patient was identified using full name and DOB.
-Patient was evaluated and medical record reviewed including history and lab/imaging findings if applicable.
-Procedure type matches the consent form.
"][checkbox name="timeoutEMB" value=" -For final timeout, physician paused or verbally confirmed with procedure team of:
-correct patient, correct procedure, and correct site/side.
-The patient has been positioned correctly for the procedure.
-All necessary equipment are available.
"][checkbox value=" -Instrument sterility verified.
"]
PROCEDURE
[checkbox name="bimanual1" value="-Bimanual exam was performed and position of uterus determined to be "][/conditional][conditional field="bimanual1" condition="(bimanual1).is('-Bimanual exam was performed and position of uterus determined to be ')"][select value="midposition|anteroverted|posteroverted"].
[/conditional][conditional field="femaleproctypeEMB" condition="(femaleproctypeEMB).is('ENDOMETRIAL BIOPSY PROCEDURE NOTE')"]-The speculum was inserted and the cervix was identified.
-[select value="Betadine/Iodine|Chlorhexidine"] was used to clean the cervix.
[checkbox value="-An os dilator was used.
"]-[select memo="choose whether tenaculum used" memo_size="small" name="tenaculum3" value="|A tenaculum was applied to |A tenaculum was not used. "][/conditional][conditional field="tenaculum3" condition="(tenaculum3).is('A tenaculum was applied to ')"][select value="superior/anterior cervix. |posterior/inferior cervix."][/conditional][conditional field="femaleproctypeEMB" condition="(femaleproctypeEMB).is('ENDOMETRIAL BIOPSY PROCEDURE NOTE')"]
-The uterus was sounded to a depth of [text size="5"]cm.
-The endometrial suction currette was inserted into the uterus and a 360 degree endometrial sample was obtained in the usual manner.
[checkbox value="-The procedure was repeated to obtain a second sample.
"][checkbox value="-A cytobrush was used to collect any sample remaining at the os.
"]-All samples were placed in a specimen container and sent to pathology for review.
[/conditional]
[checkbox memo="*" memo_size="small" memo_color="blue" name="PtDisp" value="PATIENT DISPOSITION"][conditional field="PtDisp" condition="(PtDisp).is('PATIENT DISPOSITION')"]
-The patient tolerated the procedure well, without any S/S of vasovagal responses or other immediate procedural complications.
-Patient left in stable condition with appropriate counseling as described above.[/conditional][checkbox memo="*" memo_size="small" memo_color="blue" name="contraAP" value="CONTRACEPTIVE PLAN"][conditional field="contraAP" condition="(contraAP).is('CONTRACEPTIVE PLAN')"]
[/conditional][conditional field="contraAP|femaleproctypeNexplanonRemov|femaleproctypeNexplanonReIns|femaleproctypeIUDReins|femaleproctypeIUDRemov" condition="(contraAP).is('CONTRACEPTIVE PLAN')&&((femaleproctypeNexplanonRemov).isNot('NEXPLANON REMOVAL PROCEDURE NOTE')&&(femaleproctypeNexplanonReIns).isNot('NEXPLANON REMOVAL & REINSERTION PROCEDURE NOTE')&&(femaleproctypeIUDReins).isNot('IUD REMOVAL & REINSERTION PROCEDURE NOTE')&&(femaleproctypeIUDRemov).isNot('IUD REMOVAL PROCEDURE NOTE'))"]-Previous Method - [select memo="*" memo_size="small" memo_color="blue" name="Q1" value="choose below|Pill|Patch|Ring|Progestin shot|Progestin implant|Hormone IUD|Copper IUD|abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method"]
[/conditional][conditional field="contraAP|femaleproctypeNexplanonIns|femaleproctypeNexplanonReIns||femaleproctypeIUDReins|femaleproctypeIUDIns" condition="(contraAP).is('CONTRACEPTIVE PLAN')&&((femaleproctypeNexplanonIns).isNot('NEXPLANON INSERTION PROCEDURE NOTE')&&(femaleproctypeNexplanonReIns).isNot('NEXPLANON REMOVAL & REINSERTION PROCEDURE NOTE')&&(femaleproctypeIUDReins).isNot('IUD REMOVAL & REINSERTION PROCEDURE NOTE')&&(femaleproctypeIUDIns).isNot('IUD INSERTION PROCEDURE NOTE'))"]-New Method Chosen - [select memo="*" memo_size="small" memo_color="blue" name="Q2" value="choose below|Pill|Patch|Ring|Progestin shot|Progestin implant|Hormone IUD|Copper IUD|abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method"]
[/conditional][conditional field="contraAP" condition="(contraAP).is('CONTRACEPTIVE PLAN')"]-Recommendations to minimize gaps in contraception coverage and unintended pregnancy --> [/conditional][conditional field="Q1|Q2" condition="(Q1).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')&&(Q2).is('Pill')"]
-Option (1) Take first pill as soon as pill pack received.
-Option (2) Take your first pill soon after next period begins.
-If first pill taken ≤ 5 days after the start of menses, no backup method needed.
-If first pill taken > 5 days after the start of your period, use back-up method for the first 7 days
-Take 1 pill each day. Take pill at the same time each day (especially if progestin-only pill).
-After finishing a pack of pills, start a new pack the next day. Should have NO day without a pill.
-If missed ONE pill: Take pill as soon as possible.
-If missed TWO pills or more: Take pill as soon as possible. Take next pill at the
usual time. Use condoms for 7 days. Use emergency contraception if having
unprotected sex.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')&&(Q2).is('Patch')"]
-Option (1) Put on first patch as soon as pack received.
-Option (2) Put on first patch soon after next period begins.
-If first patch put on ≤ 5 days after the start of menses, no backup method needed.
-If first patch put on > 5 days after the start of your period, use back-up method for the first 7 days
-Use new patch every week for 3 weeks and no patch for the 4th week.
-Expect menses during the patch-free week. May have a light menses or no menses at all.
-Start a new box of patches at the end of the 4th week.
-If the patch comes off, put it back on right away. If it does not stick, use a new patch.
-If the patch falls off for more than a day, put on new patch and use condoms for the next 7 days. Put on next patch a week from the date of this new patch.
-If forgot to change patch after 7 days:
-patch has enough hormones for 9 days; if patch on for 9 days or less put on a new patch.
-If patch on for more than 9 days, put on a new patch and use condoms for the next 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')&&(Q2).is('Ring')"]
-Option (1) Put in first ring as soon as pack received.
-Option (2) Put in first ring soon after next period begins.
-If first ring put in ≤ 5 days after the start of menses, no backup method needed.
-If first ring put in > 5 days after the start of your period, use back-up method for the first 7 days
-Leave the ring in vagina for 3 weeks, and remove it for the 4th week.
-Ring is removed by hooking a finger under the rim and pulling it out.
-Most women have menses during the ring-free week.
-Insert a new ring at the end of the 4th week.
-Can store the ring at room temperature up to four months. In the refrigerator, the ring lasts
much longer.
-If no/reduced menses desired and because the ring has enough hormones to last 35 days, can leave in for more than 3 weeks. Change the ring on the same day of each month (for instance, March 1st, April 1st, May 1st, etc.). If removing the old ring and inserting the new ring on the same day, may not have menses.
-If ring comes out: the ring can stay out of body for up to 3 hours and still prevent pregnancy. If the ring is out of body for more than 3 hours, put it back into vagina and use condoms for the next 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')&&(Q2).is('Progestin shot')"]
-Use back-up method for the first 7 days following injection.
-Date estimated/anticipated given: [date name="DepoDate1" default="today"]
-Next window: [calc memo="calc value" value="score1=(DepoDate1).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate1).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"].
-If miss window for next injection, will need pregnancy test prior to injection.[/conditional][conditional field="Q1|Q2|femaleproctypeNexplanonIns" condition="(Q1).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')&&((Q2).is('Progestin implant')||(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE'))"]
-Use back-up method for the first 7 days following implant insertion.
-Date given/to-be-given: [date name="ProgestinImplantDate1" default="today"]
-Effective for contraception for 3 years, latest recommended date to be replaced to avoid gap in coverage: [calc memo="calc value" value="score1=(ProgestinImplantDate1).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')&&((Q2).is('Hormone IUD')||(IUDtypeinserted).is('Mirena')||(IUDtypeinserted).is('Kyleena')||(IUDtypeinserted).is('Skyla')||(IUDtypeinserted).is('Liletta'))"]
-Use back-up method for the first 7 days following IUD insertion.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')&&((Q2).is('Copper IUD')||(IUDtypeinserted).is('Paragard/Copper IUD'))"]
-Copper IUD effective as soon as placed. No period of backup contraception method use needed.
-Date given/to-be-given: [date name="CopperIUDDate1" default="today"]
-Effective for contraception for 10 years (possibly longer, 12 year duration is off-label), latest recommended date to be replaced to prevent gap in coverage per FDA approved duration: [calc memo="calc value" value="score1=(CopperIUDDate1).dateAdd(3650)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Pill')&&(Q2).is('Pill')"]
-Assuming no gap: take 1st pill of new pack the day after taking any pill in old pack (regardless of timing of cycle, patient may wait until completion of old pack before starting new pack/contraceptive if desired).
-If >1 day gap: use backup contraception method for 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Pill')&&(Q2).is('Patch')"]
-Goal of 1 day overlap of old and new methods.
-After placing patch, continue taking pill for 1 day -OR- use backup contraception method for 1 day.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Pill')&&(Q2).is('Ring')"]
-Assuming no gap in contraception use: no overlap required, insert ring the day after taking any pill in pack.
-If gap and >5 days after start of menses: use backup contraception method for 7 days.
-Leave the ring in vagina for 3 weeks, and remove it for the 4th week.
-Ring is removed by hooking a finger under the rim and pulling it out.
-Most women have menses during the ring-free week.
-Insert a new ring at the end of the 4th week.
-Can store the ring at room temperature up to four months. In the refrigerator, the ring lasts
much longer.
-If no/reduced menses desired and because the ring has enough hormones to last 35 days, can leave in for more than 3 weeks. Change the ring on the same day of each month (for instance, March 1st, April 1st, May 1st, etc.). If removing the old ring and inserting the new ring on the same day, may not have menses.
-If ring comes out: the ring can stay out of body for up to 3 hours and still prevent pregnancy. If the ring is out of body for more than 3 hours, put it back into vagina and use condoms for the next 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Pill')&&(Q2).is('Progestin shot')"]
-Goal of 7 day overlap of old and new methods.
-Continue taking pill for 7 days after getting injection -OR- use backup contraception method for 7 days.
-Date estimated/anticipated given: [date name="DepoDate2" default="today"]
-Next window: [calc memo="calc value" value="score1=(DepoDate2).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate2).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"].
-If miss window for next injection, will need pregnancy test prior to injection.[/conditional][conditional field="Q1|Q2|femaleproctypeNexplanonIns" condition="(Q1).is('Pill')&&((Q2).is('Progestin implant')||(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE'))"]
-Goal of 4 day overlap of old and new methods.
-After getting implant inserted, continue taking pill for 4 days after getting implant inserted -OR- use backup contraception method for 4 days.
-Date given/to-be-given: [date name="ProgestinImplantDate2" default="today"]
-Effective for contraception for 3 years, latest recommended date to be replaced to avoid gap in coverage: [calc memo="calc value" value="score1=(ProgestinImplantDate2).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Pill')&&((Q2).is('Hormone IUD')||(IUDtypeinserted).is('Kyleena')||(IUDtypeinserted).is('Skyla'))"]
-Goal of 7 day overlap of old and new methods.
-After hormone IUD inserted, continue taking pill for 7 days -OR- use backup contraception method for 7 days.[/conditional][conditional field="Q1|IUDtypeinserted" condition="(Q1).is('Pill')&&((IUDtypeinserted).is('Mirena')||(IUDtypeinserted).is('Liletta'))"]
-Goal of 5 day overlap of old and new methods.
-After hormone IUD inserted, continue taking pill for 5 days -OR- use backup contraception method for 5 days.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Pill')&&((Q2).is('Copper IUD')||(IUDtypeinserted).is('Paragard/Copper IUD'))"]
-No overap or backup contraception method needes as long as copper IUD inserted ≤ 5 days after stopping pill. No overlap needed.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Patch')&&(Q2).is('Pill')"]
-Goal of 1 day overlap of old and new methods.
-After starting pill, keep wearing patch for 1 day after taking first pill -OR- use backup contraception method for 1 day.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Patch')&&(Q2).is('Ring')"]
-Assuming no gap or inserted ≤ 5 days after start of menses: insert ring and remove patch on the same day. No overlap required.
-If gap and >5 days after start of menses, use backup contraception method for 7 days.
-Leave the ring in vagina for 3 weeks, and remove it for the 4th week.
-Ring is removed by hooking a finger under the rim and pulling it out.
-Most women have menses during the ring-free week.
-Insert a new ring at the end of the 4th week.
-Can store the ring at room temperature up to four months. In the refrigerator, the ring lasts
much longer.
-If no/reduced menses desired and because the ring has enough hormones to last 35 days, can leave in for more than 3 weeks. Change the ring on the same day of each month (for instance, March 1st, April 1st, May 1st, etc.). If removing the old ring and inserting the new ring on the same day, may not have menses.
-If ring comes out: the ring can stay out of body for up to 3 hours and still prevent pregnancy. If the ring is out of body for more than 3 hours, put it back into vagina and use condoms for the next 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Patch')&&(Q2).is('Progestin shot')"]
-Goal of 7 days overlap of old and new methods.
-After injection, keep wearing patch for 7 days -OR- use backup contraception method for 7 days
-Date estimated/anticipated given: [date name="DepoDate3" default="today"]
-Next window: [calc memo="calc value" value="score1=(DepoDate3).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate3).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"].
-If miss window for next injection, will need pregnancy test prior to injection.[/conditional][conditional field="Q1|Q2|femaleproctypeNexplanonIns" condition="(Q1).is('Patch')&&((Q2).is('Progestin implant')||(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE'))"]
-Goal of 4 days overlap between old and new methods.
-After implant insertion, keep wearing patch for 4 days -OR- use backup contraception method for 4 days.
-Date given/to-be-given: [date name="ProgestinImplantDate3" default="today"]
-Effective for contraception for 3 years, latest recommended date to be replaced to avoid gap in coverage: [calc memo="calc value" value="score1=(ProgestinImplantDate3).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Patch')&&((Q2).is('Hormone IUD')||(IUDtypeinserted).is('Kyleena')||(IUDtypeinserted).is('Skyla'))"]
-Goal of 7 days overlap between old and new methods.
-After IUD insertion, keep wearing patch for 7 days -OR- use backup contraception method for 7 days.[/conditional][conditional field="Q1|IUDtypeinserted" condition="(Q1).is('Patch')&&((IUDtypeinserted).is('Mirena')||(IUDtypeinserted).is('Liletta'))"]
-Goal of 5 days overlap between old and new methods.
-After IUD insertion, keep wearing patch for 5 days -OR- use backup contraception method for 5 days.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Patch')&&((Q2).is('Copper IUD')||(IUDtypeinserted).is('Paragard/Copper IUD'))"]
-No overlap required.
-Have copper IUD inserted ≤ 5 days after removing patch to prevent interruption in contraception coverage.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Ring')&&(Q2).is('Pill')"]
-Goal of 1 day of overlap between old and new methods.
-After starting pill, keep in ring for 1 day -OR- use backup contraception method for 1 day.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Ring')&&(Q2).is('Patch')"]
-Goal of 2 days of overlap between old and new methods.
-After starting patch, keep in ring for 2 days -OR- use backup contraception method for 2 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Ring')&&(Q2).is('Progestin shot')"]
-Goal of 7 days of overlap between old and new methods.
-After injection, keep in ring for 7 days -OR- use backup contraception method for 7 days.
-Date estimated/anticipated given: [date name="DepoDate4" default="today"]
-Next window: [calc memo="calc value" value="score1=(DepoDate4).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate4).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"].
-If miss window for next injection, will need pregnancy test prior to injection.[/conditional][conditional field="Q1|Q2|femaleproctypeNexplanonIns" condition="(Q1).is('Ring')&&((Q2).is('Progestin implant')||(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE'))"]
-Goal of 4 days of overlap between old and new methods.
-After implant inserted, keep in ring for 4 days -OR- use backup contraception method for 4 days.
-Date given/to-be-given: [date name="ProgestinImplantDate4" default="today"]
-Effective for contraception for 3 years, latest recommended date to be replaced to avoid gap in coverage: [calc memo="calc value" value="score1=(ProgestinImplantDate4).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Ring')&&((Q2).is('Hormone IUD')||(IUDtypeinserted).is('Kyleena')||(IUDtypeinserted).is('Skyla'))"]
-Goal of 7 days of overlap between old and new methods.
-After IUD insertion, keep in ring for 7 days -OR- use backup contraception method.[/conditional][conditional field="Q1|IUDtypeinserted" condition="(Q1).is('Ring')&&((IUDtypeinserted).is('Mirena')||(IUDtypeinserted).is('Liletta'))"]
-Goal of 5 days of overlap between old and new methods.
-After IUD insertion, keep in ring for 5 days -OR- use backup contraception method for 5 days.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Ring')&&((Q2).is('Copper IUD')||(IUDtypeinserted).is('Paragard/Copper IUD'))"]
-No overlap required.
Have copper IUD inserted ≤ 5 days after removing ring to prevent interruption in contraception coverage.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Progestin shot')&&(Q2).is('Pill')"]
-Goal of starting new method ≤ 15 weeks after last injection
-If taking first pill > 15 weeks after last injection BUT ≤ 5 days from start of menses, no backup contraception method required
-If taking first pill > 15 weeks after last injection AND > 5 days from start of menses, use backup contraception method for 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Progestin shot')&&(Q2).is('Patch')"]
-Goal of starting new method ≤ 15 weeks after last injection
-If placing first patch > 15 weeks after last injection BUT ≤ 5 days from start of menses, no backup contraception method required
-If placing first patch > 15 weeks after last injection AND > 5 days from start of menses, use backup contraception method for 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Progestin shot')&&(Q2).is('Ring')"]
-Goal of starting new method ≤ 15 weeks after last injection
-If inserting ring > 15 weeks after last injection BUT ≤ 5 days from start of menses, no backup contraception method required
-If inserting ring > 15 weeks after last injection AND > 5 days from start of menses, use backup contraception method for 7 days.
-Leave the ring in vagina for 3 weeks, and remove it for the 4th week.
-Ring is removed by hooking a finger under the rim and pulling it out.
-Most women have menses during the ring-free week.
-Insert a new ring at the end of the 4th week.
-Can store the ring at room temperature up to four months. In the refrigerator, the ring lasts
much longer.
-If no/reduced menses desired and because the ring has enough hormones to last 35 days, can leave in for more than 3 weeks. Change the ring on the same day of each month (for instance, March 1st, April 1st, May 1st, etc.). If removing the old ring and inserting the new ring on the same day, may not have menses.
-If ring comes out: the ring can stay out of body for up to 3 hours and still prevent pregnancy. If the ring is out of body for more than 3 hours, put it back into vagina and use condoms for the next 7 days.[/conditional][conditional field="Q1|Q2|femaleproctypeNexplanonIns" condition="(Q1).is('Progestin shot')&&((Q2).is('Progestin implant')||(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE'))"]
-Have implant inserted up to 15 weeks after the last injection.
-If implant inserted > 15 weeks after last injection, use backup contraception method for 7 days.
-Date given/to-be-given: [date name="ProgestinImplantDate5" default="today"]
-Effective for contraception for 3 years, latest recommended date to be replaced to avoid gap in coverage: [calc memo="calc value" value="score1=(ProgestinImplantDate5).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Progestin shot')&&((Q2).is('Hormone IUD')||(IUDtypeinserted).is('Mirena')||(IUDtypeinserted).is('Kyleena')||(IUDtypeinserted).is('Skyla')||(IUDtypeinserted).is('Liletta'))"]
-Goal of starting new method ≤ 15 weeks after last injection
-If IUD inserted > 15 weeks after the last injection BUT ≤ 7 days after start of menses, no backup contraception method needed.
-If IUD inserted > 15 weeks after the last injection AND > 7 days after start of menses, use backup contraception method for 7 days.[/conditional][conditional field="Q1|Q2|IUDtypeinserted" condition="(Q1).is('Progestin shot')&&((Q2).is('Copper IUD')||(IUDtypeinserted).is('Paragard/Copper IUD'))"]
-Goal of Copper IUD insertion ≤ 15 weeks after last injection to avoid interruption in contraception coverage.
-No backup contraception needed after Copper IUD placement.[/conditional][conditional field="Q1|femaleproctypeNexplanonRemov|Q2" condition="((Q1).is('Progestin implant')||(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE'))&&(Q2).is('Pill')"]
-Goal of 7 days overlap between old and new methods.
-After implant removed, continue pill pack for 7 days -OR- use backup contraception method for 7 days.[/conditional][conditional field="Q1|femaleproctypeNexplanonRemov|Q2" condition="((Q1).is('Progestin implant')||(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE'))&&(Q2).is('Patch')"]
-Goal of overlap of 7 days between old and new methods.
-After impant removed, continue patch for 7 days -OR- use backup contraception method for 7 days.[/conditional][conditional field="Q1|femaleproctypeNexplanonRemov|Q2" condition="((Q1).is('Progestin implant')||(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE'))&&(Q2).is('Ring')"]
-Goal of overlap of 7 days between old and new methods.
-After implant removed, continue use of ring for 7 days -OR- use backup contraception method for 7 days.
-Leave the ring in vagina for 3 weeks, and remove it for the 4th week.
-Ring is removed by hooking a finger under the rim and pulling it out.
-Most women have menses during the ring-free week.
-Insert a new ring at the end of the 4th week.
-Can store the ring at room temperature up to four months. In the refrigerator, the ring lasts
much longer.
-If no/reduced menses desired and because the ring has enough hormones to last 35 days, can leave in for more than 3 weeks. Change the ring on the same day of each month (for instance, March 1st, April 1st, May 1st, etc.). If removing the old ring and inserting the new ring on the same day, may not have menses.
-If ring comes out: the ring can stay out of body for up to 3 hours and still prevent pregnancy. If the ring is out of body for more than 3 hours, put it back into vagina and use condoms for the next 7 days.[/conditional][conditional field="Q1|femaleproctypeNexplanonRemov|Q2" condition="((Q1).is('Progestin implant')||(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE'))&&(Q2).is('Progestin shot')"]
-Goal of 7 days of overlap between old and new methods.
-Before implant is removed, recommend first injection 7 days prior -OR- use backup contraception method for 7 days after injection.
-Date estimated/anticipated given: [date name="DepoDate5" default="today"]
-Next window: [calc memo="calc value" value="score1=(DepoDate5).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate5).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"].
-If miss window for next injection, will need pregnancy test prior to injection.[/conditional][conditional field="Q1|femaleproctypeNexplanonRemov|Q2|IUDtypeinserted" condition="((Q1).is('Progestin implant')||(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE'))&&((Q2).is('Hormone IUD')||(IUDtypeinserted).is('Kyleena')||(IUDtypeinserted).is('Skyla'))"]
-Goal of 7 days of overlap between old and new methods.
-Before implant removal, insert IUD 7 days prior -OR- use backup contraception for 7 days after IUD insertion.[/conditional][conditional field="Q1|femaleproctypeNexplanonRemov|IUDtypeinserted" condition="((Q1).is('Progestin implant')||(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE'))&&((IUDtypeinserted).is('Mirena')||(IUDtypeinserted).is('Liletta'))"]
-Goal of 5 days of overlap between old and new methods.
-Before implant removal, insert IUD 5 days prior -OR- use backup contraception method for 5 days after IUD insertion.[/conditional][conditional field="Q1|femaleproctypeNexplanonRemov|Q2|IUDtypeinserted" condition="((Q1).is('Progestin implant')||(femaleproctypeNexplanonRemov).is('NEXPLANON REMOVAL PROCEDURE NOTE'))&&((Q2).is('Copper IUD')||(|IUDtypeinserted).is('Paragard/Copper IUD'))"]
-Have copper IUD inserted ≤ 5 days after implant is removed or use backup contraception until copper IUD inserted. No overlap required.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Hormone IUD')||(IUDtyperemoved).is('Hormone IUD'))&&(Q2).is('Pill')"]
-Goal of 7 days of overlap between old and new methods.
-Before IUD removal, Start pill pack 7 days prior -OR- use backup contraception method for 7 days after starting pill pack.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Hormone IUD')||(IUDtyperemoved).is('Hormone IUD'))&&(Q2).is('Patch')"]
-Goal of 7 days of overlap between old and new methods.
-Before IUD removal, place patch 7 days prior -OR- use backup contraception method for 7 days after placing patch.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Hormone IUD')||(IUDtyperemoved).is('Hormone IUD'))&&(Q2).is('Ring')"]
-Goal of 7 days of overlap between old and new methods.
-Before IUD removal, insert ring 7 days prior -OR- use backup contraception method for 7 days after insertion of ring.
-Leave the ring in vagina for 3 weeks, and remove it for the 4th week.
-Ring is removed by hooking a finger under the rim and pulling it out.
-Most women have menses during the ring-free week.
-Insert a new ring at the end of the 4th week.
-Can store the ring at room temperature up to four months. In the refrigerator, the ring lasts
much longer.
-If no/reduced menses desired and because the ring has enough hormones to last 35 days, can leave in for more than 3 weeks. Change the ring on the same day of each month (for instance, March 1st, April 1st, May 1st, etc.). If removing the old ring and inserting the new ring on the same day, may not have menses.
-If ring comes out: the ring can stay out of body for up to 3 hours and still prevent pregnancy. If the ring is out of body for more than 3 hours, put it back into vagina and use condoms for the next 7 days.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Hormone IUD')||(IUDtyperemoved).is('Hormone IUD'))&&(Q2).is('Progestin shot')"]
-Goal of 7 days of overlap between old and new methods.
-Before IUD removal, Have first injection 7 days prior -OR- use backup contraception method for 7 days after injection.
-Date estimated/anticipated given: [date name="DepoDate6" default="today"]
-Next window: [calc memo="calc value" value="score1=(DepoDate6).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate6).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"].
-If miss window for next injection, will need pregnancy test prior to injection.[/conditional][conditional field="Q1|IUDtyperemoved|Q2|femaleproctypeNexplanonIns" condition="((Q1).is('Hormone IUD')||(IUDtyperemoved).is('Hormone IUD'))&&((Q2).is('Progestin implant')||(femaleproctypeNexplanonIns).is('NEXPLANON INSERTION PROCEDURE NOTE'))"]
-Goal of 4 days of overlap between old and new methods.
-Before IUD removal, insert implant 4 days prior -OR- use backup contraception method for 4 days after insertion of implant.
-Date given/to-be-given: [date name="ProgestinImplantDate6" default="today"]
-Effective for contraception for 3 years, latest recommended date to be replaced to avoid gap in coverage: [calc memo="calc value" value="score1=(ProgestinImplantDate6).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="contraAP|IUDreinstyperemoved|IUDreinstypeinserted" condition="((contraAP).is('CONTRACEPTIVE PLAN'))&&((IUDreinstyperemoved).is('Hormone IUD'))&&((IUDreinstypeinserted).is('Mirena')||(IUDreinstypeinserted).is('Kyleena')||(IUDreinstypeinserted).is('Skyla')||(IUDreinstypeinserted).is('Liletta'))"]
-No overlap required between these methods of contraception.
-No backup contraception method needed.[/conditional][conditional field="contraAP|Q1|IUDreinstyperemoved|Q2|IUDreinstypeinserted" condition="((contraAP).is('CONTRACEPTIVE PLAN'))&&((Q1).is('Hormone IUD')||(IUDreinstyperemoved).is('Hormone IUD'))&&((Q2).is('Copper IUD')||(IUDreinstypeinserted).is('Paragard/Copper IUD'))"]
-Have copper IUD inserted right after hormone IUD is removed. No overlap required.[/conditional][conditional field="contraAP|IUDreinstyperemoved|IUDreinstypeinserted" condition="((contraAP).is('CONTRACEPTIVE PLAN')&&((IUDreinstyperemoved).is('Copper IUD'))&&((IUDreinstypeinserted).is('Mirena')||(IUDreinstypeinserted).is('Liletta'))"]
-Have hormone IUD inserted right after copper IUD is removed. No overlap required.[/conditional][conditional field="contraAP|IUDreinstyperemoved|IUDreinstypeinserted" condition="((contraAP).is('CONTRACEPTIVE PLAN')&&((IUDreinstyperemoved).is('Copper IUD'))&&((IUDreinstypeinserted).is('Kyleena')||(IUDreinstypeinserted).is('Skyla'))"]
-Have hormone IUD inserted right after copper IUD is removed. Use backup contraception method for 7 days.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Copper IUD')||(IUDtyperemoved).is('Paragard/Copper IUD'))&&(Q2).is('Pill')"]
-Goal of 7 days of overlap between old and new methods.
-Before Copper IUD removal, start pill pack 7 days prior -OR- use backup contraception method for 7 days after starting pill pack.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Copper IUD')||(IUDtyperemoved).is('Paragard/Copper IUD'))&&(Q2).is('Patch')"]
-Goal of 7 days of overlap between old and new methods.
-Before Copper IUD removal, place patch 7 days prior -OR- use backup contraception method for 7 days after placing patch.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Copper IUD')||(IUDtyperemoved).is('Paragard/Copper IUD'))&&(Q2).is('Ring')"]
-Goal of 7 days of overlap between old and new methods.
-Before Copper IUD removal, insert ring 7 days prior -OR- use backup contraception method for 7 days after inserting ring.
[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Copper IUD')||(IUDtyperemoved).is('Paragard/Copper IUD'))&&(Q2).is('Progestin shot')"]
-Goal of 7 days of overlap between old and new methods.
-Before Copper IUD removal, have first injection 7 days prior -OR- use backup contraception method for 7 days after first injection.
-Date estimated/anticipated given: [date name="DepoDate7" default="today"]
-Next window: [calc memo="calc value" value="score1=(DepoDate7).dateAdd(77)"] THRU [calc memo="calc value" value="score1=(DepoDate7).dateAdd(105)"] [comment memo="11-15wk range backed by high quality evidence of efficacy" memo_size="small" memo_color="yellow"].
-If miss window for next injection, will need pregnancy test prior to injection.[/conditional][conditional field="Q1|IUDtyperemoved|Q2" condition="((Q1).is('Copper IUD')||(IUDtyperemoved).is('Paragard/Copper IUD'))&&(Q2).is('Progestin implant')"]
-Goal of 4 days of overlap between old and new methods.
-Before Copper IUD removal, insert implant 4 days prior -OR- use backup contraception method for 4 days after insertion of implant.
-Date given/to-be-given: [date name="ProgestinImplantDate7" default="today"]
-Effective for contraception for 3 years, latest recommended date to be replaced to avoid gap in coverage: [calc memo="calc value" value="score1=(ProgestinImplantDate7).dateAdd(1095)"].
-If not replaced prior to this date, will need pregnancy test prior to replacement.[/conditional][conditional field="contraAP|Q1|IUDreinstyperemoved|Q2|IUDreinstypeinserted" condition="(contraAP).is('CONTRACEPTIVE PLAN')&&((Q1).is('Copper IUD')||(IUDreinstyperemoved).is('Paragard/Copper IUD'))&&((Q2).is('Hormone IUD')||(IUDreinstypeinserted).is('Kyleena')||(IUDreinstypeinserted).is('Skyla'))"]
-When Copper IUD removed, insert hormone IUD right after AND use back-up method for 7 days.[/conditional][conditional field="contraAP|Q1|IUDreinstyperemoved|IUDreinstypeinserted" condition="(contraAP).is('CONTRACEPTIVE PLAN')&&((Q1).is('Copper IUD')||(IUDreinstyperemoved).is('Paragard/Copper IUD'))&&((IUDreinstypeinserted).is('Mirena')||(IUDreinstypeinserted).is('Liletta'))"]
-When Copper IUD removed, insert hormone IUD right after. No backup contraception method needed in this case.
-If hormone IUD not inserted right after copper IUD removal, use back-up contraception method for 7 days.[/conditional][conditional field="Q1|Q2" condition="(Q1).is('Patch')&&(Q2).is('Patch')"]Not applicable - please select two different methods. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Ring')&&(Q2).is('Ring')"]Not applicable - please select two different methods. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Progestin shot')&&(Q2).is('Progestin shot')"]Not applicable - please select two different methods. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Progestin implant')&&(Q2).is('Progestin implant')"]Not applicable - please select two different methods. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Hormone IUD')&&(Q2).is('Hormone IUD')"]Not applicable - please select two different methods. [/conditional][conditional field="Q1|Q2" condition="(Q1).is('Copper IUD')&&(Q2).is('Copper IUD')"]Not applicable - please select two different methods. [/conditional][conditional field="Q2" condition="(Q2).is('abstinence/condoms/spermicide/withdrawal/fertility awareness/lactation/EC method')"]
-If using external condoms - use a new condom with each intercourse, pull out before penis gets soft wile holding onto the condom's ring, use a polyurethane condom is allergic to latex, 82% effective with proper use
-If using internal condoms - use a new condom with each intercourse, use extra lubrication as needed, 79% effective with proper use
-If using spermicide - insert more spermicide each intercourse, insert spermicide deep into vagina shortly before intercourse, 72% effective with proper use, may use condoms as well (to protect against HIV/STIs, increase effectiveness)
-If using withdrawal/coitus interruptus method - pull penis out of vagina BEFORE ejaculation, does not work if penis not pulled out in time, 78% effective with proper use
-If using fertility awareness/calendar method - predict fertile days by (1) taking temperature daily, (2) checking vaginal mucus for changes, AND/OR (3) keeping a record of menses; works best if using more than one of these methods; avoid intercourse or use condoms/spermicide during fertile days, 76% effective with proper use
-If using breastfeeding/lactation amenorrhea method - nurse at least every 4 hours during the day and at least every 6 hours at night, must breastfeed exclusively (not bottles/formula/food), no long considered effective once first menses starts or 6 months after childbirth whichever comes first; 95% effective with proper use
-If using emergency contraception pill method - works best the sooner it is taken after unprotected intercourse, can take pill no more than 5 days after unprotected intercourse, if pack contains 2 pills then take both pills together, can get some brands without prescription, 58-94% effective with proper use
[/conditional][conditional field="contraAP" condition="(contraAP).is('CONTRACEPTIVE PLAN')"][/conditional][checkbox memo="*" memo_size="small" memo_color="blue" name="endfreetext" value="Additional comments:"][conditional field="endfreetext" condition="(endfreetext).is('Additional comments:')"] [textarea default="none"][/conditional]
