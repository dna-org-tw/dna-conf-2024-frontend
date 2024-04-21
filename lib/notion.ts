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

export const getSessions = async () => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const pages = await notion.databases.query({ database_id: "9e5ad6893ac742e88779db8dc7bdc59c" }) as any as NotionResponse;
  return transformSessionData(pages.results as any as InputPage[]);
}

interface InputPage {
  properties: {
    title_zh: { title: { text: { content: string } }[] };
    title_en: { rich_text: { text: { content: string } }[] };
    location_zh: { multi_select: { name: string }[] };
    location_en: { multi_select: { name: string }[] };
    tags_zh: { multi_select: { name: string }[] };
    tags_en: { multi_select: { name: string }[] };
    status: { select?: { name: string } };
    time_slots: {multi_select: {name: string}[]};
    speaker_zh: { rich_text: { text: { content: string } }[] };
    speaker_en: { rich_text: { text: { content: string } }[] };
    color: { select?: { name: string } };
  };
}

interface OutputPage {
  title: { zh: string; en: string };
  location: { zh: string; en: string };
  tags: { zh: string[]; en: string[] };
  speaker: { zh: string; en: string };
  color?: string;
}

function transformSessionData(input: InputPage[]): OutputPage[] {
  return input.map((page) => ({
    title: {
      zh: page.properties.title_zh.title.map(t => t.text.content).join(''),
      en: page.properties.title_en.rich_text.map(t => t.text.content).join(''),
    },
    location: {
      zh: page.properties.location_zh.multi_select.map(l => l.name).join(', '),
      en: page.properties.location_en.multi_select.map(l => l.name).join(', '),
    },
    tags: {
      zh: page.properties.tags_zh.multi_select.map(t => t.name),
      en: page.properties.tags_en.multi_select.map(t => t.name),
    },
    speaker: {
      zh: page.properties.speaker_zh.rich_text.map(s => s.text.content).join(''),
      en: page.properties.speaker_en.rich_text.map(s => s.text.content).join(''),
    },
    status: page.properties.status.select?.name,
    timeSlots: page.properties.time_slots.multi_select.map(t => t.name),
    color: page.properties.color.select?.name,
  }));
}
