type Comment = {
    comment_id: number,
    parent_id: number,
    uuid: string,
    comment: string,
    created_at: string,
    updated_at: string,
    delete_flg: number
}

export default Comment;