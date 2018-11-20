export type PROJECT = {
    id: number,
    name: string,
    devDeadline: Date,
    prodDeadline: Date,
    description: string,
    rating: 'pending' | number
}