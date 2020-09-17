import axios from 'axios'

const instance = axios.create({
    baseUrl: '/',
})

export default {

    /**
     * Get all videos
     * @returns {AxiosInstance}
     */
    getVideos(){
        return instance.get('/api/videos')
    },

    /**
     * Get video data
     * @param {string} id
     * @returns {Promise<AxiosResponse<any>>}
     */
    getVideo(id){
        return instance.get('/api/videos/'+id)
    },

    /**
     * Deletes video from database
     * @param {number} id
     * @returns {AxiosInstance}
     */
    deleteVideo(id){
        return instance.delete('/api/videos/'+id)
    },

    /**
     * Modifys video data
     * @param {number} id
     */
    modifyVideo(id){
        return instance.patch('/api/videos/'+id)
    },

    /**
     * Attempts to login user
     * @param {string} username
     * @param {string} password
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(username, password){
        return instance.post('/api/login', {username: username, password: password})
    }



}
