import client from './client';

export const getPublicReview = async () => {
    try {
        const response = await client.get('/normal/review');
        return response.data.result;
    } catch (error) {
        console.error('공개 후기 조회 에러', error);
    }
};

export const getPublicHistory = async () => {
    try {
        const response = await client.get('/normal/history');
        return response.data.result;
    } catch (error) {
        console.error('공개 이력 조회 에러', error);
    }
};
