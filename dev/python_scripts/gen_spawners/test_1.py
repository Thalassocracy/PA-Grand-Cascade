import json
import pprint

with open('spawner.json') as spawnerfile:
    spawner = json.load(spawnerfile)
    json.dumps(spawner)
    pprint.pprint(spawner)
    # spawner.display_name = "!LOC: feed me"
    # spawner.description = "brakelabasaasta"
    # spawner.tools.projectiles_per_fire = 2
    # spawner.tools.spec_id = "/pa/units/spawner/firefly_spawner/firefly_spawner_weapon.json"
    # spawner.production.metal = 25
    # spawner.production.energy = 25
    # spawner.consumption.energy = 10
    # spawner.unit_types = ["UNITTYPE_Structure", "swag"]

