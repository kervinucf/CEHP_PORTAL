<script>
    // You can place your JavaScript here (if needed)
</script>

<fieldset>
             <legend>
            Application For
        </legend>
    <fieldset>
        <legend class="inner">
            Application
        </legend>
        <label for="newSystem">
            <input type="radio" value="A" name="systemType" id="newSystem"> New System
        </label>
        <label for="existingSystem">
            <input type="radio" value="B" name="systemType" id="existingSystem"> Existing System
        </label>
        <label for="holdingTank">
            <input type="radio" value="C" name="systemType" id="holdingTank"> Holding Tank
        </label>
        <label for="innovativeSystem">
            <input type="radio" value="D" name="systemType" id="innovativeSystem"> Innovative/Alternative System
        </label>
        <label for="repair">
            <input type="radio" value="E" name="systemType" id="repair"> Repair
        </label>
        <label for="abandonment">
            <input type="radio" value="F" name="systemType" id="abandonment"> Abandonment
        </label>
        <label for="temporary">
            <input type="radio" value="G" name="systemType" id="temporary"> Temporary
        </label>
        <label for="other">
            <input type="radio" value="H" name="systemType" id="other"> Other
            <input type="text" name="otherDetail" placeholder="Specify">
        </label>
    </fieldset>
    <fieldset >
         <legend class="inner">
            Applicant
        </legend>
        <label for="fullName">
            Full Name: <input type="text" id="fullName" placeholder="Enter full name">
        </label>
        <label for="authorizedAgent">
            Authorized Agent: <input type="text" id="authorizedAgent" placeholder="Enter agent's name">
        </label>
        <label for="contactNumber">
            Contact Telephone Number: <input type="tel" id="contactNumber" placeholder="Enter contact number">
        </label>
        <label for="mailingAddress">
            Mailing Address: <input type="text" id="mailingAddress" placeholder="Enter mailing address">
        </label>
    </fieldset>
</fieldset>
