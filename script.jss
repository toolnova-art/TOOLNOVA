const toolList = [
    {
        name: "Word Counter",
        description: "Count words, characters and sentences.",
        url: "word-counter.html"
    },
    {
        name: "Percentage Calculator",
        description: "Calculate percentages quickly.",
        url: "percentage-calculator.html"
    },
    {
        name: "Case Converter",
        description: "Convert text to uppercase or lowercase.",
        url: "case-converter.html"
    },
    {
        name: "Email Generator",
        description: "Create a draft email from your details.",
        url: "email-generator.html"
    },
    {
        name: "Caption Generator",
        description: "Generate caption ideas for social posts.",
        url: "caption-generator.html"
    },
    {
        name: "Bio Generator",
        description: "Create a short profile bio.",
        url: "bio-generator.html"
    }
];

function searchTools() {
    const input = document.getElementById("toolSearch");
    const results = document.getElementById("searchResults");

    if (!input || !results) return;

    const query = input.value.trim().toLowerCase();
    results.innerHTML = "";

    if (!query) {
        results.classList.add("hidden");
        return;
    }

    const matches = toolList.filter(tool =>
        (tool.name + " " + tool.description)
            .toLowerCase()
            .includes(query)
    );

    results.classList.remove("hidden");

    if (matches.length === 0) {
        results.textContent = "No tools found. Try another search.";
        return;
    }

    matches.forEach(tool => {
        const link = document.createElement("a");
        link.className = "tool-card";
        link.href = tool.url;

        const title = document.createElement("h3");
        title.textContent = tool.name;

        const description = document.createElement("p");
        description.textContent = tool.description;

        link.append(title, description);
        results.appendChild(link);
    });
}
