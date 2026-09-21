export const DNA_FB_LINK = "https://psee.io/5qfm8k";
export const PURCHASE_TICKET_LINK = "https://psee.io/5qfa4a";
export const GOLDCARD_INFO_LINK_ZH =
  "https://dna.oen.tw/posts/2g318FmSQRI6uJEzVOrSxtbYApo";
export const GOLDCARD_INFO_LINK_EN =
  "https://dna.oen.tw/posts/2g33EoSRmhQA5Umcq51QzOAfB2z";

export const ticketType = {
  single: "single",
  twoPerson: "twoPerson",
  fivePerson: "fivePerson",
  singleClassic: "singleClassic",
  vip: "vip",
} as const;
export type TicketType = (typeof ticketType)[keyof typeof ticketType];
