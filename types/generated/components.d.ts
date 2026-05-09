import type { Schema, Struct } from '@strapi/strapi';

export interface SharedGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_items';
  info: {
    displayName: 'gallery-item';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedParagraphSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraph_sections';
  info: {
    displayName: 'paragraph-section';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
        minLength: 50;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.gallery-item': SharedGalleryItem;
      'shared.paragraph-section': SharedParagraphSection;
    }
  }
}
