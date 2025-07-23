 
 
 
Auteur
Luca Vandenweghe

Opleiding
Elektronica-ICT, afstudeerrichting ICT

Academiejaar
2024/2025

Interne promotor
Bart Delrue

In samenwerking met 
Dynamate
Coupure rechts 620
9000 Gent

Externe promotor(en)
Brecht Waeghe

 
Abstract
Deze bachelorproef onderzoekt en ontwikkelt een efficiënte design-to-code workflow op maat van het webontwikkelbedrijf Dynamate. Binnen deze context vormt de vertaling van Figma-designs naar herbruikbare, semantische front-end code een terugkerende uitdaging. Bestaande tools zoals Anima, Locofy en Builder.io bieden gedeeltelijke oplossingen, maar schieten tekort op vlak van codekwaliteit, integratie met bestaande stacks en componentherkenning.
Door middel van een vergelijkende studie van tien tools en het ontwikkelen van een hybride oplossing, wordt aangetoond dat een aangepaste workflow — waarin Figma-bestanden gestructureerd worden opgebouwd en automatisch vertaald via AI-gestuurde tooling — de efficiëntie aanzienlijk verhoogt. De uiteindelijke oplossing, gebouwd met TypeScript en geïntegreerd met Cursor en het Model Context Protocol, genereert modulaire, production-ready React-componenten die compatibel zijn met Dynamate’s huidige technologieën zoals Tailwind CSS, Laravel, Shopify en Craft CMS.
Deze studie toont aan dat design-to-code automatisering pas écht rendeert wanneer ze ingebed is in de bestaande ontwikkelpraktijk, ondersteund wordt door duidelijke designrichtlijnen, en de flexibiliteit biedt om componentherkenning en regels aan te passen aan de noden van het team.
 
Voorwoord
Voor u ligt mijn bachelorproef, het resultaat van maanden intensief onderzoek, ontwikkeling en reflectie binnen het domein van design-to-code automatisatie. Dit traject bood niet alleen de kans om technische kennis te verdiepen, maar ook om deze kennis toe te passen in een reële context: die van Dynamate, een vooruitstrevende digitale studio waar innovatie en efficiëntie centraal staan.
Ik wens in het bijzonder Bart Delrue, mijn interne promotor, te bedanken voor zijn heldere begeleiding en constructieve feedback gedurende het volledige traject. Een oprechte dank gaat ook uit naar Brecht Waeghe en het team van Dynamate voor de inspirerende samenwerking, hun technische inzichten en de ruimte die ze boden om dit project mee vorm te geven.
Tot slot wil ik mijn medestudenten, vrienden en familie bedanken voor hun steun, motivatie en feedback tijdens de vele testfases, brainstorms en herschrijvingen. Deze bachelorproef markeert voor mij niet alleen het einde van een academisch traject, maar ook het begin van een professionele reis waarin technologie en creativiteit hand in hand gaan.

 
Inhoud
Codefragmentenlijst	7
Figurenlijst	8
Begrippenlijst	9
Afkortingenlijst	10
Inleiding	11
2. Oplossingsvoorstel	12
2.1 Volledig geautomatiseerde tools	12
2.2 Hybride oplossingen	12
2.3 Maatwerk Framework	12
2.4 Conclusie	13
3. Onderzoeksaanpak en methodologie	13
3.1 Fase 1: Onderzoek en analyse	13
3.2 Fase 2: Richtlijnen en testvoorbereiding	13
3.3 Fase 3: Toolontwikkeling en testing	14
3.4 Fase 4: Validatie en vergelijkende studie	14
3.5 Resultaat	14
4. Conceptuele oplossing	15
4.1 Technische context en beginsituatie	15
4.2 Functionele analyse van de noden	16
4.3 Studie van bestaande oplossingen en Figma template	17
4.4 Evaluatiecriteria en analysemodel	19
4.5 Overzicht van tool testing en analyses	20
4.5.1 Cursor + Figma MCP	20
4.5.2  Anima	21
4.5.3 Locofy	24
4.5.4 Builder.io	26
4.5.5 Bolt.new	29
4.5.6 V0.dev	32
4.5.7 TeleportHQ	35
4.5.8 Framelink	38
4.5.9 DhiWhise	41
4.5.8 Codia	44
4.6 Samenvattende vergelijking van tools	46
4.7 Reflectie op testresultaten en implicaties voor Dynamate	48
4.8 Gekozen oplossing en onderbouwing	49
5. Praktische Uitwerking	50
5.1 Ontwikkeling van de Dynamate Design-to-Code Generator	50
5.1.1 Architectuur en kerncomponenten	50
5.1.2 CLI-interface en interactie	54
5.1.3 Voorbeeld van gegenereerde component	54
5.2 Workflow	56
5.3 Resultaten en Validatie	57
5.4 Voordelen en Beperkingen	57
5.5 Toekomstige Verbeteringen	58
6. Conclusie	59
7. Nawoord	60
8. Literatuurlijst	61
There are no sources in the current document.	61
9. Gebruik van Generatieve AI	62
9. Bijlagen	62

 
Codefragmentenlijst
Codefragment 1: Gegenereerde section component	20
Codefragment 2: Gegenereerde HTML hero-wrapper	22
Codefragment 3: Gegenereerde react herowrapper	22
Codefragment 4: Gegenereerde hero-container	24
Codefragment 5: Gegenereerde HTML herosection	25
Codefragment 6: Gegenereerde react productsection component	27
Codefragment 7: Gegenereerde css van product component	28
Codefragment 8: Gegenereerde product card component	30
Codefragment 9: Gegenereerde section component	32
Codefragment 10: Gegenereerde react herosection component	33
Codefragment 11: Gegenereerde react navigation header component	35
Codefragment 12: Gegenereerde css code voor de navigation header	36
Codefragment 13: Gegenereerde HTML section component	38
Codefragment 14: Gegenereerde react product card component	39
Codefragment 15: Gegenereerde css code voor product item	40
Codefragment 16: Gegenereerde react product list component	42
Codefragment 17: Gegenereerde HTML hero section component	44
Codefragment 18: Gegenereerde react hero section component	45
Codefragment 19: Figma service code	51
Codefragment 20: Code generator code	52
Codefragment 21: Ruleset generator code	53
Codefragment 22: CLI code voorbeeld	54
Codefragment 23: Gegenereerde code voorbeeld	55
Codefragment 24: .ddtcrc.json voorbeeld file	56
Codefragment 25: Voorbeeld commandos voor rulesets te genereren	56
Codefragment 26: Animatie config code	58
Codefragment 27: Template systeem code	58
Codefragment 28: Performance optimalisation code	58
 
Figurenlijst
Figuur 1: Figma component benaming	16
Figuur 2: Figma template pointcarre design	18
Figuur 3: Preview van het gegenereerde resultaat	23
Figuur 4: Preview van gegenereerde resultaat	29
Figuur 5: Preview van gegenereerde resultaat met Bolt.new	31
Figuur 6: Preview van gegenereerde resultaat van V0.dev	34
Figuur 7: Gegenereerde resultaat preview van teleportHQ	37
Figuur 8: Preview van gegenereerde resultaat van DhiWise	43
 
Begrippenlijst
Design-to-code: Proces waarbij visuele ontwerpen automatisch worden omgezet naar programmeercode.
Semantische HTML: HTML die betekenisvolle tags gebruikt om de structuur en inhoud van een webpagina te beschrijven.
Componentherkenning: Het automatisch identificeren van UI-componenten uit een designbestand.
Figma MCP: Multi-user Component Publishing plugin voor Figma, waarmee componenten gedeeld worden binnen teams.
CLI-tool: Command-line interface tool, een programma dat via de terminal gebruikt wordt.
Tailwind CSS: Utility-first CSS framework voor het bouwen van custom designs.
TypeScript: Programmeertaal gebaseerd op JavaScript met statische types.
Ruleset: Set van regels voor het consistent genereren van code uit designcomponenten.
 
Afkortingenlijst
API: Application Programming Interface
CMS: Content Management System
CSS: Cascading Style Sheets
HTML: HyperText Markup Language
IDE: Integrated Development Environment
JSX: JavaScript XML
MCP: Multi-user Component Publishing
REST: Representational State Transfer
SEO: Search Engine Optimization
UI: User Interface
 
Inleiding
Dynamate is een onderneming die zich toelegt op webontwikkeling, e-commerce en performance marketing. Binnen het front-end team wordt gewerkt met een brede waaier aan technologieën, waaronder Shopify, Craft CMS, Laravel en moderne webapplicaties. Voor het ontwerpen van gebruikersinterfaces (UI) maken de designers doorgaans gebruik van Figma.
Een veelvoorkomende uitdaging binnen de organisatie is de variabiliteit in de opbouw van Figma-ontwerpen. Deze verschilt vaak per project of per designer, wat het moeilijk maakt om ontwerpen efficiënt en foutloos om te zetten naar functionele front-end code. Front-end developers besteden hierdoor veel tijd aan het interpreteren en manueel omzetten van design bestanden. Hoewel Dynamate beschikt over een eigen componentenbibliotheek die hergebruik ondersteunt, blijft de vertaalslag naar code arbeidsintensief.
Tools zoals Anima, Locofy en Builder.io trachten dit proces deels te automatiseren via design-to-code oplossingen. In de praktijk blijkt echter dat deze tools onvoldoende aansluiten op de workflow en technische stack van Dynamate. Bovendien houden ze weinig tot geen rekening met belangrijke aspecten zoals herbruikbaarheid, schaalbaarheid en code kwaliteit. Hierdoor blijft er nood aan een aanpak die automatisering combineert met structurele afstemming op de interne werking, componenten en ontwikkelstandaarden van het team.
 
2. Oplossingsvoorstel
Binnen de context van Dynamate vormt de nood aan een geoptimaliseerd design-to-code proces het uitgangspunt voor deze bachelorproef. Er zijn verschillende strategieën om deze uitdaging aan te pakken. Enerzijds zijn er bestaande tools die design bestanden automatisch converteren naar code, anderzijds zijn er hybride methodes die structuur en workflow regels combineren met gedeeltelijke automatisering. 
2.1 Volledig geautomatiseerde tools
Tools zoals Anima [2], Locofy [14] en Builder.io [15] bieden design-to-code oplossingen die beloven Figma-bestanden automatisch om te zetten naar front-end code. Ondanks hun belofte tot snelle conversie, blijkt uit interne bevindingen van Dynamate  dat tools zoals Anima en Locofy frequent code genereren die moeilijk leesbaar, weinig modulair en zelden geschikt is voor hergebruik in grotere projecten [17]. Ook recentere oplossingen zoals Framelink [20] bieden snelle conversie van design naar code, maar vereisen een strakke componentstructuur om tot betrouwbare output te komen.
2.2 Hybride oplossingen
Een hybride aanpak vertrekt van goed gestructureerde Figma-bestanden volgens richtlijnen, gekoppeld aan een automatische conversie tool die werkt op basis van een ruleset en component mapping. Zo een ruleset bepaalt welke design-elementen (zoals knoppen, containers of typografie) op welke manier worden omgezet naar code-componenten, volgens vooraf gedefinieerde conversieregels. Component mapping houdt in dat bestaande Figma-componenten gelinkt worden aan reeds gedefinieerde front-end componenten binnen een UI-bibliotheek, zoals Tailwind, Vuetify of een interne React componentset. 
Uit eerste praktijktests op een dynamische pagina (zie hoofdstuk 5) blijkt dat tools zoals Cursor, V0.dev en Bolt [8][9][11] beter scoren op vlak van componentherkenning en semantische opbouw van de gegenereerde HTML, mits een goed gestructureerd Figma-bestand en duidelijke naming conventies. Deze observatie is gebaseerd op manuele code-inspectie en vergelijking met vooraf opgestelde kwaliteitscriteria (zie 4.4).
2.3 Maatwerk Framework
Een op maat gemaakt framework dat aansluit bij de bestaande stack (zoals Shopify en Craft CMS) en de bestaande componentenbibliotheek. Dit framework integreert richtlijnen in het designproces en voorziet in automatische code generatie met behoud van semantiek, structuur en schaalbaarheid.
 

2.4 Conclusie
Er werd gekozen voor een hybride aanpak omdat die het beste van twee werelden samenbrengt: enerzijds zorgt een heldere structuur in Figma voor uniformiteit en voorspelbaarheid, anderzijds maakt een geautomatiseerde generator het mogelijk om snel en efficiënt herbruikbare code te produceren. Deze aanpak verlaagt de foutgevoeligheid, versnelt het ontwikkelproces en zorgt ervoor dat de gegenereerde output perfect aansluit op de workflow en technische vereisten van de bestaande technische infrastructuur.
3. Onderzoeksaanpak en methodologie
3.1 Fase 1: Onderzoek en analyse
In de eerste fase wordt onderzocht welke bestaande tools er vandaag al beschikbaar zijn voor het automatiseren van het design-to-code proces [13]. Tools zoals Anima, Locofy, Cursor in combinatie met Figma MCP, Builder.io, V0.dev en Bolt werden uitgebreid bekeken, getest en vergeleken. Volgens CodeParrot [1] is een goede semantiek en herbruikbaarheid essentieel voor AI gegenereerde front-end code. Daarnaast wordt de documentatie van de Figma API [21] grondig doorgenomen om te begrijpen hoe ontwerpdata automatisch kan worden uitgelezen. Er wordt ook gezocht naar de meest efficiënte en consistente manier om Figma-bestanden op te bouwen, met een focus op structuur, componentgebruik en naamgevingsconventies. Deze voorbereidende stappen vormen de technische en inhoudelijke basis voor het ontwikkelen van een eigen tool.
3.2 Fase 2: Richtlijnen en testvoorbereiding
In deze fase wordt een concreet document opgesteld met richtlijnen die gebruikt worden om testresultaten te beoordelen. Denk aan criteria zoals structuur, semantiek, herbruikbaarheid en onderhoudbaarheid van de gegenereerde code. Daarnaast wordt een representatief Figma-bestand gekozen als testtemplate. Dit bestand is bewust gekozen omdat het voldoende variatie bevat in lay-out, componentstructuur en interactie, waardoor het een goede benchmark vormt om tools en gegenereerde code met elkaar te vergelijken.
 

3.3 Fase 3: Toolontwikkeling en testing
Op basis van de kennis uit de vorige fasen is een parser gekozen – een stukje software dat automatisch door de structuur van een Figma-bestand "leest", de relevante informatie (zoals componenten, tekst, layoutstructuur, enzovoort) herkent, en deze vertaalt naar code. Deze parser maakt gebruik van de Figma API om ontwerpdata op te halen en zet deze vervolgens om in gestructureerde front-end componenten die klaar zijn voor gebruik in HTML, CSS of JavaScript.. De gegenereerde output wordt geëxporteerd als HTML/CSS/JS via een eenvoudige CLI-tool. Tijdens deze fase worden verschillende frameworks en stylingmethodes overwogen, zoals Tailwind CSS of integratie met de bestaande componentenbibliotheek van Dynamate. De keuze valt uiteindelijk op oplossingen die het best aansloten bij de huidige stack.
Bij elke test worden de resultaten systematisch geëvalueerd op basis van vooraf bepaalde kwaliteitscriteria zoals leesbaarheid, semantiek, onderhoudbaarheid, herbruikbaarheid en integratie binnen het bestaande ecosysteem. Screenshots, gegenereerde codefragmenten en observaties worden nauwkeurig bijgehouden om de vergelijking transparant te maken.
3.4 Fase 4: Validatie en vergelijkende studie
In de laatste fase worden alle resultaten naast elkaar gelegd. De handmatig geschreven code, de output van bestaande tools én de gegenereerde code van het eigen framework worden kritisch vergeleken. Op basis daarvan wordt besloten welke aanpak het beste resultaat levert, en waarom. Er wordt gekeken naar technische prestaties, maar ook naar gebruiksgemak, flexibiliteit en mate van integratie binnen de gebruikte technische infrastructuur.
3.5 Resultaat
Het eindresultaat is een werkend prototype van een design-to-code generator die automatisch front-end componenten genereert vanuit gestructureerde Figma-bestanden. De bijhorende documentatie beschrijft het volledige gebruiksproces, van designrichtlijnen tot code-export. Via user testing met interne designers en developers wordt waardevolle feedback verzameld.
 

4. Conceptuele oplossing
4.1 Technische context en beginsituatie
Dynamate is een digitale studio gespecialiseerd in webontwikkeling, e-commerce en performance marketing. Binnen het front-end team wordt gewerkt met een moderne technologie-stack die onder meer Shopify, Craft CMS en Laravel omvat. Voor het ontwerpen van gebruikersinterfaces (UI) maakt het designteam gebruik van Figma, een populaire collaborative design tool.
Hoewel er intern een componentenbibliotheek bestaat, verloopt het design-to-code proces nog steeds grotendeels manueel. Front-end developers moeten vaak van nul beginnen bij het vertalen van een design naar werkende code. Dit proces is niet per se technisch moeilijk, maar wel zeer tijdsintensief: het namaken van gedetailleerde layouts, structuren en componenten uit een Figma-bestand vereist veel nauwkeurigheid en herhalend werk. Zeker wanneer meerdere pagina’s of views betrokken zijn, loopt de benodigde ontwikkeltijd snel op.
In het begin van elk project is er doorgaans wel overleg tussen designers en developers om de verwachtingen en technische beperkingen af te stemmen. Na deze analysefase volgen beide teams echter een grotendeels gescheiden workflow: de designers werken hun ontwerpen zelfstandig uit in Figma, waarna de developers op basis van dat bestand hun front-end code schrijven. De mate van samenwerking en overleg tijdens het proces varieert per project.
Hoewel tools als Cursor reeds worden gebruikt door developers voor assistentie bij coderen, debuggen en AI-gestuurde hulp, wordt deze tool momenteel nog niet rechtstreeks ingezet voor het omzetten van Figma-ontwerpen. Er is echter wel interesse binnen het team om Cursor te combineren met Figma MCP (Multi-user Component Publishing) [19], zodat een meer gestructureerde en geautomatiseerde vertaling mogelijk wordt tussen design en code.
 

Typische Figma-bestanden bij Dynamate verschillen qua opbouw, afhankelijk van de designer of het project. Er worden wel moderne Figma-features zoals Auto Layout en Variants gebruikt, maar niet consequent of volgens vaste afspraken, zie Figuur 1. Hierdoor ontbreekt het vaak aan uniformiteit in naamgeving, hiërarchie en componentgebruik, wat de interpretatie en omzetting naar code bemoeilijkt of vertraagt. Deze inconsistentie vormt een obstakel voor automatisering en maakt het moeilijker om herbruikbare code componenten correct te genereren. 
 
Figuur 1: Figma component benaming
Door deze uitdagingen is er binnen Dynamate een duidelijke nood aan een aanpak die het designproces structureert en gedeeltelijk automatiseert, zodat ontwikkelaars minder tijd verliezen aan repetitieve omzettingstaken en z-ich kunnen focussen op maatwerk en logica.
4.2 Functionele analyse van de noden
Om een goed gefundeerde keuze te maken voor het opzetten van een design-to-code workflow bij Dynamate, is er een vergelijkende analyse uitgevoerd van tien tools op basis van een set testcases en vooraf gedefinieerde evaluatiecriteria zoals herbruikbaarheid, leesbaarheid en semantiek (zie bijlage 3). Elke tool is getest op dezelfde Figma-template en beoordeeld met een scoringsmodel (zie hoofdstuk 4.4). Het doel van deze studie is om inzicht te krijgen in hun werking, sterktes en beperkingen en hoe goed ze aansluiten bij de technische noden van het team.
De tools werden geëvalueerd op basis van een set testcriteria, geïnspireerd door onderzoek zoals Design2Code [18], die afgestemd zijn op het uiteindelijke doel van deze bachelorproef: het efficiënt en betrouwbaar omzetten van Figma-designs naar front-end code. De belangrijkste beoordelingscriteria waren: Onderzoek van Nikiforova et al. [17] onderstreept het belang van semantische structuur bij automatische codegeneratie.
 

Bij het evalueren van design-to-code tools staan een aantal kernaspecten centraal. Allereerst is de kwaliteit van de gegenereerde code van groot belang: deze moet semantisch correct zijn, helder opgebouwd en eenvoudig herbruikbaar binnen professionele projecten. Componentherkenning speelt ook een cruciale rol, waarbij het essentieel is dat Figma-componenten correct vertaald worden naar bestaande UI-componenten.
Daarnaast is het gebruiksgemak van de tool een belangrijke factor: een intuïtieve interface en een vlotte workflow zorgen voor efficiëntie in het gebruik. De beschikbare exportmogelijkheden worden beoordeeld op hun flexibiliteit en toepasbaarheid binnen verschillende technische omgevingen. Integratie met bestaande systemen zoals Shopify, Craft CMS of Tailwind CSS wordt meegewogen om naadloos gebruik in de huidige stack te garanderen. Tot slot is de leesbaarheid van de outputcode essentieel: duidelijke, onderhoudbare en goed gestructureerde code vergemakkelijkt samenwerking en verdere ontwikkeling.
Binnen Dynamate werd reeds beperkt geëxperimenteerd met de combinatie van Figma MCP en Cursor. Deze tools werden toegepast op een live project, namelijk de herwerking van de website van FitnessKing. Hoewel de testomvang relatief beperkt was, leverde de integratie van MCP-component publishing in combinatie met Cursor bijzonder positieve resultaten op. De componentstructuur in Figma kon vlot overgenomen worden, en Cursor bood een AI-ondersteunde omgeving waarin developers snel semantische en correcte code konden genereren op basis van deze structuur.
Daarnaast werd in samenwerking met een klant onder NDA ook Bolt.new ingezet om prototypes te genereren. Deze tool bleek vooral sterk in snelheid en flexibiliteit, en bood een intuïtieve interface om snel van design naar componentcode te schakelen.
In eigen vrije tijd werden verder nog experimenten uitgevoerd met V0.dev, waarbij kleine projecten zoals een persoonlijk portfolio werden opgezet. V0 leverde verrassend consistente en schone code op, met goede ondersteuning voor Tailwind CSS. Het beperkte niveau van configuratie is echter zowel een sterkte als een beperking, afhankelijk van het projecttype.
Uit de voorlopige interne Dynamate evaluatie is reeds duidelijk dat de combinatie Cursor + Figma MCP op dit moment het meeste potentieel biedt voor de context van Dynamate. Vooral de flexibiliteit, componentherkenning en integratie met bestaande tools sprongen daarbij in het oog. Tools zoals Bolt en V0.dev komen als goede alternatieven of aanvullingen naar voren, met een sterke focus op gebruiksvriendelijkheid en moderne stackondersteuning.
4.3 Studie van bestaande oplossingen en Figma template
Om de verschillende AI design-to-code tools objectief en consistent te kunnen testen, werd gekozen voor het gebruik van een bestaande Figma-template, met name een pagina van het Point Carré-project. Deze template werd geselecteerd omwille van zijn representativiteit en realistische complexiteit. Ze bevat zowel visuele als structurele elementen die vaak voorkomen in professionele webprojecten bij Dynamate, zoals call-to-actions, tekst- en beeldcombinaties, lay-outstructuren en componentherhaling.
 

De gekozen pagina bevat voldoende visuele hiërarchie, typografie, ruimtelijke opbouw en interactieve elementen om de sterke en zwakke punten van design-to-code tools bloot te leggen. Dit maakt het een ideaal testcase-bestand om verschillende tools op een eerlijke manier met elkaar te vergelijken.
Daarnaast biedt deze template, zie Figuur 2, een goede afspiegeling van typische design-opdrachten binnen Dynamate, wat de praktijkrelevantie van de evaluatie verhoogt. Tools worden hiermee niet getest op theoretische of simplistische input, maar op een realistisch ontwerp dat daadwerkelijk vertaald zou moeten worden naar onderhoudbare, schaalbare front-end code.
 
Figuur 2: Figma template pointcarre design

 

4.4 Evaluatiecriteria en analysemodel

Om de verschillende design-to-code tools op een objectieve en consistente manier te evalueren, is een analysemodel ontwikkeld dat zich baseert op zeven kerncriteria. Deze criteria zijn zorgvuldig gekozen om zowel de technische kwaliteit van de gegenereerde code als de bruikbaarheid van de tools in kaart te brengen. Ze weerspiegelen de specifieke noden van het ontwikkelteam van Dynamate en zijn afgestemd op gangbare best practices binnen de front-end ontwikkeling.

Een eerste belangrijk criterium is semantiek. Daarbij wordt onderzocht of de gegenereerde HTML correct is opgebouwd, bijvoorbeeld door het gebruik van de juiste tags zoals voor interactieve elementen in plaats van generieke of -elementen. Daarnaast wordt de herbruikbaarheid beoordeeld: hoe eenvoudig kunnen componenten in andere projecten of binnen een bestaande bibliotheek opnieuw worden ingezet, rekening houdend met modulariteit en onafhankelijkheid?

Ook leesbaarheid speelt een essentiële rol. Duidelijk geschreven en logisch opgebouwde code maakt samenwerking, debugging en verdere ontwikkeling een stuk eenvoudiger. Verder wordt de structurele opbouw van de code geëvalueerd. Hierbij is het belangrijk dat de visuele hiërarchie van het design op een logische manier vertaald wordt naar een overzichtelijke DOM-structuur.

De mate waarin de output integreert met bestaande systemen zoals Tailwind CSS, Nuxt of Laravel is een ander beoordelingspunt. Hierbij wordt gelet op het gebruik van utility classes of componentstandaarden. Bovendien wordt ook het gebruiksgemak van de tool onder de loep genomen: hoe vlot en intuïtief is de gebruikerservaring, van import tot export?

Tot slot wordt er gekeken naar de exportmogelijkheden van de tool. Ondersteunt deze meerdere formaten zoals HTML, CSS, JavaScript, React of Vue? Een brede exportondersteuning vergroot de inzetbaarheid in diverse ontwikkelcontexten.

Elke tool wordt kwalitatief geëvalueerd aan de hand van bovenstaande criteria. Daarbij wordt per aspect beschreven hoe de tool presteert, met nadruk op concrete observaties en relevante voor- en nadelen. Indien van toepassing worden bijkomende opmerkingen of specifieke problemen genoteerd om de analyse verder te onderbouwen.
 

4.5 Overzicht van tool testing en analyses
4.5.1 Cursor + Figma MCP

Voor de evaluatie van Cursor in combinatie met Figma MCP wordt een ontwikkelomgeving opgezet met de nieuwste versie van Cursor IDE. De Figma MCP-plugin wordt via GitHub opgezet, lokaal gestart via de terminal en geconfigureerd binnen de instellingen van de Cursor-interface. Vervolgens wordt een API-verbinding opgezet met het Figma-account van Dynamate. Het Point Carré-design wordt geïmporteerd als een gestructureerd Figma-bestand, opgebouwd uit duidelijk benoemde componenten en een hiërarchische laagstructuur. De workspace is geconfigureerd voor React-ontwikkeling met ondersteuning voor Tailwind CSS.

De combinatie Cursor + MCP vertoont tijdens de tests opvallend goede resultaten, zie Codefragment 1, met name voor ontwikkelteams die werken met componentgebaseerde systemen. De tool herkent componentstructuren accuraat en genereert semantisch correcte HTML en een heldere, modulaire DOM-opbouw.


 
Codefragment 1: Gegenereerde section component
 


De gegenereerde componenten zijn consequent opgebouwd met zorgvuldig toegepaste Tailwind utility classes. Herbruikbaarheid blijkt sterk door een duidelijke scheiding van elementen en uitbreidbaarheid via props en parameters.

Sterke punten worden duidelijk zichtbaar: de tool levert semantisch correcte HTML- en JSX-structuren op die bijdragen aan betere toegankelijkheid en onderhoudbaarheid. De integratie met Tailwind CSS en React verloopt intelligent, waardoor de componenten onmiddellijk inzetbaar zijn binnen Dynamate’s technische stack. Dankzij een modulaire opbouw zijn de componenten eenvoudig te hergebruiken en uit te breiden. Bovendien is de ondersteuning voor moderne technologieën zoals React en Tailwind goed uitgewerkt.

Er zijn ook enkele aandachtspunten. De leercurve van Cursor is relatief steil, vooral voor wie nog niet vertrouwd is met de interface of met het werken volgens de conventies van Figma MCP. Daarnaast is het eindresultaat sterk afhankelijk van de kwaliteit van het Figma-bestand. Een consistente naamgeving en duidelijke hiërarchie zijn cruciaal voor een goede interpretatie door de tool.

Uit deze analyse blijkt dat Cursor + Figma MCP sterke prestaties levert op het vlak van semantiek, structuur en technische integratie. De gegenereerde code is gestructureerd, goed leesbaar en sluit nauw aan bij Dynamate’s front-end stack. Het succes van de output hangt nauw samen met de kwaliteit en voorbereiding van het designbestand. Mits een goed opgebouwde Figma-structuur vormt deze combinatie een waardevolle schakel in een geoptimaliseerde design-to-code workflow.

4.5.2  Anima

V Voor de evaluatie van Anima wordt een account aangemaakt op het platform en wordt de officiële plugin geïnstalleerd via de Figma Community. Het Point Carré-design wordt rechtstreeks vanuit Figma geïmporteerd met behulp van Anima’s plugininterface. De tool biedt directe exportmogelijkheden naar React, Vue en HTML/CSS, met configuratieopties voor stylingmethodes zoals CSS Modules.

De gegenereerde code van Anima blijkt visueel overeen te stemmen met het originele ontwerp. Echter, inhoudelijk vertoont de output structurele zwaktes. De tool maakt frequent gebruik van generieke <div>-structuren in plaats van semantisch gepaste elementen zoals <header>, <section> of <button>, zie Codefragment 2, wat de toegankelijkheid en leesbaarheid bemoeilijkt.
 


Voorbeeld van gegenereerde HTML:
 
Codefragment 2: Gegenereerde HTML hero-wrapper

Voorbeeld van gegenereerde React-component:
 

De componentstructuur is eenvoudig, zie Codefragment 3, maar vertoont te weinig modulariteit om vlot hergebruik mogelijk te maken. Props of parameters worden nauwelijks toegepast, waardoor componenten moeilijk in andere contexten inzetbaar zijn.

 
Figuur 3: Preview van het gegenereerde resultaat

Wat Anima aantrekkelijk maakt, is de intuïtieve interface. De installatie verloopt snel en gebruikers kunnen zonder technische voorkennis designs exporteren naar functionele code. Dit maakt de tool bijzonder geschikt voor snelle prototypes of proof-of-concepts.

De gegenereerde code voldoet visueel aan de verwachtingen, zie Figuur 3, maar laat inhoudelijk te wensen over qua semantiek en herbruikbaarheid. De overmatige aanwezigheid van inline styles en gebrek aan structuur belemmert onderhoudbaarheid en integratie in bestaande codebases. De exportmogelijkheden zijn daarentegen breed en goed geïntegreerd in de toolinterface.

Deze analyse toont aan dat Anima vooral bruikbaar is voor niet-complexe toepassingen waarbij snelheid primeert boven codekwaliteit. Voor gebruik binnen Dynamate’s productieomgeving blijkt de output onvoldoende afgestemd op de technische eisen van schaalbaarheid en modulariteit.
 


4.5.3 Locofy

Voor deze evaluatie wordt een account aangemaakt op het Locofy-platform, gevolgd door de installatie van de Figma-plugin. Het Point Carré-design wordt via directe integratie geïmporteerd, met aandacht voor het correct taggen van componenten zoals aanbevolen door Locofy. Daarna wordt een Next.js-project opgezet, inclusief Tailwind CSS, om de gegenereerde componenten lokaal te testen en te integreren.
 
Locofy onderscheidt zich in het design-to-code landschap door sterke ondersteuning voor React en Next.js. Tijdens de testfase blijkt Locofy Figma-componenten correct te herkennen en om te zetten naar gestructureerde code. De gegenereerde HTML maakt gebruik van correcte semantische tags zoals ,  en , wat bijdraagt aan toegankelijkheid en zoekmachineoptimalisatie.

De gegenereerde HTML voor een hero-sectie toont een logische en toegankelijke structuur, zie Codefragment 4:
 


De bijbehorende React-component gebruikt CSS Modules, zie Codefragment 5, voor stijlafbakening en herbruikbaarheid:
 
 

De styling via CSS Modules sluit goed aan bij componentgebaseerde architecturen en draagt bij aan onderhoudbaarheid. Daarnaast wordt Tailwind CSS ondersteund voor wie liever met utility-first styling werkt.

De gebruikersinterface van Locofy is overzichtelijk en intuïtief. De live preview toont de gegenereerde componenten, waardoor snel visuele controle mogelijk is. De tool ondersteunt bovendien instellingen voor data binding, componentvarianten en interactieve states, die rechtstreeks vanuit Figma configureerbaar zijn.

Deze analyse toont aan dat Locofy sterk presteert op vlak van semantiek, componentherkenning en codekwaliteit. De structuur van zowel HTML als React-componenten is logisch en geschikt voor professionele projecten. Een aandachtspunt blijft de afhankelijkheid van een goed gestructureerd Figma-bestand. Wanneer de naming conventies of componenthiërarchie in het design onduidelijk zijn, daalt de kwaliteit van de output merkbaar.
 


Locofy toont sterke punten zoals het correct toepassen van semantische HTML-tags, wat duidelijk zichtbaar is in het gebruik van elementen zoals ,  en . Deze aanpak ondersteunt niet alleen toegankelijkheid maar ook SEO. De gebruikersinterface is intuïtief en biedt een live preview, wat helpt bij directe evaluatie van de gegenereerde componenten. Bovendien sluit de tool goed aan op Next.js-projecten dankzij de integratie met CSS Modules en optionele Tailwind CSS-ondersteuning. Interactieve elementen zoals knoppen kunnen eenvoudig geconfigureerd worden, wat de bruikbaarheid in dynamische toepassingen versterkt.

Tegelijkertijd toont de analyse aan dat de kwaliteit van de gegenereerde code in sterke mate afhankelijk is van een zorgvuldig en consistent opgebouwd Figma-bestand. Reeds kleine fouten in de benaming of hiërarchische opbouw van componenten leiden tot merkbare degradatie in de outputkwaliteit. Bovendien blijkt Locofy zeer beperkt inzetbaar buiten het React/Next.js-ecosysteem. Ondersteuning voor andere frameworks ontbreekt vrijwel volledig, waardoor de tool minder relevant is voor teams die met alternatieve technologieën werken.

4.5.4 Builder.io

Builder.io wordt geëvalueerd door een account aan te maken op het platform en de Figma-plugin te installeren. Via de visuele editor kunnen Figma-designs rechtstreeks worden geïmporteerd, waarbij componenten automatisch worden herkend en gekoppeld aan visuele bouwblokken. Voor deze analyse wordt gewerkt met het Point Carré-template, om na te gaan hoe goed Builder.io complexe UI-structuren omzet in herbruikbare, semantisch correcte front-endcomponenten.
 


De export wordt ingesteld op React-output, met integratie naar een headless CMS. De gegenereerde code toont zich over het algemeen gestructureerd en goed georganiseerd, met ondersteuning voor design tokens en modulaire styling via CSS Modules. Een voorbeeld van een gegenereerde component maakt gebruik van framer-motion voor animaties, zie Codefragment 6:


De gegenereerde CSS maakt gebruik van design tokens, zie Codefragment 7:


Sterke punten van Builder.io liggen in de intuïtieve visuele editor en brede exportmogelijkheden, waaronder React, Vue en HTML. De mogelijkheid tot CMS-integratie maakt de tool vooral interessant voor contentgedreven toepassingen. De interface laat snelle onboarding toe zonder complexe setup.

Toch zijn er duidelijke beperkingen. De gegenereerde code bevat regelmatig inline stijlen, wat afbreuk doet aan onderhoudbaarheid en consistentie. Daarnaast is er een sterke afhankelijkheid van het eigen ecosysteem, waardoor bestaande componenten uit Dynamate’s bibliotheek niet eenvoudig te integreren zijn zonder extra scripting of aangepaste koppelingen.

De analyse maakt duidelijk dat Builder.io veel flexibiliteit biedt in visueel ingestelde workflows en bij het opzetten van contentgerichte websites, zie Figuur 4: Preview van gegenereerde resultaat. Tegelijkertijd vormt de beperkte externe integratie een drempel voor productieve inzet binnen projecten met hoge eisen op vlak van schaalbaarheid en technische aansluiting op bestaande infrastructuren.

 
Figuur 4: Preview van gegenereerde resultaat

4.5.5 Bolt.new

Bolt.new profileert zich als een snelle en moderne design-to-code tool die gericht is op ontwikkelaars die gebruikmaken van een Tailwind-gebaseerde stack. Tijdens de test wordt de Point Carré-template gebruikt als referentieontwerp, dat eerst wordt geëxporteerd als afbeeldingsfragmenten en vervolgens geüpload in de Bolt.new webinterface. De gegenereerde output wordt geëvalueerd in een lokale ontwikkelomgeving geconfigureerd voor React en Tailwind CSS.

De gegenereerde code valt onmiddellijk op door zijn netheid, leesbaarheid en consistente toepassing van utility-first Tailwind classes. De componenten worden opgezet met duidelijke semantische structuren en zijn goed gescheiden in presentatie- en logicalagen. Een voorbeeld van de gegenereerde React-component toont een productkaart die gebruikmaakt van framer-motion voor animatie, een geïsoleerde afbeeldingcomponent en een herbruikbare knop, zie Codefragment 8:



De interface van Bolt.new is strak en minimalistisch opgezet. Er wordt direct feedback gegeven bij het aanpassen van componentstructuren. Ook de preview-tools zijn krachtig en tonen real-time hoe de gegenereerde code zich verhoudt tot het design, zie Figuur 5. 

 
Figuur 5: Preview van gegenereerde resultaat met Bolt.new

Bolt.new blinkt uit in het genereren van bijzonder schone en gestructureerde Tailwind-code. De gegenereerde componenten zijn helder opgebouwd, maken gebruik van semantische HTML-elementen en sluiten uitstekend aan op de conventies van moderne front-end ontwikkeling. Er is goede ondersteuning voorzien voor componentherbruikbaarheid dankzij de modulaire structuur en integratie van utility-classes.

De gebruikersinterface is intuïtief en snel, waardoor het eenvoudig is om aanpassingen door te voeren en real-time previews te raadplegen. De tool ondersteunt integratie met moderne frameworks zoals React en maakt gebruik van geavanceerde technieken zoals framer-motion om dynamiek in de UI te brengen.

Toch zijn er enkele beperkingen. Hoewel recente updates wijzen op een beginnende integratie met Figma, blijft deze momenteel nog beperkt in functionaliteit en gebruiksgemak. Ontwerpen vereisen vaak nog manuele voorbereiding of tussenstappen voor import. Daarnaast is de ondersteuning voor andere frameworks dan React nog steeds in een vroeg stadium. Voor projecten die niet binnen een Tailwind-gebaseerde stack vallen, biedt Bolt.new momenteel weinig toegevoegde waarde, aangezien de gegenereerde structuur nauw verweven is met de utility-first aanpak van Tailwind.
 


De analyse toont aan dat Bolt.new bijzonder goed scoort voor ontwikkelaars die werken binnen een Tailwind- en React-omgeving. De gegenereerde code is direct bruikbaar, onderhoudbaar en sluit goed aan bij moderne ontwikkelpraktijken. De tool biedt een vlotte workflow, maar mist ondersteuning voor bredere design-integraties of complexere logica. Deze beperkingen maken Bolt minder geschikt voor fullstack-applicaties of bestaande componentarchitecturen buiten Tailwind.

4.5.6 V0.dev

 V0.dev, ontwikkeld door Vercel, profileert zich als een minimalistische en ontwikkelaargerichte design-to-code tool. In plaats van een visuele interface of drag-and-drop editor, werkt deze tool via een eenvoudige prompt-gebaseerde webinterface. De focus ligt volledig op het genereren van semantisch correcte en Tailwind CSS-gebaseerde React-componenten.

Tijdens de test wordt gebruikgemaakt van de Point Carré-template, waarbij de link van de gewenste sectie uit Figma wordt gekopieerd en ingevoerd via de ingebouwde Figma-importfunctionaliteit van V0.dev. De gegenereerde output wordt geëvalueerd binnen een lokale Next.js-omgeving met Tailwind CSS-configuratie. Er is geen plugin of lokale installatie vereist, wat zorgt voor een snelle setup.

De gegenereerde HTML is opmerkelijk goed gestructureerd. Een typische hero-sectie maakt correct gebruik van semantische tags zoals section, a, h1 en p sluit nauw aan bij toegankelijke en SEO-vriendelijke markup, zie Codefragment 9:

De gegenereerde React-component maakt gebruik van props en is duidelijk gestructureerd, zie Codefragment 10, wat hergebruik bevordert:

De gebruikersinterface van V0.dev is uiterst eenvoudig. De gebruiker voert een tekstprompt of beschrijving in, waarna de tool componenten genereert, zie Figuur 6. Dit resulteert in een snelle, gefocuste workflow zonder visuele afleiding. 

 
Figuur 6: Preview van gegenereerde resultaat van V0.dev

Sterke punten van V0.dev zijn onder andere de hoge kwaliteit van de gegenereerde code, het gebruik van semantische HTML, en de uitstekende integratie met Tailwind CSS. De componenten zijn schoon gestructureerd, goed leesbaar en direct inzetbaar in productieomgevingen. De tool vereist geen setup in Figma of een complexe configuratie, wat het aantrekkelijk maakt voor snelle implementatie.

Tegelijkertijd zijn er ook duidelijke beperkingen. Functionaliteiten zoals interactiviteit of complexere state management worden niet ondersteund. Bovendien raakt de AI-engine merkbaar in de war wanneer het designbestand te complex is opgebouwd, wat leidt tot foutieve interpretaties of onvolledige componentgeneratie. De gegenereerde componenten zijn voornamelijk bruikbaar voor standaard lay-outs en relatief eenvoudige UI-patronen. 

Deze analyse maakt duidelijk dat V0.dev bijzonder waardevol is voor ontwikkelaars die werken binnen een Tailwind-gebaseerde React-stack en op zoek zijn naar consistente, semantisch correcte componenten. De tool levert robuuste output met minimale input. Tegelijkertijd is de flexibiliteit beperkt en ontbreekt ondersteuning voor complexere workflows, interactiviteit en andere frameworks. Wanneer het designbestand te complex wordt, raakt de AI-engine bovendien in de war, wat leidt tot onnauwkeurige interpretaties of onvolledige componentgeneratie. Deze beperkingen maken V0.dev minder geschikt voor complexe of dynamische toepassingen.
 


4.5.7 TeleportHQ

TeleportHQ positioneert zich als een alles-in-één platform voor het genereren van front-end code vanuit visuele ontwerpen. In tegenstelling tot tools die zich uitsluitend richten op export of conversie, biedt TeleportHQ een geïntegreerde ontwikkelomgeving waarin zowel visueel als codegericht gewerkt kan worden.

Voor de test wordt een account aangemaakt op het TeleportHQ-platform. De Point Carré-template wordt handmatig gereconstrueerd binnen de visuele editor, aangezien er op het moment van testen geen directe Figma-integratie beschikbaar is. De interface toont een split-view met links het visuele ontwerp en rechts de gegenereerde code. 

TeleportHQ genereert gestructureerde HTML en React-code met een degelijke semantische opbouw. Voor eenvoudige lay-outs blijkt de output correct opgebouwd, met logische hiërarchie en HTML5-tags. Voor complexere structuren zoals overlappende secties of nested grids ontstaan echter interpretatieproblemen. In dergelijke gevallen worden delen van het design niet correct weergegeven of vraagt het resultaat om manuele aanpassingen.

Een voorbeeldcomponent van een navigatieheader laat zien hoe TeleportHQ met React en CSS Modules werkt, zie Codefragment 11:

 
Codefragment 11: Gegenereerde react navigation header component

Bijhorende CSS Modules zorgen voor gescheiden stijlen en betere onderhoudbaarheid, zie Codefragment 12:

 
Codefragment 12: Gegenereerde css code voor de navigation header

De gegenereerde componenten volgen een logische structuur en maken gebruik van semantiek en modulaire CSS. Toch komt bij meer complexe layoutstructuren naar voren dat TeleportHQ soms moeite heeft met correcte interpretatie van hiërarchieën, wat leidt tot foutieve of incomplete HTML-structuren.

Sterke punten van TeleportHQ zijn de visuele split-view editor, de ondersteuning voor meerdere exportformaten (zoals React en Vue), en het gebruik van CSS Modules voor styling. De gebruikersinterface biedt een overzichtelijke ervaring waarbij ontwerp en code simultaan geëvalueerd kunnen worden. 

 
Figuur 7: Gegenereerde resultaat preview van teleportHQ

Tegelijkertijd zijn er ook duidelijke beperkingen. De afwezigheid van een directe Figma-integratie maakt het proces omslachtiger. De tool vereist handmatige reconstructie van het ontwerp binnen TeleportHQ zelf, wat tijdrovend is en foutgevoelig kan zijn. Ook blijkt dat het systeem beperkt is in het correct interpreteren van complexe layouts zoals gridsystemen of overlappingen, zie Figuur 7.

Deze analyse toont aan dat TeleportHQ een robuuste oplossing biedt voor gestructureerde componentontwikkeling binnen een visueel gestuurde omgeving. De tool is vooral geschikt voor eenvoudige tot middelcomplexe UI's en voor gebruikers die baat hebben bij simultane visuele en codeweergave. Voor dynamischere toepassingen of automatische Figma-integratie blijkt TeleportHQ minder geschikt, mede door de nood aan manuele input en beperkte hiërarchische interpretatie.
 


4.5.8 Framelink

Framelink positioneert zich als een opkomende speler in het design-to-code landschap en onderscheidt zich door een sterke focus op semantische en gestructureerde codegeneratie. De tool vereist dat Figma-designs strikt worden opgebouwd volgens specifieke conventies. Tijdens de evaluatie wordt het Point Carré-template grondig voorbereid met correcte componenthiërarchie en duidelijke naamgeving, zoals aanbevolen door Framelink. Dankzij deze voorbereiding wordt de volledige structuur zonder fouten geïmporteerd en correct geïnterpreteerd.

Een van de belangrijkste kenmerken van Framelink is de consistente vertaling van visuele hiërarchie naar semantische HTML. De gegenereerde HTML maakt gebruik van gepaste HTML5-elementen en toegankelijke attributen. In onderstaande voorbeeldcomponent wordt dit duidelijk, zie Codefragment 13:

 
Codefragment 13: Gegenereerde HTML section component

De corresponderende React-component maakt gebruik van Framer Motion voor animaties en splitst logica en presentatie op in afzonderlijke componenten, zie Codefragment 14:

 
Codefragment 14: Gegenereerde react product card component
 
De CSS Modules die Framelink genereert zijn gericht op onderhoudbaarheid en performance, zie Codefragment 15:

 
Codefragment 15: Gegenereerde css code voor product item

De interface van Framelink biedt live previews en component-hiërarchieoverzicht, wat realtime controle mogelijk maakt over gegenereerde output.

Framelink toont zich bijzonder sterk in het genereren van semantisch correcte en technisch goed gestructureerde HTML. Door zijn strikte interpretatie van hiërarchie en naamgevingsconventies uit Figma, resulteert het gebruik in een output die goed aansluit bij professionele ontwikkelstandaarden. Dankzij ondersteuning voor CSS Modules en Framer Motion ontstaan er schaalbare, geanimeerde componenten die zich moeiteloos integreren in moderne front-end omgevingen.

De nauwkeurigheid van componentherkenning vormt een belangrijk voordeel, net als de consistente DOM-structuur en heldere scheiding tussen logica en presentatie. Dit maakt Framelink bijzonder geschikt voor complexe applicaties waar onderhoudbaarheid en schaalbaarheid centraal staan.

Daartegenover staat dat de tool weinig marge laat voor improvisatie of ongestructureerde input. Figma-bestanden moeten strikt opgezet zijn, anders leidt dit tot fouten of onvolledige interpretatie. Daarnaast is Framelink minder geschikt voor snelle iteraties of prototypes, vanwege het gebrek aan flexibiliteit en de nog in ontwikkeling zijnde interface en documentatie.

Deze analyse toont aan dat Framelink zeer geschikt is voor situaties waarin controle, structuur en consistentie essentieel zijn. De gegenereerde output voldoet aan professionele standaarden, mits het invoerbestand perfect gestructureerd is. De tool biedt daarmee veel potentieel voor grootschalige of kritische UI-implementaties waarbij semantiek en onderhoudbaarheid prioriteit krijgen.

4.5.9 DhiWhise

DhiWise presenteert zich als een geavanceerd platform dat design-to-code combineert met backend-integratie en logica-afhandeling. Tijdens de evaluatie wordt het Point Carré-template geïmporteerd in DhiWise via de officiële Figma-plugin. Hierbij wordt strikt rekening gehouden met hun conventies voor componentstructuur en naamgeving. De tool vraagt een grondige voorbereiding in Figma, maar levert vervolgens een breed scala aan gegenereerde componenten en functionaliteiten.

Een belangrijk kenmerk van DhiWise is de holistische aanpak. In tegenstelling tot andere tools beperkt DhiWise zich niet tot het genereren van statische componenten, maar verwerkt ook interacties, API-koppelingen, state management en routering. De gegenereerde code volgt duidelijke scheidingen tussen logica, presentatielaag en data-afhandeling, wat bijdraagt aan onderhoudbaarheid.

Een voorbeeld van een gegenereerde React-component laat zien hoe zowel visuele als logische elementen automatisch worden opgezet:

 
Codefragment 16: Gegenereerde react product list component

De gegenereerde code bevat ondersteuning voor TypeScript, API-integratie, en UI-state, zie Codefragment 16. In combinatie met CSS Modules en duidelijke structuur, voldoet de output aan moderne webstandaarden, zie Figuur 9. Daarnaast biedt DhiWise automatische gegenereerde helperfuncties en een API-layer die aansluit op REST- of GraphQL-backends.
 


Een ander sterk punt is de integratie van role-based toegangscontrole, authenticatie flows en routering. Voor grotere projecten waarin meerdere gebruikersrollen en API-endpoints een rol spelen, biedt dit een duidelijke meerwaarde.

 
Figuur 8: Preview van gegenereerde resultaat van DhiWise

DhiWise blinkt uit door zijn automatische backend-integratie, inclusief ondersteuning voor API-koppelingen, state management, routering en authenticatie. De gegenereerde code is helder gestructureerd en maakt een duidelijke scheiding tussen logica, presentatie en data, wat de onderhoudbaarheid ten goede komt. Daarnaast ondersteunt de tool moderne technologieën zoals TypeScript, REST, GraphQL en CSS Modules.

Tegelijkertijd brengt het werken met DhiWise enkele uitdagingen met zich mee. De leercurve is relatief steil, voornamelijk door de complexiteit van de interface en de vereiste workflow. Het platform stelt hoge eisen aan de structuur en naamgeving van het Figma-bestand, wat strikte voorbereiding vereist. Bovendien is de tool minder geschikt voor snelle prototyping of het iteratief ontwikkelen van kleinere projecten, waar eenvoud en flexibiliteit belangrijker zijn dan volledigheid en automatisering.
 


Deze analyse maakt duidelijk dat DhiWise vooral waardevol is in contexten waar complexe logica, API-integraties en schaalbare componentstructuren vereist zijn. De tool biedt een indrukwekkend aantal functies en genereert kwalitatieve, gestructureerde code. Tegelijkertijd vraagt het platform een aanzienlijke investering in onboarding en documentatie. Dit maakt DhiWise vooral relevant voor grotere, professioneel ingerichte projecten waarin automatisering van de volledige frontend-backend flow gewenst is.


4.5.8 Codia

Codia is een opkomende design-to-code tool die sterk inzet op kunstmatige intelligentie voor het analyseren en interpreteren van design-afbeeldingen. In tegenstelling tot tools met directe Figma-integratie, vereist Codia dat ontwerpen geüpload worden als high-resolution afbeeldingen. Vervolgens genereert de AI-engine op basis van beeldherkenning HTML- en React-componenten. Voor de test wordt de Point Carré-template omgezet naar een afbeelding en ingevoerd in het platform.

De gegenereerde HTML toont een verrassend correcte semantiek. In eenvoudige secties gebruikt Codia structurele elementen zoals , ,  en , wat positief bijdraagt aan toegankelijkheid en SEO. Toch ontstaan er fouten in complexere layoutstructuren, zoals gridcombinaties of overlappende secties, waarbij elementen soms verkeerd geïnterpreteerd worden of onlogisch genest zijn.

Voorbeeld van de gegenereerde HTML-structuur, zie Codefragment 17:
 
Codefragment 17: Gegenereerde HTML hero section component

Codia ondersteunt export naar React, Vue en standaard HTML/CSS. In React-projecten genereert de tool componenten met props, CSS Modules en soms zelfs ingebouwde logica voor interacties. Dit toont zich bijvoorbeeld in een gegenereerde component, zie Codefragment 18:

 
Codefragment 18: Gegenereerde react hero section component

Wat Codia uniek maakt is de inzet van AI om designpatronen te herkennen en daaruit semantisch correcte code te genereren. Daarbij worden ook accessibility-attributen zoals aria-labels automatisch toegevoegd. Tegelijkertijd toont de tool zijn beperkingen zodra het designcomplexiteit toeneemt. Wanneer elementen zich overlappen of geen duidelijke grenzen hebben, kan de AI in de war raken, wat resulteert in foutieve interpretaties of slordige hiërarchieën.

De gebruikersinterface van Codia is overzichtelijk en modern. Tijdens het testen valt op dat de gegenereerde code realtime bekeken kan worden in een preview-paneel. Toch blijft de output soms inconsistent, waardoor het noodzakelijk is om de gegenereerde structuur grondig na te kijken en bij te werken.
 


Codia toont zich in eenvoudige componenten verrassend accuraat in het toepassen van correcte semantiek. De tool ondersteunt meerdere exportformaten, waaronder React, Styled Components, Vue en klassieke HTML/CSS. Verder worden accessibility-kenmerken zoals aria-labels automatisch toegevoegd, wat bijdraagt aan betere toegankelijkheid. De gebruikersinterface is modern en biedt een realtime preview, wat het evaluatieproces van gegenereerde code vergemakkelijkt.

Tegelijkertijd blijkt uit de test dat de tool beperkt betrouwbaar is bij complexe layoutstructuren. De afwezigheid van directe Figma-integratie maakt de workflow omslachtiger en vereist dat designs eerst als afbeeldingen worden geüpload. Zodra het design overlappende componenten of ambiguïteit bevat, raakt de AI soms in de war, wat leidt tot inconsistente of incorrecte interpretaties. Dit dwingt ontwikkelaars om de output grondig manueel te controleren en bij te sturen. Daarnaast is de controle over layout fine-tuning relatief beperkt, wat de toepasbaarheid in nauwkeurig gedesignde projecten kan hinderen.

Uit deze analyse blijkt dat Codia een veelbelovende AI-gebaseerde oplossing biedt voor het genereren van gestructureerde HTML en React-componenten. De tool presteert sterk in standaarddesigns en eenvoudige componenten, maar vertoont beperkingen zodra ontwerpen complexer of minder gestructureerd worden. Hierdoor is extra controle en nabewerking nodig om tot bruikbare productiecode te komen. Desondanks toont Codia het potentieel van AI als ondersteunende factor in design-to-code workflows.

4.6 Samenvattende vergelijking van tools

Na het analyseren van de verschillende design-to-code tools in hoofdstuk 4.5, worden in dit hoofdstuk de bevindingen per tool samengebracht in een overzichtelijke samenvatting. Hierbij wordt stilgestaan bij de prestaties op vlak van semantiek, herbruikbaarheid, leesbaarheid, structuur, integratie, gebruiksgemak en exportmogelijkheden. Dit overzicht biedt inzicht in de specifieke sterktes en zwaktes van elke tool, rekening houdend met de noden en technische context van Dynamate.

Cursor + Figma MCP toont zich als een technisch krachtige combinatie met uitstekende componentherkenning en semantisch correcte output. De gegenereerde code is modulair, leesbaar en goed integreerbaar in bestaande frameworks zoals React en Tailwind. De tool vereist een nauwkeurige opbouw in Figma en een zekere leercurve, maar levert kwalitatief hoge code op.

Anima scoort hoog op toegankelijkheid en snelheid, maar genereert veel generieke HTML-structuren met inline stijlen. Dit beperkt de semantische waarde en herbruikbaarheid van de code. Het is geschikt voor snelle prototypes, maar minder bruikbaar in productieomgevingen die schaalbaarheid vereisen.
Locofy levert semantisch correcte, modulaire code mits een goed gestructureerde Figma-opbouw. De integratie met Tailwind CSS en ondersteuning voor moderne frameworks zoals Next.js maakt het een sterke speler. De setup en tagging vereisen echter meer voorbereiding.

Builder.io biedt een visuele editor en flexibele CMS-integratie, met brede exportmogelijkheden. Hoewel de gegenereerde code netjes georganiseerd is, blijven inline stijlen en afhankelijkheid van het eigen ecosysteem een aandachtspunt. Voor content-gedreven projecten met veel visuele contentstructuren biedt het wel een meerwaarde.

Bolt.new blinkt uit in snelheid, eenvoud en nette Tailwind-gebaseerde output. De gegenereerde componenten zijn goed gestructureerd en onderhoudbaar. De tool was oorspronkelijk beperkt tot React, maar breidt inmiddels zijn ondersteuning uit. Integratie met Figma is sinds kort mogelijk, wat de workflow verbetert.
V0.dev levert bijzonder consistente, semantische code met sterke Tailwind-integratie. De interface is eenvoudig, de gegenereerde componenten zijn production-ready. De tool biedt beperkte personalisatie en heeft moeite met complexe structuren, waarbij AI soms fouten maakt bij interpretatie.

TeleportHQ biedt een geïntegreerde visuele ontwikkelomgeving en ondersteunt meerdere frameworks. Dankzij de recente Figma-integratie is de workflow verbeterd. Voor eenvoudige projecten werkt het goed, maar complexe structuren vereisen handmatige aanpassingen.

Framelink zet sterk in op structuurherkenning en semantiek. De gegenereerde code is schaalbaar en onderhoudbaar, mits het design zeer gestructureerd en correct benoemd is. De tool ondersteunt CSS Modules en biedt animatie-integratie, maar vraagt discipline en voorbereiding.

DhiWise biedt een volledige oplossing die verder gaat dan enkel front-end: ook backend-logica en API-integraties worden automatisch gegenereerd. De tool vereist een rigide workflow en strikte conventies, maar biedt in ruil een holistische aanpak voor applicatieontwikkeling.
 


Codia maakt gebruik van AI voor het herkennen van designpatronen in geüploade afbeeldingen. De gegenereerde code is semantisch correct bij eenvoudige componenten, maar de tool kent beperkingen bij complexe layouts. De afwezigheid van directe Figma-integratie maakt het proces omslachtiger, en de AI kan fouten maken bij ambiguïteit of overlapping in het design.

Handmatige referentiecode blijft het kwalitatieve ijkpunt voor semantiek, structuur en onderhoudbaarheid. Het is tijdsintensief maar biedt volledige controle over alle aspecten van de code. Het dient als benchmark om de prestaties van de automatische tools tegen af te zetten.

4.7 Reflectie op testresultaten en implicaties voor Dynamate

De uitgebreide analyse van design-to-code tools in hoofdstuk 4.5, en de samenvattende vergelijking in 4.6, maken het mogelijk om vanuit het perspectief van Dynamate terug te blikken op de resultaten. Dynamate is een digitale studio met specifieke noden op het vlak van herbruikbare componentstructuren, semantisch correcte HTML, en integratie met een bestaande stack op basis van React, Tailwind CSS, Shopify, Laravel en Craft CMS. Deze context vormt de toetssteen bij het beoordelen van de tools.

Uit de testresultaten blijkt dat er grote verschillen zijn in hoe de tools presteren. Sommige oplossingen zijn vooral gericht op snelheid en toegankelijkheid, zoals Anima en Codia. Deze tools bieden snelle conversies maar genereren overwegend generieke HTML-structuren en maken gebruik van inline stijlen. Hierdoor is de gegenereerde code moeilijk herbruikbaar en minder geschikt voor schaalbare projecten.

Aan de andere kant zijn er tools zoals Cursor + Figma MCP en V0.dev die sterk focussen op codekwaliteit. Deze tools genereren semantisch correcte, goed gestructureerde en production-ready componenten. Cursor toont zich bijzonder sterk in het herkennen van componenthiërarchieën uit Figma, mits die goed gestructureerd zijn. Daarnaast herkent Cursor bestaande componenten binnen de huidige stack en projecten van Dynamate, en speelt hier efficiënt op in door componenten correct te matchen en naadloos te integreren in de bestaande codebasis. V0.dev levert consistente output, maar de AI kan zich vergissen bij complexere layouts. Framelink biedt vergelijkbare structurele precisie, maar vereist een strikt opgezet designproces.

Builder.io en DhiWise bieden bredere oplossingen met CMS- en backend-integraties. Deze tools zijn krachtig voor grotere applicaties maar vereisen een rigide workflow en onboarding. Bolt.new en Locofy positioneren zich tussen deze twee uitersten. Ze leveren goede codekwaliteit en intuïtieve interfaces, maar zijn beperkt in hun ondersteuning buiten specifieke frameworks zoals React.

De tests tonen aan dat tools beter presteren wanneer de Figma-bestanden voldoen aan bepaalde standaarden: componenten moeten correct benoemd en hiërarchisch opgebouwd zijn. Dit onderstreept het belang van een interne designrichtlijn binnen Dynamate. Een gestroomlijnde Figma-workflow verhoogt de effectiviteit van automatische conversie.

Op basis van deze bevindingen komt naar voren dat geen enkele tool universeel de beste is. Tools die hoge codekwaliteit leveren, zoals Cursor, vereisen voorbereiding maar leveren resultaat dat nauw aansluit bij de technische noden van Dynamate. Tools die snel en laagdrempelig zijn, kunnen nog steeds nuttig zijn voor prototyping of specifieke taken. De reflectie toont aan dat een hybride aanpak het meest haalbaar is: consistente designrichtlijnen gekoppeld aan een krachtige, configureerbare toolchain.

Deze inzichten ondersteunen de toekomstige keuze en integratie van tools binnen het ontwikkelproces van Dynamate, waarbij focus ligt op efficiëntie, schaalbaarheid en technische kwaliteit.

4.8 Gekozen oplossing en onderbouwing
Op basis van de grondige analyse van tools in hoofdstuk 4.5 en de evaluatie in hoofdstuk 4.6 en 4.7, wordt een oplossing uitgewerkt die aansluit op de specifieke context en technische noden van Dynamate. De vereisten van het front-end team omvatten semantische code, herbruikbaarheid van componenten, naadloze integratie in bestaande projecten (zoals op basis van React, Tailwind CSS, Shopify, Laravel en Craft CMS), en herkenning van bestaande componentenstructuren.
Uit de tooltesten blijkt dat een volledig geautomatiseerde oplossing op dit moment onvoldoende kwaliteit en controle biedt voor productieomgevingen. Tegelijkertijd tonen meerdere tools aan dat gedeeltelijke automatisatie, mits gekoppeld aan duidelijke ontwerpstandaarden, wel degelijk tot waardevolle resultaten leidt.
Daarom wordt gekozen voor een hybride aanpak waarin een consistente opbouw van Figma-bestanden centraal staat. Componenten worden strikt benoemd, geordend en gemapt volgens vooraf vastgelegde conventies. Op basis van deze structuur wordt een semi-geautomatiseerde toolchain ingezet.
De tool die momenteel het beste inspeelt op deze noden is de combinatie van Cursor en Figma MCP. Deze toolset biedt niet enkel een krachtige Figma-integratie via MCP (Multi-user Component Publishing), maar herkent ook bestaande componenten binnen Dynamate’s eigen projecten. Cursor genereert goed gestructureerde componenten, maakt correct gebruik van classes, en laat ruimte voor manuele optimalisatie waar nodig. De gegenereerde code is semantisch sterk, helder leesbaar en eenvoudig uitbreidbaar. Bovendien integreert de output vlot in bestaande projectstructuren.
Deze aanpak wordt ondersteund door aanvullende tools zoals V0.dev, Bolt.new of Framelink, die flexibel kunnen worden ingezet voor specifieke deeltrajecten zoals prototyping, iteratieve ontwikkeling of het snel genereren van consistente componenten.
Deze oplossing biedt de juiste balans tussen controle en automatisatie, en maakt het mogelijk om de kwaliteit van de code te waarborgen, terwijl ontwikkeltijd wordt gereduceerd. Het vormt een toekomstgerichte stap richting een efficiëntere en schaalbare workflow voor design-to-code binnen Dynamate.

5. Praktische Uitwerking
5.1 Ontwikkeling van de Dynamate Design-to-Code Generator
De praktische fase van deze bachelorproef richt zich op de ontwikkeling van een geavanceerde design-to-code generator die aansluit op de specifieke noden van Dynamate. Deze tool is ontwikkeld in TypeScript en combineert AI-gestuurde codegeneratie met een nauwkeurige componentanalyse om gestructureerde, semantisch correcte front-end code te genereren uit Figma-designs. Daarbij is bijzondere aandacht besteed aan typeveiligheid, onderhoudbaarheid en integratie met moderne frameworks en stylingtechnieken zoals React, Tailwind CSS en CSS Modules.
5.1.1 Architectuur en kerncomponenten
De tool bestaat uit drie hoofdcomponenten die samen een robuuste design-to-code pipeline vormen. De eerste component, de FigmaService, vormt de brug tussen het Figma-platform en de tool. Deze service is verantwoordelijk voor een veilige authenticatie met de Figma API, het ophalen van componentstructuren en stijlen, en het omzetten van design tokens naar een semantische representatie, zie Codefragment 19.
 
Codefragment 19: Figma service code

De tweede component is de CodeGenerator, zie Codefragment 20. Deze klasse gebruikt AI om op basis van geanalyseerde Figma-componenten code te genereren voor verschillende frameworks en stylingoplossingen.
 
Codefragment 20: Code generator code
 

De derde component is de RulesetGenerator, zie Codefragment 21. Deze module genereert een regelsysteem op basis van bestaande codebases om een consistente output te garanderen.
 
Codefragment 21: Ruleset generator code
 

 
5.1.2 CLI-interface en interactie
De tool beschikt over een gebruiksvriendelijke CLI die gebruikers via een interactieve configuratie, zie Codefragment 22, begeleidt bij het instellen van hun project.
 
Codefragment 22: CLI code voorbeeld
5.1.3 Voorbeeld van gegenereerde component
De tool genereert performante, semantisch correcte componenten. Een voorbeeld hiervan is een React component met framer-motion animaties en integratie van bestaande UI-componenten, zie Codefragment 23.
 
Codefragment 23: Gegenereerde code voorbeeld
5.2 Workflow
De workflow met de tool verloopt in drie duidelijke stappen. Eerst wordt de CLI geïnstalleerd via npm met het commando npm install -g dynamate-design-to-code. Vervolgens kan een nieuw project worden geconfigureerd via ddtc start, wat een .ddtcrc.json bestand aanmaakt , zie Codefragment 24, waarin onder andere het gewenste framework, de stylingoplossing en conventies worden vastgelegd.
 
Codefragment 24: .ddtcrc.json voorbeeld file
 
Ten slotte worden componenten gegenereerd via het commando ddtc generate, zie Codefragment 25, eventueel met specifieke parameters zoals bestandspaden of frameworkkeuze. Dit zorgt voor een consistente, configureerbare en production-ready codeoutput.
 
Codefragment 25: Voorbeeld commandos voor rulesets te genereren
Deze moderne implementatie biedt aanzienlijke voordelen ten opzichte van klassieke tools. Door gebruik te maken van AI-gestuurde prompts en regels, uitgebreide configuratieopties en ondersteuning voor meerdere frameworks, wordt een efficiënte en onderhoudbare workflow mogelijk gemaakt.

5.3 Resultaten en Validatie
De design-to-code tool is getest in verschillende scenario's die representatief zijn voor de dagelijkse praktijk binnen Dynamate. Voor landing page componenten bedraagt de gemiddelde conversietijd tussen de twee en drie seconden per component. 
Voor meer complexe e-commercecomponenten ligt de gemiddelde conversietijd iets hoger, namelijk tussen drie en vier seconden. De codekwaliteit blijft echter hoog, met een score van 4.3 op 5. Ook hier scoort de herbruikbaarheid van componenten goed met een gemiddelde van 4.6 op 5. Deze resultaten bevestigen dat de tool in staat is om niet alleen snel, maar ook consistent en onderhoudbaar code te genereren die past binnen de moderne ontwikkelstandaarden van Dynamate.
5.4 Voordelen en Beperkingen
De ontwikkeling en inzet van de tool leveren een aantal duidelijke voordelen op. Zo blijkt uit de tests dat de tool in staat is om op een snelle en consistente manier code te genereren. De integratie met Tailwind CSS, React, Shopify, Laravel en Craft CMS verloopt vlot, wat een soepele integratie in bestaande workflows mogelijk maakt. Ook blijkt de tool goed in staat bestaande componenten in projecten te herkennen en hierop verder te bouwen, wat de ontwikkeltijd verder reduceert. De keuze voor TypeScript zorgt bovendien voor type-veiligheid en verhoogt de onderhoudbaarheid van de gegenereerde code.
Tegelijkertijd zijn er ook enkele beperkingen vastgesteld. Zo vraagt de implementatie van complexe animaties of logica nog steeds om handmatige tussenkomst. Bepaalde, sterk afwijkende of zeer specifieke componentstructuren vereisen bovendien extra configuratie om correct gegenereerd te worden. Tot slot vraagt de initiële setup van de tool, inclusief configuratie van projecten en conventies, enige tijdsinvestering en training, zeker voor teams die nog geen ervaring hebben met soortgelijke workflows.
 
5.5 Toekomstige Verbeteringen
De roadmap voorziet de volgende uitbreidingen:
•	Animatie Ondersteuning, zie Codefragment 26:
  
Codefragment 26: Animatie config code
•	Uitgebreide Templates, zie Codefragment 27:
  
Codefragment 27: Template systeem code
•	Performanceverbeteringen, zie Codefragment 28:
  
Codefragment 28: Performance optimalisation code
Deze praktische uitwerking toont aan dat een eigen tool, gebaseerd op bestaande infrastructuur en gericht op interne noden, een haalbare en efficiënte strategie is voor het automatiseren van design-to-code workflows bij Dynamate.
 
6. Conclusie
De uitgevoerde studie en ontwikkeling binnen deze bachelorproef tonen aan dat de design-to-code workflow binnen Dynamate om een meerlaagse, contextspecifieke aanpak vraagt in plaats van een generieke, allesomvattende tool. De vergelijking van bestaande tools maakt duidelijk dat er grote verschillen bestaan in gebruiksgemak, semantiek, herbruikbaarheid en integratiemogelijkheden. Door deze inzichten werd gekozen voor een hybride aanpak die consistentie in Figma combineert met een geautomatiseerde conversietool op maat.
De ontwikkelde tool toont dat het mogelijk is om, vertrekkende vanuit gestructureerde designbestanden, semantisch correcte, herbruikbare en production-ready code te genereren. Zowel de validatietests als de technische integratie bewijzen dat een aanpak op maat beter aansluit bij de specifieke workflows, stacks en kwaliteitsstandaarden van Dynamate dan generieke oplossingen. De tool biedt een concrete meerwaarde door een groot deel van het repetitieve conversiewerk te automatiseren en tegelijk ontwikkelaars voldoende controle te laten behouden.
Toekomstige verbeteringen kunnen deze aanpak verder optimaliseren, bijvoorbeeld via uitgebreidere framework-ondersteuning, betere animatie-integratie en verfijning van de rulesets. Deze bachelorproef levert een waardevolle eerste stap richting een duurzame en efficiënte automatisering van het design-to-code proces binnen Dynamate.
 

7. Nawoord
Deze bachelorproef is het resultaat van maandenlang onderzoek, testen en ontwikkelen binnen een sterk veranderend technologisch domein. Het onderwerp van design-to-code blijkt niet alleen technisch uitdagend, maar ook inhoudelijk rijk aan nuance. De combinatie van theorie, toolvergelijking en praktische implementatie zorgde voor een diepgaand inzicht in zowel de beperkingen als het potentieel van automatisering in front-end ontwikkeling.
Dank gaat uit naar het team van Dynamate voor hun openheid, technische input en constructieve feedback tijdens elke fase van het project. Dankzij hun praktijkervaring kon deze bachelorproef gefundeerd worden in reële noden en concrete ontwikkelcontexten. Daarnaast vormden de inzichten van externe bronnen en experimentele tools een waardevolle aanvulling op het ontwikkeltraject.
Tot slot bood dit traject een unieke kans om technologie niet alleen als doel, maar vooral als middel te benaderen: een middel om workflows te verbeteren, samenwerking te stroomlijnen en de brug tussen design en ontwikkeling verder te verkleinen.
 


8. Literatuurlijst
There are no sources in the current document.

[1] CodeParrot, “CodeParrot – AI-Powered Code Generation,” codeparrot.ai. [Online]. Available: https://codeparrot.ai/docs/quick-start. [Accessed: 17-May-2025].
[2] Builder.io, “Design to Code,” builder.io. [Online]. Available: https://www.builder.io/m/design-to-code. [Accessed: 20-May-2025].
[3] Codia, “Codia – Design-to-Code Automation,” codia.ai. [Online]. Available: https://codia.ai/design-to-code. [Accessed: 12-May-2025].
[4] Builder.io, “Builder.io AI-powered Figma to Code,” Figma Community. [Online]. Available: https://www.figma.com/community/plugin/747985167520967365/builder-io-ai-powered-figma-to-code-react-vue-tailwind-more. [Accessed: 19-May-2025].
[5] DhiWise, “DhiWise – Modern App Development Platform,” dhiwise.com. [Online]. Available: https://www.dhiwise.com. [Accessed: 19-May-2025].
[6] Notion, “Notion – Connected Workspace,” notion.com. [Online]. Available: https://www.notion.com. [Accessed: 19-May-2025].
[7] SALT NLP, “Design2Code Project,” salt-nlp.github.io. [Online]. Available: https://salt-nlp.github.io/Design2Code/. [Accessed: 19-May-2025].
[8] Cursor, “Cursor Talk to Figma – MCP Plugin,” Figma Community. [Online]. Available: https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin. [Accessed: 19-May-2025].
[9] Vercel, “V0 – AI-Powered Component Generator,” v0.dev. [Online]. Available: https://v0.dev. [Accessed: 19-May-2025].
[10] TeleportHQ, “Design to Code – TeleportHQ,” teleporthq.io. [Online]. Available: https://teleporthq.io/design-to-code. [Accessed: 19-May-2025].
[11] Bolt, “Bolt – Front-End Automation,” bolt.new. [Online]. Available: https://support.bolt.new/building/intro-bolt 
[12] Figma, “Point Carré Design File,” Figma. [Online]. Available: https://www.figma.com/design/0R3QjILgoqViJOsPucuczB/Point-Carré?node-id=4800-16925&t=MAGzU0RJZzi6Qwa5-1.  [Accessed: 19-May-2025].
[13] CodeParrot, “Best Design to Code AI Tools for Developers,” codeparrot.ai. [Online]. Available: https://codeparrot.ai/blogs/best-design-to-code-ai-tools-for-developers. [Accessed: 19-May-2025].
[14] Locofy, “Locofy – Figma to Code for React, Next.js, Gatsby, HTML,” locofy.ai. [Online]. Available: https://www.locofy.ai. [Accessed: 19-May-2025].
[15] Anima, “Anima for Figma,” animaapp.com. [Online]. Available: https://www.animaapp.com. [Accessed: 19-May-2025].
[16] Cursor. "AI-first code editor." https://www.cursor.sh/ 
[17] Nikiforova, O., et al. "Automated Generation of Web Application Front-end Components..." https://www.researchgate.net/publication/382236425_Automated_Generation_of_Web_Application_Front-end_Components_from_User_Interface_Mockups
[18] Si, C., et al. "Design2Code: How Far Are We From Automating Front-End Engineering." https://salt-nlp.github.io/Design2Code/ 
[19] Figma MCP plugin  https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp 
[20] Framelink. (2024). Framelink Quickstart Guide. https://www.framelink.ai/docs/quickstart
[21] Figma API. https://www.figma.com/developers/api 
9. Gebruik van Generatieve AI
Bij het schrijven van deze bachelorproef werd gebruikgemaakt van ChatGPT voor het structureren van de opbouw, het herschrijven van technische paragrafen voor meer duidelijkheid, het opzoeken van correcte referentiestijlen (IEEE) en het genereren van voorbeeldteksten voor de begrippenlijst.
Alle gegenereerde inhoud is kritisch nagelezen en indien nodig aangepast.
9. Bijlagen
Bijlage 1: Figma template
Bijlage 2: Output van gegenereerde code (HTML/CSS/JS) 
Bijlage 3: Analyse-overzicht bestaande tools 
Bijlage 4: Interviewvragenlijst gebruikt bij interne bevraging
Bijlage 5: CLI-tool https://github.com/L-ubu/BP.git 
