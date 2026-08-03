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
            id:"quests-hellscapewq",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-hellscapewq", "untranslated-fr" ],
            label:{
                EN:"MD2: Hellscape Web Quest inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forActs:[1,2],
                            forMaps:[0,1],
                            type:"collect",
                            objective:{
                                EN:"One Hero is spreading sickness. Deliver the cure item to a zone safely to win.",
                                ES:"Un H&eacute;roe est&aacute; propagando una enfermedad. Lleva el objeto de la cura a una zona sano y salvo para ganar."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"The Cure\"",
                                EN:"Inspired by the Web Quest \"The Cure\"",
                                ES:"Inspirado en la Web Quest \"The Cure\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                asIf:[
                                                    {
                                                        IT:[ "Come se tutto ci&ograve; che ha causato non bastasse," ],
                                                        EN:[ "As if everything it brought was not enough," ],
                                                        ES:[ "Como si todo lo que ha causado no fuera suficiente," ]
                                                    },{
                                                        IT:[ "Dopo aver distrutto la maggior parte dei villaggi circostanti," ],
                                                        EN:[ "After destroying most of the surrounding villages," ],
                                                        ES:[ "Despu&eacute;s de destruir la mayor&iacute;a de las aldeas cercanas," ]
                                                    },{
                                                        IT:[ "La sua sete di distruzione &egrave; implacabile e" ],
                                                        EN:[ "His thirst for destruction is relentless and" ],
                                                        ES:[ "Su sed de destrucci&oacute;n es implacable y" ]
                                                    }
                                                ],
                                                problem:[
                                                    {
                                                        IT:[ "La Maledizione opera in modi misteriosi e nefasti.", "ora la Maledizione sta consumando le persone dall'interno attraverso una nuova malattia", "La Maledizione Nefasta", "dalla", "Piaga della Maledizione", "La Maledizione si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The Curse works in mysterious and nefarious ways.", "now the Curse is consuming people from the inside through a new plague", "The Nefarious Curse", "by the", "Plague of the Curse", "The Curse Spreads", "of the", "Plague" ],
                                                        ES:[ "La Maldici&oacute;n act&uacute;a de formas misteriosas y nefastas.", "ahora la Maldici&oacute;n est&aacute; consumiendo a la gente desde dentro a trav&eacute;s de una nueva plaga", "La Maldici&oacute;n Nefasta", "por la", "Plaga de la Maldici&oacute;n", "La Maldici&oacute;n se Propaga", "de la", "Plaga" ]
                                                    },{
                                                        IT:[ "La Melma Nera sembra essere inarrestabile.", "ora ha diffuso una terribile malattia, in grado di consumare qualsiasi essere vivente pochi giorni", "La Malattia della Melma Nera", "dalla", "Malattia della Melma Nera", "La Malattia si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The Black Slime seems to be unstoppable.", "now it has spread a terrible disease, capable of consuming any living being within a few days", "The Disease of the Black Slime", "by the", "Disease of the Black Slime", "The Disease Spreads", "of the", "Disease"],
                                                        ES:[ "El Limo Negro parece imparable.", "ahora ha propagado una terrible enfermedad, capaz de consumir a cualquier ser vivo en pocos d&iacute;as", "La Enfermedad del Limo Negro", "por la", "Enfermedad del Limo Negro", "La Enfermedad se Propaga", "de la", "Enfermedad" ]
                                                    },{
                                                        IT:[ "Gli alchimisti hanno perso il controllo della terribile Radice Maligna che stavano studiando.", "ora sta portando una malattia mortale nei villaggi e nelle citt&agrave;, capace di consumare ogni essere vivente", "La Malattia Maligna", "dalla", "Malattia Maligna", "La Malattia si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The alchemists have lost control of the terrible Evil Root they were studying.", "it is now bringing a deadly disease to villages and cities, capable of consuming every living being", "The Evil Disease", "by the" , "Malignant Disease", "The Disease Spreads", "of the", "Disease" ],
                                                        ES:[ "Los alquimistas perdieron el control de la terrible Ra&iacute;z Maligna que estaban estudiando.", "ahora est&aacute; llevando una enfermedad mortal a aldeas y ciudades, capaz de consumir a todo ser vivo", "La Enfermedad Maligna", "por la", "Enfermedad Maligna", "La Enfermedad se Propaga", "de la", "Enfermedad" ]
                                                    }
                                                ],
                                                alsoUs:[
                                                    {
                                                        IT:[ "- e gli Eroi non fanno eccezione!" ],
                                                        EN:[ "- and the Heroes are no exception!" ],
                                                        ES:[ "- &iexcl;y los H&eacute;roes no son la excepci&oacute;n!" ]
                                                    },{
                                                        IT:[ "- inclusi gli Eroi!" ],
                                                        EN:[ "- including Heroes!" ],
                                                        ES:[ "- &iexcl;incluidos los H&eacute;roes!" ]
                                                    },{
                                                        IT:[ "- inclusi noi!" ],
                                                        EN:[ "- including us!" ],
                                                        ES:[ "- &iexcl;incluidos nosotros!" ]
                                                    }
                                                ],
                                                however:[
                                                    {
                                                        IT:[ "Tuttavia," ],
                                                        EN:[ "However," ],
                                                        ES:[ "Sin embargo," ]
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto... Si dice in giro che" ],
                                                        EN:[ "But all is not lost... Word on the street is that" ],
                                                        ES:[ "Pero no todo est&aacute; perdido... Se rumorea por ah&iacute; que" ]
                                                    },{
                                                        IT:[ "Ma," ],
                                                        EN:[ "But," ],
                                                        ES:[ "Pero," ]
                                                    }
                                                ],
                                                where:[
                                                    {
                                                        IT:[ "nel profondo di un sotterraneo creduto perduto," ],
                                                        EN:[ "deep down in a believed-to-be-lost dungeon," ],
                                                        ES:[ "en las profundidades de una mazmorra que se cre&iacute;a perdida," ]
                                                    },{
                                                        IT:[ "in un antico tempio," ],
                                                        EN:[ "in an ancient temple," ],
                                                        ES:[ "en un antiguo templo," ]
                                                    },{
                                                        IT:[ "sul luogo di un oscuro rituale," ],
                                                        EN:[ "to the site of a dark ritual," ],
                                                        ES:[ "en el lugar de un ritual oscuro," ]
                                                    }
                                                ],
                                                cure:[
                                                    {
                                                        IT:[ "sembra che uno stregone abbia lasciato una sorta di cura.", "Cura", "la", "nella Zona della Cura", "cura" ],
                                                        EN:[ "a sorcerer seems to have left behind some sort of cure.", "Cure", "the", "in the Cure's Zone", "cure" ],
                                                        ES:[ "parece que un hechicero dej&oacute; atr&aacute;s una especie de cura.", "Cura", "la", "en la Zona de la Cura", "cura" ]
                                                    },{
                                                        IT:[ "sembra che un cultista abbia dimenticato una qualche pozione curativa.", "Pozione", "la", "nella Zona della Pozione", "pozione" ],
                                                        EN:[ "it seems like a cultist forgot some healing potion.", "Potion", "the", "in the Potion's Zone", "potion" ],
                                                        ES:[ "parece que un cultista olvid&oacute; una poci&oacute;n curativa.", "Poci&oacute;n", "la", "en la Zona de la Poci&oacute;n", "poci&oacute;n" ]
                                                    },{
                                                        IT:[ "pare sia stata abbandonata una fiala contenente una cura miracolosa.", "Fiala", "la", "nella Zona della Fiala", "fiala" ],
                                                        EN:[ "it seems a vial containing a miracle cure has been abandoned.", "Vial", "the", "in the Vial's Zone", "vial" ],
                                                        ES:[ "parece que se abandon&oacute; un vial que contiene una cura milagrosa.", "Vial", "el", "en la Zona del Vial", "vial" ]
                                                    }
                                                ],
                                                whatToDo:[
                                                    {
                                                        IT:[ "Il piano sembra semplice:" ],
                                                        EN:[ "The plan seems simple:" ],
                                                        ES:[ "El plan parece sencillo:" ]
                                                    },{
                                                        IT:[ "Non dobbiamo fare altro da fare che" ],
                                                        EN:[ "All we have to do is" ],
                                                        ES:[ "No tenemos que hacer nada m&aacute;s que" ]
                                                    },{
                                                        IT:[ "Il nostro obiettivo &egrave; chiaro:" ],
                                                        EN:[ "Our goal is clear:" ],
                                                        ES:[ "Nuestro objetivo est&aacute; claro:" ]
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "prendere {label.cure@2} {label.cure@4} e scappare!" ],
                                                        EN:[ "grab {label.cure@2} {label.cure@4} and leave!" ],
                                                        ES:[ "coger {label.cure@2} {label.cure@4} y huir!" ]
                                                    },{
                                                        IT:[ "trovare {label.cure@2} {label.cure@4} sopravvivere fino all'uscita!" ],
                                                        EN:[ "find {label.cure@2} {label.cure@4} survive to the exit!" ],
                                                        ES:[ "encontrar {label.cure@2} {label.cure@4} y sobrevivir hasta la salida!" ]
                                                    },{
                                                        IT:[ "raggiungere l'uscita del Dungeon con {label.cure@2} {label.cure@4} in mano e tutti interi!" ],
                                                        EN:[ "reach the exit of the Dungeon with {label.cure@2} {label.cure@4} in hand and in one piece!" ],
                                                        ES:[ "alcanzar la salida de la Mazmorra con {label.cure@2} {label.cure@4} en la mano y de una pieza!" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noInfection:[
                                                    {
                                                        IT:[ "ridurre l'infezione {label.problem@6} {label.problem@7}", "con 1 solo Eroe infettato {label.problem@3} {label.problem@4}" ],
                                                        EN:[ "reduce the infection {label.problem@6} {label.problem@7}", "with just 1 Hero infected {label.problem@3} {label.problem@4}" ],
                                                        ES:[ "reducir la infecci&oacute;n {label.problem@6} {label.problem@7}", "con solo 1 H&eacute;roe infectado {label.problem@3} {label.problem@4}" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cure:capital@2} {label.cure@1}",
                                            ES:"{label.cure:capital@2} {label.cure@1}"
                                        },{
                                            EN:"{label.problem@2}",
                                            ES:"{label.problem@2}"
                                        },{
                                            EN:"{label.problem@5}",
                                            ES:"{label.problem@5}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.problem@0} {label.asIf@0} {label.problem@1} {label.alsoUs@0} {label.however@0} {label.where@0} {label.cure@0} {label.whatToDo@0} {label.plan@0}",
                                            ES:"{label.problem@0} {label.asIf@0} {label.problem@1} {label.alsoUs@0} {label.however@0} {label.where@0} {label.cure@0} {label.whatToDo@0} {label.plan@0}"
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
                                                        IT:"Cercare e Proteggere {label.cure@2} {label.cure@1}",
                                                        EN:"Find and Protect {label.cure@2} {label.cure@1}",
                                                        ES:"Buscar y Proteger {label.cure@2} {label.cure@1}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogli {label.cure@2} {label.cure@1} e non farti mettere KO mentre la trasporti",
                                                        EN:"Pick up {label.cure@2} {label.cure@1} and don't get KO'd while carrying it",
                                                        ES:"Recoge {label.cure@2} {label.cure@1} y no dejes que te dejen KO mientras la llevas"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire",
                                                        EN:"Escape",
                                                        ES:"Huir"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Tutti gli Eroi devono uscire dal Dungeon",
                                                        EN:"All Heroes must exit the Dungeon",
                                                        ES:"Todos los H&eacute;roes deben salir de la Mazmorra"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.problem@2}",
                                                        EN:"{label.problem@2}",
                                                        ES:"{label.problem@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Prima di iniziare la partita, i giocatori scelgono 1 Eroe che verr&agrave; infettato {label.problem@3} {label.problem@4}. Posiziona un segnalino {symbol.corruptionToken} sulla Plancia di quell'Eroe per contrassegnarlo. Gli Eroi Infetti subiscono 1 Ferita all'inizio di ogni loro turno.",
                                                        EN:"Before starting the game, players choose 1 Hero to start infected {label.problem@3} {label.problem@4}. Place a {symbol.corruptionToken} token on that Hero's dashboard to mark this. Infected Heroes take 1 Wound at the start of each of their turns.",
                                                        ES:"Antes de empezar la partida, los jugadores eligen a 1 H&eacute;roe que empezar&aacute; infectado {label.problem@3} {label.problem@4}. Coloca un marcador de {symbol.corruptionToken} en el panel de ese H&eacute;roe para indicarlo. Los H&eacute;roes Infectados sufren 1 Herida al principio de cada uno de sus turnos."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.problem@5}",
                                                        EN:"{label.problem@5}",
                                                        ES:"{label.problem@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Alla fine del turno di qualsiasi Eroe, se c'&egrave; almeno un Eroe infetto che condivide una Zona con Eroi non infetti, anche quegli Eroi non infetti vengono infettati {label.problem@3} {label.problem@4} (posizionare 1 segnalino {symbol.corruptionToken} sulla loro Plancia dell'Eroe per indicarlo), e da ora in poi subiscono anche loro gli effetti {label.problem@6} {label.problem@7}.",
                                                        EN:"At the end of any Hero's turn, if there is at least one infected Hero sharing a Zone with non-infected Heroes, those non-infected Heroes also become infected {label.problem@3} {label.problem@4} (place 1 {symbol.corruptionToken} token on their Hero's Dashboard to mark this), and from now on they suffer the Plague's effects as well.",
                                                        ES:"Al final del turno de cualquier H&eacute;roe, si hay al menos un H&eacute;roe infectado que comparte Zona con H&eacute;roes no infectados, esos H&eacute;roes no infectados tambi&eacute;n quedan infectados {label.problem@3} {label.problem@4} (coloca 1 marcador de {symbol.corruptionToken} en su panel de H&eacute;roe para indicarlo), y a partir de ahora tambi&eacute;n sufren los efectos {label.problem@6} {label.problem@7}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.cure:capital@2} {label.cure@1}...",
                                                        EN:"{label.cure:capital@2} {label.cure@1}...",
                                                        ES:"{label.cure:capital@2} {label.cure@1}..."
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.cure@2} {label.cure@1}. Qualsiasi Eroe che si trova {label.cure@3} pu&ograve; spendere 1 MP per raccoglierla e guadagnare immediatamente 5 PE. {label.cure:capital@2} {label.cure@1} pu&ograve; essere scambiata come un oggetto.",
                                                        EN:"The color-side-up Objective tokens represent {label.cure@2} {label.cure@1}. Any Hero standing {label.cure@3} may spend 1 MP to pick it up and immediately gain 5 XP. {label.cure:capital@2} {label.cure@1} may be traded as an item.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.cure@2} {label.cure@1}. Cualquier H&eacute;roe que se encuentre {label.cure@3} puede gastar 1 PM para recogerla e inmediatamente ganar 5 PE. {label.cure:capital@2} {label.cure@1} puede intercambiarse como un objeto."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.cure@2} {label.cure@1}. Qualsiasi Eroe che si trova {label.cure@3} pu&ograve; spendere 1 MP per raccoglierla. {label.cure:capital@2} {label.cure@1} pu&ograve; essere scambiata come un oggetto.",
                                                        EN:"The color-side-up Objective tokens represent {label.cure@2} {label.cure@1}. Any Hero standing {label.cure@3} may spend 1 MP to pick it up. {label.cure:capital@2} {label.cure@1} may be traded as an item.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.cure@2} {label.cure@1}. Cualquier H&eacute;roe que se encuentre {label.cure@3} puede gastar 1 PM para recogerla. {label.cure:capital@2} {label.cure@1} puede intercambiarse como un objeto."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"...&egrave; Fragile",
                                                        EN:"...is Fragile",
                                                        ES:"...es Fr&aacute;gil"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un Eroe viene messo KO mentre trasporta {label.cure@2} {label.cure@1}, la Missione termina con la sconfitta.",
                                                        EN:"If a Hero is KO'd while carrying {label.cure@2} {label.cure@1}, the Mission ends in defeat.",
                                                        ES:"Si un H&eacute;roe queda KO mientras lleva {label.cure@2} {label.cure@1}, la Misi&oacute;n termina en derrota."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga!",
                                                        EN:"Escape!",
                                                        ES:"&iexcl;Huida!"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che {label.cure@2} {label.cure@1} &egrave; stata raccolta, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo grigio per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"After {label.cure@2} {label.cure@1} has been picked up, any Hero may spend 1 MP in the gray Objective token Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}.",
                                                        ES:"Despu&eacute;s de recoger {label.cure@2} {label.cure@1}, cualquier H&eacute;roe puede gastar 1 PM en la Zona del marcador de Objetivo gris para abandonar la Mazmorra. En cuanto todos los H&eacute;roes hayan abandonado la Mazmorra, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRooms" ],
                                            gameMode: [ "theCure" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "noBridges" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noInfection" ]
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
                                                    IT:"Eliminare {boss.bossBadName@0}, che blocca la fuga degli Eroi",
                                                    EN:"Eliminate {boss.bossBadName@0}, which blocks the Heroes escape",
                                                    ES:"Eliminar a {boss.bossBadName@0}, que bloquea la huida de los H&eacute;roes",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo e {symbol.corruptionToken} dall'inventario degli Eroi. {label.problem:capital@2} non ha pi&ugrave; effetto.</p>",
                                            EN:"<p>Remove all Objective and {symbol.corruptionToken} tokens from the Heroes' inventories. {label.problem:capital@2} has no longer effect.</p>",
                                            ES:"<p>Retira todos los marcadores de Objetivo y {symbol.corruptionToken} del inventario de los H&eacute;roes. {label.problem:capital@2} deja de tener efecto.</p>"
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
                        },
                        {
                            forCampaign:[ ], // Uses specific level mobs
                            type:"grind",
                            objective:{
                                EN:"Eliminate very strong Mob Leaders to win.",
                                ES:"Elimina a L&iacute;deres de Cuadrilla muy fuertes para ganar."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Ruthless Leaders\"",
                                EN:"Inspired by the Web Quest \"Ruthless Leaders\"",
                                ES:"Inspirado en la Web Quest \"Ruthless Leaders\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                cause:[
                                                    {
                                                        IT:[ "Sappiamo che l'Oscurit&agrave;", "Oscura", "Oscuri", "il Signore dell'Oscurit&agrave;" ],
                                                        EN:[ "We know that the Darkness", "Dark", "Dark", "the Lord of the Darkness" ],
                                                        ES:[ "Sabemos que la Oscuridad", "Oscura", "Oscuros", "el Se&ntilde;or de la Oscuridad" ]
                                                    },{
                                                        IT:[ "I Sacerdoti raccontano che l'Antico Monolite", "Arcana", "Arcani", "il Custode del Monolite" ],
                                                        EN:[ "The Priests say that the Ancient Monolith", "Arcane", "Arcane", "the Monolith Keeper" ],
                                                        ES:[ "Los Sacerdotes cuentan que el Antiguo Monolito", "Arcana", "Arcanos", "el Custodio del Monolito" ]
                                                    },{
                                                        IT:[ "Lo abbiamo visto troppe volte. La Piaga Nera", "Corrotta", "Corrotti", "la Genesi della Piaga Nera" ],
                                                        EN:[ "We've seen it too many times. The Black Plague", "Corrupted", "Corrupted", "the Black Plague Genesis" ],
                                                        ES:[ "Lo hemos visto demasiadas veces. La Plaga Negra", "Corrupta", "Corruptos", "la G&eacute;nesis de la Plaga Negra" ]
                                                    }
                                                ],
                                                effect:[
                                                    {
                                                        IT:[ "ha il potere di corrompere e trasformare chiunque tocchi in mostri malvagi." ],
                                                        EN:[ "has the power to corrupt and transform anyone it touches into evil monsters." ],
                                                        ES:[ "tiene el poder de corromper y transformar a cualquiera que toque en monstruos malvados." ]
                                                    },{
                                                        IT:[ "riesce a impadronirsi delle anime, trasformando ogni essere vivente in belve senza senno." ],
                                                        EN:[ "manages to take over souls, transforming every living being into a senseless beast." ],
                                                        ES:[ "logra apoderarse de las almas, transformando a todo ser vivo en una bestia sin juicio." ]
                                                    },{
                                                        IT:[ "si nutre del senno dei viventi, lasciando solo un guscio vuoto." ],
                                                        EN:[ "feeds on the wisdom of the living, leaving only an empty shell." ],
                                                        ES:[ "se alimenta de la cordura de los vivos, dejando solo una c&aacute;scara vac&iacute;a." ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Ma alcune creature sembrano nate malvagie, quindi diventano ancora pi&ugrave; crudeli e brutali.", "Progenie" ],
                                                        EN:[ "But some creatures just seem to be born evil, so they become even more cruel and brutal.", "Spawn" ],
                                                        ES:[ "Pero algunas criaturas simplemente parecen nacer malvadas, as&iacute; que se vuelven a&uacute;n m&aacute;s crueles y brutales.", "Progenie" ]
                                                    },{
                                                        IT:[ "Ma alcune creature ne hanno un piccolo frammento nel cuore, diventando creature spietate.", "Ferita" ],
                                                        EN:[ "But some creatures have a small fragment of it in their hearts, becoming ruthless creatures.", "Wound" ],
                                                        ES:[ "Pero algunas criaturas guardan un peque&ntilde;o fragmento de ella en el coraz&oacute;n, y se convierten en criaturas despiadadas.", "Herida" ]
                                                    },{
                                                        IT:[ "Ma alcune creature riescono a mantenere il controllo di se stessi, diventando freddi e sadici assassini.", "Coscienza" ],
                                                        EN:[ "But some creatures manage to maintain control of themselves, becoming cold and sadistic killers.", "Consciousness" ],
                                                        ES:[ "Pero algunas criaturas logran mantener el control de s&iacute; mismas, convirti&eacute;ndose en asesinos fr&iacute;os y s&aacute;dicos.", "Conciencia" ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "&egrave; qui che si possono trovare questi spietati portatori di morte", "Portatori" ],
                                                        EN:[ "It is here that these ruthless bringers of death can be found,", "Bringers" ],
                                                        ES:[ "Es aqu&iacute; donde se puede encontrar a estos despiadados portadores de la muerte,", "Portadores" ]
                                                    },{
                                                        IT:[ "Qu&igrave; si radunano questi terribili assassini", "Assassini" ],
                                                        EN:[ "Here these terrible murderers gather,", "Murderers" ],
                                                        ES:[ "Aqu&iacute; se re&uacute;nen estos terribles asesinos,", "Asesinos" ]
                                                    },{
                                                        IT:[ "Questo &egrave; il covo di questi orribili criminali", "Criminali" ],
                                                        EN:[ "Here these terrible criminals gather,", "Criminals" ],
                                                        ES:[ "Este es el escondite de estos horribles criminales,", "Criminales" ]
                                                    }
                                                ],
                                                doing:[
                                                    {
                                                        IT:[ "alla guida dei loro servitori." ],
                                                        EN:[ "leading their minions around." ],
                                                        ES:[ "al mando de sus sirvientes." ]
                                                    },{
                                                        IT:[ "seguiti dai loro di sottoposti." ],
                                                        EN:[ "followed by their subordinates." ],
                                                        ES:[ "seguidos de sus subordinados." ]
                                                    },{
                                                        IT:[ "circondati dai loro fedeli gregari." ],
                                                        EN:[ "surrounded by their faithful followers." ],
                                                        ES:[ "rodeados de sus fieles secuaces." ]
                                                    }
                                                ],
                                                evaluate:[
                                                    {
                                                        IT:[ "Saranno pure un po' pi&ugrave; forti," ],
                                                        EN:[ "They might be a bit stronger," ],
                                                        ES:[ "Puede que sean algo m&aacute;s fuertes," ]
                                                    },{
                                                        IT:[ "Possono fare molta paura..." ],
                                                        EN:[ "They can be very scary..." ],
                                                        ES:[ "Pueden dar mucho miedo..." ]
                                                    },{
                                                        IT:[ "Sembrano difficili da eliminare," ],
                                                        EN:[ "They seem difficult to eliminate," ],
                                                        ES:[ "Parecen dif&iacute;ciles de eliminar," ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                come:[
                                                    {
                                                        IT:[ "ma arriveremo preparati ad affrontarli." ],
                                                        EN:[ "but we will come prepared for them." ],
                                                        ES:[ "pero llegaremos preparados para enfrentarnos a ellos." ]
                                                    },{
                                                        IT:[ "ma noi non saremo certo da meno." ],
                                                        EN:[ "but we will certainly not be outdone." ],
                                                        ES:[ "pero desde luego no nos quedaremos atr&aacute;s." ]
                                                    },{
                                                        IT:[ "ma sapremo dare filo da torcere." ],
                                                        EN:[ "but we will be able to give them a hard time." ],
                                                        ES:[ "pero sabremos darles guerra." ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"La {label.but:capital@1} {label.cause:capital@1}",
                                            EN:"The {label.cause:capital@1} {label.but:capital@1}",
                                            ES:"La {label.but@1} {label.cause@1}"
                                        },{
                                            IT:"{label.enemies:capital@1} {label.cause:capital@2}",
                                            EN:"{label.cause:capital@2} {label.enemies:capital@1}",
                                            ES:"{label.cause@2} {label.enemies@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.cause@0} {label.effect@0} {label.but@0} {label.enemies@0} {label.doing@0} {label.evaluate@0} {label.come@0}",
                                            ES:"{label.cause@0} {label.effect@0} {label.but@0} {label.enemies@0} {label.doing@0} {label.evaluate@0} {label.come@0}"
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
                                                        IT:"Sconfiggere i Comandanti",
                                                        EN:"Defeat the Leaders",
                                                        ES:"Derrotar a los L&iacute;deres"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere 2 Comandanti di livello 5",
                                                        EN:"Kill 2 Level 5 Leaders",
                                                        ES:"Matar a 2 L&iacute;deres de nivel 5"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Inizio Rapido",
                                                        EN:"Jumpstart",
                                                        ES:"Inicio R&aacute;pido"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Tutti gli eroi iniziano con 5 PE. Prima del primo round, esegui una Fase di Avanzamento, quindi gli eroi iniziano la prima Fase degli Eroi al livello 2.",
                                                        EN:"All Heroes start with 5 XP. Before the first round, perform a Level Up Phase, so Heroes start the 1st Hero Phase at Level 2.",
                                                        ES:"Todos los H&eacute;roes empiezan con 5 PE. Antes del primer asalto, realiza una Fase de Subida de Nivel, de modo que los H&eacute;roes empiecen la 1&ordf; Fase de los H&eacute;roes en el Nivel 2."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Comandanti Spietati",
                                                        EN:"Ruthless Leaders",
                                                        ES:"L&iacute;deres Despiadados"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I Comandanti di questo Dungeon sono pi&ugrave; brutali del solito. Invece del normale ammontare di Salute, i Comandanti ne hanno il doppio. Inoltre, se possibile, i Comandanti tirano sempre +1 {symbol.blackDie} in difesa e in attacco. Quando un Comandante viene ucciso, ogni Eroe guadagna 4 PE, invece dei soliti 2 PE. "+
                                                            "Una volta uccisi 2 Comandanti di livello 5, {label.questVictory@0}",
                                                        EN:"The Leaders of this Dungeon are more brutal than usual. Instead of their regular Health, Leaders have twice the amount of Health. Also, if possible, Leaders always roll +1 {symbol.blackDie} to defense and attack. When a Leader is killed, each Hero gains 4 XP, instead of the usual 2 XP. "+
                                                            "When 2 Level 5 Leaders have been killed, {label.questVictory@0}",
                                                            ES:"Los L&iacute;deres de esta Mazmorra son m&aacute;s brutales de lo habitual. En lugar de su Vida normal, los L&iacute;deres tienen el doble de Vida. Adem&aacute;s, si es posible, los L&iacute;deres siempre tiran +1 {symbol.blackDie} al defenderse y al atacar. Cuando se mata a un L&iacute;der, cada H&eacute;roe gana 4 PE, en lugar de los 2 PE habituales. " + "Una vez matados 2 L&iacute;deres de nivel 5, {label.questVictory@0}"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming" ],
                                            gameMode: [ "arena" ],
                                            difficulty:[ "hard" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "square" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "noBridges" ],
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {label.cause@3}",
                                                    EN:"Defeat {label.cause@3}",
                                                    ES:"Derrotar a {label.cause@3}",
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[1,2],
                            forMaps:[2],
                            type:"collect",
                            objective:{
                                EN:"Some zones apply element effects to Heroes. Eliminate a strong Roaming Monster to win.",
                                ES:"Algunas zonas aplican efectos elementales a los H&eacute;roes. Elimina a un Monstruo Errante fuerte para ganar."
                            },
                            variants:{
                                EN:"With custom fire/frost variants.",
                                ES:"Con variantes personalizadas de fuego/escarcha."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Into the Flames of Hell\"",
                                EN:"Inspired by the Web Quest \"Into the Flames of Hell\"",
                                ES:"Inspirado en la Web Quest \"Into the Flames of Hell\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                hazard:[
                                                    {
                                                        IT:[
                                                            "fire", "{symbol.fireToken}"," Gli eroi tirano {symbol.orangeDie} invece di {symbol.yellowDie} durante la risoluzione del {symbol.fireToken}.",
                                                            "il Signore Ardente", "La stanza del Signore Ardente", "L'influsso del Signore Ardente",
                                                            "il Dominatore del Fuoco", "La stanza del Dominatore del Fuoco", "Il Dominio del Fuoco",
                                                            "il Demone Fiammeggiante", "La stanza del Demone Fiammeggiante", "L'influsso Fiammeggiante",
                                                            "dalle fiamme", "in fiamme", "le fiamme si allarghino su tutta la capitale", "il fuoco",
                                                            "divorando ogni cosa", "al caldo", "a respirare",
                                                            "di quelle fiamme", "di Fuoco",
                                                            "Braceri", "Bracere", "il Fuoco",
                                                            "va a Fuoco",
                                                            "estinguere", "Estinguere", "estinguendo"
                                                        ],
                                                        EN:[
                                                            "fire", "{symbol.fireToken}", " Heroes roll {symbol.orangeDie} instead of {symbol.yellowDie} when resolving {symbol.fireToken}.",
                                                            "the Fiery Lord", "the Fiery Lord's Chamber", "The Fiery Lord's Presence",
                                                            "the Firebender", "The Firebender's Room", "Firebending",
                                                            "the Flaming Demon", "The Flaming Demon's Room", "The Flaming Influence",
                                                            "by flames", "on fire", "the flames from spreading throughout the capital", "the fire",
                                                            "devouring everything", "to the heat", "breathe",
                                                            "of those scorching flames", "Fire",
                                                            "Braziers", "Brazier", "the Fire",
                                                            "is on Fire",
                                                            "extinguish", "Quench",
                                                            "a", "extinguishing"
                                                        ],
                                                        ES:[ "fuego", "{symbol.fireToken}", " Los H&eacute;roes tiran {symbol.orangeDie} en lugar de {symbol.yellowDie} al resolver {symbol.fireToken}.", "el Se&ntilde;or Ardiente", "la C&aacute;mara del Se&ntilde;or Ardiente", "La Presencia del Se&ntilde;or Ardiente", "el Domador del Fuego", "la Sala del Domador del Fuego", "El Dominio del Fuego", "el Demonio Llameante", "la Sala del Demonio Llameante", "La Influencia Llameante", "por las llamas", "en llamas", "que las llamas se propaguen por toda la capital", "el fuego", "devor&aacute;ndolo todo", "al calor", "respirar", "de esas llamas abrasadoras", "Fuego", "Braseros", "Brasero", "el Fuego", "est&aacute; en Llamas", "extinguir", "Extinguir", "un", "extinguiendo" ]
                                                    },{
                                                        IT:[
                                                            "frost", "{symbol.frostToken}","",
                                                            "il Signore del Gelo", "La stanza del Signore del Gelo", "L'influsso del Signore del Gelo",
                                                            "il Dominatore Gelido", "La stanza del Dominatore Gelido", "Il Dominio del Gelo",
                                                            "il Demone Gelido", "La stanza del Demone Gelido", "L'influsso Gelido",
                                                            "dal gelo", "nella morsa del ghiaccio", "il ghiaccio invada la capitale", "il ghiaccio",
                                                            "immobilizzando ogni cosa", "al gelo", "a muoversi",
                                                            "di quel gelo", "di Ghiaccio",
                                                            "Cumuli di Ghiaccio", "Cumulo di Ghiaccio", "il Ghiaccio",
                                                            "&egrave; Ghiacciato",
                                                            "frantumare", "Frantumare", "frantumando"
                                                        ],
                                                        EN:[
                                                            "frost", "{symbol.frostToken}","",
                                                            "the Frost Lord", "the Frost Lord's Chamber", "The Frost Lord's Presence",
                                                            "the Frostbender", "The Frostbender's room", "Frostbending",
                                                            "the Frost Demon", "The Frost Demon's Room", "The Frosting Influence",
                                                            "by frost", "in the grip of the ice", "the ice invades the capital", "the ice",
                                                            "immobilizing everything", "to the freeze", "to move",
                                                            "of that frost", "Ice",
                                                            "Heaps of Ice", "Heap of Ice", "the Ice",
                                                            "is Frozen",
                                                            "shatter", "Shatter",
                                                            "an", "shattering"
                                                        ],
                                                        ES:[ "escarcha", "{symbol.frostToken}", "", "el Se&ntilde;or de la Escarcha", "la C&aacute;mara del Se&ntilde;or de la Escarcha", "La Presencia del Se&ntilde;or de la Escarcha", "el Domador del Hielo", "la Sala del Domador del Hielo", "El Dominio del Hielo", "el Demonio G&eacute;lido", "la Sala del Demonio G&eacute;lido", "La Influencia G&eacute;lida", "por la escarcha", "atrapado en el hielo", "que el hielo invada la capital", "el hielo", "inmoviliz&aacute;ndolo todo", "al fr&iacute;o intenso", "moverse", "de esa escarcha", "Hielo", "Montones de Hielo", "Mont&oacute;n de Hielo", "el Hielo", "est&aacute; Helada", "destrozar", "Destrozar", "un", "destrozando" ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "Gli angoli pi&ugrave; oscuri dell'Aldil&agrave; sono consumati {label.hazard@12}.", "Per continuare la loro incursione nell'Aldil&agrave;," ],
                                                        EN:[ "The darkest corners of Afterlife are consumed {label.hazard@12}.", "To continue their incursion on Afterlife," ],
                                                        ES:[ "Los rincones m&aacute;s oscuros del M&aacute;s All&aacute; est&aacute;n consumidos {label.hazard@12}.", "Para continuar su incursi&oacute;n en el M&aacute;s All&aacute;," ]
                                                    },{
                                                        IT:[ "Il tempio al centro della citt&agrave; &egrave; {label.hazard@13}.", "Per evitare che {label.hazard@14}," ],
                                                        EN:[ "The temple in the center of the city is {label.hazard@13}.", "To prevent {label.hazard@14}," ],
                                                        ES:[ "El templo en el centro de la ciudad est&aacute; {label.hazard@13}.", "Para evitar que {label.hazard@14}," ]
                                                    },{
                                                        IT:[ "I rintocchi di una campana echeggiano per i corridoi. In un attimo, il dungeon &egrave; invaso {label.hazard@12}.", "Prima che gli Eroi possano fuggire," ],
                                                        EN:[ "The tolling of a bell echoes through the corridors. In an instant, the dungeon is engulfed {label.hazard@12}.", "Before the Heroes can escape," ],
                                                        ES:[ "El ta&ntilde;ido de una campana resuena por los corredores. En un instante, la mazmorra queda envuelta {label.hazard@12}.", "Antes de que los H&eacute;roes puedan huir," ]
                                                    }
                                                ],
                                                flames:[
                                                    {
                                                        IT:[ "{label.hazard:capital@15} corre lungo i corridoi e le pareti." ],
                                                        EN:[ "{label.hazard:capital@15} runs along the corridors and walls." ],
                                                        ES:[ "{label.hazard:capital@15} recorre los corredores y las paredes." ]
                                                    },{
                                                        IT:[ "{label.hazard:capital@15} sembra serpeggiare ovunque, {label.hazard@16}." ],
                                                        EN:[ "{label.hazard:capital@15} seems to snake everywhere, {label.hazard@16}." ],
                                                        ES:[ "{label.hazard:capital@15} parece serpentear por todas partes, {label.hazard@16}." ]
                                                    },{
                                                        IT:[ "{label.hazard:capital@15} sta inghiottendo ogni cosa senza piet&agrave;." ],
                                                        EN:[ "{label.hazard:capital@15} is consuming everything with no mercy." ],
                                                        ES:[ "{label.hazard:capital@15} lo est&aacute; consumiendo todo sin piedad." ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "Le creature dell'Oscurit&agrave; sono abituate {label.hazard@17}," ],
                                                        EN:[ "Creatures from Darkness are used {label.hazard@17}," ],
                                                        ES:[ "Las criaturas de la Oscuridad est&aacute;n acostumbradas {label.hazard@17}," ]
                                                    },{
                                                        IT:[ "Un incantesimo di protezione difende i mostri," ],
                                                        EN:[ "A protection spell defends the monsters," ],
                                                        ES:[ "Un hechizo de protecci&oacute;n defiende a los monstruos," ]
                                                    },{
                                                        IT:[ "I nemici sembrano non subire alcun effetto," ],
                                                        EN:[ "Enemies appear to be unaffected," ],
                                                        ES:[ "Los enemigos parecen no verse afectados," ]
                                                    }
                                                ],
                                                suffer:[
                                                    {
                                                        IT:[ "ma gli Eroi resistono a fatica." ],
                                                        EN:[ "but the Heroes barely resist." ],
                                                        ES:[ "pero los H&eacute;roes apenas resisten." ]
                                                    },{
                                                        IT:[ "ma gli Eroi riescono a malapena {label.hazard@18}." ],
                                                        EN:[ "but the Heroes can barely {label.hazard@18}." ],
                                                        ES:[ "pero los H&eacute;roes apenas logran {label.hazard@18}." ]
                                                    },{
                                                        IT:[ "ma gli Eroi sono invece in gran difficolt&agrave;." ],
                                                        EN:[ "but the Heroes are instead in great difficulty." ],
                                                        ES:[ "pero los H&eacute;roes, en cambio, est&aacute;n en grandes apuros." ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "gli Eroi devono sconfiggere la fonte {label.hazard@19}" ],
                                                        EN:[ "the Heroes must defeat the source {label.hazard@19}" ],
                                                        ES:[ "los H&eacute;roes deben derrotar la fuente {label.hazard@19}" ]
                                                    },{
                                                        IT:[ "gli Eroi devono eliminare il responsabile" ],
                                                        EN:[ "the Heroes must eliminate the person responsible" ],
                                                        ES:[ "los H&eacute;roes deben eliminar al responsable" ]
                                                    },{
                                                        IT:[ "gli Eroi devono affrontare chi ha causato tutto questo" ],
                                                        EN:[ "the Heroes must face who caused all this" ],
                                                        ES:[ "los H&eacute;roes deben enfrentarse a quien ha causado todo esto" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ],
                                                        EN:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ],
                                                        ES:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ]
                                                    },{
                                                        IT:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ],
                                                        EN:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ],
                                                        ES:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ]
                                                    },{
                                                        IT:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ],
                                                        EN:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ],
                                                        ES:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "{label.hazard@21}", "{label.hazard@22}", "i", "il", "tutti i", "un", "quel" ],
                                                        EN:[ "{label.hazard@21}", "{label.hazard@22}", "the", "the", "all", "a", "that" ],
                                                        ES:[ "{label.hazard@21}", "{label.hazard@22}", "los", "el", "todos los", "un", "ese" ]
                                                    },{
                                                        IT:[ "Fontane {label.hazard@20}", "Fontana {label.hazard@20}", "le", "la", "tutte le", "una", "quella" ],
                                                        EN:[ "{label.hazard@20} Fountains", "{label.hazard@20} Fountain", "the", "the", "all", "{label.hazard@27}", "that" ],
                                                        ES:[ "Fuentes de {label.hazard@20}", "Fuente de {label.hazard@20}", "las", "la", "todas las", "una", "esa" ]
                                                    },{
                                                        IT:[ "Pozzi {label.hazard@20}", "Pozzo {label.hazard@20}", "i", "il", "tutti i", "un", "quel" ],
                                                        EN:[ "{label.hazard@20} Pits", "{label.hazard@20} Pit", "the", "the", "all", "{label.hazard@27}", "that" ],
                                                        ES:[ "Pozos de {label.hazard@20}", "Pozo de {label.hazard@20}", "los", "el", "todos los", "un", "ese" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a {label.hazard@25} {label.target@4} {label.target@0}", "{label.hazard@27} {label.collectOptionalItems@3} {label.target@0}", "{tokensCount.objective}" ],
                                                        EN:[ "to {label.hazard@25} {label.target@4} {label.target@2} {label.target@0}", "{label.hazard@28} {label.collectOptionalItems@3} {label.target@0}", "{tokensCount.objective}"],
                                                        ES:[ "a {label.hazard@25} {label.target@4} {label.target@0}", "{label.hazard@28} {label.collectOptionalItems@3} {label.target@0}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.target@2} {label.target@0}",
                                            ES:"{label.target@2} {label.target@0}"
                                        },{
                                            EN:"{label.enemy:capital@0}",
                                            ES:"{label.enemy:capital@0}"
                                        },{
                                            EN:"{label.target:capital@2} {tokensCount.objective} {label.target@0}",
                                            ES:"{label.target:capital@2} {tokensCount.objective} {label.target@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.place@0} {label.flames@0} {label.enemies@0} {label.suffer@0} {label.place@1} {label.objective@0}: {label.enemy@0}.",
                                            ES:"{label.place@0} {label.flames@0} {label.enemies@0} {label.suffer@0} {label.place@1} {label.objective@0}: {label.enemy@0}."
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
                                                        IT:"{label.hazard:capital@25} {label.target@2} {label.target@0}",
                                                        EN:"{label.hazard:capital@25} {label.target@2} {label.target@0}",
                                                        ES:"{label.hazard:capital@25} {label.target@2} {label.target@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.hazard@26} {label.target@4} {label.target@0} nel Dungeon",
                                                        EN:"{label.hazard@26} {label.target@4} {label.target@0} in the Dungeon",
                                                        ES:"{label.hazard@26} {label.target@4} {label.target@0} en la Mazmorra"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"{label.hazard@26} {label.collectOptionalItems@2} {label.target@0} nel Dungeon",
                                                        EN:"{label.hazard@26} {label.collectOptionalItems@2} {label.target@0} in the Dungeon",
                                                        ES:"{label.hazard@26} {label.collectOptionalItems@2} {label.target@0} en la Mazmorra"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemy@0}",
                                                        EN:"Defeat {label.enemy@0}",
                                                        ES:"Derrotar a {label.enemy@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.enemy@0}",
                                                        EN:"Kill {label.enemy@0}",
                                                        ES:"Matar a {label.enemy@0}"
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
                                                        IT:"Evoca un Mostro Errante di livello 5 sul segnalino Corruzione {symbol.corruptionToken} e rimuovi il segnalino. Rimuovi le sue carte dagli altri mazzi dei Mostri Erranti.",
                                                        EN:"Spawn a Level 5 Roaming Monster on the Corruption token {symbol.corruptionToken} and remove the token. Remove its cards on the other Roaming Monster decks.",
                                                        ES:"Genera un Monstruo Errante de nivel 5 sobre el marcador de Corrupci&oacute;n {symbol.corruptionToken} y retira el marcador. Retira sus cartas de los dem&aacute;s mazos de Monstruos Errantes."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Evoca {label.campaignBoss@0} sul segnalino Corruzione {symbol.corruptionToken} e rimuovi il segnalino. Rimuovi le sue carte dagli altri mazzi dei Mostri Erranti.",
                                                        EN:"Spawn {label.campaignBoss@0} on the Corruption token {symbol.corruptionToken} and remove the token. Remove its cards on the other Roaming Monster decks.",
                                                        ES:"Genera {label.campaignBoss@0} sobre el marcador de Corrupci&oacute;n {symbol.corruptionToken} y retira el marcador. Retira sus cartas de los dem&aacute;s mazos de Monstruos Errantes."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy:capital@1}",
                                                        ES:"{label.enemy:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.enemy:capital@0} non si attiva e non pu&ograve; essere bersaglio di alcun attacco, capacit&agrave; o abilit&agrave; e n&eacute; subire Ferite finch&eacute; la sua Camera non viene rivelata. Quando {label.enemy@0} viene sconfitto {label.questVictory@0}.",
                                                        EN:"{label.enemy:capital@0} does not activate and cannot be the target of any attack, skill, or ability, nor take Wounds until its Chamber has been revealed. When {label.enemy@0} is defeated, {label.questVictory@0}.",
                                                        ES:"{label.enemy:capital@0} no se activa y no puede ser objetivo de ning&uacute;n ataque, capacidad o habilidad, ni sufrir Heridas hasta que se revele su C&aacute;mara. Cuando {label.enemy@0} es derrotado, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy@2}",
                                                        ES:"{label.enemy@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I nemici non subiscono {label.hazard@1}. Se un nemico avrebbe dovuto prendere un segnalino {label.hazard@1}, scartalo.{label.hazard@2}",
                                                        EN:"Enemies don't take {label.hazard@1}. If an Enemy would take a {label.hazard@1} token, discard that token instead.{label.hazard@2}",
                                                        ES:"Los enemigos no sufren {label.hazard@1}. Si un enemigo debiera recibir un marcador de {label.hazard@1}, descarta ese marcador en su lugar.{label.hazard@2}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.hazard:capital@25} {label.hazard@23}",
                                                        EN:"{label.hazard:capital@25} {label.hazard@23}",
                                                        ES:"{label.hazard:capital@25} {label.hazard@23}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.target@2} {label.target@0}. Qualsiasi Eroe in una Zona con un segnalino Obiettivo pu&ograve; spendere un'azione per {label.hazard@25} {label.target@6} {label.target@1}, rimuovendo il segnalino dal Dungeon.",
                                                        EN:"Objective tokens represent {label.target@2} {label.target@0}. Any Hero in a Zone with an Objective token can spend one action to {label.hazard@25} {label.target@6} {label.target@1}, removing the token from the Dungeon.",
                                                        ES:"Los marcadores de Objetivo representan {label.target@2} {label.target@0}. Cualquier H&eacute;roe en una Zona con un marcador de Objetivo puede gastar una acci&oacute;n para {label.hazard@25} {label.target@6} {label.target@1}, retirando el marcador de la Mazmorra."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.target@2} {label.target@0}. Qualsiasi Eroe in una Zona con un segnalino Obiettivo pu&ograve; spendere un'azione per {label.hazard@25} {label.target@6} {label.target@1}, rimuovendo il segnalino dal Dungeon e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"Objective tokens represent {label.target@2} {label.target@0}. Any Hero in a Zone with an Objective token can spend one action to {label.hazard@25} {label.target@6} {label.target@1}, removing the token from the Dungeon and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",
                                                        ES:"Los marcadores de Objetivo representan {label.target@2} {label.target@0}. Cualquier H&eacute;roe en una Zona con un marcador de Objetivo puede gastar una acci&oacute;n para {label.hazard@25} {label.target@6} {label.target@1}, retirando el marcador de la Mazmorra, y todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Questo Dungeon {label.hazard@24}",
                                                        EN:"This Dungeon {label.hazard@24}",
                                                        ES:"Esta Mazmorra {label.hazard@24}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che un Eroe entra in una Zona con uno o pi&ugrave; segnalini {label.hazard@1}, rimuovete quei segnalini. Poi quell'Eroe prende un pari numero di segnalini {label.hazard@1}. Se un eroe termina il suo turno nel raggio di {symbol.rangeMagic} da {label.target@5} {label.target@1}, prende 1 {label.hazard@1}.",
                                                        EN:"Whenever a Hero enters a Zone with one or more {label.hazard@1} token, remove that tokens. Then that Hero takes the same amount of {label.hazard@1} tokens. If a Hero ends their turn in {symbol.rangeMagic} range from {label.target@5} {label.target@1}, they take 1 {label.hazard@1}.",
                                                        ES:"Cada vez que un H&eacute;roe entra en una Zona con uno o m&aacute;s marcadores de {label.hazard@1}, retira esos marcadores. Despu&eacute;s, ese H&eacute;roe recibe la misma cantidad de marcadores de {label.hazard@1}. Si un H&eacute;roe termina su turno a {symbol.rangeMagic} de alcance de {label.target@5} {label.target@1}, recibe 1 {label.hazard@1}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom-small" ],
                                            gameMode: [ "elementalLord" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "elemental" ],
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
                                                    IT:"Eliminare {boss.bossBadName@0} e porre fine al suo piano",
                                                    EN:"Eliminate {boss.bossBadName@0} and put an end to its plan",
                                                    ES:"Eliminar a {boss.bossBadName@0} y poner fin a su plan"
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
                        },
                        {
                            _debug:true,
                            forCampaign:[ ], // Uses large maps and one-shot level cap.
                            type:"collect",
                            objective:{
                                EN:"Reach the highest level and eliminate Roaming Monsters to win.",
                                ES:"Alcanza el nivel m&aacute;ximo y elimina a Monstruos Errantes para ganar."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Diabolic Challenge\"",
                                EN:"Inspired by the Web Quest \"Diabolic Challenge\"",
                                ES:"Inspirado en la Web Quest \"Diabolic Challenge\""
                            },
                            suggestedTilesCount:6,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                discover:[
                                                    {
                                                        IT:[ "Dopo aver passato l'intera vita sul campo di battaglia abbiamo finalmente scoperto come porre fine a questa infinita spirale di violenza.", "L'Ultima Spira" ],
                                                        EN:[ "After spending our entire lives on the battlefield we have finally discovered how to put an end to this endless spiral of violence.", "The Last Spire" ],
                                                        ES:[ "Despu&eacute;s de pasar toda la vida en el campo de batalla, por fin hemos descubierto c&oacute;mo poner fin a esta espiral interminable de violencia.", "La &Uacute;ltima Espiral" ],
                                                    },{
                                                        IT:[ "Abbiamo chiuso gli occhi alla verit&agrave; per troppo tempo, per paura di doverla affrontare.", "Aprire gli Occhi" ],
                                                        EN:[ "We have closed our eyes to the truth for too long, for fear of having to face it.", "Opened Eyes" ],
                                                        ES:[ "Hemos cerrado los ojos a la verdad durante demasiado tiempo, por miedo a tener que afrontarla.", "Ojos Abiertos" ],
                                                    },{
                                                        IT:[ "Le parole dell'Oracolo continuavano a rimbalzarci per la testa. Ormai sapevamo la verit&agrave;.", "La Verit&agrave;" ],
                                                        EN:[ "The Oracle's words kept bouncing around our heads. By now we knew the truth.", "The Truth" ],
                                                        ES:[ "Las palabras del Or&aacute;culo segu&iacute;an resonando en nuestras cabezas. Ya conoc&iacute;amos la verdad.", "La Verdad" ],
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[
                                                            "Una dinastia millenaria di generali oscuri e sanguinari trama nell'ombra affinch&eacute; questa guerra non abbia mai fine, inviando senza sosta i loro eserciti nelle nostre citt&agrave; per piegarci al loro volere.",
                                                            "i", "Generali", "Stendardi del Sangue", "che indeboliscono i soldati alleati che combattono nelle citt&agrave;", "lo Stendardo"
                                                        ],
                                                        EN:[
                                                            "A thousand-year-old dynasty of dark and bloodthirsty generals plots in the shadows to ensure this war never ends, relentlessly sending their armies into our cities to bend us to their will.",
                                                            "the", "Generals", "Blood Banners", "which weaken allied soldiers fighting in the cities", "the Banner"
                                                        ],
                                                        ES:[ "Una dinast&iacute;a milenaria de generales oscuros y sanguinarios trama en las sombras para que esta guerra nunca termine, enviando sin descanso a sus ej&eacute;rcitos a nuestras ciudades para doblegarnos a su voluntad.", "los", "Generales", "Estandartes de Sangre", "que debilitan a los soldados aliados que combaten en las ciudades", "el Estandarte" ],
                                                    },{
                                                        IT:[
                                                            "I nostri nemici si erano nascosti in una grotta naturale formatasi proprio vicino il villaggio, dal quale inviavano in un attimo e senza sosta le loro truppe di mostri sanguinari.",
                                                            "gli", "Strateghi", "Mappe dei Tunnel", "usate dai nemici per invadere il villaggio", "la Mappa"
                                                        ],
                                                        EN:[
                                                            "Our enemies were hiding in a natural cave formed right near the village, from which they sent their troops of bloodthirsty monsters in an instant and without stopping.",
                                                            "the", "Strategists", "Tunnel Maps", "used by enemies to invade the village", "the Map"
                                                        ],
                                                        ES:[ "Nuestros enemigos se escond&iacute;an en una cueva natural formada justo cerca de la aldea, desde la cual enviaban sin descanso y en un instante a sus tropas de monstruos sanguinarios.", "los", "Estrategas", "Mapas de los T&uacute;neles", "usados por los enemigos para invadir la aldea", "el Mapa" ],
                                                    },{
                                                        IT:[
                                                            "Alla nascita, siamo stati maledetti dalla setta degli Sciamani a una vita di sangue e metallo. Siamo stati derubati della pace e della felicit&agrave; e la vita ci ha trasformato in inarrestabili macchine da guerra.",
                                                            "i", "Gran Sciamani", "Radici del Male", "che si nutrono dell'ira degli Eroi", "la Radice"
                                                        ],
                                                        EN:[
                                                            "At birth, we were cursed by the Shamans to a life of blood and metal. We have been robbed of peace and happiness and life has turned us into unstoppable war machines.",
                                                            "the", "Great Shamans", "Roots of Evil", "who feed on the wrath of the Heroes", "the Root"
                                                        ],
                                                        ES:[ "Al nacer, fuimos malditos por la secta de los Chamanes a una vida de sangre y metal. Nos han robado la paz y la felicidad, y la vida nos ha convertido en m&aacute;quinas de guerra imparables.", "los", "Grandes Chamanes", "Ra&iacute;ces del Mal", "que se alimentan de la ira de los H&eacute;roes", "la Ra&iacute;z" ],
                                                    }
                                                ],
                                                pray:[
                                                    {
                                                        IT:[ "Possa la Luce proteggerci," ],
                                                        EN:[ "May the Light protect us," ],
                                                        ES:[ "Que la Luz nos proteja," ],
                                                    },{
                                                        IT:[ "Che la Giustizia guidi la nostra mano," ],
                                                        EN:[ "May Justice guide our hands," ],
                                                        ES:[ "Que la Justicia gu&iacute;e nuestra mano," ],
                                                    },{
                                                        IT:[ "Per loro non ci sar&agrave; un nuovo giorno," ],
                                                        EN:[ "For them there will be no new day," ],
                                                        ES:[ "Para ellos no habr&aacute; un nuevo d&iacute;a," ],
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "perch&eacute; oggi porremo fine a tutto questo" ],
                                                        EN:[ "because today we will put an end to all this" ],
                                                        ES:[ "porque hoy pondremos fin a todo esto" ],
                                                    },{
                                                        IT:[ "perch&eacute; oggi risolveremo la questione una volta per tutte" ],
                                                        EN:[ "because today we will resolve the issue once and for all" ],
                                                        ES:[ "porque hoy resolveremos la cuesti&oacute;n de una vez por todas" ],
                                                    },{
                                                        IT:[ "perch&eacute; risolveremo il problema alla radice" ],
                                                        EN:[ "because we will solve the problem at the root" ],
                                                        ES:[ "porque resolveremos el problema de ra&iacute;z" ],
                                                    }
                                                ],
                                                action:[
                                                    {
                                                        IT:[ "cercando i responsabili e distruggendoli!" ],
                                                        EN:[ "seeking the leaders and destroying them!" ],
                                                        ES:[ "&iexcl;buscando a los responsables y destruy&eacute;ndolos!" ],
                                                    },{
                                                        IT:[ "eliminandoli!" ],
                                                        EN:[ "eliminating them!" ],
                                                        ES:[ "&iexcl;elimin&aacute;ndolos!" ],
                                                    },{
                                                        IT:[ "spazzando via chiunque ci sia dietro!" ],
                                                        EN:[ "wiping out whoever is behind it!" ],
                                                        ES:[ "&iexcl;acabando con quien est&eacute; detr&aacute;s de todo esto!" ],
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.event:capital@1} {label.event@2}",
                                            ES:"{label.event:capital@1} {label.event@2}"
                                        },{
                                            EN:"{label.event:capital@3}",
                                            ES:"{label.event:capital@3}"
                                        },{
                                            EN:"{label.discover@1}",
                                            ES:"{label.discover@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.discover@0} {label.event@0} {label.pray@0} {label.plan@0} {label.action@0}",
                                            ES:"{label.discover@0} {label.event@0} {label.pray@0} {label.plan@0} {label.action@0}"
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
                                                        IT:"Sconfiggere {label.event@1} {label.event@2}",
                                                        EN:"Defeat {label.event@1} {label.event@2}",
                                                        ES:"Derrotar a {label.event@1} {label.event@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Eliminare 2 Mostri Erranti di livello 5",
                                                        EN:"Kill 2 Level 5 Roaming Monsters",
                                                        ES:"Matar a 2 Monstruos Errantes de nivel 5"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.event@3}",
                                                        ES:"{label.event@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.event@3} {label.event@4}. Qualsiasi Eroe che si trova nella Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.event@5} (rimuovere il segnalino dal Dungeon), poi ogni Eroe guadagna 5 PE.",
                                                        EN:"Objective tokens represent {label.event@3} {label.event@4}. Any Hero standing in an Objective token's Zone may spend 1 action to destroy {label.event@5} (remove the token from the Dungeon), then each Hero gains 5 XP.",
                                                        ES:"Los marcadores de Objetivo representan {label.event@3} {label.event@4}. Cualquier H&eacute;roe que se encuentre en la Zona de un marcador de Objetivo puede gastar 1 acci&oacute;n para destruir {label.event@5} (retirar el marcador de la Mazmorra); despu&eacute;s, cada H&eacute;roe gana 5 PE."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.event:capital@1} {label.event@2}",
                                                        EN:"{label.event:capital@1} {label.event@2}",
                                                        ES:"{label.event:capital@1} {label.event@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta eliminati i 2 {label.event@2}, {label.questVictory@0}.",
                                                        EN:"When the 2 {label.event@2} are slain, {label.questVictory@0}.",
                                                        ES:"Una vez eliminados los 2 {label.event@2}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "largeMaze" ],
                                            gameMode: [ "largeTargets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "largeMaze" ],
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
                                                    IT:"Elimina il Signore del Labirinto, {boss.bossBadName@0}",
                                                    EN:"Eliminate the Lord of the Maze, {boss.bossBadName@0}",
                                                    ES:"Elimina al Se&ntilde;or del Laberinto, {boss.bossBadName@0}"
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[0,1],
                            forActs:[1,2],
                            type:"collect",
                            objective:{
                                EN:"Collect some items to unlock the exit. Reach the exit zone to win.",
                                ES:"Recoge algunos objetos para desbloquear la salida. Alcanza la zona de salida para ganar."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Hardcore Trial\"",
                                EN:"Inspired by the Web Quest \"Hardcore Trial\"",
                                ES:"Inspirado en la Web Quest \"Hardcore Trial\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                situation:[
                                                    {
                                                        IT: [ "Tutto &egrave; andato in malora." ],
                                                        EN: [ "Everything has gone to hell." ],
                                                        ES:[ "Todo se ha ido al infierno." ]
                                                    },{
                                                        IT: [ "Ecco la nostra solita sfortuna." ],
                                                        EN: [ "That's our usual bad luck." ],
                                                        ES:[ "Esa es nuestra mala suerte de siempre." ]
                                                    },{
                                                        IT: [ "Maledizione!" ],
                                                        EN: [ "Damn!" ],
                                                        ES:[ "&iexcl;Maldici&oacute;n!" ]
                                                    }
                                                ],
                                                encore1:[
                                                    {
                                                        IT:[ "Chi pensava che fosse finita avrebbe fatto meglio a ripensarci." ],
                                                        EN:[ "Anyone who thought it was over had better think again." ],
                                                        ES:[ "Quien pensara que esto hab&iacute;a terminado, mejor que lo piense de nuevo." ]
                                                    },{
                                                        IT:[ "Avremmo dovuto dare retta a quella Veggente!" ],
                                                        EN:[ "We should have listened to that Seer!" ],
                                                        ES:[ "&iexcl;Deber&iacute;amos haber escuchado a esa Vidente!" ]
                                                    },{
                                                        IT:[ "Tutta colpa di quella vecchia Mappa Maledetta!" ],
                                                        EN:[ "It's all the fault of that old Cursed Map!" ],
                                                        ES:[ "&iexcl;Todo es culpa de ese viejo Mapa Maldito!" ]
                                                    }
                                                ],
                                                blocked1:[
                                                    {
                                                        IT:[ "Siamo bloccati qui, nel profondo di questo luogo infernale,", "il domatore delle fiamme" ],
                                                        EN:[ "We're stuck here, deep down in this infernal place,", "the flame tamer" ],
                                                        ES:[ "Estamos atrapados aqu&iacute;, en las profundidades de este lugar infernal,", "el domador de las llamas" ]
                                                    },{
                                                        IT:[ "Ci siamo persi in queste segrete,", "il Signore delle Segrete" ],
                                                        EN:[ "We got lost in these dungeons,", "the Lord of the Dungeons" ],
                                                        ES:[ "Nos hemos perdido en estas mazmorras,", "el Se&ntilde;or de las Mazmorras" ]
                                                    },{
                                                        IT:[ "Eccoci nel freddo e nel buio,", "che riposa nelle tenebre" ],
                                                        EN:[ "Here we are in the cold and in the dark,", "that rests in the darkness" ],
                                                        ES:[ "Aqu&iacute; estamos, en el fr&iacute;o y la oscuridad,", "que descansa en las tinieblas" ]
                                                    }
                                                ],
                                                blocked2:[
                                                    {
                                                        IT:[ "dove la nostra luce brilla a fatica e l'Oscurit&agrave; nasconde le sue bestie pi&ugrave; temibili." ],
                                                        EN:[ "where our light can hardly shine and the Darkness keeps its greatest beasts armed to the teeth." ],
                                                        ES:[ "donde nuestra luz apenas brilla y la Oscuridad esconde a sus bestias m&aacute;s temibles, armadas hasta los dientes." ]
                                                    },{
                                                        IT:[ "pronti per diventare cibo per le bestie che si aggirano per questo labirinto." ],
                                                        EN:[ "ready to become food for the beasts that roam this labyrinth." ],
                                                        ES:[ "listos para convertirnos en alimento de las bestias que vagan por este laberinto." ]
                                                    },{
                                                        IT:[ "a combattere le nostre paure con le poche forze rimaste." ],
                                                        EN:[ "to fight our fears with the little strength left." ],
                                                        ES:[ "para luchar contra nuestros miedos con las pocas fuerzas que nos quedan." ]
                                                    }
                                                ],
                                                encore2:[
                                                    {
                                                        IT:[ "Gi&agrave;... sta per mettersi male quaggi&ugrave;." ],
                                                        EN:[ "Yeah, it's about to get ugly down here." ],
                                                        ES:[ "S&iacute;... esto est&aacute; a punto de ponerse feo aqu&iacute; abajo." ]
                                                    },{
                                                        IT:[ "Non eravamo pronti ad affrontare tutto questo..." ],
                                                        EN:[ "We weren't ready to face all this..." ],
                                                        ES:[ "No est&aacute;bamos preparados para afrontar todo esto..." ]
                                                    },{
                                                        IT:[ "Ma non c'&egrave; tempo per rimuginare." ],
                                                        EN:[ "But there's no time to brood." ],
                                                        ES:[ "Pero no hay tiempo para lamentaciones." ]
                                                    }
                                                ],
                                                better:[
                                                    {
                                                        IT:[ "Sar&agrave; meglio {label.passage@0} {label.passage@1} {label.passage@2} che abbiamo trovato... e in fretta!" ],
                                                        EN:[ "We'd better {label.passage@0} {label.passage@1} {label.passage@2} we've found... and fast!" ],
                                                        ES:[ "Mejor ser&aacute; que {label.passage@0} {label.passage@1} {label.passage@2} que hemos encontrado... &iexcl;y r&aacute;pido!" ]
                                                    },{
                                                        IT:[ "Dobbiamo sbrigarci a {label.passage@0} {label.passage@1} {label.passage@2}!" ],
                                                        EN:[ "We have to hurry to {label.passage@0} {label.passage@1} {label.passage@2}!" ],
                                                        ES:[ "&iexcl;Tenemos que darnos prisa en {label.passage@0} {label.passage@1} {label.passage@2}!" ]
                                                    },{
                                                        IT:[ "Possiamo solo provare a {label.passage@0} {label.passage@1} {label.passage@2}... Non c'&egrave; tempo da perdere!" ],
                                                        EN:[ "We can only try to {label.passage@0} {label.passage@1} {label.passage@2}... There is no time to lose!" ],
                                                        ES:[ "Solo podemos intentar {label.passage@0} {label.passage@1} {label.passage@2}... &iexcl;No hay tiempo que perder!" ]
                                                    }
                                                ],
                                                passage:[
                                                    {
                                                        IT:[ "sbloccare", "quel", "passaggio segreto", "Passaggio Segreto", "il", "un", "nella Zona del Passaggio Segreto", "&egrave; bloccato", "attraverso di esso", "Per aprirlo", "&egrave; aperto", "aprire", "situato" ],
                                                        EN:[ "unlock", "that", "secret passage", "Secret Passage", "the", "a", "in the Secret Passage Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ],
                                                        ES:[ "desbloquear", "ese", "pasadizo secreto", "Pasadizo Secreto", "el", "un", "en la Zona del Pasadizo Secreto", "est&aacute; bloqueado", "a trav&eacute;s de &eacute;l", "Para abrirlo", "est&aacute; abierto", "abrir", "situado" ]
                                                    },{
                                                        IT:[ "sbloccare", "quella", "botola nascosta", "Botola Nascosta", "la", "una", "nella Zona della Botola Nascosta", "&egrave; bloccata", "attraverso di essa", "Per aprirla", "&egrave; aperta", "aprire", "situata" ],
                                                        EN:[ "unlock", "that", "hidden trap door", "Hidden Trap Door", "the", "a", "in the Hidden Trap Door Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ],
                                                        ES:[ "desbloquear", "esa", "trampilla oculta", "Trampilla Oculta", "la", "una", "en la Zona de la Trampilla Oculta", "est&aacute; bloqueada", "a trav&eacute;s de ella", "Para abrirla", "est&aacute; abierta", "abrir", "situada" ]
                                                    },{
                                                        IT:[ "sbloccare", "quel", "passaggio per le fogne", "Passaggio per le Fogne", "il", "un", "nella Zona del Passaggio per le Fogne", "&egrave; bloccato", "attraverso di esso", "Per aprirlo", "&egrave; aperto", "aprire", "situato" ],
                                                        EN:[ "unlock", "that", "passage through the sewers", "Passage through the Sewers", "the", "a", "in the Passage through the Sewers Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ],
                                                        ES:[ "desbloquear", "ese", "pasadizo por las alcantarillas", "Pasadizo por las Alcantarillas", "el", "un", "en la Zona del Pasadizo por las Alcantarillas", "est&aacute; bloqueado", "a trav&eacute;s de &eacute;l", "Para abrirlo", "est&aacute; abierto", "abrir", "situado" ]
                                                    }
                                                ],
                                                door:[
                                                    {
                                                        IT:[ "Porta di Pietra", "Porte di Pietra", "la", "le", "vengono sbloccate", "sono bloccate", "e possono essere aperte", "sbloccare" ],
                                                        EN:[ "Stone Door", "Stone Doors", "the", "the", "get unlocked", "are locked", "and may be opened", "unlock" ],
                                                        ES:[ "Puerta de Piedra", "Puertas de Piedra", "la", "las", "se desbloquean", "est&aacute;n bloqueadas", "y pueden abrirse", "desbloquear" ]
                                                    },{
                                                        IT:[ "Muro di Fuoco", "Muri di Fuoco", "il", "i", "vengono disattivati", "non possono essere attraversate", "diventando porte che possono essere aperte", "disattivare" ],
                                                        EN:[ "Fire Wall", "Fire Walls", "the", "the", "get deactivated", "can't be passed", "become doors that can be opened", "deactivate" ],
                                                        ES:[ "Muro de Fuego", "Muros de Fuego", "el", "los", "se desactivan", "no pueden atravesarse", "convirti&eacute;ndose en puertas que pueden abrirse", "desactivar" ]
                                                    },{
                                                        IT:[ "Sbarre di Metallo", "Sbarre di Metallo", "le", "le", "vengono abbassate", "non possono essere attraversate", "diventando porte che possono essere aperte", "disattivare" ],
                                                        EN:[ "Metal Bars", "Metal Bars", "the", "the", "are lowered", "can't be passed", "become doors that can be opened", "deactivate" ],
                                                        ES:[ "Barras de Metal", "Barras de Metal", "las", "las", "se bajan", "no pueden atravesarse", "convirti&eacute;ndose en puertas que pueden abrirse", "desactivar" ]
                                                    }
                                                ],
                                                key:[
                                                    {
                                                        IT:[ "Chiave di Pietra", "Chiavi di Pietra", "la", "le", "in una zona con una Chiave di Pietra", "di una", "per usarla", "per raccoglierla", "tutte" ],
                                                        EN:[ "Keystone", "Keystones", "the", "the", "in a Zone with a Keystone", "a", "to use it", "", "all" ],
                                                        ES:[ "Piedra Angular", "Piedras Angulares", "la", "las", "en una Zona con una Piedra Angular", "de una", "para usarla", "", "todas" ]
                                                    },{
                                                        IT:[ "Gemma Cromata", "Gemme Cromate", "la", "le", "in una zona con una Gemma Cromata", "di una", "per usarla", "per raccoglierla", "tutte" ],
                                                        EN:[ "Chrome Gem", "Chrome Gems", "the", "the", "in a Zone with a Chrome Gem", "a", "to use it", "", "all" ],
                                                        ES:[ "Gema Cromada", "Gemas Cromadas", "la", "las", "en una Zona con una Gema Cromada", "de una", "para usarla", "", "todas" ]
                                                    },{
                                                        IT:[ "Pezzo del Puzzle", "Pezzi del Puzzle", "il", "i", "in una zona con un Pezzo del Puzzle", "di un", "per usarlo", "per raccoglierlo", "tutti" ],
                                                        EN:[ "Puzzle Piece", "Puzzle Pieces", "the", "the", "in a Zone with a Puzzle Piece", "a", "to use it", "", "all" ],
                                                        ES:[ "Pieza del Rompecabezas", "Piezas del Rompecabezas", "la", "las", "en una Zona con una Pieza del Rompecabezas", "de una", "para usarla", "", "todas" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccoggliere {label.key@8} {label.key@3} {label.key@1}", "raccogliendo {label.collectOptionalItems@3} {label.key@1}", "{tokensCount.objective}" ],
                                                        EN:[ "to collect {label.key@8} {label.key@3} {label.key@1}", "collecting {label.collectOptionalItems@3} {label.key@1}", "{tokensCount.objective}"],
                                                        ES:[ "a recoger {label.key@8} {label.key@3} {label.key@1}", "recogiendo {label.collectOptionalItems@3} {label.key@1}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.key:capital@3} {label.key:capital@1}",
                                            ES:"{label.key:capital@3} {label.key:capital@1}"
                                        },{
                                            EN:"{label.passage:capital@1} {label.passage@3}",
                                            ES:"{label.passage:capital@1} {label.passage@3}"
                                        },{
                                            EN:"{label.door:capital@3} {label.door@1}",
                                            ES:"{label.door:capital@3} {label.door@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.situation@0} {label.encore1@0} {label.blocked1@0} {label.blocked2@0} {label.encore2@0} {label.better@0}",
                                            ES:"{label.situation@0} {label.encore1@0} {label.blocked1@0} {label.blocked2@0} {label.encore2@0} {label.better@0}"
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
                                                        IT:"{label.door:capital@7} {label.door@3} {label.door@1}",
                                                        EN:"{label.door:capital@7} {label.door@3} {label.door@1}",
                                                        ES:"{label.door:capital@7} {label.door@3} {label.door@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Rivelare tutte le Camere nella tessera iniziale ({tileLabel.first})",
                                                        EN:"Reveal all Chambers in the starting Tile ({tileLabel.first})",
                                                        ES:"Revelar todas las C&aacute;maras de la Loseta inicial ({tileLabel.first})"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Collezionare {label.key@3} {label.key@1}",
                                                        EN:"Collect {label.key@3} {label.key@1}",
                                                        ES:"Coleccionar {label.key@3} {label.key@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.key@3} {label.key@1}",
                                                        EN:"Pick up {label.key@3} {label.key@1}",
                                                        ES:"Recoger {label.key@3} {label.key@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                        EN:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                        ES:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.key@3} {label.key@1} nei luoghi indicati",
                                                        EN:"Use {label.key@3} {label.key@1} in the indicated locations",
                                                        ES:"Usar {label.key@3} {label.key@1} en los lugares indicados"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire",
                                                        EN:"Escape",
                                                        ES:"Huir"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Scappare attraverso {label.passage@4} {label.passage@3}",
                                                        EN:"Escape through {label.passage@4} {label.passage@3}",
                                                        ES:"Escapar a trav&eacute;s {label.passage@4} {label.passage@3}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Rinforzi dell'Oscurit&agrave;",
                                                        EN:"Reinforcements of Darkness",
                                                        ES:"Refuerzos de la Oscuridad"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni segnalino Corruzione {symbol.corruptionToken} rappresenta una Zona di generazione dei Mostri Erranti e non &egrave; influenzato dalle carte Porta. Quando la sua Camera viene rivelata, oltre alla generazione regolare, generare un Mostro Errante nella Zona dei segnalini Corruzione, quindi scartare il segnalino.",
                                                        EN:"Each Corruption token {symbol.corruptionToken} represents a Roaming Monster spawn Zone and is not affected by Door cards. When its Chamber is revealed, in addition to the regular spawn, spawn a Roaming Monster in the Corruption token Zone, then discard the token.",
                                                        ES:"Cada marcador de Corrupci&oacute;n {symbol.corruptionToken} representa una Zona de generaci&oacute;n de Monstruos Errantes y no se ve afectado por las cartas de Puerta. Cuando se revela su C&aacute;mara, adem&aacute;s de la generaci&oacute;n habitual, genera un Monstruo Errante en la Zona del marcador de Corrupci&oacute;n y descarta el marcador."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.door:capital@3} {label.door@1}",
                                                        ES:"{label.door:capital@3} {label.door@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le porte contrassegnate da un contorno rosso rappresentano {label.door@3} {label.door@1}. Queste porte {label.door@5}. Non appena tutte le Camere con almeno 1 Zona nella Tessera iniziale ({tileLabel.first}) sono state rivelate, {label.door@3} {label.door@1} {label.door@4} {label.door@6} come solito.",
                                                        EN:"The doors marked with a red outline represent {label.door@3} {label.door@1}. These doors {label.door@5}. As soon as all Chambers with at least 1 Zone in the starting Tile ({tileLabel.first}) have been revealed, {label.door@3} {label.door@1} {label.door@4} and {label.door@6} as usual.",
                                                        ES:"Las puertas marcadas con un contorno rojo representan {label.door@3} {label.door@1}. Estas puertas {label.door@5}. En cuanto se hayan revelado todas las C&aacute;maras con al menos 1 Zona en la Loseta inicial ({tileLabel.first}), {label.door@3} {label.door@1} {label.door@4} y {label.door@6} con normalidad."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.key:capital@3} {label.key@1}",
                                                        ES:"{label.key:capital@3} {label.key@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.key@3} {label.key@1}. Qualsiasi Eroe che si trova {label.key@4} pu&ograve; spendere 1 PM {label.key@7}.",
                                                        EN:"The color-side-up Objective tokens represent {label.key@3} {label.key@1}. Any Hero standing {label.key@4} may spend 1 MP to pick it up.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.key@3} {label.key@1}. Cualquier H&eacute;roe que se encuentre {label.key@4} puede gastar 1 PM para recogerlo."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.key@3} {label.key@1}. Qualsiasi Eroe che si trova {label.key@4} pu&ograve; spendere 1 PM {label.key@7} e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"The color-side-up Objective tokens represent {label.key@3} {label.key@1}. Any Hero standing {label.key@4} may spend 1 MP to pick it up and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.key@3} {label.key@1}. Cualquier H&eacute;roe que se encuentre {label.key@4} puede gastar 1 PM para recogerlo, y todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.passage:capital@4} {label.passage@3}",
                                                        ES:"{label.passage:capital@4} {label.passage@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"C'&egrave; {label.passage@5} {label.passage@3} che conduce fuori da questo Dungeon, {label.passage@12} nella Zona con il segnalino Tempo {symbol.timeToken} in una Camera della Tessera iniziale ({tileLabel.first}), ma {label.passage@7}. {label.passage@9}, gli Eroi devono usare {label.key@3} {label.key@1} nei posti corretti, indicate dai segnalini Obiettivo grigi. Per farlo, un qualsiasi Eroe in possesso {label.key@5} {label.key@0} e che si trova in una zona con un segnalino obiettivo grigio, pu&ograve; spendere 1 PM {label.key@6} (scartare sia il segnalino Obiettivo sul lato grigio che quello sul lato colorato). Non appena i {tokensCount.objective} segnalini Obiettivo grigi sono stati rimossi, {label.passage@4} {label.passage@3} {label.passage@10}.",
                                                        EN:"There is {label.passage@5} {label.passage@3} that leads out of this Dungeon, {label.passage@12} in the Zone with the Time token {symbol.timeToken} of a Chamber of the starting Tile ({tileLabel.first}), but {label.passage@7}. {label.passage@9}, the Heroes must use {label.key@3} {label.key@1} in the correct locations, indicated by the gray Objective tokens. To do so, any Hero holding {label.key@5} {label.key@0} and standing in a gray Objective token Zone may spend 1 MP {label.key@6} (discard both gray and color-side-up Objective tokens). As soon as all {tokensCount.objective} gray Objective tokens have been removed, {label.passage@4} {label.passage@3} {label.passage@10}.",
                                                        ES:"Hay {label.passage@5} {label.passage@3} que conduce fuera de esta Mazmorra, {label.passage@12} en la Zona con el marcador de Tiempo {symbol.timeToken} de una C&aacute;mara de la Loseta inicial ({tileLabel.first}), pero {label.passage@7}. {label.passage@9}, los H&eacute;roes deben usar {label.key@3} {label.key@1} en los lugares correctos, indicados por los marcadores de Objetivo grises. Para ello, cualquier H&eacute;roe en posesi&oacute;n {label.key@5} {label.key@0} que se encuentre en una Zona con un marcador de Objetivo gris puede gastar 1 PM {label.key@6} (descartar tanto el marcador de Objetivo gris como el de color). En cuanto se hayan retirado los {tokensCount.objective} marcadores de Objetivo grises, {label.passage@4} {label.passage@3} {label.passage@10}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"Escape",
                                                        ES:"La Huida"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta che {label.passage@4} {label.passage@3} {label.passage@10}, qualsiasi Eroe che si trova {label.passage@6} pu&ograve; fuggire {label.passage@8} spendendo 1 PM. Una volta che tutti gli Eroi sono fuggiti, {label.questVictory@0}.",
                                                        EN:"Once {label.passage@4} {label.passage@3} {label.passage@10}, any Hero standing {label.passage@6} may escape {label.passage@8} by spending 1 MP. Once all Heroes have escaped, {label.questVictory@0}.",
                                                        ES:"Una vez que {label.passage@4} {label.passage@3} {label.passage@10}, cualquier H&eacute;roe que se encuentre {label.passage@6} puede huir {label.passage@8} gastando 1 PM. Una vez que todos los H&eacute;roes hayan huido, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "unlockAndEscape" ],
                                            gameMode: [ "unlockAndEscape" ],
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
                                                    IT:"Elimina {boss.bossBadName@0}, {label.blocked1@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.blocked1@1}",
                                                    ES:"Elimina a {boss.bossBadName@0}, {label.blocked1@1}"
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[1],
                            type:"defuse",
                            objective:{
                                EN:"Unlock the exit and reach it to win.",
                                ES:"Desbloquea la salida y llega hasta ella para ganar."
                            },
                            variants:{
                                EN:"With custom fire/frost variants.",
                                ES:"Con variantes personalizadas de fuego/escarcha."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Glacial Inferno\"",
                                EN:"Inspired by the Web Quest \"Glacial Inferno\"",
                                ES:"Inspirado en la Web Quest \"Glacial Inferno\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                hazard:[
                                                    {
                                                        IT:[ "frost", "{symbol.frostToken}", "di ghiaccio...", "ghiacciato", "glaciale", "Trappole di Ghiaccio", "incubo ghiacciato", "Corruzione del Gelo", "scongelare", "ghiacciati", "rompere il ghiaccio", "ghiacciate", "glaciali" ],
                                                        EN:[ "frost", "{symbol.frostToken}", "of ice...", "frozen", "glacial", "Ice Traps", "frost nightmare", "Ice Corruption", "unfreeze", "frozen", "break the ice", "frozen", "glacial" ],
                                                        ES:[ "escarcha", "{symbol.frostToken}", "de hielo...", "helado", "glacial", "Trampas de Hielo", "pesadilla helada", "Corrupci&oacute;n de la Escarcha", "descongelar", "helados", "romper el hielo", "heladas", "glaciales" ]
                                                    },{
                                                        IT:[ "fire", "{symbol.fireToken}", "di fuoco...", "ardente", "fiammeggiante", "Trappole di Fuoco" , "incubo fiammeggiante", "Corruzione del Fuoco", "estinguere", "ardenti", "estinguere il fuoco", "ardenti", "fiammeggianti" ],
                                                        EN:[ "fire", "{symbol.fireToken}", "of fire...", "burning", "flaming", "Fire Traps" , "burning nightmare", "Fire Corruption", "extinguish", "burning", "extinguish the fire", "burning", "flaming" ],
                                                        ES:[ "fuego", "{symbol.fireToken}", "de fuego...", "ardiente", "llameante", "Trampas de Fuego", "pesadilla ardiente", "Corrupci&oacute;n del Fuego", "extinguir", "ardientes", "extinguir el fuego", "ardientes", "llameantes" ]
                                                    }
                                                ],
                                                time:[
                                                    {
                                                        IT:[ "Ora che l'Oscurit&agrave; &egrave; stata contenuta e sconfitta,"],
                                                        EN:[ "With Darkness contained and defeated," ],
                                                        ES:[ "Con la Oscuridad contenida y derrotada," ]
                                                    },{
                                                        IT:[ "La missione &egrave; compiuta e"],
                                                        EN:[ "The mission is accomplished and" ],
                                                        ES:[ "La misi&oacute;n est&aacute; cumplida y" ]
                                                    },{
                                                        IT:[ "Tutto &egrave; andato a rotoli e"],
                                                        EN:[ "Everything is gone to pieces and" ],
                                                        ES:[ "Todo se ha hecho pedazos y" ]
                                                    }
                                                ],
                                                placeLeave:[
                                                    {
                                                        IT:[ "gli Eroi devono abbandonare l'Inferno", "Inferno", "Inferno", "dall'Inferno", "dell'Inferno" ],
                                                        EN:[ "the Heroes now must leave Hell", "Hell", "Inferno", "the Hell", "of the Hell" ],
                                                        ES:[ "los H&eacute;roes deben abandonar el Infierno", "Infierno", "Averno", "el Infierno", "del Infierno" ]
                                                    },{
                                                        IT:[ "gli Eroi devono fuggire dal Labirinto", "Labirinto", "Dedalo", "dal Labirinto", "del Labirinto" ],
                                                        EN:[ "the Heroes must escape from the Maze", "Maze", "Labyrinth", "the Labyrinth", "of the Labyrinth" ],
                                                        ES:[ "los H&eacute;roes deben huir del Laberinto", "Laberinto", "D&eacute;dalo", "el Laberinto", "del Laberinto" ]
                                                    },{
                                                        IT:[ "gli Eroi devono svignarsela dal Tempio", "Tempio", "Cattetrale", "dal Tempio", "del Tempio" ],
                                                        EN:[ "the Heroes must escape from the Temple", "Temple", "Cathedral", "the Temple", "of the Temple" ],
                                                        ES:[ "los H&eacute;roes deben escabullirse del Templo", "Templo", "Catedral", "el Templo", "del Templo" ]
                                                    }
                                                ],
                                                placeThrough:[
                                                    {
                                                        IT:[ "attraverso un angolo dimenticato e {label.hazard@4} di questo posto." ],
                                                        EN:[ "through a forgotten and {label.hazard@3} corner of this place." ],
                                                        ES:[ "a trav&eacute;s de un rinc&oacute;n olvidado y {label.hazard@3} de este lugar." ]
                                                    },{
                                                        IT:[ "attraversando i suoi corridoi, ora {label.hazard@9}." ],
                                                        EN:[ "crossing its corridors, now {label.hazard@9}." ],
                                                        ES:[ "cruzando sus corredores, ahora {label.hazard@9}." ]
                                                    },{
                                                        IT:[ "superando le sue {label.hazard@5}." ],
                                                        EN:[ "surpassing its {label.hazard@5}." ],
                                                        ES:[ "superando sus {label.hazard@5}." ]
                                                    }
                                                ],
                                                exitPlace:[
                                                    {
                                                        IT:[ "L'uscita si nasconde dietro" ],
                                                        EN:[ "The exit lies behind" ],
                                                        ES:[ "La salida se esconde tras" ]
                                                    },{
                                                        IT:[ "Tra gli Eroi e la libert&agrave; si ergono" ],
                                                        EN:[ "Between the Heroes and freedom stands" ],
                                                        ES:[ "Entre los H&eacute;roes y la libertad se alzan" ]
                                                    },{
                                                        IT:[ "Ad attenderli ci sono" ],
                                                        EN:[ "Waiting for them, there are" ],
                                                        ES:[ "Esper&aacute;ndolos, hay" ]
                                                    }
                                                ],
                                                exitAppearance:[
                                                    {
                                                        IT:[ "decine e decine di strati" ],
                                                        EN:[ "dozen of layers" ],
                                                        ES:[ "decenas y decenas de capas" ]
                                                    },{
                                                        IT:[ "muri invalicabili" ],
                                                        EN:[ "impassable walls" ],
                                                        ES:[ "muros infranqueables" ]
                                                    },{
                                                        IT:[ "imponenti colonne" ],
                                                        EN:[ "imposing columns" ],
                                                        ES:[ "imponentes columnas" ]
                                                    }
                                                ],
                                                holes:[
                                                    {
                                                        IT:[ "i Geyser", "geyser", "il Geyser", "un Geyser", "i", "{label.hazard@9}", "riattivato" ],
                                                        EN:[ "the Geysers", "geysers", "the Geyser", "a Geyser" ],
                                                        ES:[ "los G&eacute;iseres", "g&eacute;iseres", "el G&eacute;iser", "un G&eacute;iser", "los", "{label.hazard@9}", "reactivado" ]
                                                    },{
                                                        IT:[ "gli Interruttori", "interruttori", "l'Interruttore", "un Interruttore", "i", "{label.hazard@9}", "riattivato" ],
                                                        EN:[ "the Switches", "switches", "the Switch", "a Switch" ],
                                                        ES:[ "los Interruptores", "interruptores", "el Interruptor", "un Interruptor", "los", "{label.hazard@9}", "reactivado" ]
                                                    },{
                                                        IT:[ "le Leve", "leve", "la Leva", "una Leva", "le", "{label.hazard@11}", "riattivata" ],
                                                        EN:[ "the Lever", "levers", "the Lever", "a Lever" ],
                                                        ES:[ "las Palancas", "palancas", "la Palanca", "una Palanca", "las", "{label.hazard@11}", "reactivada" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noTraps:[
                                                    {
                                                        IT:[ "eliminare tutte le {label.hazard@5}", "rimuovendo tutte le Trappole con Spuntoni" ],
                                                        EN:[ "clear all the {label.hazard@5}", "removing all the Spike Traps" ],
                                                        ES:[ "despejar todas las {label.hazard@5}", "retirando todas las Trampas de P&uacute;as" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"{label.placeLeave@2} {label.hazard@4}",
                                            EN:"{label.hazard@4} {label.placeLeave@2}",
                                            ES:"{label.placeLeave@2} {label.hazard@4}"
                                        },{
                                            IT:"{label.holes:capital@0} {label.holes:capital@5}",
                                            EN:"{label.hazard@9} {label.holes:capital@1}",
                                            ES:"{label.holes:capital@0} {label.hazard@9}"
                                        },{
                                            IT:"Fuga {label.placeLeave:capital@3}",
                                            EN:"Escape From {label.placeLeave:capital@3}",
                                            ES:"Huida {label.placeLeave@4}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.time@0} {label.placeLeave@0} {label.placeThrough@0} {label.exitPlace@0} {label.exitAppearance@0} {label.hazard@2}",
                                            ES:"{label.time@0} {label.placeLeave@0} {label.placeThrough@0} {label.exitPlace@0} {label.exitAppearance@0} {label.hazard@2}"
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
                                                        EN:"{label.hazard:capital@8} {label.holes@0}",
                                                        ES:"{label.hazard:capital@8} {label.holes@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Riattivare {label.holes@4} {tokensCount.objective} {label.holes:capital@1} {label.holes:capital@5}",
                                                        EN:"Activate the {tokensCount.objective} {label.hazard:capital@9} {label.holes:capital@1}",
                                                        ES:"Activar los {tokensCount.objective} {label.holes@1} {label.hazard@9}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire {label.placeLeave@3} {label.hazard:capital@3}",
                                                        EN:"Escape the {label.hazard:capital@3} {label.placeLeave@1}",
                                                        ES:"Escapar {label.placeLeave@4} {label.hazard@4}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Fuggire con tutti gli Eroi",
                                                        EN:"Escape with all Heroes",
                                                        ES:"Escapar con todos los H&eacute;roes"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.hazard@5}",
                                                        ES:"{label.hazard@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, posiziona 1 segnalino {label.hazard@1} su ciascuna Trappola con Spuntoni nel Dungeon. Oltre all'effetto della Trappola con Spuntoni, l'Eroe che l'ha attivata prende il segnalino {label.hazard@1} (anche non ha subito alcuna ferita).",
                                                        EN:"During Setup, place 1 {label.hazard@1} token on each Spike Trap in the Dungeon. In addition to the Spike Trap effect, the Hero who activated it takes the {label.hazard@1} token (even if they took no Wounds).",
                                                        ES:"Durante la preparaci&oacute;n, coloca 1 marcador de {label.hazard@1} en cada Trampa de P&uacute;as de la Mazmorra. Adem&aacute;s del efecto de la Trampa de P&uacute;as, el H&eacute;roe que la activ&oacute; recibe el marcador de {label.hazard@1} (incluso si no sufri&oacute; ninguna Herida)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.holes:capital@1} {label.holes:capital@5}",
                                                        EN:"{label.hazard:capital@11} {label.holes:capital@1}",
                                                        ES:"{label.holes:capital@1} {label.hazard@9}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato verso l'alto rappresentano {label.holes@3} {label.hazard:capital@3}. Qualsiasi Eroe che si trova in una Zona con questi segnalini Obiettivo pu&ograve; spendere 1 azione per {label.hazard@10} e riattivare {label.holes@2}. Quando {label.holes@3} viene {label.holes@6}, rimuovi il segnalino dal Dungeon e ogni Eroe guadagna 5 PE.",
                                                        EN:"The color-side-up Objective tokens represent {label.hazard:capital@3} {label.holes:capital@1}. Any Hero standing in a Zone with these Objective tokens may spend 1 action to {label.hazard@10} and awake {label.holes@2}. When {label.holes@3} is awakened, remove the token from the Dungeon and each Hero gains 5 XP.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.holes@1} {label.hazard@9}. Cualquier H&eacute;roe que se encuentre en una Zona con estos marcadores de Objetivo puede gastar 1 acci&oacute;n para {label.hazard@10} y reactivar {label.holes@2}. Cuando {label.holes@2} queda {label.holes@6}, retira el marcador de la Mazmorra y cada H&eacute;roe gana 5 PE."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato verso l'alto rappresentano {label.holes@3} {label.hazard:capital@3}. Qualsiasi Eroe che si trova in una Zona con questi segnalini Obiettivo pu&ograve; spendere 1 azione per {label.hazard@10} e riattivare {label.holes@2}. Quando {label.holes@3} viene {label.holes@6}, rimuovi il segnalino dal Dungeon.",
                                                        EN:"The color-side-up Objective tokens represent {label.hazard:capital@3} {label.holes:capital@1}. Any Hero standing in a Zone with these Objective tokens may spend 1 action to {label.hazard@10} and awake {label.holes@2}. When {label.holes@3} is awakened, remove the token from the Dungeon.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.holes@1} {label.hazard@9}. Cualquier H&eacute;roe que se encuentre en una Zona con estos marcadores de Objetivo puede gastar 1 acci&oacute;n para {label.hazard@10} y reactivar {label.holes@2}. Cuando {label.holes@2} queda {label.holes@6}, retira el marcador de la Mazmorra."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato verso l'alto rappresentano {label.holes@3} {label.hazard:capital@3}. Qualsiasi Eroe che si trova in una Zona con questi segnalini Obiettivo pu&ograve; spendere 1 azione per {label.hazard@10} e riattivare {label.holes@2}. Quando {label.holes@3} viene {label.holes@6}, rimuovi il segnalino dal Dungeon e ogni eroe guadagna {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"The color-side-up Objective tokens represent {label.hazard:capital@3} {label.holes:capital@1}. Any Hero standing in a Zone with these Objective tokens may spend 1 action to {label.hazard@10} and awake {label.holes@2}. When {label.holes@3} is awakened, remove the token from the Dungeon and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.holes@1} {label.hazard@9}. Cualquier H&eacute;roe que se encuentre en una Zona con estos marcadores de Objetivo puede gastar 1 acci&oacute;n para {label.hazard@10} y reactivar {label.holes@2}. Cuando {label.holes@2} queda {label.holes@6}, retira el marcador de la Mazmorra y todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Porte {label.hazard:capital@11}",
                                                        EN:"{label.hazard:capital@11} Doors",
                                                        ES:"Puertas {label.hazard@12}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le porte con il bordo rosso non possono essere aperte finch&eacute; non rimane solo 1 segnalino Obiettivo con il lato colorato rivolto verso l'alto nel Dungeon. Non appena nel Dungeon rimane solo 1 segnalino Obiettivo con il lato colorato rivolto verso l'alto, le porte possono essere aperte normalmente.",
                                                        EN:"The doors with a red border can't be opened until there is just 1 color-side-up Objective token left on the Dungeon. As soon as there is just 1 color-side-up Objective token left on the Dungeon the doors can be opened as usual.",
                                                        ES:"Las puertas con el borde rojo no pueden abrirse hasta que quede solo 1 marcador de Objetivo con el lado de color hacia arriba en la Mazmorra. En cuanto quede solo 1 marcador de Objetivo con el lado de color hacia arriba en la Mazmorra, las puertas pueden abrirse con normalidad."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri {label.hazard:capital@12}",
                                                        EN:"{label.hazard:capital@12} Monsters",
                                                        ES:"Monstruos {label.hazard@12}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I mostri sembrano essersi adattati a questo {label.hazard@6}. Durante questa Missione, segui queste regole speciali per i nemici:<ul>"+
                                                        "<li>I nemici non possono prendere segnalini {label.hazard@1}.</li>"+
                                                        "<li>Quando generi un Nemico, posiziona 1 segnalino {label.hazard@1} sulla sua arma o sulla sua statistica dei dadi di Attacco. La prima volta che un Nemico infligge 1 o pi&ugrave; Ferite a un Eroe, quell'Eroe prende il segnalino {label.hazard@1} di quel Nemico.</li>"+
                                                        "</ul>",
                                                        EN:"Monsters seem to have adapted themselves to this {label.hazard@6}. During this Mission, follow these special rules for Enemies:<ul>"+
                                                        "<li>Enemies can't take {label.hazard@1} tokens.</li>"+
                                                        "<li>When spawning an Enemy, place 1 {label.hazard@1} token on its weapon or Attack dice stat. The first time an Enemy deals 1 or more Wounds to a Hero, that Hero takes this Enemy's {label.hazard@1} token.</li>"+
                                                        "</ul>",
                                                        ES:"Los monstruos parecen haberse adaptado a esta {label.hazard@6}. Durante esta Misi&oacute;n, sigue estas reglas especiales para los Enemigos:<ul>" + "<li>Los Enemigos no pueden recibir marcadores de {label.hazard@1}.</li>" + "<li>Al generar un Enemigo, coloca 1 marcador de {label.hazard@1} sobre su arma o su estad&iacute;stica de dados de Ataque. La primera vez que un Enemigo inflige 1 o m&aacute;s Heridas a un H&eacute;roe, ese H&eacute;roe recibe el marcador de {label.hazard@1} de ese Enemigo.</li>" + "</ul>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.hazard@7}",
                                                        ES:"{label.hazard@7}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando la Camera con il token {symbol.corruptionToken} viene rivelata, genera un Mostro Errante nella Zona del segnalino {symbol.corruptionToken}, quindi rimuovi il segnalino dal Dungeon. Non pescare una carta Porta per questa Camera, ma genera le Orde come di solito.",
                                                        EN:"When the Chamber with the {symbol.corruptionToken} token is revealed, spawn a Roaming Monster in the {symbol.corruptionToken} token Zone, then remove the token from the Dungeon. Do not draw a Door card for this Chamber, but spawn Mobs as usual.",
                                                        ES:"Cuando se revela la C&aacute;mara con el marcador de {symbol.corruptionToken}, genera un Monstruo Errante en la Zona del marcador de {symbol.corruptionToken} y despu&eacute;s retira el marcador de la Mazmorra. No robes carta de Puerta para esta C&aacute;mara, pero genera Cuadrillas con normalidad."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga",
                                                        EN:"Escape",
                                                        ES:"Huida"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Qualsiasi Eroe nella Zona del segnalino Obiettivo grigio pu&ograve; spendere 1 PM per uscire dal Dungeon. Una volta che tutti gli Eroi sono usciti, {label.questVictory@0}.",
                                                        EN:"Any Hero on the gray Objective token Zone may spend 1 MP to exit the Dungeon. Once all Heroes have exited, {label.questVictory@0}.",
                                                        ES:"Cualquier H&eacute;roe en la Zona del marcador de Objetivo gris puede gastar 1 PM para salir de la Mazmorra. Una vez que todos los H&eacute;roes hayan salido, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom" ],
                                            gameMode: [ "adventureAndBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "elementalTrapExit" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noTraps" ]
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
                                                    IT:"Elimina {boss.bossBadName@0}, guardia {label.placeLeave@4}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.placeLeave@3} guardian",
                                                    ES:"Elimina a {boss.bossBadName@0}, guardi&aacute;n {label.placeLeave@4}"
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[0,1],
                            type:"shards",
                            objective:{
                                EN:"Heroes gain resources for every Leader or Roaming Monster killed or collecting tokens. Reach a resource quota to win.",
                                ES:"Los H&eacute;roes obtienen recursos por cada L&iacute;der o Monstruo Errante eliminado, o recogiendo marcadores. Alcanza la cuota de recursos para ganar."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Heaven's Secret Door\"",
                                EN:"Inspired by the Web Quest \"Heaven's Secret Door\"",
                                ES:"Inspirado en la Web Quest \"Heaven's Secret Door\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                purpose:[
                                                    {
                                                        IT:[ "Gli eroi stavano cercando un modo per tornare in superficie quando" ],
                                                        EN:[ "As the heroes try to find their way to the surface," ],
                                                        ES:[ "Mientras los h&eacute;roes intentaban encontrar el camino hacia la superficie," ]
                                                    },{
                                                        IT:[ "Gli eroi erano caduti in trappola e non avevamo via di scampo, ma ad un tratto" ],
                                                        EN:[ "The heroes had fallen into a trap and they had no escape, but suddenly" ],
                                                        ES:[ "Los h&eacute;roes hab&iacute;an ca&iacute;do en una trampa y no ten&iacute;an escapatoria, pero de repente" ]
                                                    },{
                                                        IT:[ "Il ponte che dava verso l'uscita era crollato e per gli eroi non c'era via di scampo. Ma, d'improvviso," ],
                                                        EN:[ "The bridge leading to the exit had collapsed and there was no escape for the heroes. But, suddenly," ],
                                                        ES:[ "El puente que llevaba a la salida se hab&iacute;a derrumbado y no hab&iacute;a escapatoria para los h&eacute;roes. Pero, de repente," ]
                                                    }
                                                ],
                                                gate:[
                                                    {
                                                        IT:[ "un portale apparve di fronte a loro."],
                                                        EN:[ "a portal appeared in front of them." ],
                                                        ES:[ "un portal apareci&oacute; ante ellos." ]
                                                    },{
                                                        IT:[ "un'ombra apparve dietro una grata."],
                                                        EN:[ "a portal appeared in front of them." ],
                                                        ES:[ "una sombra apareci&oacute; tras una reja." ]
                                                    },{
                                                        IT:[ "videro qualcosa muoversi dietro le macerie di un passaggio crollato."],
                                                        EN:[ "they saw something move behind the rubble of a collapsed passage." ],
                                                        ES:[ "vieron algo moverse tras los escombros de un pasadizo derrumbado." ]
                                                    }
                                                ],
                                                missionVoiceEvent:[
                                                    {
                                                        IT:[ "Presto! Non c'&egrave; tempo da perdere!"],
                                                        EN:[ "Quickly! There is no time!" ],
                                                        ES:[ "&iexcl;R&aacute;pido! &iexcl;No hay tiempo que perder!" ]
                                                    },{
                                                        IT:[ "Hey, voi! Ascoltatemi!"],
                                                        EN:[ "Hey, you! Listen to me!" ],
                                                        ES:[ "&iexcl;Eh, vosotros! &iexcl;Escuchadme!" ]
                                                    },{
                                                        IT:[ "Vi ho trovato, finalmente! Ascoltate!"],
                                                        EN:[ "I found you, finally! Listen!" ],
                                                        ES:[ "&iexcl;Por fin os he encontrado! &iexcl;Escuchad!" ]
                                                    }
                                                ],
                                                missionVoicePassage:[
                                                    {
                                                        IT:[ "Sto cercando di aprire questo passaggio perch&egrave; voi possiate raggiungerci!" ],
                                                        EN:[ "I'm trying to open this passage so you can reach us!" ],
                                                        ES:[ "&iexcl;Estoy intentando abrir este paso para que pod&aacute;is llegar hasta nosotros!" ]
                                                    },{
                                                        IT:[ "Prover&ograve; ad aprire questo passaggio e farvi uscire da qui!" ],
                                                        EN:[ "I'll try to open this passage and get you out of here!" ],
                                                        ES:[ "&iexcl;Intentar&eacute; abrir este paso y sacaros de aqu&iacute;!" ]
                                                    },{
                                                        IT:[ "Cercher&ograve; di aprire questo passaggio per voi..." ],
                                                        EN:[ "I'll try to open this passage for you..." ],
                                                        ES:[ "Intentar&eacute; abrir este paso para vosotros..." ]
                                                    }
                                                ],
                                                missionVoiceStory:[
                                                    {
                                                        IT:[ "Ma ho bisogno del vostro aiuto per ricomporre {label.artifact@1}, ora in frantumi." ],
                                                        EN:[ "But I will need your help to reforge {label.artifact@1} that has had {label.shard@6} and pieces scattered." ],
                                                        ES:[ "Pero necesitar&eacute; vuestra ayuda para reforjar {label.artifact@1}, que ha quedado hecho pedazos y esparcido." ]
                                                    },{
                                                        IT:[ "Ma non lo far&ograve; senza nulla in cambio. Portatemi {label.artifact@1}... dovrete ricostruirlo riunendo {label.shard@6}!" ],
                                                        EN:[ "But I won't do it with nothing in return. Bring me {label.artifact@1}... you'll have to rebuild it from {label.shard@6}!" ],
                                                        ES:[ "Pero no lo har&eacute; a cambio de nada. Traedme {label.artifact@1}... &iexcl;tendr&eacute;is que reconstruirlo reuniendo {label.shard@6}!" ]
                                                    },{
                                                        IT:[ "Ma ho bisogno che prima voi riuniate {label.shard@1} per ricomporre {label.artifact@1}!" ],
                                                        EN:[ "But I need you to collect {label.shard@1} to rebuild {label.artifact@1} first!" ],
                                                        ES:[ "&iexcl;Pero antes necesito que reun&aacute;is {label.shard@1} para recomponer {label.artifact@1}!" ]
                                                    }
                                                ],
                                                missionVoice:[
                                                    {
                                                        IT:[ "Dall'altra parte sentirono una voce: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\""],
                                                        EN:[ "From the other side, they hear a voice: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ],
                                                        ES:[ "Desde el otro lado oyeron una voz: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ]
                                                    },{
                                                        IT:[ "Qualcuno dall'altra parte bisbigli&ograve;: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\""],
                                                        EN:[ "Someone on the other end whispered: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ],
                                                        ES:[ "Alguien susurr&oacute; desde el otro lado: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ]
                                                    },{
                                                        IT:[ "Poco dopo, sentirono una voce: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\""],
                                                        EN:[ "Shortly after, they heard a voice: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ],
                                                        ES:[ "Poco despu&eacute;s, oyeron una voz: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        EN:[ "{label.missionVoice@0}" ],
                                                        ES:[ "{label.missionVoice@0}" ]
                                                    }
                                                ],
                                                artifact:[
                                                    {
                                                        IT:[ "l'Artefatto", "l'Artefatto Etereo", "l'artefatto", "dell'artefatto distrutto", "viene forgiato" ],
                                                        EN:[ "the Artifact", "the Ethereal Artifact", "the artifact", "of the destroyed artifact", "is forged" ],
                                                        ES:[ "el Artefacto", "el Artefacto Et&eacute;reo", "el artefacto", "del artefacto destruido", "es forjado" ]
                                                    },{
                                                        IT:[ "il Pendente", "il Pendente di Giada", "il pendente", "del pendente distrutto", "viene forgiato" ],
                                                        EN:[ "the Pendant", "the Jade Pendant", "the pendant", "of the destroyed pendant", "is forged" ],
                                                        ES:[ "el Colgante", "el Colgante de Jade", "el colgante", "del colgante destruido", "es forjado" ]
                                                    },{
                                                        IT:[ "la Gemma", "la Gemma Scarlatta", "la gemma", "della gemma frantumata", "viene forgiata" ],
                                                        EN:[ "the Gem", "the Scarlet Gem", "the gem", "of the broken gem", "is forged" ],
                                                        ES:[ "la Gema", "la Gema Escarlata", "la gema", "de la gema destrozada", "es forjada" ]
                                                    }
                                                ],
                                                collectMoreItems:[
                                                    {
                                                        IT:[ 10, "{label.shard@0}", "{label.shard@0}" ],
                                                        EN:[ 10, "{label.shard@0}", "{label.shard@0}" ],
                                                        ES:[ 10, "{label.shard@0}", "{label.shard@0}" ]
                                                    }
                                                ],
                                                shard:[
                                                    {
                                                        IT:[ "Frammenti Arcani", "i Frammenti Arcani", "1 Frammento", "Frammenti", "Frammenti Arcani", "i Frammenti", "i suoi frammenti", "possono essere raccolti", "Frammenti Spezzati", "i Frammenti Spezzati" ],
                                                        EN:[ "Arcane Shards", "the Arcane Shards", "1 Shard", "Shards", "Sacred Shards", "the Shards", "its shards", "can be collected", "Broken Pieces", "the Broken Pieces" ],
                                                        ES:[ "Esquirlas Arcanas", "las Esquirlas Arcanas", "1 Esquirla", "Esquirlas", "Esquirlas Sagradas", "las Esquirlas", "sus esquirlas", "pueden recogerse", "Fragmentos Rotos", "los Fragmentos Rotos" ]
                                                    },{
                                                        IT:[ "Schegge Solari", "le Schegge Solari", "1 Scheggia", "Schegge", "Schegge Solari", "le Schegge", "le sue schegge", "possono essere raccolte", "Schegge Cadute", "le Schegge Cadute" ],
                                                        EN:[ "Solar Shards", "the Solar Shards", "1 Shard", "Shards", "Solar Shards", "the Shards", "its shards", "can be collected", "Fallen Shards", "the Fallen Shards" ],
                                                        ES:[ "Astillas Solares", "las Astillas Solares", "1 Astilla", "Astillas", "Astillas Solares", "las Astillas", "sus astillas", "pueden recogerse", "Astillas Ca&iacute;das", "las Astillas Ca&iacute;das" ]
                                                    },{
                                                        IT:[ "Scaglie Ambrate", "le Scaglie Ambrate", "1 Scaglia", "Scaglie", "Scaglie Ambrate", "le Scaglie", "le sue scaglie", "possono essere raccolte", "Scaglie Perdute", "le Scaglie Perdute" ],
                                                        EN:[ "Amber Scales", "the Amber Scales", "1 Scale", "Scales", "Amber Scales", "the Scales", "its scales", "can be collected", "Lost Scales", "the Lost Scales" ],
                                                        ES:[ "Escamas de &Aacute;mbar", "las Escamas de &Aacute;mbar", "1 Escama", "Escamas", "Escamas de &Aacute;mbar", "las Escamas", "sus escamas", "pueden recogerse", "Escamas Perdidas", "las Escamas Perdidas" ]
                                                    }
                                                ],
                                                forge:[
                                                    {
                                                        IT:[ "Forgia Magica", "la Zona della Forgia Magica", "la Forgia Magica", "Forgia del Fuoco Magico", "sulla Zona della Forgia Magica", "sulla Forgia Magica" ],
                                                        EN:[ "Magic Forge", "the Magic Forge Zone", "the Magic Forge", "Forge with Magic Fire", "on the Magic Forge Zone", "on the Magic Forge" ],
                                                        ES:[ "Forja M&aacute;gica", "la Zona de la Forja M&aacute;gica", "la Forja M&aacute;gica", "Forja del Fuego M&aacute;gico", "en la Zona de la Forja M&aacute;gica", "en la Forja M&aacute;gica" ]
                                                    },{
                                                        IT:[ "Forgia Leggendaria", "la Zona della Forgia Leggendaria", "la Forgia Leggendaria", "Forgia del Fuoco Leggendario", "sulla Zona della Forgia Leggendaria", "sulla Forgia Leggendaria" ],
                                                        EN:[ "Legendary Forge", "the Legendary Forge Zone", "the Legendary Forge", "Forge with the Fire of the Legends", "on the Legendary Forge Zone", "on the Legendary Forge" ],
                                                        ES:[ "Forja Legendaria", "la Zona de la Forja Legendaria", "la Forja Legendaria", "Forja del Fuego Legendario", "en la Zona de la Forja Legendaria", "en la Forja Legendaria" ]
                                                    },{
                                                        IT:[ "Forgia Dimenticata", "la Zona della Forgia Dimenticata", "la Forgia Dimenticata", "Forgia del Fuoco Dimenticato", "sulla Zona della Forgia Dimenticata", "sulla Forgia Dimenticata" ],
                                                        EN:[ "Forgotten Forge", "the Forgotten Forge Zone", "the Forgotten Forge", "Forge with the Forgotten Fire", "on the Forgotten Forge Zone", "on the Forgotten Forge" ],
                                                        ES:[ "Forja Olvidada", "la Zona de la Forja Olvidada", "la Forja Olvidada", "Forja del Fuego Olvidado", "en la Zona de la Forja Olvidada", "en la Forja Olvidada" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.shard:capital@1}",
                                            ES:"{label.shard:capital@1}"
                                        },{
                                            EN:"{label.forge:capital@2}",
                                            ES:"{label.forge:capital@2}"
                                        },{
                                            EN:"{label.artifact:capital@1}",
                                            ES:"{label.artifact:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.purpose@0} {label.gate@0} {label.mission@0}",
                                            ES:"{label.purpose@0} {label.gate@0} {label.mission@0}"
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
                                                        EN:"{label.shard@0}",
                                                        ES:"{label.shard@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere almeno 10 {label.shard@4}",
                                                        EN:"Collect at least 10 {label.shard@4}",
                                                        ES:"Recoger al menos 10 {label.shard@4}"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Raccogliere almeno 7 {label.shard@4}",
                                                        EN:"Collect at least 7 {label.shard@4}",
                                                        ES:"Recoger al menos 7 {label.shard@4}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.forge@3}",
                                                        ES:"{label.forge@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.shard@5} per forgiare {label.artifact@0} tramite {label.forge@2}",
                                                        EN:"Use {label.shard@5} to forge {label.artifact@0} at the {label.forge@0}",
                                                        ES:"Usar {label.shard@5} para forjar {label.artifact@0} en {label.forge@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.shard@0}",
                                                        ES:"{label.shard@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.shard:capital@1} {label.shard@7} dai nemici. Ogni volta che un Eroe uccide un Mostro Errante o un Generale, lancia 2 {symbol.blackDie}. Per ogni {symbol.fang} risultante, gli Eroi guadagnano {label.shard@2}. Posiziona dei segnalini Salute {label.forge@5} per tenere traccia dei frammenti raccolti.",
                                                        EN:"{label.shard:capital@1} {label.shard@7} from the Enemies. Every time a Hero kills a Roaming Monster or a Leader, they roll 2 {symbol.blackDie}. For each {symbol.fang} rolled, the Heroes gets {label.shard@2}. Place Health tokens {label.forge@5} to keep track of the collected Shards.",
                                                        ES:"{label.shard:capital@1} {label.shard@7} de los Enemigos. Cada vez que un H&eacute;roe mata a un Monstruo Errante o a un L&iacute;der, tira 2 {symbol.blackDie}. Por cada {symbol.fang} obtenido, los H&eacute;roes ganan {label.shard@2}. Coloca marcadores de Salud {label.forge@5} para llevar la cuenta de las Esquirlas recogidas."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.shard@8}",
                                                        ES:"{label.shard@8}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato colorato rappresentano {label.shard@9}, che sono le parti pi&ugrave; grandi {label.artifact@3}. Qualsiasi Eroe che si trova in una Zona con un segnalino Obiettivo sul lato colorato pu&ograve; spendere 1 azione per scartare il segnalino Obiettivo e raccogliere {label.shard@2}.",
                                                        EN:"Color-side-up Objective tokens represent {label.shard@9}, which are the biggest parts {label.artifact@3}. Any Hero standing on a color-side-up Objective token Zone may spend 1 action to discard the Objective token and collect {label.shard@2}.",
                                                        ES:"Los marcadores de Objetivo en su lado de color representan {label.shard@9}, que son las partes m&aacute;s grandes {label.artifact@3}. Cualquier H&eacute;roe que se encuentre en la Zona de un marcador de Objetivo en su lado de color puede gastar 1 acci&oacute;n para descartar el marcador de Objetivo y recoger {label.shard@2}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.forge:capital@2}",
                                                        ES:"{label.forge:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Zona con un segnalino Obiettivo grigio &egrave; {label.forge@1}. Una volta che gli Eroi hanno raccolto collettivamente almeno 10 {label.shard@3}, qualsiasi Eroe {label.forge@4} pu&ograve; spendere 1 azione per Forgiare {label.artifact@1}. Non appena {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        EN:"The Zone with a gray Objective token is {label.forge@1}. Once the Heroes collectively gathered at least 10 {label.shard@3}, any Hero standing {label.forge@4} may spend 1 action to Forge {label.artifact@1}. As soon as {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        ES:"La Zona con un marcador de Objetivo gris es {label.forge@1}. Una vez que los H&eacute;roes hayan reunido colectivamente al menos 10 {label.shard@3}, cualquier H&eacute;roe que se encuentre {label.forge@4} puede gastar 1 acci&oacute;n para Forjar {label.artifact@1}. En cuanto {label.artifact@2} {label.artifact@4}, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"La Zona con un segnalino Obiettivo grigio &egrave; {label.forge@1}. Una volta che gli Eroi hanno raccolto collettivamente almeno 7 {label.shard@3}, qualsiasi Eroe {label.forge@4} pu&ograve; spendere 1 azione per Forgiare {label.artifact@1}. Non appena {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        EN:"The Zone with a gray Objective token is {label.forge@1}. Once the Heroes collectively gathered at least 7 {label.shard@3}, any Hero standing {label.forge@4} may spend 1 action to Forge {label.artifact@1}. As soon as {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        ES:"La Zona con un marcador de Objetivo gris es {label.forge@1}. Una vez que los H&eacute;roes hayan reunido colectivamente al menos 7 {label.shard@3}, cualquier H&eacute;roe que se encuentre {label.forge@4} puede gastar 1 acci&oacute;n para Forjar {label.artifact@1}. En cuanto {label.artifact@2} {label.artifact@4}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom" ],
                                            gameMode: [ "collectAndForge" ],
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
                                            forCampaign:[ "full" ], // Not enough objectives for mini-campaign
                                            sideQuests:[
                                                { tags:[
                                                    [ "collectMoreItems", "visitAllRooms" ]
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
                                                    IT:"Elimina {boss.bossBadName@0}, cacciatore di Eroi",
                                                    EN:"Eliminate {boss.bossBadName@0}, the Heroes hunter",
                                                    ES:"Elimina a {boss.bossBadName@0}, cazador de H&eacute;roes"
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-camapign
                            forMaps:[1],
                            type:"corruption",
                            objective:{
                                EN:"One hero takes wounds and gains a token for every Leader or Roaming Monster killed. Reach a token quota to win.",
                                ES:"Un h&eacute;roe sufre Heridas y gana un marcador por cada L&iacute;der o Monstruo Errante eliminado. Alcanza la cuota de marcadores para ganar."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Hello, Darkness!\"",
                                EN:"Inspired by the Web Quest \"Hello, Darkness!\"",
                                ES:"Inspirado en la Web Quest \"Hello, Darkness!\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                from:[
                                                    {
                                                        IT:[ "Gli Eroi hanno trovato un portale in grado di trasportarli", "i portali", "un portale come questo" ],
                                                        EN:[ "The Heroes have found a portal that leads", "portals", "such portals" ],
                                                        ES:[ "Los H&eacute;roes encontraron un portal capaz de transportarlos", "los portales", "un portal como este" ]
                                                    },{
                                                        IT:[ "Gli Eroi stringevano in mano la Pergamena Arcana che li avrebbe portati", "le Pergamene Arcane", "una pergamena come questa" ],
                                                        EN:[ "The Heroes held in their hands the Arcane Scroll that would bring them", "Arcane Scrolls", "such scrolls" ],
                                                        ES:[ "Los H&eacute;roes sosten&iacute;an en sus manos el Pergamino Arcano que los llevar&iacute;a", "los Pergaminos Arcanos", "un pergamino como este" ]
                                                    },{
                                                        IT:[ "La Mappa Oscura indicava il passaggio li avrebbe portati", "le Mappe Oscure", "una mappa come questa" ],
                                                        EN:[ "The Dark Map indicated the passage would take them", "Dark Maps", "such maps" ],
                                                        ES:[ "El Mapa Oscuro indicaba que el pasadizo los llevar&iacute;a", "los Mapas Oscuros", "un mapa como este" ]
                                                    }
                                                ],
                                                to:[
                                                    {
                                                        IT:[ "all'interno del castello, direttamente dalle profondit&agrave; della foresta." ],
                                                        EN:[ "straight to the castle directly from the depths of the woods." ],
                                                        ES:[ "directamente al castillo, desde las profundidades del bosque." ]
                                                    },{
                                                        IT:[ "nelle segrete della torre del mago." ],
                                                        EN:[ "to the dungeon of the wizard's tower." ],
                                                        ES:[ "a las mazmorras de la torre del mago." ]
                                                    },{
                                                        IT:[ "alla loro ultima battaglia." ],
                                                        EN:[ "to their last battle." ],
                                                        ES:[ "a su &uacute;ltima batalla." ]
                                                    }
                                                ],
                                                forWho:[
                                                    {
                                                        IT:[ "Ma gli uomini normali non potrebbero usare {label.from@2}," ],
                                                        EN:[ "An ordinary man could not use {label.from@2}," ],
                                                        ES:[ "Un hombre corriente no podr&iacute;a usar {label.from@2}," ]
                                                    },{
                                                        IT:[ "Ma solo poche creature sono in grado di domare {label.from@2}," ],
                                                        EN:[ "But only a few creatures can tame {label.from@2}," ],
                                                        ES:[ "Pero solo unas pocas criaturas son capaces de domar {label.from@2}," ]
                                                    },{
                                                        IT:[ "Ma nessun essere umano riuscirebbe a resistere a {label.from@2}," ],
                                                        EN:[ "But no human being could resist {label.from@2}," ],
                                                        ES:[ "Pero ning&uacute;n ser humano podr&iacute;a resistirse a {label.from@2}," ]
                                                    }
                                                ],
                                                if:[
                                                    {
                                                        IT:[ "perch&eacute; riuscirebbe a corrompere la sua anima fino al midollo."],
                                                        EN:[ "for it would corrupt their soul to the core." ],
                                                        ES:[ "porque le corromper&iacute;a el alma hasta la m&eacute;dula." ]
                                                    },{
                                                        IT:[ "perch&eacute; ne risucchierebbe la vita in un attimo."],
                                                        EN:[ "for it would drain the life out of them in an instant." ],
                                                        ES:[ "porque le drenar&iacute;a la vida en un instante." ]
                                                    },{
                                                        IT:[ "perch&eacute; ne trasformerebbe il corpo in pietra."],
                                                        EN:[ "for it would turn his body into stone." ],
                                                        ES:[ "porque le convertir&iacute;a el cuerpo en piedra." ]
                                                    }
                                                ],
                                                luck1:[
                                                    {
                                                        IT:[ "Fortunatamente, {label.specialOne@1} fa parte del gruppo," ],
                                                        EN:[ "Luckily, the party has {label.specialOne@1} amongst them," ],
                                                        ES:[ "Por suerte, {label.specialOne@1} forma parte del grupo," ]
                                                    },{
                                                        IT:[ "Ma {label.specialOne@1} fa parte del gruppo," ],
                                                        EN:[ "But {label.specialOne@1} is part of the party," ],
                                                        ES:[ "Pero {label.specialOne@1} forma parte del grupo," ]
                                                    },{
                                                        IT:[ "Alla spedizione partecipa anche {label.specialOne@1}," ],
                                                        EN:[ "{label.specialOne:capital@1} also participates in the expedition," ],
                                                        ES:[ "{label.specialOne:capital@1} tambi&eacute;n participa en la expedici&oacute;n," ]
                                                    }
                                                ],
                                                luck2:[
                                                    {
                                                        IT:[ "e {label.specialOne@0} sono in grado di manipolare e controllare {label.from@1}." ],
                                                        EN:[ "and {label.specialOne@0} can manipulate {label.from@1} to do their bidding." ],
                                                        ES:[ "y {label.specialOne@0} son capaces de manipular y controlar {label.from@1}." ]
                                                    },{
                                                        IT:[ "e {label.specialOne@0} sanno molto bene come controllare {label.from@1}." ],
                                                        EN:[ "and {label.specialOne@0} know very well how to control {label.from@1}." ],
                                                        ES:[ "y {label.specialOne@0} saben muy bien c&oacute;mo controlar {label.from@1}." ]
                                                    },{
                                                        IT:[ "e {label.specialOne@0} studiano {label.from@1} da secoli." ],
                                                        EN:[ "and {label.specialOne@0} have been studying {label.from@1} for centuries." ],
                                                        ES:[ "y {label.specialOne@0} llevan siglos estudiando {label.from@1}." ]
                                                    }
                                                ],
                                                specialOne:[
                                                    {
                                                        IT:[ "i Mezzi Demoni", "un Mezzo Demone", "l'Eroe Mezzo Demone", "Assorbire l'Oscurit&agrave;", "Portare a {label.tokensCount} il Potere Oscuro", "Potere Oscuro", "il \"Mezzo Demone\"", "dall'oscurit&agrave;", "il suo Potere Oscuro", "le fonti di Energia Oscura", "", "distruggerlo", "Assorbire l'Oscurit&agrave;", "Cumuli di Oscurit&agrave;", "il suo Potere Oscuro arriva a {label.tokensCount}", "rappresentate", "di Mezzi Demoni" ],
                                                        EN:[ "Half-Demons", "a Half-Demon", "the Half-Demon Hero", "Absorb Darkness", "Reach {label.tokensCount} Darkness Power", "Darkness Power", "the \"Half-Demon\"", "from the Darkness", "their Darkness Power", "sources of Dark Energy", "", "destroy it", "Absorbing Darkness", "Beacons of Darkness", "Darkness Power reaches {label.tokensCount}", "represented", "the Half-Demons" ],
                                                        ES:[ "los Semidemonios", "un Semidemonio", "el H&eacute;roe Semidemonio", "Absorber la Oscuridad", "Alcanzar {label.tokensCount} de Poder Oscuro", "Poder Oscuro", "el &laquo;Semidemonio&raquo;", "de la Oscuridad", "su Poder Oscuro", "las fuentes de Energ&iacute;a Oscura", "", "destruirla", "Absorber la Oscuridad", "Balizas de Oscuridad", "su Poder Oscuro llega a {label.tokensCount}", "representadas", "de Semidemonios" ]
                                                    },{
                                                        IT:[ "i Figli del Bosco", "un Figlio del Bosco", "l'Eroe Figlio del Bosco", "Assorbire lo Spirito", "Portare a {label.tokensCount} lo Spirito Arboreo", "Spirito Arboreo", "il \"Figlio del Bosco\"", "dalle ombre", "il suo Spirito Arboreo", "le radici dello Spirito Arboreo", "", "raccoglierla", "Assorbire lo Spirito", "Radici dello Spirito", "il suo Spirito Arboreo arriva a {label.tokensCount}", "rappresentate", "dei Figli del Bosco" ],
                                                        EN:[ "the Children of the Woods", "a Child of the Woods", "the Child of the Woods Hero", "Absorb the Spirit", "Reach {label.tokensCount} Arboreal Spirit", "Arboreal Spirit", "the \"Child of the Woods \"", "from the shadows", "his Arboreal Spirit", "the roots of the Arboreal Spirit", "", "harvest it", "Absorb the Spirit", "Roots of the Spirit", "his Arboreal Spirit reaches {label.tokensCount}", "represented", "the Children of the Woods" ],
                                                        ES:[ "los Hijos del Bosque", "un Hijo del Bosque", "el H&eacute;roe Hijo del Bosque", "Absorber el Esp&iacute;ritu", "Alcanzar {label.tokensCount} de Esp&iacute;ritu Arb&oacute;reo", "Esp&iacute;ritu Arb&oacute;reo", "el &laquo;Hijo del Bosque&raquo;", "de las sombras", "su Esp&iacute;ritu Arb&oacute;reo", "las ra&iacute;ces del Esp&iacute;ritu Arb&oacute;reo", "", "recolectarla", "Absorber el Esp&iacute;ritu", "Ra&iacute;ces del Esp&iacute;ritu", "su Esp&iacute;ritu Arb&oacute;reo llega a {label.tokensCount}", "representadas", "de Hijos del Bosque" ]
                                                    },{
                                                        IT:[ "gli Adepti del Cielo", "un Adepto del Cielo", "l'Eroe Adepto del Cielo", "Assorbire l'Essenza", "Portare a {label.tokensCount} l'Essenza Notturna", "Essenza Notturna", "l'\"Adepto del Cielo\"", "della notte", "la sua Essenza Notturna", "i globi di Essenza Notturna", "", "frantumarlo", "Assorbire l'Essenza Notturna", "Globi di Essenza Notturna", "la sua Essenza Notturna arriva a {label.tokensCount}", "rappresentati", "degli Adepti del Cielo" ],
                                                        EN:[ "the Sky Adepts", "a Sky Adept", "the Sky Adept Hero", "Absorb the Essence", "Reach {label.tokensCount} Night Essence", "Night Essence", "the \"Sky Adept\"", "from the night", "his Night Essence", "the orbs of Night Essence", "", "shatter it", "Absorb the Night Essence", "Orbs of Night Essence", "Night Essence reaches {label.tokensCount}", "represented", "the Sky Adepts" ],
                                                        ES:[ "los Adeptos del Cielo", "un Adepto del Cielo", "el H&eacute;roe Adepto del Cielo", "Absorber la Esencia", "Alcanzar {label.tokensCount} de Esencia Nocturna", "Esencia Nocturna", "el &laquo;Adepto del Cielo&raquo;", "de la noche", "su Esencia Nocturna", "los orbes de Esencia Nocturna", "", "destrozarlo", "Absorber la Esencia Nocturna", "Orbes de Esencia Nocturna", "su Esencia Nocturna llega a {label.tokensCount}", "representados", "de Adeptos del Cielo" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                tokensCount:[
                                                    {
                                                        EN:[ 7 ],
                                                        ES:[ 7 ]
                                                    }
                                                ],
                                                roundLimit:[
                                                    {
                                                        EN:[ 7 ],
                                                        ES:[ 7 ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.from:capital@1}",
                                            ES:"{label.from:capital@1}"
                                        },{
                                            EN:"{label.specialOne:capital@0}",
                                            ES:"{label.specialOne:capital@0}"
                                        },{
                                            EN:"{label.specialOne:capital@5}",
                                            ES:"{label.specialOne:capital@5}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.from@0} {label.to@0} {label.forWho@0} {label.if@0} {label.luck1@0} {label.luck2@0}",
                                            ES:"{label.from@0} {label.to@0} {label.forWho@0} {label.if@0} {label.luck1@0} {label.luck2@0}"
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
                                                        EN:"{label.specialOne@3}",
                                                        ES:"{label.specialOne@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"{label.specialOne@4}",
                                                        ES:"{label.specialOne@4}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@5}",
                                                        ES:"{label.specialOne@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Scegli un Eroe che sia {label.specialOne@6}. Sar&agrave; in grado di assorbire l'energia {label.specialOne@7}. Ogni volta che un Eroe elimina un Generale o un Mostro Errante che si trova in una Zona di Ombra, {label.specialOne@2} subisce 1 ferita e fa avanzare di 1 {label.specialOne@8} (posiziona 1 segnalino {symbol.corruptionToken} sulla sua carta Eroe).",
                                                        EN:"Choose a Hero to be {label.specialOne@6}. They can absorb the energy {label.specialOne@7}. Every time any Hero kills a Leader or a Roaming Monster that is in a Shadow Zone, {label.specialOne@2} takes 1 Wound and advances {label.specialOne@8} by 1 (place 1 {symbol.corruptionToken} token on their Hero Card).",
                                                        ES:"Elige a un H&eacute;roe para que sea {label.specialOne@6}. Podr&aacute; absorber la energ&iacute;a {label.specialOne@7}. Cada vez que cualquier H&eacute;roe elimine a un L&iacute;der o a un Monstruo Errante que se encuentre en una Zona de Sombra, {label.specialOne@2} sufre 1 Herida y avanza 1 en {label.specialOne@8} (coloca 1 marcador de {symbol.corruptionToken} sobre su Carta de H&eacute;roe)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@13}",
                                                        ES:"{label.specialOne@13}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.specialOne:capital@9} sono {label.specialOne@15} dai segnalini Obiettivo. Quando si trova in una Zona con un segnalino Obiettivo, {label.specialOne@2} pu&ograve; spendere 1 azione per {label.specialOne@11}. Rimuove il segnalino Obiettivo dal Dungeon, subisce 1 Ferita e aumenta {label.specialOne@8} di 1 (posiziona 1 segnalino {symbol.corruptionToken} sulla sua Carta Eroe).",
                                                        EN:"{label.specialOne:capital@9} are {label.specialOne@15} by Objective tokens. When standing in a Zone with an Objective token, {label.specialOne@2} may spend 1 action to {label.specialOne@11}. It removes the Objective token from the Dungeon, takes 1 Wound, and advances {label.specialOne@8} by 1 (place 1 {symbol.corruptionToken} token on their Hero Card).",
                                                        ES:"{label.specialOne:capital@9} est&aacute;n {label.specialOne@15} por marcadores de Objetivo. Cuando se encuentra en una Zona con un marcador de Objetivo, {label.specialOne@2} puede gastar 1 acci&oacute;n para {label.specialOne@11}. Retira el marcador de Objetivo de la Mazmorra, sufre 1 Herida y aumenta {label.specialOne@8} en 1 (coloca 1 marcador de {symbol.corruptionToken} sobre su Carta de H&eacute;roe)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@12}",
                                                        ES:"{label.specialOne@12}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.specialOne@2} ha {label.tokensCount@0} segnalini {symbol.corruptionToken} ({label.specialOne@14}), {label.questVictory@0}.",
                                                        EN:"As soon as {label.specialOne@2} has {label.tokensCount@0} {symbol.corruptionToken} tokens ({label.specialOne@14}), {label.questVictory@0}.",
                                                        ES:"En cuanto {label.specialOne@2} tenga {label.tokensCount@0} marcadores de {symbol.corruptionToken} ({label.specialOne@14}), {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "targetsSmall" ],
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
                                                    IT:"Elimina {boss.bossBadName@0}, a caccia {label.specialOne@16}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.specialOne@16} hunter",
                                                    ES:"Elimina a {boss.bossBadName@0}, cazador {label.specialOne@16}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>{label.specialOne:capital@2} scarta tutti i segnalini {symbol.corruptionToken} e non assorbe pi&ugrave; l'energia {label.specialOne@7}.</p>",
                                            EN:"<p>{label.specialOne:capital@2} discards all the {symbol.corruptionToken} tokens  and no longer absorb the energy {label.specialOne@7}.</p>",
                                            ES:"<p>{label.specialOne:capital@2} descarta todos los marcadores de {symbol.corruptionToken} y deja de absorber la energ&iacute;a {label.specialOne@7}.</p>"
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
                        }
                    ]
                }
            ]
        }
    ]

});