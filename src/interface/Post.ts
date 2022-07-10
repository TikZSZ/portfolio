export interface Post{
  id:string,
  name:string,
  description:string,
  isOwner:boolean,
  dateCreated:any,
  content:number,
}

export interface PostWithAuthor extends Post{
  user:{
    avatar:string,
    name:string,
    id:string
  },
  contentId:number
}