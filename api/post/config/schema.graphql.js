const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  query: `
  postBySlug(id: ID, slug: String): Post
  `,
  resolver: {
    Query: {
      postBySlug: {
        description: 'Return a post by slug',
        resolverOf: 'Post.findOne',
        async resolver(_, { slug }) {
          console.log(slug);
          // ctx is the context of the Koa request.
          const entity = await strapi.services.post.findOne({ slug });
          return sanitizeEntity(entity, { model: strapi.models.post });
        }
      }
    }
  }
};
