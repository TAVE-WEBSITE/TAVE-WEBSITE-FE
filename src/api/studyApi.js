import client from './client';

export async function getStudy(page = 0, size = 1000)  {
    try {
        const response = await client.get(`/normal/study?page=${page}&size=${size}`);
        // console.log('스터디 API 응답:', response.data); 
        return response.data;
    } catch (error) {
        console.error('스터디 조회 에러', error);
    }
};
