import { CombatUnitSpec } from '@wowarenalogs/parser';

/*
 This structure controls what spells are shown in the cooldowns tracker
  on the replay view. Since this view is based on the display used by
  the AWC tournament, the name awcSpells is used.
*/
//
export const awcSpells: Record<CombatUnitSpec, string[]> = {
  // These spells should be tracked for all specs
  // Trinkets, neutral spells
  '0': ['324631', '300728', '310143', '323436', '336126'],

  //   DeathKnight_Blood = "250",
  '250': ['48707', '47528', '49039', '48792', '51052'],

  //   DeathKnight_Frost = "251",
  '251': [
    '47568',
    '212552',
    '51271',
    '48792',
    '145629',
    '48707',
    '47528',
    '49039',
    '51052',
    '279302',
    '152279',
    '207167',
    '48743',
  ],

  //   DeathKnight_Unholy = "252",
  '252': ['48707', '47528', '49039', '48792', '51052', '145629', '275699', '63560', '42650', '48743', '49206'],

  //   DemonHunter_Havoc = "577",
  '577': ['198589', '191427', '196718', '196555', '205604', '206803', '323639'],

  //   DemonHunter_Vengeance = "581",
  '581': ['198589', '191427', '323639'],

  //   Druid_Balance = "102",
  '102': ['5211', '22842', '323764', '202770', '22812', '305497', '78675', '194223', '29166', '102560'],

  //   Druid_Feral = "103",
  '103': ['5211', '5217', '323764', '22842', '22812', '61336', '106951', '102793', '102543', '108238', '305497'],

  //   Druid_Guardian = "104",
  '104': ['5211', '22842', '323764', '22812', '305497'],

  //   Druid_Restoration = "105",
  '105': [
    '5211',
    '22842',
    '323764',
    '22812',
    '305497',
    '102342',
    '102793',
    '29166',
    '132158',
    '33891',
    '197721',
    '203651',
    '157982',
  ],

  //   Hunter_BeastMastery = "253",
  '253': [
    '187650',
    '186265',
    '109304',
    '272682',
    '19577',
    '19574',
    '193530',
    '147362',
    '131894',
    '201430',
    '205691',
    '53480',
  ],

  //   Hunter_Marksmanship = "254",
  '254': ['187650', '186265', '109304', '272682', '109248', '147362', '288613', '260402', '53480'],

  //   Hunter_Survival = "255",
  '255': ['187650', '186265', '109304', '272682', '53480', '266779', '19577'],

  //   Mage_Arcane = "62",
  //      inv   icb     cs     images    rune      evc      arcpow
  '62': ['66', '45438', '2139', '55342', '116011', '12051', '12042'],

  //   Mage_Fire = "63",
  // '116011', rune
  // '153561', meteor
  //      inv   icb       caut     cs     images  combust
  '63': ['66', '45438', '86949', '2139', '55342', '190319'],

  //   Mage_Frost = "64",
  //      inv   icb     cs     images    rune      csnap      veins
  '64': ['66', '45438', '2139', '55342', '116011', '235219', '12472', '198144', '198149'],

  //   Monk_BrewMaster = "268",
  '268': ['119381', '115078', '243435'],

  //   Monk_Windwalker = "269",
  '269': ['122470', '137639', '119381', '122783', '116841', '115078', '116705', '123904', '243435'],

  //   Monk_Mistweaver = "270",
  '270': ['119381', '115078', '243435', '116849', '115310', '322118'],

  //   Paladin_Holy = "65",
  '65': ['498', '642', '6940', '1022', '199448', '853', '31884', '31821'],

  //   Paladin_Protection = "66",
  '66': ['642', '31884', '6940', '853', '1022', '199448'],

  //   Paladin_Retribution = "70",
  '70': ['642', '31884', '6940', '853', '96231', '1022', '199448', '184662', '255937', '210256', '205191', '152262'],

  //   Priest_Discipline = "256",
  '256': ['19236', '8122', '10060', '73325', '34433', '33206', '109964', '197871', '213602'],

  //   Priest_Holy = "257",
  '257': ['19236', '8122', '10060', '73325', '47788', '64843', '109964', '213602', '200183', '2050', '88625'],

  //   Priest_Shadow = "258",
  '258': ['10060', '73325', '47585', '15487', '64044', '213602', '8122'],

  //   Rogue_Assassination = "259",
  '259': ['31224', '5277', '1966', '1856', '11327', '212182', '2094', '1766', '79140', '207736'],

  //   Rogue_Outlaw = "260",
  '260': ['31224', '5277', '1966', '1856', '11327', '212182', '2094', '1766', '13750', '207736'],

  //   Rogue_Subtlety = "261",
  '261': ['31224', '5277', '1966', '1856', '11327', '212182', '2094', '1766', '121471', '207736'],

  //   Shaman_Elemental = "262",
  '262': ['57994', '8143', '204330', '108271', '204336', '198067', '79206', '191634', '114051'],

  //   Shaman_Enhancement = "263",
  '263': ['57994', '108271', '204336', '51533', '58875', '114051', '204331', '204330'],

  //   Shaman_Restoration = "264",
  '264': ['57994', '108271', '8143', '16191', '98008', '79206', '108280', '114052', '198838', '204330', '204336'], // TODO: SHAMAN RESTO!

  //   Warlock_Affliction = "265",
  '265': ['6789', '113860', '205180', '104773', '212295', '48020', '30283', '119910', '132409'],

  //   Warlock_Demonology = "266",
  '266': ['6789', '113860', '205180', '104773', '212295', '48020', '30283', '119910', '132409', '265187', '111898'],

  //   Warlock_Destruction = "267",
  '267': ['6789', '113860', '205180', '104773', '212295', '48020', '30283', '119910', '132409', '1122', '113858'],

  //   Warrior_Arms = "71",
  '71': ['97462', '118038', '5246', '107574', '198817', '6552', '262161'],

  //   Warrior_Fury = "72",
  '72': ['97462', '118038', '5246', '107574', '198817', '6552', '262161'],

  //   Warrior_Protection = "73"
  '73': ['97462', '118038', '5246', '107574', '198817', '6552', '262161'],

  //   Evoker_Devastation = "1467",
  '1467': [],

  //   Evoker_Preservation = "1468",
  '1468': [
    '357170', // time dilation
    '363534', // rewind
    '363916', // obsidian scales
    '370553', // tip the scales
    '370960', // emerald communion
    '374348', // renewing blaze
  ],
};
