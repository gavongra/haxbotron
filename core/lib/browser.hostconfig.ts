export interface BrowserHostRoomInitConfig {
    _LaunchDate: Date; // date of this room created
    _RUID: string; // room unique identifier for this game room
    _config: BrowserHostRoomConfig; // room config data for set this new room
    settings: BrowserHostRoomSettings; // room settings data for set options
    rules: BrowserHostRoomGameRule; // game playing rule
    HElo: BrowserHostRoomHEloConfig; // configuration for HElo rating and tier system
}

export interface BrowserHostRoomConfig {
    roomName: string
    playerName: string
    password?: string
    maxPlayers: number
    public: boolean
    token: string
    noPlayer: boolean
    geo?: {
        code: string
        lat: number
        lon: number
    }
}

export interface BrowserHostRoomGameRule {
    ruleName: string // rule name
    ruleDescription: string // simple description of this rule
    requisite: {
        minimumPlayers: number // minimum number of players needs for apply this rule
        eachTeamPlayers: number // how many players are need in each team?
        timeLimit: number // limit time for end the game
        scoreLimit: number // limit score for end the game
        teamLock: boolean // limit moving teams by self
    }
    autoAdmin: boolean // auto appoint admin
    autoOperating: boolean // auto emcee mode
    statsRecord: boolean // record game results on statistics system.
    defaultMapName: string // select default stadium name for the game.
    readyMapName: string // select stadium name for using until the game starts.
    customJSONOptions?: string // JSON stringified cumstom options.
}

export interface BrowserHostRoomSettings {
    maliciousBehaviourBanCriterion: number

    banVoteEnable : boolean
    banVoteBanMillisecs : number
    banVoteAllowMinimum : number
    banVoteExecuteMinimum : number

    afkCountLimit : number

    afkCommandAutoKick : boolean
    afkCommandAutoKickAllowMillisecs : number

    chatFiltering : boolean

    antiJoinFlood : boolean
    joinFloodAllowLimitation : number
    joinFloodIntervalMillisecs : number
    joinFloodBanMillisecs : number

    antiChatFlood : boolean
    chatFloodCriterion : number

    antiOgFlood : boolean
    ogFloodCriterion : number
    ogFloodBanMillisecs : number

    antiBanNoPermission : boolean
    banNoPermissionBanMillisecs : number

    antiInsufficientStartAbusing : boolean
    insufficientStartAllowLimitation : number
    insufficientStartAbusingBanMillisecs : number

    antiPlayerKickAbusing : boolean
    playerKickAllowLimitation : number
    playerKickIntervalMillisecs : number
    playerKickAbusingBanMillisecs : number

    antiAFKFlood : boolean
    antiAFKAbusing : boolean

    antiMuteAbusing : boolean
    muteAllowIntervalMillisecs : number
    muteDefaultMillisecs : number

    antiGameAbscond : boolean
    gameAbscondBanMillisecs : number
    gameAbscondRatingPenalty : number

    rerollWinStreak : boolean
    rerollWinstreakCriterion : number

    guaranteePlayingTime : boolean
    guaranteedPlayingTimeSeconds : number

    avatarOverridingByTier : boolean
}

export interface BrowserHostRoomHEloConfig {
    factor: {
        placement_match_chances: number
        factor_k_placement: number
        factor_k_normal: number
        facotr_k_replace: number
    }
    tier: {
        class_tier_1: number
        class_tier_2: number
        class_tier_3: number
        class_tier_4: number
        class_tier_5: number
        class_tier_6: number
        class_tier_7: number
        class_tier_8: number
        class_tier_9: number
    }
    avatar: {
        avatar_unknown: string
        avatar_tier_new: string
        avatar_tier_1: string
        avatar_tier_2: string
        avatar_tier_3: string
        avatar_tier_4: string
        avatar_tier_5: string
        avatar_tier_6: string
        avatar_tier_7: string
        avatar_tier_8: string
        avatar_tier_9: string
    }
}