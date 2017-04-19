import {EventType} from './event-type';
import {types} from './event-type';

export class Event {
    id: number;
    icon: string;
    minLight: number;
    maxGuardians: number;
    eventType: EventType;
    en: string;
    pt: string;
    es: string;

    constructor(
      id: number,
      icon: string,
      minLight: number,
      maxGuardians: number,
      eventType: EventType,
      en: string,
      pt: string,
      es: string,
    ) {
      this.id = id;
      this.icon = icon;
      this.minLight = minLight;
      this.maxGuardians = maxGuardians;
      this.eventType = eventType;
      this.en = en;
      this.pt = pt;
      this.es = es;
    }

}

export const events: Event[] = [
  {
    id: 1,
    icon: 'ic_patrol',
    minLight: 190,
    maxGuardians: 3,
    eventType: types[0],
    en: 'Reciprocal Rune',
    pt: 'Runa Recíproca',
    es: 'Runa Recíproca'
  },
  {
    id: 2,
    icon: 'ic_patrol',
    minLight: 240,
    maxGuardians: 3,
    eventType: types[0],
    en: 'Stolen Rune',
    pt: 'Runa Roubada',
    es: 'Runa Robada'
  },
  {
    id: 3,
    icon: 'ic_patrol',
    minLight: 300,
    maxGuardians: 3,
    eventType: types[0],
    en: 'Antiquated Rune',
    pt: 'Runa Antiquada',
    es: 'Runa Anticuada'
  },
  {
    id: 4,
    icon: 'ic_clash',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Clash',
    pt: 'Enfrentamento',
    es: 'Enfrentamiento'
  },
  {
    id: 5,
    icon: 'ic_classic',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[1],
    en: 'Classic: 3x3',
    pt: 'Clássico: 3x3',
    es: 'Clásico: 3x3'
  },
  {
    id: 6,
    icon: 'ic_clash',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Classic: 6x6',
    pt: 'Clássico: 3x3',
    es: 'Clásico: 6x6'
  },
  {
    id: 7,
    icon: 'ic_rumble',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Classic: Rumble',
    pt: 'Clássico: Briga',
    es: 'Clásico: Disputa'
  },
  {
    id: 8,
    icon: 'ic_control',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Control',
    pt: 'Controle',
    es: 'Control'
  },
  {
    id: 9,
    icon: 'ic_doubles',
    minLight: 5,
    maxGuardians: 2,
    eventType: types[1],
    en: 'Doubles',
    pt: 'Duplas',
    es: 'Dobles'
  },
  {
    id: 10,
    icon: 'ic_elimination',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[1],
    en: 'Elimination',
    pt: 'Eliminação',
    es: 'Eliminación'
  },
  {
    id: 11,
    icon: 'ic_inferno1',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Inferno: Rumble',
    pt: 'Inferno: Briga',
    es: 'Disputa Infernal'
  },
  {
    id: 12,
    icon: 'ic_inferno3v3',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[1],
    en: 'Inferno: 3x3',
    pt: 'Inferno: 3x3',
    es: 'Infernal: 3x3'
  },
  {
    id: 13,
    icon: 'ic_inferno6v6',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Inferno: 6x6',
    pt: 'Inferno: 6x6',
    es: 'Infernal: 6x6'
  },
  {
    id: 14,
    icon: 'ic_iron_banner',
    minLight: 230,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Iron Banner',
    pt: 'Bandeira de Ferro',
    es: 'Estandarte de Hierro'
  },
  {
    id: 15,
    icon: 'ic_mayhem_clash',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Mayhem: Clash',
    pt: 'Caos: Enfrentamento',
    es: 'Caos: Enfrentamiento'
  },
  {
    id: 16,
    icon: 'ic_mayhem_rumble',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Mayhem: Rumble',
    pt: 'Caos: Briga',
    es: 'Caos: Disputa'
  },
  {
    id: 17,
    icon: 'ic_rift',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Rift',
    pt: 'Fissura',
    es: 'Grieta'
  },
  {
    id: 18,
    icon: 'ic_rumble',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Rumble',
    pt: 'Briga',
    es: 'Disputa'
  },
  {
    id: 19,
    icon: 'ic_salvage',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[1],
    en: 'Salvage',
    pt: 'Recuperação',
    es: 'Rescate'
  },
  {
    id: 20,
    icon: 'ic_skirmish',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[1],
    en: 'Skirmish',
    pt: 'Disputa',
    es: 'Escaramuza'
  },
  {
    id: 21,
    icon: 'ic_trials',
    minLight: 251,
    maxGuardians: 3,
    eventType: types[1],
    en: 'Trials of Osiris',
    pt: 'Desafios de Osiris',
    es: 'Pruebas de Osiris'
  },
  {
    id: 22,
    icon: 'ic_zone_control',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Zone Control',
    pt: 'Controle de Zonas',
    es: 'Control de Zonas'
  },
  {
    id: 23,
    icon: 'ic_patrol',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[2],
    en: 'Patrol the Cosmodrome',
    pt: 'Patrulhe o Cosmódromo',
    es: 'Patrulla el Cosmódromo'
  },
  {
    id: 24,
    icon: 'ic_patrol',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[2],
    en: 'Patrol the Dreadnaught',
    pt: 'Patrule o Encouraçado',
    es: 'Patrulla el Acorazado'
  },
  {
    id: 25,
    icon: 'ic_patrol',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[2],
    en: 'Patrol Mars',
    pt: 'Patrulhe Marte',
    es: 'Patrulla Marte'
  },
  {
    id: 26,
    icon: 'ic_patrol',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[2],
    en: 'Patrol the Moon',
    pt: 'Patrulhe a Lua',
    es: 'Patrulla la Luna'
  },
  {
    id: 27,
    icon: 'ic_patrol',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[2],
    en: 'Patrol Venus',
    pt: 'Patrulhe Vênus',
    es: 'Patrulla Venus'
  },
  {
    id: 28,
    icon: 'ic_prison',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[3],
    en: 'Prison of Elders: 28',
    pt: 'Prisão dos Anciões: 28',
    es: 'El Presidio de los Ancianos: 28'
  },
  {
    id: 29,
    icon: 'ic_prison',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[3],
    en: 'Prison of Elders: 32',
    pt: 'Prisão dos Anciões: 32',
    es: 'El Presidio de los Ancianos: 32'
  },
  {
    id: 30,
    icon: 'ic_prison',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[3],
    en: 'Prison of Elders: 34',
    pt: 'Prisão dos Anciões: 34',
    es: 'El Presidio de los Ancianos: 34'
  },
  {
    id: 31,
    icon: 'ic_skolas',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[3],
    en: 'Skola\'s Revenge',
    pt: 'Vingança de Skolas',
    es: 'La Venganza de Skolas'
  },
  {
    id: 32,
    icon: 'ic_prison',
    minLight: 260,
    maxGuardians: 3,
    eventType: types[3],
    en: 'Prison of Elders: 41',
    pt: 'Prisão dos Anciões: 41',
    es: 'El Presidio de los Ancianos: 41'
  },
  {
    id: 33,
    icon: 'ic_challenge',
    minLight: 320,
    maxGuardians: 3,
    eventType: types[3],
    en: 'Challenge of Elders',
    pt: 'Desafio dos Anciões',
    es: 'Desafío de los Ancianos'
  },
  {
    id: 34,
    icon: 'ic_raid',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[4],
    en: 'Crota\'s End: Normal',
    pt: 'Fim de Crota: Normal',
    es: 'El fin de Crota: Normal'
  },
  {
    id: 35,
    icon: 'ic_raid',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[4],
    en: 'Crota\'s End: Heroic',
    pt: 'Fim de Crota: Heroico',
    es: 'El fin de Crota: Heroico'
  },
  {
    id: 36,
    icon: 'ic_raid',
    minLight: 290,
    maxGuardians: 6,
    eventType: types[4],
    en: 'King\'s Fall: Normal',
    pt: 'A Queda do Rei: Normal',
    es: 'Caída del Rey: Normal'
  },
  {
    id: 37,
    icon: 'ic_raid',
    minLight: 310,
    maxGuardians: 6,
    eventType: types[4],
    en: 'King\'s Fall: Heroic',
    pt: 'A Queda do Rei: Heroico',
    es: 'Caída del Rey: Heroico'
  },
  {
    id: 38,
    icon: 'ic_raid',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[4],
    en: 'Vault of Glass: Normal',
    pt: 'Câmara de Cristal: Normal',
    es: 'Cámara de Cristal: Normal'
  },
  {
    id: 39,
    icon: 'ic_raid',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[4],
    en: 'Vault of Glass: Heroic',
    pt: 'Câmara de Cristal: Heroico',
    es: 'Cámara de Cristal: Heroico'
  },
  {
    id: 40,
    icon: 'ic_story',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[5],
    en: 'Story: Normal',
    pt: 'História: Normal',
    es: 'Historia: Normal'
  },
  {
    id: 41,
    icon: 'ic_story_heroic',
    minLight: 240,
    maxGuardians: 3,
    eventType: types[5],
    en: 'Story: Heroic',
    pt: 'História: Heroica',
    es: 'Historia: Heroica'
  },
  {
    id: 42,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Blighted Calice',
    pt: 'Cálice Maculado',
    es: 'Cáliz Plagado'
  },
  {
    id: 43,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Cerberus Vae III',
    pt: 'Cerberus Vae III',
    es: 'Cerberus Vae III'
  },
  {
    id: 44,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Dust Palace',
    pt: 'Palácio das Areias',
    es: 'Palacio de Polvo'
  },
  {
    id: 45,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Echo Chamber',
    pt: 'Câmara do Eco',
    es: 'Cámara del Eco'
  },
  {
    id: 46,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Fallen S.A.B.E.R.',
    pt: 'S.A.B.E.R. Decaído',
    es: 'S.A.B.E.R. Caído'
  },
  {
    id: 47,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Shield Brothers',
    pt: 'Irmãos Escudeiros',
    es: 'Hermanos Escudo'
  },
  {
    id: 48,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'The Devil\'s Lair',
    pt: 'O Covil dos Demônios',
    es: 'Guarida de los Demonios'
  },
  {
    id: 49,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'The Nexus',
    pt: 'O Nexo',
    es: 'El Nexo'
  },
  {
    id: 50,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Shadow Thief',
    pt: 'O Ladrão das Sombras',
    es: 'El Ladrón de Sombras'
  },
  {
    id: 51,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Summoning Pits',
    pt: 'O Precipício da Invocação',
    es: 'Los Fosos de Invocación'
  },
  {
    id: 52,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'The Sunless Cell',
    pt: 'A Cela sem Sol',
    es: 'La Celda sin Sol'
  },
  {
    id: 53,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'The Undying Mind',
    pt: 'A Mente Imortal',
    es: 'La mente Imperecedera'
  },
  {
    id: 54,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Will of Crota',
    pt: 'A Vontade de Crota',
    es: 'La Voluntad de Crota'
  },
  {
    id: 55,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Winter\'s Run',
    pt: 'Caminho Invernal',
    es: 'Carrera de Invierno'
  },
  {
    id: 56,
    icon: 'ic_nightfall',
    minLight: 280,
    maxGuardians: 3,
    eventType: types[7],
    en: 'Nightfall Strike',
    pt: 'Assalto do Anoitecer',
    es: 'Asalto de Ocaso'
  },
  {
    id: 57,
    icon: 'ic_weekly_strike',
    minLight: 260,
    maxGuardians: 3,
    eventType: types[7],
    en: 'Weekly Heroic Strike',
    pt: 'Assalto Heroico Semanal',
    es: 'Asalto Heroico semanal'
  },
  {
    id: 58,
    icon: 'ic_strike',
    minLight: 260,
    maxGuardians: 3,
    eventType: types[7],
    en: 'Taken Wars: Heroic',
    pt: 'Guerra dos Possuídos: Heroico',
    es: 'Guerra de los Possuídos: Heroico'
  },
  {
    id: 59,
    icon: 'ic_strike',
    minLight: 200,
    maxGuardians: 3,
    eventType: types[7],
    en: 'Taken Wars',
    pt: 'Guerra dos Possuídos',
    es: 'Guerra de los Possuídos'
  },
  {
    id: 60,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[7],
    en: 'Legacy Strikes',
    pt: 'Assaltos do Legado',
    es: 'Legados de la Vanguarda'
  },
  {
    id: 61,
    icon: 'ic_srl',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[8],
    en: 'Sparrow Race',
    pt: 'Corrida de Pardais',
    es: 'Carreras de Colibriés'
  },
  {
    id: 62,
    icon: 'ic_inferno2',
    minLight: 5,
    maxGuardians: 2,
    eventType: types[1],
    en: 'Inferno: Doubles',
    pt: 'Inferno: Duplas',
    es: 'Infernal: Dobles'
  },
  {
    id: 63,
    icon: 'ic_supremacy',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Supremacy',
    pt: 'Supremacia',
    es: 'Supremacía'
  },
  {
    id: 64,
    icon: 'ic_inferno_sup',
    minLight: 5,
    maxGuardians: 6,
        eventType: types[1],
    en: 'Inferno: Supremacy',
    pt: 'Inferno: Supremacia',
    es: 'Supremacía Infernal'
  },
  {
    id: 65,
    icon: 'ic_rumble_sup',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Rumble Supremacy',
    pt: 'Briga: Supremacia',
    es: 'Supremacía Disputa'
  },
  {
    id: 66,
    icon: 'ic_supremacy',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Mayhem: Supremacy',
    pt: 'Caos: Supremacia',
    es: 'Caos: Supremacía'
  },
  {
    id: 67,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'The Abomination Heist',
    pt: 'O Golpe à Abominação',
    es: 'El Rapto de la Abominación'
  },
  {
    id: 68,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'Sepiks Perfected',
    pt: 'Sepiks Aperfeiçoado',
    es: 'Sepiks Perfeccionado'
  },
  {
    id: 69,
    icon: 'ic_strike',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[6],
    en: 'The Wretched Eye',
    pt: 'O Olho Maldito',
    es: 'El Abominable Ojo'
  },
  {
    id: 70,
    icon: 'ic_patrol',
    minLight: 320,
    maxGuardians: 3,
    eventType: types[2],
    en: 'Patrol the Plaguelands',
    pt: 'Patrulhe as Terras Pestíferas',
    es: 'Patrulla las Tierras Pestíferas'
  },
  {
    id: 71,
    icon: 'ic_strike',
    minLight: 320,
    maxGuardians: 3,
    eventType: types[6],
    en: 'SIVA Crisis',
    pt: 'Crise da SIVA',
    es: 'Crisis de SIVA'
  },
  {
    id: 72,
    icon: 'ic_strike_heroic',
    minLight: 350,
    maxGuardians: 3,
    eventType: types[7],
    en: 'SIVA Crisis: Heroic',
    pt: 'Crise da SIVA: Heroico',
    es: 'Crisis de SIVA Heroica'
  },
  {
    id: 73,
    icon: 'ic_combined',
    minLight: 5,
    maxGuardians: 6,
    eventType: types[1],
    en: 'Combined Arms',
    pt: 'Armas Combinadas',
    es: 'Armas Combinadas'
  },
  {
    id: 74,
    icon: 'ic_raid',
    minLight: 370,
    maxGuardians: 6,
    eventType: types[4],
    en: 'Wrath of the Machine: Normal',
    pt: 'A Ira da Máquina: Normal',
    es: 'La Fúria de las Máquinas: Normal'
  },
  {
    id: 75,
    icon: 'ic_patrol',
    minLight: 320,
    maxGuardians: 3,
    eventType: types[9],
    en: 'Fused Offering',
    pt: 'Oferenda Fundida',
    es: 'Ofrenda Imbuida'
  },
  {
    id: 76,
    icon: 'ic_patrol',
    minLight: 340,
    maxGuardians: 3,
    eventType: types[9],
    en: 'Enhanced Offering',
    pt: 'Oferenda Otimizada',
    es: 'Ofrenda Alterada'
  },
  {
    id: 77,
    icon: 'ic_patrol',
    minLight: 360,
    maxGuardians: 3,
    eventType: types[9],
    en: 'Perfected Offering',
    pt: 'Oferenda Aperfeiçoada',
    es: 'Ofrenda Perfeccionada'
  },
  {
    id: 78,
    icon: 'ic_raid',
    minLight: 390,
    maxGuardians: 6,
    eventType: types[4],
    en: 'Wrath of the Machine: Heroic',
    pt: 'A Ira da Máquina: Heroico',
    es: 'La Fúria de las Máquinas: Heroico'
  },
  {
    id: 79,
    icon: 'ic_inferno_elim',
    minLight: 5,
    maxGuardians: 3,
    eventType: types[1],
    en: 'Inferno: Elimination',
    pt: 'Inferno: Eliminação',
    es: 'Infierno: Eliminación'
  }
];
