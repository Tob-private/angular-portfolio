export interface GoalType {
    id: string
    title: string
    desc: string
    image: string
}

export interface InterestType extends GoalType{}

export interface EducationType extends GoalType {
    duration: string
}

export interface ExperienceType extends GoalType {
    duration: string
}

export type RandomFactType = Array<string>