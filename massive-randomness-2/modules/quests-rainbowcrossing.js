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
                ES:[ "es eliminado", "es eliminada" ]
            }
        ];

    return [
        {
            id:"quests-rainbowcrossing",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-rainbowcrossing", "untranslated-fr" ],
            label:{
                 EN:"MD2: Rainbow Crossing inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"collectAndBoss",
                            objective:{
                                EN:"Collect tokens to make the boss vulnerable and beat it to win.",
                                ES:"Recoge marcadores para hacer vulnerable al jefe y derr&oacute;talo para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di MD2 Rainbow Crossing \"Bear Hugs\"",
                                EN:"Inspired by the MD2 Rainbow Crossing quest \"Bear Hugs\"",
                                ES:"Inspirado en la misi&oacute;n de MD2 Rainbow Crossing \"Bear Hugs\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                guardian:[
                                                    {
                                                        IT:[ "il Guardiano", "la Stretta del Guardiano", "la stretta del Guardiano lo eliminer&agrave;", "Stretta Mortale", "&egrave; diventato", "attaccato o influenzato", "lo", "rimasto sopito", "lo ha reso", "lo acceca", "colpito normalmente", "di liberarlo" ],
                                                        EN:[ "the Guardian", "the Guardian's Grip", "the Guardian's grip will eliminate it", "Deathgrip", "has become", "attacked or affected", "it", "has remained dormant", "has made it", "blinds it", "hit normally", "to free him" ],
                                                        ES:[ "el Guardi&aacute;n", "la Garra del Guardi&aacute;n", "la garra del Guardi&aacute;n lo eliminar&aacute;", "Garra Mortal", "se ha vuelto", "atacado o afectado", "lo", "ha permanecido dormido", "lo ha vuelto", "lo ciega", "golpeado con normalidad", "liberarlo" ]
                                                    },{
                                                        IT:[ "la Fiera", "la Morsa della Fiera", "la morsa della Fiera lo eliminer&agrave;", "Morsa Fatale", "&egrave; diventata", "attaccata o influenzata", "la", "rimasta sopita", "lo ha resa", "la acceca", "colpita normalmente", "di liberarla" ],
                                                        EN:[ "the Creature", "the Creature's Grip", "the Creature's grip will eliminate it", "Fatal Grip", "has become", "attacked or affected", "it", "has remained dormant", "has made it", "blinds it", "hit normally", "to free it" ],
                                                        ES:[ "la Criatura", "la Garra de la Criatura", "la garra de la Criatura lo eliminar&aacute;", "Garra Fatal", "se ha vuelto", "atacada o afectada", "la", "ha permanecido dormida", "la ha vuelto", "la ciega", "golpeada con normalidad", "liberarla" ]
                                                    },{
                                                        IT:[ "la Bestia", "la Stretta della Bestia", "la stretta della Bestia lo eliminer&agrave;", "Stretta Bestiale", "&egrave; diventata", "attaccata o influenzata", "la", "rimasta sopita", "lo ha resa", "la acceca", "colpita normalmente", "di liberarla" ],
                                                        EN:[ "the Beast", "the Beast's Grip", "the Beast's grip will eliminate it", "Beast's Grip", "has become", "attacked or affected", "it", "left dormant", "has made it", "blinds it", "hit normally", "to free it" ],
                                                        ES:[ "la Bestia", "la Garra de la Bestia", "la garra de la Bestia lo eliminar&aacute;", "Garra Bestial", "se ha vuelto", "atacada o afectada", "la", "ha permanecido dormida", "la ha vuelto", "la ciega", "golpeada con normalidad", "liberarla" ]
                                                    }
                                                ],
                                                type:[
                                                    {
                                                        IT:[ "&egrave; una creatura solitamente pacifica ma," ],
                                                        EN:[ "is usually peaceful but," ],
                                                        ES:[ "suele ser una criatura pac&iacute;fica, pero," ]
                                                    },{
                                                        IT:[ "non ha mai lasciato il suo Regno ma," ],
                                                        EN:[ "has never left its Kingdom but," ],
                                                        ES:[ "nunca ha abandonado su Reino, pero," ]
                                                    },{
                                                        IT:[ "&egrave; {label.guardian@7} in un lungo sonno ma ora," ],
                                                        EN:[ "{label.guardian@7} in a long sleep but now," ],
                                                        ES:[ "{label.guardian@7} en un largo sue&ntilde;o, pero ahora," ]
                                                    }
                                                ],
                                                reason:[
                                                    {
                                                        IT:[ "a causa della corruzione Oscura," ],
                                                        EN:[ "due to the Dark corruption," ],
                                                        ES:[ "debido a la corrupci&oacute;n de la Oscuridad," ]
                                                    },{
                                                        IT:[ "per qualche misterioso motivo," ],
                                                        EN:[ "for some mysterious reason," ],
                                                        ES:[ "por alg&uacute;n misterioso motivo," ]
                                                    },{
                                                        IT:[ "dopo la Grande Guerra," ],
                                                        EN:[ "after the Great War," ],
                                                        ES:[ "tras la Gran Guerra," ]
                                                    }
                                                ],
                                                effect:[
                                                    {
                                                        IT:[ "{label.guardian@4} terribilmente potente" ],
                                                        EN:[ "it {label.guardian@4} scaringly powerful" ],
                                                        ES:[ "{label.guardian@4} terriblemente poderoso" ]
                                                    },{
                                                        IT:[ "una rabbia incontenibile {label.guardian@8} inarrestabile" ],
                                                        EN:[ "an uncontrollable rage {label.guardian@8} unstoppable" ],
                                                        ES:[ "una rabia incontrolable {label.guardian@8} imparable" ]
                                                    },{
                                                        IT:[ "un implacabile desiderio di distruzione {label.guardian@9}" ],
                                                        EN:[ "a relentless desire for destruction {label.guardian@9}" ],
                                                        ES:[ "un implacable deseo de destrucci&oacute;n {label.guardian@9}" ]
                                                    }
                                                ],
                                                spell:[
                                                    {
                                                        IT:[ "spezzare l'Incantesimo", "spezza l'Incantesimo che influenza", "l'Incantesimo", "le Gemme dell'Incantesimo", "una Gemma dell'Incantesimo", "spezzare l'Incantesimo che {label.guardian@6} influenza", "tutte le Gemme dell'Incantesimo" ],
                                                        EN:[ "break the Spell", "break the Spell that affects", "the Spell", "the Spell Gems", "a Spell Gem", "break the Spell that affects {label.guardian@6}", "all the Spell Gems" ],
                                                        ES:[ "romper el Hechizo", "romper el Hechizo que afecta a", "el Hechizo", "las Gemas del Hechizo", "una Gema del Hechizo", "romper el Hechizo que {label.guardian@6} afecta", "todas las Gemas del Hechizo" ]
                                                    },{
                                                        IT:[ "sciogliere la Maledizione", "scogliere la Maledizione che influenza", "la Maledizione", "i Totem della Maledizione", "un Totem della Maledizione", "sciogliere la Maledizione che {label.guardian@6} influenza", "tutti i Totem della Maledizione" ],
                                                        EN:[ "remove the Curse", "remove the Curse that affects", "the Curse", "the Curse Totems", "a Curse Totem", "remove the Curse that affects {label.guardian@6}", "all the Curse Totems" ],
                                                        ES:[ "deshacer la Maldici&oacute;n", "deshacer la Maldici&oacute;n que afecta a", "la Maldici&oacute;n", "los T&oacute;tems de la Maldici&oacute;n", "un T&oacute;tem de la Maldici&oacute;n", "deshacer la Maldici&oacute;n que {label.guardian@6} afecta", "todos los T&oacute;tems de la Maldici&oacute;n" ]
                                                    },{
                                                        IT:[ "annullare il Sortilegio", "annullare il Sortilegio che influenza", "il Sortilegio", "le Sfere del Sortilegio", "una Sfera del Sortilegio", "spezzare il Sortilegio che {label.guardian@6} influenza", "tutte le Sfere del Sortilegio" ],
                                                        EN:[ "cancel the Spell", "cancel the Spell that affects", "the Spell", "the Spell Spheres", "a Spell Sphere", "break the Spell that affects {label.guardian@6}", "all the Spell Spheres" ],
                                                        ES:[ "anular el Conjuro", "anular el Conjuro que afecta a", "el Conjuro", "las Esferas del Conjuro", "una Esfera del Conjuro", "romper el Conjuro que {label.guardian@6} afecta", "todas las Esferas del Conjuro" ]
                                                    }
                                                ],
                                                hope:[
                                                    {
                                                        IT:[ "sperando {label.guardian@11} dalla morsa dell'Oscurit&agrave;!" ],
                                                        EN:[ "hoping {label.guardian@11} from the grip of the Darkness!" ],
                                                        ES:[ "con la esperanza de {label.guardian@11} de las garras de la Oscuridad!" ]
                                                    },{
                                                        IT:[ "cercando di non rimetterci la pelle!" ],
                                                        EN:[ "trying not to lose our skin!" ],
                                                        ES:[ "tratando de salvar el pellejo!" ]
                                                    },{
                                                        IT:[ "o altrimenti..." ],
                                                        EN:[ "or else..." ],
                                                        ES:[ "o si no...!" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a eliminare {label.spell@6}", "eliminando tutti i segnalini Obiettivo sul lato colorato" , "{tokensCount.objective}" ],
                                                        EN:[ "to eliminate {label.spell@6}", "eliminating all the Objective token on the colored side", "{tokensCount.objective}"],
                                                        ES:[ "eliminar {label.spell@6}", "eliminando todos los marcadores de Objetivo con el lado de color hacia arriba", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.guardian:capital@3}",
                                            ES:"{label.guardian:capital@3}"
                                        },{
                                            EN:"{label.spell:capital@0}",
                                            ES:"{label.spell:capital@0}"
                                        },{
                                            EN:"{label.spell:capital@3}",
                                            ES:"{label.spell:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.guardian:capital@0} {label.type@0} {label.reason@0} {label.effect@0}. Gli Eroi devono {label.spell@5}, {label.hope@0}",
                                            EN:"{label.guardian:capital@0} {label.type@0} {label.reason@0} {label.effect@0}. Heroes must {label.spell@5}, {label.hope@0}",
                                            ES:"{label.guardian:capital@0} {label.type@0} {label.reason@0} {label.effect@0}. Los H&eacute;roes deben {label.spell@5}, {label.hope@0}"
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
                                                        EN:"{label.spell:capital@0}",
                                                        ES:"{label.spell:capital@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"{label.spell:capital@1} {label.guardian@0}",
                                                        ES:"{label.spell:capital@1} {label.guardian@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.guardian@0}",
                                                        EN:"Defeat {label.guardian@0}",
                                                        ES:"Derrotar a {label.guardian@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Elimina {label.guardian@0}",
                                                        EN:"Eliminate {label.guardian@0}",
                                                        ES:"Eliminar a {label.guardian@0}"
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
                                                        IT:"Generare un Mostro Errante di livello 5 nella Zona contrassegnata dal segnalino Corruzione {symbol.corruptionToken} e rimuovi quel segnalino. Questo &egrave; {label.guardian@0}.",
                                                        EN:"Generate a Level 5 Roaming Monster in the Corruption token {symbol.corruptionToken} Zone and remove that token. This is {label.guardian@0}.",
                                                        ES:"Genera un Monstruo Errante de nivel 5 en la Zona marcada con el marcador de Corrupci&oacute;n {symbol.corruptionToken} y retira ese marcador. Se trata de {label.guardian@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT: "Generare {label.campaignBoss@0} nella Zona contrassegnata dal segnalino Corruzione {symbol.corruptionToken} e rimuovi quel segnalino. Questo &egrave; {label.guardian@0}.",
                                                        EN: "Spawn {label.campaignBoss@0} in the Corruption token {symbol.corruptionToken} Zone and remove that token. This is {label.guardian@0}.",
                                                        ES:"Genera {label.campaignBoss@0} en la Zona marcada con el marcador de Corrupci&oacute;n {symbol.corruptionToken} y retira ese marcador. Se trata de {label.guardian@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.guardian:capital@0}",
                                                        ES:"{label.guardian:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se non sono stati eliminati {label.collectOptionalItems@2} segnalini Obiettivo sul lato colorato, {label.guardian@0} non pu&ograve; essere {label.guardian@5} da qualsiasi abilit&agrave; o effetto, gli Eroi non possono entrare nella sua Zona e all'inizio di ogni Fase dei Nemici {label.guardian@0} si muove di 2 Zone verso l'Eroe pi&ugrave; vicino. Se {label.guardian@0} entra nella Zona di un Eroe, {label.guardian@2} e la Missione termina con una sconfitta.",
                                                        EN:"If {label.collectOptionalItems@2} Objective tokens on the colored side haven't been removed, {label.guardian@0} cannot be {label.guardian@5} by any ability or effect, Heroes cannot enter its Zone, and at the start of each Enemy Phase {label.guardian@0} moves 2 Zones toward the closest Hero. If {label.guardian@0} enters a Hero's Zone, {label.guardian@2} and the Mission ends in defeat.",
                                                        ES:"Si no se han retirado {label.collectOptionalItems@2} marcadores de Objetivo con el lado de color hacia arriba, {label.guardian@0} no puede ser {label.guardian@5} por ninguna habilidad o efecto, los H&eacute;roes no pueden entrar en su Zona y, al principio de cada Fase de los Enemigos, {label.guardian@0} se mueve 2 Zonas hacia el H&eacute;roe m&aacute;s cercano. Si {label.guardian@0} entra en la Zona de un H&eacute;roe, {label.guardian@2} y la Misi&oacute;n termina en derrota."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.spell:capital@2}",
                                                        ES:"{label.spell:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato colorato rappresentano {label.spell@3}. Qualsiasi Eroe nella Zona di {label.spell@4} pu&ograve; spendere 1 azione per scartare il segnalino. Ogni volta che un segnalino viene scartato, tutti gli Eroi guadagnano 5 PE. Una volta che {label.collectOptionalItems@2} segnalini Obiettivo sul lato colorato sono stati rimossi, {label.guardian@0} pu&ograve; essere {label.guardian@10}.",
                                                        EN:"The Objective tokens on the colored side represent {label.spell@3}. Any Hero in {label.spell@4}'s Zone can spend 1 action to discard the token. Each time a token is discarded, all Heroes gets 5 XP. Once {label.collectOptionalItems@2} Objective tokens on the colored side have been removed, {label.guardian@0} can be {label.guardian@10}.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.spell@3}. Cualquier H&eacute;roe en la Zona de {label.spell@4} puede gastar 1 acci&oacute;n para descartar el marcador. Cada vez que se descarta un marcador, todos los H&eacute;roes ganan 5 PE. Una vez que se hayan retirado {label.collectOptionalItems@2} marcadores de Objetivo con el lado de color hacia arriba, {label.guardian@0} puede ser {label.guardian@10}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato colorato rappresentano {label.spell@3}. Qualsiasi Eroe nella Zona di {label.spell@4} pu&ograve; spendere 1 azione per scartare il segnalino. Una volta che {label.collectOptionalItems@2} segnalini Obiettivo sul lato colorato sono stati rimossi, {label.guardian@0} pu&ograve; essere {label.guardian@10}.",
                                                        EN:"The Objective tokens on the colored side represent {label.spell@3}. Any Hero in {label.spell@4}'s Zone can spend 1 action to discard the token. Once {label.collectOptionalItems@2} Objective tokens on the colored side have been removed, {label.guardian@0} can be {label.guardian@10}.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.spell@3}. Cualquier H&eacute;roe en la Zona de {label.spell@4} puede gastar 1 acci&oacute;n para descartar el marcador. Una vez que se hayan retirado {label.collectOptionalItems@2} marcadores de Objetivo con el lado de color hacia arriba, {label.guardian@0} puede ser {label.guardian@10}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato colorato rappresentano {label.spell@3}. Qualsiasi Eroe nella Zona di {label.spell@4} pu&ograve; spendere 1 azione per scartare il segnalino. Ogni volta che un segnalino viene scartato, tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una volta che {label.collectOptionalItems@2} segnalini Obiettivo sul lato colorato sono stati rimossi, {label.guardian@0} pu&ograve; essere {label.guardian@10}.",
                                                        EN:"The Objective tokens on the colored side represent {label.spell@3}. Any Hero in {label.spell@4}'s Zone can spend 1 action to discard the token. Each time a token is discarded, all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Once {label.collectOptionalItems@2} Objective tokens on the colored side have been removed, {label.guardian@0} can be {label.guardian@10}.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.spell@3}. Cualquier H&eacute;roe en la Zona de {label.spell@4} puede gastar 1 acci&oacute;n para descartar el marcador. Cada vez que se descarta un marcador, todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una vez que se hayan retirado {label.collectOptionalItems@2} marcadores de Objetivo con el lado de color hacia arriba, {label.guardian@0} puede ser {label.guardian@10}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Faccia a Faccia",
                                                        EN:"Face to Face",
                                                        ES:"Cara a Cara"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se gli eroi sconfiggono {label.guardian:capital@0} {label.questVictory@0}.",
                                                        EN:"If the heroes defeat {label.guardian:capital@0} {label.questVictory@0}.",
                                                        ES:"Si los h&eacute;roes derrotan a {label.guardian@0}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path" ],
                                            gameMode: [ "chase" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "chase" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItems" ]
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
                                                    IT:"Risolvere la questione una volta per tutte sconfiggendo {boss.bossBadName@0}",
                                                    EN:"Solve the issue once and for all by defeating {boss.bossBadName@0}",
                                                    ES:"Resolver la cuesti&oacute;n de una vez por todas derrotando a {boss.bossBadName@0}"
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
        }
    ]

});