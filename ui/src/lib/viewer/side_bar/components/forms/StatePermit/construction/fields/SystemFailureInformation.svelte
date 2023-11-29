<fieldset >
    <legend>System Failure and Repair Information</legend>

        <label for="installationDate">
            System Installation Date (mm/dd/yyyy): <input type="text" id="installationDate" name="installationDate" placeholder="System Installation Date (mm/dd/yyyy)">
        </label>

        <fieldset >
            <legend class="inner">Type of Waste</legend>
            <label for="wasteDomestic">
                <input type="radio" value="A" name="wasteType" id="wasteDomestic"> Domestic
            </label>
            <label for="wasteCommercial">
                <input type="radio" value="B" name="wasteType" id="wasteCommercial"> Commercial
            </label>
        </fieldset>

        <label for="gpdEstimated">
            GPD Estimated: <input type="text" id="gpdEstimated" name="gpdEstimated" placeholder="GPD Estimated">
        </label>

        <fieldset >
            <legend class="inner">Sewage Flow Based On</legend>
            <label for="flowMeteredWater">
                <input type="radio" value="A" name="sewageFlow" id="flowMeteredWater"> Metered Water
            </label>
            <label for="flowTableFAC">
                <input type="radio" value="B" name="sewageFlow" id="flowTableFAC"> Table 1, 64E-6, FAC
            </label>
        </fieldset>

    <!-- Additional fieldsets for Site Conditions, Nature of Failure, and Failure Symptom with similar pattern -->
    <!-- ... -->

    <fieldset >
        <legend class="inner">Failure Symptom</legend>
        <label for="symptomSewageGround">
            <input type="radio" value="A" name="failureSymptom" id="symptomSewageGround"> Sewage on Ground
        </label>
        <label for="symptomTank">
            <input type="radio" value="B" name="failureSymptom" id="symptomTank"> Tank
        </label>
        <!-- Additional radio buttons for other symptoms -->
        <label for="symptomOther">
            <input type="radio" value="D" name="failureSymptom" id="symptomOther"> Other
            <input type="text" name="symptomOtherSpecify" placeholder="Specify">
        </label>
    </fieldset>
</fieldset>
