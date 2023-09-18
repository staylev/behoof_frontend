import {InMemoryCache, Reference} from "@apollo/client";

function createMergeForKeyArgs(keyArgs) {
    return {
        keyArgs: keyArgs,
        merge(existing, incoming) {
            let edges: Reference[] = [];

            if (existing && existing.edges) {
                edges = edges.concat(existing.edges);
            }
            if (incoming && incoming.edges) {
                edges = edges.concat(incoming.edges);
            }

            if (JSON.stringify(existing) === JSON.stringify(incoming)) {
                return existing;
            }

            return {
                ...incoming,
                edges,
            };
        },
    };
}

export const cacheGraphQL = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                allPromotions: createMergeForKeyArgs(["first"]),
            },
        },
    },
})