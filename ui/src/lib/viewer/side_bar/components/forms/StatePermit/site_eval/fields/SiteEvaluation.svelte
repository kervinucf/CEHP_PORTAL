<script>
let soilProfile1 = [{ id: 1 }];
let soilProfile2 = [{ id: 1 }];

function addLineItem(profileIdentifier) {
    let profile = profileIdentifier === 'profile1' ? soilProfile1 : soilProfile2;

    if (profile.length < 9) {
        let newId = profile.length + 1;
        profile.push({ id: newId });
    }

    // Update the global array
    if (profileIdentifier === 'profile1') {
        soilProfile1 = profile;
    } else {
        soilProfile2 = profile;
    }
}

function removeLineItem(profileIdentifier, profileId) {
    let profile = profileIdentifier === 'profile1' ? soilProfile1 : soilProfile2;
    let indexToRemove = profile.findIndex(item => item.id === profileId);

    if (indexToRemove !== -1) {
        profile.splice(indexToRemove, 1);
    }

    // Reassign IDs
    profile.forEach((item, index) => {
        item.id = index + 1;
    });

    // Update the global array
    if (profileIdentifier === 'profile1') {
        soilProfile1 = profile;
    } else {
        soilProfile2 = profile;
    }
}

</script>


<fieldset>
    <legend>Site Evaluation</legend>

        <label for="propertySizeConforms">
            Property Size Conforms to Site Plan
            <select id="propertySizeConforms" name="propertySizeConforms">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </label>
        <label for="netUsableArea">
            Net Usable Area Available: <input type="text" id="netUsableArea" name="netUsableArea" placeholder="Net Usable Area">
        </label>
        <label for="totalEstimatedSewageFlow">
            Total Estimated Sewage Flow: <input type="text" id="totalEstimatedSewageFlow" name="totalEstimatedSewageFlow" placeholder="Total Estimated Sewage Flow">
        </label>
        <label for="sewageFlowBased">
            Residences-Table 1 or Other-Table 2
            <select id="sewageFlowBased" name="sewageFlowBased">
                <option value="residencesTable1">Residences-Table 1</option>
                <option value="otherTable2">Other-Table 2</option>
            </select>
        </label>
        <label for="authorizedSewageFlow">
            Authorized Sewage Flow: <input type="text" id="authorizedSewageFlow" name="authorizedSewageFlow" placeholder="Authorized Sewage Flow">
        </label>
        <label for="gpdPerAcre">
            1500 GPD/Acre or 2500 GPD/Acre
            <select id="gpdPerAcre" name="gpdPerAcre">
                <option value="1500gpd">1500 GPD/Acre</option>
                <option value="2500gpd">2500 GPD/Acre</option>
            </select>
        </label>
        <label for="unobstructedAreaAvailable">
            Unobstructed Area Available: <input type="text" id="unobstructedAreaAvailable" name="unobstructedAreaAvailable" placeholder="Unobstructed Area Available">
        </label>
        <label for="unobstructedAreaRequired">
            Unobstructed Area Required: <input type="text" id="unobstructedAreaRequired" name="unobstructedAreaRequired" placeholder="Unobstructed Area Required">
        </label>
        <label for="benchmarkReference">
            Benchmark/Reference Point Location: <input type="text" id="benchmarkReference" name="benchmarkReference" placeholder="Benchmark/Reference Point Location">
        </label>

            <label for="proposedSystemSiteElevation">
                Elevation of Proposed System Site: <input type="text" id="proposedSystemSiteElevation" name="proposedSystemSiteElevation" placeholder="Elevation of Proposed System Site">
            </label>
            <label for="elevationUnit">
                <select id="elevationUnit" name="elevationUnit">
                    <option value="inches">Inches</option>
                    <option value="feet">Feet</option>
                </select>
            </label>
            <label for="elevationRelativeTo">
                <select id="elevationRelativeTo" name="elevationRelativeTo">
                    <option value="above">Above</option>
                    <option value="below">Below</option>
                </select>
            </label>

<fieldset >
        <label for="normallyWet">
            Normally Wet?
            <select id="normallyWet" name="normallyWet">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </label>
        <label for="surfaceWater">
            Surface Water: <input type="text" id="surfaceWater" name="surfaceWater" placeholder="Surface Water">
        </label>
        <label for="ditchesSwales">
            Ditches/Swales: <input type="text" id="ditchesSwales" name="ditchesSwales" placeholder="Ditches/Swales">
        </label>

            <label for="publicWell">
                Public Well: <input type="text" id="publicWell" name="publicWell" placeholder="Public">
            </label>
            <label for="limitedUseWell">
                Limited Use Well: <input type="text" id="limitedUseWell" name="limitedUseWell" placeholder="Limited Use">
            </label>
            <label for="privateWell">
                Private Well: <input type="text" id="privateWell" name="privateWell" placeholder="Private">
            </label>
            <label for="nonPotableWell">
                Non-Potable Well: <input type="text" id="nonPotableWell" name="nonPotableWell" placeholder="Non-Potable">
            </label>

        <label for="buildingFoundations">
            Building Foundations: <input type="text" id="buildingFoundations" name="buildingFoundations" placeholder="Building Foundations">
        </label>
        <label for="propertyLines">
            Property Lines: <input type="text" id="propertyLines" name="propertyLines" placeholder="Property Lines">
        </label>
        <label for="potableWaterLines">
            Potable Water Lines: <input type="text" id="potableWaterLines" name="potableWaterLines" placeholder="Potable Water Lines">
        </label>
    </fieldset>

    <fieldset >
        <label for="frequentFlooding">
            Site Subject to Frequent Flooding:
            <select id="frequentFlooding" name="frequentFlooding">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </label>
        <label for="floodElevation">
            10 Year Flood Elevation For Site: <input type="text" id="floodElevation" name="floodElevation" placeholder="10 Year Flood Elevation For Site">
        </label>
        <label for="tenYearFlooding">
            10 Year Flooding?
            <select id="tenYearFlooding" name="tenYearFlooding">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </label>
        <label for="siteElevation">
            Site Elevation: <input type="text" id="siteElevation" name="siteElevation" placeholder="Site Elevation">
        </label>
    </fieldset>

<fieldset>
    <legend>Soil Profile Information Site 1</legend>
    {#each soilProfile1 as line}
                    <fieldset class="multi">

         <div class="soilLineItem">
                <label for={`color${line.id}_1`}>
                    Munsell #/Color: <input type="text" id={`color${line.id}_1`} name={`color${line.id}_1`} placeholder="Munsell #/Color">
                </label>
                <label for={`texture${line.id}_1`}>
                    Texture: <input type="text" id={`texture${line.id}_1`} name={`texture${line.id}_1`} placeholder="Texture">
                </label>
                <label for={`depthFrom${line.id}_1`}>
                    Depth From: <input type="text" id={`depthFrom${line.id}_1`} name={`depthFrom${line.id}_1`} placeholder="From">
                </label>
                <label for={`depthTo${line.id}_1`}>
                    Depth To: <input type="text" id={`depthTo${line.id}_1`} name={`depthTo${line.id}_1`} placeholder="To">
                </label>
            </div>
        {#if soilProfile1.length > 1}
            <button on:click={() => removeLineItem("profile1", line.id)}>Remove Line Item</button>
        {/if}
                    </fieldset>
    {/each}
            <div style="display: flex">

    {#if soilProfile1.length < 9}
        <button style="margin: auto;border-radius: .25rem" on:click={() => addLineItem("profile1")}>Add Line Item</button>
    {/if}
            </div>
</fieldset>

<fieldset>
    <legend>Soil Profile Information Site 2</legend>
    {#each soilProfile2 as line}
            <fieldset class="multi">
         <div class="soilLineItem">
                <label for={`color${line.id}_1`}>
                    Munsell #/Color: <input type="text" id={`color${line.id}_1`} name={`color${line.id}_1`} placeholder="Munsell #/Color">
                </label>
                <label for={`texture${line.id}_1`}>
                    Texture: <input type="text" id={`texture${line.id}_1`} name={`texture${line.id}_1`} placeholder="Texture">
                </label>
                <label for={`depthFrom${line.id}_1`}>
                    Depth From: <input type="text" id={`depthFrom${line.id}_1`} name={`depthFrom${line.id}_1`} placeholder="From">
                </label>
                <label for={`depthTo${line.id}_1`}>
                    Depth To: <input type="text" id={`depthTo${line.id}_1`} name={`depthTo${line.id}_1`} placeholder="To">
                </label>
            </div>
        {#if soilProfile2.length > 1}
            <button on:click={() => removeLineItem("profile2", line.id)}>Remove Line Item</button>
        {/if}
            </fieldset>
    {/each}
            <div style="display: flex">

    {#if soilProfile2.length < 9}
        <button  style="margin: auto;border-radius: .25rem" on:click={() => addLineItem("profile2")}>Add Line Item</button>
    {/if}
            </div>
</fieldset>

    <fieldset >
            <label for="observedWaterTable">
                Observed Water Table: <input type="text" id="observedWaterTable" name="observedWaterTable" placeholder="Observed Water Table">
            </label>
            <label for="waterTablePosition">
                <select id="waterTablePosition" name="waterTablePosition">
                    <option value="above">Above</option>
                    <option value="below">Below</option>
                </select>
            </label>
            <label for="waterTableType">
                <select id="waterTableType" name="waterTableType">
                    <option value="perched">Perched</option>
                    <option value="apparent">Apparent</option>
                </select>
            </label>
            <label for="estimatedWaterTable">
                Estimated Water Table: <input type="text" id="estimatedWaterTable" name="estimatedWaterTable" placeholder="Estimated Water Table">
            </label>
            <label for="estimatedWaterTablePosition">
                <select id="estimatedWaterTablePosition" name="estimatedWaterTablePosition">
                    <option value="above">Above</option>
                    <option value="below">Below</option>
                </select>
            </label>
        <label for="highWaterTableVegetation">
            High Water Table Vegetation: 
            <select id="highWaterTableVegetation" name="highWaterTableVegetation">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </label>
        <label for="mottlingDepth">
            Mottling: 
            <select id="mottlingDepth" name="mottlingDepth">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            Depth: <input type="text" id="mottlingDepthInput" name="mottlingDepthInput" placeholder="Depth">
        </label>
        <label for="soilTextureLoadingRate">
            Soil Texture/Loading Rate For System Sizing: <input type="text" id="soilTextureLoadingRate" name="soilTextureLoadingRate" placeholder="Soil Texture/Loading Rate For System Sizing">
        </label>
        <label for="depthOfExcavation">
            Depth of Excavation: <input type="text" id="depthOfExcavation" name="depthOfExcavation" placeholder="Depth of Excavation">
        </label>

        <fieldset >
            <legend class="inner">Drainfield Configuration</legend>
            <label for="drainfieldTrench">
                <input type="radio" value="Trench" name="drainfieldConfig" id="drainfieldTrench"> Trench
            </label>
            <label for="drainfieldBed">
                <input type="radio" value="Bed" name="drainfieldConfig" id="drainfieldBed"> Bed
            </label>
            <label for="drainfieldOther">
                <input type="radio" value="Other" name="drainfieldConfig" id="drainfieldOther"> Other
                <input type="text" id="drainfieldOtherSpecify" name="drainfieldOtherSpecify" placeholder="Specify">
            </label>
        </fieldset>
    </fieldset>
</fieldset>
