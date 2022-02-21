import axios from 'axios'
import { AddForum } from '../../type/forum/index'
export async function addForumService(obj: AddForum){
    let data = {}
    await axios.post('/api/addForum',obj).then(res => {
        data = res
    })
    return data
}
export async function getForumService(){
    let data = {}
    await axios.get('/api/getForum').then(res => {
        data = res
    })
    return data
}