export const create_checkbox_background = (xMin, xMax, yMin, yMax, y_offSet) => {
    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    background.setAttribute('fill', 'rgba(169,191,245,0.82)');
    background.setAttribute('fill-opacity', '0.5')
    background.setAttribute('height', 11.5)
    background.setAttribute("width", 11.5)
    return background
}

export const create_checkbox_placeholder = (xMin, xMax, yMin, yMax, y_offSet) => {
    const field_placeholder = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    field_placeholder.setAttribute('height', 15)
    field_placeholder.setAttribute("width", 15)
    return field_placeholder
}

export const create_checkbox_html_element = () => {
    const checkboxField = document.createElement('input');
    checkboxField.type = 'checkbox';

    checkboxField.style.width = '9px';  // Set appropriate width
    checkboxField.style.height = '9px'; // Set appropriate height
    checkboxField.style.display = 'block';
    // Additional styling as needed
    return checkboxField;
};


export const apply_application_page_checkbox_field_adjustments = (path, checkbox_background, checkbox_placeholder, xMin, xMax, yMin, yMax) => {
    if (path.id === "new-system") {
        checkbox_background.setAttribute("x", 42.25)
        checkbox_background.setAttribute("y", 134)


        checkbox_placeholder.setAttribute("x", 39.5)
        checkbox_placeholder.setAttribute("y", 132)
    }

    if (path.id === "existing-system") {
        checkbox_background.setAttribute("x", 168.5)
        checkbox_background.setAttribute("y", 134)


        checkbox_placeholder.setAttribute("x", 165.75)
        checkbox_placeholder.setAttribute("y", 132)
    }

    if (path.id === "holding-tank") {
        checkbox_background.setAttribute("x", 330.5)
        checkbox_background.setAttribute("y", 134)


        checkbox_placeholder.setAttribute("x", 327.75)
        checkbox_placeholder.setAttribute("y", 132)
    }

    if (path.id === "innovative") {
        checkbox_background.setAttribute("x", 456.5)
        checkbox_background.setAttribute("y", 134)


        checkbox_placeholder.setAttribute("x", 453.75)
        checkbox_placeholder.setAttribute("y", 132)
    }

    if (path.id === "repair") {
        checkbox_background.setAttribute("x", 42.25)
        checkbox_background.setAttribute("y", 146)


        checkbox_placeholder.setAttribute("x", 39.5)
        checkbox_placeholder.setAttribute("y", 144)
    }

    if (path.id === "abandonment") {
        checkbox_background.setAttribute("x", 168.5)
        checkbox_background.setAttribute("y", 146)

        checkbox_placeholder.setAttribute("x", 165.75)
        checkbox_placeholder.setAttribute("y", 144)
    }

    if (path.id === "temporary") {
        checkbox_background.setAttribute("x", 330.5)
        checkbox_background.setAttribute("y", 146)

        checkbox_placeholder.setAttribute("x", 327.75)
        checkbox_placeholder.setAttribute("y", 144)
    }

    if (path.id === "other-application") {
        checkbox_background.setAttribute("x", 456.5)
        checkbox_background.setAttribute("y", 146)

        checkbox_placeholder.setAttribute("x", 453.75)
        checkbox_placeholder.setAttribute("y", 144)
    }

    if (path.id === "private-water-box") {
        checkbox_background.setAttribute("x", 300.25)
        checkbox_background.setAttribute("y", 389)


        checkbox_placeholder.setAttribute("x", 297.5)
        checkbox_placeholder.setAttribute("y", 387.5)
    }

    // public-water->2000GPD-box
    if (path.id === "public-water-greater-than-2000GPD-box") {
        checkbox_background.setAttribute("x", 426.25)
        checkbox_background.setAttribute("y", 389)


        checkbox_placeholder.setAttribute("x", 423.5)
        checkbox_placeholder.setAttribute("y", 387.5)
    }

    if (path.id === "public-water-lesser-than-2000GPD-box") {
        checkbox_background.setAttribute("x", 510.25)
        checkbox_background.setAttribute("y", 389)

        checkbox_placeholder.setAttribute("x", 507.5)
        checkbox_placeholder.setAttribute("y", 387.5)
    }

    if (path.id === "residential-box") {

        checkbox_background.setAttribute("x", 222.5)
        checkbox_background.setAttribute("y", 528)


        checkbox_placeholder.setAttribute("x", 219.625)
        checkbox_placeholder.setAttribute("y", 526)
    }

    if (path.id === "commercial-box") {
        checkbox_background.setAttribute("x", 366.5)
        checkbox_background.setAttribute("y", 528)


        checkbox_placeholder.setAttribute("x", 363.75)
        checkbox_placeholder.setAttribute("y", 526)
    }

    if (path.id === "floor-drain-box") {
        checkbox_background.setAttribute("x", 42.5)
        checkbox_background.setAttribute('y', 679);


        checkbox_placeholder.setAttribute("x", 39.75)
        checkbox_placeholder.setAttribute("y", 677)
    }

    // other-specify-box
    if (path.id === "other-specify-box") {
        checkbox_background.setAttribute("x", 226.75)
        checkbox_background.setAttribute('y', 679);

        checkbox_placeholder.setAttribute("x", 224)
        checkbox_placeholder.setAttribute("y", 677)
    }
}

export const apply_construction_page_checkbox_field_adjustments = (path, checkbox_background, checkbox_placeholder, xMin, xMax, yMin, yMax) => {
    // type-of-system-standard
    if (path.id === 'type-of-system-standard') {
        checkbox_background.setAttribute("x", 126.5)
        checkbox_background.setAttribute("y", 434.5)
        checkbox_placeholder.setAttribute("x", 123.75)
        checkbox_placeholder.setAttribute("y", 432.5)
    }

    // type-of-system-filled
    if (path.id === 'type-of-system-filled') {
        checkbox_background.setAttribute("x", 216.5)
        checkbox_background.setAttribute("y", 434.5)
        checkbox_placeholder.setAttribute("x", 213.75)
        checkbox_placeholder.setAttribute("y", 432.5)
    }

    // type-of-system-mound
    if (path.id === 'type-of-system-mound') {
        checkbox_background.setAttribute("x", 294.5)
        checkbox_background.setAttribute("y", 434.5)
        checkbox_placeholder.setAttribute("x", 291.75)
        checkbox_placeholder.setAttribute("y", 432.5)
    }

    // type-of-system-other
    if (path.id === 'type-of-system-other') {
        checkbox_background.setAttribute("x", 366.5)
        checkbox_background.setAttribute("y", 434.5)
        checkbox_placeholder.setAttribute("x", 363.75)
        checkbox_placeholder.setAttribute("y", 432.5)
    }

    // system-configuration-trench
    if (path.id === 'system-configuration-trench') {
        checkbox_background.setAttribute("x", 126.5)
        checkbox_background.setAttribute("y", 446.5)
        checkbox_placeholder.setAttribute("x", 123.75)
        checkbox_placeholder.setAttribute("y", 444.5)
    }

    // system-configuration-bed
    if (path.id === 'system-configuration-bed') {
        checkbox_background.setAttribute("x", 216.5)
        checkbox_background.setAttribute("y", 447)
        checkbox_placeholder.setAttribute("x", 213.75)
        checkbox_placeholder.setAttribute("y", 445)
    }

    // system-configuration-other

    if (path.id === 'system-configuration-other') {
        checkbox_background.setAttribute("x", 294.5)
        checkbox_background.setAttribute("y", 447)
        checkbox_placeholder.setAttribute("x", 291.75)
        checkbox_placeholder.setAttribute("y", 445)
    }

    // system-design-header

    if (path.id === 'system-design-header') {
        checkbox_background.setAttribute("x", 126.5)
        checkbox_background.setAttribute("y", 459)
        checkbox_placeholder.setAttribute("x", 123.75)
        checkbox_placeholder.setAttribute("y", 457)
    }

    // system-design-d-box
    if (path.id === 'system-design-d-box') {
        checkbox_background.setAttribute("x", 216.5)
        checkbox_background.setAttribute("y", 459)
        checkbox_placeholder.setAttribute("x", 213.75)
        checkbox_placeholder.setAttribute("y", 457)
    }

    // system-design-gravity
    if (path.id === 'system-design-gravity') {
        checkbox_background.setAttribute("x", 294.5)
        checkbox_background.setAttribute("y", 458)
        checkbox_placeholder.setAttribute("x", 291.75)
        checkbox_placeholder.setAttribute("y", 457)
    }

    // system-design-dosed
    if (path.id === 'system-design-dosed') {
        checkbox_background.setAttribute("x", 426.5)
        checkbox_background.setAttribute("y", 458)
        checkbox_placeholder.setAttribute("x", 423.75)
        checkbox_placeholder.setAttribute("y", 457)
    }

    // type-of-waste-domestic

    if (path.id === 'type-of-waste-domestic') {
        checkbox_background.setAttribute("x", 408.5)
        checkbox_background.setAttribute("y", 517.5)
        checkbox_placeholder.setAttribute("x", 405.75)
        checkbox_placeholder.setAttribute("y", 515.5)
    }

    // type-of-waste-commercial
    if (path.id === 'type-of-waste-commercial') {
        checkbox_background.setAttribute("x", 504.5)
        checkbox_background.setAttribute("y", 517.5)
        checkbox_placeholder.setAttribute("x", 501.75)
        checkbox_placeholder.setAttribute("y", 515.5)
    }

    // gpd-metered-water
    if (path.id === 'gpd-metered-water') {
        checkbox_background.setAttribute("x", 330.5)
        checkbox_background.setAttribute("y", 529)
        checkbox_placeholder.setAttribute("x", 327.75)
        checkbox_placeholder.setAttribute("y", 527)
    }

    // gpd-table-1
    if (path.id === 'gpd-table-1') {
        checkbox_background.setAttribute("x", 450.5)
        checkbox_background.setAttribute("y", 529)
        checkbox_placeholder.setAttribute("x", 447.75)
        checkbox_placeholder.setAttribute("y", 527)
    }

    // site-conditions-drainage
    if (path.id === 'site-conditions-drainage') {
        checkbox_background.setAttribute("x", 96.5)
        checkbox_background.setAttribute("y", 553.5)
        checkbox_placeholder.setAttribute("x", 93.75)
        checkbox_placeholder.setAttribute("y", 551.5)
    }

    // site-conditions-pool
    if (path.id === 'site-conditions-pool') {
        checkbox_background.setAttribute("x", 252.5)
        checkbox_background.setAttribute("y", 553.5)
        checkbox_placeholder.setAttribute("x", 249.75)
        checkbox_placeholder.setAttribute("y", 551.5)
    }

    // site-conditions-patio/deck
    if (path.id === 'site-conditions-patio/deck') {
        checkbox_background.setAttribute("x", 330.5)
        checkbox_background.setAttribute("y", 553.5)
        checkbox_placeholder.setAttribute("x", 327.75)
        checkbox_placeholder.setAttribute("y", 551.5)
    }

    // site-conditions-parking
    if (path.id === 'site-conditions-parking') {
        checkbox_background.setAttribute("x", 450.5)
        checkbox_background.setAttribute("y", 553.5)
        checkbox_placeholder.setAttribute("x", 447.75)
        checkbox_placeholder.setAttribute("y", 551.5)
    }


    // site-conditions-sloping-property
    if (path.id === 'site-conditions-sloping-property') {
        checkbox_background.setAttribute("x", 96.5)
        checkbox_background.setAttribute("y", 565)
        checkbox_placeholder.setAttribute("x", 93.75)
        checkbox_placeholder.setAttribute("y", 563)
    }

    // site-conditions-other
    if (path.id === 'site-conditions-other') {
        checkbox_background.setAttribute("x", 252.5)
        checkbox_background.setAttribute("y", 565)
        checkbox_placeholder.setAttribute("x", 249.75)
        checkbox_placeholder.setAttribute("y", 563)
    }

    // nature-of-failure-hydraulic-overload
    if (path.id === 'nature-of-failure-hydraulic-overload') {
        checkbox_background.setAttribute("x", 91)
        checkbox_background.setAttribute("y", 588.5)
        checkbox_placeholder.setAttribute("x", 88.25)
        checkbox_placeholder.setAttribute("y", 586.5)
    }

    // nature-of-failure-soils
    if (path.id === 'nature-of-failure-soils') {
        checkbox_background.setAttribute("x", 252.5)
        checkbox_background.setAttribute("y", 588.5)
        checkbox_placeholder.setAttribute("x", 249.75)
        checkbox_placeholder.setAttribute("y", 586.5)
    }

    // nature-of-failure-maintenance
    if (path.id === 'nature-of-failure-maintenance') {
        checkbox_background.setAttribute("x", 330.5)
        checkbox_background.setAttribute("y", 588.5)
        checkbox_placeholder.setAttribute("x", 327.75)
        checkbox_placeholder.setAttribute("y", 586.5)
    }

    // nature-of-failure-system-damage
    if (path.id === 'nature-of-failure-system-damage') {
        checkbox_background.setAttribute("x", 450.5)
        checkbox_background.setAttribute("y", 588.5)
        checkbox_placeholder.setAttribute("x", 447.75)
        checkbox_placeholder.setAttribute("y", 586.5)
    }
    if (path.id === 'nature-of-failure-drainage/run-off') {
        checkbox_background.setAttribute("x", 91)
        checkbox_background.setAttribute("y", 600)
        checkbox_placeholder.setAttribute("x", 88.25)
        checkbox_placeholder.setAttribute("y", 598)
    }

    // nature-of-failure-water-roots
    if (path.id === 'nature-of-failure-roots') {
        checkbox_background.setAttribute("x", 252.5)
        checkbox_background.setAttribute("y", 600)
        checkbox_placeholder.setAttribute("x", 249.75)
        checkbox_placeholder.setAttribute("y", 598)
    }

    // nature-of-failure-water-table
    if (path.id === 'nature-of-failure-water-table') {
        checkbox_background.setAttribute("x", 330.5)
        checkbox_background.setAttribute("y", 600)
        checkbox_placeholder.setAttribute("x", 327.75)
        checkbox_placeholder.setAttribute("y", 598)
    }

    // nature-of-failure-other
    if (path.id === 'nature-of-failure-other') {
        checkbox_background.setAttribute("x", 450.5)
        checkbox_background.setAttribute("y", 600)
        checkbox_placeholder.setAttribute("x", 447.75)
        checkbox_placeholder.setAttribute("y", 598)
    }

    // failure-symptom-sewage-on-ground
    if (path.id === 'failure-symptom-sewage-on-ground') {
        checkbox_background.setAttribute("x", 90.5)
        checkbox_background.setAttribute("y", 624.5)
        checkbox_placeholder.setAttribute("x", 87.75)
        checkbox_placeholder.setAttribute("y", 622.5)
    }

    // failure-symptom-tank
    if (path.id === 'failure-symptom-tank') {
        checkbox_background.setAttribute("x", 252.5)
        checkbox_background.setAttribute("y", 624.5)
        checkbox_placeholder.setAttribute("x", 249.75)
        checkbox_placeholder.setAttribute("y", 622.5)
    }

    // failure-symptom-d-box/header
    if (path.id === 'failure-symptom-d-box/header') {
        checkbox_background.setAttribute("x", 330.5)
        checkbox_background.setAttribute("y", 624.5)
        checkbox_placeholder.setAttribute("x", 327.75)
        checkbox_placeholder.setAttribute("y", 622.5)
    }

    // failure-symptom-drainfield
    if (path.id === 'failure-symptom-drainfield') {
        checkbox_background.setAttribute("x", 450.5)
        checkbox_background.setAttribute("y", 624.5)
        checkbox_placeholder.setAttribute("x", 447.75)
        checkbox_placeholder.setAttribute("y", 622.5)
    }

    // failure-symptom-plumbing-backup
    if (path.id === 'failure-symptom-plumbing-backup') {
        checkbox_background.setAttribute("x", 90.5)
        checkbox_background.setAttribute("y", 636)
        checkbox_placeholder.setAttribute("x", 87.75)
        checkbox_placeholder.setAttribute("y", 634)
    }

    // failure-symptom-other
    if (path.id === 'failure-symptom-other') {
        checkbox_background.setAttribute("x", 252.5)
        checkbox_background.setAttribute("y", 636)
        checkbox_placeholder.setAttribute("x", 249.75)
        checkbox_placeholder.setAttribute("y", 634)
    }
}
export const apply_site_evaluation_page_checkbox_field_adjustments = (path, checkbox_background, checkbox_placeholder, xMin, xMax, yMin, yMax) => {
    if (path.id === "property-size-conform-yes") {
        checkbox_background.setAttribute('x', 246.7);
        checkbox_background.setAttribute('y', 231);
        checkbox_placeholder.setAttribute('x', 243.7);
        checkbox_placeholder.setAttribute('y', 229);
    }

    if (path.id === "property-size-conform-no") {
        checkbox_background.setAttribute('x', 301.2);
        checkbox_background.setAttribute('y', 231);
        checkbox_placeholder.setAttribute('x', 298.2);
        checkbox_placeholder.setAttribute('y', 229);
    }

    if (path.id === "normally-wet-yes") {
        const y_offSet = 10
        checkbox_background.setAttribute('x', 502);
        checkbox_background.setAttribute('y', 336);
        checkbox_placeholder.setAttribute('x', 499);
        checkbox_placeholder.setAttribute('y', 334);
    }

    if (path.id === "normally-wet-no") {
        checkbox_background.setAttribute('x', 555.5);
        checkbox_background.setAttribute('y', 336);
        checkbox_placeholder.setAttribute('x', 552.5);
        checkbox_placeholder.setAttribute('y', 334);

    }

    if (path.id === "normally-wet-yes") {
        const y_offSet = 10
        checkbox_background.setAttribute('x', 502);
        checkbox_background.setAttribute('y', 336);
        checkbox_placeholder.setAttribute('x', 499);
        checkbox_placeholder.setAttribute('y', 334);
    }

    if (path.id === "site-subject-to-frequent-flood-yes") {
        checkbox_background.setAttribute('x', 503.5);
        checkbox_background.setAttribute('y', 382);
        checkbox_placeholder.setAttribute('x', 500.5);
        checkbox_placeholder.setAttribute('y', 380);
    }

    if (path.id === "site-subject-to-frequent-flood-no") {
        checkbox_background.setAttribute('x', 558);
        checkbox_background.setAttribute('y', 382);
        checkbox_placeholder.setAttribute('x', 555);
        checkbox_placeholder.setAttribute('y', 380);
    }

    if (path.id === "10-year-flood-yes") {
        checkbox_background.setAttribute('x', 241);
        checkbox_background.setAttribute('y', 382);
        checkbox_placeholder.setAttribute('x', 238);
        checkbox_placeholder.setAttribute('y', 380);
    }

    if (path.id === "10-year-flood-no") {
        checkbox_background.setAttribute('x', 295);
        checkbox_background.setAttribute('y', 382);
        checkbox_placeholder.setAttribute('x', 292);
        checkbox_placeholder.setAttribute('y', 380);
    }

    if (path.id === "high-water-table-vegetation-yes") {
        checkbox_background.setAttribute('x', 199);
        checkbox_background.setAttribute('y', 607);
        checkbox_placeholder.setAttribute('x', 196);
        checkbox_placeholder.setAttribute('y', 605);
    }

    if (path.id === "high-water-table-vegetation-no") {
        checkbox_background.setAttribute('x', 253);
        checkbox_background.setAttribute('y', 607);
        checkbox_placeholder.setAttribute('x', 250);
        checkbox_placeholder.setAttribute('y', 605);
    }

    if (path.id === "mottling-yes") {
        checkbox_background.setAttribute('x', 390.5);
        checkbox_background.setAttribute('y', 607);
        checkbox_placeholder.setAttribute('x', 387.5);
        checkbox_placeholder.setAttribute('y', 605);
    }

    if (path.id === "mottling-no") {
        checkbox_background.setAttribute('x', 445);
        checkbox_background.setAttribute('y', 607);
        checkbox_placeholder.setAttribute('x', 442);
        checkbox_placeholder.setAttribute('y', 605);
    }

    if (path.id === "drainfield-configuration-bed") {
        checkbox_background.setAttribute('x', 181);
        checkbox_background.setAttribute('y', 642);
        checkbox_placeholder.setAttribute('x', 178);
        checkbox_placeholder.setAttribute('y', 640);
    }

    if (path.id === "drainfield-configuration-trench") {
        checkbox_background.setAttribute('x', 267.5);
        checkbox_background.setAttribute('y', 642);
        checkbox_placeholder.setAttribute('x', 264.5);
        checkbox_placeholder.setAttribute('y', 640);
    }

    if (path.id === "drainfield-configuration-other") {
        checkbox_background.setAttribute('x', 335);
        checkbox_background.setAttribute('y', 642);
        checkbox_placeholder.setAttribute('x', 332.5);
        checkbox_placeholder.setAttribute('y', 639.5);
    }
}