export const apply_application_page_input_field_adjustments = (path, background, field_placeholder, xMin, xMax, yMin, yMax) => {
    const offset22_input_field_group = [
        "type-of-establishment",
        "no-of-bedrooms",
        "building-area-sqft",
        "system-design",
    ]


    if (offset22_input_field_group.includes(path.id.split('-').slice(0, -1).join('-'))) {
        field_placeholder.setAttribute('y', 792 - yMax - 22); // Adjusting for the transform
        background.setAttribute('y', 792 - yMax - 22); // Adjusting for the transform
    }
    if (path.id === 'other-specify-field') {
        field_placeholder.setAttribute('y', 792 - yMax - 24); // Adjusting for the transform
        background.setAttribute('y', 792 - yMax - 24); // Adjusting for the transform

    }

    if (path.id === 'property-address') {
        field_placeholder.setAttribute('x', xMin + 144);
        field_placeholder.setAttribute('y', 792 - yMax - 356); // Adjusting for the transform
        background.setAttribute('x', xMin + 144);
        background.setAttribute('y', 792 - yMax - 356); // Adjusting for the transform
    }

    if (path.id === 'mailing-address') {
        field_placeholder.setAttribute('x', xMin + 138);
        field_placeholder.setAttribute('y', 792 - yMax - 577); // Adjusting for the transform
        background.setAttribute('x', xMin + 138);
        background.setAttribute('y', 792 - yMax - 577); // Adjusting for the transform
    }
}

export const apply_construction_page_input_field_adjustments = (path, background, field_placeholder, xMin, xMax, yMin, yMax) => {

    const base_id = path.id.split('-').slice(0, -1).join('-')

    if (base_id === 'date-pumped') {
        // fill background red
        // width
        background.setAttribute('width', 17)
        field_placeholder.setAttribute('width', 17)

        // date-pumped-month

        // date-pumped-day
        if (path.id === 'date-pumped-day') {
            background.setAttribute("x", xMin + 25)
            field_placeholder.setAttribute("x", xMin + 25)
        }

        // date-pumped-year
        if (path.id === 'date-pumped-year') {
            background.setAttribute("x", xMin + 48)
            field_placeholder.setAttribute("x", xMin + 48)
        }

    }

    //permit-no-1
    if (path.id === 'construction-permit-no-1') {
        const y_offset = 79
        const x_offset = 370
        // fill background red
        // width
        background.setAttribute('width', 80)
        field_placeholder.setAttribute('width', 80)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    //permit-no-2
    if (path.id === 'construction-permit-no-2') {
        const y_offset = 68
        const x_offset = 316
        // fill background red
        // width
        background.setAttribute('width', 134)
        field_placeholder.setAttribute('width', 134)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    // system-installation-date
    if (path.id === 'system-installation-date') {
        const y_offset = -37.75
        const x_offset = -380
        background.setAttribute('width', 57.5)
        field_placeholder.setAttribute('width', 57.5)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    // gpd-estimated-sewage-flow
    if (path.id === 'gpd-estimated-sewage-flow') {
        const y_offset = -49.75
        const x_offset = -380
        background.setAttribute('width', 57.5)
        field_placeholder.setAttribute('width', 57.5)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    if (path.id === 'contractor/agent-field') {
        const y_offset = 666
        const x_offset = 138
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    const existing_tank_material_fields = [
        "septic-tank-gallons-1",
        "septic-tank-material-1",
        "septic-tank-gallons-2",
        "septic-tank-material-2",
        "grease-interceptor-gallons",
        "grease-interceptor-material",
        "dosing-tank-gallons",
        "dosing-tank-material",
        "dosing-tank-pumps",
    ]

    if (existing_tank_material_fields.includes(path.id)) {
        let y_offset = 499
        let x_offset = 426
        if (path.id === "septic-tank-gallons-1") {
            x_offset = 23.25
            y_offset += 35
            field_placeholder.setAttribute('width', 37)
            background.setAttribute('width', 37)
        }
        if (path.id === "septic-tank-gallons-2") {
            x_offset = 23.25
            y_offset += 24
            field_placeholder.setAttribute('width', 37)
            background.setAttribute('width', 37)
        }
        if (path.id === "grease-interceptor-gallons") {
            x_offset = 23.25
            y_offset += 12
            field_placeholder.setAttribute('width', 37)
            background.setAttribute('width', 37)
        }
        if (path.id === "dosing-tank-gallons") {
            x_offset = 23.25
            y_offset += 0
            field_placeholder.setAttribute('width', 37)
            background.setAttribute('width', 37)
        }
        if (path.id === "septic-tank-material-1") {
            y_offset += 35
        }
        if (path.id === "septic-tank-material-2") {
            y_offset += 24
        }
        if (path.id === "grease-interceptor-material") {
            y_offset += 12
        }

        if (path.id === "dosing-tank-pumps") {
            x_offset = 555.25
            y_offset -= 12.5
            field_placeholder.setAttribute('width', 34)
            field_placeholder.setAttribute('height', 9)
            background.setAttribute('width', 34)
            background.setAttribute('height', 9)

        }
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform

    }

    const existing_drainfield_fields = [
        "primary-drainfield-sqft",
        "primary-drainfield-no-trenches",
        "blank-drainfield-sqft",
        "blank-drainfield-no-trenches"
    ]

    if (existing_drainfield_fields.includes(path.id)) {
        let y_offset = 499
        let x_offset = 426

        if (path.id === 'primary-drainfield-sqft') {
            x_offset = -493.25
            y_offset = 9.5
            field_placeholder.setAttribute('width', 38.25)
            field_placeholder.setAttribute('height', 9)
            background.setAttribute('width', 38.25)
            background.setAttribute('height', 9)

        }

        // blank-drainfield-sqft
        if (path.id === 'blank-drainfield-sqft') {
            x_offset = -493.25
            y_offset = 9.5
            field_placeholder.setAttribute('width', 38.25)
            field_placeholder.setAttribute('height', 9)
            background.setAttribute('width', 38.25)
            background.setAttribute('height', 9)

        }

        // primary-drainfield-no-trenches
        if (path.id === 'primary-drainfield-no-trenches') {
            x_offset = -110
            y_offset = 9.5
            field_placeholder.setAttribute('width', 23)
            field_placeholder.setAttribute('height', 9)
            background.setAttribute('width', 23)
            background.setAttribute('height', 9)
        }

        // blank-drainfield-no-trenches
        if (path.id === 'blank-drainfield-no-trenches') {
            x_offset = -110
            y_offset = 9.5
            field_placeholder.setAttribute('width', 23)
            field_placeholder.setAttribute('height', 9)
            background.setAttribute('width', 23)
            background.setAttribute('height', 9)
        }

        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }
}

// ###########################################################################################

export const apply_site_evaluation_page_input_field_adjustments = (path, background, field_placeholder, xMin, xMax, yMin, yMax) => {

    // site-eval-permit-no-1
    if (path.id === 'site-eval-permit-no-1') {
        const y_offset = 56
        const x_offset = 402
        // fill background red
        // width
        background.setAttribute('width', 97)
        field_placeholder.setAttribute('width', 97)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    // site-eval-permit-no-2
    if (path.id === 'site-eval-permit-no-2') {
        const y_offset = 44
        const x_offset = 342
        // fill background red
        // width
        background.setAttribute('width', 157)
        field_placeholder.setAttribute('width', 157)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    // soil-profile-1-elevation-shot
    if (path.id === 'soil-profile-1-elevation-shot') {
        const y_offset = 139
        const x_offset = 111
        // fill background red
        // width
        background.setAttribute('width', 33)
        field_placeholder.setAttribute('width', 33)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    // soil-profile-2-elevation-shot
    if (path.id === 'soil-profile-2-elevation-shot') {
        const y_offset = 139
        const x_offset = 116.5
        // fill background red
        // width
        background.setAttribute('width', 33)
        field_placeholder.setAttribute('width', 33)
        field_placeholder.setAttribute('x', xMin + x_offset);
        field_placeholder.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
        background.setAttribute('x', xMin + x_offset);
        background.setAttribute('y', 792 - yMax - y_offset); // Adjusting for the transform
    }

    const soil_depth_fields = [
        "soil-profile-1-depth-from",
        "soil-profile-1-depth-to",
        "soil-profile-2-depth-from",
        "soil-profile-2-depth-to",
    ]

    const base_id = path.id.split('-').slice(0, -1).join('-')

    if (soil_depth_fields.includes(base_id)) {
        background.setAttribute('width', 21)
        field_placeholder.setAttribute('width', 21)
        if (base_id === "soil-profile-1-depth-from" || base_id === "soil-profile-2-depth-from") {
            field_placeholder.setAttribute('x', xMin);
            background.setAttribute('x', xMin);
        }
        if (base_id === "soil-profile-1-depth-to" || base_id === "soil-profile-2-depth-to") {
            field_placeholder.setAttribute('x', xMin + 15);
            background.setAttribute('x', xMin + 15);
        }

    }
}


export const create_input_background = (xMin, xMax, yMin, yMax, y_offSet) => {
    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    background.setAttribute('x', xMin);
    background.setAttribute('y', 792 - yMax - y_offSet); // Adjusting for the transform
    background.setAttribute('tabindex', '-1');

    background.setAttribute('width', xMax - xMin);
    background.setAttribute('height', yMax - yMin + 9);
    background.setAttribute('fill', 'rgba(169,191,245,0.82)');
    background.setAttribute('fill-opacity', '0.5');
    return background
}

export const create_input_placeholder = (xMin, xMax, yMin, yMax, y_offSet) => {
    const field_placeholder = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    field_placeholder.setAttribute('x', xMin);
    field_placeholder.setAttribute('y', 792 - yMax - y_offSet); // Adjusting for the transform
    field_placeholder.setAttribute('tabindex', '-1');

    field_placeholder.setAttribute('width', xMax - xMin);
    field_placeholder.setAttribute('height', yMax - yMin + 9);
    return field_placeholder
}

export const create_input_html_element = () => {
    const inputField = document.createElement('input');
    inputField.style.width = '100%';
    inputField.style.height = '100%';
    inputField.style.display = 'block';
    inputField.style.border = 'none';
    inputField.style.outline = 'none';          // Remove focus outline
    inputField.style.backgroundColor = 'transparent';  // Match SVG background
    inputField.style.color = 'black';           // Text color
    inputField.style.fontSize = '8px';         // Adjust to match SVG text
    inputField.style.fontFamily = 'Arial';      // Adjust to match SVG text

    inputField.style.padding = '0';       // Ensure no padding
    inputField.style.margin = '0';        // Ensure no margin
    inputField.style.boxSizing = 'border-box'; // Ensure padding and border are included in total width/height

    inputField.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.1)';  // Optional shadow for depth
    return inputField
}
