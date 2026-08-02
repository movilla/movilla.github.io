ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                IT:[ "la Missione termina con una vittoria", "terminare la Missione con una vittoria" ],
                EN:[ "the Mission ends with a victory", "end the Mission with a victory" ],ES:[ "la Misión termina con una victoria", "terminar la Misión con una victoria" ]
            }
        ],
        BOSSBEAT = [
            {
                IT:[ "viene eliminato", "viene eliminata" ],
                EN:[ "it is eliminated", "it is eliminated" ],ES:[ "es eliminada", "es eliminada" ]
            }
        ];

    return [
        {
            id:"quests-hellscape",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-hellscape", "untranslated-fr" ],
            label:{
                EN:"MD2: Hellscape inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[2],
                            type:"finalBoss",
                            objective:{
                                EN:"Separated Heroes must gather to a zone and beat a Roaming Monster to win.",ES:"Los Héroes, separados, deben reunirse en una zona y derrotar a un Monstruo Errante para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Hellscape\"",
                                EN:"Inspired by the Hellscape quest \"Hellscape\"",ES:"Inspirado en la misión de Hellscape \"Hellscape\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                problem:[
                                                    {
                                                        IT:[ "Qualcosa &egrave; andato storto con l'ultimo portale! Ci siamo persi e" ],
                                                        EN:[ "Something went wrong with the last portal! We got lost and" ],ES:[ "¡Algo salió mal con el último portal! Nos hemos perdido y" ]
                                                    },{
                                                        IT:[ "Non ricordiamo cosa sia successo. Appena abbiamo riaperto gli occhi ci siamo accorti che" ],
                                                        EN:[ "We don't remember what happened. As soon as we reopened our eyes we realized that" ],ES:[ "No recordamos qué pasó. En cuanto abrimos los ojos de nuevo, nos dimos cuenta de que" ]
                                                    },{
                                                        IT:[ "Quella di separarci nella foresta non &egrave; stata una buona idea..." ],
                                                        EN:[ "Separating us in the forest wasn't a good idea..." ],ES:[ "Separarnos en el bosque no fue una buena idea..." ]
                                                    }
                                                ],
                                                lost:[
                                                    {
                                                        IT:[ "ora siamo separati gli uni dagli altri!", "Separati!" ],
                                                        EN:[ "we are now separated from each other!", "Separated!" ],ES:[ "¡ahora estamos separados los unos de los otros!", "¡Separados!" ]
                                                    },{
                                                        IT:[ "qualche forza misteriosa deve averci separato!", "La Forza Misteriosa" ],
                                                        EN:[ "some mysterious force must have separated us!", "The Mysterious Force" ],ES:[ "¡alguna fuerza misteriosa debe habernos separado!", "La Fuerza Misteriosa" ]
                                                    },{
                                                        IT:[ "non capiamo dove siamo finiti!", "Dove siamo finiti?" ],
                                                        EN:[ "we don't understand where we ended up!", "Where have we ended up?" ],ES:[ "¡no entendemos dónde hemos acabado!", "¿Dónde hemos acabado?" ]
                                                    }
                                                ],
                                                guard:[
                                                    {
                                                        IT:[ "C'&egrave; un Mostro Errante che fa la guardia all'unica via d'uscita" ],
                                                        EN:[ "There is a Roaming Monster guarding the only way out" ],ES:[ "Hay un Monstruo Errante vigilando la única salida" ]
                                                    },{
                                                        IT:[ "Si narra che da queste parti si trovi una tremenda creaturea" ],
                                                        EN:[ "It is said that in these parts there is a terrible creature" ],ES:[ "Se dice que por aquí ronda una criatura terrible" ]
                                                    },{
                                                        IT:[ "Qualcosa di terribile si aggira tra queste mura" ],
                                                        EN:[ "Something terrible is lurking within these walls" ],ES:[ "Algo terrible acecha entre estos muros" ]
                                                    }
                                                ],
                                                avoid:[
                                                    {
                                                        IT:[ "e non possiamo rischiare che ci segua." ],
                                                        EN:[ "and we can't risk him following us." ],ES:[ "y no podemos arriesgarnos a que nos siga." ]
                                                    },{
                                                        IT:[ "e non abbiamo altra scelta che affrontarla." ],
                                                        EN:[ "and we have no choice but to face it." ],ES:[ "y no tenemos más remedio que enfrentarnos a ella." ]
                                                    },{
                                                        IT:[ "e potrebbe essere l'obiettivo che cercavamo da tempo." ],
                                                        EN:[ "and it could be the goal we've been looking for for some time." ],ES:[ "y podría ser el objetivo que llevamos tiempo buscando." ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "Dobbiamo riunirci e sopprimere il mostro" ],
                                                        EN:[ "We must gather and eliminate the monster" ],ES:[ "Debemos reunirnos y acabar con el monstruo" ],
                                                    },{
                                                        IT:[ "Dovremo affrontare una durissima battaglia" ],
                                                        EN:[ "We will have to face a very tough battle" ],ES:[ "Tendremos que afrontar una batalla durísima" ]
                                                    },{
                                                        IT:[ "Non possiamo farcela da soli... Dobbiamo ritrovarci" ],
                                                        EN:[ "We can't do it alone... We have to reunite" ],ES:[ "No podemos lograrlo solos... Debemos reencontrarnos" ]
                                                    }
                                                ],
                                                goal:[
                                                    {
                                                        IT:[ "prima di tornare a casa!" ],
                                                        EN:[ "before going home!" ],ES:[ "¡antes de volver a casa!" ]
                                                    },{
                                                        IT:[ "per poter porre fine a tutto questo!" ],
                                                        EN:[ "to be able to put an end to all this!" ],ES:[ "¡para poder poner fin a todo esto!" ]
                                                    },{
                                                        IT:[ "o per il Regno non ci sar&agrave; speranza!" ],
                                                        EN:[ "or there will be no hope for the Kingdom!" ],ES:[ "¡o no habrá esperanza para el Reino!" ]
                                                    }
                                                ],
                                                gate:[
                                                    {
                                                        IT:[ "Portale Arcano", "Portali Arcani", "i", "un", "il suo portale", "unicamente il proprio portale" ],
                                                        EN:[ "Arcane Portal", "Arcane Portals", "the", "an", "his portal", "their own portal only" ],ES:[ "Portal Arcano", "Portales Arcanos", "los", "un", "su portal", "únicamente su propio portal" ]
                                                    },{
                                                        IT:[ "Teletrasporto", "Teletrasporti", "i", "un", "il suo teletrasporto", "unicamente il proprio teletrasporto" ],
                                                        EN:[ "Teleporter", "Teleporters", "the", "a", "his teleporter", "their own teleporter only" ],ES:[ "Teletransportador", "Teletransportadores", "los", "un", "su teletransportador", "únicamente su propio teletransportador" ]
                                                    },{
                                                        IT:[ "Specchio Incantato", "Specchi Incantati", "gli", "uno", "il suo specchio", "unicamente il proprio specchio" ],
                                                        EN:[ "Enchanted Mirror", "Enchanted Mirrors", "the", "an", "his mirror", "their own mirror only" ],ES:[ "Espejo Encantado", "Espejos Encantados", "los", "un", "su espejo", "únicamente su propio espejo" ]
                                                    }
                                                ],
                                                cliffhanger:[
                                                    {
                                                        IT:[ "L'Interferenza Oscura" ],
                                                        EN:[ "The Dark Interference" ],ES:[ "La Interferencia Oscura" ]
                                                    },{
                                                        IT:[ "Il Combattimento Finale" ],
                                                        EN:[ "The Final Battle" ],ES:[ "El Combate Final" ]
                                                    },{
                                                        IT:[ "L'Ultima Prova" ],
                                                        EN:[ "The Last Challenge" ],ES:[ "La Última Prueba" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noDoor:[
                                                    {
                                                        IT:[ "{label.gate@5}" ],
                                                        EN:[ "{label.gate@5}" ],ES:[ "{label.gate@5}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cliffhanger@0}",ES:"{label.cliffhanger@0}"
                                        },{
                                            EN:"{label.gate:capital@2} {label.gate:capital@1}",ES:"{label.gate:capital@2} {label.gate:capital@1}"
                                        },{
                                            EN:"{label.lost:capital@1}",ES:"{label.lost:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.problem@0} {label.lost@0} {label.guard@0} {label.avoid@0} {label.objective@0} {label.goal@0}",ES:"{label.problem@0} {label.lost@0} {label.guard@0} {label.avoid@0} {label.objective@0} {label.goal@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",ES:"Completa los objetivos en el orden indicado:"
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
                                                        IT:"L'Adunanza",
                                                        EN:"The Gathering",ES:"La Reunión"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Tutti gli Eroi devono raggiungere la Tessera {tileLabel.center}",
                                                        EN:"All Heroes must reach the {tileLabel.center} tile",ES:"Todos los Héroes deben alcanzar la Loseta {tileLabel.center}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere il Mostro",
                                                        EN:"Defeating the Monster",ES:"Derrotar al Monstruo"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Sconfiggere il Mostro Errante Finale",
                                                        EN:"Defeating the Final Roaming Monster",ES:"Derrotar al Monstruo Errante Final"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Separati",
                                                        EN:"Separated",ES:"Separados"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questa Missione, gli Eroi partono separati e ogni giocatore deve collocare il proprio Eroe in una Zona di Partenza diversa. In una partita a 5 o 6 Eroi, 1 o 2 Zone di Partenza possono contenere un massimo di 2 Eroi. A tutti i fini (facendo eccezione per il Mostro Errante Finale), considerate la Missione come se soltanto 2 Eroi stessero giocando.<p>In una partita a meno di 4 Eroi, rimuovete abbastanza Tessere in modo che restino solo la Tessera del Boss ({tileLabel.center}) pi&ugrave; 1 Tessera per Eroe. Non rimuovete la tessera {tileLabel.first}.</p>",
                                                        EN:"In this Mission, the Heroes start separately and each player must place their Hero in a different Starting Zone. In a game with 5 or 6 Heroes, 1 or 2 Starting Zones can contain a maximum of 2 Heroes. For any purposes (except for the Final Roaming Monster), treat the Mission as if only 2 Heroes were playing.<p>In a game with fewer than 4 Heroes, remove enough Tiles so that only the Boss Tile remains ({tileLabel.center}) plus 1 Tile per Hero. Do not remove the {tileLabel.first} tile.</p>",ES:"En esta Misión, los Héroes empiezan separados y cada jugador debe colocar a su Héroe en una Zona de Partida distinta. En una partida con 5 o 6 Héroes, 1 o 2 Zonas de Partida pueden contener un máximo de 2 Héroes. A todos los efectos (salvo para el Monstruo Errante Final), trata la Misión como si solo estuvieran jugando 2 Héroes.<p>En una partida con menos de 4 Héroes, retira suficientes Losetas para que solo queden la Loseta del Jefe ({tileLabel.center}) más 1 Loseta por Héroe. No retires la Loseta {tileLabel.first}.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nota",
                                                        EN:"Note",ES:"Nota"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le Orde vengono generate soltanto con 2 Gregari e il proprio Comandante e i Mostri Erranti hanno la Salute equivalente solo a 2 Eroi.",
                                                        EN:"The Hordes are only generated with 2 Minions and their Leader and the Roaming Monsters have the equivalent Health of only 2 Heroes.",ES:"Las Cuadrillas se generan solo con 2 Secuaces y su Líder, y los Monstruos Errantes tienen la Vida equivalente a solo 2 Héroes."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.gate@1}",ES:"{label.gate@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "Le tessere non sono collegate in questa Missione ed &egrave; possibile accedervi soltanto usando {label.gate@2} {label.gate@1} rappresentati dai segnalini Obiettivo, che per&ograve; sono disattivati."+
                                                            "<p>{label.gate:capital@3} {label.gate@0} si attiva immediatamente ed il suo segnalino Obiettivo viene girato sul suo lato colorato dopo che la sua Tessera corrispondente &egrave; rimasta priva di Nemici e tutte le Camere sono state rivelate.</p>"+
                                                            "Qualsiasi Eroe che ha attivato {label.gate@4} pu&ograve; spendere 1 PM mentre si trova in una Zona con un segnalino Obiettivo di qualsiasi colore per muoversi fino a una qualsiasi altra zona con un segnalino Obiettivo di qualsiasi colore.",
                                                        EN: "The tiles are not connected in this Mission and can only be accessed using {label.gate@2} {label.gate@1} represented by the Objective tokens, which however are deactivated."+
                                                        "<p>{label.gate:capital@3} {label.gate@0} activates immediately and its Objective token is flipped to its colored side after its corresponding tile remains have no Enemies and all Chambers are been revealed.</p>"+
                                                        "Any Hero who has activated {label.gate@4} can spend 1 MP while in a Zone with an Objective token of any color to move to any other zone with an Objective token of any color.",ES:"Las Losetas no están conectadas en esta Misión y solo se puede acceder a ellas usando {label.gate@2} {label.gate@1}, representados por los marcadores de Objetivo, que sin embargo están desactivados." + "<p>{label.gate:capital@3} {label.gate@0} se activa inmediatamente y su marcador de Objetivo se voltea a su lado de color cuando su Loseta correspondiente se queda sin Enemigos y se han revelado todas sus Cámaras.</p>" + "Cualquier Héroe que haya activado {label.gate@4} puede gastar 1 PM mientras se encuentre en una Zona con un marcador de Objetivo de cualquier color para moverse hasta cualquier otra zona con un marcador de Objetivo de cualquier color."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.cliffhanger@0}",ES:"{label.cliffhanger@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando aprite la porte con il bordo rosso sulla Tessera {tileLabel.center} non risolvete carte Porta, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate un Mostro Errante di Livello 5 nella sua zona.<p>Pescate carte dal mazzo degli Oggetti dell'Orda di Livello 5 finch&eacute; non rivelate un'arma con lo stesso tipo di attacco del Mostro Errante. Assegnate quell'arma al Mostro Errante, aggiungendo i dadi dell'arma alla riserva di dadi di Attacco del Mostro Errante.</p><p>Quando il Mostro Errante viene sconfitto {label.questVictory@0}.</p>",
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and generate a Level 5 Roaming Monster in its area.<p>Draw cards from the Level 5 Horde Items deck until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to the Roaming Monster's Attack dice pool.</p><p>When the Roaming Monster is defeated {label.questVictory@0}.</p>",ES:"Cuando abras la puerta con el contorno rojo de la Loseta {tileLabel.center}, no resuelvas cartas de Puerta; retira el marcador de Corrupción {symbol.corruptionToken} y genera un Monstruo Errante de nivel 5 en su zona.<p>Roba cartas del mazo de Objetos de Horda de nivel 5 hasta revelar un arma con el mismo tipo de ataque que el Monstruo Errante. Equipa esa arma al Monstruo Errante, añadiendo los dados del arma a su reserva de dados de Ataque.</p><p>Cuando se derrote al Monstruo Errante, {label.questVictory@0}.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando aprite la porte con il bordo rosso sulla Tessera {tileLabel.center} non risolvete carte Porta, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate {label.campaignBoss@0} nella sua zona.<p>Pescate carte dal mazzo degli Oggetti dell'Orda corrispondente al suo rango finch&eacute; non rivelate un'arma con lo stesso tipo di attacco del Mostro Errante. Assegnate quell'arma al Mostro Errante, aggiungendo i dadi dell'arma alla riserva di dadi di Attacco del Mostro Errante.</p><p>Quando il Mostro Errante viene sconfitto {label.questVictory@0}.</p>",
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and generate {label.campaignBoss@0} in its area.<p>Draw cards from the Horde Items deck matching its rank until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to the Roaming Monster's Attack dice pool.</p><p>When the Roaming Monster is defeated {label.questVictory@0}.</p>",ES:"Cuando abras la puerta con el contorno rojo de la Loseta {tileLabel.center}, no resuelvas cartas de Puerta; retira el marcador de Corrupción {symbol.corruptionToken} y genera {label.campaignBoss@0} en su zona.<p>Roba cartas del mazo de Objetos de Horda correspondiente a su rango hasta revelar un arma con el mismo tipo de ataque que el Monstruo Errante. Equipa esa arma al Monstruo Errante, añadiendo los dados del arma a su reserva de dados de Ataque.</p><p>Cuando se derrote al Monstruo Errante, {label.questVictory@0}.</p>"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "cross" ],
                                            gameMode: [ "cross" ],
                                            difficulty:[ "none" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "same" ],
                                            corridors: [ "cross" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noDoor" ]
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Finire il combattimento in sospeso contro {boss.bossBadName@0}",
                                                    EN:"Finish the pending fight against {boss.bossBadName@0}",ES:"Terminar el combate pendiente contra {boss.bossBadName@0}"
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
                            forActs:[2,3],
                            forMaps:[0,1],
                            type:"xpAndDeliver",
                            objective:{
                                EN:"Collect resources from map tokens or a fixed amount depending on the eliminated enemy type. Reach a resource quota and perform an action on a zone to win.",ES:"Recoge recursos de marcadores del mapa o una cantidad fija según el tipo de enemigo eliminado. Alcanza una cuota de recursos y realiza una acción en una zona para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Collezionista di Anime\"",
                                EN:"Inspired by the Hellscape quest \"The Soul Collector\"",ES:"Inspirado en la misión de Hellscape \"El Coleccionista de Almas\"",
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                gate:[
                                                    {
                                                        IT:[ "i", "cancelli", "che portano",  "sono sbarrati da", "il", "cancello", "Zona del Cancello" ],
                                                        EN:[ "the", "gates", "leading", "are barred by", "the", "gate", "Zone of the Gate" ],ES:[ "las", "Puertas", "que conducen", "están cerradas con barrotes por", "la", "Puerta", "Zona de la Puerta" ]
                                                    },{
                                                        IT:[ "i", "portali", "che conducono", "sono tenuti ben saldi da", "il", "portale", "Zona del Portale" ],
                                                        EN:[ "the", "portals", "leading", "are held firmly by", "the", "portal", "Zone of the Portal" ],ES:[ "los", "Portales", "que conducen", "son mantenidos firmemente cerrados por", "el", "Portal", "Zona del Portal" ]
                                                    },{
                                                        IT:[ "il", "ponte", "che ci permetterebbe di proseguire", "&egrave; bloccato da", "il", "ponte", "Zona del Ponte" ],
                                                        EN:[ "the", "bridge", "that would allow us to continue", "is blocked by", "the", "bridge", "Zone of the Bridge" ],ES:[ "el", "puente", "que nos permitiría continuar", "está bloqueado por", "el", "puente", "Zona del Puente" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "alla", "Valle degli Spiriti", "entrare nella", "nella" ],
                                                        EN:[ "to the", "Spirit Valley", "enter into", "in the" ],ES:[ "hacia el", "Valle de los Espíritus", "entrar en el", "en el" ]
                                                    },{
                                                        IT:[ "verso la", "Capitale degli Antichi", "entrare nella", "nella" ],
                                                        EN:[ "towards the", "Capital of the Ancients", "enter the", "in the" ],ES:[ "hacia la", "Capital de los Antiguos", "entrar en la", "en la" ],
                                                    },{
                                                        IT:[ "verso le", "Scogliere Tempestose", "raggiungere le", "sulle" ],
                                                        EN:[ "toward the", "Stormy Cliffs", "reach the", "on the" ],ES:[ "hacia los", "Acantilados Tormentosos", "alcanzar los", "en los" ],
                                                    }
                                                ],
                                                block:[
                                                    {
                                                        IT:[ "un'Interdizione Demoniaca", "deve essere disattivata con un'offerta in Anime...", "Ma raccogliere qualcosa di effimero come un'anima pu&ograve; essere un'impresa complicata...", "raccogliere", "le", "anime", "anima", "le", "Prigioni delle Anime", "delle", "di" , "l'Interdizione", "dalla", "distruzione", "distrutto", "distruggerli", "distrutti", "a distruggere", "distruggendo", "tutte le" ],
                                                        EN:[ "a Demonic Ward", "must be deactivated with an offering in Souls...", "But collecting something as ephemeral as a soul can be a tricky business...", "collect", "the", "souls", "soul", "the", "Souls Prisons", "of", "of", "the Interdiction", "from the", "destruction", "destroyed", "destroy them", "destroyed", "to destroy", "destroying", "all the" ],ES:[ "una Interdicción Demoníaca", "debe desactivarse con una ofrenda de Almas...", "Pero recoger algo tan efímero como un alma puede ser complicado...", "recoger", "las", "almas", "alma", "las", "Prisiones de las Almas", "de", "de", "la Interdicción", "de la", "destrucción", "destruido", "destruirlo", "destruidas", "a destruir", "destruyendo", "todas las" ]
                                                    },{
                                                        IT:[ "un Grande Guardiano", "deve essere convinto del nostro eroismo...", "Ma dimostrarlo potrebbe essere molto pericoloso...", "raccogliere", "i", "trofei", "trofeo", "le", "Icone del Male", "dei", "di" , "il Custode", "dalla", "distruzione", "distrutte", "distruggerle", "distrutte", "a distruggere", "distruggendo", "tutte le" ],
                                                        EN:[ "a Great Guardian", "must be convinced of our heroism...", "But proving it could be very dangerous...", "collect", "the", "trophies", "trophy", "the", "Icons of Evil", "of", "of", "the Keeper", "from the", "destruction", "destroyed", "destroy them", "destroyed", "to destroy", "destroying", "all the" ],ES:[ "un Gran Guardián", "debe ser convencido de nuestro heroísmo...", "Pero demostrarlo podría ser muy peligroso...", "recoger", "los", "trofeos", "trofeo", "los", "Iconos del Mal", "de", "de", "el Custodio", "de la", "destrucción", "destruido", "destruirlo", "destruidos", "a destruir", "destruyendo", "todos los" ]
                                                    },{
                                                        IT:[ "una Guardia Corrotta", "deve essere convinta a collaborare con un bel sacco di monete...", "Ma trovare dell'oro, da queste parti, pu&ograve; costarci la vita...", "raccogliere", "le", "monete", "moneta", "i", "Forzieri", "delle", "di" , "la Guardia", "dall'", "apertura", "aperto", "aprirli", "aperti", "ad aprire", "aprendo", "tutti i" ],
                                                        EN:[ "a Corrupt Guard", "must be convinced to collaborate with a nice bag of coins...", "But finding gold in these parts can cost us our lives...", "collect" , "the", "coins", "coin", "the", "Chests", "of", "of" , "the Guard", "from the", "opening", "open", "open them" , "opened", "to open", "opening", "all the" ],ES:[ "una Guardia Corrupta", "debe ser convencida de colaborar con un buen saco de monedas...", "Pero encontrar oro por esta zona puede costarnos la vida...", "recoger", "las", "monedas", "moneda", "los", "Cofres", "de", "de", "la Guardia", "de la", "apertura", "abierto", "abrirlo", "abiertos", "a abrir", "abriendo", "todos los" ]
                                                    }
                                                ],
                                                toGoOn:[
                                                    {
                                                        IT:[ "Per arrivare a destinazione," ],
                                                        EN:[ "To get to your destination," ],ES:[ "Para llegar a vuestro destino," ]
                                                    },{
                                                        IT:[ "Per poter proseguire," ],
                                                        EN:[ "To continue," ],ES:[ "Para poder continuar," ]
                                                    },{
                                                        IT:[ "Se vogliamo proseguire il nostro viaggio" ],
                                                        EN:[ "If we want to continue our journey" ],ES:[ "Si queremos continuar nuestro viaje" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectMoreItems:[
                                                    {
                                                        IT:[ 15, "{label.block:capital@5}", "{label.block:capital@5} per ogni Eroe" ],
                                                        EN:[ 15, "{label.block:capital@5}", "{label.block:capital@5} for each Hero" ],ES:[ 15, "{label.block:capital@5}", "{label.block:capital@5} por cada Héroe" ]
                                                    }
                                                ],
                                                collectAllItems:[
                                                    {
                                                        IT:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}" ],
                                                        EN:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}"],ES:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Il Collezionista {label.block@10} {label.block:capital@5}",
                                            EN:"The {label.block:capital@5} Collector",ES:"El Coleccionista {label.block@10} {label.block:capital@5}"
                                        },{
                                            EN:"{label.block:capital@4} {label.block:capital@5}",ES:"{label.block:capital@4} {label.block:capital@5}"
                                        },{
                                            EN:"{label.block:capital@7} {label.block:capital@8}",ES:"{label.block:capital@7} {label.block:capital@8}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.gate:capital@0} {label.gate@1} {label.gate@2} {label.destination@0} {label.destination@1} {label.gate@3} {label.block@0}. {label.toGoOn@0} {label.block@11} {label.block@1} {label.block@2}",ES:"{label.gate:capital@0} {label.gate@1} {label.gate@2} {label.destination@0} {label.destination@1} {label.gate@3} {label.block@0}. {label.toGoOn@0} {label.block@11} {label.block@1} {label.block@2}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",ES:"Completa los objetivos en el orden indicado:"
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
                                                        EN:"{label.block:capital@3} {label.block@4} {label.block:capital@5}",ES:"{label.block:capital@3} {label.block@4} {label.block:capital@5}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere 10 {label.block:capital@5} per ogni Eroe",
                                                        EN:"Collect 10 {label.block:capital@5} for each Hero",ES:"Recoger 10 {label.block:capital@5} por cada Héroe"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.destination:capital@2} {label.destination@1}",ES:"{label.destination:capital@2} {label.destination@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Gli Eroi devono uscire dal Dungeon attraverso {label.gate@4} {label.gate:capital@5}",
                                                        EN:"Heroes must exit the Dungeon through {label.gate@4} {label.gate:capital@5}",ES:"Los Héroes deben salir de la Mazmorra a través de {label.gate@4} {label.gate:capital@5}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block:capital@3} {label.block@4} {label.block:capital@5}",ES:"{label.block:capital@3} {label.block@4} {label.block:capital@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.block:capital@4} {label.block:capital@5} provengono dall'uccisione dei Nemici e {label.block@12} {label.block@13} dei segnalini Obiettivo. Gli Eroi raccolgono 1 {label.block:capital@6} per ogni Gregario o Comandante ucciso da un Eroe. Ogni Mostro Errante conferisce agli Eroi 3 {label.block:capital@5} quando viene ucciso. I segnalini Obiettivo rappresentano {label.block@7} {label.block@8} e conferiscono 5 {label.block:capital@5} quando {label.block@16}. Collocate i segnalini Salute sulla {label.gate@6} (indicata dal segnalino Obiettivo grigio) per tenere il conto {label.block@9} {label.block:capital@5} che avete raccolto.",
                                                        EN:"{label.block:capital@4} {label.block:capital@5} come from killing Enemies and {label.block@12} {label.block@13} of the Objective tokens. Heroes collect 1 {label.block:capital@6} for each Minion or Leader killed by a Hero. Each Roaming Monster grants Heroes 3 {label.block:capital@5} when killed. Objective tokens represent {label.block@7} {label.block@8} and grant 5 {label.block:capital@5} when {label.block@16}. Place Health tokens on the {label.gate@6} (indicated by the gray Objective token) to hold the account {label.block@9} {label.block:capital@5} that you have raised.",ES:"{label.block:capital@4} {label.block:capital@5} provienen de matar Enemigos y de {label.block@12} {label.block@13} de los marcadores de Objetivo. Los Héroes recogen 1 {label.block:capital@6} por cada Secuaz o Líder matado por un Héroe. Cada Monstruo Errante concede a los Héroes 3 {label.block:capital@5} al morir. Los marcadores de Objetivo representan {label.block@7} {label.block@8} y conceden 5 {label.block:capital@5} cuando {label.block@16}. Coloca marcadores de Salud en la {label.gate@6} (indicada por el marcador de Objetivo gris) para llevar la cuenta {label.block@9} {label.block:capital@5} que hayas recogido."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block@8}",ES:"{label.block@8}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. L'Eroe che l'ha {label.block@14} ottiene 5 PE e gli Eroi raccolgono 5 {label.block:capital@5}.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Hero who has {label.block@14} it gets 5 XP and the Heroes collect 5 {label.block:capital@5}.",ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.block@7} {label.block@8}. Cualquier Héroe que se encuentre en la misma Zona que un marcador de Objetivo puede gastar 1 acción para {label.block@15}. Retira el marcador de la Mazmorra. El Héroe que lo ha {label.block@14} obtiene 5 PE y los Héroes recogen 5 {label.block:capital@5}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. Gli Eroi raccolgono 5 {label.block:capital@5} e ogni Eroe ottiene 5 PE.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Heroes collect 5 {label.block:capital@5} and all Heroes gets 5 XP.",ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.block@7} {label.block@8}. Cualquier Héroe que se encuentre en la misma Zona que un marcador de Objetivo puede gastar 1 acción para {label.block@15}. Retira el marcador de la Mazmorra. Los Héroes recogen 5 {label.block:capital@5} y todos los Héroes ganan 5 PE."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. Gli Eroi raccolgono 5 {label.block:capital@5} e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} PE.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Heroes collect 5 {label.block:capital@5} and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} XP.",ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.block@7} {label.block@8}. Cualquier Héroe que se encuentre en la misma Zona que un marcador de Objetivo puede gastar 1 acción para {label.block@15}. Retira el marcador de la Mazmorra. Los Héroes recogen 5 {label.block:capital@5} y todos los Héroes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} PE."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.destination:capital@2} {label.destination@1}",ES:"{label.destination:capital@2} {label.destination@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena gli Eroi possiedono un totale di 10 {label.block:capital@5} per Eroe, possono uscire dal Dungeon attraverso {label.gate@4} {label.gate:capital@5}: un Eroe che si trova nella {label.gate@6} pu&ograve; spendere 1 PM per uscire dal Dungeon. Non appena tutti gli Eroi sono usciti dal Dungeon, {label.questVictory@0}.",
                                                        EN:"As soon as the Heroes have a total of 10 {label.block:capital@5} per Hero, they can exit the Dungeon through {label.gate@4} {label.gate:capital@5}: a Hero in the {label.gate@6} can spend 1 MP to exit the Dungeon. As soon as all Heroes have exited the Dungeon, {label.questVictory@0}.",ES:"En cuanto los Héroes tengan un total de 10 {label.block:capital@5} por Héroe, podrán salir de la Mazmorra a través de {label.gate@4} {label.gate:capital@5}: un Héroe que se encuentre en la {label.gate@6} puede gastar 1 PM para salir de la Mazmorra. En cuanto todos los Héroes hayan salido de la Mazmorra, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom", "roamingToRoom" ],
                                            gameMode: [ "xpAndDeliver" ],
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
                                                { tags:[
                                                    [ "visitAllRooms", "collectMoreItems", "collectAllItems" ]
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, che attende gli Eroi {label.destination@3} {label.destination@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, waiting the Heroes {label.destination@3} {label.destination@1}",ES:"Elimina a {boss.bossBadName@0}, que espera a los Héroes {label.destination@3} {label.destination@1}",
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
                            forActs:[0],
                            forMaps:[0,1],
                            type:"collect",
                            objective:{
                                EN:"Collect all tokens and perform an action on a zone to win.",ES:"Recoge todos los marcadores y realiza una acción en una zona para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Via per Hellscape\"",
                                EN:"Inspired by the Hellscape quest \"Highway to Hellscape\"",ES:"Inspirado en la misión de Hellscape \"La Vía hacia Hellscape\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                reason:[
                                                    { 
                                                        IT:"La proliferazione dei portali attorno la capitale lascia credere",
                                                        EN:"The proliferation of portals around the capital suggests",ES:"La proliferación de portales alrededor de la capital hace pensar"
                                                    },{
                                                        IT:"I misteriosi rapimenti accaduti nei villaggi vicini suggeriscono",
                                                        EN:"The mysterious kidnappings that occurred in the nearby villages suggest",ES:"Los misteriosos secuestros ocurridos en las aldeas cercanas sugieren"
                                                    },{
                                                        IT:"Gli incendi scoppiati misteriosamente nelle foreste suggeriscono",
                                                        EN:"The fires that mysteriously broke out in the forests suggest",ES:"Los incendios que estallaron misteriosamente en los bosques sugieren"
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:"sia stato commesso qualche orrendo sacrificio",
                                                        EN:"some horrendous sacrifice has been committed",ES:"que se ha cometido algún sacrificio horrendo"
                                                    },{
                                                        IT:"si stia diffondendo un traffico illegale",
                                                        EN:"illegal trafficking is spreading",ES:"que se está extendiendo un tráfico ilegal"
                                                    },{
                                                        IT:"ci sia sotto qualcosa di losco",
                                                        EN:"there's something fishy going on",ES:"que hay algo turbio detrás de todo esto"
                                                    }
                                                ],
                                                planb:[
                                                    {
                                                        IT:"Non possiamo fare niente al riguardo, ma forse potremmo trarre vantaggio dalla situazione.",
                                                        EN:"We can't do anything about it, but maybe we could take advantage of the situation.",ES:"No podemos hacer nada al respecto, pero quizá podríamos sacar partido de la situación."
                                                    },{
                                                        IT:"Nessuno &egrave; disposto a rischiare per porre fine alla questione. Eccetto noi.",
                                                        EN:"No one is willing to take risks to put an end to the matter. Except us.",ES:"Nadie está dispuesto a arriesgarse para poner fin al asunto. Excepto nosotros."
                                                    },{
                                                        IT:"Bisogna fare qualcosa. E in fretta.",
                                                        EN:"Something must be done. And quickly.",ES:"Hay que hacer algo. Y rápido."
                                                    }
                                                ],
                                                solution:[
                                                    {
                                                        IT:[
                                                            "c'&egrave; qualcosa che ci potrebbe condurre al Regno Oscuro",
                                                            "Potremmo portare la battaglia a casa del nemico stavolta",
                                                            "Entrare nel Regno Oscuro",
                                                            "Oscurit&agrave; Rivelata",
                                                            "Attraversare"
                                                        ],
                                                        EN:[
                                                            "there is something that could lead to the Dark Realm",
                                                            "We could bring the fight to our enemies home this time",
                                                            "Entering the Darkness",
                                                            "Revealed Darkness",
                                                            "Enter"
                                                        ],ES:[ "hay algo que podría conducirnos al Reino Oscuro", "Esta vez podríamos llevar la batalla a casa del enemigo", "Entrar en el Reino Oscuro", "Oscuridad Revelada", "Cruzar" ]
                                                    },{
                                                        IT:[
                                                            "potremmo trovare qualche indizio",
                                                            "Riusciremmo finalmente incastrare i responsabili una volta per tutte",
                                                            "Entrare nel nascondiglio",
                                                            "Nascondiglio Rivelato",
                                                            "Entrare attraverso"
                                                        ],
                                                        EN:[
                                                            "there is something that could lead to the Hell Realm",
                                                            "We could finally be able to stop those responsible once and for all",
                                                            "Entering the Hideout",
                                                            "Revealed Hideout",
                                                            "Enter"
                                                        ],ES:[ "hay algo que podría conducirnos al Reino Infernal", "Por fin podríamos detener a los responsables de una vez por todas", "Entrar en el Escondite", "Escondite Revelado", "Entrar a través de" ]
                                                    },{
                                                        IT:[
                                                            "potremmo scoprire la verit&agrave;",
                                                            "Potremmo svelare il mistero",
                                                            "Scoprire la Verit&agrave;",
                                                            "Verit&agrave; Rivelata",
                                                            "Analizzare"
                                                        ],
                                                        EN:[
                                                            "we could discover the truth",
                                                            "We could reveal this mystery",
                                                            "Uncovering the Truth",
                                                            "Truth Revealed",
                                                            "Investigate"
                                                        ],ES:[ "podríamos descubrir la verdad", "Podríamos desvelar el misterio", "Descubrir la Verdad", "Verdad Revelada", "Analizar" ]
                                                    }
                                                ],
                                                block:[
                                                    {
                                                        IT:"il Cancello",
                                                        EN:"the Gate",ES:"la Puerta"
                                                    },{
                                                        IT:"il Passaggio",
                                                        EN:"the Passage",ES:"el Pasadizo"
                                                    },{
                                                        IT:"l'Inferriata",
                                                        EN:"the Railing",ES:"la Reja"
                                                    }
                                                ],
                                                unblock:[
                                                    {
                                                        IT:[ "interruttore", "interruttori", "gli interruttori sono rappresentati", "attivare", "attivare almeno", "ad attivare tutti gli", "attivando" ],
                                                        EN:[ "switch", "switches", "the switches are represented", "activate", "activate at least", "to activate all the", "activating" ],ES:[ "interruptor", "interruptores", "los interruptores están representados", "activar", "activar al menos", "a activar todos los", "activando" ],
                                                    },{
                                                        IT:[ "candela", "candele", "le candele sono rappresentate", "accendere", "accendere almeno", "ad accendere tutte le", "accendendo" ],
                                                        EN:[ "candle", "candles", "the candles are represented", "light", "light at least", "to light all the", "lighting" ],ES:[ "vela", "velas", "las velas están representadas", "encender", "encender al menos", "a encender todas las", "encendiendo" ],
                                                    },{
                                                        IT:[ "leva", "leve", "le leve sono rappresentate", "tirare", "tirare almeno", "a tirare tutte le", "tirando" ],
                                                        EN:[ "lever", "levers", "the levers are represented", "pull", "pull at least", "to pull all the", "pulling" ],ES:[ "palanca", "palancas", "las palancas están representadas", "tirar de", "tirar de al menos", "a tirar de todas las", "tirando de" ]
                                                    }
                                                ],
                                                escapeTo:[
                                                    {
                                                        IT:[ "il portale", "Il Portale" ],
                                                        EN:[ "the portal", "The Portal" ],ES:[ "el portal", "El Portal" ]
                                                    },{
                                                        IT:[ "la botola", "Il Passaggio" ],
                                                        EN:[ "the trapdoor", "The Passage" ],ES:[ "la trampilla", "La Trampilla" ]
                                                    },{
                                                        IT:[ "la galleria", "La Galleria" ],
                                                        EN:[ "the tunnel", "The Tunnel" ],ES:[ "el túnel", "El Túnel" ]
                                                    }
                                                ],
                                                crazy:[
                                                    {
                                                        IT:[ "per quanto l'idea possa sembrare folle." ],
                                                        EN:[ "as crazy as it may sound."],ES:[ "por muy loca que suene la idea." ]
                                                    },{
                                                        IT:[ "anche se potrebbe costarci caro." ],
                                                        EN:[ "even if it could cost us dearly."],ES:[ "aunque pueda costarnos caro." ]
                                                    },{
                                                        IT:[ "anche se non crediamo ci sia molta altra scelta." ],
                                                        EN:[ "although we don't think there is much choice."],ES:[ "aunque no creemos que haya mucha más opción." ]
                                                    }
                                                ],
                                                somewhere:[
                                                    {
                                                        IT:[ "Forse da queste parti" ],
                                                        EN:[ "Maybe around here," ],ES:[ "Quizá por aquí," ]
                                                    },{
                                                        IT:[ "Siamo sicuri che qui in giro" ],
                                                        EN:[ "We're sure around here" ],ES:[ "Estamos seguros de que por aquí" ]
                                                    },{
                                                        IT:[ "Ci &egrave; stato detto che qui intorno" ],
                                                        EN:[ "We've been told that around here" ],ES:[ "Nos han dicho que por aquí" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                actionSameTime:[
                                                    {
                                                        IT:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ],
                                                        EN:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ],ES:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ]
                                                    }
                                                ],
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}" ],
                                                        EN:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}"],ES:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.solution:capital@2}",ES:"{label.solution:capital@2}"
                                        },{
                                            IT:"{label.escapeTo:capital@0} Dietro {label.block:capital}",
                                            EN:"{label.escapeTo:capital@0} Behind {label.block:capital}",ES:"{label.escapeTo:capital@0} Tras {label.block}"
                                        },{
                                            EN:"{label.solution:capital@3}",ES:"{label.solution:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.reason} che {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}",
                                            EN:"{label.reason} that {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}",ES:"{label.reason} que {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",ES:"Completa los objetivos en el orden indicado:"
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
                                                        IT:"Aprire {label.block}",
                                                        EN:"Open {label.block}",ES:"Abrir {label.block}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}",
                                                        EN:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}",ES:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.solution@2}",ES:"{label.solution@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.solution@4} {label.escapeTo@0}",
                                                        EN:"{label.solution@4} {label.escapeTo@0}",ES:"{label.solution@4} {label.escapeTo@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block:capital}",ES:"{label.block:capital}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.block:capital} (la porta con il bordo rosso) consente ai Nemici di passare: i Nemici possono muoversi liberamente attraverso questa porta. Al fine di aprire {label.block}, gli Eroi devono {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} blocca la Linea di Vista.",
                                                        EN:"{label.block:capital} (the door with the red outline) allows the Enemies to pass through: Enemies can move freely through this door. To open {label.block}, Heroes must {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} blocks the Line of Sight.",ES:"{label.block:capital} (la puerta con el contorno rojo) permite el paso de los Enemigos: los Enemigos pueden moverse libremente a través de esta puerta. Para abrir {label.block}, los Héroes deben {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} bloquea la Línea de Visión.",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Aprire {label.block}",
                                                        EN:"Open {label.block}",ES:"Abrir {label.block}",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo e rimuoverlo dal Dungeon. L'Eroe che lo fa ottiene 3 PE.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token and remove it from the Dungeon. The Hero who does so gains 3 XP.",ES:"{label.unblock:capital@2} mediante marcadores de Objetivo con el lado de color hacia arriba. Cualquier Héroe que se encuentre en una Zona con uno de estos marcadores de Objetivo puede gastar 1 PM para interactuar con el marcador de Objetivo y retirarlo de la Mazmorra. El Héroe que lo hace obtiene 3 PE."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo e rimuoverlo dal Dungeon.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token and remove it from the Dungeon.",ES:"{label.unblock:capital@2} mediante marcadores de Objetivo con el lado de color hacia arriba. Cualquier Héroe que se encuentre en una Zona con uno de estos marcadores de Objetivo puede gastar 1 PM para interactuar con el marcador de Objetivo y retirarlo de la Mazmorra."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo per rimuoverlo dal Dungeon e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token, remove it from the Dungeon, and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP",ES:"{label.unblock:capital@2} mediante marcadores de Objetivo con el lado de color hacia arriba. Cualquier Héroe que se encuentre en una Zona con uno de estos marcadores de Objetivo puede gastar 1 PM para interactuar con el marcador de Objetivo, retirarlo de la Mazmorra, y todos los Héroes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.solution@3}",ES:"{label.solution@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.collectOptionalItems@2} segnalini Obiettivo con il lato colorato a faccia in su vengono rimossi, {label.block} si apre. Girare il segnalino Porta evidenziato con il bordo rosso sul lato aperto e rivelare la Camera come di consueto.",
                                                        EN:"As soon as {label.collectOptionalItems@2} Objective tokens with the colored side up are removed, {label.block} opens. Flip the Door token highlighted with the red outline to its open side and reveal the Chamber as normal.",ES:"En cuanto se retiren {label.collectOptionalItems@2} marcadores de Objetivo con el lado de color hacia arriba, {label.block} se abre. Da la vuelta al marcador de Puerta resaltado con el contorno rojo a su lado abierto y revela la Cámara con normalidad."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.solution@2}",ES:"{label.solution@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Qualsiasi Eroe sulla Zona contrassegnata dal segnalino Obiettivo grigio pu&ograve; spendere 1 PM per uscire dal Dungeon. Una volta che tutti gli Eroi sono usciti, {label.questVictory@0}.",
                                                        EN:"Any Hero in the Area marked with the gray Objective token can spend 1 MP to exit the Dungeon. Once all the Heroes have exited, {label.questVictory@0}.",ES:"Cualquier Héroe en la Zona marcada con el marcador de Objetivo gris puede gastar 1 PM para salir de la Mazmorra. Una vez que todos los Héroes hayan salido, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "unlockAndActivate" ],
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
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItems", "actionSameTime" ]
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare Colui Che Attende Oltre {label.escapeTo@1}",
                                                    EN:"Eliminate The One Who Waits Beyond {label.escapeTo@1}",ES:"Eliminar a Aquel Que Espera Más Allá de {label.escapeTo@1}",
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
                            type:"tyrant",
                            objective:{
                                EN:"Use an item to make a Roaming Monster vulnerable and eliminate it to win.",ES:"Usa un objeto para hacer vulnerable a un Monstruo Errante y elimínalo para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Bestia dell'Orrore\"",
                                EN:"Inspired by the Hellscape quest \"The Horror Beast\"",ES:"Inspirado en la misión de Hellscape \"La Bestia del Horror\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                incipit:[
                                                    {
                                                        IT:[ "Secondo molte leggende," ],
                                                        EN:[ "According to the legends," ],ES:[ "Según muchas leyendas," ]
                                                    },{
                                                        IT:[ "Abbiamo scoperto che" ],
                                                        EN:[ "We discovered that" ],ES:[ "Descubrimos que" ]
                                                    },{
                                                        IT:[ "In citt&agrave; si dice che" ],
                                                        EN:[ "In the city, it is said that" ],ES:[ "En la ciudad se dice que" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT: [ "una", "Bestia Arcana", "la", "Bestia", "della", "sulla", "alla", "ucciderla", "ucciderla", "uccisa" ],
                                                        EN: [ "an", "Arcane Beast", "the", "Beast", "the", "on the", "on the", "killing it", "kill it", "killed" ],ES:[ "una", "Bestia Arcana", "la", "Bestia", "de la", "sobre la", "a la", "matarla", "matarla", "eliminada" ]
                                                    },{
                                                        IT: [ "una", "Creatura Corrotta", "la", "Creatura", "della", "sulla", "alla", "ucciderla", "ucciderla", "uccisa" ],
                                                        EN: [ "a", "Corrupted Creature", "the", "Creature", "the", "on the", "on the", "killing it", "kill it", "killed" ],ES:[ "una", "Criatura Corrupta", "la", "Criatura", "de la", "sobre la", "a la", "matarla", "matarla", "eliminada" ]
                                                    },{
                                                        IT: [ "un", "Essere Perduto", "l'", "Essere", "dell'", "sull'", "all'", "ucciderlo", "ucciderlo", "ucciso" ],
                                                        EN: [ "a", "Lost Being", "the", "Being", "the", "on the", "on the", "killing it", "kill it", "killed" ],ES:[ "un", "Ser Perdido", "el", "Ser", "del", "sobre el", "al", "matarlo", "matarlo", "eliminado" ]
                                                    }
                                                ],
                                                doing:[
                                                    {
                                                        IT:[ "si aggira nei meandri del Regno Oscuro" ],
                                                        EN:[ "wanders in the depths of the Dark Realm" ],ES:[ "vaga por las profundidades del Reino Oscuro" ]
                                                    },{
                                                        IT:[ "ha cominciato a cacciare nei foreste dei dintorni" ],
                                                        EN:[ "began hunting in the surrounding forests" ],ES:[ "empezó a cazar en los bosques cercanos" ]
                                                    },{
                                                        IT:[ "si sta pericolosamente avvicinando al villaggio" ],
                                                        EN:[ "is getting dangerously close to the village" ],ES:[ "se está acercando peligrosamente a la aldea" ]
                                                    }
                                                ],
                                                impossible:[
                                                    {
                                                        IT:[ "non esiste alcun mezzo mortale in grado di {label.enemy@7}" ],
                                                        EN:[ "there is no mortal means capable of {label.enemy@7}" ],ES:[ "no existe ningún medio mortal capaz de {label.enemy@7}" ]
                                                    },{
                                                        IT:[ "non sembra esistere alcun modo per {label.enemy@8}" ],
                                                        EN:[ "there doesn't seem to be any way to {label.enemy@8}" ],ES:[ "no parece haber ninguna forma de {label.enemy@8}" ]
                                                    },{
                                                        IT:[ "sembra essere invulnerabile" ],
                                                        EN:[ "appears to be invulnerable" ],ES:[ "parece ser invulnerable" ]
                                                    }
                                                ],
                                                fear:[
                                                    {
                                                        IT:[ "si tiene alla larga da alcune aree del suo territorio" ],
                                                        EN:[ "stays away from some areas of its territory" ],ES:[ "se mantiene alejada de algunas zonas de su territorio" ]
                                                    },{
                                                        IT:[ "sembra fugga da alcune aree" ],
                                                        EN:[ "seemed to escape from some areas" ],ES:[ "parecía huir de algunas zonas" ]
                                                    },{
                                                        IT:[ "sta evitando alcune zone specifiche" ],
                                                        EN:[ "avoids some specific areas" ],ES:[ "está evitando algunas zonas concretas" ]
                                                    },
                                                ],
                                                investigate:[
                                                    {
                                                        IT:[ "Indagando, abbiamo scoperto che queste aree sono disseminate di" ],
                                                        EN:[ "Upon investigation, we discovered that these areas are littered with" ],ES:[ "Al investigar, descubrimos que esas zonas están sembradas de" ]
                                                    },{
                                                        IT:[ "In queste aree, alcune pattuglie hanno trovato mucchi di" ],
                                                        EN:[ "There, some patrols found piles of" ],ES:[ "Allí, algunas patrullas encontraron montones de" ]
                                                    },{
                                                        IT:[ "Queste zone sono rinomate per avere una grande concentrazione di" ],
                                                        EN:[ "These areas are renowned for having a large concentration of" ],ES:[ "Esas zonas son conocidas por tener una gran concentración de" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Anche se non abbiamo tempo per risolvere l'enigma della loro presenza" ],
                                                        EN:[ "Even if we don't have time to solve the riddle of their presence" ],ES:[ "Aunque no tenemos tiempo para resolver el enigma de su presencia" ]
                                                    },{
                                                        IT:[ "I Saggi stanno indagando sulla questione ma non abbiamo tempo da pedere" ],
                                                        EN:[ "The Sages are investigating the matter but we have no time to waste" ],ES:[ "Los Sabios están investigando el asunto, pero no tenemos tiempo que perder" ]
                                                    },{
                                                        IT:[ "Non abbiamo abbastanza tempo per scoprire il motivo" ],
                                                        EN:[ "We don't have enough time to find out why" ],ES:[ "No tenemos tiempo suficiente para descubrir el motivo" ]
                                                    }
                                                ],
                                                item:[
                                                    {
                                                        IT:[ "Piuma Angeliche", "Piume Angeliche", "le", "una", "forse possiamo usare questi resti per indebolire la creatura" ],
                                                        EN:[ "Angelic Feather", "Angelic Feathers", "the", "an", "perhaps we can use these remains to weaken the hideous creature" ],ES:[ "Pluma Angelical", "Plumas Angelicales", "las", "una", "quizá podamos usar estos restos para debilitar a la horrenda criatura" ]
                                                    },{
                                                        IT:[ "Scaglia Draconiche", "Scaglie Draconiche", "le", "una", "forse possiamo usarle a nostro vantaggio" ],
                                                        EN:[ "Draconic Scale", "Draconic Scales", "the", "a", "perhaps we can use them to our advantage" ],ES:[ "Escama Dracónica", "Escamas Dracónicas", "las", "una", "quizá podamos usarlas a nuestro favor" ]
                                                    },{
                                                        IT:[ "Pietra Cinerea", "Pietre Cineree", "le", "una", "forse possiamo incendiarle per rendere vulnerabile la creature" ],
                                                        EN:[ "Ashen Stone", "Ashen Stones", "the", "an", "perhaps we can set them on fire to make the creature vulnerable" ],ES:[ "Piedra de Ceniza", "Piedras de Ceniza", "las", "una", "quizá podamos prenderles fuego para hacer vulnerable a la criatura" ]
                                                    }
                                                ],
                                                luckily:[
                                                    {
                                                        IT:[ "Fortunatamente," ],
                                                        EN:[ "Luckily," ],ES:[ "Por suerte," ]
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto:" ],
                                                        EN:[ "But not everything is lost:" ],ES:[ "Pero no todo está perdido:" ]
                                                    },{
                                                        IT:[ "I ranger, per&ograve;, hanno scoperto uno strano comportamento:" ],
                                                        EN:[ "The rangers, however, discovered strange behavior:" ],ES:[ "Sin embargo, los guardabosques descubrieron un comportamiento extraño:" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectLessItems:[
                                                    {
                                                        IT:[ "a usare meno {label.item@1}", "collocando solo {label.collectLessItems@2} {label.item@1}" ],
                                                        EN:[ "to place less {label.item@1}", "placing {label.collectLessItems@2} {label.item@1} only" ],ES:[ "a colocar menos {label.item@1}", "colocando solo {label.collectLessItems@2} {label.item@1}" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.enemy@2} {label.enemy@3} dell'Orrore",
                                            EN: "The Horror {label.enemy@3}",ES:"{label.enemy@3} del Horror"
                                        },{
                                            EN: "{label.item@2} {label.item@1}",ES:"{label.item@2} {label.item@1}"
                                        },{
                                            IT: "{label.enemy@2} {label.enemy@3} e {label.item@2} {label.item@1}",
                                            EN: "{label.enemy@2} {label.enemy@3} and {label.item@2} {label.item@1}",ES:"{label.enemy@2} {label.enemy@3} y {label.item@2} {label.item@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} e {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}.",
                                            EN:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} and {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}.",ES:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} y {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}.",
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
                                                        IT:"Sconfiggere {label.enemy@2} {label.enemy@3}",
                                                        EN:"Defeat {label.enemy@2} {label.enemy@3}",ES:"Derrotar a {label.enemy@2} {label.enemy@3}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.item@2} {label.item@1} per rendere {label.enemy@2} {label.enemy@3} vulnerabile, e poi ucciderla.",
                                                        EN:"Use {label.item@2} {label.item@1} to make {label.enemy@2} {label.enemy@3} vulnerable, and then kill it.",ES:"Usar {label.item@2} {label.item@1} para hacer vulnerable a {label.enemy@2} {label.enemy@3}, y luego {label.enemy@8}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy:capital@2} {label.enemy@3}",ES:"{label.enemy:capital@2} {label.enemy@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, generate un Mostro Errante casuale di Livello 5 nella Zona indicata: si tratta {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} viene attivata normalmente durante ogni Fase dei Nemici, ma &egrave; invulnerabile: non pu&ograve; essere bersagliata da nessun attacco, abilit&agrave; o capacit&agrave; e non pu&ograve; subire Ferite.",
                                                        EN:"During setup, spawn a random Level 5 Roaming Monster in the indicated Area: it is {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is activated normally during each Enemy Phase, but is invulnerable: it cannot be targeted by any attack, ability, or capability and cannot suffer Wounds.",ES:"Durante la preparación, genera un Monstruo Errante aleatorio de nivel 5 en la Zona indicada: se trata {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} se activa con normalidad durante cada Fase de los Enemigos, pero es invulnerable: no puede ser objetivo de ningún ataque, habilidad o capacidad, ni sufrir Heridas."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Durante la preparazione, generate {label.campaignBoss@0} nella Zona indicata: si tratta {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} viene attivata normalmente durante ogni Fase dei Nemici, ma &egrave; invulnerabile: non pu&ograve; essere bersagliata da nessun attacco, abilit&agrave; o capacit&agrave; e non pu&ograve; subire Ferite.",
                                                        EN:"During setup, spawn {label.campaignBoss@0} in the indicated Area: it is {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is activated normally during each Enemy Phase, but is invulnerable: it cannot be targeted by any attack, ability, or capability and cannot suffer Wounds.",ES:"Durante la preparación, genera {label.campaignBoss@0} en la Zona indicada: se trata {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} se activa con normalidad durante cada Fase de los Enemigos, pero es invulnerable: no puede ser objetivo de ningún ataque, habilidad o capacidad, ni sufrir Heridas."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.item@1}",ES:"{label.item@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.item:capital@2} {label.item:capital@1} sono rappresentate dai segnalini Obiettivo. Qualsiasi Eroe che si trovi in una Zona con un segnalino Obiettivo pu&ograve; spendere 1 PM per interagire con quel segnalino e raccoglierlo (un Eroe pu&ograve; trasportarne pi&ugrave; di 1). Un Eroe che trasporta {label.item@3} {label.item@0} mentre si trova nella Zona {label.enemy@4} {label.enemy@3} pu&ograve; spendere 1 PM per collocare 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} &egrave; vulnerabile fintanto che su di essa c'&egrave; {label.item@3} {label.item@0}: gli Eroi possono attaccarla, usare le abilit&agrave; e le capacit&agrave; e infliggere Ferite {label.enemy@6} {label.enemy@3}. All'inizio di ogni round, rimuovete tutte {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, che diventa di nuovo invulnerabile.",
                                                        EN:"{label.item:capital@2} {label.item:capital@1} are represented by Objective tokens. Any Hero in a Zone with an Objective token can spend 1 MP to interact with that token and collect it (a Hero can carry more than 1). A Hero carrying {label.item@3} {label.item@0} while in {label.enemy@4} {label.enemy@3} Zone can spend 1 MP to place 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is vulnerable as long as there is {label.item@3} {label.item@0}: Heroes can attack it, use skills and abilities, and inflict Wounds {label.enemy@6} {label.enemy@3}. At the start of each round, remove all {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, which becomes invulnerable again.",ES:"{label.item:capital@2} {label.item:capital@1} están representadas por marcadores de Objetivo. Cualquier Héroe que se encuentre en una Zona con un marcador de Objetivo puede gastar 1 PM para interactuar con ese marcador y recogerlo (un Héroe puede llevar más de 1). Un Héroe que lleve {label.item@3} {label.item@0} mientras se encuentra en la Zona {label.enemy@4} {label.enemy@3} puede gastar 1 PM para colocar 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} es vulnerable mientras tenga {label.item@3} {label.item@0}: los Héroes pueden atacarla, usar habilidades y capacidades, e infligirle Heridas {label.enemy@6} {label.enemy@3}. Al principio de cada asalto, retira todas {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, que vuelve a ser invulnerable."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.item:capital@2} {label.item:capital@1} sono rappresentate dai segnalini Obiettivo. Qualsiasi Eroe che si trovi in una Zona con un segnalino Obiettivo pu&ograve; spendere 1 PM per interagire con quel segnalino, raccoglierlo (un Eroe pu&ograve; trasportarne pi&ugrave; di 1) e Tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Un Eroe che trasporta {label.item@3} {label.item@0} mentre si trova nella Zona {label.enemy@4} {label.enemy@3} pu&ograve; spendere 1 PM per collocare 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} &egrave; vulnerabile fintanto che su di essa c'&egrave; {label.item@3} {label.item@0}: gli Eroi possono attaccarla, usare le abilit&agrave; e le capacit&agrave; e infliggere Ferite {label.enemy@6} {label.enemy@3}. All'inizio di ogni round, rimuovete tutte {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, che diventa di nuovo invulnerabile.",
                                                        EN:"{label.item:capital@2} {label.item:capital@1} are represented by Objective tokens. Any Hero in a Zone with an Objective token can spend 1 MP to interact with that token, collect it (a Hero can carry more than 1), and All Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. A Hero carrying {label.item@3} {label.item@0} while in {label.enemy@4} {label.enemy@3} Zone can spend 1 MP to place 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is vulnerable as long as there is {label.item@3} {label.item@0}: Heroes can attack it, use skills and abilities, and inflict Wounds {label.enemy@6} {label.enemy@3}. At the start of each round, remove all {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, which becomes invulnerable again.",ES:"{label.item:capital@2} {label.item:capital@1} están representadas por marcadores de Objetivo. Cualquier Héroe que se encuentre en una Zona con un marcador de Objetivo puede gastar 1 PM para interactuar con ese marcador, recogerlo (un Héroe puede llevar más de 1), y todos los Héroes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Un Héroe que lleve {label.item@3} {label.item@0} mientras se encuentra en la Zona {label.enemy@4} {label.enemy@3} puede gastar 1 PM para colocar 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} es vulnerable mientras tenga {label.item@3} {label.item@0}: los Héroes pueden atacarla, usar habilidades y capacidades, e infligirle Heridas {label.enemy@6} {label.enemy@3}. Al principio de cada asalto, retira todas {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, que vuelve a ser invulnerable."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemy@2} {label.enemy@3}",
                                                        EN:"Defeat {label.enemy@2} {label.enemy@3}",ES:"Derrotar a {label.enemy@2} {label.enemy@3}",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.enemy@2} {label.enemy@3} viene {label.enemy@9}, {label.questVictory@0}.",
                                                        EN:"As soon as {label.enemy@2} {label.enemy@3} is {label.enemy@9}, {label.questVictory@0}.",ES:"En cuanto {label.enemy@2} {label.enemy@3} sea {label.enemy@9}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path" ],
                                            gameMode: [ "targets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "tyrant" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectLessItems" ]
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, mandante {label.enemy@4} {label.enemy@3}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.enemy@4} {label.enemy@3} instigator",ES:"Elimina a {boss.bossBadName@0}, instigador {label.enemy@4} {label.enemy@3}",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",ES:"<p>Retira todos los marcadores de Objetivo del inventario de los Héroes.</p>"
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
                            type:"hunt",
                            objective:{
                                EN:"Eliminate all special Roaming Monsters to win.",ES:"Elimina a todos los Monstruos Errantes especiales para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Labirinto Infernale\"",
                                EN:"Inspired by the Hellscape quest \"Hellish Maze\"",ES:"Inspirado en la misión de Hellscape \"Laberinto Infernal\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                incipit:[
                                                    {
                                                        IT:[ "Stando alle leggende," ],
                                                        EN:[ "According to legends,"],ES:[ "Según las leyendas," ]
                                                    },{
                                                        IT:[ "Si narra che" ],
                                                        EN:[ "It is said that"],ES:[ "Se dice que" ]
                                                    },{
                                                        IT:[ "Nei testi sacri si dice che" ],
                                                        EN:[ "In the sacred texts, it is said that"],ES:[ "En los textos sagrados se dice que" ]
                                                    }
                                                ],
                                                monsters:[
                                                    {
                                                        IT:[ "le", "Bestie Oscure", "delle", "le", "delle" ],
                                                        EN:[ "the", "Dark Beasts", "of the", "the", "of the" ],ES:[ "las", "Bestias Oscuras", "de las", "las", "de las" ]
                                                    },{
                                                        IT:[ "gli", "Esseri Corrotti", "degli", "i", "dei" ],
                                                        EN:[ "the", "Corrupted Ones", "of the", "the", "of the" ],ES:[ "los", "Corrompidos", "de los", "los", "de los" ]
                                                    },{
                                                        IT:[ "gli", "Eroi Caduti", "degli", "i", "dei" ],
                                                        EN:[ "the", "Fallen Heroes", "of the", "the", "of the" ],ES:[ "los", "Héroes Caídos", "de los", "los", "de los" ]
                                                    }
                                                ],
                                                roamingWay:[
                                                    {
                                                        IT:[ "vagano per" ],
                                                        EN:[ "wander" ],ES:[ "vagan por" ]
                                                    },{
                                                        IT:[ "pattugliano" ],
                                                        EN:[ "patrol" ],ES:[ "patrullan" ]
                                                    },{
                                                        IT:[ "controllano" ],
                                                        EN:[ "control" ],ES:[ "controlan" ]
                                                    }
                                                ],
                                                roamingPlace:[
                                                    {
                                                        IT:[ "un angolo oscuro del", "Reame della Morte" ],
                                                        EN:[ "in a dark corner of the", "Death Realm" ],ES:[ "en un rincón oscuro del", "Reino de la Muerte" ],
                                                    },{
                                                        IT:[ "le stanze delle", "Segrete Proibite" ],
                                                        EN:[ "the rooms of the", "Forbidden Dungeons" ],ES:[ "por las salas de las", "Mazmorras Prohibidas" ],
                                                    },{
                                                        IT:[ "i corridoi del", "Chiostro Maledetto" ],
                                                        EN:[ "among the corridors of the", "Cursed Cloister" ],ES:[ "por los pasillos del", "Claustro Maldito" ],
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "Si dice che chiunque riesca a sconfiggerle tutte" ],
                                                        EN:[ "It is said that anyone who can defeat them all" ],ES:[ "Se dice que quien logre derrotarlas a todas" ]
                                                    },{
                                                        IT:[ "Nessuno &egrave; mai riuscito a sconfiggerle tutte ma, nei testi antichi, si racconta che chi riuscir&agrave; a sconfiggerle" ],
                                                        EN:[ "No one has ever managed to defeat them all but, in ancient texts, it is said that those who will be able to defeat them all" ],ES:[ "Nadie ha logrado jamás derrotarlas a todas, pero en los textos antiguos se cuenta que quien logre derrotarlas a todas" ]
                                                    },{
                                                        IT:[ "Chi riuscir&agrave; a porre fine alla loro tormento" ],
                                                        EN:[ "Those who will be able to put an end to their torment" ],ES:[ "Quien logre poner fin a su tormento" ]
                                                    }
                                                ],
                                                prize:[
                                                    {
                                                        IT:[ "ricever&agrave; in dono un potere supremo" ],
                                                        EN:[ "will receive a gift of supreme power" ],ES:[ "recibirá el don de un poder supremo" ]
                                                    },{
                                                        IT:[ "sar&agrave; premiato con grandi fortune" ],
                                                        EN:[ "will be rewarded with great fortunes" ],ES:[ "será recompensado con grandes fortunas" ]
                                                    },{
                                                        IT:[ "sar&agrave; benedetto dagli dei" ],
                                                        EN:[ "will be blessed by the gods" ],ES:[ "será bendecido por los dioses" ]
                                                    }
                                                ],
                                                mystery:[
                                                    {
                                                        IT:[ "Ovviamente qui niente &egrave; mai quello che sembra..." ],
                                                        EN:[ "Obviously, nothing here is ever what it seems..." ],ES:[ "Obviamente, aquí nada es nunca lo que parece..." ],
                                                    },{
                                                        IT:[ "Ma, di sicuro, non sar&agrave; cos&igrave; semplice..." ],
                                                        EN:[ "But it certainly won't be that simple..." ],ES:[ "Pero desde luego no será tan sencillo..." ],
                                                    },{
                                                        IT:[ "Ma sembra tutto troppo semplice per essere vero..." ],
                                                        EN:[ "But it all seems too simple to be true..." ],ES:[ "Pero todo parece demasiado sencillo para ser verdad..." ],
                                                    }
                                                ],
                                                maze:[
                                                    {
                                                        IT:[ "Il Labirinto", "i passaggi magici", "Il Labirinto Incantato", "Magia" ],
                                                        EN:[ "The Maze", "the magic passages", "The Enchanted Maze", "Magic" ],ES:[ "El Laberinto", "los pasadizos mágicos", "El Laberinto Encantado", "Magia" ]
                                                    },{
                                                        IT:[ "Le Segrete", "i teletrasporti", "Le Segrete Sconnesse", "Teletrasporti" ],
                                                        EN:[ "The Dungeons", "the teleporters", "The Disconnected Dungeons", "Teleports" ],ES:[ "Las Mazmorras", "los teletransportadores", "Las Mazmorras Desconectadas", "Teletransportes" ]
                                                    },{
                                                        IT:[ "I Piani", "le scale", "Il Palazzo", "Scale" ],
                                                        EN:[ "The Floors", "the stairs", "The Palace", "Stairs" ],ES:[ "Los Pisos", "las escaleras", "El Palacio", "Escaleras" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                eliminateEnemy:[
                                                    {
                                                        IT:[ "2 o pi&ugrave; {label.monsters@1}" ],
                                                        EN:[ "2 or more {label.monsters@1}" ],ES:[ "2 o más {label.monsters@1}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.maze@2}",ES:"{label.maze@2}"
                                        },{
                                            EN: "{label.monsters:capital@0} {label.monsters:capital@1}",ES:"{label.monsters:capital@0} {label.monsters:capital@1}"
                                        },{
                                            EN: "{label.roamingPlace:capital@0} {label.roamingPlace:capital@1}",ES:"{label.roamingPlace:capital@0} {label.roamingPlace:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.incipit@0} {label.monsters@3} {tokensCount.corruption} {label.monsters@1} {label.roamingWay@0} {label.roamingPlace@0} {label.roamingPlace@1}. {label.objective@0} {label.prize@0}. {label.mystery@0}",ES:"{label.incipit@0} {label.monsters@3} {tokensCount.corruption} {label.monsters@1} {label.roamingWay@0} {label.roamingPlace@0} {label.roamingPlace@1}. {label.objective@0} {label.prize@0}. {label.mystery@0}"
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
                                                        IT:"Uccidere {label.monsters@0} {label.monsters@1}",
                                                        EN:"Kill {label.monsters@0} {label.monsters@1}",ES:"Matar a {label.monsters@0} {label.monsters@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere i {tokensCount.corruption} Mostri Erranti Speciali",
                                                        EN:"Kill the {tokensCount.corruption} Special Roaming Monsters",ES:"Matar a los {tokensCount.corruption} Monstruos Errantes Especiales"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.monsters:capital@0} {label.monsters:capital@1}",ES:"{label.monsters:capital@0} {label.monsters:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che una delle Camere con un segnalino Corruzione {symbol.corruptionToken} viene rivelata, in aggiunta ai consueti passi di rivelazione di una Camera, generate anche un Mostro Errante nella Zona indicata dal segnalino Corruzione in quella Camera. Questo Mostro Errante &egrave; 1 {label.monsters@2} {label.monsters@1}. Una volta che tutte e {tokensCount.corruption} {label.monsters@0} {label.monsters@1} sono state uccise, {label.questVictory@0}.",
                                                        EN:"Whenever one of the Chambers with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, you also spawn a Roaming Monster in the Zone indicated by the Corruption token in that Chamber. This Roaming Monster is 1 {label.monsters@2} {label.monsters@1}. Once all {tokensCount.corruption} {label.monsters@1} have been killed, {label.questVictory@0}.",ES:"Cada vez que se revele una de las Cámaras con un marcador de Corrupción {symbol.corruptionToken}, además de los pasos habituales para revelar una Cámara, genera también un Monstruo Errante en la Zona indicada por el marcador de Corrupción de esa Cámara. Ese Monstruo Errante es 1 {label.monsters@2} {label.monsters@1}. En cuanto los {tokensCount.corruption} {label.monsters@0} {label.monsters@1} hayan sido eliminados, {label.questVictory@0}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni volta che una delle Camere con un segnalino Corruzione {symbol.corruptionToken} viene rivelata, in aggiunta ai consueti passi di rivelazione di una Camera, generate anche un Mostro Errante nella Zona indicata dal segnalino Corruzione in quella Camera. Questo Mostro Errante &egrave; 1 {label.monsters@2} {label.monsters@1} e, quando viene sconfitto, tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.corruption} PE. Una volta che tutte e {tokensCount.corruption} {label.monsters@0} {label.monsters@1} sono state uccise, {label.questVictory@0}.",
                                                        EN:"Whenever one of the Chambers with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, you also spawn a Roaming Monster in the Zone indicated by the Corruption token in that Chamber. This Roaming Monster is 1 {label.monsters@2} {label.monsters@1}. When it is defeated all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.corruption} XP. Once all {tokensCount.corruption} {label.monsters@1} have been killed, {label.questVictory@0}.",ES:"Cada vez que se revele una de las Cámaras con un marcador de Corrupción {symbol.corruptionToken}, además de los pasos habituales para revelar una Cámara, genera también un Monstruo Errante en la Zona indicada por el marcador de Corrupción de esa Cámara. Ese Monstruo Errante es 1 {label.monsters@2} {label.monsters@1} y, cuando es derrotado, todos los Héroes ganan {label.miniCampaignObjectivesXp:split:tokensCount.corruption} PE. En cuanto los {tokensCount.corruption} {label.monsters@0} {label.monsters@1} hayan sido eliminados, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.maze@0}",ES:"{label.maze@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le tessere non sono collegate in questa Missione ed &egrave; possibile accedervi soltanto usando {label.maze@1} rappresentati dai segnalini Obiettivo. Qualsiasi Eroe pu&ograve; spendere 1 PM mentre si trova in una Zona con un segnalino Obiettivo per muoversi fino a una qualsiasi altra zona con un segnalino Obiettivo.",
                                                        EN:"The tiles are not linked in this Mission and can only be accessed using {label.maze@1} represented by Objective tokens. Any Hero can spend 1 MP while in a Zone with an Objective token to move to any other area with an Objective token.",ES:"Las Losetas no están conectadas en esta Misión y solo se puede acceder a ellas usando {label.maze@1}, representados por los marcadores de Objetivo. Cualquier Héroe puede gastar 1 PM mientras se encuentre en una Zona con un marcador de Objetivo para moverse hasta cualquier otra zona con un marcador de Objetivo.",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri e {label.maze@3}",
                                                        EN:"Monsters and {label.maze@3}",ES:"Monstruos y {label.maze@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Anche le Orde e i Mostri Erranti possono usare {label.maze@1}. Durante la Fase dei Nemici, se non ci sono Eroi su una Tessera, qualsiasi Orda e Mostro Errante su quella Tessera si muove verso la Zona pi&ugrave; vicina con un segnalino Obiettivo. Tutte le Zone con i segnalini Obiettivo sono considerate adiacenti l'una all'altra per le Orde e i Mostri Erranti (ma non permettono Linea di Vista dall'una all'altra).",
                                                        EN:"Mobs and Roaming Monsters can also use {label.maze@1}. During the Enemies Phase, if there are no Heroes on a tile, any Mob and Roaming Monsters on that tile move to the nearest Zone with an Objective token. All Zones with Objective tokens are considered adjacent to each other for Mobs and Roaming Monsters (but do not allow Line of Sight from one to the other).",ES:"Las Cuadrillas y los Monstruos Errantes también pueden usar {label.maze@1}. Durante la Fase de los Enemigos, si no hay Héroes en una Loseta, cualquier Cuadrilla o Monstruo Errante de esa Loseta se mueve hacia la Zona más cercana con un marcador de Objetivo. Todas las Zonas con marcadores de Objetivo se consideran adyacentes entre sí para las Cuadrillas y los Monstruos Errantes (pero no permiten Línea de Visión entre ellas).",
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "magicMaze" ],
                                            gameMode: [ "magicMazeHunt" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "square" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "magicMaze" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "eliminateEnemy" ]
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, Signore {label.monsters@4} {tokensCount.corruption} {label.monsters@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, Master {label.monsters@4} {tokensCount.corruption} {label.monsters@1}",ES:"Elimina a {boss.bossBadName@0}, Señor {label.monsters@4} {tokensCount.corruption} {label.monsters@1}",
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
                            forActs:[0,1],
                            forMaps:[0,1],
                            type:"relay",
                            objective:{
                                EN:"Use a cursed weapon to break some elements to win.",ES:"Usa un arma maldita para romper algunos elementos para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Spada Maledetta\"",
                                EN:"Inspired by the Hellscape quest \"The Cursed Sword\"",ES:"Inspirado en la misión de Hellscape \"La Espada Maldita\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                weapon:[
                                                    {
                                                        IT:[ "la Spada Maledetta", "alla Spada Maledetta", "nel mazzo dei Tesori Comuni", "lo Spadone Davvero Enorme", "la Spada", "Arma Maledetta", "la tiene per s&eacute;" ],
                                                        EN:[ "the Cursed Sword", "the Cursed Sword", "in the Common Treasure deck", "the Big Freakin' Greatsword", "the Sword", "Cursed Weapon", "keeps it to himself" ],ES:[ "la Espada Maldita", "la Espada Maldita", "en el mazo de Tesoro Común", "el Espadón Enorme y Temible", "la Espada", "Arma Maldita", "se la queda para él" ]
                                                    }
                                                ],
                                                toBreak:[
                                                    {
                                                        IT:[ "i", "Cristalli del Vuoto", "un", "Cristallo del Vuoto", "intaccarli", "rimuovendolo", "scalfirli" ],
                                                        EN:[ "the", "Void Crystals", "the", "Void Crystals" ],ES:[ "los", "Cristales del Vacío", "un", "Cristal del Vacío", "afectarlos", "retirándolo", "dañarlos" ]
                                                    },{
                                                        IT:[ "i", "Monoliti dell'Odio", "un", "Monolite dell'Odio", "intaccarli", "rimuovendolo", "scalfirli" ],
                                                        EN:[ "the", "Monoliths of Hatred", "the", "Monolith of Hatred" ],ES:[ "los", "Monolitos del Odio", "un", "Monolito del Odio", "afectarlos", "retirándolo", "dañarlos" ]
                                                    },{
                                                        IT:[ "le", "Statue della Morte", "una", "Statua della Morte", "intaccarle", "rimuovendola", "scalfirle" ],
                                                        EN:[ "the", "Statues of Death", "the", "Statue of Death" ],ES:[ "las", "Estatuas de la Muerte", "una", "Estatua de la Muerte", "afectarlas", "retirándola", "dañarlas" ]
                                                    }
                                                ],
                                                purpose:[
                                                    {
                                                        IT:[ "indeboliremo il legame tra il Reame Oscuro e il nostro mondo" ],
                                                        EN:[ "we will weaken the bond between the Dark Realm and our world" ],ES:[ "debilitaremos el vínculo entre el Reino Oscuro y nuestro mundo" ]
                                                    },{
                                                        IT:[ "impediremo al Grande Antico di tornare sulla Terra" ],
                                                        EN:[ "we will prevent the Great Old One from returning to Earth" ],ES:[ "impediremos que el Gran Antiguo regrese a la Tierra" ]
                                                    },{
                                                        IT:[ "porremo fine alla piaga che tiene in ginocchio il regno da troppo tempo" ],
                                                        EN:[ "we will put an end to the plague that has brought the kingdom to its knees for too long" ],ES:[ "pondremos fin a la plaga que tiene de rodillas al reino desde hace demasiado tiempo" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Ma c'&egrave; soltanto un artefatto che riesce quanto meno a {label.toBreak@4}, ed &egrave; maledetto" ],
                                                        EN:[ "But there's only one artifact that can at least affect them, and it's cursed" ],ES:[ "Pero solo hay un artefacto capaz al menos de {label.toBreak@4}, y está maldito" ]
                                                    },{
                                                        IT:[ "Ma l'unico modo per {label.toBreak@6} &egrave; impugnando un'{label.weapon@5}" ],
                                                        EN:[ "But the only way to defeat them is by holding a {label.weapon@5}" ],ES:[ "Pero la única forma de {label.toBreak@6} es empuñando un {label.weapon@5}" ]
                                                    },{
                                                        IT:[ "Purtroppo, il solo artefatto in grado di {label.toBreak@6} potrebbe ucciderci tutti" ],
                                                        EN:[ "Unfortunately, the one artifact that may help us also could kill us all" ],ES:[ "Por desgracia, el único artefacto capaz de ayudarnos también podría matarnos a todos" ]
                                                    }
                                                ],
                                                consequence:[
                                                    {
                                                        IT:[ "chiunque lo impugni troppo a lungo soccomber&agrave;!", "ogni forza dell'Eroe verr&agrave; prosciugata" ],
                                                        EN:[ "anyone who holds it for too long will succumb!", "all the Hero's strength will be drained" ],ES:[ "¡quien la empuñe demasiado tiempo sucumbirá!", "toda la fuerza del Héroe se drenará" ]
                                                    },{
                                                        IT:[ "chiunque ne faccia uso per troppo tempo perder&agrave; la sua anima!", "l'arma reclamer&agrave; l'anima dell'Eroe" ],
                                                        EN:[ "anyone who uses it for too long will lose their soul!", "the weapon will claim the Hero's soul" ],ES:[ "¡quien la use demasiado tiempo perderá su alma!", "el arma reclamará el alma del Héroe" ]
                                                    },{
                                                        IT:[ "di chi ne abbia fatto uso per troppo tempo si dice rimanga soltanto un mucchio di cenere!", "il corpo dell'Eroe verr&agrave; ridotto in polvere" ],
                                                        EN:[ "of those who have held it for too long, it is said that only a pile of ashes remains!", "the Hero's body will be reduced to dust" ],ES:[ "¡de quien la haya empuñado demasiado tiempo se dice que solo queda un montón de cenizas!", "el cuerpo del Héroe quedará reducido a polvo" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                keepItem:[
                                                    {
                                                        IT:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ],
                                                        EN:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ],ES:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.weapon@0}",ES:"{label.weapon@0}"
                                        },{
                                            EN:"{label.toBreak@0} {label.toBreak@1}",ES:"{label.toBreak@0} {label.toBreak@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"Distruggendo {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}",
                                            EN:"Breaking {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}",ES:"Destruir {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",ES:"Completa los objetivos en el orden indicado:"
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
                                                        IT:"Distruggere {label.toBreak@0} {label.toBreak@1}",
                                                        EN:"Destroy {label.toBreak@0} {label.toBreak@1}",ES:"Destruir {label.toBreak@0} {label.toBreak@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.weapon@0} per distruggere {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}",
                                                        EN:"Use {label.weapon@0} to destroy {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}",ES:"Usar {label.weapon@0} para destruir {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Condividere il Fardello",
                                                        EN:"Sharing the Burden",ES:"Compartir la Carga"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Non consentire {label.weapon@1} di sconfiggere nessun Eroe",
                                                        EN:"Don't allow {label.weapon@1} to defeat any Hero",ES:"No permitas que {label.weapon@1} derrote a ningún Héroe"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.weapon:capital@0}",ES:"{label.weapon:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, cercate {label.weapon@2} {label.weapon@3} e scegliete un Eroe che prenda questo oggetto come sua arma di partenza al posto di un'arma regolare: questa &egrave; {label.weapon@0}.",
                                                        EN:"During setup, look for {label.weapon@2} {label.weapon@3} and choose a Hero to take this item as his starting weapon instead of a regular weapon: this is {label.weapon@0}.",ES:"Durante la preparación, busca {label.weapon@2} {label.weapon@3} y elige a un Héroe para que lleve ese objeto como su arma inicial en lugar de un arma normal: esta es {label.weapon@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Durante la preparazione, pescate la carta Campagna 20 di Heavenfall e scegliete un Eroe che prenda questo oggetto come sua arma: questa &egrave; {label.weapon@0}.",
                                                        EN:"During setup, draw the Heavenfall Campaign card 20 and choose a Hero to take this item as his weapon: this is {label.weapon@0}.",ES:"Durante la preparación, roba la carta Campaña 20 de Heavenfall y elige a un Héroe para que lleve ese objeto como arma: esta es {label.weapon@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Condividere il Fardello",
                                                        EN:"Sharing the Burden",ES:"Compartir la Carga"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe che impugna {label.weapon@0} subisce all'inizio di ogni Fase degli Eroi un ammontare di Ferite che dipende da quanto a lungo ha impugnato {label.weapon@4}.<p>Queste Ferite si applicano prima che qualsiasi segnalino Latore di Vita abbia effetto:</p><ul>"+
                                                        "<li><b>1&deg; round</b>: 1 Ferita</li>"+
                                                        "<li><b>2&deg; round consecutivo</b>: 2 Ferite</li>"+
                                                        "<li><b>3&deg; round consecutivo</b>: 3 Ferite</li>"+
                                                        "<li><b>4&deg; round consecutivo</b>: Sconfitta! Se un Eroe inizia il suo 4&deg; round consecutivo impugnando {label.weapon@0}, {label.consequence@1} e la Missione termina con una sconfitta.</li>"+
                                                        "</ul><p>Usate i segnalini Corruzione {symbol.corruptionToken} per tenere il conto del numero di round in cui un singolo Eroe ha impugnato {label.weapon@0}. Non appena un Eroe passa {label.weapon@0} a un altro Eroe attraverso un'azione di Scambiare, scartate i segnalini e ricominciate da capo il conteggio. {label.weapon:capital@0} non pu&ograve; essere custodita nell'Inventario di un Eroe.</p>",
                                                        EN:"A Hero holding {label.weapon@0} suffers a number of Wounds at the start of each Hero Phase depending on how long he has held {label.weapon@4}.<p>These Wounds apply before any Lifebringer token takes effect:</p><ul>"+
                                                        "<li><b>1st round</b>: 1 Wound</li>"+
                                                        "<li><b>2nd consecutive round</b>: 2 Wounds</li>"+
                                                        "<li><b>3rd consecutive round</b>: 3 Wounds</li>"+
                                                        "<li><b>4th consecutive round</b>: Defeated! If a Hero begins his 4th consecutive round holding {label.weapon@0}, {label.consequence@1} and the Mission ends in defeat.</li>"+
                                                        "</ul><p>Use Corruption tokens {symbol.corruptionToken} to keep track of the number of rounds a single Hero has wielded {label.weapon@0}. As soon as a Hero passes {label.weapon@0} to another Hero through a Trade action, discard the tokens and start counting again. {label.weapon:capital@0} cannot be stored in a Hero's Inventory.</p>",ES:"Un Héroe que empuñe {label.weapon@0} sufre, al principio de cada Fase de los Héroes, una cantidad de Heridas que depende de cuánto tiempo lleve empuñando {label.weapon@4}.<p>Estas Heridas se aplican antes de que surta efecto cualquier marcador de Portador de Vida:</p><ul>" + "<li><b>1.ª ronda</b>: 1 Herida</li>" + "<li><b>2.ª ronda consecutiva</b>: 2 Heridas</li>" + "<li><b>3.ª ronda consecutiva</b>: 3 Heridas</li>" + "<li><b>4.ª ronda consecutiva</b>: ¡Derrota! Si un Héroe empieza su 4.ª ronda consecutiva empuñando {label.weapon@0}, {label.consequence@1} y la Misión termina en derrota.</li>" + "</ul><p>Usa marcadores de Corrupción {symbol.corruptionToken} para llevar la cuenta del número de rondas que un mismo Héroe lleva empuñando {label.weapon@0}. En cuanto un Héroe pase {label.weapon@0} a otro Héroe mediante una acción de Intercambiar, descarta los marcadores y vuelve a empezar la cuenta. {label.weapon:capital@0} no puede guardarse en el Inventario de un Héroe.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Distruggere {label.toBreak@0} {label.toBreak@1}",
                                                        EN:"Destroy {label.toBreak@0} {label.toBreak@1}",ES:"Destruir {label.toBreak@0} {label.toBreak@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon e ottenendo 5 PE. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon and gaining 5 XP. Once all tokens have been removed, {label.questVictory@0}.",ES:"{label.toBreak:capital@0} {label.toBreak@1} están representados por marcadores de Objetivo. Un Héroe que tenga equipada {label.weapon@0} y se encuentre en la misma Zona que un marcador de Objetivo puede gastar 1 acción para destruir {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} de la Mazmorra y obteniendo 5 PE. Una vez retirados todos los marcadores, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon. Once all tokens have been removed, {label.questVictory@0}.",ES:"{label.toBreak:capital@0} {label.toBreak@1} están representados por marcadores de Objetivo. Un Héroe que tenga equipada {label.weapon@0} y se encuentre en la misma Zona que un marcador de Objetivo puede gastar 1 acción para destruir {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} de la Mazmorra. Una vez retirados todos los marcadores, {label.questVictory@0}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon e tutti gli Eroi ottengono {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Once all tokens have been removed, {label.questVictory@0}.",ES:"{label.toBreak:capital@0} {label.toBreak@1} están representados por marcadores de Objetivo. Un Héroe que tenga equipada {label.weapon@0} y se encuentre en la misma Zona que un marcador de Objetivo puede gastar 1 acción para destruir {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} de la Mazmorra y todos los Héroes obtienen {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una vez retirados todos los marcadores, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Potere della Distruzione",
                                                        EN:"The Power of Destruction",ES:"El Poder de la Destrucción"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.weapon:capital@0} si fa pi&ugrave; forte man mano che {label.toBreak@0} {label.toBreak@1} vengono distrutti. {label.weapon:capital@0} ottiene i dadi di Attacco seguenti in base al numero di segnalini Obiettivo che sono stati rimossi dal Dungeon:<ul>"+
                                                        "<li>1 Segnalino: +1 {symbol.yellowDie}</li>"+
                                                        "<li>2 Segnalino: +2 {symbol.yellowDie}</li>"+
                                                        "<li>3 Segnalino: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>"+
                                                        "<li>4 Segnalino: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>"+
                                                        "</ul>",
                                                        EN:"{label.weapon:capital@0} grows stronger as {label.toBreak@0} {label.toBreak@1} are destroyed. {label.weapon:capital@0} gains the following Attack dice based on the number of Objective tokens that were removed from the Dungeon:<ul>"+
                                                        "<li>1 Token: +1 {symbol.yellowDie}</li>"+
                                                        "<li>2 Tokens: +2 {symbol.yellowDie}</li>"+
                                                        "<li>3 Tokens: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>"+
                                                        "<li>4 Tokens: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>"+
                                                        "</ul>",ES:"{label.weapon:capital@0} se hace más fuerte a medida que se destruyen {label.toBreak@0} {label.toBreak@1}. {label.weapon:capital@0} obtiene los siguientes dados de Ataque según el número de marcadores de Objetivo que se hayan retirado de la Mazmorra:<ul>" + "<li>1 marcador: +1 {symbol.yellowDie}</li>" + "<li>2 marcadores: +2 {symbol.yellowDie}</li>" + "<li>3 marcadores: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>" + "<li>4 marcadores: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>" + "</ul>"
                                                    }
                                                ],
                                                campaignExplanation:[]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"In Solitario",
                                                        EN:"Single Player rules",ES:"En Solitario"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"L'Eroe non subisce Ferite cumulative (subisce invece 1 Ferita per round). L'Eroe non viene sconfitto se impugna {label.weapon@0} per 4 round consecutivi e pu&ograve; scegliere di usare qualsiasi arma di partenza come \"{label.weapon@5}\".",
                                                        EN:"The Hero suffers no cumulative Wounds (instead he suffers 1 Wound per round). The Hero is not defeated if he holds {label.weapon@0} for 4 consecutive rounds and can choose to use any starting weapon as a \"{label.weapon@5}\".",ES:"El Héroe no sufre Heridas acumulativas (en su lugar, sufre 1 Herida por ronda). El Héroe no queda derrotado si empuña {label.weapon@0} durante 4 rondas consecutivas y puede elegir usar cualquier arma inicial como \"{label.weapon@5}\"."
                                                    }
                                                ],
                                                campaignExplanation:[]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "targets" ],
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
                                            rewards:[
                                                {
                                                    IT:"Rimettere la carta Campagna 20 di Heavenfall con le altre carte Missione e pescare 1 carta dal mazzo dei Tesori Epici.",
                                                    EN:"Put the Heavenfall Campaign card 20 back with the other Mission cards and draw 1 card from the Epic Treasures deck.",ES:"Vuelve a colocar la carta Campaña 20 de Heavenfall con las demás cartas de Misión y roba 1 carta del mazo de Tesoros Épicos."
                                                }
                                            ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noLifebringer", "keepItem" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        preparation:{
                                            IT:"<p>Da adesso in poi {label.weapon@0} si comporta come un'arma regolare. L'Eroe che la impugna pu&ograve; rimuoverla o sostituirla con un'altra arma nel proprio inventario prima dello Scontro con il Boss.</p>",
                                            EN:"<p>From now on {label.weapon@0} behaves like a regular weapon. The Hero who wields it can remove it or replace it with another weapon in their inventory before the Boss Fight.</p>",ES:"<p>A partir de ahora, {label.weapon@0} se comporta como un arma normal. El Héroe que la empuña puede retirarla o sustituirla por otra arma de su inventario antes del Combate contra el Jefe.</p>"
                                        },
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, che ha creato {label.weapon@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}, creator of {label.weapon@0}",ES:"Elimina a {boss.bossBadName@0}, creador de {label.weapon@0}",
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
                            forMaps:[1],
                            type:"escort",
                            objective:{
                                EN:"Escort an NPC to a zone to win.",ES:"Escolta a un PNJ hasta una zona para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Passaggio\"",
                                EN:"Inspired by the Hellscape quest \"The Passage\"",ES:"Inspirado en la misión de Hellscape \"El Pasadizo\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                escorting:[
                                                    {
                                                        IT:[ "un evocatore", "l'evocatore", "l'Evocatore", "Statistiche dell'Evocatore", "un sacerdote" ],
                                                        EN:[ "a summoner", "the summoner", "the Summoner", "Summoner Statistics", "a priest" ],ES:[ "un invocador", "el invocador", "el Invocador", "Estadísticas del Invocador", "un sacerdote" ]
                                                    },
                                                    {
                                                        IT:[ "un incantatore", "l'incantatore", "l'Incantatore", "Statistiche dell'Incantatore", "un mago" ],
                                                        EN:[ "an enchanter", "the enchanter", "the Enchanter", "Enchanter Statistics", "a wizard" ],ES:[ "un encantador", "el encantador", "el Encantador", "Estadísticas del Encantador", "un mago" ],
                                                    },
                                                    {
                                                        IT:[ "un apprendista mago", "l'apprendista mago", "l'Apprendista", "Statistiche dell'Apprendista Mago", "qualcuno disposto a rischiare" ],
                                                        EN:[ "an apprentice wizard", "the apprentice wizard", "the Apprentice", "Apprentice Statistics", "someone willing to take a risk" ],ES:[ "un aprendiz de mago", "el aprendiz de mago", "el Aprendiz", "Estadísticas del Aprendiz de Mago", "alguien dispuesto a arriesgarse" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "inferno", "all'Inferno", "laggi&ugrave;" ],
                                                        EN:[ "hell", "the Hell", "into the depths" ],ES:[ "el infierno", "al Infierno", "hacia las profundidades" ]
                                                    },
                                                    {
                                                        IT:[ "aldil&egrave;", "nell'Aldil&agrave;", "oltre" ],
                                                        EN:[ "afterlife", "the Afterlife", "beyond life" ],ES:[ "el más allá", "al Más Allá", "más allá de la vida" ]
                                                    },
                                                    {
                                                        IT:[ "segrete", "nelle Segrete", "la sotto" ],
                                                        EN:[ "dungeon", "the Dungeon", "down there" ],ES:[ "la mazmorra", "a las Mazmorras", "hasta allí abajo" ]
                                                    }
                                                ],
                                                door:[
                                                    {
                                                        IT:[ "al Varco", "il Varco", "Zona del Varco", "del Varco", "nel Varco", "incanala con successo l'energia del Varco", "usare l'energia del portale" ],
                                                        EN:[ "to the Rift", "the Rift", "Zone of the Rift", "of the Rift", "the Rift", "channel the Rift energy", "use the Rift energy" ],ES:[ "a la Grieta", "la Grieta", "Zona de la Grieta", "de la Grieta", "en la Grieta", "canalizar la energía de la Grieta", "usar la energía del portal" ]
                                                    },
                                                    {
                                                        IT:[ "al Cancello", "il Cancello", "Zona del Cancello", "del Cancello", "nel Cancello", "rimuovere la maledizione dal Cancello", "annullarne l'incantesimo" ],
                                                        EN:[ "to the Gate", "the Gate", "Zone of the Gate", "of the Gate", "the Gate", "lift the Gate's curse", "remove its curse" ],ES:[ "a la Puerta", "la Puerta", "Zona de la Puerta", "de la Puerta", "en la Puerta", "levantar la maldición de la Puerta", "eliminar su maldición" ]
                                                    },
                                                    {
                                                        IT:[ "al Passaggio", "il Passaggio", "Zona del Passaggio", "del Passaggio", "nel Passaggio", "rivelare la posizione del Passaggio", "svelarne la posizione esatta" ],
                                                        EN:[ "to the Passage", "the Passage", "Zone of the Passage", "of the Passage", "the Passage", "reveal the Passage position", "discover its exact position" ],ES:[ "al Pasadizo", "el Pasadizo", "Zona del Pasadizo", "del Pasadizo", "en el Pasadizo", "revelar la posición del Pasadizo", "desvelar su posición exacta" ]
                                                    }
                                                ],
                                                intro1:[
                                                    {
                                                        IT:[ "Erano giorni che cercavamo informazioni su come infiltrarci {label.destination@1}." ],
                                                        EN:[ "We had been looking for information on how to infiltrate {label.destination@1} for days." ],ES:[ "Llevábamos días buscando información sobre cómo infiltrarnos {label.destination@1}." ]
                                                    },
                                                    {
                                                        IT:[ "Sapevamo dove fosse {label.door@1} ma non conoscevamo alcun modo per {label.door@6}." ],
                                                        EN:[ "We knew where {label.door@1} was but we didn't know any way to {label.door@6}." ],ES:[ "Sabíamos dónde estaba {label.door@1}, pero no conocíamos ninguna forma de {label.door@6}." ]
                                                    },
                                                    {
                                                        IT:[ "Non c'era altro modo. Ci serviva l'aiuto di {label.escorting@4}..." ],
                                                        EN:[ "There was no other way. We needed the help of {label.escorting@4}..." ],ES:[ "No había otra manera. Necesitábamos la ayuda de {label.escorting@4}..." ]
                                                    }
                                                ],
                                                intro2:[
                                                    {
                                                        IT:[ "In una piccola casa nei boschi vicini viveva" ],
                                                        EN:[ "In a small house in the nearby woods, there lived" ],ES:[ "En una pequeña casa en el bosque cercano vivía" ]
                                                    },
                                                    {
                                                        IT:[ "In un vicolo nascosto del borgo abitava" ],
                                                        EN:[ "In a hidden alley of the village, there lived" ],ES:[ "En un callejón escondido del pueblo vivía" ]
                                                    },
                                                    {
                                                        IT:[ "Lungo la via verso il mercato incrociammo" ],
                                                        EN:[ "On the way to the market, we came across" ],ES:[ "De camino al mercado nos cruzamos con" ]
                                                    }
                                                ],
                                                lead:[
                                                    {
                                                        IT:[ "per aiutarci a proseguire il nostro viaggio" ],
                                                        EN:[ "to help us continue our journey" ],ES:[ "para ayudarnos a continuar nuestro viaje" ]
                                                    },{
                                                        IT:[ "per poterlo attraversare" ],
                                                        EN:[ "to be able to pass it" ],ES:[ "para poder cruzarlo" ]
                                                    },{
                                                        IT:[ "per condurci alla nostra destinazione finale" ],
                                                        EN:[ "to lead us to our final destination" ],ES:[ "para conducirnos hasta nuestro destino final" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noDamage:[
                                                    {
                                                        IT:[ "{label.escorting@2}", "{label.escorting:capital@2}" ],
                                                        EN:[ "{label.escorting@2}", "{label.escorting:capital@2}" ],ES:[ "{label.escorting@2}", "{label.escorting:capital@2}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.door:capital@1}",ES:"{label.door:capital@1}"
                                        },
                                        {
                                            IT: "Scorta {label.destination:capital@1}",
                                            EN: "Escort to {label.destination:capital@1}",ES:"Escoltar {label.destination@1}"
                                        },
                                        {
                                            EN: "{label.escorting:capital@1}",ES:"{label.escorting:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.intro1@0} {label.intro2@0} {label.escorting@0} disposto a portarci fino {label.door@0} e {label.door@6} {label.lead@0}. Dobbiamo solo mantenere in vita {label.escorting@1} durante il cammino che ci porter&agrave; {label.destination@2}...",
                                            EN:"{label.intro1@0} {label.intro2@0} {label.escorting@0} who was willing to take us {label.door@0} and {label.door@6} {label.lead@0}. We just have to keep {label.escorting@1} alive during the journey that will take us {label.destination@2}...",ES:"{label.intro1@0} {label.intro2@0} {label.escorting@0} dispuesto a llevarnos hasta {label.door@0} y {label.door@6} {label.lead@0}. Solo tenemos que mantener con vida {label.escorting@1} durante el camino que nos llevará {label.destination@2}...",
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",ES:"Completa los objetivos en el orden indicado:"
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
                                                        IT:"Proteggere {label.escorting@2}",
                                                        EN:"Protect {label.escorting@2}",ES:"Proteger {label.escorting@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Mantenere {label.escorting@2} in vita finch&eacute; non raggiunge {label.door@1}",
                                                        EN:"Keep {label.escorting@2} alive until it reaches {label.door@1}",ES:"Mantén con vida {label.escorting@2} hasta que llegue {label.door@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Entrare {label.destination@1}",
                                                        EN:"Enter {label.destination@1}",ES:"Entrar {label.destination@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Entrare attraverso {label.door@1}",
                                                        EN:"Enter through {label.door@1}",ES:"Entrar a través de {label.door@1}",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Chi &egrave; questo?",
                                                        EN:"Who's that?",ES:"¿Quién es?"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, prendete una miniatura Eroe inutilizzata che rappresenti {label.escorting@2} e collocatela nella Zona di Partenza degli Eroi (senza assegnargli una base). Se non rimane nessuna miniatura Eroe disponibile, usate invece un segnalino Obiettivo grigio per rappresentare {label.escorting@2}.",
                                                        EN:"During setup, take an unused Hero miniature representing {label.escorting@2} and place it in the Hero Starting Zone (without assigning it a base). If there are no available Hero figures left, use a gray Objective token to represent {label.escorting@2} instead.",ES:"Durante la preparación, coge una miniatura de Héroe sin usar que represente {label.escorting@2} y colócala en la Zona de Partida de los Héroes (sin asignarle una base). Si no queda ninguna miniatura de Héroe disponible, usa en su lugar un marcador de Objetivo gris para representar {label.escorting@2}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.escorting:capital@2}",ES:"{label.escorting:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"A partire dal secondo round, all'inizio di ogni Fase degli Eroi, {label.escorting@2} si muove di 2 Zone verso la porta dal bordo rosso, seguendo sempre il percorso pi&ugrave; breve. {label.escorting:capital@2} non pu&ograve; aprire le Porte. {label.escorting:capital@2} non pu&ograve; mai uscire da una Zona dove ci sono dei Nemici. {label.escorting:capital@2} &egrave; considerato un Eroe ai fini di stabilire se pu&ograve; essere bersagliato da Eroi e Nemici, ma non pu&ograve; effettuare nessuna azione oltre a muoversi nel modo descritto sopra. Non pu&ograve; impugnare oggetti.",
                                                        EN:"Starting from the second round, at the start of each Hero Phase, {label.escorting@2} moves 2 Zones toward the red-edged door, always following the shortest path. {label.escorting:capital@2} cannot open the Doors. {label.escorting:capital@2} cannot never leave a Zone containing Enemies. {label.escorting:capital@2} is considered a Hero when determining whether he can be targeted by Heroes and Enemies, but cannot take any other action than moving as described above. It cannot hold objects.",ES:"A partir de la segunda ronda, al principio de cada Fase de los Héroes, {label.escorting@2} se mueve 2 Zonas hacia la puerta con el borde rojo, siguiendo siempre el camino más corto. {label.escorting:capital@2} no puede abrir Puertas. {label.escorting:capital@2} nunca puede abandonar una Zona que contenga Enemigos. {label.escorting:capital@2} se considera un Héroe a efectos de determinar si puede ser objetivo de Héroes y Enemigos, pero no puede realizar ninguna acción salvo moverse del modo descrito arriba. No puede llevar objetos."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.door:capital@1}",ES:"{label.door:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.escorting:capital@2} raggiunge la zona con la porta dal bordo rosso, se &egrave; chiusa, termina il suo movimento e apre la porta. Rivelate la Camera come di consueto. Se la porta &egrave; aperta, {label.escorting:capital@2} continua il suo movimento verso {label.door@1}, rappresentato dal segnalino Obiettivo.",
                                                        EN:"As soon as {label.escorting:capital@2} reaches the area with the red-edged door, if it is closed, ends its movement and opens the door. Reveal the Chamber as normal. If the door is open, {label.escorting:capital@2} continues its movement towards {label.door@1}, represented by the Objective token.",ES:"En cuanto {label.escorting:capital@2} alcanza la zona con la puerta de borde rojo, si está cerrada, termina su movimiento y abre la puerta. Revela la Cámara con normalidad. Si la puerta está abierta, {label.escorting:capital@2} continúa su movimiento hacia {label.door@1}, representado por el marcador de Objetivo."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Entrare {label.destination@1}",
                                                        EN:"Enter {label.destination@1}",ES:"Entrar {label.destination@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.escorting:capital@2} raggiunge la {label.door@2}, {label.door@5}. Girate il segnalino Obiettivo e rimuovete {label.escorting@2} dal Dungeon. Fatto questo, qualsiasi Eroe pu&ograve; spendere 1 PM nella {label.door@2} per uscire dal Dungeon. Non appena tutti gli Eroi sono entrati {label.door@4}, {label.questVictory@0}.",
                                                        EN:"As soon as {label.escorting:capital@2} reaches the {label.door@2}, {label.door@5}. Flip the Objective token and remove {label.escorting@2} from the Dungeon. Once this is done, any Hero can spend 1 MP in the {label.door@2} to exit the Dungeon. As soon as all Heroes have entered {label.door@4}, {label.questVictory@0}.",ES:"En cuanto {label.escorting:capital@2} alcanza la {label.door@2}, {label.door@5}. Da la vuelta al marcador de Objetivo y retira {label.escorting@2} de la Mazmorra. Hecho esto, cualquier Héroe puede gastar 1 PM en la {label.door@2} para salir de la Mazmorra. En cuanto todos los Héroes hayan entrado {label.door@4}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.escorting@3}",ES:"{label.escorting@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Salute 8, Difesa: 2 {symbol.blueDie}",
                                                        EN:"Health 8, Defense: 2 {symbol.blueDie}",ES:"Salud 8, Defensa: 2 {symbol.blueDie}"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "escort" ],
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
                                            forCampaign:[ "full" ],    
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noDamage" ]
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, in attesa oltre {label.door@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, waiting beyond {label.door@1}",ES:"Elimina a {boss.bossBadName@0}, que espera más allá de {label.door@1}",
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
                            forMaps:[0],
                            type:"collect",
                            objective:{
                                EN:"Collect items and bring them to a zone to win.",ES:"Recoge objetos y llévalos hasta una zona para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"L'Artefatto Demoniaco\"",
                                EN:"Inspired by the Hellscape quest \"The Demon Artifact\"",ES:"Inspirado en la misión de Hellscape \"El Artefacto Demoníaco\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                object:[
                                                    {
                                                        IT: [ "l'artefatto", "gli artefatti", "artefatti", "artefatto", "forgiare", "degli artefatti" ],
                                                        EN: [ "the artifact", "the artifacts", "artifacts", "artifact", "forge", "of the artifacts" ],ES:[ "el artefacto", "los artefactos", "artefactos", "artefacto", "forjar", "de los artefactos" ]
                                                    },{
                                                        IT: [ "il cristallo", "i cristalli", "cristalli", "cristallo", "ricomporre", "dei cristallo" ],
                                                        EN: [ "the crystal", "the crystals", "crystals", "crystal", "recompose", "of the crystals" ],ES:[ "el cristal", "los cristales", "cristales", "cristal", "recomponer", "de los cristales" ]
                                                    },{
                                                        IT: [ "il sigillo", "i sigilli", "sigilli", "sigillo", "comporre", "dei sigilli" ],
                                                        EN: [ "the seal", "the seals", "seals", "seal", "compose", "of the seals" ],ES:[ "el sello", "los sellos", "sellos", "sello", "componer", "de los sellos" ]
                                                    }
                                                ],
                                                objectCategory:[
                                                    {
                                                        IT: "impugna una di queste reliquie",
                                                        EN: "hold one of these relics",ES:"empuña una de estas reliquias"
                                                    },{
                                                        IT: "stringe uno di questi oggetti arcani",
                                                        EN: "hold one of these arcane items",ES:"sostiene uno de estos objetos arcanos"
                                                    },{
                                                        IT: "ne possiede uno",
                                                        EN: "own one of them",ES:"posee uno de ellos"
                                                    }
                                                ],
                                                realm:[
                                                    {
                                                        IT: "Il Reame Oscuro",
                                                        EN: "The Dark Realm",ES:"El Reino Oscuro"
                                                    },{
                                                        IT: "La Rocca Abbandonata",
                                                        EN: "The Abandoned Fortress",ES:"La Fortaleza Abandonada"
                                                    },{
                                                        IT: "La Torre Demoniaca",
                                                        EN: "The Demon Tower",ES:"La Torre Demoníaca"
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT: "nasconde nelle sue profondit&agrave; {label.amount} {label.object@2}",
                                                        EN: "hides {label.amount} {label.object@2} in its dark depths",ES:"esconde en sus oscuras profundidades {label.amount} {label.object@2}"
                                                    },{
                                                        IT: "custodisce nelle sue segrete abbandonate {label.amount} {label.object@2}",
                                                        EN: "keeps {label.amount} {label.object@2} in its abandoned dungeons",ES:"guarda en sus mazmorras abandonadas {label.amount} {label.object@2}"
                                                    },{
                                                        IT: "cela nei suoi meandri {label.amount} {label.object@2}",
                                                        EN: "hides {label.amount} {label.object@2} in its meanders",ES:"oculta en sus recovecos {label.amount} {label.object@2}"
                                                    }
                                                ],
                                                amount:[
                                                    {
                                                        IT: "moltissimi",
                                                        EN: "many",ES:"muchos"
                                                    },{
                                                        IT: "rarissimi",
                                                        EN: "very rare",ES:"muy raros"
                                                    },{
                                                        IT: "potentissimi",
                                                        EN: "very powerful",ES:"muy poderosos"
                                                    }
                                                ],
                                                attribute:[
                                                    {
                                                        IT: [ "demoniaco", "demoniaci" ],
                                                        EN: [ "demoniac", "demoniac" ],ES:[ "demoníaco", "demoníaco" ]
                                                    },{
                                                        IT: [ "maledetto", "maledetti" ],
                                                        EN: [ "cursed", "cursed" ],ES:[ "maldito", "maldito" ]
                                                    },{
                                                        IT: [ "mortale", "mortali" ],
                                                        EN: [ "deadly", "deadly" ],ES:[ "mortal", "mortal" ]
                                                    }
                                                ],
                                                power:[
                                                    {
                                                        IT: [ "di un potere indicibile", "potere indicibile" ],
                                                        EN: [ "unspeakable powers", "unspeakable powers" ],ES:[ "de un poder indescriptible", "poder indescriptible" ],
                                                    },{
                                                        IT: [ "di poteri divini", "poteri divini" ],
                                                        EN: [ "godly powers", "godly powers" ],ES:[ "de poderes divinos", "poderes divinos" ],
                                                    },{
                                                        IT: [ "del Sacro Dono", "Il Sacro Dono" ],
                                                        EN: [ "the Sacred Gift", "the Sacred Gift" ],ES:[ "del Sagrado Don", "el Sagrado Don" ],
                                                    }
                                                ],
                                                risk:[
                                                    {
                                                        IT: "di trasformarsi lentamente in un demone",
                                                        EN: "slowly transforming into a demon",ES:"convertirse lentamente en un demonio"
                                                    },{
                                                        IT: "di perdere pian piano la sua umanit&agrave;",
                                                        EN: "slowly losing his humanity",ES:"ir perdiendo poco a poco su humanidad"
                                                    },{
                                                        IT: "di accorciare inesorabilmente la durata della propria vita",
                                                        EN: "inexorably shortening his lifespan",ES:"acortar inexorablemente la duración de su propia vida"
                                                    }
                                                ],
                                                part:[
                                                    {
                                                        IT: [ "frammento", "tutti", "i", "frammenti", "rappresentati", "stati raccolti", "Zona del Frammento" ],
                                                        EN: [ "fragment", "", "", "", "", "fragments", "Fragment's Zone"],ES:[ "fragmento", "todos", "los", "fragmentos", "representados", "fragmentos", "Zona del Fragmento" ]
                                                    },{
                                                        IT: [ "componente", "tutti", "i", "componenti", "rappresentati", "stati raccolti", "Zona del Componente" ],
                                                        EN: [ "component", "", "", "", "", "components", "Component's Zone"],ES:[ "componente", "todos", "los", "componentes", "representados", "componentes", "Zona del Componente" ]
                                                    },{
                                                        IT: [ "parte", "tutte", "le", "parti", "rappresentate", "state raccolte", "Zona della Parte" ],
                                                        EN: [ "part", "", "", "", "", "parts", "Part's Zone"],ES:[ "parte", "todas", "las", "partes", "representadas", "partes", "Zona de la Parte" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT: [ "{label.object@4} {label.object@0} nella Forgia Corrotta", "Zona della Forgia Corrotta", "Forgiarli nel Fuoco Oscuro" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Corrupted Forge", "Corrupted Forge Zone", "Forge it in the Dark Fire" ],ES:[ "{label.object@4} {label.object@0} en la Forja Corrupta", "Zona de la Forja Corrupta", "Forjarlo en el Fuego Oscuro" ]
                                                    },{
                                                        IT: [ "{label.object@4} {label.object@0} nella Sacra Fonte", "Zona della Sacra Fonte", "Ricongiungerli nella Sacra Fonte" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Sacred Source", "Sacred Source Zone", "Reunite them in the Sacred Source" ],ES:[ "{label.object@4} {label.object@0} en la Fuente Sagrada", "Zona de la Fuente Sagrada", "Reunirlos en la Fuente Sagrada" ]
                                                    },{
                                                        IT: [ "{label.object@4} {label.object@0} nella Pressa Dorata", "Zona della Pressa Dorata", "Ricomporli nella Pressa Dorata" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Golden Press", "Golden Press Zone", "Reassemble them in the Golden Press" ],ES:[ "{label.object@4} {label.object@0} en la Prensa Dorada", "Zona de la Prensa Dorada", "Recomponerlos en la Prensa Dorada" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccogliere {label.part@1} {label.part@2} {label.part@3}", "raccogliendo {label.collectOptionalItems@3} {label.part@3}", "{tokensCount.objective}" ],
                                                        EN:[ "to collect all the {label.part@5}", "collecting {label.collectOptionalItems@3} {label.part@5}", "{tokensCount.objective}"],ES:[ "a recoger {label.part@1} {label.part@2} {label.part@5}", "recogiendo {label.collectOptionalItems@3} {label.part@5}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.object:capital@0} {label.attribute:capital@0}",
                                            EN: "The {label.attribute:capital@0} {label.object:capital@3}",ES:"El {label.object@3} {label.attribute@0}"
                                        },{
                                            EN: "{label.power:capital@1}",ES:"{label.power:capital@1}"
                                        },{
                                            IT: "{label.realm} e {label.object:capital@0}",
                                            EN: "{label.realm} and {label.object:capital@0}",ES:"{label.realm} y {label.object:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.realm} {label.place}. Colui che {label.objectCategory} sar&agrave; il detentore {label.power@0}, ma rischia {label.risk}!",
                                            EN:"{label.realm} {label.place}. Those who {label.objectCategory} will get {label.power@0}, but it risks {label.risk}!",ES:"{label.realm} {label.place}. Quien {label.objectCategory} será el poseedor {label.power@0}, ¡pero se arriesga a {label.risk}!",
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",ES:"Completa los objetivos en el orden indicado:"
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
                                                        IT:"Raccogliere {label.part@2} {label.part:capital@3}",
                                                        EN:"Collect the {label.part:capital@5}",ES:"Recoger {label.part@2} {label.part:capital@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.part@1} e {label.collectOptionalItems@2} {label.part@2} {label.part:capital@3} nel Dungeon",
                                                        EN:"Collect all the {label.collectOptionalItems@2} {label.part:capital@5} in the Dungeon",ES:"Recoger {label.collectOptionalItems@2} {label.part:capital@5} de la Mazmorra",
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Raccogliere {label.collectOptionalItems@2} {label.part:capital@3} nel Dungeon",
                                                        EN:"Collect {label.collectOptionalItems@2} {label.part:capital@5} in the Dungeon",ES:"Recoger {label.collectOptionalItems@2} {label.part:capital@5} de la Mazmorra",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo. L'Eroe che lo fa ottiene 5 PE.",
                                                        EN:"The color-side-up Objective tokens represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up and immediately gain 5 XP.",ES:"{label.part:capital@2} {label.part:capital@3} están {label.part@4} por marcadores de Objetivo con el lado de color hacia arriba. Cualquier Héroe que se encuentre en la {label.part@6} puede interactuar con él para recogerlo e inmediatamente ganar 5 PE."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo.",
                                                        EN:"The color-side-up Objective tokens represent the {label.part:capital@5}. Any Hero carrying an Objective token with the colored side up represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up.",ES:"{label.part:capital@2} {label.part:capital@3} están {label.part@4} por marcadores de Objetivo con el lado de color hacia arriba. Cualquier Héroe que se encuentre en la {label.part@6} puede interactuar con él para recogerlo."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"The color-side-up Objective tokens represent the {label.part:capital@5}. Any Hero carrying an Objective token with the colored side up represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",ES:"{label.part:capital@2} {label.part:capital@3} están {label.part@4} por marcadores de Objetivo con el lado de color hacia arriba. Cualquier Héroe que se encuentre en la {label.part@6} puede interactuar con él para recogerlo, y todos los Héroes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"{label.destination@2}",
                                                        EN:"{label.destination@2}",ES:"{label.destination@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.part@1} e {label.collectOptionalItems@2} {label.part@2} {label.part:capital@3} per {label.destination@0}",
                                                        EN:"Use the {label.collectOptionalItems@2} {label.part:capital@5} to {label.destination@0}",ES:"Usar {label.collectOptionalItems@2} {label.part:capital@5} para {label.destination@0}",
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Usare {label.part@2} {label.collectOptionalItems@2} {label.part:capital@3} per {label.destination@0}",
                                                        EN:"Use the {label.collectOptionalItems@2} {label.part:capital@5} to {label.destination@0}",ES:"Usar {label.collectOptionalItems@2} {label.part:capital@5} para {label.destination@0}",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando {label.part@1} {label.part@2} {label.part:capital@3} sono {label.part@5}, se tutti gli Eroi che possiedono almeno 1 {label.part:capital@0} si trovano nella {label.destination@1} (rappresentata dal segnalino Obiettivo grigio), un qualsiasi Eroe nella stessa Zona pu&ograve; spendere 1 azione per {label.object@4} {label.object@1} e {label.questVictory@1}.",
                                                        EN:"When all of the {label.part:capital@5} have been collected, if all the Heroes with at least 1 {label.part:capital@0} are in the {label.destination@1} (the gray side-up Objective token), any Hero in that Zone may spend 1 action to {label.object@4} {label.object@0} and {label.questVictory@1}.",ES:"Cuando {label.part@1} {label.part@2} {label.part:capital@3} hayan sido {label.part@5}, si todos los Héroes que posean al menos 1 {label.part:capital@0} se encuentran en la {label.destination@1} (representada por el marcador de Objetivo gris), cualquier Héroe de esa Zona puede gastar 1 acción para {label.object@4} {label.object@0} y {label.questVictory@1}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando {label.part@2} {label.collectOptionalItems@2} {label.part:capital@3} sono {label.part@5}, se tutti gli Eroi che possiedono almeno 1 {label.part:capital@0} si trovano nella {label.destination@1} (rappresentata dal segnalino Obiettivo grigio), un qualsiasi Eroe nella stessa Zona pu&ograve; spendere 1 azione per {label.object@4} {label.object@1} e {label.questVictory@1}.",
                                                        EN:"When the {label.collectOptionalItems@2} {label.part:capital@5} have been collected, if all the Heroes with at least 1 {label.part:capital@0} are in the {label.destination@1} (the gray side-up Objective token), any Hero in that Zone may spend 1 action to {label.object@4} {label.object@0} and {label.questVictory@1}.",ES:"Cuando {label.collectOptionalItems@2} {label.part:capital@5} hayan sido {label.part@5}, si todos los Héroes que posean al menos 1 {label.part:capital@0} se encuentran en la {label.destination@1} (representada por el marcador de Objetivo gris), cualquier Héroe de esa Zona puede gastar 1 acción para {label.object@4} {label.object@0} y {label.questVictory@1}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom", "roamingToRoom" ],
                                            gameMode: [ "collectAndDeliver" ],
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, guardiano del potere {label.object@5}",
                                                    EN:"Eliminate {boss.bossBadName@0}, guardian {label.object@5} power",ES:"Elimina a {boss.bossBadName@0}, guardián del poder {label.object@5}",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",ES:"<p>Retira todos los marcadores de Objetivo del inventario de los Héroes.</p>"
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
                            forActs:[2,3],
                            forMaps:[0,1],
                            type:"collecttimed",
                            objective:{
                                EN:"Collect items within the time limit and reach a zone to win.",ES:"Recoge objetos dentro del límite de tiempo y alcanza una zona para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Le Chiavi delle Anime\"",
                                EN:"Inspired by the Hellscape quest \"The Soul Keys\"",ES:"Inspirado en la misión de Hellscape \"Las Llaves de las Almas\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                intro:[
                                                    {
                                                        IT:[ "A quanto pare, &egrave;" ],
                                                        EN:[ "Apparently, it is" ],ES:[ "Al parecer, es" ]
                                                    },{
                                                        IT:[ "Non ci sono dubbi: &egrave;" ],
                                                        EN:[ "There is no doubt about it: it is" ],ES:[ "No hay duda alguna: es" ],
                                                    },{
                                                        IT:[ "Finalmente lo abbiamo scoperto. &Egrave;" ],
                                                        EN:[ "We finally found out. It is" ],ES:[ "Por fin lo hemos descubierto. Es" ]
                                                    }
                                                ],
                                                culprit:[
                                                    {
                                                        IT:[ "la Morte", "la", "l'", "incarnata" ],
                                                        EN:[ "the Death", "the", "the", "embodied" ],ES:[ "la Muerte", "la", "la", "encarnada" ]
                                                    },{
                                                        IT:[ "il Male", "il", "l'", "incarnato" ],
                                                        EN:[ "the Evil", "the", "the", "embodied" ],ES:[ "el Mal", "el", "el", "encarnado" ]
                                                    },{
                                                        IT:[ "la Pestilenza", "la", "l'", "incarnata" ],
                                                        EN:[ "the Pestilence", "the", "the", "embodied" ],ES:[ "la Pestilencia", "la", "la", "encarnada" ]
                                                    }
                                                ],
                                                culpritBody:[
                                                    {
                                                        IT:[ "in persona" ],
                                                        EN:[ "in person" ],ES:[ "en persona" ]
                                                    },{
                                                        IT:[ "in carne ed ossa" ],
                                                        EN:[ "in flesh and blood" ],ES:[ "en carne y hueso" ]
                                                    },{
                                                        IT:[ "{label.culprit@3}" ],
                                                        EN:[ "{label.culprit@3}" ],ES:[ "{label.culprit@3}" ]
                                                    }
                                                ],
                                                culpritOf:[
                                                    {
                                                        IT:[ "{label.culprit@1} responsabile" ],
                                                        EN:[ "responsible for" ],ES:[ "{label.culprit@1} responsable de" ]
                                                    },{
                                                        IT:[ "{label.culprit@2}origine" ],
                                                        EN:[ "the origin of" ],ES:[ "{label.culprit@2} origen de" ]
                                                    },{
                                                        IT:[ "{label.culprit@1} causa" ],
                                                        EN:[ "the cause of" ],ES:[ "{label.culprit@1} causa de" ]
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[ "di questa nuova Oscurit&agrave;" ],
                                                        EN:[ "this new Darkness" ],ES:[ "esta nueva Oscuridad" ]
                                                    },{
                                                        IT:[ "di questa ondata di omicidi" ],
                                                        EN:[ "this wave of murders" ],ES:[ "esta ola de asesinatos" ]
                                                    },{
                                                        IT:[ "di queste recenti sparizioni" ],
                                                        EN:[ "these recent kidnappings" ],ES:[ "estas recientes desapariciones" ]
                                                    }
                                                ],
                                                chance:[
                                                    {
                                                        IT:[ "Ma &egrave; possibile raggiungere" ],
                                                        EN:[ "But is it possible to reach" ],ES:[ "Pero ¿es posible encontrar" ]
                                                    },{
                                                        IT:[ "&Egrave; davvero possibile incontrare" ],
                                                        EN:[ "It is truly possible to meet" ],ES:[ "¿Es posible de verdad encontrarse con" ]
                                                    },{
                                                        IT:[ "Ma dove si sta nascondendo" ],
                                                        EN:[ "But where is it hiding" ],ES:[ "Pero ¿dónde se esconde" ]
                                                    }
                                                ],
                                                discover:[
                                                    {
                                                        IT:[ "C'&egrave; solo un modo per scoprirlo." ],
                                                        EN:[ "There's only one way to find out." ],ES:[ "Solo hay una forma de averiguarlo." ]
                                                    },{
                                                        IT:[ "Qualcuno dice di aver scoperto un modo..." ],
                                                        EN:[ "Someone says they've discovered a way..." ],ES:[ "Alguien dice haber descubierto una forma..." ]
                                                    },{
                                                        IT:[ "Esiste un modo..." ],
                                                        EN:[ "There is a way..." ],ES:[ "Existe una forma..." ]
                                                    }
                                                ],
                                                item:[
                                                    {
                                                        IT:[ "le", "Chiavi", "una", "Chiave", "1 sola Chiave" ],
                                                        EN:[ "the", "Keys", "one", "Key", "1 single Key"],ES:[ "las", "Llaves", "una", "Llave", "1 sola Llave" ]
                                                    },{
                                                        IT:[ "le", "Schegge", "una", "Scheggia", "1 sola Scheggia" ],
                                                        EN:[ "the", "Shards", "one", "Shard", "1 single Shard"],ES:[ "las", "Esquirlas", "una", "Esquirla", "1 sola Esquirla" ]
                                                    },{
                                                        IT:[ "i", "Frammenti", "un", "Frammento", "1 solo Frammento" ],
                                                        EN:[ "the", "Fragments", "one", "Fragment", "1 single Fragment"],ES:[ "los", "Fragmentos", "un", "Fragmento", "1 solo Fragmento" ]
                                                    }
                                                ],
                                                itemOf:[
                                                    {
                                                        IT:[ "delle Anime", "dell'Anima" ],
                                                        EN:[ "Soul", "of Soul"],ES:[ "de las Almas", "del Alma" ]
                                                    },{
                                                        IT:[ "della Luce", "della Luce" ],
                                                        EN:[ "Light", "of Light"],ES:[ "de la Luz", "de la Luz" ]
                                                    },{
                                                        IT:[ "delle Ombre", "dell'Ombra" ],
                                                        EN:[ "Shadow", "of Shadow"],ES:[ "de las Sombras", "de la Sombra" ]
                                                    }
                                                ],
                                                exit:[
                                                    {
                                                        IT:[ "il Passaggio", "del Passaggio", "dal Passaggio" ],
                                                        EN:[ "the Passage", "Passage", "from the Passage" ],ES:[ "el Pasadizo", "del Pasadizo", "desde el Pasadizo" ]
                                                    },{
                                                        IT:[ "il Portale", "del Portale", "dal Portale" ],
                                                        EN:[ "the Portal", "Portal", "from the Portal" ],ES:[ "el Portal", "del Portal", "desde el Portal" ]
                                                    },{
                                                        IT:[ "il Cancello", "del Cancello", "dal Cancello" ],
                                                        EN:[ "the Gate", "Gate", "from the Gate" ],ES:[ "la Puerta", "de la Puerta", "desde la Puerta" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectTime:[
                                                    {
                                                        IT:[ "risparmiare tempo", "raccogliendo collettivamente 3 segnalini Tempo o pi&ugrave;" ],
                                                        EN:[ "spare some time", "collectively collecting 3 Time tokens or more" ],ES:[ "ahorrar algo de tiempo", "recogiendo colectivamente 3 marcadores de Tiempo o más" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.item:capital@0} {label.item@1} {label.itemOf@0}",
                                            EN: "{label.item:capital@0} {label.itemOf@0} {label.item@1}",ES:"{label.item:capital@1} {label.itemOf@0}"
                                        },{
                                            IT: "{label.culprit:capital@0} {label.culpritBody@0}",
                                            EN: "{label.culprit:capital@0} {label.culpritBody@0}",ES:"{label.culprit:capital@0} {label.culpritBody@0}"
                                        },{
                                            IT: "{label.item:capital@0} {label.item:capital@1} e {label.exit@0}",
                                            EN: "{label.item:capital@0} {label.item:capital@1} and {label.exit@0}",ES:"{label.item:capital@1} y {label.exit@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}",
                                            EN:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}",ES:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",ES:"Completa los objetivos en el orden indicado:"
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
                                                        IT:"Raccogliere {label.item@0} {label.item@1} {label.itemOf@0}",
                                                        EN:"Collect {label.item@0} {label.itemOf@0} {label.item@1}",ES:"Recoger {label.item@0} {label.item@1} {label.itemOf@0}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.item@0} {label.item@1} prima che svaniscano",
                                                        EN:"Collect {label.item@0} {label.item@1} before they vanish",ES:"Recoger {label.item@0} {label.item@1} antes de que desaparezcan",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire {label.exit@2}",
                                                        EN:"Escape {label.exit@2}",ES:"Huir {label.exit@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uscire dal Dungeon attraverso {label.exit@0}",
                                                        EN:"Exit the Dungeon via {label.exit@0}",ES:"Salir de la Mazmorra a través {label.exit@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.exit:capital@0}",
                                                        EN:"{label.exit:capital@0}",ES:"{label.exit:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Camera {label.exit@1} &egrave; accessibile soltanto attraverso la porta dal bordo rosso. Questa porta &egrave; chiusa a chiave e pu&ograve; essere aperta solo quando gli Eroi possiedono collettivamente {label.item@0} {tokensCount.objective} {label.item@1} {label.itemOf@0} per accedere alla Camera. Un Eroe che si trova nella zona {label.exit@1} (il segnalino Obiettivo grigio) pu&ograve; spendere 1 PM per uscire dal Dungeon. Non appena tutti gli Eroi sono usciti dal Dungeon, {label.questVictory@0}.",
                                                        EN:"The {label.exit@1} Chamber is only accessible through the red-bordered door. This door is locked and can only be opened when the Heroes collectively own {label.item@0} {tokensCount.objective} {label.itemOf@0} {label.item@1} to access the Chamber. A Hero in the {label.exit@1} area (the gray Objective token) can spend 1 MP to exit the Dungeon. As soon as all Heroes have exited the Dungeon, {label.questVictory@0}.",ES:"La Cámara {label.exit@1} solo es accesible a través de la puerta con el borde rojo. Esta puerta está cerrada con llave y solo puede abrirse cuando los Héroes posean colectivamente {label.item@0} {tokensCount.objective} {label.item@1} {label.itemOf@0} para acceder a la Cámara. Un Héroe que se encuentre en la zona {label.exit@1} (el marcador de Objetivo gris) puede gastar 1 PM para salir de la Mazmorra. En cuanto todos los Héroes hayan salido de la Mazmorra, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Tempo Stringe",
                                                        EN:"Time is Running Out",ES:"El Tiempo Se Acaba"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, collocate i segnalini Tempo su ogni segnalino Obiettivo nella stessa Zona. Durante ogni Fase dell'Oscurit&agrave;, rimuovete 1 segnalino Tempo da ogni segnalino Obiettivo. Se in un qualsiasi momento i giocatori devono rimuovere un segnalino da un segnalino Obiettivo e non ne rimane nessuno, esso scompare e la Missione termina con una sconfitta.",
                                                        EN:"During setup, place Time tokens on each Objective token in the same Zone. During each Darkness Phase, remove 1 Time token from each Objective token. If at any time players must remove a token from an Objective token and none remains, it disappears and the Mission ends in defeat.",ES:"Durante la preparación, coloca marcadores de Tiempo sobre cada marcador de Objetivo de la misma Zona. Durante cada Fase de la Oscuridad, retira 1 marcador de Tiempo de cada marcador de Objetivo. Si en algún momento los jugadores deben retirar un marcador de un marcador de Objetivo y no queda ninguno, este desaparece y la Misión termina en derrota."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Raccogliere {label.item@0} {label.item@1} {label.itemOf@0}",
                                                        EN:"Collect {label.item@0} {label.itemOf@0} {label.item@1}",ES:"Recoger {label.item@0} {label.item@1} {label.itemOf@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla. Ogni volta che {label.item@2} {label.item@3} {label.itemOf@1} viene raccolta, i segnalini Tempo su di esso vengono rimossi e ogni Eroe ottiene 8 PE. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up. Each time {label.item@2} {label.itemOf@0} {label.item@3} is picked up, the Time tokens are removed and all Heroes gain 8 XP. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat.",ES:"Cada marcador de Objetivo representa {label.item@2} {label.itemOf@0} {label.item@3}. Cualquier Héroe que se encuentre en la misma Zona que {label.item@2} {label.itemOf@0} {label.item@3} puede gastar 1 acción para recogerla. Cada vez que se recoge {label.item@2} {label.itemOf@0} {label.item@3}, se retiran sus marcadores de Tiempo y cada Héroe gana 8 PE. Recuerda que {label.item@0} {label.itemOf@0} {label.item@1} están desapareciendo: si {label.item@4} llega a desaparecer, la Misión termina en derrota."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla insieme ai suoi segnalini Tempo rimasti. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up with its remaining Time tokens. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat.",ES:"Cada marcador de Objetivo representa {label.item@2} {label.itemOf@0} {label.item@3}. Cualquier Héroe que se encuentre en la misma Zona que {label.item@2} {label.itemOf@0} {label.item@3} puede gastar 1 acción para recogerla junto con sus marcadores de Tiempo restantes. Recuerda que {label.item@0} {label.itemOf@0} {label.item@1} están desapareciendo: si {label.item@4} llega a desaparecer, la Misión termina en derrota."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla insieme ai suoi segnalini Tempo rimasti e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up with its remaining Time tokens and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat.",ES:"Cada marcador de Objetivo representa {label.item@2} {label.itemOf@0} {label.item@3}. Cualquier Héroe que se encuentre en la misma Zona que {label.item@2} {label.itemOf@0} {label.item@3} puede gastar 1 acción para recogerla junto con sus marcadores de Tiempo restantes, y todos los Héroes ganan {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Recuerda que {label.item@0} {label.itemOf@0} {label.item@1} están desapareciendo: si {label.item@4} llega a desaparecer, la Misión termina en derrota."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Piani Eterei",
                                                        EN:"Ethereal Planes",ES:"Planos Etéreos"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I nemici possono liberamente muoversi attraverso le porte anche se sono chiuse. Le porte chiuse bloccano comunque la Linea di Vista.",
                                                        EN:"Enemies can freely move through doors even if they are closed. Closed doors still block the Line of Sight.",ES:"Los enemigos pueden moverse libremente a través de las puertas, incluso si están cerradas. Las puertas cerradas siguen bloqueando la Línea de Visión."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "collectTimed" ],
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
                                                    [ "visitAllRooms", "collectTime" ]
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
                                                    EN:"Defeat {boss.bossBadName@0}",ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}",ES:"Eliminar a {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",ES:"<p>Retira todos los marcadores de Objetivo del inventario de los Héroes.</p>"
                                        },
                                        campaignPreparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo e Tempo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective and Time tokens from the Heroes' inventories.</p>",ES:"<p>Retira todos los marcadores de Objetivo y de Tiempo del inventario de los Héroes.</p>"
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