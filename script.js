document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');
    const resultsList = document.getElementById('resultsList');
    let clickedBlocks = [];

    // Generate 5x5 grid
    const columns = ['A', 'B', 'C', 'D', 'E'];
    for (let row = 1; row <= 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            const cellId = `${columns[col]}${row}`;
            cell.id = cellId;
            cell.textContent = cellId; // Add index to cell
            cell.addEventListener('click', () => {
                cell.classList.toggle('black');
                if (cell.classList.contains('black')) {
                    clickedBlocks.push(cellId);
                } else {
                    clickedBlocks = clickedBlocks.filter(id => id !== cellId);
                }
            });
            grid.appendChild(cell);
        }
    }

    // Submit button event listener
    submitButton.addEventListener('click', () => {
        const resultItem = document.createElement('li');
        resultItem.textContent = `Clicked Blocks: ${clickedBlocks.join(', ')}`;
        resultsList.appendChild(resultItem);
        const cells = document.querySelectorAll('.grid div');
        cells.forEach(cell => cell.classList.remove('black'));
        clickedBlocks = [];
    });

    // Reset button event listener
    resetButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.grid div');
        cells.forEach(cell => cell.classList.remove('black'));
        clickedBlocks = [];
    });
});
