import React from "react";

const BreadCrumbSchema = () => {
    const breadCrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: {
                    "@id": "https://www.lybrate.com",
                    "@type": "Thing",
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "type",
                item: {
                    "@id": "https://www.lybrate.com//questions",
                    "@type": "Thing",
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "health-feed",
                item: {
                    "@id": "https://www.lybrate.com/health-feed",
                    "@type": "Thing",
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Questions",
                item: {
                    "@id": "https://www.lybrate.com/pqr",
                    "@type": "Thing",
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "uestion",
                item: {
                    "@id": "https://www.lybrate.com/abc",
                    "@type": "Thing",
                },
            },
        ],
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumb) }} />;
};

export default BreadCrumbSchema;

// TO ASK
// Shouldn't the breadcrumbs be set dynamically via API.
