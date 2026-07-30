ModManager.modules.push(function(){

    return [
        {

            id:"challenges-default",
            needs:[ "md2-hellscape" ],
            provides:[ "challenges-default" ],
            label:{
                EN:"MD2 challenges default configurations"
            },
            content:[
                {
                    type:"challenges",
                    data:[
                        {
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Armatura Abissale",
                                            EN:"Abyssal Armor",ES:"Armadura Abisal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa:</span> +{symbol.blueDie}",
                                            EN:"Enemies have <span class='phase'>Defense:</span> +{symbol.blueDie}",ES:"Los Enemigos tienen <span class='phase'>Defensa:</span> +{symbol.blueDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Forza Abissale",
                                            EN:"Abyssal Strength",ES:"Fuerza Abisal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Gregari ed i Comandanti hanno +1 Salute.",
                                            EN:"Minions and Leaders do have +1 Health.",ES:"Los Secuaces y los Líderes tienen +1 Vida."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Patto del Sangue",
                                            EN:"Blood Path",ES:"Pacto de Sangre"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span> {symbol.mana}: +{symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span> {symbol.mana}: +{symbol.fang}",ES:"Los Enemigos tienen <span class='phase'>Combate</span> {symbol.mana}: +{symbol.fang}"
                                        }
                                    ]
                                }
                            ],
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Daghe Demoniache",
                                            EN:"Demon Daggers",ES:"Dagas Demoníacas"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +{symbol.yellowDie}",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +{symbol.yellowDie}",ES:"Los Enemigos tienen <span class='phase'>Ataque</span>: +{symbol.yellowDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Artigli Glaciali",
                                            EN:"Glacial Claws",ES:"Garras Glaciales"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: +{symbol.frostToken} (una volta per round)",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: +{symbol.frostToken} (once per round)",ES:"Los Enemigos tienen <span class='phase'>Ataque</span> {symbol.mana}: +{symbol.frostToken} (una vez por ronda)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Odio",
                                            EN:"Hatred",ES:"Odio"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Rilancia tutti i risultati vuoti su {symbol.blackDie}",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: Reroll all blank results on {symbol.blackDie}",ES:"Los Enemigos tienen <span class='phase'>Ataque</span> {symbol.mana}: Vuelve a tirar todos los resultados en blanco de {symbol.blackDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Furia Infernale",
                                            EN:"Hell's Fury",ES:"Furia Infernal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le armi nemiche contano come {symbol.rangeRanged} in aggiunta al loro tipo.",
                                            EN:"Enemy weapons count as {symbol.rangeRanged} in addition to its type.",ES:"Las armas enemigas cuentan como {symbol.rangeRanged} además de su tipo."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"L'Ira dell'Inferno",
                                            EN:"Hell's Wrath",ES:"La Ira del Infierno"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le armi nemiche contano come {symbol.rangeMagic} in aggiunta al loro tipo.",
                                            EN:"Enemy weapons count as {symbol.rangeMagic} in addition to its type.",ES:"Las armas enemigas cuentan como {symbol.rangeMagic} además de su tipo."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Lame Infernali",
                                            EN:"Inferno Blades",ES:"Hojas Infernales"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: +{symbol.fireToken} (una volta per round)",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: +{symbol.fireToken} (once per round)",ES:"Los Enemigos tienen <span class='phase'>Ataque</span> {symbol.mana}: +{symbol.fireToken} (una vez por ronda)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Mistura Velenosa",
                                            EN:"Poisonous Mixture",ES:"Mezcla Venenosa"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span> {symbol.mana}: +1 {symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span> {symbol.mana}: +1 {symbol.fang}",ES:"Los Enemigos tienen <span class='phase'>Combate</span> {symbol.mana}: +1 {symbol.fang}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Nessun Perdono",
                                            EN:"No Forgiveness",ES:"Sin Perdón"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Non utilizzare alcun segnalino Latore di Vita. Se un Eroe viene messo KO, la Missione termina con la sconfitta.",
                                            EN:"Do not use any Lifebringer tokens. If one Hero is KO'd, the Mission ends in defeat.",ES:"No utilices ningún marcador de Portador de Vida. Si un Héroe queda fuera de combate, la Misión termina en derrota."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Debilitante",
                                            EN:"Debilitating Weakness",ES:"Debilidad Debilitante"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando i gli Eroi attaccano i Nemici tirano 1 {symbol.yellowDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.yellowDie}.",ES:"Cuando los Héroes atacan a los Enemigos, tiran 1 {symbol.yellowDie} menos."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Lame Demoniache",
                                            EN:"Demon Blades",ES:"Hojas Demoníacas"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +1 {symbol.sword}",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +1 {symbol.sword}",ES:"Los Enemigos tienen <span class='phase'>Ataque</span>: +1 {symbol.sword}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Spade Demoniache",
                                            EN:"Demon Swords",ES:"Espadas Demoníacas"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +1 {symbol.blackDie}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +1 {symbol.blackDie}",ES:"Los Enemigos tienen <span class='phase'>Combate</span>: +1 {symbol.blackDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Vento Infernale",
                                            EN:"Hellish Wind",ES:"Viento Infernal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Dopo questo attacco sposta l'eroe difensore di 1 Zona verso questo Nemico.",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: After this attack, move the defending hero 1 Zone toward this Enemy.",ES:"Los Enemigos tienen <span class='phase'>Ataque</span> {symbol.mana}: Después de este ataque, mueve al héroe defensor 1 Zona hacia este Enemigo."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Pervasiva",
                                            EN:"Pervasive Weakness",ES:"Debilidad Generalizada"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando attaccano i Nemici, gli Eroi tirano 1 {symbol.yellowDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.yellowDie}.",ES:"Cuando los Héroes atacan a los Enemigos, tiran 1 {symbol.yellowDie} menos."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Mistura Velenosa 2",
                                            EN:"Poisonous Mixture 2",ES:"Mezcla Venenosa 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +1 {symbol.scratch}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +1 {symbol.scratch}",ES:"Los Enemigos tienen <span class='phase'>Combate</span>: +1 {symbol.scratch}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Velocit&agrave; Innaturale",
                                            EN:"Unnatural Speed",ES:"Velocidad Antinatural"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando si attivano, I Nemici hanno +1 Movimento.",
                                            EN:"When activating, Enemies have +1 Move action.",ES:"Al activarse, los Enemigos tienen +1 Movimiento."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Ben Equipaggiati",
                                            EN:"Well Equipped",ES:"Bien Equipados"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le Orde sono generate sempre con un oggetto di livello superiore, se possibile.",
                                            EN:"Mobs always Spawn with an item from a higher tier, if possible.",ES:"Las Cuadrillas siempre aparecen con un objeto de un nivel superior, si es posible."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Burrasca Abissale",
                                            EN:"Abyssal Gale",ES:"Vendaval Abisal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Dopo questo attacco, sposta l'Eroe difensore di 1 Zona verso la Zona di Partenza degli Eroi.",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: After this attack, move the defending Hero 1 Zone toward the Hero starting space.",ES:"Los Enemigos tienen <span class='phase'>Ataque</span> {symbol.mana}: Después de este ataque, mueve al Héroe defensor 1 Zona hacia la Zona de Partida de los Héroes."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Burrasca Abissale",
                                            EN:"Abyssal Gale",ES:"Vendaval Abisal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +{symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +{symbol.fang}",ES:"Los Enemigos tienen <span class='phase'>Combate</span>: +{symbol.fang}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Debilitante 2",
                                            EN:"Debilitating Weakness 2",ES:"Debilidad Debilitante 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando i gli Eroi attaccano i Nemici tirano 1 {symbol.orangeDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.orangeDie}.",ES:"Cuando los Héroes atacan a los Enemigos, tiran 1 {symbol.orangeDie} menos."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Daghe Demoniache 2",
                                            EN:"Demon Daggers 2",ES:"Dagas Demoníacas 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +{symbol.orangeDie}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +{symbol.orangeDie}",ES:"Los Enemigos tienen <span class='phase'>Combate</span>: +{symbol.orangeDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Assorbimento Energetico",
                                            EN:"Energy Drain",ES:"Absorción de Energía"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa</span>: L'Eroe attaccante perde 1 {symbol.mana}",
                                            EN:"Enemies have <span class='phase'>Defense</span>: Attacking Hero loses 1 {symbol.mana}",ES:"Los Enemigos tienen <span class='phase'>Defensa</span>: El Héroe atacante pierde 1 {symbol.mana}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Armatura Infernale",
                                            EN:"Hellish Armor",ES:"Armadura Infernal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa</span>: +{symbol.shield}",
                                            EN:"Enemies have <span class='phase'>Defense</span>: +{symbol.shield}",ES:"Los Enemigos tienen <span class='phase'>Defensa</span>: +{symbol.shield}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Evocazione delle Ombre",
                                            EN:"Shadow Summons",ES:"Invocación de Sombras"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +{symbol.purpleDie} ({symbol.face}: Aggiungi 1 Gregario a questa Orda / Questo Mostro Errante si cura di 5)",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +{symbol.purpleDie} ({symbol.face}: Add 1 Minion to this Mob / This Roaming Monster Heals 5)",ES:"Los Enemigos tienen <span class='phase'>Ataque</span>: +{symbol.purpleDie} ({symbol.face}: Añade 1 Secuaz a esta Cuadrilla / Este Monstruo Errante recupera 5 de Vida)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Scivolata",
                                            EN:"Slink",ES:"Deslizamiento"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: Dopo il combattimento muovi questo Nemico di 1 Zona pi&ugrave; lontano dall'Eroe attaccante o difensore, se possibile (una volta per tiro).",
                                            EN:"Enemies have <span class='phase'>Combat</span>: After combat, move this Enemy 1 Zone away from the attacking or defending Hero, if possible (once per roll).",ES:"Los Enemigos tienen <span class='phase'>Combate</span>: Después del combate, mueve a este Enemigo 1 Zona más lejos del Héroe atacante o defensor, si es posible (una vez por tirada)."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Crescita Bloccata",
                                            EN:"Stopped Growth",ES:"Crecimiento Detenido"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando sali di livello, non ottieni il beneficio +1 Salute massima o +1 Mana massimo. A meno che un'abilit&agrave; non indichi diversamente, la salute massima e il mana degli eroi sono i loro valori iniziali.",
                                            EN:"When leveling up, do not gain the +1 Max Health or +1 Max Mana benefit. Unless a skill states otherwise, Heroes' Max Health and Mana are their starting values.",ES:"Al subir de nivel, no obtienes el beneficio de +1 Vida máxima ni +1 Maná máximo. A menos que una habilidad indique lo contrario, la Vida y el Maná máximos de los Héroes son sus valores iniciales."
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
