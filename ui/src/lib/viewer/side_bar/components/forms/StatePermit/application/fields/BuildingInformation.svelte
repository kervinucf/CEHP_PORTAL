<script>
    let units = [{ id: 1 }];

    function addNewStructure() {
        if (units.length < 4) {
            let newId = units.length + 1;
            units = [...units, { id: newId }];
        }
    }

    function removeStructure(unitId) {
        if (units.length > 1) {
            units = units.filter(unit => unit.id !== unitId);
            // Reorder the units after removal
            units.forEach((unit, index) => {
                unit.id = index + 1;
            });
        }
    }
</script>

<fieldset>
    <legend>Building Information</legend>

    <fieldset>
        <legend class="inner">Building Designation</legend>
        <label for="residential">
            <input type="radio" value="A" name="buildingType" id="residential"> Residential
        </label>
        <label for="commercial">
            <input type="radio" value="B" name="buildingType" id="commercial"> Commercial
        </label>
    </fieldset>

    <fieldset>
        <legend class="inner">Structures on Property</legend>

        {#each units as unit}
            <fieldset class="multi">
                <legend class="multi">Unit No. {unit.id}</legend>
                <label for={`typeEstablishment${unit.id}`}>
                    Type of Establishment: <input type="text" id={`typeEstablishment${unit.id}`} placeholder="Type of Establishment">
                </label>
                <label for={`numberOfFloors${unit.id}`}>
                    Number of Floors: <input type="text" id={`numberOfFloors${unit.id}`} placeholder="Number of Floors">
                </label>
                <label for={`buildingArea${unit.id}`}>
                    Building Area Sqft: <input type="text" id={`buildingArea${unit.id}`} placeholder="Building Area Sqft">
                </label>
                <label for={`mailingAddress${unit.id}`}>
                    Mailing Address: <input type="text" id={`mailingAddress${unit.id}`} placeholder="Mailing Address">
                </label>
                <label for={`systemDesign${unit.id}`}>
                    Commercial/Institutional System Design: <input type="text" id={`systemDesign${unit.id}`} placeholder="Commercial/Institutional System Design">
                </label>
                {#if units.length > 1}
                    <button type="button" on:click={() => removeStructure(unit.id)}>Remove This Structure</button>
                {/if}
            </fieldset>
        {/each}

        <div style="display: flex">
            {#if units.length < 4}
            <button style="margin: auto;border-radius: .25rem" type="button" on:click={addNewStructure}>Add New Structure</button>
        {/if}
        </div>
        <p></p>
        <label for="floorDrains">
            <input type="radio" value="C" name="additionalFeature" id="floorDrains"> Floor/Equipment Drains
        </label>
        <label for="otherFeature">
            <input type="radio" value="D" name="additionalFeature" id="otherFeature"> Other
            <input type="text" id="otherFeatureSpecify" placeholder="Specify">
        </label>
    </fieldset>
</fieldset>
