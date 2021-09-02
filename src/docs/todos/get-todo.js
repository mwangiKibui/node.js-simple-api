module.exports = {
    // operation's method
    get: {
      tags: ["Todo CRUD operations"], // operation's tag.
      description: "Get a todo", // operation's desc.
      operationId: "getTodo", // unique operation id
      parameters: [
        // expected params.
        {
          name: "id", // name of the param
          in: "path", // location of the param
          schema: {
            $ref: "#/components/schemas/id", // data model of the param
          },
          required: true, // Mandatory param
          description: "A single todo id", // param desc.
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Todo is obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Todo", // todo data model
              },
            },
          },
        },
        // response code
        404: {
          description: "Todo is not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", // error data model
              },
            },
          },
        },
      },
    },
  };