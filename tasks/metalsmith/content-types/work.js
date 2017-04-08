// Schema for Works
module.exports = {
  name: {
    singular: 'Work',
    plural: 'Works'
  },
  slug: {
    singular: 'work',
    plural: 'works'
  },
  contentfulId: 'work',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'date',
    reverse: true
  },
  createPage: true,
  pagination: {
    perPage: 25
  }
}
