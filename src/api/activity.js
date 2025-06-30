import client from './client';

export async function getSession(page = 0, size = 1000)  {
    try {
        const response = await client.get("/normal/session");
        // console.log('프로젝트 API 응답:', response.data); 
        return response.data;
    } catch (error) {
        console.error('세션 조회 에러', error);
    }
};
