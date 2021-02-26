export interface Tag {
  name: string;
}
export interface WeBetEvent {
  name: string;
  start_time: string;
  end_time: string;
  tags: Tag[];
}

export interface Player {
  first_name: string;
  last_name: string;
  prefix: string;
  suffix: string;
  version: number;
  tags: Tag;
}

export interface EventPlayer {
  event: WeBetEvent;
  player: Player;
}

export interface Team {
  name: string;
  members: Player[];
}

export interface Membership {
  team: Team;
  player: Player;
  position: number;
}

export interface EventTeam {
  event: WeBetEvent;
  name: string;
  members: EventPlayer;
}

export interface EventTeamMembership {
  team: Team;
  player: Player;
  position: number;
}

export interface User {}

export interface EventUser {
  event: WeBetEvent;
  user: User;
  bucks: number;
}

export interface Match {
  event: WeBetEvent;
  name: string;
  start_time: string;
  status: string;
  bet_type: string;
  notes: string;
  results: {};
}

export interface MatchTeam {
  match: Match;
  team: Team;
}

export interface MatchPlayer {
  match: Match;
  player: Player;
}

export interface Bet {
  match: Match;
  user: User;
  amount: number;
  prediction: {};
}
