import client from "./client";

export async function getIsStarted() {
  try {
    const response = await client.get(`/member/apply-recruit/started`);
    return response.data;
  } catch (error) {
    console.error("에러 " , error);
    throw error;
  }
}

export async function postEmail(data) {
  try {
    const response = await client.post(`/normal/notification`, data);
    return response.data;
  } catch (error) {
    console.error("이메일 전송 실패:", error);
    throw error; // 에러를 다시 던져서 호출한 곳에서 catch 가능하도록
  }
}
