async function fetchStructureInfo(pdbId) {
    const response = await fetch(`https://data.rcsb.org/rest/v1/core/entry/${pdbId}`);
    const data = await response.json();
    console.log(data); // Display fetched information in the console
    document.getElementById("structureDetails").innerText = `Title: ${data.title}`;
}
