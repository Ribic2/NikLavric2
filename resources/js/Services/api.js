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
    }   

}