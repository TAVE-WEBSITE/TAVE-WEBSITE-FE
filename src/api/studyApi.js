import client from "./client";

export const getStudy = async (pageNum, selectedCategory) => {
  try {
    const params = new URLSearchParams();
    if (pageNum) params.append("page", pageNum);
    if (selectedCategory !== "ALL") params.append("field", selectedCategory);

    const response = await client.get(`/normal/study?${params.toString()}`);
    return response.data.result; // API 응답 데이터 반환
  } catch (error) {
    console.error("스터디 데이터 조회 에러", error);
  }
};
