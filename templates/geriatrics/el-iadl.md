# EL – IADL

**Category:** Geriatrics
**Source:** https://www.soapnote.org/geriatrics/el-iadl/

---

(Lawton) Instrumental Activities of Daily Living

Patient: [textarea cols=40 rows=1]
Sex: [checkbox name="sex" value="male|female"]
DOB: [textarea cols=12 rows=1]
Age: [textarea cols=12 rows=1]

(Lawton) Instrumental Activities of Daily Living

Using telephone: [select name="Q1" value="Without help =3|With some help =2|Completely unable =1"]

Using transportation: [select name="Q2" value="Without help =3|With some help =2|Completely unable =1"]

Shopping: [select name="Q3" value="Without help =3|With some help =2|Completely unable =1"]

Preparing meals: [select name="Q4" value="Without help =3|With some help =2|Completely unable =1"]

Housework: [select name="Q5" value="Without help =3|With some help =2|Completely unable =1"]

Doing repairs: [select name="Q6" value="Without help =3|With some help =2|Completely unable =1"]

Doing laundry: [select name="Q7" value="Without help =3|With some help =2|Completely unable =1"]

Handling medication: [select name="Q8" value="Without help =3|With some help =2|Completely unable =1"]

Handling finances: [select name="Q9" value="Without help =3|With some help =2|Completely unable =1"]

Score: [calc value="score=(Q1)+(Q2)+(Q3)+(Q4)+(Q5)+(Q6)+(Q7)+(Q8)+(Q9)" memo="score"]
