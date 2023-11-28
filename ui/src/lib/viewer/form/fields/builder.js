import {
    create_checkbox_placeholder,
    create_checkbox_background,
    create_checkbox_html_element,
    apply_application_page_checkbox_field_adjustments,
    apply_construction_page_checkbox_field_adjustments,
    apply_site_evaluation_page_checkbox_field_adjustments
} from "$lib/viewer/form/fields/helpers/check_box_field.js";
import {
    create_input_placeholder,
    create_input_background,
    create_input_html_element,
    apply_application_page_input_field_adjustments,
    apply_construction_page_input_field_adjustments,
    apply_site_evaluation_page_input_field_adjustments
} from "$lib/viewer/form/fields/helpers/input_field.js";

import {
    create_dropdown_placeholder,
    create_dropdown_background,
    create_dropdown_html_element,
    apply_application_page_dropdown_field_adjustments,
    apply_construction_page_dropdown_field_adjustments,
    apply_site_evaluation_page_dropdown_field_adjustments,
}
    from "$lib/viewer/form/fields/helpers/drop_down_field.js";

const locate_target_positioning = (path) => {
    const d = path.getAttribute('d');
    const coords = d.match(/([\d.]+)/g);
    const xs = coords.filter((_, i) => i % 2 === 0).map(Number);
    const ys = coords.filter((_, i) => i % 2 === 1).map(Number);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const yMin = Math.min(...ys);
    const yMax = Math.max(...ys);
    return {xMin, xMax, yMin, yMax}
}


function add_input_field_to_form(xMin, xMax, yMin, yMax, path) {
    // y_offset for app-building-information-22
    let default_y_offset = 10

    const input_background = create_input_background(xMin, xMax, yMin, yMax, default_y_offset)
    // Creating a foreignObject to hold the input field
    const input_placeholder = create_input_placeholder(xMin, xMax, yMin, yMax, default_y_offset)
    // Adding the input field inside the foreignObject
    // Adding the input field inside the foreignObject
    const input_html_element = create_input_html_element();

    apply_application_page_input_field_adjustments(path, input_background, input_placeholder, xMin, xMax, yMin, yMax)
    apply_construction_page_input_field_adjustments(path, input_background, input_placeholder, xMin, xMax, yMin, yMax)
    apply_site_evaluation_page_input_field_adjustments(path, input_background, input_placeholder, xMin, xMax, yMin, yMax)

    input_placeholder.appendChild(input_html_element);

    path.parentElement.insertBefore(input_background, path);
    path.parentElement.insertBefore(input_placeholder, path);
}


const add_checkbox_field_to_form = (xMin, xMax, yMin, yMax, path) => {
    // Creating a foreignObject to hold the input field
    const checkbox_background = create_checkbox_background(xMin, xMax, yMin, yMax, 0)

    // Adding the input field inside the foreignObject
    const checkbox_placeholder = create_checkbox_placeholder(xMin, xMax, yMin, yMax, 0)


    apply_application_page_checkbox_field_adjustments(path, checkbox_background, checkbox_placeholder, xMin, xMax, yMin, yMax)
    apply_construction_page_checkbox_field_adjustments(path, checkbox_background, checkbox_placeholder, xMin, xMax, yMin, yMax)
    apply_site_evaluation_page_checkbox_field_adjustments(path, checkbox_background, checkbox_placeholder, xMin, xMax, yMin, yMax)


    const checkbox_html_element = create_checkbox_html_element();

    checkbox_placeholder.appendChild(checkbox_html_element);

    path.parentElement.insertBefore(checkbox_background, path);
    path.parentElement.insertBefore(checkbox_placeholder, path);

}


const add_dropdown_field_to_form = (xMin, xMax, yMin, yMax, path) => {
    // Creating a foreignObject to hold the input field
    const dropdown_background = create_dropdown_background(xMin, xMax, yMin, yMax, 0)

    // Adding the input field inside the foreignObject
    const dropdown_placeholder = create_dropdown_placeholder(xMin, xMax, yMin, yMax, 0)

    apply_application_page_dropdown_field_adjustments(path, dropdown_background, dropdown_placeholder, xMin, xMax, yMin, yMax)
    apply_construction_page_dropdown_field_adjustments(path, dropdown_background, dropdown_placeholder, xMin, xMax, yMin, yMax)
    apply_site_evaluation_page_dropdown_field_adjustments(path, dropdown_background, dropdown_placeholder, xMin, xMax, yMin, yMax)


    const dropdown_html_element = create_dropdown_html_element();

    dropdown_placeholder.appendChild(dropdown_html_element);

    path.parentElement.insertBefore(dropdown_background, path);
    path.parentElement.insertBefore(dropdown_placeholder, path);
}
export const build_form_fields = () => {
    let paths = document.querySelectorAll('path.input-field');
    paths.forEach(path => {
        const {xMin, xMax, yMin, yMax} = locate_target_positioning(path)
        path.setAttribute("tabindex", "-1")
        add_input_field_to_form(xMin, xMax, yMin, yMax, path);
    });

    paths = document.querySelectorAll('path.check-box-field');
    paths.forEach(path => {
        const {xMin, xMax, yMin, yMax} = locate_target_positioning(path)
        add_checkbox_field_to_form(xMin, xMax, yMin, yMax, path);
    });

    paths = document.querySelectorAll('path.drop-down-field');
    paths.forEach(path => {
        const {xMin, xMax, yMin, yMax} = locate_target_positioning(path)
        add_dropdown_field_to_form(xMin, xMax, yMin, yMax, path);
    });
}