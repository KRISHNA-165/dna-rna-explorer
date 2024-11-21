document.addEventListener("DOMContentLoaded", () => {
    const viewer = Jmol.getApplet("jsmolContainer", {
        height: "400",
        width: "400",
        use: "HTML5",
    });

    // Load initial structure
    Jmol.script(viewer, "load https://files.rcsb.org/download/1BNA.pdb");

    // Update structure on selection change
    document.getElementById("structureSelector").addEventListener("change", (event) => {
        const selectedStructure = event.target.value;
        Jmol.script(viewer, `load https://files.rcsb.org/download/${selectedStructure}.pdb`);
    });
});
