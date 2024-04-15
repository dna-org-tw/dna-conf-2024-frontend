import {Client} from "@notionhq/client";

interface NotionUser {
  object: string;
  id: string;
}

interface NotionDatabaseParent {
  type: string;
  database_id: string;
}

interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: any;
  icon: any;
  parent: NotionDatabaseParent;
  archived: boolean;
  in_trash: boolean;
  properties: {
    [key: string]: {
      id: string;
      type: string;
      [key: string]: any;
    };
  };
  url: string;
  public_url?: string;
}

interface NotionResponse {
  object: string;
  results: NotionPage[];
  next_cursor?: string;
  has_more: boolean;
}

interface SocialMediaLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface SpeakerInfo {
  title: string;
  name: string;
  bio: string;
  photo?: string;
  socialMedia: SocialMediaLinks;
}

interface SessionInfo {
  title: string;
  room?: string;
  description: string;
  hashTags: string[];
}

interface ConferenceSpeaker {
  speakerInfo: SpeakerInfo;
  session: SessionInfo;
}

function extractProperty(property: any): any {
  switch (property.type) {
    case 'title':
    case 'rich_text':
      return property[property.type].map((text: any) => text.plain_text).join('');
    case 'url':
      return property[property.type];
    case 'multi_select':
      return property[property.type].map((select: any) => select.name);
    case 'select':
      return property[property.type]?.name;
    default:
      return undefined;
  }
}

function transformToConferenceSpeakers(notionResponse: NotionResponse): ConferenceSpeaker[] {
  return notionResponse.results.map(page => {
    const properties = page.properties;
    const speakerInfo: SpeakerInfo = {
      title: extractProperty(properties.title),
      name: extractProperty(properties.name),
      bio: extractProperty(properties.bio),
      photo: extractProperty(properties['photo url']),
      socialMedia: {
        facebook: extractProperty(properties.facebook),
        instagram: extractProperty(properties.instagram),
        linkedin: extractProperty(properties.linkedin),
        twitter: extractProperty(properties.twitter),
        website: extractProperty(properties.Website),
      }
    };

    const sessionInfo: SessionInfo = {
      title: extractProperty(properties['session title']),
      room: extractProperty(properties['session room']),
      description: extractProperty(properties['session description']),
      hashTags: extractProperty(properties['session tags']),
    };

    return {
      speakerInfo,
      session: sessionInfo
    };
  });
}

export const getSpeakers = async () => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const pages = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID! }) as any as NotionResponse;
  return transformToConferenceSpeakers(pages);
}

