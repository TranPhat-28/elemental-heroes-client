// Check if the Object is empty (has no properties)
export const ObjectIsEmpty = (obj) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }

    return true;
}


// Return the Hero type from input: AttackType and DamageType
export const GetHeroType = (AttackType, DamageType) => {

    let type = "";

    switch (AttackType) {
        case "Melee":
            if (DamageType == "Physical") {
                type = "Knight";
            }
            else type = "Monk";
            break;
        case "Ranged":
            if (DamageType == "Physical") {
                type = "Assassin";
            }
            else type = "Wizard";
            break;
    }

    return type;
}

// Return public element image path
export const GetElementImgPath = (element) => {
    return `assets/elements/${element?.toLowerCase()}.png`;
}

// Return public hero type image path
export const GetHeroImgPath = (hero) => {
    return `assets/heroes/${hero}.png`;
}