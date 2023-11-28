import pdfrw


def get_form_file_path(form):
    base = "backend/helpers/backend/"
    if form == "application":
        return base + "application/form.pdf"
    elif form == "site evaluation":
        return base + "site_eval/form.pdf"
    elif form == "construction":
        return base + "construction/form.pdf"
    else:
        raise Exception("Invalid form type!")


def fill_pdf_form_fields(pdf_input_path, output_path, field_data):
    """
    Fill the provided data into the PDF form fields using pdfrw.

    Args:
    - pdf_input_path (str): Path to the input PDF file.
    - output_path (str): Path to the output PDF file.
    - field_data (dict): Dictionary containing the field names as keys and data to be filled as values.

    Returns:
    - None
    """

    output_path = f"backend/helpers/backend/application/{output_path}"

    template = pdfrw.PdfReader(pdf_input_path)

    if template.Root.AcroForm:
        template.Root.AcroForm.update(pdfrw.PdfDict(NeedAppearances=pdfrw.PdfObject("true")))

    annotations = template.pages[0].Annots
    for annotation in annotations:
        if annotation.T:
            print(annotation.T)
            field_name = annotation.T[1:-1]
            if field_name not in field_data:
                print(f"Unexpected field: {field_name}")
            else:
                print(f"Processing field: {field_name}")
                annotation.update(pdfrw.PdfDict(V='{}'.format(field_data[field_name])))

    pdfrw.PdfWriter().write(output_path, template)
