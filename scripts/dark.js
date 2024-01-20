const darkModeButton = document.querySelector("#darkButton");

// Get all nodes that are descendants of body.
const allBodyNodes = document.querySelector("body").querySelectorAll("*");

darkModeButton.addEventListener("click", () => {
    allBodyNodes.forEach(node => {
        // Check if node is a text node to avoid errors from attempting to toggle class on a text node.
        if (node.nodeType != 3) { 
            node.classList.toggle("dark");
        }
    });
    document.querySelector("body").classList.toggle("dark");
});