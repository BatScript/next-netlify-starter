import React from "react";
import Head from "next/head";

const breadCrumb = [
    {
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
    },
];

const BreadCrumbSchema = () => {
    return (
        <Head>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumb) }} />
        </Head>
    );
};

export default BreadCrumbSchema;

// TO ASK
// Shouldn't the breadcrumbs be set dynamically via API.
