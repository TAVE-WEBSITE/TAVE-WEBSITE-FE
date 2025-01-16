import client from './client';

export const getProject = async () => {
    try {
        const response = await client.get('/normal/project');
        
        return response.data.result;
    } catch (error) {
        console.error('프로젝트 조회 에러', error);
    }
};
