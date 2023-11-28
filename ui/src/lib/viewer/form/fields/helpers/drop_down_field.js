export const create_dropdown_background = (xMin, xMax, yMin, yMax, y_offSet) => {
    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    background.setAttribute('fill', 'rgba(169,191,245,0.82)');
    background.setAttribute('fill-opacity', '0.5')
    background.setAttribute('width', xMax - xMin);
    background.setAttribute('height', yMax - yMin);
    return background
}

export const create_dropdown_placeholder = (xMin, xMax, yMin, yMax, y_offSet) => {
    const field_placeholder = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    field_placeholder.setAttribute('height', yMax - yMin);
    field_placeholder.setAttribute("width", xMax - xMin);
    return field_placeholder
}

export const create_dropdown_html_element = () => {
    const dropdownField = document.createElement('select');

    dropdownField.style.width = '100%'; // Set appropriate width
    dropdownField.style.height = '100%'; // Set appropriate height
    dropdownField.style.display = 'block';
    // Additional styling as needed
    return dropdownField;
};

export const apply_application_page_dropdown_field_adjustments = (path, dropdown_background, dropdown_placeholder, xMin, xMax, yMin, yMax) => {
    if (path.id === "i/m-or-equivalent-box") {
        dropdown_background.setAttribute("x", 523.25)
        dropdown_background.setAttribute("y", 360)

        dropdown_placeholder.setAttribute("x", 520.5)
        dropdown_placeholder.setAttribute("y", 358)
    }

    if (path.id === "is-sewer-available-yn") {
        dropdown_background.setAttribute("x", 280)
        dropdown_background.setAttribute("y", 412)

        dropdown_placeholder.setAttribute("x", 277.25)
        dropdown_placeholder.setAttribute("y", 410)
    }
}

export const apply_construction_page_dropdown_field_adjustments = (path, dropdown_background, dropdown_placeholder, xMin, xMax, yMin, yMax) => {
    // contractor-agent-dropdown
    if (path.id === 'contractor-agent-dropdown') {
        dropdown_background.setAttribute("x", 16)
        dropdown_background.setAttribute("y", 124.5)
        dropdown_placeholder.setAttribute("x", 13.25)
        dropdown_placeholder.setAttribute("y", 122.5)
    }

    // septic-tank/gpd-atu-1
    if (path.id === 'septic-tank/gpd-atu-1') {
        dropdown_background.setAttribute("x", 70)
        dropdown_background.setAttribute("y", 255)
        dropdown_placeholder.setAttribute("x", 67.25)
        dropdown_placeholder.setAttribute("y", 253)
    }

    // septic-tank-baffled-1
    if (path.id === 'septic-tank-baffled-1') {
        dropdown_background.setAttribute("x", 556)
        dropdown_background.setAttribute("y", 255.5)
        dropdown_placeholder.setAttribute("x", 553.25)
        dropdown_placeholder.setAttribute("y", 253.5)
    }

    // septic-tank/gpd-atu-2
    if (path.id === 'septic-tank/gpd-atu-2') {
        dropdown_background.setAttribute("x", 70)
        dropdown_background.setAttribute("y", 271)
        dropdown_placeholder.setAttribute("x", 67.25)
        dropdown_placeholder.setAttribute("y", 269)
    }

    // septic-tank-baffled-2
    if (path.id === 'septic-tank-baffled-2') {
        dropdown_background.setAttribute("x", 556)
        dropdown_background.setAttribute("y", 271.5)
        dropdown_placeholder.setAttribute("x", 553.25)
        dropdown_placeholder.setAttribute("y", 269.5)
    }

    // dimensions/filling/legend
    if (path.id === 'dimensions/filling/legend') {
        dropdown_background.setAttribute("x", 259.5)
        dropdown_background.setAttribute("y", 328)
        dropdown_placeholder.setAttribute("x", 256.75)
        dropdown_placeholder.setAttribute("y", 326)
    }

    // solids-deflection-device/outlet-filter-device
    if (path.id === 'solids-deflection-device/outlet-filter-device') {
        dropdown_background.setAttribute("x", 201.5)
        dropdown_background.setAttribute("y", 340)
        dropdown_placeholder.setAttribute("x", 198.75)
        dropdown_placeholder.setAttribute("y", 338)
    }

    // existing-grade-above/below
    if (path.id === 'existing-grade-above/below') {
        dropdown_background.setAttribute("x", 505)
        dropdown_background.setAttribute("y", 469)
        dropdown_placeholder.setAttribute("x", 502.25)
        dropdown_placeholder.setAttribute("y", 467)
    }
}

export const apply_site_evaluation_page_dropdown_field_adjustments = (path, dropdown_background, dropdown_placeholder, xMin, xMax, yMin, yMax) => {
    // section/township/parcel/tax
    if (path.id === 'section/township/parcel/tax') {
        dropdown_background.setAttribute("x", 317.5)
        dropdown_background.setAttribute("y", 169)
        dropdown_placeholder.setAttribute("x", 314.75)
        dropdown_placeholder.setAttribute("y", 167)
    }

    // residences-table/other-table
    if (path.id === 'residences-table/other-table') {
        dropdown_background.setAttribute("x", 386.5)
        dropdown_background.setAttribute("y", 244)
        dropdown_placeholder.setAttribute("x", 383.75)
        dropdown_placeholder.setAttribute("y", 242)
    }

    // 1500GPD/2500GPD
    if (path.id === '1500GPD/2500GPD') {
        dropdown_background.setAttribute("x", 386.5)
        dropdown_background.setAttribute("y", 255)
        dropdown_placeholder.setAttribute("x", 383.75)
        dropdown_placeholder.setAttribute("y", 253)
    }

    // elevation-inches-ft

    if (path.id === 'elevation-inches-ft') {
        dropdown_background.setAttribute("height", 11)
        dropdown_placeholder.setAttribute("height", 11)
        dropdown_background.setAttribute("x", 288)
        dropdown_background.setAttribute("y", 301.5)
        dropdown_placeholder.setAttribute("x", 285.25)
        dropdown_placeholder.setAttribute("y", 299.5)
    }

    if (path.id === 'elevation-above/below') {
        dropdown_background.setAttribute("height", 11)
        dropdown_placeholder.setAttribute("height", 11)
        dropdown_background.setAttribute("x", 360.5)
        dropdown_background.setAttribute("y", 301.5)
        dropdown_placeholder.setAttribute("x", 357.75)
        dropdown_placeholder.setAttribute("y", 299.5)
    }

    // observed-above/below
    if (path.id === 'observed-above/below') {
        dropdown_background.setAttribute("height", 10)
        dropdown_placeholder.setAttribute("height", 10)
        dropdown_background.setAttribute("x", 253)
        dropdown_background.setAttribute("y", 584)
        dropdown_placeholder.setAttribute("x", 250.25)
        dropdown_placeholder.setAttribute("y", 582)
    }

    // water-perched/apparent
    if (path.id === 'estimated-above/below') {
        dropdown_background.setAttribute("height", 10)
        dropdown_background.setAttribute("width", 110)
        dropdown_placeholder.setAttribute("height", 10)
        dropdown_placeholder.setAttribute("width", 110)
        dropdown_background.setAttribute("x", 478)
        dropdown_background.setAttribute("y", 584)
        dropdown_placeholder.setAttribute("x", 475.25)
        dropdown_placeholder.setAttribute("y", 582)
    }

    if (path.id === 'water-perched-apparent') {
        dropdown_background.setAttribute("height", 10)
        dropdown_background.setAttribute("width", 80)
        dropdown_placeholder.setAttribute("height", 10)
        dropdown_placeholder.setAttribute("width", 80)
        dropdown_background.setAttribute("x", 409)
        dropdown_background.setAttribute("y", 596)
        dropdown_placeholder.setAttribute("x", 406.25)
        dropdown_placeholder.setAttribute("y", 594)
    }
}