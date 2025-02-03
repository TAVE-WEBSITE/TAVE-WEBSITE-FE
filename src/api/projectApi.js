
import client from './client';

export async function getProject(page = 0, size = 1000)  {
    try {
        const response = await client.get(`/normal/project?page=${page}&size=${size}`);
        // console.log('프로젝트 API 응답:', response.data); 
        return response.data;
    } catch (error) {
        console.error('프로젝트 조회 에러', error);
    }
};
