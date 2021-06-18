export interface memberProps {
  _id: string;
  parameters: any[];
  provider: string;
  phone: string;
  name: string;
  email: string;
  license: string;
  refreshToken: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
  profileThumbnail: string;
  config:
    | {
        isRating?: boolean;
        isSession?: boolean;
        isStatistics?: boolean;
      }
    | undefined;
}

export interface botTemplateProps {
  _id: string;
  use: boolean;
  dcPrice: number;
  dec: string;
  image: any;
  isEvent: boolean;
  level: number;
  name: string;
  price: number;
  state: string;
  templateBotId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface scenarioTemplateProps {
  _id: string;
  use: boolean;
  dcPrice: number;
  dec: string;
  image: any;
  isEvent: boolean;
  level: number;
  name: string;
  price: number;
  state: string;
  templateScenarioId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface blockTemplateProps {
  category: string;
  list: blockItemProps[];
}
export interface blockItemProps {
  _id: string;
  item_name: string;
  level: number;
  action_name: string;
}
