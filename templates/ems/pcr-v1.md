# PCR V1

**Category:** Emergency Medical Services
**Source:** https://www.soapnote.org/ems/pcr-v1/

---

DISPATCH-
[text name="ou" default="Medic"],[text name="fu" default="Fire"] were dispatched [select name="response" value="Alpha|Bravo|Charlie|Delta|Echo|"] response for a [text name="Call_type" default="Call type"]
[textarea name="variable_1"]

CHIEF COMPLAINT
[text name="Dispatch_type" default="Dispatch"]

HISTORY-
[textarea name="history" default="History"]

ASSESSMENT-
Appearance: [checkbox name="pe_general_check" value="well developed, well nourished, and well appearing|Does not appear to be in acute distress|In acute distress|Malnourished|obese|appears ill|appears frail|obvious signs of death"][text name="pe_general" size = 55 default=" "]
-Airway: [checkbox name="airway" value="maintained by patient|no concerns of compromise|airway patent|no airway obstructions|compromised|airway positioned to open|airway not patent|obstructions to airway|requires airway adjunct|requires advanced airway|requires artificial ventilation"][text name="airway" size = 55 default=" "]
-Breathing: [checkbox name="breathing" value="breathing regular|adequate respirations|appropriate tidal volume|not spontaneously breathing|irregular respirations|inadequate respirations|inadequate tidal volume|breathing spontaneously|rapid|slow|deep|shallow|apneic"][text name="breathing" size = 55 default=" "]
-Circulation: [checkbox name="circulation" value="No concerns of circulation, radial pulses present, strong and regular. Capillary refill appropriate |no obvious bleeding|pulses intact|skin color appropriate|no life threats to circulation|hemorrhage present|hemorrhage controlled|arterial tourniquet applied|pulses not intact|skin color not appropriate|life threatening concerns with circulation|pulses weak|pulses bounding"][text name="ros_constitutional" size = 55 default=" "]
-Skin: [checkbox name="pe_skin_check" value="no rashes, skin tears, swelling, lesions, or discoloration|pink, warm, and dry, w/ good turgor|pale|cool|cyanotic|flushed|clammy|hot|warm|diaphoretic|lividity|mottling|jaundiced|skin tear|swelling|poor skin turgor|excessively dry skin"][text name="pe_skin" default=" "]
-Level of consciousness: [checkbox name="loc" value="alert|oriented|person|place|time |event|disoriented|arousable by verbal stimuli|arousable by painful stimuli|baseline for pt|unresponsive|unconscious|pharmacologically sedated|unresponsive, unconscious, pulseless, and apneic"][text name="consciousness" size = 55 default=" "]
[textarea name="Assess_Other" default="Assess_Other"]
TREATMENT: 
[textarea name="treatment" default=" "]

Pre-Hospital activations: [checkbox name="pe_act_check" value="Stroke Alert|Level 1 Trauma Activation|Level 2 Trauma Activation|Code Critical|STEMI Alert|no alerts activated"][text name="pe_act" default=" "]
TRANSPORT
[select name="Destination" value="Saint Alphonsus RMC|St. Luke's RMC|Saint Alphonsus Eagle Medical Plaza|St. Luke's Meridian Medical Center|Saint Alphonsus Medical Center - Garrity|"]
-Transport Code    [select name="TransportCode" value="Code 1|Code 2|Code 3"]
-Patient disposition    [select name="patient_dis" value="Patient was stable during transport|Patient improved during transport|Patient declined during transport "]
[textarea name="Transport" default=""]
Able to complete a patient handoff with  [var name="Destination"]
