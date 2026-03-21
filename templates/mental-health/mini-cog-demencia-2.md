# MINI COG DEMÊNCIA

**Category:** Psychiatry & Psychology
**Source:** https://www.soapnote.org/mental-health/mini-cog-demencia-2/

---

Mini Cog  [comment memo="Mini Cog O Mini Cog é uma ferramenta de triagem de demência muito fácil, com 2 perguntas. Se você tiver menos tempo, pode simplesmente pedir que desenhem o relógio."]
Passo 1: Peça ao paciente para repetir três palavras não relacionadas, como “bola”, “cachorro” e “televisão”.
Passo 2: Peça ao paciente para desenhar um relógio simples ajustado para 10 minutos depois das onze horas (11h10). Uma resposta correta é desenhar um círculo com os números aproximadamente nas posições corretas e os ponteiros apontando para 11 e 2.
     [select value="No=0|Yes=2" name="step2"] <-- O relógio foi desenhado corretamente? (círculo com números no lugar, ponteiros em 11 e 2)?
Etapa 3: peça ao paciente para lembrar as três palavras.
     [select value="Zero=0|One=1|Two=2|Three=3" name="step3"] <-- Quantas palavras foram lembradas corretamente?
Score:  [calc value="score=(step2)+(step3)" memo="x"]/5  Interpretation:  [calc value="score=(step2)+(step3); score>2?'Negative screen for dementia':'Positive screen for dementia/further evaluation is warranted'" memo="Interpretation"]
[checkbox memo="display/hide references" name="footnotes" value=""][conditional field="footnotes" condition="(footnotes).is('')"]
reference:  
[link url="//www.aafp.org/afp/2009/0315/p497.html" memo="#1"] Am Fam Physician. 2009 Mar 15;79(6):497-500.
[/conditional]
