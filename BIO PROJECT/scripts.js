document.addEventListener("DOMContentLoaded", () => {
    Jmol.getApplet("jsmolContainer", {
        script: "load https://files.rcsb.org/download/1BNA.pdb",
        height: "400",
        width: "400",
        use: "HTML5",
    });
});
