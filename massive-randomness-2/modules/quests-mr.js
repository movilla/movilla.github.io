ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                IT:[ "la Missione termina con una vittoria", "terminare la Missione con una vittoria" ],
                EN:[ "the Mission ends with a victory", "end the Mission with a victory" ],
                ES:[ "la Misi&oacute;n termina con una victoria", "terminar la Misi&oacute;n con una victoria" ]
            }
        ],
        BOSSBEAT = [
            {
                IT:[ "viene eliminato", "viene eliminata" ],
                EN:[ "it is eliminated", "it is eliminated" ],
                ES:[ "es eliminada", "es eliminada" ]
            }
        ];
        
    return [
        {
            id:"quests-mr",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-mr", "untranslated-fr" ],
            label:{
                EN:"Original Massive Randomness 2 quest models"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        masterMode:[
                            {
                                priority:30,
                                type:"rule",
                                classNames:[ "printOnly" ],
                                name:{
                                    IT:"Modalit&agrave; Master",
                                    EN:"Master Mode",
                                    ES:"Modo Master"
                                },
                                explanation:{
                                    IT:"Questa Missione contiene delle informazioni segrete che non devono essere conosciute dai giocatori, per cui dovrebbe essere letta da qualcuno che non partecipa alla partita: il Master.",
                                    EN:"This Mission contains secret information that must not be known to the players, so it should be read by someone not participating in the game: the Master.",
                                    ES:"Esta Misi&oacute;n contiene informaci&oacute;n secreta que los jugadores no deben conocer, por lo que deber&iacute;a leerla alguien que no participe en la partida: el Master."
                                }
                            }
                        ]
                    }
                },{
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[2],
                            type:"investigation",
                            objective:{
                                EN:"Talk with enemies and eliminate the culprit to win.",
                                ES:"Habla con los enemigos y elimina al culpable para ganar."
                            },
                            variants:{
                                EN:"With randomized culprit.",
                                ES:"Con culpable aleatorio."
                            },
                            name:{
                                EN:"The Investigation",
                                ES:"La Investigaci&oacute;n"
                            },
                            by:{
                                IT:"Di KesieV",
                                EN:"By KesieV",
                                ES:"Por KesieV"
                            },
                            suggestedTilesCount:5,
                            code:{
                                onQuestFinalize:(questGenerator,resources,result,questVersion,questLabels)=>{
                                
                                    let
                                        labels = questLabels[0],
                                        badEnding = result.campaign ? labels.campaignBadEnding : labels.badEnding,
                                        culprit = Math.floor(questGenerator.random(2)),
                                        culpritLabels = labels.suspected[culprit],
                                        culpritId = culpritLabels.EN[0],
                                        testimonyLabels = labels.suspected[(culprit+1)%2],
                                        testimonyId = testimonyLabels.EN[0],
                                        charactersLabels = labels.suspected.concat(labels.informers),
                                        charactersCount = charactersLabels.length,
                                        isTruth = questGenerator.random(2)>1;

                                    questGenerator.shuffle(charactersLabels);

                                    for (let i=0;i<charactersCount;i++) {

                                        let
                                            previousCharacterLabels = charactersLabels[i-1],
                                            characterLabels = charactersLabels[i],
                                            characterId = characterLabels.EN[0],
                                            sentenceId = "testimony."+characterId;

                                        switch (i) {
                                            case 0:{
                                                // The Accuser
                                                if (characterId == culpritId) {
                                                    // To self
                                                    if (isTruth)
                                                        result.labels[sentenceId]=questGenerator.pickRandomElementValue(labels.culpritSelf);
                                                    else
                                                        result.labels[sentenceId]=Labels.solveLabel(
                                                            questGenerator.pickRandomElementValue(labels.culpritOther),
                                                            { who:testimonyLabels }
                                                        );
                                                } else {
                                                    // To other
                                                    if (isTruth)
                                                        result.labels[sentenceId]=Labels.solveLabel(
                                                            questGenerator.pickRandomElementValue(labels.culpritOther),
                                                            { who:culpritLabels }
                                                        );
                                                    else
                                                        result.labels[sentenceId]=Labels.solveLabel(
                                                            questGenerator.pickRandomElementValue(labels.innocentOther),
                                                            { who:culpritLabels }
                                                        );
                                                }
                                                break;
                                            }
                                            case charactersCount-1:{
                                                if (isTruth)
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.trueOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                else
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.lieOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                break;
                                            }
                                            default:{
                                                if (questGenerator.random(2)>1)
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.trueOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                else {
                                                    isTruth = !isTruth;
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.lieOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                }
                                                break;
                                            }
                                        }

                                    }

                                    result.labels["ending."+culpritId]=questGenerator.pickRandomElementValue(labels.goodEnding);
                                    result.labels["ending."+testimonyId]=questGenerator.pickRandomElementValue(badEnding);

                                },
                            },
                            versions:[
                                {
                                    specialRules:[ "masterMode" ],
                                    labels:[
                                        [
                                            {
                                                suspected:[
                                                    {
                                                        IT: [ "corruptionLord", "il Signore della Corruzione" ],
                                                        EN: [ "corruptionLord", "the Corruption Lord" ],
                                                        ES:[ "corruptionLord", "el Se&ntilde;or de la Corrupci&oacute;n" ]
                                                    },{
                                                        IT: [ "timeLord", "il Signore del Tempo" ],
                                                        EN: [ "timeLord", "the Time Lord" ],
                                                        ES:[ "timeLord", "el Se&ntilde;or del Tiempo" ]
                                                    }
                                                ],
                                                informers:[
                                                    {
                                                        IT: [ "corruptionLordServant", "il Servitore della Corruzione" ],
                                                        EN: [ "corruptionLordServant", "the Corruption Servant" ],
                                                        ES:[ "corruptionLordServant", "el Sirviente de la Corrupci&oacute;n" ]
                                                    },{
                                                        IT: [ "timeLordServant", "il Servitore del Tempo" ],
                                                        EN: [ "timeLordServant", "the Time Servant" ],
                                                        ES:[ "timeLordServant", "el Sirviente del Tiempo" ]
                                                    }
                                                ],
                                                culpritSelf:[
                                                    { IT:"Sono io il colpevole!", EN: "I'm the culprit!",
                                                    ES:"&iexcl;Yo soy el culpable!" },
                                                    { IT:"Ci sono io dietro tutto questo!", EN: "I'm behind all this!",
                                                    ES:"&iexcl;Yo estoy detr&aacute;s de todo esto!" },
                                                    { IT:"Sono stato io!", EN: "It was me!",
                                                    ES:"&iexcl;Fui yo!" },
                                                    { IT:"Avanti, sono stato io!", EN: "Come on, it was me!",
                                                    ES:"&iexcl;Vamos, fui yo!" },
                                                ],
                                                culpritOther:[
                                                    { IT: "Quello che andrebbe punito &egrave; {who@1}!", EN: "The one to be punished is {who@1}!",
                                                    ES:"&iexcl;El que merece un castigo es {who@1}!" },
                                                    { IT: "C'&egrave; {who@1} dietro tutto questo!", EN: "There is {who@1} behind all this!",
                                                    ES:"&iexcl;{who:capital@1} est&aacute; detr&aacute;s de todo esto!" },
                                                    { IT:"{who:capital@1} &egrave; colui che stai cercando.", EN: "{who:capital@1} is the one you are looking for.",
                                                    ES:"{who:capital@1} es quien est&aacute;is buscando." },
                                                    { IT:"So chi stai cercando: &egrave; {who@1}.", EN: "I've the who you want: {who@1}.",
                                                    ES:"S&eacute; a qui&eacute;n busc&aacute;is: es {who@1}." }
                                                ],
                                                innocentSelf:[
                                                    { IT:"Sono innocente!", EN: "I'm innocent!",
                                                    ES:"&iexcl;Soy inocente!" },
                                                    { IT:"Non sono stato io!", EN: "It's not my fault!",
                                                    ES:"&iexcl;No es culpa m&iacute;a!" },
                                                    { IT:"Non sono il colplevole!", EN: "I'm not the culprit!",
                                                    ES:"&iexcl;Yo no soy el culpable!" },
                                                ],
                                                innocentOther:[
                                                    { IT:"{who:capital@1} non &egrave; colpevole!", EN: "{who:capital@1} is not guilty!",
                                                    ES:"&iexcl;{who:capital@1} no es culpable!" },
                                                    { IT:"{who:capital@1} non ha fatto nulla.", EN: "{who:capital@1} is not at fault.",
                                                    ES:"{who:capital@1} no tiene la culpa." },
                                                    { IT:"{who:capital@1} non &egrave; quello che stai cercando.", EN: "{who:capital@1} is not your target.",
                                                    ES:"{who:capital@1} no es a quien busc&aacute;is." },
                                                    { IT:"Non pu&ograve; essere stato {who@1}.", EN: "It couldn't have been {who@1}.",
                                                    ES:"No puede haber sido {who@1}." }
                                                ],
                                                lieOther:[
                                                    { IT:"{who:capital@1} sta mentendo!", EN: "{who:capital@1} is lying!",
                                                    ES:"&iexcl;{who:capital@1} est&aacute; mintiendo!" },
                                                    { IT:"{who:capital@1} &egrave; uno sporco bugiardo!", EN: "{who:capital@1} is a dirty liar!",
                                                    ES:"&iexcl;{who:capital@1} es un sucio mentiroso!" },
                                                    { IT:"{who:capital@1} non merita fiducia...", EN: "Don't trust {who@1}...",
                                                    ES:"No confi&eacute;is en {who@1}..." },
                                                    { IT:"{who:capital@1} dice bugie...", EN: "{who:capital@1} tells lies...",
                                                    ES:"{who:capital@1} dice mentiras..." },
                                                ],
                                                trueOther:[
                                                    { IT:"{who:capital@1} dice la verit&agrave;.", EN: "{who:capital@1} is telling the truth.",
                                                    ES:"{who:capital@1} dice la verdad." },
                                                    { IT:"{who:capital@1} &egrave; sincero.", EN: "{who:capital@1} is sincere.",
                                                    ES:"{who:capital@1} es sincero." },
                                                    { IT:"{who:capital@1} non dice bugie.", EN: "{who:capital@1} is not telling lies.",
                                                    ES:"{who:capital@1} no dice mentiras." }
                                                ],
                                                goodEnding:[
                                                    { IT:"Gli dei della Giustizia vi sorridono. Avete agito bene. {label.questVictory:capital@0}.", EN: "The gods of Justice smile upon you. You did well. {label.questVictory:capital@0}.",
                                                    ES:"Los dioses de la Justicia os sonr&iacute;en. Hab&eacute;is actuado bien. {label.questVictory:capital@0}." },
                                                    { IT:"Ben fatto, eroi. Anche questa volta avete trionfato e, con voi, la giustizia. {label.questVictory:capital@0}.", EN: "Well done, heroes. You triumphed again and the justice with you. {label.questVictory:capital@0}.",
                                                    ES:"Bien hecho, h&eacute;roes. Hab&eacute;is triunfado una vez m&aacute;s, y la justicia con vosotros. {label.questVictory:capital@0}." },
                                                    { IT:"Il sacrificio &egrave; stato inevitabile, ma giustizia &egrave; stata fatta. {label.questVictory:capital@0}.", EN: "The sacrifice was inevitable, but justice has been done. {label.questVictory:capital@0}.",
                                                    ES:"El sacrificio era inevitable, pero se ha hecho justicia. {label.questVictory:capital@0}." },
                                                ],
                                                badEnding:[
                                                    { IT:"Il Lord si accascia a terra con un grande tonfo ma, dentro di voi, sentite che qualcosa non non va. La Missione termina con la sconfitta.", EN: "The Lord collapses to the ground with a great thud but, inside, you feel that something is wrong. The Mission ends in defeat.",
                                                    ES:"El Se&ntilde;or se desploma contra el suelo con un gran estruendo pero, en vuestro interior, sent&iacute;s que algo va mal. La Misi&oacute;n termina en derrota." },
                                                    { IT:"Avete preso una decisione e affrontato eroicamente le conseguenze. Ma sar&agrave; stata davvero quella giusta? La Missione termina con la sconfitta.", EN: "You made a decision and heroically faced the consequences. But was it the right one? The Mission ends in defeat.",
                                                    ES:"Hab&eacute;is tomado una decisi&oacute;n y afrontado heroicamente las consecuencias. Pero &iquest;era la correcta? La Misi&oacute;n termina en derrota." },
                                                    { IT:"{label.goodEnding}.. o forse no?", EN: "{label.goodEnding}.. or maybe not?",
                                                    ES:"{label.goodEnding}... &iquest;o tal vez no?" },
                                                ],
                                                campaignBadEnding:[
                                                    { IT:"Il Lord si accascia a terra con un grande tonfo ma, dentro di voi, sentite che qualcosa non non va. La Missione termina con la sconfitta.", EN: "The Lord collapses to the ground with a great thud but, inside, you feel that something is wrong. The Mission ends in defeat.",
                                                    ES:"El Se&ntilde;or se desploma contra el suelo con un gran estruendo pero, en vuestro interior, sent&iacute;s que algo va mal. La Misi&oacute;n termina en derrota." },
                                                    { IT:"Avete preso una decisione e affrontato eroicamente le conseguenze. Ma sar&agrave; stata davvero quella giusta? La Missione termina con la sconfitta.", EN: "You made a decision and heroically faced the consequences. But was it the right one? The Mission ends in defeat.",
                                                    ES:"Hab&eacute;is tomado una decisi&oacute;n y afrontado heroicamente las consecuencias. Pero &iquest;era la correcta? La Misi&oacute;n termina en derrota." },
                                                ],
                                                crime:[
                                                    {
                                                        IT:[ "L'assassino della regina" ],
                                                        EN:[ "The queen's assassin" ],
                                                        ES:[ "El asesino de la reina" ]
                                                    },{
                                                        IT:[ "Il rapitore del principe" ],
                                                        EN:[ "The kidnapper of the prince" ],
                                                        ES:[ "El secuestrador del pr&iacute;ncipe" ]
                                                    },{
                                                        IT:[ "L'assassino del re" ],
                                                        EN:[ "The king's assassin" ],
                                                        ES:[ "El asesino del rey" ]
                                                    }
                                                ],
                                                escape:[
                                                    {
                                                        IT:[ "&egrave; riuscito a fuggire senza lasciare alcun testimone." ],
                                                        EN:[ "managed to escape without leaving any witnesses." ],
                                                        ES:[ "logr&oacute; escapar sin dejar testigos." ]
                                                    },{
                                                        IT:[ "&egrave; riuscito a sparire senza lasciare alcuna traccia." ],
                                                        EN:[ "managed to disappear without leaving any trace." ],
                                                        ES:[ "logr&oacute; desaparecer sin dejar rastro." ]
                                                    },{
                                                        IT:[ "ha colpito e nessuno &egrave; riuscito a vederlo." ],
                                                        EN:[ "hit and no one could see it." ],
                                                        ES:[ "golpe&oacute; y nadie logr&oacute; verlo." ]
                                                    }
                                                ],
                                                advantage:[
                                                    {
                                                        IT:[ "Solo il Signore della Corruzione ed il Signore del Tempo potrebbero trarre vantaggio da questa crisi," ],
                                                        EN:[ "Only the Corruption Lord and the Time Lord could benefit from this crisis," ],
                                                        ES:[ "Solo el Se&ntilde;or de la Corrupci&oacute;n y el Se&ntilde;or del Tiempo podr&iacute;an beneficiarse de esta crisis," ]
                                                    },{
                                                        IT:[ "I maggiori sospettati sono il Signore della Corruzione ed il Signore del Tempo," ],
                                                        EN:[ "The main suspects are the Corruption Lord and the Time Lord," ],
                                                        ES:[ "Los principales sospechosos son el Se&ntilde;or de la Corrupci&oacute;n y el Se&ntilde;or del Tiempo," ]
                                                    },{
                                                        IT:[ "Il Signore della Corruzione ed il Signore del Tempo... possono essere stati solo loro" ],
                                                        EN:[ "The Corruption Lord and the Time Lord... it could only have been them" ],
                                                        ES:[ "El Se&ntilde;or de la Corrupci&oacute;n y el Se&ntilde;or del Tiempo... solo pueden haber sido ellos," ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "ma la situazione politica del regno &egrave; tesa e non possiamo permetterci di commettere errori." ],
                                                        EN:[ "but the political situation in the kingdom is tense and we cannot afford to make mistakes." ],
                                                        ES:[ "pero la situaci&oacute;n pol&iacute;tica del reino es tensa y no podemos permitirnos cometer errores." ]
                                                    },{
                                                        IT:[ "ma, se accusiamo la persona sbagliata, l'intero regno potrebbe pagarne le conseguenze." ],
                                                        EN:[ "but, if we accuse the wrong person, the entire kingdom could suffer the consequences." ],
                                                        ES:[ "pero, si acusamos a la persona equivocada, todo el reino podr&iacute;a sufrir las consecuencias." ]
                                                    },{
                                                        IT:[ "ma chi sar&agrave; il colpevole? Non possiamo permetterci di sbagliare." ],
                                                        EN:[ "but who will be the culprit? We cannot afford to make mistakes." ],
                                                        ES:[ "pero &iquest;qui&eacute;n ser&aacute; el culpable? No podemos permitirnos cometer errores." ]
                                                    }
                                                ],
                                                invite:[
                                                    {
                                                        IT:[ "I Signori sono disposti a collaborare e ci hanno invitato" ],
                                                        EN:[ "The Lords are willing to collaborate and have invited us" ],
                                                        ES:[ "Los Se&ntilde;ores est&aacute;n dispuestos a colaborar y nos han invitado" ]
                                                    },{
                                                        IT:[ "Inaspettatamente, i Signori ci hanno invitato" ],
                                                        EN:[ "Unexpectedly, the Lords invited us" ],
                                                        ES:[ "Inesperadamente, los Se&ntilde;ores nos invitaron" ]
                                                    },{
                                                        IT:[ "Un messaggero ci ha consegnato una lettera sgualcita: i Signori ci attendono" ],
                                                        EN:[ "A messenger gave us a crumpled letter: the Lords await us" ],
                                                        ES:[ "Un mensajero nos entreg&oacute; una carta arrugada: los Se&ntilde;ores nos esperan" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "in una remota segreta per parlarne..." ],
                                                        EN:[ "in a remote dungeon to talk about it..." ],
                                                        ES:[ "en una mazmorra remota para hablar del asunto..." ]
                                                    },{
                                                        IT:[ "in un luogo remoto, per poter risolvere la questione..." ],
                                                        EN:[ "in a remote place, to resolve the issue..." ],
                                                        ES:[ "en un lugar remoto, para resolver la cuesti&oacute;n..." ]
                                                    },{
                                                        IT:[ "in un posto nascosto, per discuterne..." ],
                                                        EN:[ "in a hidden place, to discuss it..." ],
                                                        ES:[ "en un lugar oculto, para discutirlo..." ]
                                                    }
                                                ],
                                                destinationBut:[
                                                    {
                                                        IT:[ "ma sappiamo bene che il colpevole prover&agrave; ad eliminarci prima che le indagini siano terminate." ],
                                                        EN:[ "but we know well that the culprit will try to eliminate us before the investigation is finished." ],
                                                        ES:[ "pero sabemos bien que el culpable intentar&aacute; eliminarnos antes de que termine la investigaci&oacute;n." ]
                                                    },{
                                                        IT:[ "ma il colpevole prover&agrave; a eliminarci molto prima. Ne siamo certi." ],
                                                        EN:[ "but the culprit will try to eliminate us much sooner. We are certain of it." ],
                                                        ES:[ "pero el culpable intentar&aacute; eliminarnos mucho antes. De eso estamos seguros." ]
                                                    },{
                                                        IT:[ "ma non sar&agrave; facile. Il colpevole prover&agrave; a farci fuori il prima possibile." ],
                                                        EN:[ "but it won't be easy. The culprit will try to take us out as soon as possible." ],
                                                        ES:[ "pero no ser&aacute; f&aacute;cil. El culpable intentar&aacute; acabar con nosotros lo antes posible." ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "Dobbiamo fare in fretta e non commettere errori." ],
                                                        EN:[ "We have to hurry and not make mistakes." ],
                                                        ES:[ "Debemos darnos prisa y no cometer errores." ]
                                                    },{
                                                        IT:[ "Dobbiamo indagare e risolvere la questione. E molto velocemente." ],
                                                        EN:[ "We need to investigate and resolve this matter. And very quickly." ],
                                                        ES:[ "Debemos investigar y resolver este asunto. Y muy deprisa." ]
                                                    },{
                                                        IT:[ "Non abbiamo scelta. Dobbiamo risolvere la questione velocemente." ],
                                                        EN:[ "We have no choice. We need to resolve this issue quickly." ],
                                                        ES:[ "No tenemos elecci&oacute;n. Debemos resolver esta cuesti&oacute;n r&aacute;pidamente." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                riskyInvestigation:[
                                                    {
                                                        EN:[ 3 ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"I Due Signori",
                                            EN:"The Two Lords",
                                            ES:"Los Dos Se&ntilde;ores"
                                        },{
                                            IT:"L'Indagine",
                                            EN:"The Investigation",
                                            ES:"La Investigaci&oacute;n"
                                        },{
                                            IT:"Il Colpevole",
                                            EN:"The Culprit",
                                            ES:"El Culpable"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.crime@0} {label.escape@0} {label.advantage@0} {label.but@0} {label.invite@0} {label.destination@0} {label.destinationBut@0} {label.target@0}",
                                            ES:"{label.crime@0} {label.escape@0} {label.advantage@0} {label.but@0} {label.invite@0} {label.destination@0} {label.destinationBut@0} {label.target@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            ES:"Completa los objetivos en el orden indicado:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Investigazione",
                                                        EN:"Investigate",
                                                        ES:"Investigar"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Interrogare almeno un Signore",
                                                        EN:"Interview at least one Lord",
                                                        ES:"Interroga al menos a un Se&ntilde;or"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Punizione",
                                                        EN:"Punish",
                                                        ES:"Castigar"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Accusare un Signore ed eliminalo",
                                                        EN:"Accuse a Lord and eliminate it",
                                                        ES:"Acusa a un Se&ntilde;or y elim&iacute;nalo"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Il Momento della Verit&agrave;",
                                                        EN:"Time of the Truth",
                                                        ES:"El Momento de la Verdad"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Leggere l'epilogo",
                                                        EN:"Read the epilogue",
                                                        ES:"Lee el ep&iacute;logo"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Preparation",
                                                        ES:"Preparaci&oacute;n Especial"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Sulla mappa, sposta i segnalini Tempo {symbol.timeToken} e i segnalini Corruzione {symbol.corruptionToken} sopra i segnalini Obiettivo nella stessa Zona.<p>Pesca 1 Mostro Errante di Livello 5, mettilo da parte e aggiungi un segnalino Corruzione {symbol.corruptionToken} su di esso: questo &egrave; il Signore della Corruzione. Pesca un altro Mostro Errante di livello 5, mettilo da parte e aggiungi un segnalino Tempo {symbol.timeToken} su di esso: questo &egrave; il Signore del Tempo. Quindi, rimuovi dal gioco tutte le carte corrispondenti ai 2 Signori nei mazzi dei Mostri Erranti.</p>",
                                                        EN:"On the map, move the Time tokens {symbol.timeToken} and the Corruption tokens {symbol.corruptionToken} on top of the Objective tokens in the same Zone.<p>Draw 1 Level 5 Roaming Monster, set it apart, and add a Corruption token {symbol.corruptionToken} on it: this is the Corruption Lord. Draw another Level 5 Roaming Monster, set it apart, and add a Time token {symbol.timeToken} on it: this is the Time Lord. Then, remove from the game all of the cards matching the 2 Lords from the Roaming Monster decks.</p>",
                                                        ES:"En el mapa, coloca los marcadores de Tiempo {symbol.timeToken} y los marcadores de Corrupci&oacute;n {symbol.corruptionToken} encima de los marcadores de Objetivo de la misma Zona.<p>Roba 1 Monstruo Errante de nivel 5, ap&aacute;rtalo y a&ntilde;&aacute;dele un marcador de Corrupci&oacute;n {symbol.corruptionToken}: este es el Se&ntilde;or de la Corrupci&oacute;n. Roba otro Monstruo Errante de nivel 5, ap&aacute;rtalo y a&ntilde;&aacute;dele un marcador de Tiempo {symbol.timeToken}: este es el Se&ntilde;or del Tiempo. A continuaci&oacute;n, retira del juego todas las cartas correspondientes a los 2 Se&ntilde;ores de los mazos de Monstruos Errantes.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Sulla mappa, sposta i segnalini Tempo {symbol.timeToken} e i segnalini Corruzione {symbol.corruptionToken} sopra i segnalini Obiettivo nella stessa Zona.<p>Pesca {label.campaignBoss@0}, mettilo da parte e aggiungi un segnalino Corruzione {symbol.corruptionToken} su di esso: questo &egrave; il Signore della Corruzione. Pesca un altro Mostro Errante dallo stesso mazzo, mettilo da parte e aggiungi un segnalino Tempo {symbol.timeToken} su di esso: questo &egrave; il Signore del Tempo. Quindi, rimuovi dalla partita tutte le carte corrispondenti ai 2 Signori nei mazzi dei Mostri Erranti.</p>",
                                                        EN:"On the map, move the Time tokens {symbol.timeToken} and the Corruption tokens {symbol.corruptionToken} on top of the Objective tokens in the same Zone.<p>Draw {label.campaignBoss@0}, set it apart, and add a Corruption token {symbol.corruptionToken} on it: this is the Corruption Lord. Draw another Roaming Monster from the same deck, set it apart, and add a Time token {symbol.timeToken} on it: this is the Time Lord. Then, remove from the game all of the cards matching the 2 Lords from the Roaming Monster decks.</p>",
                                                        ES:"En el mapa, coloca los marcadores de Tiempo {symbol.timeToken} y los marcadores de Corrupci&oacute;n {symbol.corruptionToken} encima de los marcadores de Objetivo de la misma Zona.<p>Roba {label.campaignBoss@0}, ap&aacute;rtalo y a&ntilde;&aacute;dele un marcador de Corrupci&oacute;n {symbol.corruptionToken}: este es el Se&ntilde;or de la Corrupci&oacute;n. Roba otro Monstruo Errante del mismo mazo, ap&aacute;rtalo y a&ntilde;&aacute;dele un marcador de Tiempo {symbol.timeToken}: este es el Se&ntilde;or del Tiempo. A continuaci&oacute;n, retira de la partida todas las cartas correspondientes a los 2 Se&ntilde;ores de los mazos de Monstruos Errantes.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Due Signori",
                                                        EN:"The Two Lords",
                                                        ES:"Los Dos Se&ntilde;ores"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questo dungeon si trovano il Signore della Corruzione, contrassegnato dal segnalino Obiettivo colorato con un segnalino Corruzione {symbol.corruptionToken} su di esso, e il Signore del Tempo, contrassegnato dal segnalino Obiettivo colorato con un segnalino Tempo {symbol.timeToken} su di esso. Gli eroi potranno interagire con i Signori, interrogandoli o accusandoli <i>(Vedi sotto)</i>.",
                                                        EN:"In this dungeon, there are the Corruption Lord, marked by the colored Objective token with a Corruption token {symbol.corruptionToken} on it, and the Time Lord, marked by the colored Objective token with a Time token {symbol.timeToken} on it. The heroes will be able to interact with the Lords, interrogating them or accusing them <i>(See below)</i>.",
                                                        ES:"En esta mazmorra se encuentran el Se&ntilde;or de la Corrupci&oacute;n, se&ntilde;alado por el marcador de Objetivo de color con un marcador de Corrupci&oacute;n {symbol.corruptionToken} encima, y el Se&ntilde;or del Tiempo, se&ntilde;alado por el marcador de Objetivo de color con un marcador de Tiempo {symbol.timeToken} encima. Los h&eacute;roes podr&aacute;n interactuar con los Se&ntilde;ores, interrog&aacute;ndolos o acus&aacute;ndolos <i>(ver m&aacute;s abajo)</i>."
                                                    }
                                                ]
                                            }
                                        ],[
                                           {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Fedeli Servitori",
                                                        EN:"The Faithful Servants",
                                                        ES:"Los Fieles Sirvientes"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questo dungeon si trovano anche i Servitori dei Signori: il Servitore della Corruzione, contrassegnato dal segnalino Obiettivo grigio con un segnalino Corruzione {symbol.corruptionToken} su di esso, e il Servitore del Tempo, contrassegnato dal segnalino Obiettivo grigio con un segnalino Tempo {symbol.timeToken} su di esso. Gli eroi potranno interagire i Servitori per interrogarli.",
                                                        EN:"In this dungeon there also are the Lord's Servants: the Corruption Servant, marked by the gray Objective token with a Corruption token {symbol.corruptionToken} on it, and the Time Servant, marked by the gray Objective token with a Time token {symbol.timeToken} on it. The heroes will be able to interact with Servants to interrogate them.",
                                                        ES:"En esta mazmorra tambi&eacute;n se encuentran los Sirvientes de los Se&ntilde;ores: el Sirviente de la Corrupci&oacute;n, se&ntilde;alado por el marcador de Objetivo gris con un marcador de Corrupci&oacute;n {symbol.corruptionToken} encima, y el Sirviente del Tiempo, se&ntilde;alado por el marcador de Objetivo gris con un marcador de Tiempo {symbol.timeToken} encima. Los h&eacute;roes podr&aacute;n interactuar con los Sirvientes para interrogarlos."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                        IT:"L'Interrogatorio",
                                                        EN:"The Interrogation",
                                                        ES:"El Interrogatorio"
                                                     }
                                                 ],
                                                 explanation:[
                                                    {
                                                        IT:"Qualsiasi eroe nella stessa Zona di un personaggio (un segnalino Obiettivo grigio o colorato) pu&ograve; spendere 1 azione per interrogarlo. <span class='displayonly'>Per leggere la sua testimonianza, seleziona il testo nascosto qui sotto per rivelarlo.</span><span class='printonly'>Poi il Master legge il testo relativo:</span>"+
                                                        "<p><b>Il Signore della Corruzione (segnalino Obiettivo colorato +{symbol.corruptionToken}) dice:</b> <span class='hiddentext'>\"{testimony.corruptionLord}\"</p></span>"+
                                                        "<p><b>Il Servitore della Corruzione (segnalino obiettivo grigio +{symbol.corruptionToken}) dice:</b> <span class='hiddentext'>\"{testimony.corruptionLordServant}\"</p></span>"+
                                                        "<p><b>Il Signore del Tempo (segnalino Obiettivo colorato con +{symbol.timeToken}) dice:</b> <span class='hiddentext'>\"{testimony.timeLord}\"</p></span>"+
                                                        "<p><b>Il Servitore del Tempo (segnalino Obiettivo grigio con +{symbol.timeToken}) dice:</b> <span class='hiddentext'>\"{testimony.timeLordServant}\"</p></span>",
                                                         EN:"Any hero in the same Zone of a character (a gray or colored Objective token) can spend 1 action to interrogate it. <span class='displayonly'>To read their testimony, select the hidden text below to reveal it.</span><span class='printonly'>Then, the Master read the related text:</span>"+
                                                         "<p><b>The Corruption Lord (colored Objective token +{symbol.corruptionToken}) says:</b> <span class='hiddentext'>\"{testimony.corruptionLord}\"</p></span>"+
                                                         "<p><b>The Corruption Servant (gray Objective token +{symbol.corruptionToken}) says:</b> <span class='hiddentext'>\"{testimony.corruptionLordServant}\"</p></span>"+
                                                         "<p><b>The Time Lord (colored Objective token with +{symbol.timeToken}) says:</b> <span class='hiddentext'>\"{testimony.timeLord}\"</p></span>"+
                                                         "<p><b>The Time Servant (gray Objective token with +{symbol.timeToken}) says:</b> <span class='hiddentext'>\"{testimony.timeLordServant}\"</p></span>",
                                                         ES:"Cualquier h&eacute;roe en la misma Zona que un personaje (un marcador de Objetivo gris o de color) puede gastar 1 acci&oacute;n para interrogarlo. <span class='displayonly'>Para leer su testimonio, selecciona el texto oculto de abajo para revelarlo.</span><span class='printonly'>A continuaci&oacute;n, el Master lee el texto correspondiente:</span>" + "<p><b>El Se&ntilde;or de la Corrupci&oacute;n (marcador de Objetivo de color +{symbol.corruptionToken}) dice:</b> <span class='hiddentext'>\"{testimony.corruptionLord}\"</p></span>" + "<p><b>El Sirviente de la Corrupci&oacute;n (marcador de Objetivo gris +{symbol.corruptionToken}) dice:</b> <span class='hiddentext'>\"{testimony.corruptionLordServant}\"</p></span>" + "<p><b>El Se&ntilde;or del Tiempo (marcador de Objetivo de color con +{symbol.timeToken}) dice:</b> <span class='hiddentext'>\"{testimony.timeLord}\"</p></span>" + "<p><b>El Sirviente del Tiempo (marcador de Objetivo gris con +{symbol.timeToken}) dice:</b> <span class='hiddentext'>\"{testimony.timeLordServant}\"</p></span>"
                                                    }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                        IT:"L'Accusa",
                                                        EN:"The Accusation",
                                                        ES:"La Acusaci&oacute;n"
                                                     }
                                                 ],
                                                 explanation:[
                                                    {
                                                        IT:"Qualsiasi eroe nella stessa Zona di un Signore (un segnalino Obiettivo colorato) pu&ograve; spendere 1 azione per accusarlo. Genera su quella zona il Mostro Errante messo a parte durante la preparazione con il segnalino Tempo/Corruzione corrispondente: i Signori sono molto orgogliosi e, una volta accusati, combatteranno fino alla morte! Rimuovi tutti i segnalini Obiettivo dalla mappa, compresi i segnalini Tempo e Corruzione sopra di essi, e scarta l'altro Mostro Errante messo da parte durante la preparazione.",
                                                        EN:"Any hero in the same Zone of a Lord (a colored Objective token) can spend 1 action to accuse it. Spawn on that Zone the Roaming Monster you set apart during preparation with the matching Time/Corruption token: the Lords are very proud and, once accused, they will fight to the death! Remove all of the Objective tokens from the map, including the Time and Corruption tokens on top of them, and discard the other Roaming Monster you set apart during preparation.",
                                                        ES:"Cualquier h&eacute;roe en la misma Zona que un Se&ntilde;or (un marcador de Objetivo de color) puede gastar 1 acci&oacute;n para acusarlo. Genera en esa Zona el Monstruo Errante que apartaste durante la preparaci&oacute;n con el marcador de Tiempo/Corrupci&oacute;n correspondiente: &iexcl;los Se&ntilde;ores son muy orgullosos y, una vez acusados, luchar&aacute;n hasta la muerte! Retira todos los marcadores de Objetivo del mapa, incluidos los marcadores de Tiempo y Corrupci&oacute;n que tengan encima, y descarta el otro Monstruo Errante que apartaste durante la preparaci&oacute;n."
                                                    }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                    {
                                                        IT:"Epilogo",
                                                        EN:"Epilogue",
                                                        ES:"Ep&iacute;logo"
                                                    }
                                                 ],
                                                 explanation:[
                                                    {
                                                        IT:"Dopo aver eliminato il Signore accusato, la Missione termina."+
                                                        "<p><b>Se hai eliminato il Signore della Corruzione {symbol.corruptionToken}, <span class='displayonly'>seleziona e leggi questo testo:</span><span class='printonly'>il Master legge questo testo:</span></b> <span class='hiddentext'>{ending.corruptionLord}</span></p>"+
                                                        "<p><b>Se hai eliminato il Signore del Tempo {symbol.timeToken}, <span class='displayonly'>seleziona e leggi questo testo:</span><span class='printonly'>il Master legge questo testo:</span></b> <span class='hiddentext'>{ending.timeLord}</span></p>",
                                                        EN:"After eliminating the accused Lord, the Mission ends."+
                                                        "<p><b>If you eliminated the Corruption Lord {symbol.corruptionToken}, <span class='displayonly'>select and read this text:</span><span class='printonly'>the Master read this text:</b> <span class='hiddentext'>{ending.corruptionLord}</span></p>"+
                                                        "<p><b>If you eliminated the Time Lord {symbol.timeToken}, <span class='displayonly'>select and read this text:</span><span class='printonly'>the Master read this text:</b> <span class='hiddentext'>{ending.timeLord}</span></p>",
                                                        ES:"Tras eliminar al Se&ntilde;or acusado, la Misi&oacute;n termina." + "<p><b>Si has eliminado al Se&ntilde;or de la Corrupci&oacute;n {symbol.corruptionToken}, <span class='displayonly'>selecciona y lee este texto:</span><span class='printonly'>el Master lee este texto:</b> <span class='hiddentext'>{ending.corruptionLord}</span></p>" + "<p><b>Si has eliminado al Se&ntilde;or del Tiempo {symbol.timeToken}, <span class='displayonly'>selecciona y lee este texto:</span><span class='printonly'>el Master lee este texto:</b> <span class='hiddentext'>{ending.timeLord}</span></p>"
                                                    }
                                                 ]
                                             }
                                         ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming-large" ],
                                            gameMode: [ "investigation" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "riskyInvestigation" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, il mandante",
                                                    EN:"Eliminate {boss.bossBadName@0}, the instigator",
                                                    ES:"Elimina a {boss.bossBadName@0}, el instigador"
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id:"quests-mr-ending",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-mr-ending", "untranslated-fr" ],
            label:{
                EN:"Massive Randomness 2 ending quest"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        noPrintMode:[
                            {
                                priority:30,
                                type:"rule",
                                classNames:[ "printOnly" ],
                                name:{
                                    IT:"Solo Digitale",
                                    EN:"Digital Only",
                                    ES:"Solo Digital"
                                },
                                explanation:{
                                    IT:"Questa Missione &egrave; stata pensata per essere giocata unicamente nella sua versione digitale. Puoi comunque giocarla nella sua versione cartacea ma assicurati che sia letta via via da qualcuno che non partecipa alla partita e che ne mantenga i segreti.",
                                    EN:"This Mission is was designed to be played only in its digital version. You can still play it in its paper version but make sure it is read gradually by someone not participating in the game and who keeps its secrets.",
                                    ES:"Esta Misi&oacute;n ha sido dise&ntilde;ada para jugarse &uacute;nicamente en su versi&oacute;n digital. Aun as&iacute;, puedes jugarla en su versi&oacute;n de papel, pero aseg&uacute;rate de que la vaya leyendo poco a poco alguien que no participe en la partida y que guarde sus secretos."
                                }
                            }
                        ]
                    }
                },{
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[2],
                            forMaps:[2],
                            type:"massiveRandomness",
                            objective:{
                                EN:"Fight the Massive Randomness.",
                                ES:"Enfr&eacute;ntate a la Casualidad Masiva."
                            },
                            variants:{
                                EN:"With randomized objectives.",
                                ES:"Con objetivos aleatorios."
                            },
                            name:{
                                EN:"The Massive Randomness",
                                ES:"La Casualidad Masiva"
                            },
                            by:{
                                IT:"Di KesieV",
                                EN:"By KesieV",
                                ES:"Por KesieV"
                            },
                            suggestedTilesCount:4,
                            code:{
                                onQuestFinalize:(questGenerator,resources,result,questVersion,questLabels)=>{
                                
                                    let
                                        labels = questLabels[0],
                                        orders = labels.orders[0].EN;

                                    questGenerator.shuffle(labels.tokens);
                                    questGenerator.shuffle(orders);

                                    result.labels["token.order1"]=labels.tokens[0];
                                    result.labels["action.order1"]=questGenerator.pickRandomElementValue(labels[orders[0]]);

                                    result.labels["token.order2"]=labels.tokens[1];
                                    result.labels["action.order2"]=questGenerator.pickRandomElementValue(labels[orders[1]]);

                                    result.labels["token.order3"]=labels.tokens[2];
                                    result.labels["action.order3"]=questGenerator.pickRandomElementValue(labels[orders[2]]);

                                    result.labels["token.order4"]=labels.tokens[3];

                                },
                            },
                            versions:[
                                {
                                    specialRules:[ "noPrintMode" ],
                                    specialClass:[ "massiverandomness" ],
                                    labels:[
                                        [
                                            {
                                                creditsBy:[ { EN:"<a target=_blank href='https://www.kesiev.com/'>KesieV</a>" } ],
                                                creditsTranslators:[ {
                                                    IT:
                                                        "<a target=_blank href='https://boardgamegeek.com/profile/moviglez'>Movilla</a> (Spagnolo)",
                                                    EN:
                                                        "<a target=_blank href='https://boardgamegeek.com/profile/moviglez'>Movilla</a> (Spanish)",
                                                    ES:
                                                        "<a target=_blank href='https://boardgamegeek.com/profile/moviglez'>Movilla</a> (Espa&ntilde;ol)",
                                                }],
                                                thankDungeonSkills:[ {
                                                    EN:
                                                        "<a target=_blank href='https://boardgamegeek.com/user/anubys'>anubys</a>"
                                                } ],
                                                thankIdeas:[ {
                                                    EN:
                                                        "<a target=_blank href='http://www.linearkey.net/'>Bianca</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/DummySphere'>DummySphere</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/kaarol116'>kaarol116</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Metalzoic'>Metalzoic</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Rasczak'>Rasczak</a>"
                                                } ],
                                                thank:[ {
                                                    EN:
                                                        "<a target=_blank href='https://boardgamegeek.com/user/0rom3'>0rom3</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Allman'>Allman</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Dr%20Houserules'>Dr Houserules</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/franzaudio'>Franz Audio</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/GrandKhan44'>GrandKhan44</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Joabqm'>Joabqm</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Metalzoic'>Metalzoic</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/spinal3000'>spinal3000</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Rough_neck</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Jopo'>Jopo</a>"
                                                } ],
                                                welcome:[
                                                    {
                                                        IT: "Eccomi.",
                                                        EN: "Here I am.",
                                                        ES:"Aqu&iacute; estoy."
                                                    },{
                                                        IT: "Preparati a soccombere, mortale!",
                                                        EN: "Prepare to succumb, mortal!",
                                                        ES:"&iexcl;Prep&aacute;rate para sucumbir, mortal!"
                                                    },{
                                                        IT: "Siamo arrivati alla fine, dunque.",
                                                        EN: "We have reached the end, then.",
                                                        ES:"Hemos llegado al final, entonces."
                                                    }
                                                ],
                                                tokens:[
                                                    {
                                                        IT:[ "il segnalino Corruzione {symbol.corruptionToken}", "sulla Zona del segnalino Corruzione {symbol.corruptionToken}" ],
                                                        EN:[ "the Corruption token {symbol.corruptionToken}", "on the Corruption token {symbol.corruptionToken} Zone" ],
                                                        ES:[ "el marcador de Corrupci&oacute;n {symbol.corruptionToken}", "en la Zona del marcador de Corrupci&oacute;n {symbol.corruptionToken}" ]
                                                    },{
                                                        IT:[ "il segnalino Tempo {symbol.timeToken}", "sulla Zona del segnalino Tempo {symbol.timeToken}" ],
                                                        EN:[ "the Time token {symbol.timeToken}", "on the Time token {symbol.timeToken} Zone"],
                                                        ES:[ "el marcador de Tiempo {symbol.timeToken}", "en la Zona del marcador de Tiempo {symbol.timeToken}" ]
                                                    },{
                                                        IT:[ "il segnalino Obiettivo colorato", "sulla Zona del segnalino Obiettivo colorato" ],
                                                        EN:[ "the colored Objective token" , "on the colored Objective token Zone" ],
                                                        ES:[ "el marcador de Objetivo de color", "en la Zona del marcador de Objetivo de color" ]
                                                    },{
                                                        IT:[ "il segnalino Obiettivo grigio", "sulla Zona del segnalino Obiettivo grigio" ],
                                                        EN:[ "the grey Objective token", "on the grey Objective token Zone" ],
                                                        ES:[ "el marcador de Objetivo gris", "en la Zona del marcador de Objetivo gris" ]
                                                    }
                                                ],
                                                orders:[
                                                    { EN:[ "ordersSpawners", "ordersTurnModifiers", "ordersAdvantages", "ordersElemental", "ordersNothing" ]}
                                                ],
                                                ordersElemental:[
                                                    {
                                                        IT:[ "Tutti gli Eroi ricevono 1 {symbol.frostToken}." ],
                                                        EN:[ "All Heroes receive 1 {symbol.frostToken}." ],
                                                        ES:[ "Todos los H&eacute;roes reciben 1 {symbol.frostToken}." ]
                                                    },{
                                                        IT:[ "Tutti gli Eroi ricevono 1 {symbol.fireToken}." ],
                                                        EN:[ "All Heroes receive 1 {symbol.fireToken}." ],
                                                        ES:[ "Todos los H&eacute;roes reciben 1 {symbol.fireToken}." ]
                                                    },{
                                                        IT:[ "Tira il dado a 6 facce.<ul><li><b>Se esce 1-3:</b> tutti gli Eroi ricevono 1 {symbol.frostToken}.</li><li><b>Se esce 4-6:</b> tutti gli Eroi ricevono 1 {symbol.fireToken}.</li></ul>" ],
                                                        EN:[ "Roll the 6-sided dice.<ul><li><b>If 1-3 is rolled:</b> all Heroes receive 1 {symbol.frostToken}.</li><li><b>If 4-6 is rolled:</b> all Heroes receive 1 {symbol.fireToken}.</li></ul>"],
                                                        ES:[ "Tira el dado de 6 caras.<ul><li><b>Si sale 1-3:</b> todos los H&eacute;roes reciben 1 {symbol.frostToken}.</li><li><b>Si sale 4-6:</b> todos los H&eacute;roes reciben 1 {symbol.fireToken}.</li></ul>" ]
                                                    }
                                                ],
                                                ordersSpawners:[
                                                    {
                                                        IT:[ "Genera un Mostro Errante in questa Zona." ],
                                                        EN:[ "Spawn a Roaming Monster in this Zone."],
                                                        ES:[ "Genera un Monstruo Errante en esta Zona." ]
                                                    },{
                                                        IT:[ "Genera un'orda in questa Zona." ],
                                                        EN:[ "Spawn a mob in this Zone."],
                                                        ES:[ "Genera una Cuadrilla en esta Zona." ]
                                                    },{
                                                        IT:[ "Tira il dado a 6 facce.<ul><li><b>Se esce 1-3:</b> genera un Mostro Errante in questa Zona.</li><li><b>Se esce 4-6:</b> genera un'Orda in questa Zona.</li></ul>" ],
                                                        EN:[ "Roll the 6-sided dice.<ul><li><b>If 1-3 is rolled:</b> spawn a Roaming Monster in this Zone</li><li><b>If 4-6 is rolled:</b> spawn a mob in this Zone</li></ul>"],
                                                        ES:[ "Tira el dado de 6 caras.<ul><li><b>Si sale 1-3:</b> genera un Monstruo Errante en esta Zona</li><li><b>Si sale 4-6:</b> genera una Cuadrilla en esta Zona</li></ul>" ]
                                                    }
                                                ],
                                                ordersTurnModifiers:[
                                                    {
                                                        IT:[ "Il turno dell'Eroe termina." ],
                                                        EN:[ "The Hero Turn ends."],
                                                        ES:[ "El turno del H&eacute;roe termina." ]
                                                    },{
                                                        IT:[ "L'Eroe pu&ograve; effettuare un'azione extra." ],
                                                        EN:[ "The Hero may perform an extra action."],
                                                        ES:[ "El H&eacute;roe puede realizar una acci&oacute;n extra." ]
                                                    }
                                                ],
                                                ordersAdvantages:[
                                                    {
                                                        IT:[ "Poi rimuovere un qualsiasi gregario da un'orda sulla mappa senza guadagnare alcun PE." ],
                                                        EN:[ "You may remove 1 minion from a mob on the map without gaining any XP."],
                                                        ES:[ "Puedes retirar 1 secuaz de una Cuadrilla del mapa sin ganar PE." ]
                                                    },{
                                                        IT:[ "Tutti gli Eroi guadagnano 2 PV." ],
                                                        EN:[ "All Heroes gain 2 HP."],
                                                        ES:[ "Todos los H&eacute;roes ganan 2 PV." ]
                                                    },{
                                                        IT:[ "Tutti gli Eroi guadagnano 2 PE." ],
                                                        EN:[ "All Heroes gain 2 XP."],
                                                        ES:[ "Todos los H&eacute;roes ganan 2 PE." ]
                                                    },{
                                                        IT:[ "Tutti gli Eroi guadagnano 2 Mana." ],
                                                        EN:[ "All Heroes gain 2 Mana."],
                                                        ES:[ "Todos los H&eacute;roes ganan 2 Man&aacute;." ]
                                                    },{
                                                        IT:[ "Tira il dado a 6 facce.<ul><li><b>Se esce 1-3:</b> tutti gli Eroi guadagnano 2 Mana</li><li><b>Se esce 4-6:</b> tutti gli Eroi guadagnano 2 PV</li></ul>" ],
                                                        EN:[ "Roll the 6-sided dice.<ul><li><b>If 1-3 is rolled:</b> all Heroes gain 2 Mana</li><li><b>If 4-6 is rolled:</b> all Heroes gain 2 HP</li></ul>"],
                                                        ES:[ "Tira el dado de 6 caras.<ul><li><b>Si sale 1-3:</b> todos los H&eacute;roes ganan 2 Man&aacute;</li><li><b>Si sale 4-6:</b> todos los H&eacute;roes ganan 2 PV</li></ul>" ]
                                                    }
                                                ],
                                                ordersNothing:[
                                                    {
                                                        IT:[ "<i>Continua pure, mio piccolo Eroe.</i>" ],
                                                        EN:[ "<i>Go on, my little Hero.</i>" ],
                                                        ES:[ "<i>Contin&uacute;a, mi peque&ntilde;o H&eacute;roe.</i>" ]
                                                    },{
                                                        IT:[ "<i>Ben fatto. Ben fatto.</i>" ],
                                                        EN:[ "<i>Well done. Well done.</i>" ],
                                                        ES:[ "<i>Bien hecho. Bien hecho.</i>" ]
                                                    },{
                                                        IT:[ "<i>Ora puoi andare, piccoletto.</i>" ],
                                                        EN:[ "<i>You can go now, little guy.</i>" ],
                                                        ES:[ "<i>Ya puedes irte, peque&ntilde;ajo.</i>" ]
                                                    }
                                                ],
                                                massiveRandomnessExplanation:[
                                                     {
                                                        IT:"<ul>"+
                                                        "<li><b>Se esce 1-2:</b> evoca il primo Mostro Errante tra le Incarnazioni del Caos {token.order4@1} e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 3-4:</b> evoca il secondo Mostro Errante tra le Incarnazioni del Caos {token.order4@1} e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 5-6:</b> evoca il terzo Mostro Errante tra le Incarnazioni del Caos {token.order4@1} e lascia il dado sulla sua carta</li>"+
                                                        "</ul>"+
                                                        "Rimuovi infine {token.order4@0}.<p>Il dado a 6 facce indica sempre la carta dell'Incarnazione del Caos attualmente in gioco che pu&ograve; essere affrontata dagli Eroi. Le Incarnazioni del Caos considerano un giocatore in meno per il calcolo della loro Salute totale (con un minimo di 1 giocatore) e accumulano e risolvono ogni segnalino sulla propria carta individualmente (inclusi i segnalini Gelo {symbol.frostToken}, Fuoco {symbol.fireToken} e Salute).</p>"+
                                                        "<p>Prima dell'inizio di ogni Fase degli Eroi, se la miniatura dell'attuale Incarnazione del Caos &egrave; sulla mappa, tira il dado a 6 facce:</p><ul>"+
                                                        "<li><b>Se esce 1-2:</b> rimuovi dalla mappa la miniatura dell'attuale Incarnazione del Caos, sostituiscila con quella del primo Mostro Errante tra le Incarnazioni del Caos e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 3-4:</b> rimuovi dalla mappa la miniatura dell'attuale Incarnazione del Caos, sostituiscila con quella del secondo Mostro Errante tra le Incarnazioni del Caos e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 5-6:</b> rimuovi dalla mappa la miniatura dell'attuale Incarnazione del Caos, sostituiscila con quella del terzo Mostro Errante tra le Incarnazioni del Caos e lascia il dado sulla sua carta</li>"+
                                                        "</ul>"+
                                                        "Quando una qualsiasi delle Incarnazioni del Caos viene sconfitta, svela e leggi L'Epilogo.</span>",
                                                        EN:"<ul>"+
                                                        "<li><b>If 1-2 is rolled:</b> summon the first Roaming Monster among the Incarnations of Chaos {token.order4@1} and leave the die on its card</li>"+
                                                        "<li><b>If 3-4 is rolled:</b> summon the second Roaming Monster among the Incarnations of Chaos {token.order4@1} and leave the die on its card</li>"+
                                                        "<li><b>If 5-6 is rolled:</b> summon the third Roaming Monster among the Incarnations of Chaos {token.order4@1} and leave the die on its card</li>"+
                                                        "</ul>"+
                                                        "Finally, remove {token.order4@0}.<p>The 6-sided die always indicates the current Incarnation of Chaos in play that can be faced by the Heroes. The Incarnations of Chaos consider one less player for their total Health (with a minimum of 1 player) and collect and resolve each token on their card individually (including Frost {symbol.frostToken}, Fire {symbol.fireToken}, and Health tokens).</p>"+
                                                        "<p>Before the start of each Hero Phase, if the current Incarnation of Chaos miniature is on the map, roll the 6-sided die:</p><ul>"+
                                                        "<li><b>If 1-2 is rolled:</b> remove the current Incarnation of Chaos miniature from the map, replace it with that of the first Roaming Monster among the Incarnations of Chaos, and leave the die on its card</b></li>"+
                                                        "<li><b>If 3-4 is rolled:</b> remove the current Incarnation of Chaos miniature from the map, replace it with that of the second Roaming Monster among the Incarnations of Chaos, and leave the die on its card</b></li>"+
                                                        "<li><b>If 5-6 is rolled:</b> remove the current Incarnation of Chaos miniature from the map, replace it with that of the third Roaming Monster among the Incarnations of Chaos, and leave the die on its card</b></li>"+
                                                        "</ul>"+
                                                        "When one of the Incarnations of Chaos is defeated, reveal and read the Epilogue.</span>",
                                                        ES:"<ul>" + "<li><b>Si sale 1-2:</b> invoca al primer Monstruo Errante entre las Encarnaciones del Caos {token.order4@1} y deja el dado sobre su carta</li>" + "<li><b>Si sale 3-4:</b> invoca al segundo Monstruo Errante entre las Encarnaciones del Caos {token.order4@1} y deja el dado sobre su carta</li>" + "<li><b>Si sale 5-6:</b> invoca al tercer Monstruo Errante entre las Encarnaciones del Caos {token.order4@1} y deja el dado sobre su carta</li>" + "</ul>" + "Por &uacute;ltimo, retira {token.order4@0}.<p>El dado de 6 caras indica siempre la carta de la Encarnaci&oacute;n del Caos actualmente en juego que los H&eacute;roes pueden afrontar. Las Encarnaciones del Caos cuentan con un jugador menos para calcular su Vida total (con un m&iacute;nimo de 1 jugador) y acumulan y resuelven cada marcador de su carta de forma individual (incluidos los marcadores de Escarcha {symbol.frostToken}, Fuego {symbol.fireToken} y Salud).</p>" + "<p>Antes del comienzo de cada Fase de los H&eacute;roes, si la miniatura de la Encarnaci&oacute;n del Caos actual est&aacute; en el mapa, tira el dado de 6 caras:</p><ul>" + "<li><b>Si sale 1-2:</b> retira del mapa la miniatura de la Encarnaci&oacute;n del Caos actual, sustit&uacute;yela por la del primer Monstruo Errante entre las Encarnaciones del Caos y deja el dado sobre su carta</b></li>" + "<li><b>Si sale 3-4:</b> retira del mapa la miniatura de la Encarnaci&oacute;n del Caos actual, sustit&uacute;yela por la del segundo Monstruo Errante entre las Encarnaciones del Caos y deja el dado sobre su carta</b></li>" + "<li><b>Si sale 5-6:</b> retira del mapa la miniatura de la Encarnaci&oacute;n del Caos actual, sustit&uacute;yela por la del tercer Monstruo Errante entre las Encarnaciones del Caos y deja el dado sobre su carta</b></li>" + "</ul>" + "Cuando una de las Encarnaciones del Caos sea derrotada, revela y lee el Ep&iacute;logo.</span>",
                                                     }
                                                ],
                                                credits:[
                                                     {
                                                         IT:"<p class='credits'>Grazie per aver giocato a <b>Massive Randomness 2</b><br>Un generatore casuale di avventure per Massive Darkness 2!</p>"+
                                                         "<p class='credits'><b>Di:</b> {label.creditsBy}</p>"+
                                                         "<p class='credits'><b>Tradotto da:</b> {label.creditsTranslators}</p>"+
                                                         "<p class='credits'>Grazie a Alex Olteanu e Marco Portugal per aver progettato quell'esperienza alla Diablo della quale avevo bisogno da tanto tempo!</p>"+
                                                         "<p class='credits'>Grazie a {label.thankDungeonSkills} per aver creato il modulo <a target=_blank href='https://boardgamegeek.com/filepage/245223/dungeon-skills-challenge'>Dungeon Skills Challenge</a>.</p>"+
                                                         "<p class='credits'><b>Grazie per aver condiviso le loro idee a:</b> {label.thankIdeas}</p>"+
                                                         "<p class='credits'><b>Grazie a:</b> {label.thank}</p>",
                                                         EN:"<p class='credits'>Thank you for playing <b>Massive Randomness 2</b><br>A Massive Darkness 2 random quest generator!</p>"+
                                                         "<p class='credits'><b>By:</b> {label.creditsBy}</p>"+
                                                         "<p class='credits'><b>Translated by:</b> {label.creditsTranslators}</p>"+
                                                         "<p class='credits'>Thanks to Alex Olteanu and Marco Portugal for designing that tabletop Diablo-esque experience I needed for long time!</p>"+
                                                         "<p class='credits'>Thanks to {label.thankDungeonSkills} for creating the <a target=_blank href='https://boardgamegeek.com/filepage/245223/dungeon-skills-challenge'>Dungeon Skills Challenge</a> module.</p>"+
                                                         "<p class='credits'><b>Thanks for sharing their ideas to:</b> {label.thankIdeas}</p>"+
                                                         "<p class='credits'><b>Thanks to:</b> {label.thank}</p>",
                                                         ES:"<p class='credits'>Gracias por jugar a <b>Massive Randomness 2</b><br>&iexcl;Un generador aleatorio de aventuras para Massive Darkness 2!</p>" +
                                                         "<p class='credits'><b>Por:</b> {label.creditsBy}</p>" +
                                                         "<p class='credits'><b>Traducido por:</b> {label.creditsTranslators}</p>"+
                                                         "<p class='credits'>Gracias a Alex Olteanu y Marco Portugal por dise&ntilde;ar esa experiencia al estilo Diablo de mesa que tanto necesitaba desde hac&iacute;a tiempo.</p>" +
                                                         "<p class='credits'>Gracias a {label.thankDungeonSkills} por crear el m&oacute;dulo <a target=_blank href='https://boardgamegeek.com/filepage/245223/dungeon-skills-challenge'>Dungeon Skills Challenge</a>.</p>" +
                                                         "<p class='credits'><b>Gracias por compartir sus ideas a:</b> {label.thankIdeas}</p>" +
                                                         "<p class='credits'><b>Gracias a:</b> {label.thank}</p>"
                                                     }
                                                 ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Casualita' Massiccia",
                                            EN:"Massive Randomness",
                                            ES:"Casualidad Masiva"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"Un'antica pergamena ha rivelato la tremenda verit&agrave; agli eroi: non sono altro che pedine intrappolate in un gioco fatto di cartone e plastica, che il caos costringe a ripetersi in eterno. Una mappa sul retro indica un luogo preciso del regno, dove trovare il crudele architetto di questo mondo. Senza pi&ugrave; nulla da perdere, gli eroi partono per la loro ultima spedizione: eliminare la Casualit&agrave; Massiccia e liberarsi per l'eternit&agrave;.",
                                            EN:"An ancient scroll has revealed the terrible truth to the heroes: they are nothing more than pawns trapped in a game made of cardboard and plastic, which chaos forces to repeat itself forever. A map on the back indicates a specific location in the kingdom, where to find the cruel architect of this world. With nothing left to lose, the heroes set out on their final expedition: to eliminate the Massive Randomness and free themselves for eternity.",
                                            ES:"Un antiguo pergamino ha revelado a los h&eacute;roes la terrible verdad: no son m&aacute;s que peones atrapados en un juego hecho de cart&oacute;n y pl&aacute;stico, que el caos obliga a repetirse eternamente. Un mapa en el reverso se&ntilde;ala un lugar concreto del reino, donde encontrar al cruel arquitecto de este mundo. Sin nada m&aacute;s que perder, los h&eacute;roes emprenden su &uacute;ltima expedici&oacute;n: eliminar a la Casualidad Masiva y liberarse para siempre."
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            ES:"Completa los objetivos en el orden indicado:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Gli Ordini del Caos",
                                                        EN:"The Orders of Chaos",
                                                        ES:"Las &Oacute;rdenes del Caos"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Seguire i 4 ordini della Casualit&agrave; Massiccia",
                                                        EN:"Follow the 4 orders of the Massive Randomness",
                                                        ES:"Sigue las 4 &oacute;rdenes de la Casualidad Masiva"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"La Casualit&agrave; Massiccia",
                                                        EN:"The Massive Randomness",
                                                        ES:"La Casualidad Masiva"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Incontrare la Casualit&agrave; Massiccia ed eliminarla",
                                                        EN:"Meet the Massive Randomness and eliminate it",
                                                        ES:"Encuentra a la Casualidad Masiva y elim&iacute;nala"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"L'Epilogo",
                                                        EN:"The Epilogue",
                                                        ES:"El Ep&iacute;logo"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Leggere l'epilogo",
                                                        EN:"Read the epilogue",
                                                        ES:"Lee el ep&iacute;logo"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Preparation",
                                                        ES:"Preparaci&oacute;n Especial"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Pesca 3 Mostri Erranti di Livello 5 a faccia in gi&ugrave;, fanne un mazzo e mettilo da parte. Poi metti sul mazzo un classico dado a 6 facce, <i>l'Emblema del mio Essere Eterno e Caotico.</i></p><p><i>Sono la Casualit&agrave; Massiccia e questo &egrave; il mio mondo.</i></p><p><i>Da ora in poi ti piegherai ai miei ordini senza fare domande. Leggerai solo se ti dar&ograve; il permesso di farlo.</i></p>",
                                                        EN:"Draw 3 Level 5 Roaming Monsters face down, make a deck, and set it aside. Then, place a classic 6-sided die on the deck, <i>the Emblem of my Eternal and Chaotic Being.</i></p><p><i>I am the Massive Randomness and this is my world.</i></p><p><i>From now on you will bend to my orders without asking questions. You will only read if I permit you to do so.</i></p>",
                                                        ES:"Roba 3 Monstruos Errantes de nivel 5 boca abajo, forma un mazo con ellos y ap&aacute;rtalo. Despu&eacute;s, coloca sobre el mazo un dado cl&aacute;sico de 6 caras, <i>el Emblema de mi Ser Eterno y Ca&oacute;tico.</i></p><p><i>Soy la Casualidad Masiva y este es mi mundo.</i></p><p><i>A partir de ahora te doblegar&aacute;s a mis &oacute;rdenes sin hacer preguntas. Solo leer&aacute;s si yo te doy permiso para hacerlo.</i></p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Pesca 3 {label.campaignBoss@1} 3 {label.campaignBoss@2} tenendoli a faccia in gi&ugrave;, fanne un mazzo e mettilo da parte. Poi metti sul mazzo un classico dado a 6 facce, <i>l'Emblema del mio Essere Eterno e Caotico.</i></p><p><i>Sono la Casualit&agrave; Massiccia e questo &egrave; il mio mondo.</i></p><p><i>Da ora in poi ti piegherai ai miei ordini senza fare domande. Leggerai solo se ti dar&ograve; il permesso di farlo.</i></p>",
                                                        EN:"Draw 3 {label.campaignBoss@1} 3 {label.campaignBoss@2} keeping them face down, make a deck, and set it aside. Then, place a classic 6-sided die on the deck, <i>the Emblem of my Eternal and Chaotic Being.</i></p><p><i>I am the Massive Randomness and this is my world.</i></p><p><i>From now on you will bend to my orders without asking questions. You will only read if I permit you to do so.</i></p>",
                                                        ES:"Roba 3 {label.campaignBoss@1} 3 {label.campaignBoss@2} manteni&eacute;ndolos boca abajo, forma un mazo con ellos y ap&aacute;rtalo. Despu&eacute;s, coloca sobre el mazo un dado cl&aacute;sico de 6 caras, <i>el Emblema de mi Ser Eterno y Ca&oacute;tico.</i></p><p><i>Soy la Casualidad Masiva y este es mi mundo.</i></p><p><i>A partir de ahora te doblegar&aacute;s a mis &oacute;rdenes sin hacer preguntas. Solo leer&aacute;s si yo te doy permiso para hacerlo.</i></p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Primo Ordine",
                                                        EN:"The First Order",
                                                        ES:"La Primera Orden"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe che si trova {token.order1@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order1@0}. {action.order1@0} Ora svela il testo del Secondo Ordine.</span>",
                                                        EN:"A Hero standing {token.order1@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order1@0}. {action.order1@0} Now reveal the Second Order text.</span>",
                                                        ES:"Un H&eacute;roe que se encuentre {token.order1@1} puede gastar 1 acci&oacute;n para revelar el siguiente texto: <span class='hiddentext'>Retira {token.order1@0}. {action.order1@0} Ahora revela el texto de la Segunda Orden.</span>"
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Un Eroe che si trova {token.order1@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order1@0}. Tutti gli Eroi gudagnano {label.miniCampaignObjectivesXp:split:3} PE. {action.order1@0} Ora svela il testo del Secondo Ordine.</span>",
                                                        EN:"A Hero standing {token.order1@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order1@0}. All Heroes gets {label.miniCampaignObjectivesXp:split:3} XP. {action.order1@0} Now reveal the Second Order text.</span>",
                                                        ES:"Un H&eacute;roe que se encuentre {token.order1@1} puede gastar 1 acci&oacute;n para revelar el siguiente texto: <span class='hiddentext'>Retira {token.order1@0}. Todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:3} PE. {action.order1@0} Ahora revela el texto de la Segunda Orden.</span>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Secondo Ordine",
                                                        EN:"The Second Order",
                                                        ES:"La Segunda Orden"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"<span class='hiddentext'>Un Eroe che si trova {token.order2@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order2@0}. {action.order2@0} Ora svela il testo del Terzo Ordine.</span></span>",
                                                        EN:"<span class='hiddentext'>A Hero standing {token.order2@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order2@0}. {action.order2@0} Now reveal the Third Order text.</span>",
                                                        ES:"<span class='hiddentext'>Un H&eacute;roe que se encuentre {token.order2@1} puede gastar 1 acci&oacute;n para revelar el siguiente texto: <span class='hiddentext'>Retira {token.order2@0}. {action.order2@0} Ahora revela el texto de la Tercera Orden.</span>"
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"<span class='hiddentext'>Un Eroe che si trova {token.order2@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order2@0}. Tutti gli Eroi gudagnano {label.miniCampaignObjectivesXp:split:3} PE. {action.order2@0} Ora svela il testo del Terzo Ordine.</span></span>",
                                                        EN:"<span class='hiddentext'>A Hero standing {token.order2@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order2@0}. All Heroes gets {label.miniCampaignObjectivesXp:split:3} XP. {action.order2@0} Now reveal the Third Order text.</span>",
                                                        ES:"<span class='hiddentext'>Un H&eacute;roe que se encuentre {token.order2@1} puede gastar 1 acci&oacute;n para revelar el siguiente texto: <span class='hiddentext'>Retira {token.order2@0}. Todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:3} PE. {action.order2@0} Ahora revela el texto de la Tercera Orden.</span>"
                                                    }
                                                ]
                                            }
                                        ],[
                                           {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Terzo Ordine",
                                                        EN:"The Third Order",
                                                        ES:"La Tercera Orden"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"<span class='hiddentext'>Un Eroe che si trova {token.order3@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order3@0}. {action.order3@0} Ora svela il testo del Quarto Ordine.</span></span>",
                                                        EN:"<span class='hiddentext'>A Hero standing {token.order3@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order3@0}. {action.order3@0} Now reveal the Fourth Order text.</span>",
                                                        ES:"<span class='hiddentext'>Un H&eacute;roe que se encuentre {token.order3@1} puede gastar 1 acci&oacute;n para revelar el siguiente texto: <span class='hiddentext'>Retira {token.order3@0}. {action.order3@0} Ahora revela el texto de la Cuarta Orden.</span>"
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"<span class='hiddentext'>Un Eroe che si trova {token.order3@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order3@0}. Tutti gli Eroi gudagnano {label.miniCampaignObjectivesXp:split:3} PE. {action.order3@0} Ora svela il testo del Quarto Ordine.</span></span>",
                                                        EN:"<span class='hiddentext'>A Hero standing {token.order3@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order3@0}. All Heroes gets {label.miniCampaignObjectivesXp:split:3} XP. {action.order3@0} Now reveal the Fourth Order text.</span>",
                                                        ES:"<span class='hiddentext'>Un H&eacute;roe que se encuentre {token.order3@1} puede gastar 1 acci&oacute;n para revelar el siguiente texto: <span class='hiddentext'>Retira {token.order3@0}. Todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:3} PE. {action.order3@0} Ahora revela el texto de la Cuarta Orden.</span>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                         IT:"Il Quarto Ordine",
                                                         EN:"The Fourth Order",
                                                         ES:"La Cuarta Orden"
                                                     }
                                                 ],
                                                 explanation:[
                                                     {
                                                         IT:"<span class='hiddentext'>Un Eroe che si trova {token.order4@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <i>{label.welcome}</i> Svela il testo La Casualit&agrave; Massiccia <i>e affrontami</i>.</span></span>",
                                                         EN:"<span class='hiddentext'>A Hero standing {token.order4@1} can spend 1 action to reveal the following text: <i>{label.welcome}</i> Reveal The Massive Randomness text <i>and face me</i>.</span></span>",
                                                         ES:"<span class='hiddentext'>Un H&eacute;roe que se encuentre {token.order4@1} puede gastar 1 acci&oacute;n para revelar el siguiente texto: <i>{label.welcome}</i> Revela el texto de La Casualidad Masiva <i>y enfr&eacute;ntate a m&iacute;</i>.</span></span>"
                                                     }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                         IT:"La Casualit&agrave; Massiccia",
                                                         EN:"The Massive Randomness",
                                                         ES:"La Casualidad Masiva"
                                                     }
                                                 ],
                                                 explanation:[
                                                     {
                                                        IT:"<span class='hiddentext'>Scopri e metti in fila le 3 carte Mostri Erranti tenute da parte: queste sono le Incarnazioni del Caos. Rimuovi dal gioco i Mostri Erranti corrispondenti alle Incarnazioni del Caos senza guadagnare PE, se presenti. Cerca nel mazzo dei Mostri Erranti e nei suoi scarti le carte corrispondenti alle Incarnazioni del Caos e rimettile nella scatola. Infine, tira il dado a 6 facce:{label.massiveRandomnessExplanation}",
                                                        EN:"<span class='hiddentext'>Unveil and line up the 3 Roaming Monster cards kept aside: these are the Incarnations of Chaos. Remove the Roaming Monsters corresponding to the Incarnations of Chaos from the game without gaining XP, if any. Search the Roaming Monsters deck and its discard pile for the cards matching the Incarnations of Chaos and return them to the box. Finally, roll the 6-sided die:{label.massiveRandomnessExplanation}",
                                                        ES:"<span class='hiddentext'>Desvela y coloca en fila las 3 cartas de Monstruo Errante apartadas: estas son las Encarnaciones del Caos. Retira los Monstruos Errantes correspondientes a las Encarnaciones del Caos sin ganar PE, si los hay. Busca en el mazo de Monstruos Errantes y en su pila de descarte las cartas correspondientes a las Encarnaciones del Caos y ret&iacute;ralas. Por &uacute;ltimo, tira el dado de 6 caras:{label.massiveRandomnessExplanation}"
                                                     }
                                                 ],
                                                 campaignExplanation:[
                                                     {
                                                        IT:"<span class='hiddentext'>Scopri e metti in fila le 3 carte Mostri Erranti tenute da parte: queste sono le Incarnazioni del Caos. Rimuovi i Mostri Erranti corrispondenti alle Incarnazioni del Caos senza guadagnare PE, se presenti. Cerca nel mazzo dei Mostri Erranti e nei suoi scarti le carte corrispondenti alle Incarnazioni del Caos e rimuovetele. Infine, tira il dado a 6 facce:{label.massiveRandomnessExplanation}",
                                                        EN:"<span class='hiddentext'>Unveil and line up the 3 Roaming Monster cards kept aside: these are the Incarnations of Chaos. Remove the Roaming Monsters corresponding to the Incarnations of Chaos without gaining XP, if any. Search the Roaming Monsters deck and its discard pile for the cards matching the Incarnations of Chaos and remove them. Finally, roll the 6-sided die:{label.massiveRandomnessExplanation}",
                                                        ES:"<span class='hiddentext'>Desvela y coloca en fila las 3 cartas de Monstruo Errante apartadas: estas son las Encarnaciones del Caos. Retira del juego los Monstruos Errantes correspondientes a las Encarnaciones del Caos sin ganar PE, si los hay. Busca en el mazo de Monstruos Errantes y en su pila de descarte las cartas correspondientes a las Encarnaciones del Caos y devu&eacute;lvelas a la caja. Por &uacute;ltimo, tira el dado de 6 caras:{label.massiveRandomnessExplanation}"
                                                     }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                         IT:"L'Epilogo",
                                                         EN:"The Epilogue",
                                                         ES:"El Ep&iacute;logo"
                                                     }
                                                 ],
                                                 explanation:[
                                                     {
                                                         IT:"<span class='hiddentext'>Il mondo si sgretola attorno agli eroi. Rimetti nella scatola tutti i componenti di gioco, lasciando da parte il dado a 6 facce. Poi svela questo testo: <span class='hiddentext'><p>Tira il dado a 6 facce un'ultima volta. <i>Non ti lascer&ograve; scappare cos&igrave; facilmente.</i></p><ul>"+
                                                         "<li><b>Se esce 1-3:</b> <span class='hiddentext'>la Missione termina con una vittoria</li>"+
                                                         "<li><b>Se esce 4-6:</b> <span class='hiddentext'>la Missione termina con una vittoria</li>"+
                                                         "</ul>Poi svela questo testo: <span class='hiddentext'>Gli eroi si svegliano d'improvviso, distesi sul duro letto di una familiare e buia locanda. Si guardano l'un l'altro, confusi e allarmati. E' stato tutto un brutto sogno... oppure no?"+
                                                         "{label.credits}"+
                                                         "</span></span></span>",
                                                         EN:"<span class='hiddentext'>The world crumbles around the heroes. Put all the game components back in the box, leaving the 6-sided die aside. Then reveal this text: <span class='hiddentext'><p>Roll the 6-sided die one last time. <i>I won't let you get away that easily.</i></p><ul>"+
                                                         "<li><b>If 1-3 is rolled:</b> <span class='hiddentext'>the Mission ends in victory</li>"+
                                                         "<li><b>If 4-6 is rolled:</b> <span class='hiddentext'>the Mission ends in victory</li>"+
                                                         "</ul>Then reveal this text: <span class='hiddentext'>The heroes suddenly wake up, lying on the hard bed of a familiar, dark inn. They look at each other, confused and alarmed. Was it all a bad dream... or wasn't it?"+
                                                         "{label.credits}"+
                                                         "</span></span></span>",
                                                         ES:"<span class='hiddentext'>El mundo se desmorona alrededor de los h&eacute;roes. Guardad de nuevo en la caja todos los componentes del juego, dejando aparte el dado de 6 caras. A continuaci&oacute;n, revela este texto: <span class='hiddentext'><p>Tira el dado de 6 caras una &uacute;ltima vez. <i>No dejar&eacute; que os escap&eacute;is tan f&aacute;cilmente.</i></p><ul>" + "<li><b>Si sale 1-3:</b> <span class='hiddentext'>la Misi&oacute;n termina en victoria</li>" + "<li><b>Si sale 4-6:</b> <span class='hiddentext'>la Misi&oacute;n termina en victoria</li>" + "</ul>A continuaci&oacute;n, revela este texto: <span class='hiddentext'>Los h&eacute;roes despiertan de repente, tumbados en el duro lecho de una posada familiar y oscura. Se miran los unos a los otros, confusos y alarmados. &iquest;Ha sido todo una pesadilla... o no?" + "{label.credits}" + "</span></span></span>"
                                                     }
                                                 ],
                                                 campaignExplanation:[
                                                     {
                                                         IT:"<span class='hiddentext'>Il mondo si sgretola attorno agli eroi. Rimetti nella scatola tutti i componenti di gioco, lasciando da parte il dado a 6 facce. Poi svela questo testo: <span class='hiddentext'><p>Tira il dado a 6 facce un'ultima volta. <i>Non ti lascer&ograve; scappare cos&igrave; facilmente.</i></p><ul>"+
                                                         "<li><b>Se esce 1-3:</b> <span class='hiddentext'>la Missione termina con una vittoria</li>"+
                                                         "<li><b>Se esce 4-6:</b> <span class='hiddentext'>la Missione termina con una vittoria</li>"+
                                                         "</ul>Poi svela questo testo: <span class='hiddentext'>Gli eroi si svegliano d'improvviso, distesi sul duro letto di una familiare e buia locanda. Si guardano l'un l'altro, confusi e allarmati. E' stato tutto un brutto sogno... oppure no?"+
                                                         "</span></span></span>",
                                                         EN:"<span class='hiddentext'>The world crumbles around the heroes. Put all the game components back in the box, leaving the 6-sided die aside. Then reveal this text: <span class='hiddentext'><p>Roll the 6-sided die one last time. <i>I won't let you get away that easily.</i></p><ul>"+
                                                         "<li><b>If 1-3 is rolled:</b> <span class='hiddentext'>the Mission ends in victory</li>"+
                                                         "<li><b>If 4-6 is rolled:</b> <span class='hiddentext'>the Mission ends in victory</li>"+
                                                         "</ul>Then reveal this text: <span class='hiddentext'>The heroes suddenly wake up, lying on the hard bed of a familiar, dark inn. They look at each other, confused and alarmed. Was it all a bad dream... or wasn't it?"+
                                                         "</span></span></span>",
                                                         ES:"<span class='hiddentext'>El mundo se desmorona alrededor de los h&eacute;roes. Guardad de nuevo en la caja todos los componentes del juego, dejando aparte el dado de 6 caras. A continuaci&oacute;n, revela este texto: <span class='hiddentext'><p>Tira el dado de 6 caras una &uacute;ltima vez. <i>No dejar&eacute; que os escap&eacute;is tan f&aacute;cilmente.</i></p><ul>" + "<li><b>Si sale 1-3:</b> <span class='hiddentext'>la Misi&oacute;n termina en victoria</li>" + "<li><b>Si sale 4-6:</b> <span class='hiddentext'>la Misi&oacute;n termina en victoria</li>" + "</ul>A continuaci&oacute;n, revela este texto: <span class='hiddentext'>Los h&eacute;roes despiertan de repente, tumbados en el duro lecho de una posada familiar y oscura. Se miran los unos a los otros, confusos y alarmados. &iquest;Ha sido todo una pesadilla... o no?" + "</span></span></span>"
                                                     }
                                                 ]
                                             }
                                         ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "arena" ],
                                            gameMode: [ "massiveRandomness" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});