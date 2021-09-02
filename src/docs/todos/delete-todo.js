module.exports = {
    // operation's method.
    delete: {
      tags: ["Todo CRUD operations"], // operation's tag
      description: "Deleting a todo", // short desc
      operationId: "deleteTodo", // unique operation id
      parameters: [
        // expected parameters
        {
          name: "id", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/id", // id model
          },
          required: true, // mandatory
          description: "Deleting a done todo", // param desc
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Todo deleted successfully", // response desc
        },
        // response code
        404: {
          description: "Todo not found", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };