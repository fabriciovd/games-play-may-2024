import requester from "./requester"

const BASE_URL = "http://localhost:3030/jsonstore/games";

const buldUrl = (gameId)=>`${BASE_URL}/${gameId}/comments`

const create = (gameId, username, text)=>requester.post(buldUrl(gameId), {username, text});

const getAll = async(gameId)=>{
    const result = requester.get(buldUrl(gameId));
    const comments = Object.values(result);
    return comments;
}

export default {
    create,
    getAll,
}