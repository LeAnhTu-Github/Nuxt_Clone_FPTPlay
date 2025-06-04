export type Bundle = {
    id: number
    name: string
    price: number
    image: string
    duration: number
    devices: number
    features: {
        [key: string]: boolean
    }
}
