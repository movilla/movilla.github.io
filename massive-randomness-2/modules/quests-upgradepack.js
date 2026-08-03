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
            id:"quests-upgradepack",
            needs:[ "quests-default", "md2-upgradepack" ],
            provides:[ "quests", "quests-upgradepack", "untranslated-fr" ],
            label:{
                EN:"MD2 Upgrade pack inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"keyToBoss",
                            objective:{
                                EN:"Collect keys to unlock a Roaming Monster. Eliminate it to win.",
                                ES:"Recoge llaves para desbloquear a un Monstruo Errante. Elim&iacute;nalo para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Il Tesoro dell'Immondo\"",
                                EN:"Inspired by the Upgrade Pack quest \"The Fiend's Treasure\"",
                                ES:"Inspirado en la aventura del Pack de Mejora \"The Fiend's Treasure\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                imprisonedBy:[
                                                    {
                                                        IT:[ "Il Mago della Vallata", "Ha bisogno di proseguire il suo viaggio e ha chiesto agli Eroi di aiutarlo ad", "riuscito" ],
                                                        EN:[ "The Wizard of the Valley", "He needs to continue his journey and has asked the Heroes to help him", "manage" ],
                                                        ES:[ "El Mago del Valle", "Necesita continuar su viaje y ha pedido a los H&eacute;roes que le ayuden a", "consigui&oacute;" ]
                                                    },{
                                                        IT:[ "La Guardia Cittadina", "&Egrave; fuggito di corsa non appena ha potuto ed ha lasciato agli eroi il compito di", "riuscita" ],
                                                        EN:[ "The City Guard", "He ran away as fast as he could and left the heroes", "manage" ],
                                                        ES:[ "La Guardia de la Ciudad", "Huy&oacute; corriendo en cuanto pudo y dej&oacute; a los H&eacute;roes la tarea de", "consigui&oacute;" ]
                                                    },{
                                                        IT:[ "Una giovane guerriero", "Il ragazzo &egrave; sopravvissuto per miracolo... ma ora tocca agli Eroi", "riuscito" ],
                                                        EN:[ "A young warrior", "The boy miraculously survived... but now it's the Heroes' turn", "manage" ],
                                                        ES:[ "Un joven guerrero", "El muchacho sobrevivi&oacute; de milagro... pero ahora les toca a los H&eacute;roes", "consigui&oacute;" ]
                                                    }

                                                ],
                                                prisonAction:[
                                                    {
                                                        IT:[ "ha rinchiuso" ],
                                                        EN:[ "locked up" ],
                                                        ES:[ "encerr&oacute;" ]
                                                    },{
                                                        IT:[ "ha intrappolato" ],
                                                        EN:[ "trapped" ],
                                                        ES:[ "atrap&oacute;" ]
                                                    },{
                                                        IT:[ "ha imprigionato" ],
                                                        EN:[ "imprisoned" ],
                                                        ES:[ "aprision&oacute;" ]
                                                    }
                                                ],
                                                prison:[
                                                    {
                                                        IT:[ "in una stanza all'interno del dungeon che stava esplorando", "Chiavi", "le", "Chiavi Nascoste", "&egrave; chiusa a chiave", "essere raccolte", "state raccolte", "raccogliere tutte", "raccogliendo" ],
                                                        EN:[ "in a room inside the dungeon he was exploring", "Keys", "the", "Hidden Keys", "is locked", "collected", "collected", "collect all", "collecting" ],
                                                        ES:[ "en una sala dentro de la mazmorra que estaba explorando", "Llaves", "las", "Llaves Ocultas", "est&aacute; cerrada con llave", "ser recogidas", "recogidas", "recoger todas las", "recogiendo" ]
                                                    },{
                                                        IT:[ "in un cerchio magico di una stanza delle segrete che stava pattugliando", "Sigilli", "i", "Sigilli Magici", "&egrave; sigillata dalla magia", "essere raccolti", "stati raccolti", "raccogliere tutti", "raccogliendo" ],
                                                        EN:[ "in a magic circle of a dungeon room he was patrolling", "Seals", "the", "Magic Seals", "is sealed by magic", "collected", "collected", "collect all", "collecting" ],
                                                        ES:[ "en un c&iacute;rculo m&aacute;gico de una sala de la mazmorra que estaba patrullando", "Sellos", "los", "Sellos M&aacute;gicos", "est&aacute; sellada por magia", "ser recogidos", "recogidos", "recoger todos los", "recogiendo" ]
                                                    },{
                                                        IT:[ "in una delle prigioni del dungeon", "Leve", "le", "Leve di Sicurezza", "&egrave; bloccata da un meccanismo", "essere tirate", "state tirate", "tirare tutte", "tirando" ],
                                                        EN:[ "in one of the prisons of the dungeon", "Levers", "the", "Safety Levers", "it is blocked by a mechanism", "pulled", "pulled", "pull all", "pulling" ],
                                                        ES:[ "en una de las prisiones de la mazmorra", "Palancas", "las", "Palancas de Seguridad", "est&aacute; bloqueada por un mecanismo", "ser tiradas", "tiradas", "tirar todas las", "tirando" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "ma non &egrave; {label.imprisonedBy@2} a {label.prisoner@5}." ],
                                                        EN:[ "but it didn't {label.imprisonedBy@2} to {label.prisoner@5}." ],
                                                        ES:[ "Pero no {label.imprisonedBy@2} {label.prisoner@5}." ]
                                                    },{
                                                        IT:[ "ma non &egrave; {label.imprisonedBy@2} a liberarsene." ],
                                                        EN:[ "but it didn't {label.imprisonedBy@2} to get rid of it." ],
                                                        ES:[ "Pero no {label.imprisonedBy@2} librarse del problema." ]
                                                    },{
                                                        IT:[ "e non &egrave; {label.imprisonedBy@2} a fare altro." ],
                                                        EN:[ "and it didn't {label.imprisonedBy@2} to do anything else." ],
                                                        ES:[ "Y no {label.imprisonedBy@2} hacer nada m&aacute;s." ]
                                                    }
                                                ],
                                                prisoner:[
                                                    {
                                                        IT:[ "Creatura Corrotta", "una Creatura Corrotta", "la Creatura Corrotta", "la Camera della Creatura Corrotta", "della Camera della Creatura Corrotta", "ucciderla", "rinchiusa", "attaccata", "bersagliata", "Questa &egrave; la Creatura Corrotta.", "della Creatura Corrotta" ],
                                                        EN:[ "Corrupted Creature", "a Corrupted Creature", "the Corrupted Creature", "the Chamber of the Corrupted Creature", "of the Chamber of the Corrupted Creature", "kill it", "locked-up", "attacked", "targeted ", "This is the Corrupted Creature.", "the Corrupted Creature" ],
                                                        ES:[ "Criatura Corrupta", "una Criatura Corrupta", "la Criatura Corrupta", "la C&aacute;mara de la Criatura Corrupta", "de la C&aacute;mara de la Criatura Corrupta", "matarla", "encerrada", "atacada", "se&ntilde;alada", "Esta es la Criatura Corrupta.", "de la Criatura Corrupta" ]
                                                    },{
                                                        IT:[ "Essere Oscuro", "un Essere Oscuro", "l'Essere Oscuro", "la Camera dell'Essere Oscuro", "della Camera dell'Essere Oscuro", "ucciderlo", "rinchiuso", "attaccato", "bersagliato", "Questo &egrave; l'Essere Oscuro.", "dell'Essere Oscuro" ],
                                                        EN:[ "Dark Being", "a Dark Being", "the Dark Being", "the Chamber of the Dark Being", "of the Chamber of the Dark Being", "kill him", "locked-up", "attacked" , "targeted", "This is the Dark Being.", "the Dark Being" ],
                                                        ES:[ "Ser Oscuro", "un Ser Oscuro", "el Ser Oscuro", "la C&aacute;mara del Ser Oscuro", "de la C&aacute;mara del Ser Oscuro", "matarlo", "encerrado", "atacado", "se&ntilde;alado", "Este es el Ser Oscuro.", "del Ser Oscuro" ]
                                                    },{
                                                        IT:[ "Entit&agrave; Spezzata", "un'Entit&agrave; Spezzata", "l'Entit&agrave; Spezzata", "la Camera dell'Entit&agrave; Spezzata", "della Camera dell'Entit&agrave; Spezzata", "ucciderla", "rinchiusa", "attaccata", "bersagliata", "Questa &egrave; l'Entit&agrave; Spezzata.", "dell'Entit&agrave; Spezzata" ],
                                                        EN:[ "Broken Entity", "a Broken Entity", "the Broken Entity", "the Chamber of the Broken Entity", "of the Chamber of the Broken Entity", "kill it", "locked-up", "attacked", "targeted", "This is the Broken Entity.", "the Broken Entity" ],
                                                        ES:[ "Entidad Quebrada", "una Entidad Quebrada", "la Entidad Quebrada", "la C&aacute;mara de la Entidad Quebrada", "de la C&aacute;mara de la Entidad Quebrada", "matarla", "encerrada", "atacada", "se&ntilde;alada", "Esta es la Entidad Quebrada.", "de la Entidad Quebrada" ]
                                                    }
                                                ],
                                                heroTask:[
                                                    {
                                                        IT:[ "uccidere {label.prisoner@2}." ],
                                                        EN:[ "to kill {label.prisoner@2}." ],
                                                        ES:[ "matar a {label.prisoner@2}." ]
                                                    },{
                                                        IT:[ "eliminare {label.prisoner@2}." ],
                                                        EN:[ "to eliminate {label.prisoner@2}." ],
                                                        ES:[ "eliminar a {label.prisoner@2}." ]
                                                    },{
                                                        IT:[ "togliere di mezzo {label.prisoner@2}." ],
                                                        EN:[ "to get rid of {label.prisoner@2}." ],
                                                        ES:[ "acabar con {label.prisoner@2}." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a {label.prison@7} {label.prison@2} {label.prison@3}", "{label.prison@8} {label.collectOptionalItems@3} {label.prison@3}", "{tokensCount.objective}" ],
                                                        EN:[ "to {label.prison@7} all the {label.prison@3}", "{label.prison@8} {label.collectOptionalItems@3} {label.prison@3}", "{tokensCount.objective}"],
                                                        ES:[ "a {label.prison@7} {label.prison@3}", "{label.prison@8} {label.collectOptionalItems@3} {label.prison@3}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.prisoner:capital@2}",
                                            ES:"{label.prisoner:capital@2}"
                                        },{
                                            EN:"{label.prisoner:capital@3}",
                                            ES:"{label.prisoner:capital@3}"
                                        },{
                                            EN:"{label.prison:capital@2} {label.prison:capital@3}",
                                            ES:"{label.prison:capital@2} {label.prison:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.imprisonedBy@0} {label.prisonAction@0} {label.prisoner@1} {label.prison@0} {label.but@0} {label.imprisonedBy@1} {label.heroTask@0}",
                                            ES:"{label.imprisonedBy@0} {label.prisonAction@0} {label.prisoner@1} {label.prison@0} {label.but@0} {label.imprisonedBy@1} {label.heroTask@0}"
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
                                                        EN:"{label.prison@3}",
                                                        ES:"{label.prison@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Trovare {label.prison@2} {label.collectOptionalItems@2} {label.prison@1}",
                                                        EN:"Find {label.prison@2} {label.collectOptionalItems@2} {label.prison@1}",
                                                        ES:"Encontrar {label.prison@2} {label.collectOptionalItems@2} {label.prison@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Scatenare il Mostro",
                                                        EN:"Unleash the Monster",
                                                        ES:"Liberar al Monstruo"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.prison@2} {label.prison@1} per aprire la porta dell'ultima Camera",
                                                        EN:"Use {label.prison@2} {label.prison@1} to open the door to the final Chamber",
                                                        ES:"Usar {label.prison@2} {label.prison@1} para abrir la puerta de la C&aacute;mara final"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere il Mostro",
                                                        EN:"Kill the Monster",
                                                        ES:"Matar al Monstruo"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.prisoner@2} {label.prisoner@6}",
                                                        EN:"Kill the {label.prisoner@6} {label.prisoner@0}",
                                                        ES:"Matar a {label.prisoner@2}"
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
                                                        IT:"Generare un Mostro Errante di Livello 5 nella Zona indicata dal segnalino Corruzione {symbol.corruptionToken} (rimuovere tutte le altre carte di quel mostro dagli altri mazzi dei Mostri Erranti). {label.prisoner@9} Rimuovere poi il segnalino Corruzione.",
                                                        EN:"Spawn a random Level 5 Roaming Monster in the Zone indicated by the Corruption token {symbol.corruptionToken} (remove all other cards of that monster from other Roaming Monster decks). {label.prisoner@9} Then remove the Corruption token.",
                                                        ES:"Genera un Monstruo Errante de nivel 5 aleatorio en la Zona indicada por el marcador de Corrupci&oacute;n {symbol.corruptionToken} (retira todas las dem&aacute;s cartas de ese monstruo de los otros mazos de Monstruos Errantes). {label.prisoner@9} A continuaci&oacute;n, retira el marcador de Corrupci&oacute;n."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Generare {label.campaignBoss@0} nella Zona indicata dal segnalino Corruzione {symbol.corruptionToken} (rimuovere tutte le altre carte di quel mostro dagli altri mazzi dei Mostri Erranti). {label.prisoner@9} Rimuovere poi il segnalino Corruzione.",
                                                        EN:"Spawn {label.campaignBoss@0} in the Zone indicated by the Corruption token {symbol.corruptionToken} (remove all other cards of that monster from other Roaming Monster decks). {label.prisoner@9} Then remove the Corruption token.",
                                                        ES:"Genera {label.campaignBoss@0} en la Zona indicada por el marcador de Corrupci&oacute;n {symbol.corruptionToken} (retira todas las dem&aacute;s cartas de ese monstruo de los otros mazos de Monstruos Errantes). {label.prisoner@9} A continuaci&oacute;n, retira el marcador de Corrupci&oacute;n."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.prisoner:capital@2} {label.prisoner:capital@6}",
                                                        EN:"The {label.prisoner:capital@6} {label.prisoner@0}",
                                                        ES:"{label.prisoner:capital@2} {label.prisoner@6}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "{label.prisoner:capital@3} {label.prison@4}. Pu&ograve; essere aperta soltanto una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}. {label.prisoner:capital@2} non si attiva finch&eacute; la sua Camera non viene aperta. {label.prisoner:capital@2} non pu&ograve; essere {label.prisoner@7} o {label.prisoner@8} da alcuna capacit&agrave; o effetto finch&eacute; {label.prisoner@3} non viene aperta. Quando {label.prisoner@2} viene sconfitto {label.questVictory@0}.",
                                                        EN: "{label.prisoner:capital@3} {label.prison@4}. It can only be opened once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}. {label.prisoner:capital@2} does not activate until its Chamber is opened. {label.prisoner:capital@2} cannot be {label.prisoner@7} or {label.prisoner@8} by any ability or effect until {label.prisoner@3} is opened. When {label.prisoner@2} is defeated {label.questVictory@0}.",
                                                        ES:"{label.prisoner:capital@3} {label.prison@4}. Solo puede abrirse una vez que {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} han sido {label.prison@6}. {label.prisoner:capital@2} no se activa hasta que se abre su C&aacute;mara. {label.prisoner:capital@2} no puede ser {label.prisoner@7} ni {label.prisoner@8} por ninguna habilidad o efecto hasta que se abre {label.prisoner@3}. Cuando se derrota a {label.prisoner@2}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.prison@1}",
                                                        ES:"{label.prison@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.prison:capital@2} {label.prison@1} sono rappresentate dai segnalini Obiettivo. Possono {label.prison@5} spendendo 1 PM. Un Eroe che raccoglie un segnalino Obiettivo ottiene 5 PE e scarta il segnalino. Una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}, la porta speciale {label.prisoner@4} pu&ograve; essere aperta da qualsiasi Eroe.",
                                                        EN:"{label.prison:capital@2} {label.prison@1} are represented by Objective tokens. They can be {label.prison@5} by spending 1 MP. The Hero who collects an Objective token gains 5 XP and discards the token. Once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}, the special door {label.prisoner@4} can be opened by any Hero.",
                                                        ES:"{label.prison:capital@2} {label.prison@1} se representan mediante marcadores de Objetivo. Pueden {label.prison@5} gastando 1 PM. El H&eacute;roe que recoge un marcador de Objetivo gana 5 PE y descarta el marcador. Una vez que {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} han sido {label.prison@6}, la puerta especial {label.prisoner@4} puede abrirse por cualquier H&eacute;roe."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.prison:capital@2} {label.prison@1} sono rappresentate dai segnalini Obiettivo. Possono {label.prison@5} spendendo 1 PM. Un Eroe che raccoglie un segnalino Obiettivo lo scarta. Una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}, la porta speciale {label.prisoner@4} pu&ograve; essere aperta da qualsiasi Eroe.",
                                                        EN:"{label.prison:capital@2} {label.prison@1} are represented by Objective tokens. They can be {label.prison@5} by spending 1 MP. The Hero who collects an Objective token discards it. Once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}, the special door {label.prisoner@4} can be opened by any Hero.",
                                                        ES:"{label.prison:capital@2} {label.prison@1} se representan mediante marcadores de Objetivo. Pueden {label.prison@5} gastando 1 PM. El H&eacute;roe que recoge un marcador de Objetivo lo descarta. Una vez que {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} han sido {label.prison@6}, la puerta especial {label.prisoner@4} puede abrirse por cualquier H&eacute;roe."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.prison:capital@2} {label.prison@1} sono rappresentate dai segnalini Obiettivo. Possono {label.prison@5} spendendo 1 PM. Un Eroe che raccoglie un segnalino Obiettivo lo scarta e tutti gli Eroi ottengono {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}, la porta speciale {label.prisoner@4} pu&ograve; essere aperta da qualsiasi Eroe.",
                                                        EN:"{label.prison:capital@2} {label.prison@1} are represented by Objective tokens. They can be {label.prison@5} by spending 1 MP. The Hero who collects an Objective token discards it and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}, the special door {label.prisoner@4} can be opened by any Hero.",
                                                        ES:"{label.prison:capital@2} {label.prison@1} se representan mediante marcadores de Objetivo. Pueden {label.prison@5} gastando 1 PM. El H&eacute;roe que recoge un marcador de Objetivo lo descarta, y todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una vez que {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} han sido {label.prison@6}, la puerta especial {label.prisoner@4} puede abrirse por cualquier H&eacute;roe."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToPrison" ],
                                            gameMode: [ "unlockAndBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                {
                                                    mods:[ "removeObjectives" ],
                                                    tags:[
                                                        [ "visitAllRooms", "collectOptionalItems" ]
                                                    ]
                                                }
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
                                                    IT:"Elimina {boss.bossBadName@0}, padrone {label.prisoner@10}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.prisoner@10} master",
                                                    ES:"Elimina a {boss.bossBadName@0}, amo {label.prisoner@10}"
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
                        },{
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[1,2],
                            forMaps:[2],
                            type:"fallingDungeon",
                            objective:{
                                EN:"Eliminate a Roaming Monster before the dungeon falls.",
                                ES:"Elimina a un Monstruo Errante antes de que la mazmorra se derrumbe."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Tamburi di Guerra dei Goblin\"",
                                EN:"Inspired by the Upgrade Pack quest \"Goblin War Drums\"",
                                ES:"Inspirado en la aventura del Pack de Mejora \"Goblin War Drums\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                risky:[
                                                    {
                                                        IT:[ "Sapevamo che sarebbe stato molto rischioso," ],
                                                        EN:[ "We knew it would be very risky," ],
                                                        ES:[ "Sab&iacute;amos que ser&iacute;a muy arriesgado," ]
                                                    },{
                                                        IT:[ "Ci avevano avvisato che sarebbe stato pericoloso avventurarci," ],
                                                        EN:[ "They warned us that it would be dangerous to venture," ],
                                                        ES:[ "Nos advirtieron de que ser&iacute;a peligroso aventurarnos," ]
                                                    },{
                                                        IT:[ "Il Saggio ci aveva pregato di non andare," ],
                                                        EN:[ "The Wise had begged us not to go," ],
                                                        ES:[ "El Sabio nos hab&iacute;a rogado que no fu&eacute;ramos," ]
                                                    }
                                                ],
                                                necessary:[
                                                    {
                                                        IT:[ "ma era necessario farlo" ],
                                                        EN:[ "but it was necessary" ],
                                                        ES:[ "pero era necesario" ]
                                                    },{
                                                        IT:[ "ma non avevamo alcuna scelta" ],
                                                        EN:[ "but we had no choice" ],
                                                        ES:[ "pero no ten&iacute;amos elecci&oacute;n" ]
                                                    },{
                                                        IT:[ "ma il contratto parlava chiaro" ],
                                                        EN:[ "but the contract was clear" ],
                                                        ES:[ "pero el contrato era claro" ]
                                                    }
                                                ],
                                                task:[
                                                    {
                                                        IT:[ "dovevamo esplorare il malvagio rifugio", "nel dungeon", "da cui" ],
                                                        EN:[ "we had to explore the evil refuge", "in the dungeon", "from which" ],
                                                        ES:[ "ten&iacute;amos que explorar el refugio maligno", "en la mazmorra", "de la cual" ]
                                                    },{
                                                        IT:[ "dovevamo addentrarci nella cava dietro la cascata", "nelle grotte", "dalla quale" ],
                                                        EN:[ "we had to enter the quarry behind the waterfall", "into the caves", "from which" ],
                                                        ES:[ "ten&iacute;amos que adentrarnos en la cantera tras la cascada", "en las cuevas", "de las cuales" ]
                                                    },{
                                                        IT:[ "il nostro compito era esplorare le vecchie segrete", "nei tunnel", "dalle quali" ],
                                                        EN:[ "our task was to explore the old dungeons", "in the tunnels", "from which" ],
                                                        ES:[ "nuestra tarea era explorar las viejas mazmorras", "en los t&uacute;neles", "de los cuales" ]
                                                    }
                                                ],
                                                why:[
                                                    {
                                                        IT:[ "{label.task@2} proveniva l'eco senza sosta dei tamburi di guerra." ],
                                                        EN:[ "{label.task@2} came the ceaseless echo of war drums." ],
                                                        ES:[ "{label.task@2} llegaba el eco incesante de los tambores de guerra." ]
                                                    },{
                                                        IT:[ "{label.task@2} avevamo sentito quelle grida disperate." ],
                                                        EN:[ "{label.task@2} we had heard those desperate cries." ],
                                                        ES:[ "{label.task@2} hab&iacute;amos o&iacute;do esos gritos desesperados." ]
                                                    },{
                                                        IT:[ "{label.task@2} sarebbe iniziata l'invasione degli Oscuri." ],
                                                        EN:[ "{label.task@2} the invasion of the dark Ones would begin." ],
                                                        ES:[ "{label.task@2} comenzar&iacute;a la invasi&oacute;n de los Oscuros." ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "Mostro Sentinella", "il", "Questa &egrave; la Sentinella." ],
                                                        EN:[ "Monster Sentinel", "the", "This is the Sentinel." ],
                                                        ES:[ "Monstruo Centinela", "el", "Este es el Monstruo Centinela." ]
                                                    },{
                                                        IT:[ "Creatura Guardiana", "la", "Questa &egrave; la Creatura Guardiana." ],
                                                        EN:[ "Guardian Creature", "the", "This is the Guardian Creature." ],
                                                        ES:[ "Criatura Guardiana", "la", "Esta es la Criatura Guardiana." ]
                                                    },{
                                                        IT:[ "Antico Custode", "l'", "Questo &egrave; l'Antico Custode." ],
                                                        EN:[ "Old Keeper", "the", "This is the Old Keeper." ],
                                                        ES:[ "Antiguo Custodio", "el", "Este es el Antiguo Custodio." ]
                                                    }    
                                                ],
                                                suspect:[
                                                    {
                                                        IT:[ "Ma appena messo piede {label.task@1}" ],
                                                        EN:[ "But as soon as we set foot {label.task@1}" ],
                                                        ES:[ "Pero en cuanto pusimos un pie {label.task@1}" ]
                                                    },{
                                                        IT:[ "Dopo pochi passi {label.task@1}" ],
                                                        EN:[ "After a few steps {label.task@1}," ],
                                                        ES:[ "Tras unos pocos pasos {label.task@1}," ]
                                                    },{
                                                        IT:[ "Passati pochi minuti {label.task@1}" ],
                                                        EN:[ "A few minutes passed {label.task@1}" ],
                                                        ES:[ "Pasaron unos minutos {label.task@1}" ]
                                                    }
                                                ],
                                                then:[
                                                    {
                                                        IT:[ "avevamo capito che qualcosa non quadrava..." ],
                                                        EN:[ "we understood that something wasn't right..." ],
                                                        ES:[ "comprendimos que algo no iba bien..." ]
                                                    },{
                                                        IT:[ "il terreno dietro di noi ha cominciato a cedere..." ],
                                                        EN:[ "the ground behind us began to give way..." ],
                                                        ES:[ "el suelo tras nosotros comenz&oacute; a ceder..." ]
                                                    },{
                                                        IT:[ "uno stridio assordante &egrave; emerso dalle sue profondit&agrave;..." ],
                                                        EN:[ "a deafening screech emerged from its depths..." ],
                                                        ES:[ "un chirrido ensordecedor emergi&oacute; de sus profundidades..." ]
                                                    }
                                                ],
                                                fallExplanation:[
                                                    {
                                                        IT:"<ul><li><b>Round 4</b>: {tileLabel.first}</li>"+
                                                        "<li><b>Round 6</b>: {tileLabel.second}</li>"+
                                                        "<li><b>Round 9</b>: {tileLabel.third}</li>"+
                                                        "<li><b>Round 11</b>: {tileLabel.fourth}</li></ul>",
                                                        EN:"<ul><li><b>Round 4</b>: {tileLabel.first}</li>"+
                                                        "<li><b>Round 6</b>: {tileLabel.second}</li>"+
                                                        "<li><b>Round 9</b>: {tileLabel.third}</li>"+
                                                        "<li><b>Round 11</b>: {tileLabel.fourth}</li></ul>",
                                                        ES:"<ul><li><b>Ronda 4</b>: {tileLabel.first}</li>" + "<li><b>Ronda 6</b>: {tileLabel.second}</li>" + "<li><b>Ronda 9</b>: {tileLabel.third}</li>" + "<li><b>Ronda 11</b>: {tileLabel.fourth}</li></ul>"
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                roundLimit:[
                                                    {
                                                        EN:[ 9 ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.enemy@1} {label.enemy@0}",
                                            ES:"{label.enemy@1} {label.enemy@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.risky@0} {label.necessary@0}: {label.task@0} {label.why@0} {label.suspect@0} {label.then@0}",
                                            ES:"{label.risky@0} {label.necessary@0}: {label.task@0} {label.why@0} {label.suspect@0} {label.then@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            ES:"Completa los objetivos en el orden indicado:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere la Guardia",
                                                        EN:"Kill the Guard",
                                                        ES:"Matar a la Guardia"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.enemy@1} {label.enemy@0}",
                                                        EN:"Kill {label.enemy@1} {label.enemy@0}",
                                                        ES:"Matar a {label.enemy@1} {label.enemy@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire dal Dungeon Pericolante",
                                                        EN:"Escape the Unstable Dungeon",
                                                        ES:"Huir de la Mazmorra Inestable"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Fuggire attraverso l'uscita con tutti gli Eroi",
                                                        EN:"Escape through the exit with all Heroes",
                                                        ES:"Huye por la salida con todos los H&eacute;roes"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Setup",
                                                        ES:"Preparaci&oacute;n Especial"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Collocare i segnalini Clessidra {symbol.timeToken} sulla 4&deg;, 6&deg; e 9&deg; casella del tracciato Oscurit&agrave;. Collocare inoltre un segnalino sulla freccia alla fine del tracciato.",
                                                        EN:"Place the Time tokens {symbol.timeToken} on the 4th, 6th, and 9th Darkness track spaces. Also, place a token on the arrow at the end of the track.",
                                                        ES:"Coloca los marcadores de Tiempo {symbol.timeToken} en las casillas 4&ordf;, 6&ordf; y 9&ordf; de la barra de Oscuridad. Adem&aacute;s, coloca un marcador en la flecha situada al final de la barra."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Ora Fatale",
                                                        EN:"Fatal Hour",
                                                        ES:"La Hora Fatal"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando il tracciato Oscurit&agrave; viene girato sul retro, collocare il segnalino Clessidra che si trovava sulla freccia sulla seconda casella.",
                                                        EN:"When the Darkness track is flipped onto its back, place the Hourglass token that was on the arrow in the second space.",
                                                        ES:"Cuando la barra de Oscuridad se voltea, coloca el marcador de Reloj de Arena que estaba en la flecha en la segunda casilla."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Dungeon Pericolante",
                                                        EN:"Unstable Dungeon",
                                                        ES:"Mazmorra Inestable"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che il tracciato Oscurit&agrave; raggiunge un numero con un segnalino Clessidra, scartarlo e rimuovere dalla mappa la Tessera pi&ugrave; lontana dal segnalino Obiettivo grigio, uccidendo ogni Nemico e ogni Eroe che si trovano su di essa. Queste uccisioni non forniscono alcun PE. Le Tessere vengono distrutte nell'ordine seguente:{label.fallExplanation}",
                                                        EN:"Every time the Darkness track reaches a number with a Time token, discard it and remove the tile furthest from the gray Objective token from the map, killing every Enemy and every Hero on it. These kills do not provide any XP. Tiles are destroyed in the following order:{label.fallExplanation}",
                                                        ES:"Cada vez que la barra de Oscuridad alcanza un n&uacute;mero con un marcador de Tiempo, desc&aacute;rtalo y retira del mapa la Loseta m&aacute;s alejada del marcador de Objetivo gris, matando a todos los Enemigos y H&eacute;roes que se encuentren en ella. Estas muertes no otorgan ning&uacute;n PE. Las Losetas se destruyen en el siguiente orden:{label.fallExplanation}"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Ogni volta che il tracciato Oscurit&agrave; raggiunge un numero con un segnalino Clessidra, scartarlo e rimuovere dalla mappa la Tessera pi&ugrave; lontana dal segnalino Obiettivo grigio, uccidendo ogni Nemico, e ogni Eroe che si trovano su di essa. Queste uccisioni non forniscono alcun PE. Poi ogni Eroe ottiene 7 PE. Le Tessere vengono distrutte nell'ordine seguente:{label.fallExplanation}",
                                                        EN:"Every time the Darkness track reaches a number with a Time token, discard it and remove the tile furthest from the gray Objective token from the map, killing every Enemy and every Hero on it. These kills do not provide any XP. Then, all Heroes gets 7 XP. Tiles are destroyed in the following order:{label.fallExplanation}",
                                                        ES:"Cada vez que la barra de Oscuridad alcanza un n&uacute;mero con un marcador de Tiempo, desc&aacute;rtalo y retira del mapa la Loseta m&aacute;s alejada del marcador de Objetivo gris, matando a todos los Enemigos y H&eacute;roes que se encuentren en ella. Estas muertes no otorgan ning&uacute;n PE. A continuaci&oacute;n, cada H&eacute;roe obtiene 7 PE. Las Losetas se destruyen en el siguiente orden:{label.fallExplanation}"
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni volta che il tracciato Oscurit&agrave; raggiunge un numero con un segnalino Clessidra, scartarlo e rimuovere dalla mappa la Tessera pi&ugrave; lontana dal segnalino Obiettivo grigio, uccidendo ogni Nemico, e ogni Eroe che si trovano su di essa. Queste uccisioni non forniscono alcun PE. Poi ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:3::7} PE. Le Tessere vengono distrutte nell'ordine seguente:{label.fallExplanation}",
                                                        EN:"Every time the Darkness track reaches a number with a Time token, discard it and remove the tile furthest from the gray Objective token from the map, killing every Enemy and every Hero on it. These kills do not provide any XP. Then, all Heroes gets {label.miniCampaignObjectivesXp:split:3::7} XP. Tiles are destroyed in the following order:{label.fallExplanation}",
                                                        ES:"Cada vez que la barra de Oscuridad alcanza un n&uacute;mero con un marcador de Tiempo, desc&aacute;rtalo y retira del mapa la Loseta m&aacute;s alejada del marcador de Objetivo gris, matando a todos los Enemigos y H&eacute;roes que se encuentren en ella. Estas muertes no otorgan ning&uacute;n PE. A continuaci&oacute;n, cada H&eacute;roe obtiene {label.miniCampaignObjectivesXp:split:3::7} PE. Las Losetas se destruyen en el siguiente orden:{label.fallExplanation}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nessuno Resta Indietro",
                                                        EN:"No One is Left Behind",
                                                        ES:"Nadie Se Queda Atr&aacute;s"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un qualsiasi Eroe viene ucciso dal crollo delle Tessere, la Missione termina con una sconfitta.",
                                                        EN:"If any Hero is killed by the collapse of the Tiles, the Mission ends in defeat.",
                                                        ES:"Si alg&uacute;n H&eacute;roe muere a causa del derrumbe de las Losetas, la Misi&oacute;n termina en derrota."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy@0}",
                                                        ES:"{label.enemy@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un qualsiasi Eroe si muove per la prima volta nella Zona con il segnalino Obiettivo con il lato colorato a faccia in su, scartare il segnalino e generare un Mostro Errante di Livello 5 sul Portale dei Mostri Erranti. {label.enemy@2}",
                                                        EN:"When any Hero moves into the Zone with the Objective token with the colored side up for the first time, discard the token and spawn a Level 5 Roaming Monster on the Roaming Monster Portal. {label.enemy@2}",
                                                        ES:"Cuando cualquier H&eacute;roe entra por primera vez en la Zona con el marcador de Objetivo con el lado de color hacia arriba, descarta el marcador y genera un Monstruo Errante de nivel 5 en el Portal de Monstruos Errantes. {label.enemy@2}"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando un qualsiasi Eroe si muove per la prima volta nella Zona con il segnalino Obiettivo con il lato colorato a faccia in su, scartare il segnalino e generare {label.campaignEasyBoss@0} sul Portale dei Mostri Erranti. {label.enemy@2}",
                                                        EN:"When any Hero moves into the Zone with the Objective token with the colored side up for the first time, discard the token and spawn {label.campaignEasyBoss@0} on the Roaming Monster Portal. {label.enemy@2}",
                                                        ES:"Cuando cualquier H&eacute;roe entra por primera vez en la Zona con el marcador de Objetivo con el lado de color hacia arriba, descarta el marcador y genera {label.campaignEasyBoss@0} en el Portal de Monstruos Errantes. {label.enemy@2}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga dal Dungeon",
                                                        EN:"Escape the Dungeon",
                                                        ES:"Huir de la Mazmorra"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni Eroe pu&ograve; fuggire dal Dungeon spendendo 1 PM nella Zona del segnalino Obiettivo grigio. Quando tutti gli Eroi sono fuggiti {label.questVictory@0}.",
                                                        EN:"Any Hero can spend 1 MP in the gray Objective token Zone to escape from the Dungeon. When all the Heroes escaped {label.questVictory@0}.",
                                                        ES:"Cualquier H&eacute;roe puede gastar 1 PM en la Zona del marcador de Objetivo gris para huir de la Mazmorra. Cuando todos los H&eacute;roes hayan huido, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "fallingDungeon" ],
                                            gameMode: [ "fallingDungeon" ],
                                            difficulty:[ "increasedLoot" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "fallingDungeon" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "roundLimit", "visitAllRooms" ]
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
                                                    IT:"Elimina {boss.bossBadName@0}, che ha teso la trappola agli Eroi",
                                                    EN:"Eliminate {boss.bossBadName@0}, who set the trap for the Heroes",
                                                    ES:"Elimina a {boss.bossBadName@0}, que tendi&oacute; la trampa a los H&eacute;roes"
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
                        },{
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[2],
                            type:"collectDebuffAndBoss",
                            objective:{
                                EN:"Bring tokens to a zone to summon a Roaming Monster. Eliminate it to win.",
                                ES:"Lleva marcadores a una zona para invocar a un Monstruo Errante. Elim&iacute;nalo para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"La Caverna dei Cristalli\"",
                                EN:"Inspired by the Upgrade Pack quest \"Crystal Cave\"",
                                ES:"Inspirado en la aventura del Pack de Mejora \"Crystal Cave\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                when:[
                                                    {
                                                        IT:[ "Non appena gli eroi si avvicinano alle colline," ],
                                                        EN:[ "When the heroes approach the hills," ],
                                                        ES:[ "Cuando los h&eacute;roes se acercan a las colinas," ]
                                                    },{
                                                        IT:[ "Appena gli eroi escono dalla foresta," ],
                                                        EN:[ "As soon as the heroes emerge from the forest," ],
                                                        ES:[ "En cuanto los h&eacute;roes salen del bosque," ]
                                                    },{
                                                        IT:[ "Appena gli eroi scendono dalla nave," ],
                                                        EN:[ "As soon as the heroes get off the ship," ],
                                                        ES:[ "En cuanto los h&eacute;roes desembarcan del barco," ]
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[ "sentono il vociare dei contadini," ],
                                                        EN:[ "they hear the voices of the farmers," ],
                                                        ES:[ "oyen las voces de los campesinos," ]
                                                    },{
                                                        IT:[ "sentono il ridere dei bambini," ],
                                                        EN:[ "they hear the laughter of children," ],
                                                        ES:[ "oyen las risas de los ni&ntilde;os," ]
                                                    },{
                                                        IT:[ "sentono il chiacchiericcio dei paesani," ],
                                                        EN:[ "they hear the chatter of the villagers," ],
                                                        ES:[ "oyen el murmullo de los aldeanos," ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "che per&ograve; sembra corrotto e deformato:" ],
                                                        EN:[ "which however seems corrupted and deformed:" ],
                                                        ES:[ "que sin embargo suena corrompido y deforme:" ]
                                                    },{
                                                        IT:[ "ma sembra continuare a ripetersi come una cupa cantilena:" ],
                                                        EN:[ "but it seems to keep repeating itself like a dark chant:" ],
                                                        ES:[ "pero parece repetirse una y otra vez como un c&aacute;ntico sombr&iacute;o:" ]
                                                    },{
                                                        IT:[ "ma sembra rallentare sempre pi&ugrave;, trasformandosi in un fastidioso stridio:" ],
                                                        EN:[ "but it seems to slow down more and more, turning into an annoying screech:" ],
                                                        ES:[ "pero parece ir cada vez m&aacute;s lento, convirti&eacute;ndose en un chirrido molesto:" ]
                                                    }
                                                ],
                                                exception:[
                                                    {
                                                        IT:[ "&egrave; il canto dei servi dell'Oscurit&agrave;.", "alla guida dei servi" ],
                                                        EN:[ "it is the song of the servants of Darkness.", "the guide of the servants" ],
                                                        ES:[ "es el canto de los sirvientes de la Oscuridad.", "el gu&iacute;a de los sirvientes" ]
                                                    },{
                                                        IT:[ "&egrave; il grido dei Mostri Corrotti.", "che dirige del coro" ],
                                                        EN:[ "it is the cry of the Corrupted Monsters.", "who directs the choir" ],
                                                        ES:[ "es el grito de los Monstruos Corruptos.", "quien dirige el coro" ]
                                                    },{
                                                        IT:[ "&egrave; il lamento delle Bestie Sanguinarie.", "il tormentatore" ],
                                                        EN:[ "it is the lament of the Blood Beasts.", "the tormentor" ],
                                                        ES:[ "es el lamento de las Bestias Sanguinarias.", "el torturador" ]
                                                    }
                                                ],
                                                what:[
                                                    {
                                                        IT:[ "Il loro fetore non tarda a farsi sentire." ],
                                                        EN:[ "Their stench is not long in making itself felt." ],
                                                        ES:[ "Su hedor no tarda en hacerse notar." ]
                                                    },{
                                                        IT:[ "L'odore del sangue e del fango riempie l'aria." ],
                                                        EN:[ "The smell of blood and mud fills the air." ],
                                                        ES:[ "El olor a sangre y barro llena el aire." ]
                                                    },{
                                                        IT:[ "Un lezzo pungente e nauseante arriva da poco lontano." ],
                                                        EN:[ "A pungent and nauseating stench comes from not far away." ],
                                                        ES:[ "Un hedor acre y nauseabundo llega desde no muy lejos." ]
                                                    }
                                                ],
                                                now:[
                                                    {
                                                        IT:[ "&Egrave; giunto il momento che gli eroi si uniscano al coro, con" ],
                                                        EN:[ "It's time for the heroes to join the chorus, with" ],
                                                        ES:[ "Ha llegado el momento de que los h&eacute;roes se unan al coro, con" ]
                                                    },{
                                                        IT:[ "Gli eroi sono pronti a portare la loro musica," ],
                                                        EN:[ "The heroes are ready to bring their music," ],
                                                        ES:[ "Los h&eacute;roes est&aacute;n listos para aportar su m&uacute;sica," ]
                                                    },{
                                                        IT:[ "Ma gli eroi conoscono solo una melodia," ],
                                                        EN:[ "But heroes only know one melody," ],
                                                        ES:[ "Pero los h&eacute;roes solo conocen una melod&iacute;a," ]
                                                    }
                                                ],
                                                opposing:[
                                                    {
                                                        IT:[ "un canto di lame e di coraggio" ],
                                                        EN:[ "a song of blades and courage" ],
                                                        ES:[ "una canci&oacute;n de espadas y valor" ]
                                                    },{
                                                        IT:[ "l'eterno tamburo della giustizia" ],
                                                        EN:[ "the eternal drum of justice" ],
                                                        ES:[ "el tambor eterno de la justicia" ]
                                                    },{
                                                        IT:[ "l'incessante tamburo della giustizia" ],
                                                        EN:[ "the incessant drum of justice" ],
                                                        ES:[ "el tambor incesante de la justicia" ]
                                                    }
                                                ],
                                                compose:[
                                                    {
                                                        IT:[ "parti di un Artefatto Magico", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of a Magical Artifact", "to place it", "Let's Build It!" ],
                                                        ES:[ "partes de un Artefacto M&aacute;gico", "para colocarlo", "&iexcl;Reconstruy&aacute;moslo!" ]
                                                    },{
                                                        IT:[ "parti di un Sigillo Arcano", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of an Arcane Seal", "to place it", "Let's Build It!" ],
                                                        ES:[ "partes de un Sello Arcano", "para colocarlo", "&iexcl;Reconstruy&aacute;moslo!" ]
                                                    },{
                                                        IT:[ "parti di un Amuleto Puro", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of a Pure Amulet", "to place it", "Let's Build It!" ],
                                                        ES:[ "partes de un Amuleto Puro", "para colocarlo", "&iexcl;Reconstruy&aacute;moslo!" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "il Mostro", "del Mostro", "del mostro" ],
                                                        EN:[ "the Monster", "of the Monster", "of the monster" ],
                                                        ES:[ "el Monstruo", "del Monstruo", "del monstruo" ]
                                                    },{
                                                        IT:[ "la Creatura", "della Creatura", "della creatura" ],
                                                        EN:[ "the Creature", "of the Creature", "of the creature" ],
                                                        ES:[ "la Criatura", "de la Criatura", "de la criatura" ]
                                                    },{
                                                        IT:[ "la Bestia", "della Bestia", "della bestia" ],
                                                        EN:[ "the Beast", "of the Beast", "of the beast" ],
                                                        ES:[ "la Bestia", "de la Bestia", "de la bestia" ]
                                                    }
                                                ],
                                                base:[
                                                    {
                                                        IT:[ "la Tana", "la tana contaminata {label.enemy@2}", "della tana", "Tana {label.enemy:capital@1}", "essere purificata", "per purificarla", "in cima alla tana", "La Tana {label.enemy:capital@2}" ],
                                                        EN:[ "the Burrow", "the contaminated lair {label.enemy@2}", "of the lair", "Lair {label.enemy@1}", "be purified", "to purify it", "at the top of the den", "The Lair {label.enemy@2}"  ],
                                                        ES:[ "la Madriguera", "la guarida contaminada {label.enemy@2}", "de la guarida", "Guarida {label.enemy@1}", "ser purificada", "para purificarla", "en lo alto de la madriguera", "La Madriguera {label.enemy@2}" ]
                                                    },{
                                                        IT:[ "il Rifugio", "il rifugio maledetto {label.enemy@2}", "del rifugio", "Rifugio {label.enemy:capital@1}", "essere liberato", "per liberarlo", "in cima al rifugio", "Il Rifugio {label.enemy:capital@2}" ],
                                                        EN:[ "the Refuge", "the cursed refuge {label.enemy@2}", "of the refuge", "Refuge {label.enemy:capital@1}", "be freed", "to free it", "on top of the refuge", "The Refuge {label.enemy:capital@2}" ],
                                                        ES:[ "el Refugio", "el refugio maldito {label.enemy@2}", "del refugio", "Refugio {label.enemy@1}", "ser liberado", "para liberarlo", "en lo alto del refugio", "El Refugio {label.enemy@2}" ],
                                                    },{
                                                        IT:[ "il Nascondiglio", "il nascondiglio {label.enemy@2}", "del nascondiglio", "Nascondiglio {label.enemy:capital@1}", "essere distrutto", "per distruggerlo", "in cima al nascondiglio", "Il Nascondiglio {label.enemy:capital@2}" ],
                                                        EN:[ "the Hideout", "the hideout {label.enemy@2}", "of the hideout", "Hideout {label.enemy:capital@1}", "be destroyed", "to destroy it", "on top of the hideout", "The Hideout {label.enemy:capital@2}" ],
                                                        ES:[ "el Escondite", "el escondite {label.enemy@2}", "del escondite", "Escondite {label.enemy@1}", "ser destruido", "para destruirlo", "en lo alto del escondite", "El Escondite {label.enemy@2}" ],
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccogliere tutte le {label.compose@0}", "raccogliendo {label.collectOptionalItems@3} {label.compose@0}", "{tokensCount.objective}" ],
                                                        EN:[ "to collect all the {label.compose@0}", "collecting {label.collectOptionalItems@3} {label.compose@0}", "{tokensCount.objective}"],
                                                        ES:[ "a recoger todas las {label.compose@0}", "recogiendo {label.collectOptionalItems@3} {label.compose@0}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.base:capital@7}",
                                            ES:"{label.base:capital@7}"
                                        },{
                                            EN:"{label.enemy:capital@0}",
                                            ES:"{label.enemy:capital@0}"
                                        },{
                                            EN:"{label.opposing:capital@0}",
                                            ES:"{label.opposing:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.when@0} {label.event@0} {label.but@0} {label.exception@0} {label.what@0} {label.now@0} {label.opposing@0}!",
                                            ES:"{label.when@0} {label.event@0} {label.but@0} {label.exception@0} {label.what@0} {label.now@0} {label.opposing@0}!"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi in qualsiasi ordine:",
                                            EN:"Complete the objectives in any order:",
                                            ES:"Completa los objetivos en cualquier orden:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere {label.enemy@0}",
                                                        EN:"Kill {label.enemy@0}",
                                                        ES:"Matar a {label.enemy@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere il Mostro Errante che viene generato sul segnalino Obiettivo sul lato grigio",
                                                        EN:"Kill the Roaming Monster that spawns on the Objective token on the gray side",
                                                        ES:"Matar al Monstruo Errante que aparece sobre el marcador de Objetivo en su lado gris"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Purificare {label.base@0}",
                                                        EN:"Purify {label.base@0}",
                                                        ES:"Purificar {label.base@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Collocare i {label.collectOptionalItems@2} segnalini Obiettivo con il lato colorato a faccia in su nella Zona con il segnalino Obiettivo sul lato grigio",
                                                        EN:"Place the {label.collectOptionalItems@2} Objective tokens with the colored side up in the Zone of the Objective token on the gray side",
                                                        ES:"Coloca los {label.collectOptionalItems@2} marcadores de Objetivo con el lado de color hacia arriba en la Zona del marcador de Objetivo en su lado gris"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Collocare {label.collectOptionalItems@2} segnalini Obiettivo con il lato colorato a faccia in su nella Zona con il segnalino Obiettivo sul lato grigio",
                                                        EN:"Place {label.collectOptionalItems@2} Objective tokens with the colored side up in the Zone of the Objective token on the gray side",
                                                        ES:"Coloca {label.collectOptionalItems@2} marcadores de Objetivo con el lado de color hacia arriba en la Zona del marcador de Objetivo en su lado gris"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.base@3}",
                                                        ES:"{label.base@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Zona con il segnalino Obiettivo sul lato grigio rappresenta {label.base@1} e deve {label.base@4}. Quando questa Camera viene rivelata, dopo avere risolto la carta Porta, generare un Mostro Errante di Livello 5 nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN:"The Zone with the Objective token on the gray side represents {label.base@1} and must {label.base@4}. When this Chamber is revealed, after resolving the Door card, spawn a Level 5 Roaming Monster in the Zone of the Objective token on the gray side.",
                                                        ES:"La Zona con el marcador de Objetivo en su lado gris representa {label.base@1} y debe {label.base@4}. Cuando se revela esta C&aacute;mara, despu&eacute;s de resolver la carta de Puerta, genera un Monstruo Errante de nivel 5 en la Zona del marcador de Objetivo en su lado gris."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"La Zona con il segnalino Obiettivo sul lato grigio rappresenta {label.base@1} e deve {label.base@4}. Quando questa Camera viene rivelata, dopo avere risolto la carta Porta, generare {label.campaignBoss@0} nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN:"The Zone with the Objective token on the gray side represents {label.base@1} and must {label.base@4}. When this Chamber is revealed, after resolving the Door card, spawn {label.campaignBoss@0} in the Zone of the Objective token on the gray side.",
                                                        ES:"La Zona con el marcador de Objetivo en su lado gris representa {label.base@1} y debe {label.base@4}. Cuando se revela esta C&aacute;mara, despu&eacute;s de resolver la carta de Puerta, genera {label.campaignBoss@0} en la Zona del marcador de Objetivo en su lado gris."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.compose@2}",
                                                        ES:"{label.compose@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano le {label.collectOptionalItems@2} {label.compose@0} che devono essere unite all'entrata {label.base@2} {label.base@5}. Un qualsiasi Eroe che si trovi nella Zona di un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 PM per raccoglierlo. I segnalini Obiettivo con il lato colorato a faccia in su possono essere scambiati come fossero oggetti. Un qualsiasi Eroe che trasporta un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 azione nella Zona del segnalino Obiettivo sul lato grigio {label.compose@1} {label.base@6}. Quando le {label.collectOptionalItems@2} parti sono {label.base@6} {label.questVictory@0}.",
                                                        EN:"Objective tokens with the colored side up represent the {label.collectOptionalItems@2} {label.compose@0} that must be composed near the entry {label.base@2} {label.base@5}. Any Hero in the Zone of an Objective token with the colored side up can spend 1 MP to pick it up. Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up can spend 1 action in the Zone of the Objective token on the gray side {label.compose@1} {label.base@6}. When the {label.collectOptionalItems@2} parts are {label.base@6} {label.questVictory@0}.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.collectOptionalItems@2} {label.compose@0} que deben unirse cerca de la entrada {label.base@2} {label.base@5}. Cualquier H&eacute;roe que se encuentre en la Zona de un marcador de Objetivo con el lado de color hacia arriba puede gastar 1 PM para recogerlo. Los marcadores de Objetivo con el lado de color hacia arriba pueden intercambiarse como si fueran objetos. Cualquier H&eacute;roe que lleve un marcador de Objetivo con el lado de color hacia arriba puede gastar 1 acci&oacute;n en la Zona del marcador de Objetivo en su lado gris {label.compose@1} {label.base@6}. Cuando las {label.collectOptionalItems@2} partes est&aacute;n {label.base@6}, {label.questVictory@0}.",
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.collectOptionalItems@2} {label.compose@0} che devono essere unite all'entrata {label.base@2} {label.base@5}. Un qualsiasi Eroe che si trovi nella Zona di un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 PM per raccoglierlo e ogni Eroe ottiene 7 PE. I segnalini Obiettivo con il lato colorato a faccia in su possono essere scambiati come fossero oggetti. Un qualsiasi Eroe che trasporta un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 azione nella Zona della del segnalino Obiettivo sul lato grigio {label.compose@1} {label.base@6}. Quando {label.collectOptionalItems@2} parti sono {label.base@6} {label.questVictory@0}.",
                                                        EN:"Objective tokens with the colored side up represent {label.collectOptionalItems@2} {label.compose@0} that must be composed near the entry {label.base@2} {label.base@5}. Any Hero in the Zone of an Objective token with the colored side up can spend 1 MP to pick it up and all Heroes gets 7 XP. Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up can spend 1 action in the Zone of the Objective token on the gray side {label.compose@1} {label.base@6}. When {label.collectOptionalItems@2} parts are {label.base@6} {label.questVictory@0}.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.collectOptionalItems@2} {label.compose@0} que deben unirse cerca de la entrada {label.base@2} {label.base@5}. Cualquier H&eacute;roe que se encuentre en la Zona de un marcador de Objetivo con el lado de color hacia arriba puede gastar 1 PM para recogerlo, y cada H&eacute;roe obtiene 7 PE. Los marcadores de Objetivo con el lado de color hacia arriba pueden intercambiarse como si fueran objetos. Cualquier H&eacute;roe que lleve un marcador de Objetivo con el lado de color hacia arriba puede gastar 1 acci&oacute;n en la Zona del marcador de Objetivo en su lado gris {label.compose@1} {label.base@6}. Cuando las {label.collectOptionalItems@2} partes est&aacute;n {label.base@6}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "collectAndDeliver-small" ],
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
                                                {
                                                    tags:[
                                                        [ "visitAllRooms", "collectOptionalItems" ]
                                                    ]
                                                }
                                            ]
                                        },{
                                            forCampaign:[ "2shots"]
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
                                                    IT:"Elimina {boss.bossBadName@0}, {label.exception@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.exception@1}",
                                                    ES:"Elimina a {boss.bossBadName@0}, {label.exception@1}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",
                                            ES:"<p>Retira todos los marcadores de Objetivo del inventario de los H&eacute;roes.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },{
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[1,2],
                            forMaps:[1],
                            type:"capture",
                            objective:{
                                EN:"Capture Roaming Monsters to win.",
                                ES:"Captura Monstruos Errantes para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Smarriti nella Musica\"",
                                EN:"Inspired by the Upgrade Pack quest \"Lost in the Music\"",
                                ES:"Inspirado en la aventura del Pack de Mejora \"Lost in the Music\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                investigation:[
                                                    {
                                                        IT:[ "Gli eroi hanno smentito le voci secondo cui", "Voci" ],
                                                        EN:[ "The heroes denied the rumors that it was", "Voices" ],
                                                        ES:[ "Los h&eacute;roes desmintieron los rumores de que hab&iacute;an sido", "Voces" ]
                                                    },{
                                                        IT:[ "Gli eroi hanno scoperto la verit&agrave;: non", "Scoperte" ],
                                                        EN:[ "The heroes discovered the truth: it wasn't", "Discoveries" ],
                                                        ES:[ "Los h&eacute;roes descubrieron la verdad: no hab&iacute;an sido", "Descubrimientos" ]
                                                    },{
                                                        IT:[ "Era una bugia. Gli eroi avevano scoperto che non", "Bugie" ],
                                                        EN:[ "It was a lie. The heroes had discovered that it wasn't", "Lies" ],
                                                        ES:[ "Era mentira. Los h&eacute;roes hab&iacute;an descubierto que no hab&iacute;an sido", "Mentiras" ]
                                                    }
                                                ],
                                                clue:[
                                                    {
                                                        IT:[ "erano stati i contadini a dar fuoco al porto.", "agli Incendiari" ],
                                                        EN:[ "the farmers who set fire to the port.", "to the Arsonists" ],
                                                        ES:[ "los campesinos quienes prendieron fuego al puerto.", "a los Incendiarios" ]
                                                    },{
                                                        IT:[ "erano stati i ladri ad assaltare la carovana dei mercanti.", "ai Furfanti" ],
                                                        EN:[ "the thieves who attacked the merchants' caravan.", "to the Scoundrels" ],
                                                        ES:[ "los ladrones quienes asaltaron la caravana de los mercaderes.", "a los Rufianes" ]
                                                    },{
                                                        IT:[ "erano state le guardie a saccheggiare i villaggi.", "ai Saccheggiatori" ],
                                                        EN:[ "the guards who sacked the villages.", "to the Looters" ],
                                                        ES:[ "los guardias quienes saquearon las aldeas.", "a los Saqueadores" ]
                                                    }
                                                ],
                                                consequence1:[
                                                    {
                                                        IT:[ "Le indagini erano durate settimane e ora" ],
                                                        EN:[ "The investigations had lasted weeks and now" ],
                                                        ES:[ "Las investigaciones hab&iacute;an durado semanas y ahora" ]
                                                    },{
                                                        IT:[ "Non &egrave; stato facile scoprirlo e ora" ],
                                                        EN:[ "It was not easy to find out and now" ],
                                                        ES:[ "No fue f&aacute;cil descubrirlo y ahora" ]
                                                    },{
                                                        IT:[ "Per scoprirlo, hanno dovuto vagare senza sosta per mesi. Ora" ],
                                                        EN:[ "To find out, they had to wander non-stop for months and hours. Now" ],
                                                        ES:[ "Para descubrirlo, tuvieron que vagar sin descanso durante meses. Ahora" ]
                                                    }
                                                ],
                                                consequence2:[
                                                    {
                                                        IT:[ "si sentono esausti." ],
                                                        EN:[ "they feel exhausted." ],
                                                        ES:[ "se sienten exhaustos." ]
                                                    },{
                                                        IT:[ "sono quasi senza forze." ],
                                                        EN:[ "they are almost powerless." ],
                                                        ES:[ "est&aacute;n casi sin fuerzas." ]
                                                    },{
                                                        IT:[ "servirebbe una lunga pausa." ],
                                                        EN:[ "a long break would be needed." ],
                                                        ES:[ "les vendr&iacute;a bien un largo descanso." ]
                                                    }
                                                ],
                                                recover:[
                                                    {
                                                        IT:[ "Ma non c'&egrave; tempo da perdere:" ],
                                                        EN:[ "But there is no time to waste:" ],
                                                        ES:[ "Pero no hay tiempo que perder:" ]
                                                    },{
                                                        IT:[ "Ma non possono mollare ora:" ],
                                                        EN:[ "But they can't give up now:" ],
                                                        ES:[ "Pero no pueden rendirse ahora:" ]
                                                    },{
                                                        IT:[ "Ma manca un ultimo sforzo:" ],
                                                        EN:[ "But one last effort is missing:" ],
                                                        ES:[ "Pero falta un &uacute;ltimo esfuerzo:" ]
                                                    }
                                                ],
                                                newPlace:[
                                                    {
                                                        IT:[ "hanno trovato finalmente i mostri responsabili." ],
                                                        EN:[ "they have finally found the responsible monsters." ],
                                                        ES:[ "por fin han encontrado a los monstruos responsables." ]
                                                    },{
                                                        IT:[ "hanno scoperto il nascondiglio dei responsabili." ],
                                                        EN:[ "they discovered the hideout of those responsible." ],
                                                        ES:[ "descubrieron el escondite de los responsables." ]
                                                    },{
                                                        IT:[ "i veri responsabili si nascondevano poco lontano." ],
                                                        EN:[ "the real culprits were hiding not far away." ],
                                                        ES:[ "los verdaderos culpables se escond&iacute;an no muy lejos." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Prenderanno a calci gli agenti del male,", "Calci" ],
                                                        EN:[ "They will kick the agents of evil,", "Kicks" ],
                                                        ES:[ "Repartir&aacute;n patadas a los agentes del mal,", "Patadas" ]
                                                    },{
                                                        IT:[ "&Egrave; arrivato il momento di impartirgli una bella lezione,", "Lezioni" ],
                                                        EN:[ "The time has come to teach him a good lesson,", "Lessons" ],
                                                        ES:[ "Ha llegado el momento de darle una buena lecci&oacute;n,", "Lecciones" ]
                                                    },{
                                                        IT:[ "Faranno passare ai colpevoli brutto quarto d'ora,", "Dolori" ],
                                                        EN:[ "They will give the guilty a hard time,", "Pain" ],
                                                        ES:[ "Har&aacute;n pasar a los culpables un mal rato,", "Sufrimiento" ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "per poi interrogarli.", "Interrogatori" ],
                                                        EN:[ "and then question them.", "Interrogations" ],
                                                        ES:[ "y luego interrogarlos.", "Interrogatorios" ]
                                                    },{
                                                        IT:[ "per chiedergli poi spiegazioni.", "Spiegazioni" ],
                                                        EN:[ "to then ask him for explanations.", "Explanations" ],
                                                        ES:[ "para despu&eacute;s pedirle explicaciones.", "Explicaciones" ]
                                                    },{
                                                        IT:[ "per scambiare poi quattro chiacchiere con loro.", "Chiacchierate" ],
                                                        EN:[ "to then have a chat with them.", "Chat" ],
                                                        ES:[ "para luego charlar un rato con ellos.", "Charlas" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccogliere tutte le Reti", "raccogliendo {label.collectOptionalItems@3} Reti", "{tokensCount.objective}" ],
                                                        EN:[ "to collect all the Nets", "collecting {label.collectOptionalItems@3} Nets", "{tokensCount.objective}"],
                                                        ES:[ "a recoger todas las Redes", "recogiendo {label.collectOptionalItems@3} Redes", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"{label.mission@1} e {label.objective@1}",
                                            EN:"{label.mission@1} and {label.objective@1}",
                                            ES:"{label.mission@1} y {label.objective@1}",
                                        },{
                                            IT:"{label.investigation@1} e {label.mission@1}",
                                            EN:"{label.investigation@1} and {label.mission@1}",
                                            ES:"{label.investigation@1} y {label.mission@1}",
                                        },{
                                            EN:"{label.mission@1} {label.clue@1}",
                                            ES:"{label.mission@1} {label.clue@1}",
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.investigation@0} {label.clue@0} {label.consequence1@0} {label.consequence2@0} {label.recover@0} {label.newPlace@0} {label.mission@0} {label.objective@0}",
                                            ES:"{label.investigation@0} {label.clue@0} {label.consequence1@0} {label.consequence2@0} {label.recover@0} {label.newPlace@0} {label.mission@0} {label.objective@0}"
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
                                                        IT:"Raduniamoli",
                                                        EN:"Gather Them",
                                                        ES:"Reun&aacute;moslos",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Catturare {label.collectOptionalItems@2} Mostri Erranti <i>(Vedi Regole Speciali)</i>",
                                                        EN:"Capture {label.collectOptionalItems@2} Roaming Monsters <i>(See Special Rules)</i>",
                                                        ES:"Captura {label.collectOptionalItems@2} Monstruos Errantes <i>(ver Reglas Especiales)</i>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri a Non Finire",
                                                        EN:"Never Ending Monsters",
                                                        ES:"Monstruos Sin Fin"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"All'inizio di ogni Fase dell'Oscurit&agrave;, se ci sono segnalini Corruzione {symbol.corruptionToken} disponibili, tirare 1 {symbol.yellowDie}. Se si ottiene almeno un risultato {symbol.mana}, generare 1 Mostro Errante su 1 dei segnalini Corruzione disponibili (a scelta dei giocatori). Dopo che un Mostro Errante &egrave; stato generato in questo modo, girare il segnalino Corruzione mostrando il lato Tempo {symbol.timeToken}. Questo segnalino Corruzione non sar&agrave; pi&ugrave; disponibile per la generazione.<p>Se all'inizio di una Fase dell'Oscurit&agrave; non ci sono segnalini Corruzione disponibili e ci sono meno di 2 Mostri Erranti nel Dungeon, girare a tutti i segnalini Tempo sul lato Corruzione.",
                                                        EN:"At the start of each Darkness Phase, if there are {symbol.corruptionToken} Corruption tokens available, roll 1 {symbol.yellowDie}. If you roll at least one {symbol.mana} result, spawn 1 Roaming Monster on 1 of the available Corruption tokens (players' choice). After a Roaming Monster is spawned in this way, flip the Corruption token to the Time {symbol.timeToken} side. This Corruption token will no longer be available for generation.<p>If at the start of a Darkness Phase, there are no Corruption tokens available and there are fewer than 2 Roaming Monsters in the Dungeon, flip all Time tokens to their Corruption side.",
                                                        ES:"Al principio de cada Fase de la Oscuridad, si hay marcadores de Corrupci&oacute;n {symbol.corruptionToken} disponibles, tira 1 {symbol.yellowDie}. Si obtienes al menos un resultado {symbol.mana}, genera 1 Monstruo Errante sobre 1 de los marcadores de Corrupci&oacute;n disponibles (a elecci&oacute;n de los jugadores). Despu&eacute;s de generar un Monstruo Errante de esta forma, da la vuelta al marcador de Corrupci&oacute;n a su lado de Tiempo {symbol.timeToken}. Ese marcador de Corrupci&oacute;n ya no estar&aacute; disponible para generar m&aacute;s monstruos.<p>Si al principio de una Fase de la Oscuridad no hay marcadores de Corrupci&oacute;n disponibles y hay menos de 2 Monstruos Errantes en la Mazmorra, da la vuelta a todos los marcadores de Tiempo a su lado de Corrupci&oacute;n."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Una Rete",
                                                        EN:"The Net",
                                                        ES:"La Red"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ciascun segnalino Obiettivo sul lato colorato rappresenta una Rete che pu&ograve; essere usata per catturare un Mostro Errante (vedere sotto). Un qualsiasi Eroe che si trovi nella Zona di una Rete pu&ograve; spendere 1 PM per raccoglierla. L'Eroe che lo fa ottiene 5 PE. Le Reti possono essere scambiate come fossero oggetti.",
                                                        EN:"Each Objective token on the colored side represents a Net that can be used to capture a Roaming Monster (see below). Any Hero in the Zone of a Net can spend 1 MP to collect it. The Hero who does so gains 5 XP. Nets can be exchanged as if they were items.",
                                                        ES:"Cada marcador de Objetivo en su lado de color representa una Red que puede usarse para capturar a un Monstruo Errante (ver m&aacute;s abajo). Cualquier H&eacute;roe que se encuentre en la Zona de una Red puede gastar 1 PM para recogerla. El H&eacute;roe que lo hace gana 5 PE. Las Redes pueden intercambiarse como si fueran objetos."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Ciascun segnalino Obiettivo sul lato colorato rappresenta una Rete che pu&ograve; essere usata per catturare un Mostro Errante (vedere sotto). Un qualsiasi Eroe che si trovi nella Zona di una Rete pu&ograve; spendere 1 PM per raccoglierla. Tutti gli Eroi ottengono 5 PE. Le Reti possono essere scambiate come fossero oggetti.",
                                                        EN:"Each Objective token on the colored side represents a Net that can be used to capture a Roaming Monster (see below). Any Hero in the Zone of a Net can spend 1 MP to collect it. All Heroes gets 5 XP. Nets can be exchanged as if they were items.",
                                                        ES:"Cada marcador de Objetivo en su lado de color representa una Red que puede usarse para capturar a un Monstruo Errante (ver m&aacute;s abajo). Cualquier H&eacute;roe que se encuentre en la Zona de una Red puede gastar 1 PM para recogerla. Todos los H&eacute;roes ganan 5 PE. Las Redes pueden intercambiarse como si fueran objetos."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ciascun segnalino Obiettivo sul lato colorato rappresenta una Rete che pu&ograve; essere usata per catturare un Mostro Errante (vedere sotto). Un qualsiasi Eroe che si trovi nella Zona di una Rete pu&ograve; spendere 1 PM per raccoglierla. Tutti gli Eroi ottengono {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} PE. Le Reti possono essere scambiate come fossero oggetti.",
                                                        EN:"Each Objective token on the colored side represents a Net that can be used to capture a Roaming Monster (see below). Any Hero in the Zone of a Net can spend 1 MP to collect it. All Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} XP. Nets can be exchanged as if they were items.",
                                                        ES:"Cada marcador de Objetivo en su lado de color representa una Red que puede usarse para capturar a un Monstruo Errante (ver m&aacute;s abajo). Cualquier H&eacute;roe que se encuentre en la Zona de una Red puede gastar 1 PM para recogerla. Todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} PE. Las Redes pueden intercambiarse como si fueran objetos."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Catturare un Mostro",
                                                        EN:"Capture a Monster",
                                                        ES:"Capturar a un Monstruo"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe in possesso di una Rete (segnalino Obiettivo sul lato colorato) pu&ograve; tentare di catturare un Mostro Errante che si trovi nella sua Zona spendendo 1 azione e tirando 2 {symbol.orangeDie}. Se il numero di {symbol.sword} ottenuti &egrave; pari o superiore alla Salute rimanente del Mostro Errante, quel mostro &egrave; catturato. Rimuoverlo dal Dungeon e scartare la Rete usata; l'Eroe che lo ha catturato ottiene i PE e le ricompense previste come se avesse ucciso il Mostro Errante. Se il tentativo di cattura fallisce, la Rete non viene scartata. Una volta catturati {label.collectOptionalItems@2} Mostri Erranti {label.questVictory@0}.",
                                                        EN:"A Hero in possession of a Net (Objective token on the colored side) can attempt to capture a Roaming Monster that is in his Zone by spending 1 action and rolling 2 {symbol.orangeDie}. If the number of {symbol.sword} obtained is equal to or greater than the Roaming Monster's remaining Health, that monster is captured. Remove the monster from the Dungeon and discard the used Net; the Hero who captured it gains the expected XP and rewards as if he had killed the Roaming Monster. If the capture attempt fails, the Net is not discarded. Once captured {label.collectOptionalItems@2} Roaming Monsters {label.questVictory@0}.",
                                                        ES:"Un H&eacute;roe en posesi&oacute;n de una Red (marcador de Objetivo en su lado de color) puede intentar capturar a un Monstruo Errante que se encuentre en su Zona gastando 1 acci&oacute;n y tirando 2 {symbol.orangeDie}. Si el n&uacute;mero de {symbol.sword} obtenidos es igual o superior a la Vida restante del Monstruo Errante, ese monstruo queda capturado. Ret&iacute;ralo de la Mazmorra y descarta la Red usada; el H&eacute;roe que lo ha capturado obtiene los PE y las recompensas previstas como si hubiera matado al Monstruo Errante. Si el intento de captura falla, la Red no se descarta. Una vez capturados {label.collectOptionalItems@2} Monstruos Errantes, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming-large" ],
                                            gameMode: [ "capture" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "capture" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                {
                                                    tags:[
                                                        [ "visitAllRooms", "collectOptionalItems" ]
                                                    ]
                                                }
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
                                                    IT:"Elimina {boss.bossBadName@0}, che vuole mettere a tacere i suoi alleati",
                                                    EN:"Eliminate {boss.bossBadName@0}, who wants to silence his allies",
                                                    ES:"Elimina a {boss.bossBadName@0}, que quiere silenciar a sus aliados"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",
                                            ES:"<p>Retira todos los marcadores de Objetivo del inventario de los H&eacute;roes.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },{
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forActs:[2],
                            forMaps:[2],
                            type:"collect",
                            objective:{
                                EN:"Collect a resource to open doors and find special Roaming Monsters. Eliminate them to win.",
                                ES:"Recoge un recurso para abrir puertas y encontrar Monstruos Errantes especiales. Elim&iacute;nalos para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Discesa agli Inferi\"",
                                EN:"Inspired by the Upgrade Pack quest \"Stairway to Hell\"",
                                ES:"Inspirado en la aventura del Pack de Mejora \"Stairway to Hell\""
                            },
                            suggestedTilesCount:6,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                onlyThing:[
                                                    {
                                                        IT:[ "C'&egrave; solo una cosa da fare:" ],
                                                        EN:[ "There's only one thing to do:" ],
                                                        ES:[ "Solo queda una cosa por hacer:" ]
                                                    },{
                                                        IT:[ "&Egrave; arrivato il momento: ora dovranno" ],
                                                        EN:[ "The time has come: now they will have to" ],
                                                        ES:[ "Ha llegado el momento: ahora tendr&aacute;n que" ]
                                                    },{
                                                        IT:[ "Non rimane altro che" ],
                                                        EN:[ "There's nothing left but to" ],
                                                        ES:[ "No queda m&aacute;s remedio que" ]
                                                    }
                                                ],
                                                break:[
                                                    {
                                                        IT:[ "sabotare il rituale" ],
                                                        EN:[ "sabotage the ritual" ],
                                                        ES:[ "sabotear el ritual" ]
                                                    },{
                                                        IT:[ "interrompere la cerimonia" ],
                                                        EN:[ "interrupt the ceremony" ],
                                                        ES:[ "interrumpir la ceremonia" ]
                                                    },{
                                                        IT:[ "porre fine all'evocazione" ],
                                                        EN:[ "put an end to the summoning" ],
                                                        ES:[ "poner fin a la invocaci&oacute;n" ]
                                                    }
                                                ],
                                                and:[
                                                    {
                                                        IT:[ "e uccidere chiunque sia tanto stupido da mettersi sulla loro strada." ],
                                                        EN:[ "and kill anyone stupid enough to get in their way." ],
                                                        ES:[ "y matar a cualquiera lo bastante est&uacute;pido como para interponerse en su camino." ]
                                                    },{
                                                        IT:[ "eliminando chiunque provi a fermarli." ],
                                                        EN:[ "and eliminate anyone who tries to stop them." ],
                                                        ES:[ "y eliminar a cualquiera que intente detenerlos." ]
                                                    },{
                                                        IT:[ "senza fermarsi davanti a nulla." ],
                                                        EN:[ "without stopping at anything." ],
                                                        ES:[ "sin detenerse ante nada." ]
                                                    }
                                                ],
                                                close:[
                                                    {
                                                        IT:[ "{label.enemies:capital@0} si sono rinchiusi in una camera." ],
                                                        EN:[ "{label.enemies:capital@0} locked themselves in a room." ],
                                                        ES:[ "{label.enemies:capital@0} se encerraron en una sala." ]
                                                    },{
                                                        IT:[ "{label.enemies:capital@0} si sono barricati da qualche parte." ],
                                                        EN:[ "{label.enemies:capital@0} barricaded themselves somewhere." ],
                                                        ES:[ "{label.enemies:capital@0} se atrincheraron en alg&uacute;n lugar." ]
                                                    },{
                                                        IT:[ "{label.enemies:capital@0} si trovano in una stanza sigillata." ],
                                                        EN:[ "{label.enemies:capital@0} are in a sealed room." ],
                                                        ES:[ "{label.enemies:capital@0} se encuentran en una sala sellada." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Gli eroi dovranno {label.lock@1} che impediscono loro di entrare" ],
                                                        EN:[ "The heroes will have to {label.lock@1} that prevent them from entering" ],
                                                        ES:[ "Los h&eacute;roes tendr&aacute;n que {label.lock@1} que les impiden entrar" ]
                                                    },{
                                                        IT:[ "Gli eroi dovranno trovare un modo per {label.lock@1}" ],
                                                        EN:[ "The heroes will have to find a way to {label.lock@1}" ],
                                                        ES:[ "Los h&eacute;roes tendr&aacute;n que encontrar la forma de {label.lock@1}" ]
                                                    },{
                                                        IT:[ "Gli eroi dovranno {label.lock@1}" ],
                                                        EN:[ "The heroes will have to {label.lock@1}" ],
                                                        ES:[ "Los h&eacute;roes tendr&aacute;n que {label.lock@1}" ]
                                                    }
                                                ],
                                                end:[
                                                    {
                                                        IT:[ "e porre fine a tutto questo una volta per tutte." ],
                                                        EN:[ "and put an end to all this once and for all." ],
                                                        ES:[ "y poner fin a todo esto de una vez por todas." ]
                                                    },{
                                                        IT:[ "e concludere la loro lunga avventura." ],
                                                        EN:[ "and end their long adventure." ],
                                                        ES:[ "y concluir su larga aventura." ]
                                                    },{
                                                        IT:[ "e risolvere il problema alla radice." ],
                                                        EN:[ "and solve the root of the problem." ],
                                                        ES:[ "y resolver el problema de ra&iacute;z." ]
                                                    }
                                                ],
                                                learn:[
                                                    {
                                                        IT:[ "Presto l'Oscurit&agrave; capir&agrave; che" ],
                                                        EN:[ "Soon the Darkness will understand that" ],
                                                        ES:[ "Pronto la Oscuridad comprender&aacute; que" ]
                                                    },{
                                                        IT:[ "Il Male imparer&agrave; presto che" ],
                                                        EN:[ "Evil will learn soon that" ],
                                                        ES:[ "El Mal aprender&aacute; pronto que" ]
                                                    },{
                                                        IT:[ "I loro nemici impareranno a loro spese che" ],
                                                        EN:[ "Their enemies will learn to their cost that" ],
                                                        ES:[ "Sus enemigos aprender&aacute;n a su costa que" ]
                                                    }
                                                ],
                                                lesson:[
                                                    {
                                                        IT:[ "gli Eroi sono pi&ugrave; pericolosi di quello che sembra." ],
                                                        EN:[ "the Heroes are more dangerous than they seem." ],
                                                        ES:[ "los H&eacute;roes son m&aacute;s peligrosos de lo que parecen." ]
                                                    },{
                                                        IT:[ "anche il Bene sa mostrare i denti." ],
                                                        EN:[ "even the Good knows how to show its teeth." ],
                                                        ES:[ "incluso el Bien sabe ense&ntilde;ar los dientes." ]
                                                    },{
                                                        IT:[ "prendersela con i pi&ugrave; deboli non paga mai." ],
                                                        EN:[ "picking on the weakest never pays." ],
                                                        ES:[ "meterse con los m&aacute;s d&eacute;biles nunca sale gratis." ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "gli sciamani", "gli Sciamani", "dagli Sciamani" ],
                                                        EN:[ "the shamans", "the Shamans", "by the Shamans" ],
                                                        ES:[ "los chamanes", "los Chamanes", "por los Chamanes" ]
                                                    },{
                                                        IT:[ "i sacerdoti", "i Sacerdoti", "dai Sacerdoti" ],
                                                        EN:[ "the priests", "the Priests", "by the Priests" ],
                                                        ES:[ "los sacerdotes", "los Sacerdotes", "por los Sacerdotes" ]
                                                    },{
                                                        IT:[ "gli adepti", "gli Adepti", "dagli Adepti" ],
                                                        EN:[ "the followers", "the Followers", "by the Followers" ],
                                                        ES:[ "los adeptos", "los Adeptos", "por los Adeptos" ]
                                                    }
                                                ],
                                                collecting:[
                                                    {
                                                        IT:[ "Gemme", "Trovare le Gemme", "Gemma" ],
                                                        EN:[ "Gems", "Finding the Gems", "Gem" ],
                                                        ES:[ "Gemas", "Encontrar las Gemas", "Gema" ]
                                                    },{
                                                        IT:[ "Sfere", "Trovare le Sfere", "Sfera" ],
                                                        EN:[ "Spheres", "Finding the Spheres", "Sphere" ],
                                                        ES:[ "Esferas", "Encontrar las Esferas", "Esfera" ]
                                                    },{
                                                        IT:[ "Chiavi", "Trovare le Chiavi", "Chiave" ],
                                                        EN:[ "Keys", "Finding the Keys", "Key" ],
                                                        ES:[ "Llaves", "Encontrar las Llaves", "Llave" ]
                                                    }
                                                ],
                                                doors:[
                                                    {
                                                        IT:[ "delle Porte di Cristallo", "le Porte di Cristallo", "Porte di Cristallo" ],
                                                        EN:[ "of the Crystal Doors", "the Crystal Doors", "Crystal Doors" ],
                                                        ES:[ "de las Puertas de Cristal", "las Puertas de Cristal", "Puertas de Cristal" ]
                                                    },{
                                                        IT:[ "delle Porte Sigillate", "le Porte Sigillate", "Porte Sigillate" ],
                                                        EN:[ "of the Sealed Doors", "the Sealed Doors", "Sealed Doors" ],
                                                        ES:[ "de las Puertas Selladas", "las Puertas Selladas", "Puertas Selladas" ]
                                                    },{
                                                        IT:[ "delle Porte d'Argento", "le Porte d'Argento", "Porte d'Argento" ],
                                                        EN:[ "of the Silver Doors", "the Silver Doors", "Silver Doors" ],
                                                        ES:[ "de las Puertas de Plata", "las Puertas de Plata", "Puertas de Plata" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                lock:[
                                                    {
                                                        IT:[ "sono sigillate magicamente", "distruggerne le serrature incantate" ],
                                                        EN:[ "are magically sealed", "destroy the enchanted locks" ],
                                                        ES:[ "est&aacute;n selladas m&aacute;gicamente", "destruir las cerraduras encantadas" ]
                                                    },{
                                                        IT:[ "sono bloccate da dei meccanisimi", "sbloccarne i meccanismi" ],
                                                        EN:[ "are blocked by some mechanism", "unlock the mechanisms" ],
                                                        ES:[ "est&aacute;n bloqueadas por mecanismos", "desbloquear los mecanismos" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.doors:capital@1}",
                                            ES:"{label.doors:capital@1}"
                                        },{
                                            EN:"{label.enemies:capital@1}",
                                            ES:"{label.enemies:capital@1}"
                                        },{
                                            EN:"{label.break:capital@0}",
                                            ES:"{label.break:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.onlyThing@0} {label.break@0} {label.and@0} {label.close@0} {label.mission@0} {label.end@0} {label.learn@0} {label.lesson@0}",
                                            ES:"{label.onlyThing@0} {label.break@0} {label.and@0} {label.close@0} {label.mission@0} {label.end@0} {label.learn@0} {label.lesson@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            ES:"Completa los objetivos en el orden indicado:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemies@1}",
                                                        EN:"Defeat {label.enemies@1}",
                                                        ES:"Derrotar a {label.enemies@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere entrambi i Mostri Erranti che vengono generati sui segnalini Obiettivo",
                                                        EN:"Kill both Roaming Monsters that spawn on Objective tokens",
                                                        ES:"Matar a los dos Monstruos Errantes que aparecen sobre los marcadores de Objetivo"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.doors@2}",
                                                        ES:"{label.doors@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le 2 porte chiuse a chiave (contrassegnate in rosso) sulla mappa {label.lock@0}. Non possono essere aperte finch&eacute; gli Eroi non riescono a raccogliere 4 {label.collecting@0} <i>(vedere sotto)</i>.",
                                                        EN:"The 2 locked doors (marked in red) on the map {label.lock@0}. They cannot be opened until the Heroes manage to collect 4 {label.collecting@0} <i>(see below)</i>.",
                                                        ES:"Las 2 puertas cerradas con llave (marcadas en rojo) del mapa {label.lock@0}. No pueden abrirse hasta que los H&eacute;roes consigan recoger 4 {label.collecting@0} <i>(ver m&aacute;s abajo)</i>."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.collecting@1}",
                                                        ES:"{label.collecting@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che un Eroe ha ucciso un Comandante o un Mostro Errante, tirare 1 {symbol.blackDie}. Con un risultato di {symbol.fang} gli Eroi trovano 1 {label.collecting@2}. Con un risultato di {symbol.fang}+{symbol.scratch}, gli Eroi trovano 2 {label.collecting@0}. Altrimenti, non accade nulla. Una volta raccolte 4 {label.collecting@0}, smettere di raccoglierle.",
                                                        EN:"After a Hero kills a Leader or a Roaming Monster, roll 1 {symbol.blackDie}. On a roll of {symbol.fang} the Heroes find 1 {label.collecting@2}. On a roll of {symbol.fang}+{symbol.scratch}, the Heroes find 2 {label.collecting@0}. Otherwise, nothing happens. Once you collect 4 {label.collecting@0}, stop collecting them.",
                                                        ES:"Despu&eacute;s de que un H&eacute;roe mate a un L&iacute;der o a un Monstruo Errante, tira 1 {symbol.blackDie}. Con un resultado de {symbol.fang}, los H&eacute;roes encuentran 1 {label.collecting@2}. Con un resultado de {symbol.fang}+{symbol.scratch}, los H&eacute;roes encuentran 2 {label.collecting@0}. En cualquier otro caso, no ocurre nada. Una vez recogidas 4 {label.collecting@0}, deja de recogerlas."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Dopo che un Eroe ha ucciso un Comandante o un Mostro Errante, tirare 1 {symbol.blackDie}. Con un risultato di {symbol.fang} gli Eroi trovano 1 {label.collecting@2}. Con un risultato di {symbol.fang}+{symbol.scratch}, gli Eroi trovano 2 {label.collecting@0}. Altrimenti, non accade nulla. Per ogni {label.collecting@2} trovata ogni Eroe ottiene 3 PE. Una volta raccolte 4 {label.collecting@0}, smettere di raccoglierle.",
                                                        EN:"After a Hero kills a Leader or a Roaming Monster, roll 1 {symbol.blackDie}. On a roll of {symbol.fang} the Heroes find 1 {label.collecting@2}. On a roll of {symbol.fang}+{symbol.scratch}, the Heroes find 2 {label.collecting@0}. Otherwise, nothing happens. For each collected {label.collecting@2} all Heroes gets 3 XP. Once you collect 4 {label.collecting@0}, stop collecting them.",
                                                        ES:"Despu&eacute;s de que un H&eacute;roe mate a un L&iacute;der o a un Monstruo Errante, tira 1 {symbol.blackDie}. Con un resultado de {symbol.fang}, los H&eacute;roes encuentran 1 {label.collecting@2}. Con un resultado de {symbol.fang}+{symbol.scratch}, los H&eacute;roes encuentran 2 {label.collecting@0}. En cualquier otro caso, no ocurre nada. Por cada {label.collecting@2} encontrada, todos los H&eacute;roes ganan 3 PE. Una vez recogidas 4 {label.collecting@0}, deja de recogerlas."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemies:capital@1}",
                                                        ES:"{label.enemies:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando 1 {label.doors@0} si apre, aprire entrambe {label.doors@1} e non pescare una carta Porta. Generare semplicemente 2 Mostri Erranti di Livello 5, 1 su ognuno dei 2 segnalini Obiettivo. Questi Mostri Erranti sono pi&ugrave; difficili da sconfiggere. Possiedono il doppio dell'ammontare di Salute indicato. Una volta sconfitti {label.questVictory@0}.",
                                                        EN:"When 1 {label.doors@0} is opened, open both {label.doors@1} and do not draw a Door card. Simply spawn 2 Level 5 Roaming Monsters, 1 on each of the 2 Objective tokens. These Roaming Monsters are harder to defeat. They have double the indicated amount of Health. When defeated {label.questVictory@0}.",
                                                        ES:"Cuando se abre 1 {label.doors@0}, abre tambi&eacute;n {label.doors@1} y no robes carta de Puerta. Simplemente genera 2 Monstruos Errantes de nivel 5, 1 sobre cada uno de los 2 marcadores de Objetivo. Estos Monstruos Errantes son m&aacute;s dif&iacute;ciles de derrotar: tienen el doble de la Vida indicada. Una vez derrotados, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando 1 {label.doors@0} si apre, aprire entrambe {label.doors@1} e non pescare una carta Porta. Generare semplicemente 2 {label.campaignBoss@1} 2 {label.campaignBoss@2}, 1 su ognuno dei 2 segnalini Obiettivo. Questi Mostri Erranti sono pi&ugrave; difficili da sconfiggere. Possiedono il doppio dell'ammontare di Salute indicato. Una volta sconfitti {label.questVictory@0}.",
                                                        EN:"When 1 {label.doors@0} is opened, open both {label.doors@1} and do not draw a Door card. Simply spawn 2 {label.campaignBoss@1} 2 {label.campaignBoss@2}, 1 on each of the 2 Objective tokens. These Roaming Monsters are harder to defeat. They have double the indicated amount of Health. When defeated {label.questVictory@0}.",
                                                        ES:"Cuando se abre 1 {label.doors@0}, abre tambi&eacute;n {label.doors@1} y no robes carta de Puerta. Simplemente genera 2 {label.campaignBoss@1} 2 {label.campaignBoss@2}, 1 sobre cada uno de los 2 marcadores de Objetivo. Estos Monstruos Errantes son m&aacute;s dif&iacute;ciles de derrotar: tienen el doble de la Vida indicada. Una vez derrotados, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze-huge" ],
                                            gameMode: [ "doubleBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "huge" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "doubleBoss" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms" ]
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
                                                    IT:"Elimina {boss.bossBadName@0}, evocato {label.enemies@2}",
                                                    EN:"Eliminate {boss.bossBadName@0}, summoned {label.enemies@2}",
                                                    ES:"Elimina a {boss.bossBadName@0}, invocado {label.enemies@2}"
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
                        },{
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forActs:[1,2],
                            forMaps:[1],
                            type:"towerDefense",
                            objective:{
                                EN:"Defend a zone from enemies."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Il Labirinto dell'Oscurit&agrave;\"",
                                EN:"Inspired by the Upgrade Pack quest \"Maze of Darkness\"",
                                ES:"Inspirado en la aventura del Pack de Mejora \"Maze of Darkness\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                item:[
                                                    {
                                                        IT:[ "potenti artefatti", "il forziere pieno di artefatti", "l'Artefatto", "Caccia all'Artefatto" ],
                                                        EN:[ "powerful artifacts", "the chest full of artifacts", "the Artifact", "Artifact Hunt" ],
                                                        ES:[ "poderosos artefactos", "el cofre lleno de artefactos", "el Artefacto", "Caza del Artefacto" ]
                                                    },{
                                                        IT:[ "gemme magiche", "la cassa piena di gemme magiche", "la Gemma", "Caccia alla Gemma" ],
                                                        EN:[ "magic gems", "the chest full of magic gems", "the Gem", "Gem Hunt" ],
                                                        ES:[ "gemas m&aacute;gicas", "el cofre lleno de gemas m&aacute;gicas", "la Gema", "Caza de la Gema" ]
                                                    },{
                                                        IT:[ "pergamene arcane", "la sacca piena di pergamene arcane", "la Pergamena", "Caccia alla Pergamena" ],
                                                        EN:[ "arcane scrolls", "the bag full of arcane scrolls", "the Scroll", "Scroll Hunt" ],
                                                        ES:[ "pergaminos arcanos", "el saco lleno de pergaminos arcanos", "el Pergamino", "Caza del Pergamino" ]
                                                    }
                                                ],
                                                barrier:[
                                                    {
                                                        IT:[ "Barriere Magiche", "sono Barriere Magiche", "le Barriere Magiche", "ogni Barriera", "una Barriera", "alla Barriera", "una Barriera Magica", "la Barriera pi&ugrave; vicina", "la Barriera", "verso di essa", "distrutta" ],
                                                        EN:[ "Magic Barriers", "are Magic Barriers", "Magic Barriers", "each Barrier", "a Barrier", "on the Barrier", "a Magic Barrier", "the closest Barrier", "the Barrier", "toward it", "destroyed" ],
                                                        ES:[ "Barreras M&aacute;gicas", "son Barreras M&aacute;gicas", "las Barreras M&aacute;gicas", "cada Barrera", "una Barrera", "sobre la Barrera", "una Barrera M&aacute;gica", "la Barrera m&aacute;s cercana", "la Barrera", "hacia ella", "destruida" ]
                                                    },{
                                                        IT:[ "Piloni Protettivi", "sono Piloni Protettivi", "i Piloni Protettivi", "ogni Pilone", "un Pilone", "al Pilone", "un Pilone Protettivo", "il Pilone pi&ugrave; vicino", "il Pilone", "verso di esso", "distrutto" ],
                                                        EN:[ "Protective Pylons", "are Protective Pylons", "Protective Pylons", "each Pylon", "a Pylon", "on the Pylon", "a Protective Pylon", "the closest Pylon", "the Pylon", "toward it", "destroyed" ],
                                                        ES:[ "Pilones Protectores", "son Pilones Protectores", "los Pilones Protectores", "cada Pil&oacute;n", "un Pil&oacute;n", "sobre el Pil&oacute;n", "un Pil&oacute;n Protector", "el Pil&oacute;n m&aacute;s cercano", "el Pil&oacute;n", "hacia &eacute;l", "destruido" ]
                                                    },{
                                                        IT:[ "Torrette Difensive", "sono Torrette Difensive", "le Torrette Difensive", "ogni Torretta", "una Torretta", "alla Torretta", "una Torretta Difensiva", "la Torretta pi&ugrave; vicina", "la Torretta", "verso di essa", "distrutta" ],
                                                        EN:[ "Defensive Turrets", "are Defensive Turrets", "Defensive Turrets", "each Turret", "a Turret", "on the Turret", "a Defensive Turret", "the closest Turret", "the Turret", "toward it", "destroyed" ],
                                                        ES:[ "Torretas Defensivas", "son Torretas Defensivas", "las Torretas Defensivas", "cada Torreta", "una Torreta", "sobre la Torreta", "una Torreta Defensiva", "la Torreta m&aacute;s cercana", "la Torreta", "hacia ella", "destruida" ]
                                                    }
                                                ],
                                                interference:[
                                                    {
                                                        IT:[ "Sembra che le forze dell'Oscurit&agrave; alla fine siano venute a sapere delle interferenze degli eroi." ],
                                                        EN:[ "It seems that the forces of Darkness eventually learned of the heroes' interference." ],
                                                        ES:[ "Parece que las fuerzas de la Oscuridad finalmente se enteraron de la interferencia de los h&eacute;roes." ]
                                                    },{
                                                        IT:[ "I piani degli eroi sono stati scoperti." ],
                                                        EN:[ "The heroes' plans have been exposed." ],
                                                        ES:[ "Los planes de los h&eacute;roes han quedado al descubierto." ]
                                                    },{
                                                        IT:[ "Gli eroi avevano un piano ben preciso ma non sono stati abbastanza scrupolosi nel mantenerlo segreto." ],
                                                        EN:[ "The heroes had a very specific plan but they were not scrupulous enough in keeping it secret." ],
                                                        ES:[ "Los h&eacute;roes ten&iacute;an un plan muy concreto, pero no fueron lo bastante cuidadosos a la hora de mantenerlo en secreto." ]
                                                    }
                                                ],
                                                purpose:[
                                                    {
                                                        IT:[ "Sapendo che gli eroi stanno accumulando {label.item@0}," ],
                                                        EN:[ "Knowing that the heroes are amassing {label.item@0}," ],
                                                        ES:[ "Sabiendo que los h&eacute;roes est&aacute;n acumulando {label.item@0}," ]
                                                    },{
                                                        IT:[ "Per qualche motivo, gli eroi sono alla ricerca di {label.item@0} per cui"],
                                                        EN:[ "The heroes are looking for {label.item@0} for some reason, so"],
                                                        ES:[ "Por alg&uacute;n motivo, los h&eacute;roes andan buscando {label.item@0}, as&iacute; que" ]
                                                    },{
                                                        IT:[ "Qualcuno ha visto gli eroi mentre facevano domande su dove trovare {label.item@0} e" ],
                                                        EN:[ "Someone saw the heroes asking questions about where to find {label.item@0} and" ],
                                                        ES:[ "Alguien vio a los h&eacute;roes preguntando d&oacute;nde encontrar {label.item@0} y" ]
                                                    }
                                                ],
                                                trap:[
                                                    {
                                                        IT:[ "i nemici hanno trovato un modo per attirarli in trappola con l'inganno!" ],
                                                        EN:[ "the enemies have found a way to lure them into a trap by deception!" ],
                                                        ES:[ "&iexcl;los enemigos han encontrado la forma de atraerlos con enga&ntilde;os hacia una trampa!" ]
                                                    },{
                                                        IT:[ "i nemici sono riusciti ad attirarli nella loro trappola mortale!" ],
                                                        EN:[ "the enemies managed to lure them into their deadly trap!" ],
                                                        ES:[ "&iexcl;los enemigos han conseguido atraerlos hacia su trampa mortal!" ]
                                                    },{
                                                        IT:[ "i nemici hanno organizzato una trappola per attirarli nel bel mezzo del loro territorio!" ],
                                                        EN:[ "the enemies have set up a trap to lure them into the middle of their territory!" ],
                                                        ES:[ "&iexcl;los enemigos han preparado una trampa para atraerlos hasta el centro de su territorio!" ]
                                                    }
                                                ],
                                                onlyWay:[
                                                    {
                                                        IT:[ "C'&egrave; un solo modo per fuggirne:" ],
                                                        EN:[ "There is only one way to escape:" ],
                                                        ES:[ "Solo hay una forma de escapar:" ]
                                                    },{
                                                        IT:[ "Ormai non possono pi&ugrave; fuggire. Devono"],
                                                        EN:[ "Now they can no longer escape. They have to" ],
                                                        ES:[ "Ahora ya no pueden escapar. Tienen que" ]
                                                    },{
                                                        IT:[ "Non hanno alcuno scampo. Per sopravvivere devono" ],
                                                        EN:[ "They have no escape. To survive they must" ],
                                                        ES:[ "No tienen escapatoria. Para sobrevivir deben" ]
                                                    }
                                                ],
                                                survive:[
                                                    {
                                                        IT:[ "sopravvivere a questa battaglia e proteggere {label.item@1}!" ],
                                                        EN:[ "survive this battle and protect {label.item@1}!" ],
                                                        ES:[ "&iexcl;sobrevivir a esta batalla y proteger {label.item@1}!" ]
                                                    },{
                                                        IT:[ "proteggere {label.item@1} senza lasciarci la pelle!" ],
                                                        EN:[ "protect {label.item@1} without killing us!" ],
                                                        ES:[ "&iexcl;proteger {label.item@1} sin dejarnos la piel en ello!" ]
                                                    },{
                                                        IT:[ "rimanere vivi e difendere {label.item@1}!" ],
                                                        EN:[ "stay alive and defend {label.item@1}!" ],
                                                        ES:[ "&iexcl;mantenerse con vida y defender {label.item@1}!" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                spareItem:[
                                                    {
                                                        IT:[ "riescono a difendere {label.barrier@2}", "almeno {label.barrier@6} non venga {label.barrier@10} (al momento della vittoria deve esserci almeno {label.barrier@6} non {label.barrier@10})" ],
                                                        EN:[ "manage to defend the {label.barrier@2}", "at least {label.barrier@6} is not {label.barrier@10} (at the time of victory there must be at least {label.barrier@6} not {label.barrier@10})" ],
                                                        ES:[ "consiguen defender {label.barrier@2}", "al menos {label.barrier@6} no est&eacute; {label.barrier@10} (en el momento de la victoria debe haber al menos {label.barrier@6} que no est&eacute; {label.barrier@10})" ]
                                                    }
                                                ],
                                                collectAllItems:[
                                                    {
                                                        IT:[ "a raccogliere tutto il bottino", "raccogliendo tutti i Segnalini Bottino sulla tessera centrale ({tileLabel.first})" ],
                                                        EN:[ "to collect all the loot", "collecting all the Loot Tokens on the central Tile ({tileLabel.first})"],
                                                        ES:[ "a recoger todo el bot&iacute;n", "recogiendo todos los marcadores de Bot&iacute;n de la Loseta central ({tileLabel.first})" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                           EN:"{label.item:capital@3}",
                                           ES:"{label.item:capital@3}"
                                        },{
                                            EN:"{label.barrier:capital@2}",
                                            ES:"{label.barrier:capital@2}"
                                        },{
                                            EN:"{label.item:capital@1}",
                                            ES:"{label.item:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.interference@0} {label.purpose@0} {label.trap@0} {label.onlyWay@0} {label.survive@0}",
                                            ES:"{label.interference@0} {label.purpose@0} {label.trap@0} {label.onlyWay@0} {label.survive@0}"
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
                                                        IT:"Proteggere {label.item@2}",
                                                        EN:"Defend {label.item@2}",
                                                        ES:"Proteger {label.item@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Se c'&egrave; un Nemico nella Zona con il segnalino Obiettivo sul lato colorato all'inizio della Fase dei Nemici, la Missione termina con una sconfitta",
                                                        EN:"If there is an Enemy in the Zone with the Objective token on its colored side at the start of the Enemy Phase, the Mission ends in defeat",
                                                        ES:"Si hay alg&uacute;n Enemigo en la Zona con el marcador de Objetivo en su lado de color al principio de la Fase de los Enemigos, la Misi&oacute;n termina en derrota"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere tutti i Nemici",
                                                        EN:"Eliminate all Enemies",
                                                        ES:"Eliminar a Todos los Enemigos",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Una volta che i Nemici hanno smesso di generarsi, uccidere tutti i Nemici per {label.questVictory@1}",
                                                        EN:"Once Enemies stop spawning, kill all Enemies to {label.questVictory@1}",
                                                        ES:"Una vez que los Enemigos dejen de generarse, mata a todos los Enemigos para {label.questVictory@1}"
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
                                                        IT:"Collocare il segnalino Tesoro Raro, che solitamente si aggiunge nel 4&deg; round, nel sacchetto dei Tesori. Quando il tracciato Oscurit&agrave; raggiunge il 4&deg; round, evitare semplicemente di aggiungere il segnalino Tesoro Raro (collocare un segnalino Clessidra sopra l'icona Tesoro Raro sul tracciato Oscurit&agrave; come promemoria). Aggiungere i segnalini Tesoro al 6&deg; e 8&deg; round come di norma."+
                                                        "<p>Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere con almeno 1 Porta della Tessera centrale ({tileLabel.first}) un ammontare di segnalini Tesoro estratti dal sacchetto in base al numero dei giocatori:</p>"+
                                                        "<ul>"+
                                                        "<li>1-2 Eroi: 1 segnalino Tesoro per Zona</li>"+
                                                        "<li>3-4 Eroi: 2 segnalini Tesoro per Zona</li>"+
                                                        "<li>5-6 Eroi: 3 segnalini Tesoro per Zona</li>"+
                                                        "</ul>"+
                                                        "<p>Collocare i segnalini Corruzione sulla 2&deg;, 4&deg;, 6&deg; e 8&deg; casella del tracciato Oscurit&agrave;. Collocare, inoltre, un segnalino Generazione sulla 3&deg;, 7&deg; e 9&deg; casella del tracciato Oscurit&agrave;.",
                                                        EN:"Place the Rare Treasure token, which is usually added in the 4th round, into the Treasure bag. When the Darkness track reaches the 4th round, simply do not add the Rare Treasure token (place an Hourglass token over the Rare Treasure icon on the Darkness track as a reminder.) Add Treasure tokens on the 6th and 8th rounds as normal."+
                                                        "<p>Generate 1 Horde on each of the 4 Portals. Place an amount of Treasure tokens drawn from the bag based on the number of players in each of the Zones of the Chambers with at least 1 Door of the central Tile ({tileLabel.first}):</p> "+
                                                        "<ul>"+
                                                        "<li>1-2 Heroes: 1 Treasure token per Zone</li>"+
                                                        "<li>3-4 Heroes: 2 Treasure tokens per Zone</li>"+
                                                        "<li>5-6 Heroes: 3 Treasure tokens per Zone</li>"+
                                                        "</ul>"+
                                                        "<p>Place the Corruption tokens on the 2nd, 4th, 6th, and 8th spaces of the Darkness track. Additionally, place a Spawn token on the 3rd, 7th, and 9th spaces of the Darkness track.",
                                                        ES:"Coloca el marcador de Tesoro Raro, que normalmente se a&ntilde;ade en la 4&ordf; ronda, en la bolsa de Tesoro. Cuando la barra de Oscuridad alcance la 4&ordf; ronda, simplemente no a&ntilde;adas el marcador de Tesoro Raro (coloca un marcador de Reloj de Arena sobre el icono de Tesoro Raro en la barra de Oscuridad a modo de recordatorio). A&ntilde;ade los marcadores de Tesoro en las rondas 6&ordf; y 8&ordf; con normalidad." + "<p>Genera 1 Horda en cada uno de los 4 Portales. Coloca en cada una de las Zonas de las C&aacute;maras con al menos 1 Puerta de la Loseta central ({tileLabel.first}) una cantidad de marcadores de Tesoro extra&iacute;dos de la bolsa seg&uacute;n el n&uacute;mero de jugadores:</p> " + "<ul>" + "<li>1-2 H&eacute;roes: 1 marcador de Tesoro por Zona</li>" + "<li>3-4 H&eacute;roes: 2 marcadores de Tesoro por Zona</li>" + "<li>5-6 H&eacute;roes: 3 marcadores de Tesoro por Zona</li>" + "</ul>" + "<p>Coloca los marcadores de Corrupci&oacute;n en las casillas 2&ordf;, 4&ordf;, 6&ordf; y 8&ordf; de la barra de Oscuridad. Adem&aacute;s, coloca un marcador de Generaci&oacute;n en las casillas 3&ordf;, 7&ordf; y 9&ordf; de la barra de Oscuridad.",
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere con almeno 1 Porta della Tessera centrale ({tileLabel.first}) 1 Segnalino Bottino."+
                                                        "<p>Collocare i segnalini Corruzione sulla 2&deg;, 4&deg;, 6&deg; e 8&deg; casella del tracciato Oscurit&agrave;. Collocare, inoltre, un segnalino Generazione sulla 3&deg;, 7&deg; e 9&deg; casella del tracciato Oscurit&agrave;.",
                                                        EN:"Generate 1 Horde on each of the 4 Portals. Place 1 Loot Token in each of the Zones of the Chambers with at least 1 Door of the central Tile ({tileLabel.first})."+
                                                        "<p>Place the Corruption tokens on the 2nd, 4th, 6th, and 8th spaces of the Darkness track. Additionally, place a Spawn token on the 3rd, 7th, and 9th spaces of the Darkness track.",
                                                        ES:"Genera 1 Horda en cada uno de los 4 Portales. Coloca 1 marcador de Bot&iacute;n en cada una de las Zonas de las C&aacute;maras con al menos 1 Puerta de la Loseta central ({tileLabel.first})." + "<p>Coloca los marcadores de Corrupci&oacute;n en las casillas 2&ordf;, 4&ordf;, 6&ordf; y 8&ordf; de la barra de Oscuridad. Adem&aacute;s, coloca un marcador de Generaci&oacute;n en las casillas 3&ordf;, 7&ordf; y 9&ordf; de la barra de Oscuridad."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nessun Rinforzo Extra",
                                                        EN:"No Extra Reinforcement",
                                                        ES:"Sin Refuerzos Extra"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ignorare tutte le capacit&agrave; o gli effetti dei Nemici che generano Orde extra o Mostri Erranti extra.",
                                                        EN:"Ignore any Enemy abilities or effects that generate extra Mobs or extra Roaming Monsters.",
                                                        ES:"Ignora cualquier habilidad o efecto de los Enemigos que genere Cuadrillas extra o Monstruos Errantes extra."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Ondate di Nemici",
                                                        EN:"Enemy Waves",
                                                        ES:"Oleadas de Enemigos"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Per questa Missione, ignorare qualsiasi generazione dal tracciato Oscurit&agrave;. Invece, ogni volta che il tracciato Oscurit&agrave; raggiunge una casella con un segnalino, scartare quel segnalino e risolvere l'effetto corrispondente:"+
                                                        "<ul>"+
                                                        "<li><b>Segnalino Corruzione:</b> Generare 1 Mostro Errante sul Portale dei Mostri Erranti. Fatto questo, scambiare la posizione del Portale dei Mostri Erranti con il Portale successivo in senso orario. Il Portale dei Mostri Erranti passa alle Tessere seguenti:"+
                                                        "<ul>"+
                                                        "<li>Round 2: {tileLabel.second}</li>"+
                                                        "<li>Round 4: {tileLabel.third}</li>"+
                                                        "<li>Round 6: {tileLabel.fourth}</li>"+
                                                        "<li>Round 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Segnalino Generazione:</b> Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere della Tessera centrale ({tileLabel.first}) un ammontare di segnalini Tesoro estratti dal sacchetto in base al numero degli Eroi:"+
                                                        "<ul>"+
                                                        "<li><b>1-2 Eroi:</b> 1 segnalino Tesoro per Zona</li>"+
                                                        "<li><b>3-4 Eroi:</b> 2 segnalini Tesoro per Zona</li>"+
                                                        "<li><b>5-6 Eroi:</b> 3 segnalini Tesoro per Zona</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "</ul>",
                                                        EN:"For this Mission, ignore any spawns from the Darkness track. Instead, whenever the Darkness track reaches a space with a token, discard that token and resolve the corresponding effect:"+
                                                        "<ul>"+
                                                        "<li><b>Corruption Token:</b> Spawn 1 Roaming Monster on the Roaming Monster Portal. Once this is done, swap the location of the Roaming Monster Portal with the next Portal clockwise. The Roaming Monster Portal switches to the following tiles:"+
                                                        "<ul>"+
                                                        "<li>Round 2: {tileLabel.second}</li>"+
                                                        "<li>Round 4: {tileLabel.third}</li>"+
                                                        "<li>Round 6: {tileLabel.fourth}</li>"+
                                                        "<li>Round 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Spawn Token:</b> Spawn 1 Horde on each of the 4 Portals. Place an amount of Treasure tokens taken from the bag in each of the Chamber Zones of the central Tile ({tileLabel.first}) based on the number of Heroes:"+
                                                        "<ul>"+
                                                        "<li><b>1-2 Heroes:</b> 1 Treasure token per Zone</li>"+
                                                        "<li><b>3-4 Heroes:</b> 2 Treasure tokens per Zone</li>"+
                                                        "<li><b>5-6 Heroes:</b> 3 Treasure tokens per Zone</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "</ul>",
                                                        ES:"Para esta Misi&oacute;n, ignora cualquier generaci&oacute;n proveniente de la barra de Oscuridad. En su lugar, cada vez que la barra de Oscuridad alcance una casilla con un marcador, descarta ese marcador y resuelve el efecto correspondiente:" + "<ul>" + "<li><b>Marcador de Corrupci&oacute;n:</b> Genera 1 Monstruo Errante en el Portal de Monstruos Errantes. Hecho esto, intercambia la posici&oacute;n del Portal de Monstruos Errantes con el siguiente Portal en sentido horario. El Portal de Monstruos Errantes pasa a las siguientes Losetas:" + "<ul>" + "<li>Ronda 2: {tileLabel.second}</li>" + "<li>Ronda 4: {tileLabel.third}</li>" + "<li>Ronda 6: {tileLabel.fourth}</li>" + "<li>Ronda 8: {tileLabel.fifth}</li>" + "</ul>" + "</li>" + "<li><b>Marcador de Generaci&oacute;n:</b> Genera 1 Horda en cada uno de los 4 Portales. Coloca en cada una de las Zonas de las C&aacute;maras de la Loseta central ({tileLabel.first}) una cantidad de marcadores de Tesoro extra&iacute;dos de la bolsa seg&uacute;n el n&uacute;mero de H&eacute;roes:" + "<ul>" + "<li><b>1-2 H&eacute;roes:</b> 1 marcador de Tesoro por Zona</li>" + "<li><b>3-4 H&eacute;roes:</b> 2 marcadores de Tesoro por Zona</li>" + "<li><b>5-6 H&eacute;roes:</b> 3 marcadores de Tesoro por Zona</li>" + "</ul>" + "</li>" + "</ul>",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.barrier@0}",
                                                        ES:"{label.barrier@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato grigio {label.barrier@1} che bloccano i Nemici e impediscono loro di lasciare quella Zona. I Nemici bersagliano {label.barrier@2} come se bersagliassero gli Eroi, e {label.barrier@3} possiede 5 Salute. Ogni volta che un Nemico attacca {label.barrier@4}, non tirare i dadi come in un combattimento regolare. Infliggere invece 1 Ferita {label.barrier@5}.",
                                                        EN:"The Objective tokens on the gray side {label.barrier@1} that block Enemies and prevent them from leaving that Zone. Enemies target le Barriere Magiche {label.barrier@2} as if they were targeting Heroes, and {label.barrier@3} has 5 Health. Whenever an Enemy attacks {label.barrier@4}, do not roll dice as in regular combat. Instead, inflict 1 Wound {label.barrier@5}.",
                                                        ES:"Los marcadores de Objetivo en su lado gris {label.barrier@1} que bloquean a los Enemigos e impiden que abandonen esa Zona. Los Enemigos consideran {label.barrier@2} como si fueran H&eacute;roes a la hora de elegir objetivo, y {label.barrier@3} tiene 5 de Vida. Cada vez que un Enemigo ataca {label.barrier@4}, no tires los dados como en un combate normal. En su lugar, inflige 1 Herida {label.barrier@5}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.item@3}",
                                                        ES:"{label.item@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questa Missione, invece dell'attivazione regolare, tutti i Nemici, inclusi i Mostri Erranti, devono seguire un comportamento diverso. Effettuano 2 azioni. Per ogni azione, controllare le condizioni seguenti. Se la prima viene soddisfatta, effettuare quella. Altrimenti, passare alla condizione successiva, finch&eacute; non se ne soddisfa una."+
                                                        "<ul>"+
                                                        "<li><b>Se c'&egrave; {label.barrier@6} tra il Nemico e il segnalino Obiettivo sul lato colorato:</b> Il Nemico considera {label.barrier@7} come suo bersaglio per attaccare o muoversi. Questo significa che pu&ograve; attaccare {label.barrier@8}, se si trova a gittata. Altrimenti si muove di 1 Zona {label.barrier@9} (ignorando eventuali Eroi).</li>"+
                                                        "<li><b>Se c'&egrave; almeno 1 Eroe tra il Nemico e il segnalino Obiettivo sul lato colorato:</b> Il Nemico considera l'Eroe pi&ugrave; vicino come suo bersaglio per attaccare o muoversi.</li>"+
                                                        "<li><b>Altrimenti:</b> Il Nemico si muove di 1 Zona verso il segnalino Obiettivo sul lato colorato."+
                                                        "</ul>"+
                                                        "<p>Se, all'inizio della Fase dei Nemici, c'&egrave; un Nemico nella Zona del segnalino Obiettivo sul lato colorato, la Missione termina con una sconfitta.</p>",
                                                        EN:"In this Mission, instead of the regular activation, all Enemies, including Roaming Monsters, must follow a different behavior. They perform 2 actions. For each action, check the following conditions. If the first one is met, perform that one. Otherwise, move on to the next condition until one is satisfied."+
                                                        "<ul>"+
                                                        "<li><b>If there is {label.barrier@6} between the Enemy and the Objective token on the colored side:</b> The Enemy treats {label.barrier@7} as its target to attack or move. This means it can attack {label.barrier@8}, if within range. Otherwise, move 1 Zone {label.barrier@9} (ignoring any Heroes).</li>"+
                                                        "<li><b>If there is at least 1 Hero between the Enemy and the Objective token on the colored side:</b> The Enemy treats the closest Hero as its target to attack or move.</li>" +
                                                        "<li><b>Otherwise:</b> The Enemy moves 1 Zone toward the Objective token on the colored side."+
                                                        "</ul>"+
                                                        "<p>If, at the start of the Enemy Phase, there is an Enemy in the Zone of the Objective token on the colored side, the Mission ends in defeat.</p>",
                                                        ES:"En esta Misi&oacute;n, en lugar de la activaci&oacute;n habitual, todos los Enemigos, incluidos los Monstruos Errantes, deben seguir un comportamiento diferente. Realizan 2 acciones. Para cada acci&oacute;n, comprueba las siguientes condiciones. Si se cumple la primera, realiza esa acci&oacute;n. Si no, pasa a la siguiente condici&oacute;n, hasta que se cumpla alguna." + "<ul>" + "<li><b>Si hay {label.barrier@6} entre el Enemigo y el marcador de Objetivo en su lado de color:</b> El Enemigo considera {label.barrier@7} como su objetivo para atacar o moverse. Esto significa que puede atacar {label.barrier@8}, si est&aacute; a su alcance. Si no, se mueve 1 Zona {label.barrier@9} (ignorando a cualquier H&eacute;roe).</li>" + "<li><b>Si hay al menos 1 H&eacute;roe entre el Enemigo y el marcador de Objetivo en su lado de color:</b> El Enemigo considera al H&eacute;roe m&aacute;s cercano como su objetivo para atacar o moverse.</li>" + "<li><b>En cualquier otro caso:</b> El Enemigo se mueve 1 Zona hacia el marcador de Objetivo en su lado de color." + "</ul>" + "<p>Si, al principio de la Fase de los Enemigos, hay un Enemigo en la Zona del marcador de Objetivo en su lado de color, la Misi&oacute;n termina en derrota.</p>"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "towerDefense" ],
                                            gameMode: [ "towerDefense" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "none" ],
                                            bridges:[ "none" ],
                                            corridors: [ "towerDefense" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                {
                                                    tags:[
                                                        [ "spareItem", "collectAllItems" ]
                                                    ]
                                                }
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
                                                    IT:"Sconfiggere il Generale dell'Armata",
                                                    EN:"Defeat the Army General",
                                                    ES:"Derrotar al General del Ej&eacute;rcito",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}",
                                                    ES:"Elimina a {boss.bossBadName@0}"
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