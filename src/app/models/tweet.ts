export interface Tweet {

    created_at: string,
    id: number,
    id_str: string,
    text: string,
    truncated: false,
    entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
            {
                screen_name: string,
                name: string,
                id: number,
                id_str: string,
                indices: []
            },
            {
                screen_name: string,
                name:string,
                id: number,
                id_str:string,
                indices: []
            }
        ],
        urls: []
    }          
}