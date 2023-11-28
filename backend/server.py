from flask import Flask, request, jsonify
from flask_cors import CORS
from helpers.backend.fill_form import get_form_file_path, fill_pdf_form_fields

app = Flask(__name__)
CORS(app)


def handle_preset_data(preset_field_data):
    applicant = preset_field_data.get("applicant", None)
    agent = f"{preset_field_data.get('first-name', None)} {preset_field_data.get('last-name', None)}"
    telephone = preset_field_data.get("telephone", None)
    mailing_address = preset_field_data.get("mailing-address", None)
    business_name = preset_field_data.get("business-name", None)
    """

    """
    return {
        'APPLICANT': applicant,
        'AGENT': agent,
        'CONTRACTOR  AGENT': agent,
        'TELEPHONE': telephone,
        'MAILING ADDRESS': mailing_address,
        'BY': agent,
        'BUSINESS NAME': business_name,
    }


@app.route('/fill-pdf', methods=['POST'])
def fill_pdf():
    try:
        # Get the PDF and field data from the request
        data = request.get_json()
        # read form




        form = data.get("form")
        field_data = handle_preset_data(
            data.get("preset_field_data")
        )

        fill_pdf_form_fields(
            pdf_input_path=get_form_file_path(form),
            output_path=f"{form}.pdf",
            field_data=field_data
        )

        return jsonify({"success": True, "message": "PDF filled successfully!"})

    except Exception as e:
        return jsonify({"success": False, "message": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
