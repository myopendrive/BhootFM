//////////////////////////////////////////////////////////
//                                                      //
//      DON'T EDIT ANYTHING - STRONGLY PROHIBITED       //
//                                                      //
//////////////////////////////////////////////////////////

// Function to create and organize buttons by categories
function createButtons() {
    const container = document.getElementById('button-container');
    const categories = {};

    // GitHub details
    const userName = `myopendrive`;
    const repoName = `BhootFM`;

    // Group buttons by category
    buttons.forEach(button => {
        if (button.hidden) return;
        if (!categories[button.category]) categories[button.category] = [];
        categories[button.category].push(button);
    });

    // Sort categories based on categoryOrder
    categoryOrder.forEach(category => {
        if (!categories[category]) return;

        const categorySection = document.createElement('section');
        categorySection.className = 'mb-4';

        // Category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryTitle.className = 'my-3';
        categoryTitle.style.textAlign = 'left';
        categorySection.appendChild(categoryTitle);

        // Each button area
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'row px-2 g-3';

        categories[category].forEach(button => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-6 col-sm-12';

            // Create button row with two columns
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row d-flex align-items-center m-1 py-1 single-item';

            // Label column
            const labelCol = document.createElement('div');
            labelCol.className = 'col';
            const label = document.createElement('span');
            label.textContent = `BhootFM @ ${button.label}`;
            labelCol.appendChild(label);

            // Button column
            const buttonCol = document.createElement('div');
            buttonCol.className = 'col-auto';

            // Generate the file URL dynamically
            const fileUrl = `https://github.com/${userName}/${repoName}/releases/download/${button.path}/${button.id}.mp3`;

            // Custom download button
            const downloadButton = document.createElement('div');
            downloadButton.className = 'button';
            downloadButton.setAttribute('data-tooltip', `Size: ${button.size} MB`);
            downloadButton.onclick = () => {
                window.location.href = fileUrl;
            };

            const buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'button-wrapper';

            const textDiv = document.createElement('div');
            textDiv.className = 'text';
            textDiv.textContent = 'Download';

            const iconSpan = document.createElement('span');
            iconSpan.className = 'icon';
            iconSpan.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                </svg>`;

            // Assemble button structure
            buttonWrapper.appendChild(textDiv);
            buttonWrapper.appendChild(iconSpan);
            buttonCol.appendChild(downloadButton);
            downloadButton.appendChild(buttonWrapper);

            // Append columns to row
            rowDiv.appendChild(labelCol);
            rowDiv.appendChild(buttonCol);

            colDiv.appendChild(rowDiv);
            buttonContainer.appendChild(colDiv);
        });

        categorySection.appendChild(buttonContainer);
        container.appendChild(categorySection);
    });
}


// Initialize buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    createButtons();
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Fetch user's public IP address using ipinfo.io
let userIP = "Fetching...";

function fetchIPDetails() {
    fetch(`https://ipinfo.io/json`)
        .then(response => response.json())
        .then(ipinfo => {
            userIP = ipinfo.ip || "N/A";
            console.log(`  
🛜 User IP: ${userIP}  
🌍 Country: ${ipinfo.country || "N/A"}  
🏙️ Region: ${ipinfo.region || "N/A"}  
📍 City: ${ipinfo.city || "N/A"}  
📮 ZIP Code: ${ipinfo.postal || "N/A"}  
📌 Location: ${ipinfo.loc || "N/A"}  
🕰️ Timezone: ${ipinfo.timezone || "N/A"}  
📡 ISP: ${ipinfo.org || "N/A"}  
            `);
        })
        .catch(error => {
            userIP = "N/A";
            console.error("❌ Error fetching IP details:", error);
        });
}

fetchIPDetails();

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Auto-update copyright year,
setInterval(() => {
    document.querySelector("#copyright").innerHTML = `&copy; ${new Date().getFullYear()} - Radio Foorti 88.0 FM - Bhoot FM`;
}, 1000);

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
