# How Far Away?

**Category:** Endocrine, Nutrition & Obesity
**Source:** https://www.soapnote.org/endocrine-metabolic/how-far-away/

---

[comment memo="If you're planning space travel beyond our Moon, you'll probably be looking at some cryosleep.  During cryosleep, you can work down some of your stored energy while moving across the solar system.  This tool will help you plan how much weight to gain for your next mission."]
[text name="Height" default="0"] <-- Height in inches
[text name="Weight" default="0"] <-- Weight in pounds [comment memo="Note: weight must be measured on Earth"]
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
BMI Calculations
Class --> [calc memo="class" value="score=(Weight)*(703)/((Height)*(Height));score>59.9999?'Super-super obesity or class V obesity':score>49.9999?'Super-obesity or class IV obesity':score>39.9999?'Extreme obesity or class III obesity':score>34.9999?'Obesity class II':score>29.9999?'Obesity class I':score>24.9999?'Overweight':score>18.4999?'Normal':score>16.4999?'Underweight':'Severely underweight'"]
BMI –> [calc memo="bmi" value="score1=score.toFixed(1)"]
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
For ADULTS of this height:
Severely underweight (BMI less than 16.5): less than [calc memo="---" value="score2=((16.5)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Underweight (BMI 16.5 to 18.4): starts at [calc memo="---" value="score3=((16.5)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Normal (BMI 18.5 to 24.9): starts at [calc memo="---" value="score4=((18.5)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Overweight (BMI 25 to 29.9): starts at [calc memo="---" value="score5=((25)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Obesity class I (BMI 30 to 34.9): starts at [calc memo="---" value="score6=((30)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Obesity class II (BMI 35 to 39.9): starts at [calc memo="---" value="score7=((35)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Extreme obesity or class III obesity (BMI 40 to 49.9): starts at [calc memo="---" value="score8=((40)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Super-obesity or class IV obesity (BMI 50 to 59.9): starts at [calc memo="---" value="score9=((50)*(Height)*(Height)/(703)).toFixed(1)"] lbs
Super-super obesity or class V obesity (BMI 60 and above): starts at [calc memo="---" value="score10=((60)*(Height)*(Height)/(703)).toFixed(1)"] lbs
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Excess Weight -> [calc memo="---" value="score11=((Weight)-(score5)).toFixed(1)"] lbs
Maximum days of cryosleep burning [text name="metabRate" size=4 default=0.5] pounds of excess weight (fat) per day -> [calc memo="---" value="score12=(score11)/(metabRate)"] days
Farthest possible mission --> [calc memo="---" value="score13=(score11)/(metabRate);score13>4379.9?'Neptune - 4380 days':score13>3467.4?'Pluto - 3467.5 days':score13>3102.4?'Uranus - 3102.5 days':score13>2554.9?'Saturn - 2555 days':score13>2372.4?'Mercury - 2372.5 days - even though it is close, you have to go slower to avoid crashing into the Sun':score13>2189.9?'Jupiter - 2190 days':score13>449.9?'Venus - 450 days':score13>209.9?'Mars - 210 days':score13>2.9?'The Moon - 3 days':score13>0?'Earth Orbit':'Cryosleep might not be a good idea for you until you put on a few more lbs'"]
[checkbox memo="display/hide notes & references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
References:  
Obesity Evidence at [link url="http://www.aafp.org/afp/2010/1015/p974.html" memo="#1"] Delaet (2010) Am Fam Physician 82:974-5
Space Travel info at [link url="https://www.thrillist.com/tech/transit-times-to-planets-how-long-would-it-take-to-get-to-mars#" memo="#2"] Wolff-Mann, E. (2015, May 18) 'How Long Would It Take to Travel to Every Planet?' 
Notes:
Calorie information: There are approximately 3500 calories in a pound. Women use an estimated 1600 to 2400 calories per day; men use an estimated 2000 to 3000 calories per day US government data [link url="https://health.gov/dietaryguidelines/2015/guidelines/appendix-2/" memo="health.gov Dietary Guidelines"]
Times to get to planets:
Neptune - 4380 days
Pluto - 3467.5 days
Uranus - 3102.5 days
Saturn - 2555 days
Mercury - 2372.5 days - even though it is close, you have to go slower to avoid crashing into the Sun
Jupiter - 2190 days
Venus - 450 days
Mars - 210 days
The Moon - 3 days
[/conditional]
