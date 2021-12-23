declare namespace Express {
    export interface Request {
       user?: {
           id?: string,
           avatar?: string,
           username?: string,
           email?: string,
       }
    }
 }
