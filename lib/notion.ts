import { Client } from "@notionhq/client";

interface SocialMediaLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface Speaker {
  order?: number;
  id: string;
  title: string;
  name: string;
  bio: { "zh-TW": string; "en-US": string };
  photo?: string;
  socialMedia: SocialMediaLinks;
  sessionIDs: string[];
}

interface QuerySessionsResult {
  results: SessionInNotion[];
}

interface QuerySpeakersResult {
  results: SpeakerInNotion[];
}

interface SpeakerInNotion {
  id: string;
  properties: {
    order: { number: number };
    title: { title: { plain_text: string }[] };
    name: { rich_text: { plain_text: string }[] };
    bio: { rich_text: { plain_text: string }[] };
    bio_en: { rich_text: { plain_text: string }[] };
    "photo url": { url: string };
    facebook: { url: string };
    instagram: { url: string };
    linkedin: { url: string };
    twitter: { url: string };
    Website: { url: string };
    sessions: { relation: { id: string }[] };
  };
}

interface SessionInNotion {
  id: string;
  properties: {
    title_zh: { title: { text: { content: string } }[] };
    title_en: { rich_text: { text: { content: string } }[] };
    description_zh: { rich_text: { plain_text: string }[] };
    description_en: { rich_text: { plain_text: string }[] };
    location_zh: { multi_select: { name: string }[] };
    location_en: { multi_select: { name: string }[] };
    tags_zh: { multi_select: { name: string }[] };
    tags_en: { multi_select: { name: string }[] };
    status: { select: { name: string } };
    time_slots: { multi_select: { name: string }[] };
    time_section: { select: { name: string } };
    speakers: { relation: { id: string }[] };
    color: { select: { name: string } };
    order: { number: number };
  };
}

export interface Session {
  id: string;
  title: { "zh-TW": string; "en-US": string };
  description: { "zh-TW": string; "en-US": string };
  location: { "zh-TW": string; "en-US": string };
  tags: { "zh-TW": string[]; "en-US": string[] };
  status: string;
  timeSlots: string[];
  timeSection: string;
  color?: string;
  order?: number;
  speakerIDs: string[];
}

function extractProperty(property: any): any {
  switch (property.type) {
    case "title":
    case "rich_text":
      return property[property.type]
        .map((text: any) => text.plain_text)
        .join("");
    case "url":
      return property[property.type];
    case "multi_select":
      return property[property.type].map((select: any) => select.name);
    case "select":
      return property[property.type]?.name;
    default:
      return undefined;
  }
}

export const getSpeakers = async () => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const pages = (await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  })) as any as QuerySpeakersResult;
  const speakerIDs: string[] = pages.results.map((page) => page.id);
  return (await Promise.all(
    speakerIDs.map((speakerId) => getSpeaker(speakerId))
  )).sort((a, b) => a.order! - b.order!);
};

export const getSpeaker = async (speakerId: string) => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const page = (await notion.pages.retrieve({
    page_id: speakerId,
  })) as any as SpeakerInNotion;
  const properties = page.properties;
  const speakerInfo: Speaker = {
    order: properties.order?.number || 999,
    id: speakerId,
    title: extractProperty(properties.title),
    name: extractProperty(properties.name),
    bio: {
      "zh-TW": extractProperty(properties.bio),
      "en-US": extractProperty(properties["bio_en"]),
    },
    photo: extractProperty(properties["photo url"]),
    sessionIDs: properties.sessions.relation.map((s: any) => s.id),
    socialMedia: {
      facebook: extractProperty(properties.facebook),
      instagram: extractProperty(properties.instagram),
      linkedin: extractProperty(properties.linkedin),
      twitter: extractProperty(properties.twitter),
      website: extractProperty(properties.Website),
    },
  };
  return speakerInfo;
};

export const getSessions = async () => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const pages = (await notion.databases.query({
    database_id: "9e5ad6893ac742e88779db8dc7bdc59c",
  })) as any as QuerySessionsResult;
  return pages.results.map(transformSessionFromNotion) as Session[];
};

export const getSession = async (sessionId: string) => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const page = (await notion.pages.retrieve({
    page_id: sessionId,
  })) as any as SessionInNotion;
  return transformSessionFromNotion(page);
};

const transformSessionFromNotion = (page: SessionInNotion) => {
  return {
    id: page.id,
    title: {
      "zh-TW": page.properties.title_zh.title
        .map((t) => t.text.content)
        .join(""),
      "en-US": page.properties.title_en.rich_text
        .map((t) => t.text.content)
        .join(""),
    },
    location: {
      "zh-TW": page.properties.location_zh.multi_select
        .map((l) => l.name)
        .join(", "),
      "en-US": page.properties.location_en.multi_select
        .map((l) => l.name)
        .join(", "),
    },
    tags: {
      "zh-TW": page.properties.tags_zh.multi_select.map((t) => t.name),
      "en-US": page.properties.tags_en.multi_select.map((t) => t.name),
    },
    status: page.properties.status.select?.name,
    timeSlots: page.properties.time_slots.multi_select.map((t) => t.name),
    timeSection: page.properties.time_section.select?.name,
    color: page.properties.color.select?.name,
    order: page.properties.order.number,
    speakerIDs: page.properties.speakers.relation.map((s) => s.id),
    description: {
      "zh-TW": page.properties.description_zh.rich_text
        .map((t) => t.plain_text)
        .join(""),
      "en-US": page.properties.description_en.rich_text
        .map((t) => t.plain_text)
        .join(""),
    },
  } as Session;
};
