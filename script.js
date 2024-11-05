document.addEventListener("DOMContentLoaded", function() {
    const centerNode = document.querySelector('.center-node');
    const nodes = document.querySelectorAll('.node:not(.center-node)');
    const svg = document.querySelector('.connections');

    const radius = 200; // Distance from center node
    const centerX = centerNode.offsetLeft + centerNode.offsetWidth / 2;
    const centerY = centerNode.offsetTop + centerNode.offsetHeight / 2;

    // Position each node in a circular layout and draw connecting lines
    nodes.forEach((node, index) => {
        const angle = (index / nodes.length) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - node.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - node.offsetHeight / 2;

        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        node.textContent = node.getAttribute('data-label');

        // Draw curved line from center node to this node
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const controlX = (centerX + x) / 2 + 50 * Math.cos(angle + Math.PI / 2);
        const controlY = (centerY + y) / 2 + 50 * Math.sin(angle + Math.PI / 2);

        path.setAttribute("d", `M ${centerX} ${centerY} Q ${controlX} ${controlY} ${x + node.offsetWidth / 2} ${y + node.offsetHeight / 2}`);
        path.setAttribute("stroke", "#007BFF");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");

        svg.appendChild(path);
    });
});