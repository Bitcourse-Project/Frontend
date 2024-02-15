import axios, { AxiosResponse, AxiosError } from 'axios';

// API 응답 / 데이터 타입 정의
export interface ApiResponse {
    message: string;
}

// 에러 응답 / 데이터 타입 정의
export interface ApiError {
  message: string;
}

export const fetchChartData = async (apiKey: string, symbol: string, interval: string): Promise<ApiResponse[]> => {
  try {
    const apiUrl: string = `https://api.upbit.com/v1/candles/${interval}?market=${symbol}&count=30`;

    const response: AxiosResponse<ApiResponse[]> = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<ApiError> = error;
      // 에러 응답 처리
      throw new Error(`API Error: ${axiosError.response?.data?.message || axiosError.message}`);
    } else {
      // 에러 응답 처리
      throw new Error(`Error fetching chart data: ${error.message}`);
    }
  }
};
