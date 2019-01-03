var Build = (function() {
    var FALLBACK_ICON = 'coui://ui/main/game/live_game/img/build_bar/img_missing_unit.png';
    var pathWithoutExtensionMatch = /(.*)\.json[^\/]*$/;

    var iconForSpecId = function(id)
    {
        var match = null;
        if (id)
            match = pathWithoutExtensionMatch.exec(id);

        if (_.size(match) < 2)
            return FALLBACK_ICON;

        return 'coui:/' + match[1] + '_icon_buildbar.png';
    };

    var iconForUnit = function (unit)
    {
        if (!unit)
            return FALLBACK_ICON;
        return iconForSpecId(unit.id);
    };

    var HotkeyModel = function() {
        var self = this;

        self.SpecIdToGridMap = ko.observable(
          _.cloneDeep(HotkeyModel.SpecIdToGridMap));
    };

    HotkeyModel.SpecIdToGridMap = {

        "/pa/units/land/tank_nuke/tank_nuke.json": ["vehicle", 0],

        "/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json": ["vehicle", 6],
        "/pa/units/land/tank_laser_adv/tank_laser_adv.json": ["vehicle", 7],
        "/pa/units/land/tank_heavy_armor/tank_heavy_armor.json": ["vehicle", 8],
        "/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json": ["vehicle", 9],
        "/pa/units/land/tank_flak/tank_flak.json": ["vehicle", 10],

        "/pa/units/land/fabrication_vehicle/fabrication_vehicle.json": ["vehicle", 12],
        "/pa/units/land/tank_light_laser/tank_light_laser.json": ["vehicle", 13],
        "/pa/units/land/tank_armor/tank_armor.json": ["vehicle", 14],
        "/pa/units/land/land_scout/land_scout.json": ["vehicle", 15],
        "/pa/units/spawner/spinner_spawner/spinner_spawner.json": ["vehicle", 16],
         "/pa/units/land/tank_hover/tank_hover.json": ["vehicle", 17],


        "/pa/units/land/bot_support_commander/bot_support_commander.json": ["bot", 0],

        "/pa/units/land/bot_nanoswarm/bot_nanoswarm.json": ["bot", 11],
        "/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json": ["bot", 6],
        "/pa/units/land/assault_bot_adv/assault_bot_adv.json": ["bot", 7],
        "/pa/units/land/bot_sniper/bot_sniper.json": ["bot", 8],
        "/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json": ["bot", 9],
        "/pa/units/land/bot_tactical_missile/bot_tactical_missile.json": ["bot", 10],

        "/pa/units/land/fabrication_bot/fabrication_bot.json": ["bot", 12],
        "/pa/units/spawner/dox_spawner/dox_spawner.json": ["bot", 13],
        "/pa/units/land/bot_grenadier/bot_grenadier.json": ["bot", 14],
        "/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json": ["bot", 15],
        "/pa/units/land/bot_bomb/bot_bomb.json": ["bot", 16],
        "/pa/units/land/bot_tesla/bot_tesla.json": ["bot", 17],


        "/pa/units/air/support_platform/support_platform.json": ["air", 0],

        "/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json": ["air", 6],
        "/pa/units/air/fighter_adv/fighter_adv.json": ["air", 7],
        "/pa/units/air/gunship/gunship.json": ["air", 8],
        "/pa/units/air/bomber_adv/bomber_adv.json": ["air", 9],
        "/pa/units/air/bomber_heavy/bomber_heavy.json": ["air", 10],

        "/pa/units/air/fabrication_aircraft/fabrication_aircraft.json": ["air", 12],
        "/pa/units/air/fighter/fighter.json": ["air", 13],
        "/pa/units/air/bomber/bomber.json": ["air", 14],
        "/pa/units/spawner/firefly_spawner/firefly_spawner.json": ["air", 15],
        "/pa/units/air/transport/transport.json": ["air", 16],
        "/pa/units/air/solar_drone/solar_drone.json": ["air", 17],



        "/pa/units/orbital/orbital_battleship/orbital_battleship.json": ["orbital", 0],

        "/pa/units/orbital/solar_array/solar_array.json": ["orbital", 6],
        "/pa/units/orbital/orbital_laser/orbital_laser.json": ["orbital", 7],
        "/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json": ["orbital", 8],
        "/pa/units/orbital/orbital_railgun/orbital_railgun.json": ["orbital", 9],


        "/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json": ["orbital", 12],
        "/pa/units/orbital/orbital_fighter/orbital_fighter.json": ["orbital", 13],
        "/pa/units/orbital/radar_satellite/radar_satellite.json": ["orbital", 14],
        "/pa/units/orbital/orbital_lander/orbital_lander.json": ["orbital", 15],
        "/pa/units/orbital/orbital_probe/orbital_probe.json": ["orbital", 16],
    };

    return {
        iconForSpecId: iconForSpecId,
        iconForUnit: iconForUnit,
        HotkeyModel: HotkeyModel,
    };
})();

if (scene_mod_list['shared_build']) {
  loadMods(scene_mod_list['shared_build'])
}
