import {FastifyInstance, FastifyRequest} from "fastify";
import {listPartners, partnerSchema} from "../../data";
import {authenticate, getMaybeAuthorizedForPartnerId} from "../authentication";

export async function listPartnerRoutes(fastify: FastifyInstance) {

    const response = {
        200: {
            type: "array",
            items: partnerSchema.partner
        }
    }

    const schema = {
        description: "List of partners",
        tags: ["partner"],
        summary: "",
        response,
        security: [
            {
                apiKey: [] as string[]
            }
        ]
    };

    fastify.get(
        "/",
        {
            schema,
            preHandler: authenticate(fastify),
            async handler(request: FastifyRequest, response) {
                const authorizedPartnerId = getMaybeAuthorizedForPartnerId();
                response.send(
                    await listPartners({
                        authorizedPartnerId
                    })
                );
            }
        }
    );
}

