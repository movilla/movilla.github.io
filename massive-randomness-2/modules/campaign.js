ModManager.modules.push(function(){

    return [
        {
            id:"campaign-default",
            needs:[ ],
            provides:[ "campaign-hidespoilers" ],
            label:{
                EN:"Hide spoilers on campaigns"
            },
            content:[
                {
                    type:"campaignGeneratorFlags",
                    data:{
                        hideSpoilers:true
                    }
                }
            ]
        },
        {
                id:"campaign-default",
                needs:[ ],
                provides:[ "campaign-default", "generator-campaign" ],
                label:{
                    EN:"Default data for campaigns"
                },
                content:[
                    {
                        type:"globalLabels",
                        data:{
                            campaignFooter:{
                                IT:"{campaign.name} &dash; Missioni",
                                EN:"{campaign.name} &dash; Missions",ES:"{campaign.name} &dash; Misiones",
                            },
                            campaignIndex:{
                                IT:"Indice",
                                EN:"Index",ES:"Índice"
                            },
                            campaignPage:{
                                IT:"Parte {campaign.page}/{campaign.pages}",
                                EN:"Part {campaign.page}/{campaign.pages}",ES:"Parte {campaign.page}/{campaign.pages}"
                            },
                            campaignPreparationTitle:{
                                EN:"Setup",ES:"Preparación",
                                IT:"Preparazione"
                            },
                            campaignTreasureBag:{
                                EN:"Treasure Bag",ES:"Bolsa del Tesoro",
                                IT:"Borsa del Tesoro"
                            },
                            campaignIndexTitle:{
                                EN:"Index",ES:"Índice",
                                IT:"Indice"
                            },
                            campaignIntroductionTitle:{
                                EN:"Introduction",ES:"Introducción",
                                IT:"Introduzione"
                            },
                            campaignIndexFooter:{
                                EN:"{campaign.name} &dash; Rules",ES:"{campaign.name} &dash; Reglas",
                                IT:"{campaign.name} &dash; Regole"
                            },
                            campaignProgress:{
                                IT:"Progressione della Campagna",
                                EN:"Campaign Progress",ES:"Progresión de la Campaña"
                            },
                            campaignNextMission:{
                                IT:"Prossima Missione:",
                                EN:"Next Mission:",ES:"Siguiente Misión:"
                            },
                            campaignVictoryCase:{
                                IT:"In caso di vittoria:",
                                EN:"In case of victory:",ES:"En caso de victoria:"
                            },
                            campaignCongratulations:{
                                IT:"Congratulazioni!",
                                EN:"Congratulations!",ES:"¡Felicidades!"
                            },
                            campaignAchievements:{
                                IT:"Traguardi",
                                EN:"Achievements",ES:"Logros"
                            },
                            campaignChallenge:{
                                IT:"Sfida del Vecchio Rosso",
                                EN:"The Red Old One Challenge",ES:"El Desafío del Viejo Rojo"
                            },
                            campaignChallengeExplanation:{
                                IT:"Eroi, siete disposti a dimostrare il vostro valore ed accettare la mia sfida?",
                                EN:"Heroes, are you willing to prove your worth and accept my challenge?",ES:"Héroes, ¿estáis dispuestos a demostrar vuestro valor y aceptar mi desafío?"
                            },
                            campaignChallengeReward:{
                                IT:"<b>Ricompensa (solo in caso di vittoria):</b>",
                                EN:"<b>Reward (only in case of victory):</b>",ES:"<b>Recompensa (solo en caso de victoria):</b>"
                            },
                            campaignQuestPhase:{
                                IT:"Fase della Missione",
                                EN:"Quest phase",ES:"Fase de la Misión"
                            },
                            sideQuest:{
                                IT:"Missione Secondaria",
                                EN:"Side Quest",ES:"Misión Secundaria"
                            },
                            sideQuestCondition:{
                                IT:"<b>Condizione:</b>",
                                EN:"<b>Condition:</b>",ES:"<b>Condición:</b>"
                            },
                            sideQuestReward:{
                                IT:"<b>Ricompensa (solo in caso di vittoria):</b>",
                                EN:"<b>Reward (only in case of victory):</b>",ES:"<b>Recompensa (solo en caso de victoria):</b>"
                            }
                        }
                    },{
                        type:"campaignLabels",
                        data:{
                            campaignBoss:{
                                IT:[
                                    "un Mostro Errante casuale di 2 ranghi al di sopra del rango di Mostro Errante attuale o un Mostro Errante di Livello 10 se non disponibile (esempio: se doveste pescare un Livello 3-4, pesca un Livello 6-7)",
                                    "Mostri Erranti casuali di 2 ranghi al di sopra del rango di Mostro Errante attuale o",
                                    "Mostri Erranti di Livello 10 se non disponibile (esempio: se doveste pescare un Livello 3-4, pesca un Livello 6-7)"
                                ],
                                EN:[
                                    "a Roaming Monster 2 ranks above the current Roaming Monster rank or a Level 10 Roaming Monster if not available (example: if you were to draw a Level 3-4, draw a Level 6-7)",
                                    "random Roaming Monsters 2 ranks above the current Roaming Monster rank or",
                                    "Level 10 Roaming Monsters if not available (example: if you were to draw a Level 3-4, draw a Level 6-7)"
                                ],ES:[ "un Monstruo Errante aleatorio de 2 rangos por encima del rango de Monstruo Errante actual, o un Monstruo Errante de Nivel 10 si no está disponible (ejemplo: si tuvierais que robar un Nivel 3-4, robad un Nivel 6-7)", "Monstruos Errantes aleatorios de 2 rangos por encima del rango de Monstruo Errante actual, o", "Monstruos Errantes de Nivel 10 si no está disponible (ejemplo: si tuvierais que robar un Nivel 3-4, robad un Nivel 6-7)" ]
                            },
                            campaignEasyBoss:{
                                IT:[
                                    "un Mostro Errante casuale di 1 rango al di sopra del Livello del Dungeon <b>di partenza</b> o un Mostro Errante di Livello 10 se non disponibile (esempio: se il Livello del Dungeon di partenza era 3-4, generate un Mostro Errante di Livello 5)"
                                ],
                                EN:[
                                    "a Roaming Monster 1 rank above the Dungeon <b>starting</b> Level or a Level 10 Roaming Monster if not available (example: if the Dungeon stating Level was 3-4, generate a Level 5 Roaming Monster)"
                                ],ES:[ "un Monstruo Errante de 1 rango por encima del Nivel <b>inicial</b> de la Mazmorra, o un Monstruo Errante de Nivel 10 si no está disponible (ejemplo: si el Nivel inicial de la Mazmorra era 3-4, genera un Monstruo Errante de Nivel 5)" ]
                            },
                            campaign2shotsQuestPhaseDescription:{
                                IT:"<ul>"+
                                    "<li>La Missione A si svolger&agrave; come una normale Avventura one-shot. Al termine della Missione A verr&agrave; spiegato come far progredire i personaggi prima di proseguire con la Missione B.</li>"+
                                    "<li><b>Le sfide del Vecchio Rosso</b>: La Missione A include una sfida del Vecchio Rosso. Gli eroi ottengono la ricompensa della sfida giocando la Missione corrente seguendo le regole della sfida e vincendo. Non ottengono le ricompense se la Missione termina con una sconfitta.</li>"+
                                "</ul>",
                                EN:"<ul>"+
                                    "<li>Mission A will play out like a normal One-shot quest. After completing Mission A, you will be given instructions on how to advance your characters before moving on to Mission B.</li>"+
                                    "<li><b>The Red Old One Challenges</b>: Mission A includes a Red Old One Challenge. Heroes claim the challenge reward when they play the current Quest following the challenge rules and win. They do not claim the rewards if the Quest ends in defeat.</li>"+
                                "</ul>",ES:"<ul>" + "<li>La Misión A se desarrolla como una Aventura autoconclusiva normal. Al terminar la Misión A, se te indicará cómo hacer progresar a tus personajes antes de continuar con la Misión B.</li>" + "<li><b>Los Desafíos del Viejo Rojo</b>: La Misión A incluye un Desafío del Viejo Rojo. Los Héroes obtienen la recompensa del desafío cuando juegan la Misión actual siguiendo las reglas del desafío y ganan. No obtienen las recompensas si la Misión termina en derrota.</li>" + "</ul>"
                            },
                            miniCampaignTreasureBagDescription:{
                                IT:"<p>Invece del normale numero di segnalini Tesoro descritto nella Configurazione della Modalità Campagna, all'inizio di questa Campagna i giocatori mettono 10 segnalini Tesoro Comune e 3 segnalini Tesoro Raro nella Borsa del Tesoro.</p>",
                                EN:"<p>Instead of the regular number of Treasure tokens described in Campaign Mode Setup, at the start of this Campaign players place 10 Common Treasure tokens and 3 Rare Treasure tokens in the Treasure bag.</p>",ES:"<p>En lugar del número habitual de marcadores de Tesoro descrito en la Preparación del Modo Campaña, al comienzo de esta Campaña los jugadores colocan 10 marcadores de Tesoro Común y 3 marcadores de Tesoro Raro en la Bolsa del Tesoro.</p>"
                            },
                            shot2TreasureBagDescription:{
                                IT:"<p>Prepara la Borsa del Tesoro come per una normale Avventura one-shot: aggiungi tutti i segnalini Tesoro Comune and 5 segnalini Tesoro Raro.</p>",
                                EN:"<p>Prepare the Treasure Bag as for a normal One-shot quest: add all Common Trasure tokens and 5 Rare Treasure tokens.</p>",ES:"<p>Prepara la Bolsa del Tesoro como en una Aventura autoconclusiva normal: añade todos los marcadores de Tesoro Común y 5 marcadores de Tesoro Raro.</p>"
                            },
                            campaignMode:{
                                IT:"Modalit&agrave; Campagna",
                                EN:"Campaign Mode",ES:"Modo Campaña"
                            },
                            miniCampaignMode:{
                                IT:"Modalit&agrave; Mini-campagna",
                                EN:"Mini-campaign Mode",ES:"Modo Mini-campaña"
                            },
                            shots2CampaignMode:{
                                IT:"Modalit&agrave; Campagna 2-shot",
                                EN:"2-shot Campaign Mode",ES:"Modo Campaña de 2 misiones"
                            },
                            miniCampaignObjectivesXp:{
                                EN:36
                            }
                        }
                    },{
                        type:"campaignCode",
                        data:[
                            {
                                code:{
                                    actionSameTime:(result)=>{
                                        return result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>1);
                                    },
                                    collectOptionalItems:(result)=>{
                                        if (result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>2)) {
                                            let
                                                allCollect = result.map.usedTokens.objective,
                                                leastCollect = Math.floor(allCollect*0.75),
                                                labels = result.labels["label.collectOptionalItems"];
                                            for (let k in labels) {
                                                labels[k][2] = leastCollect;
                                                labels[k][3] = allCollect;
                                            }
                                            return true;
                                        } else return false;
                                    },
                                    collectOptionalItemsCorruption:(result)=>{
                                        if (result.map && result.map.usedTokens.corruption && (result.map.usedTokens.corruption>2)) {
                                            let
                                                allCollect = result.map.usedTokens.corruption,
                                                leastCollect = Math.floor(allCollect*0.75),
                                                labels = result.labels["label.collectOptionalItems"];
                                            for (let k in labels) {
                                                labels[k][2] = leastCollect;
                                                labels[k][3] = allCollect;
                                            }
                                            return true;
                                        } else return false;
                                    },
                                    collectLessItems:(result)=>{
                                        if (result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>2)) {
                                            let
                                                allCollect = result.map.usedTokens.objective,
                                                leastCollect = Math.floor(allCollect*0.5),
                                                labels = result.labels["label.collectLessItems"];
                                            for (let k in labels)
                                                labels[k][2] = leastCollect;
                                            return true;
                                        } else return false;
                                    }
                                }
                            }
                        ]
                    },{
                        type:"campaignSideQuests",
                        data:[
                            {
                                tags:[ "visitAllRooms" ],
                                name:[
                                    {
                                        IT:"Guarda ovunque!",
                                        EN:"Look everywhere!",ES:"¡Mirad por todas partes!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Forse, esplorando tutto il dungeon, troveremo qualcosa di utile!",
                                        EN:"Maybe, by exploring the entire dungeon, we will find something useful!",ES:"¡Quizá, explorando toda la mazmorra, encontremos algo útil!"
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Rivelare <b>tutte</b> le Camere.",
                                        EN:"Reveal <b>all</b> the Rooms.",ES:"Revelar <b>todas</b> las Cámaras.",
                                    }
                                ]
                            },{
                                tags:[ "collectMoreItems" ],
                                name:[
                                    {
                                        IT:"Fare scorta!",
                                        EN:"Stock up!",ES:"¡A hacer acopio!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a raccogliere pi&ugrave; {label.collectMoreItems@1} possono farne qualcosa di utile.",
                                        EN:"If the Heroes manage to collect more {label.collectMoreItems@1} they can do something useful with them.",ES:"Si los Héroes logran recoger más {label.collectMoreItems@1}, podrán hacer algo útil con ellos."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione raccogliendo almeno {label.collectMoreItems@0} {label.collectMoreItems@2}.",
                                        EN:"Complete the Mission by collecting at least {label.collectMoreItems@0} {label.collectMoreItems@2}.",ES:"Completar la Misión recogiendo al menos {label.collectMoreItems@0} {label.collectMoreItems@2}."
                                    }
                                ]
                            },{
                                tags:[ "collectAllItems" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!",ES:"¡No dejéis nada atrás!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectAllItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectAllItems@0} they will be able to gain an advantage.",ES:"Si los Héroes logran {label.collectAllItems@0}, podrán obtener una ventaja."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectAllItems@1}.",
                                        EN:"Complete the Mission {label.collectAllItems@1}.",ES:"Completar la Misión {label.collectAllItems@1}."
                                    }
                                ]
                            },{
                                tags:[ "collectOptionalItems" ],
                                if:"collectOptionalItems",
                                mods:[ "extraObjectives" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!",ES:"¡No dejéis nada atrás!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectOptionalItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectOptionalItems@0} they will be able to gain an advantage.",ES:"Si los Héroes logran {label.collectOptionalItems@0}, podrán obtener una ventaja."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectOptionalItems@1}.",
                                        EN:"Complete the Mission {label.collectOptionalItems@1}.",ES:"Completar la Misión {label.collectOptionalItems@1}."
                                    }
                                ]
                            },{
                                tags:[ "collectOptionalItemsCorruption" ],
                                if:"collectOptionalItemsCorruption",
                                mods:[ "extraObjectives" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!",ES:"¡No dejéis nada atrás!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectOptionalItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectOptionalItems@0} they will be able to gain an advantage.",ES:"Si los Héroes logran {label.collectOptionalItems@0}, podrán obtener una ventaja."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectOptionalItems@1}.",
                                        EN:"Complete the Mission {label.collectOptionalItems@1}.",ES:"Completar la Misión {label.collectOptionalItems@1}."
                                    }
                                ]
                            },{
                                tags:[ "collectLessItems" ],
                                if:"collectLessItems",
                                name:[
                                    {
                                        IT:"Non sprecare nulla!",
                                        EN:"Don't waste anything!",ES:"¡Que no se desperdicie nada!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectLessItems@0} avranno pi&ugrave; energie per trovare qualcosa di utile.",
                                        EN:"If the Heroes manage {label.collectLessItems@0} they will have more energy to find something useful.",ES:"Si los Héroes logran {label.collectLessItems@0}, tendrán más energía para encontrar algo útil."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectLessItems@1}.",
                                        EN:"Complete the Mission {label.collectLessItems@1}.",ES:"Completar la Misión {label.collectLessItems@1}."
                                    }
                                ]
                            },{
                                tags:[ "actionSameTime" ],
                                if:"actionSameTime",
                                name:[
                                    {
                                        IT:"Sincronia!",
                                        EN:"Synchrony!",ES:"¡Sincronía!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a collaborare e sincronizzarsi possono risparmiare tempo e guadagnare qualcosa di utile.",
                                        EN:"If Heroes manage to collaborate and synchronize they can save time and earn something useful.",ES:"Si los Héroes logran colaborar y sincronizarse, pueden ahorrar tiempo y ganar algo útil."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"{label.actionSameTime@0} nello stesso round.",
                                        EN:"{label.actionSameTime@0} in the same round.",ES:"{label.actionSameTime@0} en el mismo asalto."
                                    }
                                ]
                            },{
                                tags:[ "eliminateEnemy" ],
                                name:[
                                    {
                                        IT:"Che la caccia abbia inizio!",
                                        EN:"Let the hunt begin!",ES:"¡Que empiece la caza!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Uno degli Eroi grida: &laquo;Lasciateli a me!&raquo;, gettandosi a capofitto nella mischia...",
                                        EN:"One of the Heroes shouts: &laquo;Leave them to me!&raquo;, throwing himself into the fray...",ES:"Uno de los Héroes grita: &laquo;¡Dejádmelos a mí!&raquo;, y se lanza de cabeza a la refriega..."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Uno stesso Eroe deve uccidere {label.eliminateEnemy@0}.",
                                        EN:"The same Hero must kill {label.eliminateEnemy@0}.",ES:"Un mismo Héroe debe matar a {label.eliminateEnemy@0}."
                                    }
                                ]
                            },{
                                tags:[ "noLifebringer"],
                                name:[
                                    {
                                        IT:"Eroi immortali!",
                                        EN:"Immortal heroes!",ES:"¡Héroes inmortales!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"&Egrave; una questione di onore: nessun Eroe deve cadere!",
                                        EN:"It's a question of honor: no Hero must fall!",ES:"Es una cuestión de honor: ¡ningún Héroe debe caer!"
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Non usare nessun segnalino Latore di Vita durante questa Missione.",
                                        EN:"Do not use any Lifebringer tokens during this Mission.",ES:"No uses ningún marcador de Portador de Vida durante esta Misión."
                                    }
                                ]
                            },{
                                tags:[ "keepItem"],
                                name:[
                                    {
                                        IT:"Non si tocca!",
                                        EN:"Don't touch it!",ES:"¡No lo toquéis!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se l'Eroe che possiede {label.keepItem@0}, pu&ograve; lasciare ai compagni pi&ugrave; tempo per cercare meglio nei dintorni.",
                                        EN:"If the Hero with {label.keepItem@0}, it can give its companions more time to search the surroundings.",ES:"Si el Héroe que lleva {label.keepItem@0}, puede dar a sus compañeros más tiempo para explorar los alrededores."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Non scambiare {label.keepItem@1} durante questa Missione.",
                                        EN:"Do not trade {label.keepItem@1} during this Mission.",ES:"No intercambies {label.keepItem@1} durante esta Misión."
                                    }
                                ]
                            },{
                                tags:[ "roundLimit" ],
                                name:[
                                    {
                                        IT:"Il tempo stringe!",
                                        EN:"Time is running out!",ES:"¡El tiempo se acaba!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Gli Eroi devono sbrigarsi! Se riescono a risparmiare tempo possono usarlo per cercare qualcosa di utile.",
                                        EN:"The Heroes must hurry! If they can save time they can look for something useful.",ES:"¡Los Héroes deben darse prisa! Si logran ahorrar tiempo, pueden buscar algo útil."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Terminare la Missione prima della fine del round {label.roundLimit@0}.",
                                        EN:"Finish the Mission before the end of the round {label.roundLimit@0}.",ES:"Terminar la Misión antes de que acabe el asalto {label.roundLimit@0}."
                                    }
                                ]
                            },{
                                tags:[ "riskyInvestigation" ],
                                name:[
                                    {
                                        IT:"Sta tramando qualcosa!",
                                        EN:"It's up to something!",ES:"¡Está tramando algo!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Gli Eroi devono scoprire il colpevole prima che riesca ad avvisare i suoi complici.",
                                        EN:"The Heroes must discover the culprit before it can warn its accomplices.",ES:"Los Héroes deben descubrir al culpable antes de que logre avisar a sus cómplices."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Terminare la Missione interrogando {label.riskyInvestigation@0} personaggi o meno.",
                                        EN:"Finish the Mission by interrogating {label.riskyInvestigation@0} characters or less.",ES:"Terminar la Misión interrogando a {label.riskyInvestigation@0} personajes o menos."
                                    }
                                ]
                            },{
                                tags:[ "noDamage" ],
                                name:[
                                    {
                                        IT:"Intoccabile!",
                                        EN:"Untouchable!",ES:"¡Intocable!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a mantenere {label.noDamage@0} in salvo, forse possono ottenere qualcosa in cambio.",
                                        EN:"If the Heroes can keep {label.noDamage@0} safe, they may can get something in return.",ES:"Si los Héroes logran mantener a salvo a {label.noDamage@0}, quizá puedan obtener algo a cambio."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"{label.noDamage:capital@1} non subisce nessuna Ferita durante la Missione.",
                                        EN:"{label.noDamage:capital@1} does not suffer any Wounds during the Mission.",ES:"{label.noDamage:capital@1} no sufre ninguna Herida durante la Misión."
                                    }
                                ]
                            },{
                                tags:[ "noDoor" ],
                                name:[
                                    {
                                        IT:"Una questione d'orgoglio!",
                                        EN:"A matter of pride!",ES:"¡Una cuestión de orgullo!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"&laquo;Ci vediamo al punto stabilito!&raquo; gli Eroi si salutano poi con un cenno del capo.",
                                        EN:"&laquo;See you at the agreed point!&raquo; the Heroes then greet each other with a nod.",ES:"&laquo;¡Nos vemos en el punto acordado!&raquo; los Héroes se despiden con un gesto de la cabeza."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Ogni Eroe usa {label.noDoor@0}.",
                                        EN:"All Heroes only uses {label.noDoor@0}.",ES:"Todos los Héroes usan únicamente {label.noDoor@0}."
                                    }
                                ]
                            },{
                                tags:[ "spareItem" ],
                                name:[
                                    {
                                        IT:"Nessuno spreco!",
                                        EN:"No waste!",ES:"¡Sin desperdicio!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi {label.spareItem@0} possono farci qualcosa di utile.",
                                        EN:"If the Heroes {label.spareItem@0} they can do something useful with it.",ES:"Si los Héroes {label.spareItem@0}, pueden hacer algo útil con ello."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Fare in modo che {label.spareItem@1}.",
                                        EN:"Make sure that {label.spareItem@1}.",ES:"Asegúrate de que {label.spareItem@1}."
                                    }
                                ]
                            },{
                                tags:[ "noInfection" ],
                                name:[
                                    {
                                        IT:"Nessun contagio!",
                                        EN:"No contagion!",ES:"¡Sin contagio!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.noInfection@0} forse possono risparmiare tempo e cercare qualcosa di utile nei dintorni.",
                                        EN:"If the Heroes can {label.noInfection@0} maybe they can save some time and search for something useful nearby.",ES:"Si los Héroes logran {label.noInfection@0}, quizá puedan ahorrar algo de tiempo y buscar algo útil cerca."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.noInfection@1}.",
                                        EN:"Complete the Mission {label.noInfection@1}.",ES:"Completar la Misión {label.noInfection@1}."
                                    }
                                ]
                            },{
                                tags:[ "noTraps" ],
                                name:[
                                    {
                                        IT:"Mettere in sicurezza!",
                                        EN:"Make it safe!",ES:"¡Aseguradlo!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.noTraps@0}, forse possono chiedere una ricompensa.",
                                        EN:"If the Heroes manage to {label.noTraps@0}, perhaps they can claim a reward.",ES:"Si los Héroes logran {label.noTraps@0}, quizá puedan reclamar una recompensa."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.noTraps@1}.",
                                        EN:"Complete the Mission {label.noTraps@1}.",ES:"Completar la Misión {label.noTraps@1}."
                                    }
                                ]
                            },{
                                tags:[ "collectTime" ],
                                name:[
                                    {
                                        IT:"Tempo prezioso!",
                                        EN:"Precious time!",ES:"¡Tiempo precioso!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.collectTime@0}, forse possono sfruttarlo per cercare in giro.",
                                        EN:"If the Heroes manage to {label.collectTime@0}, maybe they can use it to search around.",ES:"Si los Héroes logran {label.collectTime@0}, quizá puedan usarlo para explorar los alrededores."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectTime@1}.",
                                        EN:"Complete the Mission {label.collectTime@1}.",ES:"Completar la Misión {label.collectTime@1}."
                                    }
                                ]
                            },{
                                tags:[ "teamwork" ],
                                name:[
                                    {
                                        IT:"Lavoro di squadra!",
                                        EN:"Teamwork!",ES:"¡Trabajo en equipo!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.teamwork@0}, dovrebbero avere pi&ugrave; tempo per guardarsi in giro...",
                                        EN:"If the Heroes manage to {label.teamwork@0}, they should have more time to look around...",ES:"Si los Héroes logran {label.teamwork@0}, deberían tener más tiempo para explorar los alrededores..."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.teamwork@1}.",
                                        EN:"Complete the Mission {label.teamwork@1}.",ES:"Completar la Misión {label.teamwork@1}."
                                    }
                                ]
                            }
                        ]
                    },{
                        type:"campaignRewards",
                        data:[
                            {
                                tags:[ "loot", "item", "itemQuality1" ],
                                description:{
                                    IT:"Pesca 1 carta dal  mazzo degli Oggetti dell'Orda corrispondente all'attuale Livello del Dungeon.",
                                    EN:"Draw 1 card from the Horde Item deck corresponding to the current Dungeon Level.",ES:"Roba 1 carta del mazo de Objetos de Horda correspondiente al Nivel de Mazmorra actual."
                                }
                            },{
                                tags:[ "loot", "item", "itemQuality2" ],
                                description:{
                                    IT:"Pesca 1 segnalino Tesoro dal sacchetto dei Tesori e pesca 1 carta oggetto Tesoro dal mazzo corrispondente.",
                                    EN:"Draw 1 Treasure token from the Treasure bag and draw 1 Treasure card from the corresponding deck.",ES:"Roba 1 marcador de Tesoro de la Bolsa del Tesoro y roba 1 carta de objeto de Tesoro del mazo correspondiente."
                                }
                            },{
                                tags:[ "loot", "item", "itemQuality3" ],
                                description:{
                                    IT:"Pesca 2 segnalini Tesoro dal sacchetto dei Tesori, scegline uno e pesca 1 carta oggetto Tesoro dal mazzo corrispondente.",
                                    EN:"Draw 2 Treasure tokens from the Treasure bag, choose one, and draw 1 Treasure card from the corresponding deck.",ES:"Roba 2 marcadores de Tesoro de la Bolsa del Tesoro, elige uno y roba 1 carta de objeto de Tesoro del mazo correspondiente."
                                }
                            },{
                                tags:[ "loot", "companion", "companionQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 17 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 17.",ES:"Roba la carta Campaña 17 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "companion", "companionQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 2 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 2.",ES:"Roba la carta Campaña 2 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "companion", "companionQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 24 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 24.",ES:"Roba la carta Campaña 24 de Heavenfall."
                                }
                            },
                            {
                                tags:[ "loot", "relic", "relicQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 11 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 11.",ES:"Roba la carta Campaña 11 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 26 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 26.",ES:"Roba la carta Campaña 26 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 21 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 21.",ES:"Roba la carta Campaña 21 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 8 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 8.",ES:"Roba la carta Campaña 8 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 25 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 25.",ES:"Roba la carta Campaña 25 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 14 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 14.",ES:"Roba la carta Campaña 14 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 16 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 16.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 16 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 19 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 19.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 19 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 9 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 9.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 9 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 13 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 13.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 13 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 18 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 18.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 18 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 23 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 23.",ES:"Roba la carta Campaña 23 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "placeImprovement", "placeImprovementA" ],
                                description:{
                                    IT:"Pesca la carta Campagna 22 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 22.",ES:"Roba la carta Campaña 22 de Heavenfall."
                                }
                            },{
                                tags:[ "loot", "item", "glory" ],
                                description:{
                                    IT:"Il tuo coraggio verr&agrave; ricordato per sempre!",
                                    EN:"Your courage will be remembered forever!",ES:"¡Tu valor será recordado para siempre!"
                                }
                            }
                            /*,{
                                // TODO Summoner ability (unsupported)
                                tags:[ "loot", "companionPower", "companionPowerQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 10 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 10."
                                }
                            }*/
                        ]
                    }
                ]
        },
        {
            id:"campaign",
            needs:[ ],
            provides:[ "generator-campaign" ],
            label:{
                EN:"Generates a campaign"
            },
            content:[
                {
                    type:"campaignProtectedNeeds",
                    data:[
                        "bridge-default-twoexits",
                        "bridge-default-fourexits",
                        "quests-mr-ending"
                    ]
                },
                {
                    type:"campaignFlags",
                    data:[
                        {
                            id:"place",
                            values:{
                                hellscape:{
                                    onlyNeeds:[ "md2-hellscape" ]
                                }
                            }
                        },
                        {
                            id:"mapSize",
                            default:"normal",
                            values:{
                                small:{
                                    needs:[ "maps-size-small" ],
                                    notNeeds:[ "maps-size-normal", "maps-size-large" ]
                                },
                                normal:{
                                    needs:[ "maps-size-normal" ],
                                    notNeeds:[ "maps-size-small", "maps-size-large" ]
                                },
                                large:{
                                    needs:[ "maps-size-large" ],
                                    notNeeds:[ "maps-size-normal", "maps-size-small" ]
                                }
                            }
                        },
                        {
                            id:"uniform",
                            default:"yes",
                            values:{
                                yes:{
                                    notNeeds:[ "maps-default-notuniform", "maps-default-split" ],
                                    needs:[ "maps-default-uniform" ],
                                },
                                no:{
                                    notNeeds:[ "maps-default-uniform", "maps-default-split" ],
                                    needs:[ "maps-default-notuniform" ]
                                },
                                split:{
                                    notNeeds:[ "maps-default-notuniform", "maps-default-uniform" ],
                                    needs:[ "maps-default-split" ]
                                }
                            }
                        },
                        {
                            id:"challenges",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "challenges-default" ]
                                },
                                no:{
                                    notNeeds:[ "challenges-default" ]
                                }
                            }
                        },
                        {
                            id:"dungeonCrawling",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "gamemode-dungeoncrawling" ]
                                },
                                no:{
                                    notNeeds:[ "gamemode-dungeoncrawling" ]
                                }
                            }
                        },
                        {
                            id:"bossFight",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "boss" ]
                                },
                                no:{
                                    notNeeds:[ "boss" ]
                                }
                            }
                        },
                        {
                            id:"defaults",
                            values:{
                                yes:{
                                    needs:[  "md2-hellscape", "quests", "maps-default", "campaign-default" ],
                                    notExclude:[ "generator-campaign", "campaign-full", "campaign-mini", "campaign-2shots", "campaign-upgradepack-cyclopsduo", "campaign-upgradepack-hellephant", "campaign-fourhorsemen", "campaign-darkbringer" ]
                                }
                            }
                        }
                    ]
                },{
                    type:"campaignActModels",
                    data:[
                        {
                            label:{
                                EN:"From uniform to split and then interdimensional."
                            },
                            words:[
                                [
                                    "dimension",
                                    "side",
                                    "plan"
                                ],[
                                    "shatter",
                                    "breaker",
                                    "scar"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        {
                                            place:"hellscape",
                                            uniform:"yes"
                                        }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"split" }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"no" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All uniform."
                            },
                            words:[
                                [
                                    "world",
                                    "land",
                                    "earth"
                                ],[
                                    "still",
                                    "hold",
                                    "stand"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        {
                                            place:"hellscape",
                                            uniform:"yes"
                                        }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"campaignCrawlingModels",
                    data:[
                        {
                            label:{
                                EN:"Hidden on last quests."
                            },
                            words:[
                                [
                                    "dungeon"
                                ],[
                                    "crawl"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { dungeonCrawling:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All hidden."
                            },
                            words:[
                                [
                                    "unknown"
                                ],[
                                    "blind"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { dungeonCrawling:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All visible."
                            },
                            words:[
                                [
                                    "sight"
                                ],[
                                    "light"
                                ]
                            ],
                            models:[]
                        }
                    ]
                }
            ]
        },{
            id:"campaign-standard",
            needs:[ ],
            provides:[ "generator-campaign-standard" ],
            label:{
                EN:"Modifiers for standard campaigns"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        campaignPreparation:{
                            EN:"Players must follow the preparation and Campaign rules described in <i>Massive Darkness 2: Heavenfall</i>. Each Mission lists any specific changes, special rules, and Campaign progression instructions.",ES:"Los jugadores deben seguir la preparación y las reglas de Campaña descritas en <i>Massive Darkness 2: Heavenfall</i>. Cada Misión indica los cambios específicos, reglas especiales e instrucciones de progresión de la Campaña.",
                            IT:"I giocatori devono seguire la preparazione e le regole della Campagna descritte in <i>Massive Darkness 2: Heavenfall</i>. Ogni Missione elenca eventuali cambiamenti specifici, regole speciali e istruzioni di progressione della Campagna."
                        }
                    }
                },
                {
                    type:"campaignMapModels",
                    data:[
                        {
                            label:{
                                EN:"Variable map size."
                            },
                            words:[
                                [
                                    "quest",
                                    "cruise",
                                    "hunt"
                                ],[
                                    "venture",
                                    "run",
                                    "seek"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { mapSize:"small" }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Normal-sized maps."
                            },
                            words:[
                                [
                                    "plain",
                                    "old",
                                    "flat"
                                ],[
                                    "cross",
                                    "even",
                                    "cast"
                                ]
                            ],
                            
                            models:[]
                        },{
                            label:{
                                EN:"Larger mid-maps."
                            },
                            words:[
                                [
                                    "chrono",
                                    "time",
                                    "point"
                                ],[
                                    "sand",
                                    "pass",
                                    "grow"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Start small, ends large."
                            },
                            words:[
                                [
                                    "ascent",
                                    "raise",
                                    "climax"
                                ],[
                                    "lift",
                                    "climb",
                                    "rise"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"small" }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"campaignRewardModels",
                    data:[
                        {
                            label:{
                                EN:"Gain relic/skill after bosses. Gain a companion halfway."
                            },
                            words:[
                                [
                                    "travel",
                                    "ride",
                                    "road"
                                ],[
                                    "flow",
                                    "slide",
                                    "drive"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2", "skillQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3", "skillQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "companion" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Challenge every mid-map."
                            },
                            words:[
                                [
                                    "challenge"
                                ],[
                                    "front"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "skillQuality2", "companionQuality1", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"A challenge on every boss."
                            },
                            words:[
                                [
                                    "leader"
                                ],[
                                    "lead"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "skillQuality2", "companionQuality1", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1 }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"A fixed challenge on every mid-map."
                            },
                            words:[
                                [
                                    "hell"
                                ],[
                                    "burn"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "skillQuality1", "companionQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "skillQuality2", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "relicQuality3", "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },{
            id:"campaign",
            needs:[ ],
            provides:[ "campaign-full" ],
            label:{
                EN:"Generates a full-length campaign"
            },
            content:[
                {
                    type:"campaignBossFightModels",
                    data:[
                        {
                            label:{
                                EN:"No boss fights."
                            },
                            words:[
                                [
                                    "blank",
                                    "void",
                                    "hollow"
                                ],[
                                    "blanker",
                                    "voider",
                                    "null"
                                ]
                            ],
                            models:[]
                        },{
                            label:{
                                EN:"Boss fights in the middle of acts 2 and the beginning of 3."
                            },
                            words:[
                                [
                                    "spike",
                                    "lance",
                                    "spear"
                                ],[
                                    "sting",
                                    "hurt",
                                    "bite"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:1 },
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights in the middle of acts 2 and 3."
                            },
                            words:[
                                [
                                    "hill",
                                    "center",
                                    "half"
                                ],[
                                    "strike",
                                    "split",
                                    "break"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights at the end of act 2 and in the middle of act 3."
                            },
                            words:[
                                [
                                    "ending",
                                    "final",
                                    "edge"
                                ],[
                                    "end",
                                    "close",
                                    "cut"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:2 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights at the end of all acts."
                            },
                            words:[
                                [
                                    "battle",
                                    "apex",
                                    "war"
                                ],[
                                    "slay",
                                    "drop",
                                    "out"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:2 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignModels",
                    data:[
                        {
                            type:"full",
                            label:{
                                EN:"3-acts linear campaign"
                            },
                            explanationKeys:[ "campaignExplanation" ],
                            summaryKeys:[ "campaignSummary" ],
                            campaignMode:{
                                EN:"{label.campaignMode}",ES:"{label.campaignMode}",
                                IT:"{label.campaignMode}",
                            },
                            story:[
                                [
                                    {
                                        IT:"Un vecchio incappucciato dalla barba rossa &egrave; apparso in citt&agrave;, trascinandosi per il mercato con il suo lungo bastone nodoso. ",
                                        EN:"A hooded old man with a red beard appeared in the city, dragging himself through the market with his long, gnarled stick. ",ES:"Un anciano encapuchado de barba roja apareció en la ciudad, arrastrándose por el mercado con su largo y nudoso bastón. "
                                    }
                                ],[
                                    {
                                        IT:"La notte successiva, un misterioso portale oscuro &egrave; stato trovato aperto poco fuori dalle mura. ",
                                        EN:"The next night, a mysterious dark portal was found open just outside the walls. ",ES:"A la noche siguiente, se encontró un misterioso portal oscuro abierto justo a las afueras de las murallas. "
                                    }
                                ],[
                                    {
                                        IT:"Per gli Eroi &egrave; tempo di indagare di nuovo...",
                                        EN:"It's time for the Heroes to investigate again...",ES:"Ha llegado el momento de que los Héroes investiguen de nuevo..."
                                    }
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        EN:"<p>As soon as the Heroes approach the portal, a whirlwind of light sucks them inside. Time and Space shatter. Something in their hearts breaks.</p>",ES:"<p>En cuanto los Héroes se acercan al portal, un torbellino de luz los succiona hacia dentro. El Tiempo y el Espacio se resquebrajan. Algo se rompe en sus corazones.</p>",
                                        IT:"<p>Non appena gli Eroi si avvicinano al portale, un turbine di luce li risucchia al suo interno. Il Tempo e lo Spazio si frantumano. Qualcosa nel loro cuore si spezza.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>Then they open their eyes again. Everything around them is all too familiar... Yet different. Are they living a dream?</p>",ES:"<p>Entonces abren los ojos de nuevo. Todo a su alrededor les resulta demasiado familiar... y sin embargo distinto. ¿Están viviendo un sueño?</p>",
                                        IT:"<p>Poi riaprono gli occhi. Tutto intorno &egrave; fin troppo familiare... Eppure diverso. Stanno vivendo un sogno?</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>A hoarse old man's voice echoes in their heads. He seems to clear his throat, and then recite... <i>(Go to <span class='gotopage' page='1'></span>)</i></p>",ES:"<p>Una voz ronca de anciano resuena en sus cabezas. Parece aclararse la garganta y luego recita... <i>(Ve a la <span class='gotopage' page='1'></span>)</i></p>",
                                        IT:"<p>Una voce grave da anziano rimbomba nella loro testa. Sembra schiarirsi la voce, per poi recitare... <i>(Andare a <span class='gotopage' page='1'></span>)</i></p>"
                                    }
                                ]
                            ],
                            achievementsCondition:{
                                IT:"<p>Durante la Fase Citt&agrave;, i giocatori controllano se hanno raggiunto gli obiettivi della Campagna, se ce ne sono. Ottengono la loro ricompensa la prima volta che ogni condizione viene soddisfatta. In questa Campagna sono i seguenti:</p>",
                                EN:"<p>During the Town Phase, players check if they have accomplished the Campaign achievements, if any. They gain their reward the first time each condition is met. In this Campaign they are the following:</p>",ES:"<p>Durante la Fase de Ciudad, los jugadores comprueban si han conseguido los logros de la Campaña, si los hay. Obtienen su recompensa la primera vez que se cumple cada condición. En esta Campaña son los siguientes:</p>"
                            },
                            achievements:[
                                {
                                    condition:{
                                        IT:"Completare 3 Missioni Secondarie",
                                        EN:"Complete 3 Side Quests",ES:"Completa 3 Misiones Secundarias"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 1 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 1",ES:"Roba la carta Campaña 1 de Heavenfall"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Interagire con il Vicolo del Gioco d'Azzardo 4 volte",
                                        EN:"Interact with the Gambling Alley 4 times",ES:"Interactúa con el Callejón del Juego 4 veces"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 3 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 3",ES:"Roba la carta Campaña 3 de Heavenfall"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Durante la Fase della Citt&agrave;, scartare 5 carte Pozione dal nome diverso simultaneamente, senza ottenere nessun effetto",
                                        EN:"During the Town Phase, discard 5 Potion cards with different names at once, with no effect",ES:"Durante la Fase de Ciudad, descarta 5 cartas de Poción con nombres distintos a la vez, sin efecto"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 4 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 4",ES:"Roba la carta Campaña 4 de Heavenfall"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Ottenere il Potere Maggiore del Set Portatore di Oscurit&agrave; (4+ parti)",
                                        EN:"Obtain the Greater Power of the Darkbringer Set (4+ parts)",ES:"Obtén el Mayor Poder del Set Darkbringer (4+ partes)"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"L'Eroe con il potere Maggiore ottiene la carta Campagna 5 di Heavenfall",
                                                EN:"The Hero with the Greater power gains Heavenfall Campaign card 5",ES:"El Héroe con el Mayor Poder gana la carta Campaña 5 de Heavenfall"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Ottenere il Potere Maggiore del Set Fuoco Infernale (4+ parti)",
                                        EN:"Obtain the Greater Power of the Hellfire Set (4+ parts)",ES:"Obtén el Mayor Poder del Set Fuego Infernal (4+ partes)"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"L'eroe con il potere Maggiore ottiene la carta Campagna 6 di Heavenfall",
                                                EN:"The Hero with the Greater power gains Heavenfall Campaign card 6",ES:"El Héroe con el Mayor Poder gana la carta Campaña 6 de Heavenfall"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Perdere la stessa Missione 2 volte (questo Traguardo pu&ograve; essere completato in qualsiasi momento, anche fuori dalla fase citt&agrave;)",
                                        EN:"Lose the same Quest 2 times (this Achievement may be accomplished at any moment, even out of the Town Phase)",ES:"Pierde la misma Misión 2 veces (este Logro puede conseguirse en cualquier momento, incluso fuera de la Fase de Ciudad)"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 7 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 7",ES:"Roba la carta Campaña 7 de Heavenfall"
                                            }
                                        }
                                    ]
                                }
                            ],
                            questPhase:{
                                IT:"{label.campaignQuestPhaseDescription}",
                                EN:"{label.campaignQuestPhaseDescription}",ES:"{label.campaignQuestPhaseDescription}"
                            },
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        IT:"Copertina",
                                        EN:"Cover",ES:"Portada"
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:0,
                                        }
                                    ],
                                    name:{
                                        IT:"Atto I &dash; Missione A",
                                        EN:"Act I &dash; Mission A",ES:"Acto I &dash; Misión A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Eccoli qua!&raquo; grida qualcuno da lontano. Una piccola pattuglia di guardie cittadine si avvicina agli Eroi.</p>",
                                                    EN:"<p>&laquo;Here they are!&raquo; someone shouts from afar. A small patrol of city guards approaches the Heroes.</p>",ES:"<p>&laquo;¡Ahí están!&raquo; grita alguien a lo lejos. Una pequeña patrulla de guardias de la ciudad se acerca a los Héroes.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Il portale oscuro si trova all'ingresso ovest! Seguiteci!&raquo; la voce delle guardie sparisce pian piano, coperta dal brusio del mercato. Come &egrave; possibile che gli Eroi si trovassero nuovamente in citt&agrave;?</p>",
                                                    EN:"<p>&laquo;The dark portal is at the western entrance! Follow us!&raquo; the voices of the guards slowly disappear, covered by the buzz of the market. How is it possible that the Heroes found themselves in the city again?</p>",ES:"<p>&laquo;¡El portal oscuro está en la entrada oeste! ¡Seguidnos!&raquo; las voces de los guardias se van perdiendo poco a poco, cubiertas por el bullicio del mercado. ¿Cómo es posible que los Héroes se encuentren de nuevo en la ciudad?</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Aggiungere 3 segnalini Tesoro Raro al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Add 3 Rare Treasure tokens to the Treasure bag.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Añade 3 marcadores de Tesoro Raro a la Bolsa del Tesoro."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Il capo delle guardie si ferma a una ventina di passi dal vortice sospeso a mezz'aria, nei pressi dell'ingresso ovest della citt&agrave;. &laquo;Eccolo.&raquo; dice con un filo di voce.</p>",
                                                    EN:"<p>The guard leader stops about twenty steps from the vortex suspended in mid-air, near the western entrance to the city. &laquo;There it is.&raquo; he says in a thread of a voice.</p>",ES:"<p>El líder de la guardia se detiene a unos veinte pasos del vórtice suspendido en el aire, cerca de la entrada oeste de la ciudad. &laquo;Ahí está.&raquo; dice con un hilo de voz.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi si avviano verso il portale quando il capo delle guardie aggiunge: &laquo;Se non tornate entro tre ore, mander&ograve; i miei uomini a cercarvi. Fate attenzione!&raquo;</p>",
                                                    EN:"<p>The Heroes head toward the portal when the chief guard adds, &laquo;If you don't return within three hours, I'll send my men after you. Be careful!&raquo;</p>",ES:"<p>Los Héroes se dirigen hacia el portal cuando el jefe de la guardia añade: &laquo;Si no regresáis en tres horas, enviaré a mis hombres a buscaros. ¡Tened cuidado!&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Risucchiati uno a uno dal misterioso portale, gli Eroi viaggiano per qualche secondo, per riaprire poi gli occhi... in un nuovo ricordo?</p>",
                                                    EN:"<p>Sucked one by one into the mysterious portal, the Heroes travel for a few seconds, only to reopen their eyes... to a new memory?</p>",ES:"<p>Succionados uno a uno por el misterioso portal, los Héroes viajan durante unos segundos, solo para volver a abrir los ojos... ante un nuevo recuerdo?</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='2'></span>.",
                                                EN:"Go to <span class='gotopage' page='2'></span>.",ES:"Ve a la <span class='gotopage' page='2'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Atto I &dash; Missione B",
                                        EN:"Act I &dash; Mission B",ES:"Acto I &dash; Misión B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Non basta ancora. Mi serve ancora pi&ugrave; entropia...&raquo; una familiare voce da anziano diventa sempre pi&ugrave; acuta, per diventare un fischio.</p>",
                                                    EN:"<p>&laquo;It's still not enough. I need even more entropy...&raquo; a familiar old man's voice becomes increasingly high-pitched, becoming a whistle.</p>",ES:"<p>&laquo;Aún no es suficiente. Necesito todavía más entropía...&raquo; una voz de anciano, familiar, se vuelve cada vez más aguda, hasta convertirse en un silbido.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi riprendono i sensi. &laquo;Ah!&raquo; esclama il capo delle guardie. &laquo;Stavo per raggiungervi al mercato ma vedo che avete trovato il portale da soli!&raquo; aggiunge con un sorriso sollevato.</p>",
                                                    EN:"<p>The Heroes regain their senses. &laquo;Ah!&raquo; exclaims the guards leader. &laquo;I was about to meet you at the market, but I see you found the portal on your own!&raquo; he adds with a relieved smile.</p>",ES:"<p>Los Héroes recobran el sentido. &laquo;¡Ah!&raquo; exclama el líder de la guardia. &laquo;Iba a reuniros en el mercado, pero veo que habéis encontrado el portal por vuestra cuenta!&raquo; añade con una sonrisa de alivio.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi si guardano tra di loro smarriti mentre il portale si chiude dietro le loro spalle. Il tempo sta andando in frantumi. Non c'&egrave; un attimo da perdere.</p>",
                                                    EN:"<p>The Heroes look at each other in bewilderment as the portal closes behind them. Time is falling apart. There is not a moment to lose.</p>",ES:"<p>Los Héroes se miran unos a otros desconcertados mientras el portal se cierra tras ellos. El Tiempo se está desmoronando. No hay un momento que perder.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Comune e aggiungere 1 segnalino Tesoro Raro.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Common Treasure tokens and add 1 Rare Treasure token.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 2 marcadores de Tesoro Común y añade 1 marcador de Tesoro Raro."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>La notte successiva l'intera citt&agrave; viene svegliata da un terribile ruggito.</p>",
                                                    EN:"<p>The next night, the entire city is awakened by a terrible roar.</p>",ES:"<p>A la noche siguiente, toda la ciudad se despierta con un rugido terrible.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Proviene dal portale, apertosi nuovamente presso l'ingresso ovest della citt&agrave;. Qualcosa di terribile sta attendendo gli Eroi. Non perdono tempo e, con un balzo, si gettano nuovamente nell'ignoto.</p>",
                                                    EN:"<p>It comes from the portal, which had opened again at the western entrance to the city. Something terrible is waiting for the Heroes. They waste no time and, with a leap, throw themselves again into the unknown.</p>",ES:"<p>Procede del portal, que se había abierto de nuevo en la entrada oeste de la ciudad. Algo terrible espera a los Héroes. Sin perder tiempo, se lanzan de un salto de nuevo hacia lo desconocido.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='3'></span>.",
                                                EN:"Go to <span class='gotopage' page='3'></span>.",ES:"Ve a la <span class='gotopage' page='3'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Atto I &dash; Missione C",
                                        EN:"Act I &dash; Mission C",ES:"Acto I &dash; Misión C"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Un forte fischio rimbomba nelle orecchie. Gli Eroi riaprono gli occhi in un letto della taverna cittadina, ancora immersa nella notte fonda.</p>",
                                                    EN:"<p>A loud whistle rings in their ears. The Heroes wake up in a bed in the town tavern, still deep in the night.</p>",ES:"<p>Un fuerte silbido resuena en sus oídos. Los Héroes despiertan en una cama de la taberna del pueblo, todavía en plena noche.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Il gruppo si riunisce d'urgenza davanti all'ingresso ovest della citt&agrave;. Ad attenderli c'&egrave; un vecchio sorridente, dalla barba rossa. &laquo;Ecco i famosi Eroi! Posso invitarvi per una partita a dadi?&raquo;</p>",
                                                    EN:"<p>The group urgently gathers in front of the city's west entrance. A smiling old man with a red beard awaits them. &laquo;Here are the famous Heroes! May I invite you for a game of dice?&raquo;</p>",ES:"<p>El grupo se reúne apresuradamente frente a la entrada oeste de la ciudad. Un sonriente anciano de barba roja los espera. &laquo;¡Aquí están los famosos Héroes! ¿Me permitís invitaros a una partida de dados?&raquo;</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 13 PE</li><li>3-4 Eroi: 17 PE</li><li>5-6 Eroi: 21 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 13 XP</li><li>3-4 Heroes: 17 XP</li ><li>5-6 Heroes: 21 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 13 PE</li><li>3-4 Héroes: 17 PE</li><li>5-6 Héroes: 21 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 3 segnalini Tesoro Comune e aggiungere 2 segnalino Tesoro Epico.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 3 Common Treasure tokens and add 2 Epic Treasure tokens.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 3 marcadores de Tesoro Común y añade 2 marcadores de Tesoro Épico."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Sei tu il responsabile, maledetto!&raquo; esclama uno degli Eroi. Il vecchio rotea i dadi tra le dita, con un sorriso mite sul viso.</p>",
                                                    EN:"<p>&laquo;You're the one responsible, damn you!&raquo; exclaims one of the Heroes. The old man rolls the dice between his fingers, with a gentle smile.</p>",ES:"<p>&laquo;¡Tú eres el responsable, maldito seas!&raquo; exclama uno de los Héroes. El anciano hace girar los dados entre sus dedos, con una sonrisa amable.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Suvvia. So bene che vi state divertendo!&raquo; sussurra tra s&eacute; e s&eacute; il vecchio. Il gruppo di Eroi gli &egrave; addosso in un lampo, ma un nuovo portale oscuro si apre d'un tratto, trascinandoli per l'ennesima volta in un tempo sconosciuto.</p>",
                                                    EN:"<p>&laquo;Come on. I know you're having fun!&raquo; the old man whispers to himself. The group of Heroes is upon him in a flash, but a new dark portal suddenly opens, dragging them once again into an unknown time.</p>",ES:"<p>&laquo;Vamos. ¡Sé que os lo estáis pasando bien!&raquo; susurra el anciano para sí mismo. El grupo de Héroes está sobre él en un instante, pero un nuevo portal oscuro se abre de repente, arrastrándolos de nuevo hacia un tiempo desconocido.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='4'></span>.",
                                                EN:"Go to <span class='gotopage' page='4'></span>.",ES:"Ve a la <span class='gotopage' page='4'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        IT:"Atto II &dash; Missione A",
                                        EN:"Act II &dash; Mission A",ES:"Acto II &dash; Misión A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Questa volta non c'&egrave; alcun fischio. Solo un lento applauso. &laquo;Ottimo lavoro, Eroi!&raquo; il vecchio dalla barba rossa spunta da un cunicolo, con lo sguardo pieno di orgoglio.</p>",
                                                    EN:"<p>This time, there is no whistle. Just a slow round of applause. &laquo;Good job, Heroes!&raquo; the old man with a red beard emerges from a tunnel, his gaze full of pride.</p>",ES:"<p>Esta vez no hay silbido. Solo una lenta ronda de aplausos. &laquo;¡Buen trabajo, Héroes!&raquo; el anciano de barba roja emerge de un túnel, con la mirada llena de orgullo.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Cosa ci sta accadendo? Dove siamo?&raquo; chiede uno degli Eroi piegato sulla sua arma, senza fiato e confuso.</p>",
                                                    EN:"<p>&laquo;What is happening to us? Where are we?&raquo; asks one of the Heroes, bent over his weapon, breathless and confused.</p>",ES:"<p>&laquo;¿Qué nos está pasando? ¿Dónde estamos?&raquo; pregunta uno de los Héroes, encorvado sobre su arma, sin aliento y confundido.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Oh! Oh!&raquo; esclama il vecchio, sorridendo ed estraendo una fiala rossa dalla larga manica della sua tunica. &laquo;Bevi questa pozione curativa. Vi racconter&ograve; tutto strada facendo.&raquo;. Quindi, con passo lento, il vecchio rosso si allontana.</p>",
                                                    EN:"<p>&laquo;Oh! Oh!&raquo; exclaims the old man, smiling and taking a red vial from the wide sleeve of his tunic. &laquo;Drink this healing potion. I will tell you all about it on the way.&raquo;. Then, with a slow pace, the old red man walks away.</p>",ES:"<p>&laquo;¡Oh! ¡Oh!&raquo; exclama el anciano, sonriendo mientras saca un vial rojo de la ancha manga de su túnica. &laquo;Bebed esta poción curativa. Os lo contaré todo por el camino.&raquo;. Después, con paso lento, el viejo pelirrojo se aleja.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 8 PE</li><li>3-4 Eroi: 12 PE</li><li>5-6 Eroi: 16 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 8 XP</li><li>3-4 Heroes: 12 XP</li ><li>5-6 Heroes: 16 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 8 PE</li><li>3-4 Héroes: 12 PE</li><li>5-6 Héroes: 16 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 3 segnalini Tesoro Comune e aggiungere 2 segnalino Tesoro Epico.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 3 Common Treasure tokens and add 2 Epic Treasure tokens.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 3 marcadores de Tesoro Común y añade 2 marcadores de Tesoro Épico."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Il vecchio dalla barba rossa sta mescolando un profumato stufato in un paiolo, allestito nel mezzo di una vallata verdeggiante. &laquo;Abbiamo bisogno del vostro aiuto, Eroi.&raquo; dice, sorseggiando il brodo.</p>",
                                                    EN:"<p>The old man with a red beard is stirring a fragrant stew in a pot set up in the middle of a green valley. &laquo;We need your help, Heroes.&raquo; he says, sipping the broth.</p>",ES:"<p>El anciano de barba roja remueve un guiso perfumado en una olla instalada en medio de un verde valle. &laquo;Necesitamos vuestra ayuda, Héroes.&raquo; dice, mientras sorbe el caldo.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Con gesti lenti e precisi, il vecchio riempie un piatto per ogni Eroe. &laquo;Mangiate.&raquo; esorta l'anziano. Quando il cucchiaio sfiora le labbra degli Eroi, un nuovo strano ricordo li rapisce...</p>",
                                                    EN:"<p>With slow, precise gestures, the old man fills a plate for each Hero. &laquo;Eat.&raquo; the old man urges. When the spoon touches the Heroes' lips, a new, strange memory captures them...</p>",ES:"<p>Con gestos lentos y precisos, el anciano llena un plato para cada Héroe. &laquo;Comed.&raquo; insiste el anciano. Cuando la cuchara toca los labios de los Héroes, un nuevo y extraño recuerdo los atrapa...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='5'></span>.",
                                                EN:"Go to <span class='gotopage' page='5'></span>.",ES:"Ve a la <span class='gotopage' page='5'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Atto II &dash; Missione B",
                                        EN:"Act II &dash; Mission B",ES:"Acto II &dash; Misión B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Gli Eroi gonfiano il petto pieni di orgoglio. Non si sono mai sentiti cos&igrave; vivi! Hanno vinto e salvato il mondo ancora una volta!</p>",
                                                    EN:"<p>The Heroes puff out their chests with pride. They have never felt so alive! They have won and saved the world once again!</p>",ES:"<p>Los Héroes hinchan el pecho de orgullo. ¡Nunca se habían sentido tan vivos! ¡Han vencido y salvado el mundo una vez más!</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;&Egrave; di questo che abbiamo bisogno. Di Eroi senza paura.&raquo; il vecchio bisbiglia chino dietro un cumulo di rocce.</p>",
                                                    EN:"<p>&laquo;This is what we need. Heroes without fear.&raquo; the old man whispers, bent over a pile of rocks.</p>",ES:"<p>&laquo;Esto es lo que necesitamos. Héroes sin miedo.&raquo; susurra el anciano, inclinado sobre un montón de rocas.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Uno degli Eroi sorprende il vecchio alle spalle, ignaro di essere osservato. Con un guizzo ne blocca i polsi e chiede &laquo;Chi sarebbero questi 'noi', maledetto vecchio?&raquo;</p>",
                                                    EN:"<p>One of the Heroes surprises the old man from behind, unaware that he is being watched. With a jump, it locks his wrists and asks &laquo;Who are these 'us', damn old man?&raquo;</p>",ES:"<p>Uno de los Héroes sorprende al anciano por detrás, sin que este se dé cuenta de que lo observan. De un salto, le inmoviliza las muñecas y pregunta &laquo;¿Quiénes son ese 'nosotros', maldito anciano?&raquo;</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Comune, aggiungere 2 segnalino Tesoro Epico e 2 segnalini Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Common Treasure tokens, add 2 Epic Treasure tokens, and 2 Legendary Treasure tokens.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 2 marcadores de Tesoro Común, añade 2 marcadores de Tesoro Épico y 2 marcadores de Tesoro Legendario."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Chiuso nella cella cittadina da diversi giorni, il vecchio dalla barba rossa non ha ancora detto nemmeno una parola. Gli Eroi, nel frattempo, brancolano nel buio.</p>",
                                                    EN:"<p>Locked up in the city jail for several days, the old man with a red beard has not said a single word. The Heroes, meanwhile, are groping in the dark.</p>",ES:"<p>Encerrado en la cárcel de la ciudad durante varios días, el anciano de barba roja no ha dicho ni una sola palabra. Los Héroes, mientras tanto, andan a tientas en la oscuridad.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>La citt&agrave; somiglia a quella che conoscono ma ponti, negozi e santuari sono in posizioni differenti da quelle che ricordano.</p>",
                                                    EN:"<p>The city resembles the one they know, but the bridges, shops, and shrines are in different locations than they remember.</p>",ES:"<p>La ciudad se parece a la que conocen, pero los puentes, las tiendas y los santuarios están en lugares distintos a los que recuerdan.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Un giorno, un ragazzino dai piedi scalzi si avvicina agli Eroi, con un messaggio indirizzato a loro. Gli Eroi srotolano la pergamena e, con loro sorpresa, leggono...</p>",
                                                    EN:"<p>One day, a barefoot boy approaches the Heroes, with a message addressed to them. The Heroes unroll the scroll and, to their surprise, read...</p>",ES:"<p>Un día, un chico descalzo se acerca a los Héroes con un mensaje dirigido a ellos. Los Héroes desenrollan el pergamino y, para su sorpresa, leen...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='6'></span>.",
                                                EN:"Go to <span class='gotopage' page='6'></span>.",ES:"Ve a la <span class='gotopage' page='6'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Atto II &dash; Missione C",
                                        EN:"Act II &dash; Mission C",ES:"Acto II &dash; Misión C"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Questa pergamena... Parla di noi.&raquo; dice uno degli Eroi confuso. &laquo;Ma non ricordo nulla di questa avventura... E cosa sono queste tessere e segnalini?&raquo; continua.</p>",
                                                    EN:"<p>&laquo;This scroll... It speaks of us.&raquo; says one of the Heroes confused. &laquo;But I don't remember anything about this adventure... And what are these tiles and tokens?&raquo; it continues.</p>",ES:"<p>&laquo;Este pergamino... habla de nosotros.&raquo; dice uno de los Héroes, confundido. &laquo;Pero no recuerdo nada de esta aventura... ¿Y qué son estas losetas y marcadores?&raquo; continúa.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Portiamola al vecchio.&raquo; risponde un compagno. &laquo;Dobbiamo farlo parlare.&raquo;. Il gruppo s'incammina verso la prigione cittadina.</p>",
                                                    EN:"<p>&laquo;Let's take it to the old man.&raquo; replies a companion. &laquo;We have to make him talk.&raquo;. The group heads towards the city prison.</p>",ES:"<p>&laquo;Llevémoslo ante el anciano.&raquo; responde un compañero. &laquo;Tenemos que hacerlo hablar.&raquo;. El grupo se dirige hacia la prisión de la ciudad.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalino Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and add 1 Legendary Treasure token.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 2 marcadores de Tesoro Raro y añade 1 marcador de Tesoro Legendario."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;&Egrave; accaduto, quindi.&raquo; esclama pensieroso il vecchio. &laquo;Si &egrave; messa in moto.&raquo;</p>",
                                                    EN:"<p>&laquo;It happened, then.&raquo; the old man exclaims thoughtfully. &laquo;It started moving.&raquo;</p>",ES:"<p>&laquo;Así que ha ocurrido.&raquo; exclama el anciano, pensativo. &laquo;Ha empezado a moverse.&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Di chi parli, vecchio?&raquo; ribatte nervoso uno degli Eroi. &laquo;Siamo stufi dei tuoi misteri!&raquo;</p>",
                                                    EN:"<p>&laquo;Who are you talking about, old man?&raquo; one of the Heroes replies nervously. &laquo;We are tired of your mysteries!&raquo;</p>",ES:"<p>&laquo;¿De quién hablas, anciano?&raquo; responde uno de los Héroes, nervioso. &laquo;¡Estamos cansados de tus misterios!&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Lo vedrete con i vostri occhi, Eroi!&raquo; un piccolo dardo punge il collo degli Eroi, che cadono in un sonno apparentemente senza fine...</p>",
                                                    EN:"<p>&laquo;You will see it with your own eyes, Heroes!&raquo; a small dart pricks the Heroes' necks, and they fall into a seemingly endless sleep...</p>",ES:"<p>&laquo;¡Lo veréis con vuestros propios ojos, Héroes!&raquo; un pequeño dardo pincha el cuello de los Héroes, que caen en un sueño aparentemente infinito...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='7'></span>.",
                                                EN:"Go to <span class='gotopage' page='7'></span>.",ES:"Ve a la <span class='gotopage' page='7'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        IT:"Atto III &dash; Missione A",
                                        EN:"Act III &dash; Mission A",ES:"Acto III &dash; Misión A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Nulla di tutto questo ha senso, amici.&raquo; sussurra pensieroso uno degli Eroe. &laquo;Sembra che...&raquo;</p>",
                                                    EN:"<p>&laquo;None of this makes sense, friends.&raquo; one of the Heroes whispers thoughtfully. &laquo;It seems that...&raquo;</p>",ES:"<p>&laquo;Nada de esto tiene sentido, amigos.&raquo; susurra uno de los Héroes, pensativo. &laquo;Parece que...&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;...che il caso stia muovendo il vostro destino.&raquo; con un colpo violento del bastone a terra, il vecchio rosso sveglia gli Eroi.</p>",
                                                    EN:"<p>&laquo;...that chance is moving your destiny.&raquo; with a violent blow of the stick on the ground, the old red man wakes the Heroes.</p>",ES:"<p>&laquo;...que el azar está moviendo vuestro destino.&raquo; con un violento golpe del bastón contra el suelo, el viejo pelirrojo despierta a los Héroes.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Ora che ha mostrato il suo volto, non c'&egrave; tempo da perdere.&raquo; i gesti nell'aria del vecchio formano un cubo di luce. &laquo;Dovete eliminarla.&raquo;</p>",
                                                    EN:"<p>&laquo;Now that she has shown her face, there is no time to waste.&raquo; the old man's gestures in the air form a cube of light. &laquo;You must eliminate her.&raquo;</p>",ES:"<p>&laquo;Ahora que ha mostrado su rostro, no hay tiempo que perder.&raquo; los gestos del anciano en el aire forman un cubo de luz. &laquo;Debéis eliminarla.&raquo;</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalino Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and add 1 Legendary Treasure token.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 2 marcadores de Tesoro Raro y añade 1 marcador de Tesoro Legendario."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;La Casualit&agrave; Massiccia?&raquo; chiede uno degli Eroi, poggiato a una colonna.</p>",
                                                    EN:"<p>&laquo;The Massive Randomness?&raquo; asks one of the Heroes, leaning against a column.</p>",ES:"<p>&laquo;¿La Casualidad Masiva?&raquo; pregunta uno de los Héroes, apoyado contra una columna.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Esattamente. Una creatura di puro caos, che tiene imprigionato questo mondo da secoli.&raquo; risponde il vecchio, dando una boccata a una lunga pipa.</p>",
                                                    EN:"<p>&laquo;Exactly. A creature of pure chaos, holding this world captive for centuries.&raquo; the old man replies, taking a puff on a long pipe.</p>",ES:"<p>&laquo;Exactamente. Una criatura de puro caos, que mantiene cautivo este mundo desde hace siglos.&raquo; responde el anciano, dando una calada a una larga pipa.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Portaci da lei. &Egrave; arrivato il momento di porre fine al suo maleficio.&raquo; dice l'Eroe, slanciandosi verso di lui.</p>",
                                                    EN:"<p>&laquo;Take us to him. It is time to end his curse.&raquo; says the Hero, rushing toward him.</p>",ES:"<p>&laquo;Llevadnos ante ella. Es hora de acabar con su maldición.&raquo; dice el Héroe, precipitándose hacia él.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Oh, certamente!&raquo; risponde il vecchio. &laquo;Ma vi manca un'ultima avventura!&raquo;. Cosa succede?!</p>",
                                                    EN:"<p>&laquo;Oh, certainly!&raquo; replies the old man. &laquo;But there is one last adventure for you!&raquo;. What's going on?!</p>",ES:"<p>&laquo;¡Oh, por supuesto!&raquo; responde el anciano. &laquo;¡Pero os queda una última aventura!&raquo;. ¿Qué está pasando?</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='8'></span>.",
                                                EN:"Go to <span class='gotopage' page='8'></span>.",ES:"Ve a la <span class='gotopage' page='8'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Atto III &dash; Missione B",
                                        EN:"Act III &dash; Mission B",ES:"Acto III &dash; Misión B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Gli Eroi si distribuiscono i punti esperienza tra loro. Riflettono sull'arma pi&ugrave; adeguata. Meglio tirare due dadi arancio o un dado rosso?</p>",
                                                    EN:"<p>The Heroes distribute the experience points among themselves. They think about the most suitable weapon. Is it better to roll two orange dice or one red die?</p>",ES:"<p>Los Héroes se reparten los puntos de experiencia entre ellos. Piensan en el arma más adecuada. ¿Es mejor tirar dos dados naranjas o un dado rojo?</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi non sanno pi&ugrave; chi sono.</p>",
                                                    EN:"<p>The Heroes no longer know who they are.</p>",ES:"<p>Los Héroes ya no saben quiénes son.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Incontreranno la Casualit&agrave; Massiccia?</p>",
                                                    EN:"<p>Will they encounter the Massive Randomness?</p>",ES:"<p>¿Se encontrarán con la Casualidad Masiva?</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Fate un bel respiro, Giocatori.&raquo; vi sussurra il vecchio. &laquo;Se il mio rituale ha avuto successo, state per incontrare la Casualit&agrave; Massiccia.&raquo;</p>",
                                                    EN:"<p>&laquo;Take a deep breath, Players.&raquo; the old man whispers to you. &laquo;If my ritual was successful, you are about to meet the Massive Randomness.&raquo;</p>",ES:"<p>&laquo;Respirad hondo, Jugadores.&raquo; os susurra el anciano. &laquo;Si mi ritual ha funcionado, estáis a punto de encontraros con la Casualidad Masiva.&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Ma potrei sbagliarmi! Ormai ho una certa et&agrave;!&raquo; continua sghignazzando. &laquo;Spero comunque di rivedervi.&raquo; sussurra ancora. &laquo;E non dimenticate di portare la vostra voglia di giocare con voi!&raquo;.</p>",
                                                    EN:"<p>&laquo;But I could be wrong! I'm getting on in years!&raquo; he says, snickering. &laquo;I hope to see you again, though.&raquo; he whispers again. &laquo;And don't forget to bring your desire to play with you!&raquo;.</p>",ES:"<p>&laquo;¡Pero podría equivocarme! ¡Ya no soy joven!&raquo; dice, riendo por lo bajo. &laquo;Espero volver a veros, de todos modos.&raquo; susurra de nuevo. &laquo;¡Y no olvidéis traer con vosotros las ganas de jugar!&raquo;.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='9'></span>.",
                                                EN:"Go to <span class='gotopage' page='9'></span>.",ES:"Ve a la <span class='gotopage' page='9'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Atto III &dash; Missione C",
                                        EN:"Act III &dash; Mission C",ES:"Acto III &dash; Misión C"
                                    },
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    IT:"<p>Il vecchio rosso si dissolve nel nulla, dimenticato da tutti. Lo ha fatto con un grido? Lo ha fatto in silenzio? Nessuno lo sa veramente.</p>",
                                                    EN:"<p>The red old man dissolves into nothingness, forgotten by all. Did he do it with a scream? Did he do it in silence? No one knows.</p>",ES:"<p>El viejo pelirrojo se disuelve en la nada, olvidado por todos. ¿Lo hizo con un grito? ¿Lo hizo en silencio? Nadie lo sabe.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Il caos continua a osservarvi da dietro l'oscuro portale, sfidandovi con presunzione. Ma voi lo affrontate ogni giorno. E lo affronterete ancora e ancora. Un brivido di orgoglio vi attraversa la schiena.</p>",
                                                    EN:"<p>Chaos continues to watch from behind the dark portal, challenging you with presumption. But you face it every day. And you will face it again and again. A shiver of pride runs down your spine.</p>",ES:"<p>El Caos sigue observando desde detrás del portal oscuro, desafiándoos con arrogancia. Pero vosotros lo enfrentáis cada día. Y volveréis a enfrentarlo una y otra vez. Un escalofrío de orgullo recorre vuestra espalda.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Avete vinto!</p>",
                                                    EN:"<p>You win!</p>",ES:"<p>¡Habéis ganado!</p>"
                                                }
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },{
            id:"campaign",
            needs:[ ],
            provides:[ "campaign-mini" ],
            label:{
                EN:"Generates a mini-campaign with boss battle at the end"
            },
            content:[
                {
                    type:"campaignBossFightModels",
                    data:[
                        {
                            label:{
                                EN:"Boss fights at the end of the campaign."
                            },
                            words:[
                                [
                                    "ending",
                                    "final",
                                    "edge"
                                ],[
                                    "end",
                                    "close",
                                    "cut"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { bossFight:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignModels",
                    data:[
                        {
                            type:"mini",
                            label:{
                                EN:"4-quests linear campaign"
                            },
                            campaignMode:{
                                EN:"{label.miniCampaignMode}",ES:"{label.miniCampaignMode}",
                                IT:"{label.miniCampaignMode}",
                            },
                            explanationKeys:[ "miniCampaignExplanation", "campaignExplanation" ],
                            summaryKeys:[ "miniCampaignSummary", "campaignSummary" ],
                            story:[
                                [
                                    {
                                        IT:"Un gruppo di ragazzi sghignazza attorno a un fuoco, che brilla vivace nella radura. ",
                                        EN:"A group of boys snicker around a fire, which glows brightly in the clearing. ",ES:"Un grupo de chicos ríe por lo bajo alrededor de una hoguera, que brilla con fuerza en el claro. "
                                    }
                                ],[
                                    {
                                        IT:"Un pellegrino affaticato trova posto su roccia poco distante. ",
                                        EN:"A weary pilgrim finds a place on a nearby rock. ",ES:"Un peregrino cansado encuentra un sitio en una roca cercana. "
                                    }
                                ],[
                                    {
                                        IT:"Dal cappuccio appare il viso sorridente di un vecchio dalla barba rossa. ",
                                        EN:"From behind the hood appears the smiling face of an old man with a red beard. ",ES:"Bajo la capucha aparece el rostro sonriente de un anciano de barba roja. "
                                    }
                                ],[
                                    {
                                        IT:"D'improvviso cala il silenzio...",
                                        EN:"Suddenly silence falls...",ES:"De repente cae el silencio..."
                                    }
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        EN:"<p>\"Who are you?\" asks the shyest of the young men with a trembling voice.</p>",ES:"<p>\"¿Quién eres?\" pregunta el más tímido de los jóvenes con voz temblorosa.</p>",
                                        IT:"<p>\"Chi sei?\" chiede con voce tremante il pi&ugrave; timido dei giovani.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>The old man, with a gentle smile, replies: \"Oh, I'm just a traveler with a few too many ailments!\". Then, grinning and becoming gloomy, he adds: \"I am a Collector of Stories. Stories of brave Heroes who live every day one step away from death!\"</p>",ES:"<p>El anciano, con una sonrisa amable, responde: \"Oh, solo soy un viajero con demasiados achaques.\". Luego, esbozando una sonrisa que se torna sombría, añade: \"Soy un Coleccionista de Historias. Historias de valientes Héroes que viven cada día a un paso de la muerte.\"</p>",
                                        IT:"<p>Il vecchio, con un sorriso mite, risponde: \"Oh, sono solo un viandante con qualche acciacco di troppo!\". Poi, ghignando e facendosi cupo, aggiunge: \"Sono un Collezionista di Storie. Storie di Eroi coraggiosi che vivono ogni giorno ad un passo dalla morte!\"</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>\"Re... really?\" A young girl raises her hand to her mouth, wide open with enthusiasm. \"Come on, old man. Let's hear one!\" says the most robust and skeptical of the group, jumping to his feet.</p>",ES:"<p>\"¿De... de verdad?\" Una joven se lleva la mano a la boca, abierta de par en par por el entusiasmo. \"Vamos, anciano. ¡Cuéntanos una!\" dice el más robusto y escéptico del grupo, poniéndose en pie de un salto.</p>",
                                        IT:"<p>\"Da... davvero?\" Una ragazzina porta la mano alla bocca spalancata dall'entusiasmo. \"Avanti, vecchio. Sentiamone una!\" dice balzando in piedi il pi&ugrave; robusto e scettico del gruppo.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>The old man taps his stick on the ground once, clears his throat and begins his story... <i>(Go to <span class='gotopage' page='1'></span>)</i></p>",ES:"<p>El anciano golpea el suelo una vez con su bastón, se aclara la garganta y comienza su relato... <i>(Ve a la <span class='gotopage' page='1'></span>)</i></p>",
                                        IT:"<p>Il vecchio batte il bastone per terra una volta, schiarisce la voce e comincia il suo racconto... <i>(Andare a <span class='gotopage' page='1'></span>)</i></p>"
                                    }
                                ]
                            ],
                            achievementsCondition:{
                                IT:"<p>La prima volta che i giocatori perdono la stessa missione due volte di seguito, guadagnano 1 segnalino Latore di Vita. Inizia ogni missione successiva con un segnalino Latore di Vita extra fino alla fine della campagna. Questo obiettivo pu&ograve; essere raggiunto in qualsiasi momento, anche al di fuori della fase citt&agrave;.</p>",
                                EN:"<p>The first time players lose the same quest twice in a row, they gain 1 Lifebringer token. Start each subsequent Quest with an extra Lifebringer token until the end of the Campaign. This Achievement may be accomplished at any moment, even out the Town Phase.</p>",ES:"<p>La primera vez que los jugadores pierden la misma misión dos veces seguidas, obtienen 1 marcador de Portador de Vida. Empezad cada Misión siguiente con un marcador de Portador de Vida extra hasta el final de la Campaña. Este Logro puede conseguirse en cualquier momento, incluso fuera de la Fase de Ciudad.</p>"
                            },
                            achievements:[],
                            treasureBag:{
                                IT:"{label.miniCampaignTreasureBagDescription}",
                                EN:"{label.miniCampaignTreasureBagDescription}",ES:"{label.miniCampaignTreasureBagDescription}"
                            },
                            questPhase:{
                                IT:"{label.campaignQuestPhaseDescription}",
                                EN:"{label.campaignQuestPhaseDescription}",ES:"{label.campaignQuestPhaseDescription}"
                            },
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        IT:"Copertina",
                                        EN:"Cover",ES:"Portada"
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:0
                                        },{
                                            act:0,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione A",
                                        EN:"Mission A",ES:"Misión A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The robust boy, who had listened to the whole story standing, breaks the silence left by the old man by whispering \"And... and then?\".</p>",ES:"<p>El chico robusto, que había escuchado toda la historia de pie, rompe el silencio que dejó el anciano susurrando \"¿Y... y luego?\".</p>",
                                                    IT:"<p>Il ragazzo robusto, che aveva ascoltato tutta la storia all'impiedi, spezza il silenzio lasciato dal vecchio bisbigliando \"E... e poi?\".</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The old man had left the story hanging, his mouth open and his gaze vacant. \"And then...\" he continues, thoughtfully. Then, he bursts into laughter.</p>",ES:"<p>El anciano había dejado la historia a medias, con la boca abierta y la mirada perdida. \"Y luego...\" continúa, pensativo. Entonces, estalla en carcajadas.</p>",
                                                    IT:"<p>Il vecchio aveva lasciato la storia sospesa, rimanendo con la bocca aperta e lo sguardo nel vuoto. \"E poi...\" prosegue, pensieroso. Poi scoppia in una risata.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"I don't remember how it went on!\" The old man bursts into laughter. His hoarse laugh is soon joined by the higher-pitched one of the shy boy.</p>",ES:"<p>\"¡No recuerdo cómo seguía!\" El anciano estalla en carcajadas. Su risa ronca pronto se une a la más aguda del chico tímido.</p>",
                                                    IT:"<p>\"Non ricordo pi&ugrave; come andava avanti!\" Il vecchio scoppia in una risata. Alla sua, rauca, si aggiunge poco dopo quella pi&ugrave; acuta del ragazzo timido.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 5 segnalini Tesoro Comune e aggiungere 1 segnalino Tesoro Raro e 2 segnalini Tesoro Epico al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 5 Common Treasure tokens and add 1 Rare Treasure token and 2 Epic Treasure tokens to the Treasure bag.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 5 marcadores de Tesoro Común y añade 1 marcador de Tesoro Raro y 2 marcadores de Tesoro Épico a la Bolsa del Tesoro."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>\"That was a good story, mister Red,\" the little girl chirps. \"But... it wasn't that scary,\" she concludes, disappointed.</p>",ES:"<p>\"Ha sido una buena historia, señor Rojo,\" gorjea la niña pequeña. \"Pero... no ha dado tanto miedo,\" concluye, decepcionada.</p>",
                                                    IT:"<p>\"E' stata una bella storia, signore Rosso.\" cinguetta la ragazzina. \"Ma... non faceva tanto paura\" conclude deulsa.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"That's... true, old man!\" the robust boy adds hesitantly. \"Tell us a grown-up story!\"</p>",ES:"<p>\"Eso... es verdad, anciano!\" añade el chico robusto, dudando. \"¡Cuéntanos una historia de mayores!\"</p>",
                                                    IT:"<p>\"E'... vero, vecchio!\" rincara titubante il ragazzo robusto. \"Raccontaci una storia da grandi!\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"You guys are tough, huh?\" the old man's face braces for the challenge. \"So... listen to this!\"</p>",ES:"<p>\"¿Así que sois duros, eh?\" el rostro del anciano se prepara para el reto. \"Pues... escuchad esto!\"</p>",
                                                    IT:"<p>\"Siete tipi tosti, uh?\" il viso del vecchio si prepara alla sfida. \"Allora... sentite questa!\"</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='2'></span>.",
                                                EN:"Go to <span class='gotopage' page='2'></span>.",ES:"Ve a la <span class='gotopage' page='2'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:2
                                        },{
                                            act:1,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        IT:"Missione B",
                                        EN:"Mission B",ES:"Misión B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The old man sinks back into the silence of his thoughts, amid the worried looks of the boys.</p>",ES:"<p>El anciano vuelve a hundirse en el silencio de sus pensamientos, entre las miradas preocupadas de los chicos.</p>",
                                                    IT:"<p>Il vecchio sprofonda di nuovo nel silenzio dei suoi pensieri, tra gli sguardi preoccupati dei ragazzi.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Just when the group's hopes were about to vanish, with a broken voice, the old man continues: \"A few days later, the Heroes received a mysterious letter... and nothing more was heard of them.\"</p>",ES:"<p>Justo cuando las esperanzas del grupo estaban a punto de desvanecerse, con voz quebrada, el anciano continúa: \"Unos días después, los Héroes recibieron una carta misteriosa... y no se volvió a saber nada más de ellos.\"</p>",
                                                    IT:"<p>Proprio quando le speranze del gruppo stavano per svanire, con voce rotta, l'anziano prosegue: \"Qualche giorno dopo, gli Eroi ricevettero una lettera misteriosa... e di loro non se ne seppe pi&ugrave; nulla.\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Are they... dead?!\" asks the shy boy. The old man responds by shrugging his shoulders.</p>",ES:"<p>\"¿Están... muertos?\" pregunta el chico tímido. El anciano responde encogiéndose de hombros.</p>",
                                                    IT:"<p>\"Sono... morti?!\" Chiede il ragazzo timido. Il vecchio risponde stringendo le spalle.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 5 segnalini Tesoro Comune e aggiungere 4 segnalini Tesoro Epico e 2 segnalini Tesoro Leggendario al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 5 Common Treasure tokens and add 4 Epic Treasure tokens and 2 Legendary Treasure tokens to the Treasure bag.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 5 marcadores de Tesoro Común y añade 4 marcadores de Tesoro Épico y 2 marcadores de Tesoro Legendario a la Bolsa del Tesoro."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>A disheveled boy, clenching his fists, jumps up and growls: \"The old man is making it all up!\" His voice echoes through the valley and then disappears into the distance.</p>",ES:"<p>Un chico despeinado, apretando los puños, se levanta de un salto y gruñe: \"¡El anciano se lo está inventando todo!\" Su voz resuena por el valle y luego se pierde en la distancia.</p>",
                                                    IT:"<p>Un ragazzo spettinato, stringendo i pugni, si alza di scatto ringhiando: \"Il vecchio si sta inventando tutto!\". La sua voce rimbomba per la valle per poi sparire lontano.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The old man, surprised, opens his eyes wide and almost falls off the rock where he was sitting. A handful of small, silent eyes now scrutinize the disheveled boy.</p>",ES:"<p>El anciano, sorprendido, abre los ojos de par en par y casi se cae de la roca donde estaba sentado. Un puñado de ojillos silenciosos escrutan ahora al chico despeinado.</p>",
                                                    IT:"<p>Il vecchio, sorpreso, strabuzza gli occhi e per poco non cade dalla roccia sulla quale sedeva. Una manciata di piccoli occhi silenziosi ora squadrano il piccolo scapigliato.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Listen!\" he exclaims, growling again. \"I'll tell you a story!\"</p>",ES:"<p>\"¡Escuchad!\" exclama, gruñendo de nuevo. \"¡Os voy a contar una historia!\"</p>",
                                                    IT:"<p>\"Sentite!\" esclama, ringhiando ancora. \"Ve ne racconto una io!\"</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='3'></span>.",
                                                EN:"Go to <span class='gotopage' page='3'></span>.",ES:"Ve a la <span class='gotopage' page='3'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:1
                                        },
                                        {
                                            act:1,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Missione C",
                                        EN:"Mission C",ES:"Misión C"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The old redhead's eyes shone like stars. \"And... and then what happens?\" he stammers to the young storyteller.</p>",ES:"<p>Los ojos del viejo pelirrojo brillaron como estrellas. \"Y... ¿y entonces qué pasa?\" tartamudea al joven narrador.</p>",
                                                    IT:"<p>Gli occhi del vecchio rosso brillavano come stelle. \"E... e poi cosa succede?\" balbetta al giovane cantastorie.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"And then...\" the boy's fists tighten even more. \"And then they go home, to their family!\"</p>",ES:"<p>\"Y entonces...\" los puños del chico se aprietan aún más. \"¡Y entonces vuelven a casa, con su familia!\"</p>",
                                                    IT:"<p>\"E poi...\" i pugni del ragazzo si fanno ancora pi&ugrave; stretti. \"E poi tornano a casa, dalla loro famiglia!\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>A tear runs down his too-young face.</p>",ES:"<p>Una lágrima recorre su rostro, demasiado joven.</p>",
                                                    IT:"<p>Una lacrima solca il suo viso troppo giovane.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalini Tesoro Leggendario al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and 1 Legendary Treasure tokens to the Treasure bag.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 2 marcadores de Tesoro Raro y 1 marcador de Tesoro Legendario de la Bolsa del Tesoro."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>\"Maybe it's getting late, my boys! You should go home!\" The old man's bones tense like a bow and, after a while, he is standing again, amid the murmurs of his young audience.</p>",ES:"<p>\"¡Quizá se esté haciendo tarde, muchachos! ¡Deberíais volver a casa!\" Los huesos del anciano se tensan como un arco y, tras un momento, vuelve a estar en pie, entre los murmullos de su joven público.</p>",
                                                    IT:"<p>\"Forse si &egrave; fatto tardi, ragazzi miei! Dovreste tornare a casa!\" Le ossa del vecchio si tendono come un arco e, dopo un po', &egrave; nuovamente in piedi, tra i brusii del suo giovane pubblico.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Before you go, I would like to hear one last story.\" The little girl stops the old man, tugging gently at his hood.</p>",ES:"<p>\"Antes de que os vayáis, me gustaría escuchar una última historia.\" La niña detiene al anciano, tirando suavemente de su capucha.</p>",
                                                    IT:"<p>\"Prima che tu vada, vorrei sentire un'ultima storia.\" La ragazzina ferma l'anziano, tirandolo dolcemente per il cappuccio.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"A story that ends well.\" She continues. The red old man smiles again, sits down on his stone and clears his throat one last time...</p>",ES:"<p>\"Una historia que acabe bien.\" continúa ella. El viejo pelirrojo sonríe de nuevo, se sienta en su piedra y se aclara la garganta una última vez...</p>",
                                                    IT:"<p>\"Una storia che finisce bene.\" Continua. Il vecchio rosso torna a sorridere, si siede sulla sua pietra e si schiarisce la voce un'ultima volta...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='4'></span>.",
                                                EN:"Go to <span class='gotopage' page='4'></span>.",ES:"Ve a la <span class='gotopage' page='4'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:0
                                        },
                                        {
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione D",
                                        EN:"Mission D",ES:"Misión D"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The old redhead takes a last look at his small, still stunned audience, gets back to his feet and, after an elegant and tired bow, walks away without adding anything.</p>",ES:"<p>El viejo pelirrojo echa un último vistazo a su pequeño público, aún aturdido, se pone de pie y, tras una reverencia elegante y cansada, se aleja sin añadir nada más.</p>",
                                                    IT:"<p>Il vecchio rosso getta un'ultima occhiata alla sua piccola platea ancora attonita, si rimette in piedi e, dopo un elegante ed affaticato inchino, si allontana senza aggiungere nulla.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The boys never saw that strange old man again. And the years passed in a flash.</p>",ES:"<p>Los chicos nunca volvieron a ver a ese extraño anciano. Y los años pasaron en un abrir y cerrar de ojos.</p>",
                                                    IT:"<p>I ragazzi non videro mai pi&ugrave; quello strano vecchio. E gli anni passarono in un lampo.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>",ES:"<b>Reparte los puntos de experiencia entre los Héroes como prefieran:</b><ul><li>1-2 Héroes: 3 PE</li><li>3-4 Héroes: 7 PE</li><li>5-6 Héroes: 11 PE</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalini Tesoro Leggendario al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and 1 Legendary Treasure tokens to the Treasure bag.",ES:"<b>Actualiza la Bolsa del Tesoro:</b> Retira 2 marcadores de Tesoro Raro y 1 marcador de Tesoro Legendario de la Bolsa del Tesoro."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>After checking his bag one last time, a Hero huffs. He glances at his companions from behind a tuft of disheveled hair. \"Are we ready?\" he asks impatiently.</p>",ES:"<p>Tras revisar su bolsa una última vez, un Héroe resopla. Mira a sus compañeros por detrás de un mechón de pelo revuelto. \"¿Estamos listos?\" pregunta con impaciencia.</p>",
                                                    IT:"<p>Dopo aver controllato un'ultima volta la borsa, un Eroe sbuffa. Getta uno sguardo ai compagni, da dietro un cuffo spettinato. \"Siamo pronti?\" chiede impaziente.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Ready.\" the Heroine confirms, tugging hard on a strap. \"It's time to end this once and for all.\"</p>",ES:"<p>\"Lista.\" confirma la Heroína, tirando con fuerza de una correa. \"Es hora de acabar con esto de una vez por todas.\"</p>",
                                                    IT:"<p>\"Pronti.\" conferma l'Eroina, tirando una cinghia con forza. \"E' il momento di farla finita una volta per tutte.\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The rest of the group nods in response.</p>",ES:"<p>El resto del grupo asiente en respuesta.</p>",
                                                    IT:"<p>Il resto del gruppo risponde con un cenno del capo.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='5'></span>.",
                                                EN:"Go to <span class='gotopage' page='5'></span>.",ES:"Ve a la <span class='gotopage' page='5'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Missione E",
                                        EN:"Mission E",ES:"Misión E"
                                    },
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    IT:"<p>Qualche giorno dopo, gli Eroi ricevettero una lettera misteriosa.</p>",
                                                    EN:"<p>A few days later, the Heroes received a mysterious letter.</p>",ES:"<p>Unos días más tarde, los Héroes recibieron una carta misteriosa.</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    IT:"<p>Era successo qualcosa di grave alla capitale? Il mondo era ancora una volta in pericolo? Le loro famiglie, preoccupate, chiedevano di loro?</p>",
                                                    EN:"<p>Had something serious happened to the capital? Was the world in danger once again? Were their worried families asking about them?</p>",ES:"<p>¿Había ocurrido algo grave en la capital? ¿Estaba el mundo de nuevo en peligro? ¿Preguntaban por ellos sus preocupadas familias?</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    IT:"<p>Nessuno lo sa con certezza. Di loro non se ne seppe pi&ugrave; nulla.</p>",
                                                    EN:"<p>No one knows for sure. They were never heard from again.</p>",ES:"<p>Nadie lo sabe con certeza. Nunca más se volvió a saber de ellos.</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    IT:"<p>Avete vinto!</p>",
                                                    EN:"<p>You win!</p>",ES:"<p>¡Habéis ganado!</p>"
                                                }
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },{
            id:"campaign",
            needs:[ ],
            provides:[ "campaign-2shots" ],
            label:{
                EN:"Generates a 2-shot campaign with boss battle at the end"
            },
            content:[
                {
                    type:"campaignBossFightModels",
                    data:[
                        {
                            label:{
                                EN:"Boss fights at the end of the campaign."
                            },
                            words:[
                                [
                                    "ending",
                                    "final",
                                    "edge"
                                ],[
                                    "end",
                                    "close",
                                    "cut"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights at the end of all acts."
                            },
                            words:[
                                [
                                    "grinding",
                                    "double",
                                    "mirroring"
                                ],[
                                    "grinder",
                                    "dual",
                                    "mirror"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignMapModels",
                    data:[
                        {
                            label:{
                                EN:"Normal-sized maps."
                            },
                            words:[
                                [
                                    "plain",
                                    "old",
                                    "flat"
                                ],[
                                    "cross",
                                    "even",
                                    "cast"
                                ]
                            ],
                            
                            models:[]
                        },{
                            label:{
                                EN:"Larger mid-maps."
                            },
                            words:[
                                [
                                    "chrono",
                                    "time",
                                    "point"
                                ],[
                                    "sand",
                                    "pass",
                                    "grow"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0,map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Start end map."
                            },
                            words:[
                                [
                                    "ascent",
                                    "raise",
                                    "climax"
                                ],[
                                    "lift",
                                    "climb",
                                    "rise"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignModels",
                    data:[
                        {
                            type:"2shots",
                            label:{
                                EN:"2-shot linear campaign"
                            },
                            campaignMode:{
                                EN:"{label.shots2CampaignMode}",ES:"{label.shots2CampaignMode}",
                                IT:"{label.shots2CampaignMode}",
                            },
                            explanationKeys:[ "explanation" ],
                            summaryKeys:[ "campaignSummary" ],
                            story:[
                                [
                                    {
                                        IT:"Una mano anziana dalla stretta inaspettatamente salda si avvinghia al polso. ",
                                        EN:"An elderly hand with an unexpectedly firm grip wraps around your wrist. ",ES:"Una mano anciana, con un agarre inesperadamente firme, se cierra alrededor de tu muñeca. "
                                    }
                                ],[
                                    {
                                        IT:"\"Presto, non abbiamo tempo da perdere!\" ",
                                        EN:"\"Hurry up, we don't have time to waste!\" ",ES:"\"¡Deprisa, no tenemos tiempo que perder!\" "
                                    }
                                ],[
                                    {
                                        IT:"Vieni trascinato fuori dalla taverna, tra gli sguardi sbalorditi degli ubriaconi e le grida preoccupate dei tuoi compagni...",
                                        EN:"You are dragged out of the tavern, amidst the stunned looks of the drunkards and the worried cries of your companions...",ES:"Te sacan a rastras de la taberna, entre las miradas atónitas de los borrachos y los gritos preocupados de tus compañeros..."
                                    }
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        IT:"<p>\"Tenete, indossate questo!\" Il vecchio gesticola furiosamente, facendo oscillare la sua barba rossa come un pendolo.</p>",
                                        EN:"<p>\"Here, put this on!\" The old man gestures wildly, his red beard swinging like a pendulum.</p>",ES:"<p>\"¡Toma, ponte esto!\" El anciano gesticula con vehemencia, su barba roja balanceándose como un péndulo.</p>"
                                    }
                                ],[
                                    {
                                        IT:"<p>I fumi dell'alcool annebbiano la tua testa. Sei stato rapito? I tuoi compagni di bevute sono a pochi passi di distanza, confusi quanto te e... armati di tutto punto?</p>",
                                        EN:"<p>Alcohol fumes cloud your head. Have you been kidnapped? Are your drinking buddies just a few feet away, as confused as you, and... fully armed?</p>",ES:"<p>Los vapores del alcohol te nublan la cabeza. ¿Te han secuestrado? ¿Están tus compañeros de bebida a pocos pasos, tan confusos como tú y... completamente armados?</p>"
                                    }
                                ],[
                                    {
                                        IT:"<p>\"Presto... saltate in questo portale...\" Uno specchio di luce sospeso a mezz'aria risucchia tutto il gruppo. Riesci solo a sentire le ultime parole del vecchio pazzo...</p>",
                                        EN:"<p>\"Quick... jump into this portal...\" A mirror of light suspended in mid-air sucks the entire group in. You can only hear the old madman's last words...</p>",ES:"<p>\"Rápido... saltad a este portal...\" Un espejo de luz suspendido en el aire succiona a todo el grupo. Solo alcanzas a oír las últimas palabras del viejo loco...</p>"
                                    }
                                ],[
                                    {
                                        IT:"<p>\"Dovete diventare degli Eroi... entro stasera!\" <i>(Andare a <span class='gotopage' page='1'></span>)</i></p>",
                                        EN:"<p>\"You must become Heroes... by tonight!\" <i>(Go to <span class='gotopage' page='1'></span>)</i></p>",ES:"<p>\"¡Debéis convertiros en Héroes... antes de que caiga la noche!\" <i>(Ve a la <span class='gotopage' page='1'></span>)</i></p>"
                                    }
                                ]
                            ],
                            achievementsCondition:{
                                IT:"<p>In questa modalit&agrave; non si applica alcun Traguardo.</p>",
                                EN:"<p>In this mode, no Achievement applies.</p>",ES:"<p>En este modo no se aplica ningún Logro.</p>"
                            },
                            achievements:[],
                            treasureBag:{
                                IT:"{label.shot2TreasureBagDescription}",
                                EN:"{label.shot2TreasureBagDescription}",ES:"{label.shot2TreasureBagDescription}"
                            },
                            questPhase:{
                                IT:"{label.campaign2shotsQuestPhaseDescription}",
                                EN:"{label.campaign2shotsQuestPhaseDescription}",ES:"{label.campaign2shotsQuestPhaseDescription}"
                            },
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        IT:"Copertina",
                                        EN:"Cover",ES:"Portada"
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            questFlags:{ forge:[ "forceForge" ] },
                                            act:0,
                                            map:0
                                        },{
                                            questFlags:{ forge:[ "forceForge" ] },
                                            act:0,
                                            map:1
                                        },{
                                            questFlags:{ forge:[ "forceForge" ] },
                                            act:0,
                                            map:2
                                        },{
                                            questFlags:{ forge:[ "forceForge" ] },
                                            act:1,
                                            map:0
                                        },{
                                            questFlags:{ forge:[ "forceForge" ] },
                                            act:1,
                                            map:1
                                        },{
                                            questFlags:{ forge:[ "forceForge" ] },
                                            act:1,
                                            map:2
                                        }
                                    ],
                                    bossAsAct:[
                                        {
                                            act:1,
                                            map:0
                                        },{
                                            act:1,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione A",
                                        EN:"Mission A",ES:"Misión A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The chaos has subsided but your gaze does not leave your weapon.</p>",ES:"<p>El caos se ha calmado, pero tu mirada no se aparta de tu arma.</p>",
                                                    IT:"<p>Il caos si &egrave; placato ma il tuo sguardo non lascia la tua arma.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>You have become strong... very strong. But how is it possible that all this has happened so quickly?</p>",ES:"<p>Te has vuelto fuerte... muy fuerte. Pero ¿cómo es posible que todo esto haya pasado tan rápido?</p>",
                                                    IT:"<p>Sei diventato forte... molto forte. Ma come &egrave; possibile che tutto questo sia accaduto cos&igrave; in fretta?</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Your companions do not seem to share your perplexity: they noisily exchange the loot with smiles plastered on their faces.</p>",ES:"<p>Tus compañeros no parecen compartir tu perplejidad: intercambian el botín ruidosamente, con sonrisas de oreja a oreja.</p>",
                                                    IT:"<p>I tuoi compagni non sembrano condividere la tua perplessit&agrave;: si scambiano rumorosamente il bottino con il sorriso stampato sul volto.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Finally you come across, peering into the shadows, a look as worried as yours...</p>",ES:"<p>Por fin distingues, escudriñando entre las sombras, una mirada tan preocupada como la tuya...</p>",
                                                    IT:"<p>Finalmente incroci, scrutando nell'ombra, uno sguardo preoccupato come il tuo...</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"Tutti gli Eroi raggiungono il livello 6.",
                                                EN:"All Heroes level up to level 6.",ES:"Todos los Héroes suben al nivel 6."
                                            },
                                            {
                                                IT:"Ogni Eroe pu&ograve; eseguire azioni di Scambio ed Equipaggiamento tutte le volte che desidera.",
                                                EN:"Each Hero can perform Free Trade and Equip actions as many times as many times as it wishes.",ES:"Cada Héroe puede realizar acciones de Comercio Libre e Equipar tantas veces como desee.",
                                            },
                                            {
                                                IT:"&Egrave; possibile eseguire una singola azione di Forgia, indipendentemente dal numero di giocatori. Non &egrave; possibile forgiare oggetti Epici in oggetti Leggendari.",
                                                EN:"A single Forge action may be performed, regardless of the number of players. You can’t forge Epic items into Legendary items.",ES:"Puede realizarse una única acción de Forja, sin importar el número de jugadores. No se pueden forjar objetos Épicos en objetos Legendarios."
                                            },
                                            {
                                                IT:"Ogni Eroe manterr&agrave; solo gli oggetti equipaggiati sulla propria dashboard per la Missione B. Tutti gli oggetti in eccesso verranno rimessi nel proprio mazzo oggetti.",
                                                EN:"Each Hero will only keep the items equipped on their dashboard for Mission B. Any extra items will be shuffled back to its Item deck.",ES:"Cada Héroe solo conservará los objetos equipados en su panel de control para la Misión B. Cualquier objeto adicional se mezclará de nuevo en su mazo de Objetos."
                                            },
                                            {
                                                IT:"Tutti gli Eroi impostano i loro PE a 0 girano il Segnalino Livello sul lato 6-10.",
                                                EN:"All Heroes set their XP to 0 and flip their Level Token to the 6-10 side.",ES:"Todos los Héroes ponen su PE a 0 y voltean su ficha de Nivel a su lado 6-10."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>\"It's still too little, damn it...\" The old red steps out of the shadows.</p>",ES:"<p>\"Aún es demasiado poco, maldita sea...\" El viejo pelirrojo sale de entre las sombras.</p>",
                                                    IT:"<p>\"E' ancora troppo poco, maledizione...\" Il vecchio rosso mette un piede fuori dall'ombra.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Silence falls. A new portal, dark as night and smelling of death, opens before his outstretched hand.</p>",ES:"<p>Cae el silencio. Un nuevo portal, oscuro como la noche y con olor a muerte, se abre ante su mano extendida.</p>",
                                                    IT:"<p>Cala il silenzo. Un nuovo portale, buio come la notte e dall lezzo di morte, si apre davanti alla sua mano tesa.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"...but we don't have time. You have to save this world. Now.\"</p>",ES:"<p>\"...pero no tenemos tiempo. Tenéis que salvar este mundo. Ahora.\"</p>",
                                                    IT:"<p>\"...ma non abbiamo tempo. Dovete salvare questo mondo. Ora.\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>You and your companions can't move a muscle, frozen in that solemn and worried manner. Then, everything around you goes dark.</p>",ES:"<p>Tú y tus compañeros no podéis mover un músculo, paralizados en esa actitud solemne y preocupada. Entonces, todo a vuestro alrededor se oscurece.</p>",
                                                    IT:"<p>Tu e i tuoi compagni non riuscite a muovere un muscolo, bloccati da quel fare solenne e preoccupato. Poi, tutto intorno diventa buio.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='2'></span>.",
                                                EN:"Go to <span class='gotopage' page='2'></span>.",ES:"Ve a la <span class='gotopage' page='2'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    specialRules:[ "greatRiches", "highRisk", "darknessTrack" ],
                                    actMap:[
                                        {
                                            act:2,
                                            map:0
                                        },{
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    bossAsAct:[
                                        {
                                            act:2,
                                            map:2
                                        },{
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione B",
                                        EN:"Mission B",ES:"Misión B"
                                    },
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    IT:"<p>Anche se solo per un pelo, tu e i tuoi compagni ce l'avete fatta! Avete eliminato la minaccia!</p>",
                                                    EN:"<p>Even if it was just a hair's breadth, you and your companions made it! You eliminated the threat!</p>",ES:"<p>Aunque fue por los pelos, ¡tú y tus compañeros lo habéis conseguido! ¡Habéis eliminado la amenaza!</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    IT:"<p>La gioia ti attraversa, come mille scariche elettriche. Poi, d'improvviso, balena un pensiero freddo e scuro. Sei davvero un Eroe, se qualcuno ti ha costretto ad esserlo? Meriti la gloria anche se non l'hai cercata?</p>",
                                                    EN:"<p>Joy runs through you, like a thousand electric shocks. Then, suddenly, a cold and dark thought flashes. Are you really a Hero, if someone forced you to be one? Do you deserve glory even if you didn't seek it?</p>",ES:"<p>La alegría te recorre como mil descargas eléctricas. Entonces, de repente, un pensamiento frío y oscuro te asalta. ¿Eres realmente un Héroe, si alguien te obligó a serlo? ¿Mereces la gloria aunque no la buscaras?</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    IT:"<p>Uno scroscio dei calici che sbattono tra loro ti sveglia di soprassalto. I compagni di bevute stanno brindando come al solito.</p>",
                                                    EN:"<p>The crash of glasses clinking together jolts you awake. Your drinking companions are toasting as usual.</p>",ES:"<p>El choque de los vasos al brindar te sobresalta. Tus compañeros de bebida están brindando como de costumbre.</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    IT:"<p>Sar&agrave; per la vittoria appena conquistata o quella che avreste potuto raggiungere? Il tuo sguardo balena verso i loro vestiti...</p>",
                                                    EN:"<p>Is it for the victory you just achieved or the one you could have achieved? Your gaze flashes towards their clothes...</p>",ES:"<p>¿Es por la victoria que acabas de lograr, o por la que podrías haber logrado? Tu mirada se dirige hacia sus ropas...</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    IT:"<p>Avete vinto!</p>",
                                                    EN:"<p>You win!</p>",ES:"<p>¡Has ganado!</p>"
                                                }
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"globalLabels",
                    data:{
                        campaignPreparation:{
                            EN:"2-shot campaigns follow very different rules than the standard Campaign. Instead, they follow the <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a> designed by BGG user <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a>.</p><p>Print the extra materials, prepare the Heroes following the One-shot rules, and replace all the Level Tokens with a copy of the one you just printed.",ES:"\"Las campañas de 2 misiones siguen reglas muy distintas a las de la Campaña estándar. En su lugar, siguen las <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>reglas caseras</a> diseñadas por el usuario de BGG <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a>.</p><p>Imprime el material adicional, prepara a los Héroes siguiendo las reglas de Aventura autoconclusiva y sustituye todas las fichas de Nivel por una copia de la que acabas de imprimir.",
                            IT:"Le campagne 2-shot seguono delle regole molto diverse rispetto a quelle della Campagna standard. Seguono invece le <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a> progettate dall'utente BGG <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a>.</p><p>Stampate i materiali extra, preparate gli Eroi seguendo le regole di un'Avventura one-shot e sostituite tutti i Segnalini Livello con una copia di quello appena stampato."
                        }
                    }
                },{
                    type:"campaignRewardModels",
                    data:[
                        {
                            label:{
                                EN:"Accept a medium Red One challenge and gain an item."
                            },
                            words:[
                                [
                                    "probe",
                                    "poll",
                                    "feel"
                                ],[
                                    "match",
                                    "test",
                                    "watch"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "glory" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Accept a hard Red One challenge and gain an item."
                            },
                            words:[
                                [
                                    "threat",
                                    "scan",
                                    "parse"
                                ],[
                                    "dare",
                                    "trial",
                                    "check"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:3, challengeRewardTags:[ [ "glory" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"specialRules",
                    data:{
                        greatRiches:[
                            {
                                priority:16,
                                type:"rule",
                                name:{
                                    IT:"Grandi ricchezze...",
                                    EN:"Great riches...",ES:"Grandes riquezas..."
                                },
                                explanation:{
                                    IT:"I gettoni del tesoro nei Forzieri sono di 1 livello pi&ugrave; alti in rarit&agrave;. (i Comuni sono Rari, i Rari sono Epici, gli Epici sono Leggendari)",
                                    EN:"Treasure Tokens in Chests are 1 level higher in rarity. (Common are Rare, Rare are Epic, Epic are Legendary)",ES:"Los marcadores de Tesoro en los cofres son 1 nivel de rareza superior. (Los Comunes son Raros, los Raros son Épicos, los Épicos son Legendarios)"
                                }
                            }
                        ],
                        highRisk:[
                            {
                                priority:15,
                                type:"rule",
                                name:{
                                    IT:"...Ad alto rischio",
                                    EN:"...Great risks",ES:"...Grandes riesgos"
                                },
                                explanation:{
                                    IT:"Quando un Eroe elimina un nemico guadagna questi tesori al posto di quelli stampati sulla carta Nemico:<ul><li><b>Orda di Livello 6/7</b>: 1 Tesoro Comune</li><li><b>Orda di Livello 8/9</b>: 1 Tesoro Comune</li><li><b>Orda di Livello 10</b>: 2 Tesori Comuni</li><li><b>Mostro Errante di Livello 6/7</b>: 1 Tesoro Comune, 3 Tesori Epici</li><li><b>Mostro Errante di Livello 8/9</b>: 2 Tesori Comune, 1 Tesoro Leggendario</li><li><b>Mostro Errante di Livello 10</b>: 3 Tesori Leggendari</li></ul>",
                                    EN:"When a Hero eliminates an enemy it gains these treasures instead of those printed on the Enemy card:<ul><li><b>Level 6/7 Mob</b>: 1 Common Treasure</li><li><b>Level 8/9 Mob</b>: 1 Common Treasure</li><li><b>Level 10 Mob</b>: 2 Common Treasures</li><li><b>Level 6/7 Roaming Monster</b>: 1 Common Treasure, 3 Epic Treasures</li><li><b>Level 8/9 Roaming Monster</b>: 2 Common Treasure, 1 Legendary Treasure</li><li><b>Level 10 Roaming Monster</b>: 3 Legendary Treasures</li></ul>",ES:"Cuando un Héroe elimina a un enemigo, obtiene estos tesoros en lugar de los impresos en la carta de Enemigo:<ul><li><b>Cuadrilla de Nivel 6/7</b>: 1 Tesoro Común</li><li><b>Cuadrilla de Nivel 8/9</b>: 1 Tesoro Común</li><li><b>Cuadrilla de Nivel 10</b>: 2 Tesoros Comunes</li><li><b>Monstruo Errante de Nivel 6/7</b>: 1 Tesoro Común, 3 Tesoros Épicos</li><li><b>Monstruo Errante de Nivel 8/9</b>: 2 Tesoros Comunes, 1 Tesoro Legendario</li><li><b>Monstruo Errante de Nivel 10</b>: 3 Tesoros Legendarios</li></ul>"
                                }
                            }
                        ],
                        darknessTrack:[
                            {
                                priority:14,
                                type:"rule",
                                name:{
                                    IT:"A un passo dalla fine",
                                    EN:"One step away from the end",ES:"A un paso del final"
                                },
                                explanation:{
                                    IT:"Utilizza il Tracciato Oscurit&agrave; \"Sfida difficile\" per giocare a questa missione.",
                                    EN:"Use the Hard Challenge Darkness Track to play this Quest.",ES:"Usa la Barra de Oscuridad de Desafío Difícil para jugar esta Misión."
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ];

});